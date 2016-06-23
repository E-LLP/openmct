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
], function () {

    function RealtimeMode(options) {
        this.options = options;
        this.system = undefined;
    }

    /**
     * @private
     */
    this.prototype.initialize = function (conductor) {

        /**
         * Deltas can be specified for start and end. An end delta will mean
         * that the end bound is always in the future by 'endDelta' units
         */
        this.options.startDelta = this.options.startDelta || conductor.timeSystem().DEFAULT_DELTA;
        this.options.endDelta = this.options.endDelta || 0;

        /**
         * If a tick source is specified, listen for ticks
         */
        if (this.options.tickSource) {
            this.options.tickSource.on("tick", function () {
                var now = conductor.timeSystem().now();
                conductor.bounds({
                    start: now - startDelta,
                    end: now
                });

            });
        }
    };

    return RealtimeMode;
});