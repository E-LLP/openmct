/*****************************************************************************
 * Open MCT Web, Copyright (c) 2014-2015, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT Web is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT Web includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/

define([
    "EventEmitter",
    "./UTCTimeSystem"
], function (EventEmitter, UTCTimeSystem) {

    function TimeConductor() {
        EventEmitter.call(this);

        //The Time System
        this.system = new UTCTimeSystem();
        //The Time Of Interest
        this.toi = undefined;

        this.bounds = {
            start: undefined,
            end: undefined
        };

        this.modes = {
            FIXED: fixedMode.bind(undefined, this),
            RELATIVE: relativeMode.bind(undefined, this)
        };

        //Default to fixed mode
        this.modeVal = this.modes.FIXED;
    }

    function relativeMode (conductor, options) {
        conductor.modes.RELATIVE.options = options;

        /**
         * Deltas can be specified for start and end. An end delta will mean
         * that the end bound is always in the future by 'endDelta' units
         */
        options.startDelta = options.startDelta || conductor.system.DEFAULT_DELTA;
        options.endDelta = options.endDelta || 0;

        /**
         * If a tick source is specified, listen for ticks
         */
        if (options.tickSource) {
            options.tickSource.on("tick", function () {
                var now = conductor.timeSystem.now();
                conductor.bounds({
                    start: now - startDelta,
                    end: now
                });
            });
        }
        return conductor.modes.RELATIVE;
    }

    function fixedMode (conductor, options) {
        //TODO: What are the options for fixed mode?
        conductor.modes.FIXED.options = options;

        return conductor.modes.FIXED;
    }

    TimeConductor.prototype = Object.create(EventEmitter.prototype);

    /**
     * Validate the given bounds. This can be used for pre-validation of
     * bounds, for example by views validating user inputs.
     * @param bounds The start and end time of the conductor.
     * @returns {string | true} A validation error, or true if valid
     */
    TimeConductor.prototype.validateBounds = function (bounds) {
        if (!bounds.start ||
            !bounds.end ||
            isNaN(bounds.start) ||
            isNaN(bounds.end)
        ) {
            return "Start and end must be specified as integer values";
        } else if (bounds.start > bounds.end){
            return "Specified start date exceeds end bound";
        }
        return true;
    };

    function throwOnError(validationResult) {
        if (validationResult !== true) {
            throw validationResult;
        }
    }

    TimeConductor.prototype.mode = function (newMode) {
        if (arguments.length > 0) {
            this.modeVal = newMode;
            this.emit('refresh', this);
        }
        return this.modeVal;
    };

    TimeConductor.prototype.bounds = function (newBounds) {
        if (arguments.length > 0) {
            throwOnError(this.validateBounds(newBounds));
            this.bounds = newBounds;
            this.emit('bounds', this.bounds);
        }
        return this.bounds;
    };

    TimeConductor.prototype.timeSystem = function (newTimeSystem) {
        if (arguments.length > 0) {
            this.system = newTimeSystem;
            this.emit('refresh', this);
        }
        return this.system;
    };

    TimeConductor.prototype.timeOfInterest = function (newTOI) {
        if (arguments.length > 0) {
            this.toi = newTOI;
            this.emit('toi');
        }
        return this.toi;
    };

    return TimeConductor;
});
