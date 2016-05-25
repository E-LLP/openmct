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

    function TimeRangeController($scope, formatService, defaultFormat, now) {

    }

    TimeRangeController.prototype.formatTimestamp = function (ts) {
        return this.formatter.format(ts);
    };

    TimeRangeController.prototype.updateTicks = function () {
    };

    TimeRangeController.prototype.updateSpanWidth = function (w) {
    };

    TimeRangeController.prototype.updateViewForInnerSpanFromModel = function (
        ngModel
    ) {
    };

    TimeRangeController.prototype.defaultBounds = function () {
    };


    TimeRangeController.prototype.updateViewFromModel = function (ngModel) {
    };

    TimeRangeController.prototype.startLeftDrag = function () {
    };

    TimeRangeController.prototype.startRightDrag = function () {
    };

    TimeRangeController.prototype.startMiddleDrag = function () {
    };

    TimeRangeController.prototype.toMillis = function (pixels) {
    };

    TimeRangeController.prototype.leftDrag = function (pixels) {
    };

    TimeRangeController.prototype.rightDrag = function (pixels) {
    };

    TimeRangeController.prototype.middleDrag = function (pixels) {
    };

    TimeRangeController.prototype.updateFormModel = function () {
    };

    TimeRangeController.prototype.updateOuterStart = function () {
    };

    TimeRangeController.prototype.updateOuterEnd = function () {
    };

    TimeRangeController.prototype.updateFormat = function (key) {
    };

    TimeRangeController.prototype.updateBoundsFromForm = function () {
    };

    TimeRangeController.prototype.onFormStartChange = function (
        newValue,
        oldValue
    ) {
    };

    TimeRangeController.prototype.onFormEndChange = function (
        newValue,
        oldValue
    ) {
    };

    TimeRangeController.prototype.validateStart = function (startValue) {
    };

    TimeRangeController.prototype.validateEnd = function (endValue) {
    };

    return TimeRangeController;
});
