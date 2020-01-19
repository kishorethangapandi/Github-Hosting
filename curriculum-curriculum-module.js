(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["curriculum-curriculum-module"],{

/***/ "./src/app/curriculum/curriculum-affiliations.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/curriculum/curriculum-affiliations.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 my-3\">\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\n        <i class=\"fa fa-chevron-left mr-2\"></i>Back\n    </div>\n</div>\n<div class=\"w-100 p-3 alert-warning\">\n    Coming soon...!\n</div>"

/***/ }),

/***/ "./src/app/curriculum/curriculum-affiliations.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/curriculum/curriculum-affiliations.component.ts ***!
  \*****************************************************************/
/*! exports provided: CurriculumAffiliationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumAffiliationsComponent", function() { return CurriculumAffiliationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _curriculum_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");





var CurriculumAffiliationsComponent = /** @class */ (function () {
    function CurriculumAffiliationsComponent(router, pluginService) {
        this.router = router;
        this.pluginService = pluginService;
    }
    CurriculumAffiliationsComponent.prototype.ngOnInit = function () {
        this.pluginService.sideMenuToggle();
    };
    CurriculumAffiliationsComponent.prototype.onBack = function () {
        var localObj = this;
        swal({
            title: "Are you sure to go previous page ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localObj.previousUrl();
                localObj.pluginService.sideMenuToggle();
            }
        });
    };
    CurriculumAffiliationsComponent.prototype.previousUrl = function () {
        this.router.navigateByUrl('/curriculum');
    };
    CurriculumAffiliationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: __webpack_require__(/*! ./curriculum-affiliations.component.html */ "./src/app/curriculum/curriculum-affiliations.component.html"),
            providers: [_curriculum_service__WEBPACK_IMPORTED_MODULE_1__["CurriculumService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"]])
    ], CurriculumAffiliationsComponent);
    return CurriculumAffiliationsComponent;
}());



/***/ }),

/***/ "./src/app/curriculum/curriculum-create.component.html":
/*!*************************************************************!*\
  !*** ./src/app/curriculum/curriculum-create.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 d-flex justify-content-between my-3\">\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\n        <i class=\"fa fa-chevron-left mr-2\">\n        </i>Back\n    </div>\n</div>\n<form [formGroup]=\"curriculumForm\">\n    <div class=\"form-group mb-2 col-xxl-6\">\n        <label class=\"col-form-label\">Curriculum name</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter curriculum name (minlength: 3 and maxlength: 75)\"\n            formControlName=\"curriculumName\" minlength=\"3\" maxlength=\"75\" inputRestriction=\"alphabetsWithSpace\"\n            [ngClass]=\"{ 'is-invalid': validated && formControl.curriculumName.errors }\">\n        <span class=\"font-15 text-muted\">Allowed characters - Alphabets</span>\n    </div>\n    <div class=\"form-group mb-2 col-xxl-6\">\n        <label class=\"col-form-label\">Acronym</label>\n        <input type=\"text\" class=\"form-control\"\n            placeholder=\"Enter acronym for curriculum(minlength: 2 and maxlength: 10)\"\n            formControlName=\"curriculumAcronym\" minlength=\"2\" maxlength=\"10\" inputRestriction=\"alphabetsWithSpace\"\n            [ngClass]=\"{ 'is-invalid': validated && formControl.curriculumAcronym.errors }\">\n        <span class=\"font-15 text-muted\">Allowed characters - Alphabets (CAPITAL LETTERS ONLY) </span>\n    </div>\n    <div class=\"form-group mb-2 col-xxl-6\">\n        <label class=\"col-form-label\">Description <span class=\"text-muted\">(Optional)</span></label>\n        <textarea class=\"form-control\" placeholder=\"Enter description (minlength: 3 and maxlength: 250)\"\n            formControlName=\"curriculumDescription\" minlength=\"3\" maxlength=\"250\"\n            [ngClass]=\"{ 'is-invalid': validated && formControl.curriculumDescription.errors }\"></textarea>\n        <span class=\"font-15 text-muted\">Allowed characters - Alphabets, Numbers and Special characters</span>\n    </div>\n    <div class=\"form-group mb-2 col-xxl-6\">\n        <label for=\"country\" class=\"col-form-label\">Country</label>\n        <ng-select [items]=\"countryList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n            placeholder=\"Select country\" [(ngModel)]=\"selectedCountry\" (change)=\"onCountryChange()\"\n            formControlName=\"country\">\n        </ng-select>\n    </div>\n    <div class=\"form-group mb-2 col-xxl-6\">\n        <label for=\"state\" class=\"col-form-label\">State</label>\n        <ng-select [items]=\"stateList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\" placeholder=\"Select state\"\n            [(ngModel)]=\"selectedState\" formControlName=\"state\">\n        </ng-select>\n    </div>\n    <div class=\"row mr-0 ml-0 w-100 mb-2\">\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"startDate\" class=\"col-form-label\">Start date (dd/mm)</label>\n            <input id=\"startDate\" name=\"inputMask\" formControlName=\"startDate\" class=\"form-control input-mask\"\n                type=\"text\" placeholder=\"_ _ /_ _ \" minlength=\"5\" maxlength=\"5\" (click)=\"applyInputMaskForDate()\"\n                [ngClass]=\"{ 'is-invalid': validated && formControl.startDate.errors }\" inputRestriction=\"onlyIntegers\">\n            <span class=\"font-15 text-muted\">Allowed characters - Numbers</span>\n        </div>\n        <div class=\"form-group  col-xxl-6\">\n            <label for=\"endDate\" name=\"inputMask\" class=\"col-form-label\">End date (dd/mm)</label>\n            <input id=\"endDate\" formControlName=\"endDate\" class=\"form-control input-mask\" type=\"text\"\n                placeholder=\"_ _ /_ _ \" (click)=\"applyInputMaskForDate()\" minlength=\"5\" maxlength=\"5\"\n                [ngClass]=\"{ 'is-invalid': validated && formControl.endDate.errors }\">\n            <span class=\"font-15 text-muted\">Allowed characters - Numbers</span>\n        </div>\n    </div>\n    <div class=\"row mr-0 ml-0 w-100 mb-2\">\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"fromGrade\" class=\"col-form-label\">From grade</label>\n            <ng-select [items]=\"gradesFromList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedFromGrade\" (change)=\"onFromGradeChange()\"\n                formControlName=\"fromGrade\">\n            </ng-select>\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"to\" class=\"col-form-label\">To grade</label>\n            <ng-select [items]=\"gradesToList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedToGrade\" formControlName=\"toGrade\">\n            </ng-select>\n        </div>\n    </div>\n    <div class=\"col-md-12 d-flex justify-content-end\">\n        <button class=\"btn btn-danger mr-2 mb-2\" (click)=\"resetCurriculum()\">\n            <i class=\"fa fa-times mr-2\"></i>Reset\n        </button>\n        <button class=\"btn btn-info mb-2 mr-2\" (click)=\"saveAsDraft()\" [disabled]=\"validateForm\">\n            <i class=\"fa fa-save mr-2\"></i>Save as draft\n        </button>\n        <button class=\"btn btn-success mb-2\" (click)=\"saveAsPublish()\" [disabled]=\"validateForm\">\n            <i class=\"fe fe-file-plus mr-2\"></i>Save and publish\n        </button>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/curriculum/curriculum-create.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/curriculum/curriculum-create.component.ts ***!
  \***********************************************************/
/*! exports provided: CurriculumCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumCreateComponent", function() { return CurriculumCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _curriculum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");









var CurriculumCreateComponent = /** @class */ (function () {
    function CurriculumCreateComponent(router, activatedRoute, curriculumService, eventManager, pluginService, formBuilder, commonService, changeDetectRef) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.curriculumService = curriculumService;
        this.eventManager = eventManager;
        this.pluginService = pluginService;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.changeDetectRef = changeDetectRef;
        this.curriculum = {};
        this.gradesFromList = [];
        this.gradesToList = [];
        this.countryList = [];
        this.stateList = [];
        this.validateForm = true;
    }
    CurriculumCreateComponent.prototype.ngOnInit = function () {
        this.pluginService.sideMenuToggle();
        this.createCurriculumFormGroup();
        this.getCountryList();
        this.getGradeList();
    };
    //Get grade list from local JSON data
    CurriculumCreateComponent.prototype.getGradeList = function () {
        var _this = this;
        this.commonService.getGeneralDataList().subscribe(function (data) {
            _this.grades = data.grade;
            _this.gradesFromList = data.grades;
        });
    };
    //Get country list from local JSON data
    CurriculumCreateComponent.prototype.getCountryList = function () {
        var _this = this;
        this.commonService.getCountryList().subscribe(function (countryData) {
            _this.countryList = countryData;
        });
    };
    //Initializing curriculum formfields
    CurriculumCreateComponent.prototype.createCurriculumFormGroup = function () {
        this.curriculumForm = this.formBuilder.group({
            curriculumAcronym: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10)]),
            curriculumName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(75)]),
            curriculumDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(250)]),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(5)]),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(5)]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            fromGrade: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            toGrade: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required)
        });
    };
    Object.defineProperty(CurriculumCreateComponent.prototype, "formControl", {
        //Creating formcontrol for a curriculum formfields
        //Used for validations
        get: function () { return this.curriculumForm.controls; },
        enumerable: true,
        configurable: true
    });
    CurriculumCreateComponent.prototype.ngAfterViewInit = function () {
        this.removeSlashInDate();
    };
    //Applying input mask format for start date and end date 
    CurriculumCreateComponent.prototype.applyInputMaskForDate = function () {
        $(document).ready(function () {
            $('.input-mask').mask('00/00');
        });
    };
    //Country dropdown on selection
    CurriculumCreateComponent.prototype.onCountryChange = function () {
        var countryId;
        if (this.selectedCountry) {
            countryId = this.selectedCountry.id;
            this.getStateListByCountryId(countryId);
        }
    };
    //From grade dropdown on selection
    CurriculumCreateComponent.prototype.onFromGradeChange = function () {
        var grade;
        if (this.selectedFromGrade) {
            grade = this.selectedFromGrade.name;
            this.generateGradesToList(grade);
        }
    };
    //Get state list based on country selection
    CurriculumCreateComponent.prototype.getStateListByCountryId = function (countryId) {
        var _this = this;
        var stateList = [];
        this.commonService.getStateList().subscribe(function (stateData) {
            stateList = stateData;
            _this.stateList = stateList.filter(function (item) { return item.country_id === countryId.toString(); });
        });
    };
    //Generate To grade list based on From grade selection
    CurriculumCreateComponent.prototype.generateGradesToList = function (selectedGrade) {
        this.gradesToList = [];
        for (var i = selectedGrade; i < this.grades.length; i++) {
            this.gradesToList.push(this.grades[i]);
        }
        return this.gradesToList;
    };
    //Trim value for validation
    CurriculumCreateComponent.prototype.trimValue = function (value) {
        if (value === null || value === undefined) {
            return value;
        }
        else {
            return value.trim();
        }
    };
    CurriculumCreateComponent.prototype.ngAfterViewChecked = function () {
        this.validateCurriculumForm();
        this.changeDetectRef.detectChanges();
    };
    //Curriculum form validation
    CurriculumCreateComponent.prototype.validateCurriculumForm = function () {
        var curriculumName, acronym;
        curriculumName = this.trimValue(this.curriculumForm.value.curriculumName);
        acronym = this.trimValue(this.curriculumForm.value.curriculumAcronym);
        if (curriculumName === "" || curriculumName === undefined || curriculumName === null) {
            this.validateForm = true;
        }
        if (acronym === "" || acronym === undefined || acronym === null) {
            this.validateForm = true;
        }
        if (this.curriculumForm.invalid) {
            this.validateForm = true;
        }
        if (this.curriculumForm.valid) {
            this.validateForm = false;
        }
    };
    //Save curriculum with status DRAFT 
    CurriculumCreateComponent.prototype.saveAsDraft = function () {
        if (this.curriculumForm.valid) {
            this.curriculumStatus = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__["DRAFT"];
            this.saveCurriculum();
        }
        if (this.curriculumForm.invalid) {
            return;
        }
    };
    //Save curriculum with status ACTIVE 
    CurriculumCreateComponent.prototype.saveAsPublish = function () {
        if (this.curriculumForm.valid) {
            this.curriculumStatus = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__["ACTIVE"];
            this.saveCurriculum();
        }
        if (this.curriculumForm.invalid) {
            return;
        }
    };
    //Removing slash in start date and end date 
    //While saving date, we need to send numbers without slash
    CurriculumCreateComponent.prototype.removeSlashInDate = function () {
        this.startDate = this.curriculumForm.get('startDate').value;
        this.startDate = this.startDate.replace("/", "");
        this.endDate = this.curriculumForm.get('endDate').value;
        this.endDate = this.endDate.replace("/", "");
    };
    //Save curriculum service
    CurriculumCreateComponent.prototype.saveCurriculum = function () {
        this.subscribeToSaveResponse(this.curriculumService.createCurriculum(this.createCurriculumForm()));
    };
    CurriculumCreateComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onSaveCurriculumSuccess(); }, function (res) { return _this.onSaveCurriculumError(); });
    };
    CurriculumCreateComponent.prototype.onSaveCurriculumSuccess = function () {
        if (this.curriculumStatus === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__["DRAFT"]) {
            this.pluginService.alertMessage("Curriculum created successfully", "success");
        }
        else {
            this.pluginService.alertMessage("Curriculum published successfully", "success");
        }
        this.curriculumForm.reset();
        this.router.navigateByUrl('/curriculum');
    };
    CurriculumCreateComponent.prototype.onSaveCurriculumError = function () {
        if (this.curriculumStatus === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__["DRAFT"]) {
            this.pluginService.alertMessage("Error while curriculum save", "error");
        }
        else {
            this.pluginService.alertMessage("Error while curriculum publish", "error");
        }
    };
    //Creating curriculum object
    CurriculumCreateComponent.prototype.createCurriculumForm = function () {
        this.removeSlashInDate();
        this.curriculum.name = this.trimValue(this.curriculumForm.get('curriculumName').value);
        this.curriculum.acronym = this.trimValue(this.curriculumForm.get('curriculumAcronym').value);
        this.curriculum.description = this.trimValue(this.curriculumForm.get('curriculumDescription').value);
        this.curriculum.startDate = this.startDate;
        this.curriculum.endDate = this.endDate;
        this.curriculum.status = this.curriculumStatus;
        this.curriculum.isExtraCurriculum = false;
        this.curriculum.country = this.selectedCountry.sortname;
        this.curriculum.state = this.selectedState.name;
        this.curriculum.gradesApplicableFrom = this.selectedFromGrade.name;
        this.curriculum.gradesApplicableTo = this.selectedToGrade.name;
        this.curriculum.organisationId = null;
        return this.curriculum;
    };
    //Reset curriculum formfields
    CurriculumCreateComponent.prototype.resetCurriculum = function () {
        this.curriculumForm.reset();
        this.selectedCountry = null;
        this.selectedState = null;
        this.selectedFromGrade = null;
        this.selectedToGrade = null;
    };
    CurriculumCreateComponent.prototype.onBack = function () {
        var localObj = this;
        swal({
            title: "Are you sure to go previous page ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localObj.router.navigateByUrl('/curriculum');
                localObj.pluginService.sideMenuToggle();
            }
        });
    };
    CurriculumCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./curriculum-create.component.html */ "./src/app/curriculum/curriculum-create.component.html"),
            providers: [_curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _shared_common_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], CurriculumCreateComponent);
    return CurriculumCreateComponent;
}());



/***/ }),

/***/ "./src/app/curriculum/curriculum-delete.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/curriculum/curriculum-delete.component.ts ***!
  \***********************************************************/
/*! exports provided: CurriculumDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumDeleteComponent", function() { return CurriculumDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _curriculum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");






var CurriculumDeleteComponent = /** @class */ (function () {
    function CurriculumDeleteComponent(router, activatedRoute, eventManager, curriculumService, pluginService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.eventManager = eventManager;
        this.curriculumService = curriculumService;
        this.pluginService = pluginService;
    }
    CurriculumDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var curriculum = _a.curriculum;
            _this.deleteCurriculum(curriculum);
        });
    };
    CurriculumDeleteComponent.prototype.subscribeToDeleteCurriculumResponse = function (resp) {
        var _this = this;
        resp.subscribe(function (res) { return _this.onDeleteCurriculumSuccess(res); }, function (res) { return _this.onDeleteCurriculumError(res); });
    };
    //Delete curriculum
    CurriculumDeleteComponent.prototype.deleteCurriculum = function (curriculum) {
        var localthisObject = this;
        swal({
            title: "Are you sure to delete this curriculum ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localthisObject.confirmDelete(curriculum.id);
            }
            else {
                localthisObject.previousUrl();
            }
        });
    };
    CurriculumDeleteComponent.prototype.confirmDelete = function (id) {
        this.subscribeToDeleteCurriculumResponse(this.curriculumService.delete(id));
    };
    CurriculumDeleteComponent.prototype.previousUrl = function () {
        this.router.navigateByUrl('/curriculum');
    };
    CurriculumDeleteComponent.prototype.onDeleteCurriculumSuccess = function (resp) {
        this.pluginService.alertMessage("Curriculum deleted successfully", "success");
        this.previousUrl();
    };
    CurriculumDeleteComponent.prototype.onDeleteCurriculumError = function (err) {
        this.pluginService.alertMessage("Could not delete curriculum, please contact admin", "error");
    };
    CurriculumDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./curriculum-manage.component.html */ "./src/app/curriculum/curriculum-manage.component.html"),
            providers: [_curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_5__["JhiEventManager"],
            _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"]])
    ], CurriculumDeleteComponent);
    return CurriculumDeleteComponent;
}());



/***/ }),

/***/ "./src/app/curriculum/curriculum-details.component.html":
/*!**************************************************************!*\
  !*** ./src/app/curriculum/curriculum-details.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 d-flex justify-content-between my-3\">\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\n        <i class=\"fa fa-chevron-left mr-2\">\n        </i>Back\n    </div>\n    <a class=\"btn btn-success\" [routerLink]=\"['/curriculum', curriculumId, 'edit' ]\">\n        <i class=\"fa fa-edit mr-2\">\n        </i>Edit curriculum\n    </a>\n</div>\n<div class=\"row\">\n    <div class=\"col-xxl-12\">\n        <div class=\"mb-2 col-xxl-6\">\n            <label> Curriculum name </label>\n            <input type=\"text\" class=\"form-control\" disabled value={{curriculum.name}}>\n        </div>\n        <div class=\"form-group mb-2 col-xxl-6\">\n            <label> Acronym </label>\n            <input type=\"text\" class=\"form-control\" disabled value={{curriculum.acronym}}>\n        </div>\n        <div class=\"form-group mb-2 col-xxl-6\">\n            <label> Description </label>\n            <input type=\"text\" class=\"form-control\" disabled value={{curriculum.description}}>\n        </div>\n        <div class=\"form-group mb-2 col-xxl-6\">\n            <label> Country </label>\n            <input type=\"text\" class=\"form-control\" disabled value={{country}}>\n        </div>\n        <div class=\"form-group mb-2 col-xxl-6\">\n            <label> State </label>\n            <input type=\"text\" class=\"form-control\" disabled value={{curriculum.state}}>\n        </div>\n        <div class=\"row mr-0 ml-0 w-100 mb-2\">\n            <div class=\"form-group mb-2 col-xxl-6\">\n                <label> Start date (dd/mm) </label>\n                <input type=\"text\" class=\"form-control\" disabled value={{startDate}}>\n            </div>\n            <div class=\"form-group mb-2 col-xxl-6\">\n                <label> End date (dd/mm) </label>\n                <input type=\"text\" class=\"form-control\" disabled value={{endDate}}>\n            </div>\n        </div>\n        <div class=\"row mr-0 ml-0 w-100 mb-2\">\n            <div class=\"form-group mb-2 col-xxl-6\">\n                <label> From grade </label>\n                <input type=\"text\" class=\"form-control\" disabled value={{curriculum.gradesApplicableFrom}}>\n            </div>\n            <div class=\"form-group mb-2 col-xxl-6\">\n                <label> To grade </label>\n                <input type=\"text\" class=\"form-control\" disabled value={{curriculum.gradesApplicableTo}}>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/curriculum/curriculum-details.component.ts":
/*!************************************************************!*\
  !*** ./src/app/curriculum/curriculum-details.component.ts ***!
  \************************************************************/
/*! exports provided: CurriculumDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumDetailsComponent", function() { return CurriculumDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _curriculum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");








var CurriculumDetailsComponent = /** @class */ (function () {
    function CurriculumDetailsComponent(router, activatedRoute, curriculumService, eventManager, pluginService, formBuilder, commonService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.curriculumService = curriculumService;
        this.eventManager = eventManager;
        this.pluginService = pluginService;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.curriculum = {};
    }
    CurriculumDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pluginService.sideMenuToggle();
        this.activatedRoute.data.subscribe(function (_a) {
            var curriculum = _a.curriculum;
            _this.curriculum = curriculum;
            _this.getCountryList();
        });
    };
    //Get country list from local JSON data
    CurriculumDetailsComponent.prototype.getCountryList = function () {
        var _this = this;
        this.commonService.getCountryList().subscribe(function (countryData) {
            _this.countryList = countryData;
            _this.mapCurriculumValues();
        });
    };
    CurriculumDetailsComponent.prototype.mapCurriculumValues = function () {
        var _this = this;
        this.curriculumId = this.curriculum.id;
        this.country = this.countryList.find(function (item) { return item.sortname === _this.curriculum.country; }).name;
        this.startDate = this.addSlashBetweenDateMonth(this.curriculum.startDate);
        this.endDate = this.addSlashBetweenDateMonth(this.curriculum.endDate);
    };
    //Adding slash in start date and end date 
    CurriculumDetailsComponent.prototype.addSlashBetweenDateMonth = function (dateValue) {
        var date, month, dateWithSlash;
        date = dateValue.substring(0, 2);
        month = dateValue.substring(2, 4);
        dateWithSlash = date + "/" + month;
        return dateWithSlash;
    };
    CurriculumDetailsComponent.prototype.onBack = function () {
        var localObj = this;
        swal({
            title: "Are you sure to go previous page ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localObj.router.navigateByUrl('/curriculum');
                localObj.pluginService.sideMenuToggle();
            }
        });
    };
    CurriculumDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./curriculum-details.component.html */ "./src/app/curriculum/curriculum-details.component.html"),
            providers: [_curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]])
    ], CurriculumDetailsComponent);
    return CurriculumDetailsComponent;
}());



/***/ }),

/***/ "./src/app/curriculum/curriculum-manage.component.html":
/*!*************************************************************!*\
  !*** ./src/app/curriculum/curriculum-manage.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 d-flex justify-content-end my-3\">\n    <a routerLink=\"/curriculum/create\">\n        <div class=\"btn btn-primary\">\n            <i class=\"fa fa-plus-circle mr-2\"></i> Create new curriculum\n        </div>\n    </a>\n</div>\n\n<div class=\"table-responsive\" *ngIf=\"curriculums\">\n    <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\n        <thead>\n            <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"reset.bind(this)\">\n                <th jhiSortBy=\"name\">Curriculum <span class=\"fa fa-sort  ml-1\"></span></th>\n                <th jhiSortBy=\"startDate\">Start Month (dd/mm)<span class=\"fa fa-sort  ml-1\"></span></th>\n                <th jhiSortBy=\"endDate\">End Month (dd/mm)<span class=\"fa fa-sort  ml-1\"></span></th>\n                <th jhiSortBy=\"status\">Status <span class=\"fa fa-sort  ml-1\"></span></th>\n                <th class=\"fixed-column\">Update status</th>\n                <th class=\"fixed-column\">Affiliations</th>\n                <th class=\"fixed-column\">Actions</th>\n            </tr>\n        </thead>\n        <tbody infinite-scroll (scrolled)=\"loadPage(page + 1)\" [infiniteScrollDisabled]=\"page >= links['last']\"\n            [infiniteScrollDistance]=\"0\">\n            <tr *ngFor=\"let curriculum of curriculums ;trackBy: trackId\">\n                <td data-column=\"Curriculum\">{{curriculum.acronym}}</td>\n                <td data-column=\"Start Month\">\n                    {{startDate}}\n                </td>\n                <td data-column=\"End Month\">\n                    {{endDate}}\n                </td>\n                <td data-column=\"Status\">{{curriculum.status}}</td>\n                <td class=\"fixed-column\" data-column=\"Update status\">\n                    <a class=\"btn btn-outline-success mr-1\"\n                        *ngIf=\"curriculum.status === 'DRAFT' || curriculum.status === 'INACTIVE'\"\n                        [routerLink]=\"['/curriculum', curriculum.id, 'publish' ]\">\n                        Publish\n                    </a>\n                    <a class=\"btn btn-outline-danger mr-1\" *ngIf=\"curriculum.status === 'ACTIVE'\"\n                        [routerLink]=\"['/curriculum', curriculum.id, 'unpublish' ]\">\n                        Unpublish\n                    </a>\n                </td>\n                <td class=\"fixed-column\" data-column=\"Affiliations\">\n                    <a class=\"btn btn-outline-info mr-1 mb-1\"\n                        [routerLink]=\"['/curriculum', curriculum.id, 'affiliations' ]\">\n                        View\n                    </a>\n                </td>\n                <td class=\"fixed-column\" data-column=\"Actions\">\n                    <div>\n                        <a class=\"btn btn-outline-info btn-icon-size mr-1 mb-1\"\n                            [routerLink]=\"['/curriculum', curriculum.id, 'view' ]\">\n                            <i class=\"fa fa-eye\"></i>\n                        </a>\n\n                        <a class=\"btn btn-outline-success btn-icon-size mr-1 mb-1\"\n                            [routerLink]=\"['/curriculum', curriculum.id, 'edit' ]\">\n                            <i class=\"fa fa-edit\"></i>\n                        </a>\n\n                        <a class=\"btn btn-outline-danger mb-1 btn-icon-size\"\n                            *ngIf=\"curriculum.status === 'DRAFT' || curriculum.status === 'INACTIVE'\"\n                            [routerLink]=\"['/curriculum', curriculum.id, 'delete' ]\">\n                            <i class=\"fa fa-trash\"></i>\n                        </a>\n                    </div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/curriculum/curriculum-manage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/curriculum/curriculum-manage.component.ts ***!
  \***********************************************************/
/*! exports provided: CurriculumManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumManageComponent", function() { return CurriculumManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _curriculum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");








var CurriculumManageComponent = /** @class */ (function () {
    function CurriculumManageComponent(_router, curriculumService, eventManager, parseLinks, principalService, pluginService) {
        this._router = _router;
        this.curriculumService = curriculumService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.curriculums = [];
        this.itemsPerPage = _shared__WEBPACK_IMPORTED_MODULE_6__["ITEMS_PER_PAGE"];
        this.page = 0;
        this.links = {
            last: 0
        };
        this.predicate = 'id';
        this.reverse = false;
    }
    CurriculumManageComponent.prototype.loadStandardCurriculums = function () {
        var _this = this;
        this.curriculumService
            .getStandardCurriculums({
            page: this.page,
            size: this.itemsPerPage,
            sort: this.sort()
        })
            .subscribe(function (res) { return _this.paginateCurriculums(res.body, res.headers); }, function (res) { return _this.onError(res.message); });
    };
    CurriculumManageComponent.prototype.paginateCurriculums = function (data, headers) {
        //this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = parseInt(headers.get('X-Total-Count'), 10);
        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
                this.curriculums.push(data[i]);
                this.startDate = this.addSlashBetweenDateMonth(data[i].startDate);
                this.endDate = this.addSlashBetweenDateMonth(data[i].endDate);
            }
        }
        else {
            this.pluginService.alertMessage("No data found..!", "warning");
        }
    };
    CurriculumManageComponent.prototype.reset = function () {
        this.page = 0;
        this.curriculums = [];
        this.loadStandardCurriculums();
    };
    CurriculumManageComponent.prototype.loadPage = function (page) {
        this.page = page;
        this.loadStandardCurriculums();
    };
    CurriculumManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadStandardCurriculums();
        this.principalService.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInCurriculums();
    };
    CurriculumManageComponent.prototype.addSlashBetweenDateMonth = function (dateValue) {
        var date, month, dateWithSlash;
        date = dateValue.substring(0, 2);
        month = dateValue.substring(2, 4);
        dateWithSlash = date + "/" + month;
        return dateWithSlash;
    };
    CurriculumManageComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    CurriculumManageComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    CurriculumManageComponent.prototype.registerChangeInCurriculums = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('curriculumListModification', function (response) { return _this.reset(); });
    };
    CurriculumManageComponent.prototype.sort = function () {
        var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    };
    CurriculumManageComponent.prototype.convertToCurriculumList = function (data) {
        this.curriculums.push(data);
    };
    CurriculumManageComponent.prototype.onError = function (errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    };
    CurriculumManageComponent.prototype.ngDestroy = function () {
        this.eventSubscriber.unsubscribe();
    };
    CurriculumManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./curriculum-manage.component.html */ "./src/app/curriculum/curriculum-manage.component.html"),
            providers: [_curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiParseLinks"],
            _core__WEBPACK_IMPORTED_MODULE_5__["Principal"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__["PluginService"]])
    ], CurriculumManageComponent);
    return CurriculumManageComponent;
}());



/***/ }),

/***/ "./src/app/curriculum/curriculum-update-publish.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/curriculum/curriculum-update-publish.component.ts ***!
  \*******************************************************************/
/*! exports provided: CurriculumPublishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumPublishComponent", function() { return CurriculumPublishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _curriculum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");






var CurriculumPublishComponent = /** @class */ (function () {
    function CurriculumPublishComponent(router, activatedRoute, curriculumService, pluginService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.curriculumService = curriculumService;
        this.pluginService = pluginService;
    }
    CurriculumPublishComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var curriculum = _a.curriculum;
            _this.publishCurriculum(curriculum);
        });
    };
    CurriculumPublishComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onSaveSuccess(res); }, function (errRes) { return _this.onSaveError(errRes); });
    };
    CurriculumPublishComponent.prototype.publishCurriculum = function (curriculum) {
        curriculum.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_4__["ACTIVE"];
        this.subscribeToSaveResponse(this.curriculumService.updateCurriculum(curriculum));
        this.pluginService.alertMessage("Curriculum published successfully", "success");
        this.router.navigateByUrl('/curriculum');
    };
    CurriculumPublishComponent.prototype.onSaveSuccess = function (resp) {
        if (resp.body.status === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_4__["ACTIVE"]) {
            this.pluginService.alertMessage("Curriculum published successfully", "success");
        }
    };
    CurriculumPublishComponent.prototype.onSaveError = function (errRes) {
        this.pluginService.alertMessage("Could not publish curriculum, please contact admin", "error");
    };
    CurriculumPublishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./curriculum-manage.component.html */ "./src/app/curriculum/curriculum-manage.component.html"),
            providers: [_curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"]])
    ], CurriculumPublishComponent);
    return CurriculumPublishComponent;
}());



/***/ }),

/***/ "./src/app/curriculum/curriculum-update-unpublish.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/curriculum/curriculum-update-unpublish.component.ts ***!
  \*********************************************************************/
/*! exports provided: CurriculumUnpublishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumUnpublishComponent", function() { return CurriculumUnpublishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _curriculum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");






var CurriculumUnpublishComponent = /** @class */ (function () {
    function CurriculumUnpublishComponent(router, activatedRoute, curriculumService, pluginService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.curriculumService = curriculumService;
        this.pluginService = pluginService;
    }
    CurriculumUnpublishComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var curriculum = _a.curriculum;
            _this.unpublishCurriculum(curriculum);
        });
    };
    CurriculumUnpublishComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onSaveSuccess(res); }, function (errRes) { return _this.onSaveError(errRes); });
    };
    CurriculumUnpublishComponent.prototype.unpublishCurriculum = function (curriculum) {
        curriculum.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_4__["INACTIVE"];
        this.subscribeToSaveResponse(this.curriculumService.updateCurriculum(curriculum));
        this.pluginService.alertMessage("Curriculum published successfully", "success");
        this.router.navigateByUrl('/curriculum');
    };
    CurriculumUnpublishComponent.prototype.onSaveSuccess = function (resp) {
        if (resp.body.status === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_4__["INACTIVE"]) {
            this.pluginService.alertMessage("Curriculum unpublished successfully", "success");
        }
    };
    CurriculumUnpublishComponent.prototype.onSaveError = function (errRes) {
        this.pluginService.alertMessage("Could not publish curriculum, please contact admin", "error");
    };
    CurriculumUnpublishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./curriculum-manage.component.html */ "./src/app/curriculum/curriculum-manage.component.html"),
            providers: [_curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"]])
    ], CurriculumUnpublishComponent);
    return CurriculumUnpublishComponent;
}());



/***/ }),

/***/ "./src/app/curriculum/curriculum-update.component.html":
/*!*************************************************************!*\
  !*** ./src/app/curriculum/curriculum-update.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 d-flex justify-content-between my-3\">\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\n        <i class=\"fa fa-chevron-left mr-2\">\n        </i>Back\n    </div>\n</div>\n<form [formGroup]=\"curriculumForm\">\n    <div class=\"form-group mb-2 col-xxl-6\">\n        <label class=\"col-form-label\">Curriculum name</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter curriculum name (minlength: 3 and maxlength: 75)\"\n            formControlName=\"curriculumName\" minlength=\"3\" maxlength=\"75\" inputRestriction=\"alphabetsWithSpace\"\n            [ngClass]=\"{ 'is-invalid': validated && formControl.curriculumName.errors }\">\n        <span class=\"font-15 text-muted\">Allowed characters - Alphabets</span>\n    </div>\n    <div class=\"form-group mb-2 col-xxl-6\">\n        <label class=\"col-form-label\">Acronym</label>\n        <input type=\"text\" class=\"form-control\"\n            placeholder=\"Enter acronym for curriculum (minlength: 2 and maxlength: 10)\"\n            formControlName=\"curriculumAcronym\" minlength=\"2\" maxlength=\"10\" inputRestriction=\"alphabetsWithSpace\"\n            [ngClass]=\"{ 'is-invalid': validated && formControl.curriculumAcronym.errors }\">\n        <span class=\"font-15 text-muted\">Allowed characters - Alphabets (CAPITAL LETTERS ONLY)</span>\n    </div>\n    <div class=\"form-group mb-2 col-xxl-6\">\n        <label class=\"col-form-label\">Description <span class=\"text-muted\">(Optional)</span></label>\n        <textarea class=\"form-control\" placeholder=\"Enter description (minlength: 3 and maxlength: 250)\"\n            formControlName=\"curriculumDescription\" minlength=\"3\" maxlength=\"250\"\n            [ngClass]=\"{ 'is-invalid': validated && formControl.curriculumDescription.errors }\"></textarea>\n        <span class=\"font-15 text-muted\">Allowed characters - Alphabets, Numbers and Special characters</span>\n    </div>\n    <div class=\"form-group mb-2 col-xxl-6\">\n        <label for=\"country\" class=\"col-form-label\">Country</label>\n        <ng-select [items]=\"countryList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n            placeholder=\"Select country\" [(ngModel)]=\"selectedCountry\" (change)=\"onCountryChange()\"\n            formControlName=\"country\">\n        </ng-select>\n    </div>\n    <div class=\"form-group mb-2 col-xxl-6\">\n        <label for=\"state\" class=\"col-form-label\">State</label>\n        <ng-select [items]=\"stateList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\" placeholder=\"Select state\"\n            [(ngModel)]=\"selectedState\" formControlName=\"state\">\n        </ng-select>\n    </div>\n    <div class=\"row mr-0 ml-0 w-100 mb-2\">\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"startDate\" class=\"col-form-label\">Start date (dd/mm)</label>\n            <input id=\"startDate\" name=\"inputMask\" formControlName=\"startDate\" class=\"form-control input-mask\"\n                type=\"text\" placeholder=\"d d /m m \" minlength=\"5\" maxlength=\"5\" (click)=\"applyInputMaskForDate()\"\n                [ngClass]=\"{ 'is-invalid': validated && formControl.startDate.errors }\" inputRestriction=\"onlyIntegers\">\n            <span class=\"font-15 text-muted\">Allowed characters - Numbers, Data format - dd/mm</span>\n        </div>\n        <div class=\"form-group  col-xxl-6\">\n            <label for=\"endDate\" name=\"inputMask\" class=\"col-form-label\">End date (dd/mm)</label>\n            <input id=\"endDate\" formControlName=\"endDate\" class=\"form-control input-mask\" type=\"text\"\n                placeholder=\"d d /m m \" (click)=\"applyInputMaskForDate()\" minlength=\"5\" maxlength=\"5\"\n                [ngClass]=\"{ 'is-invalid': validated && formControl.endDate.errors }\">\n            <span class=\"font-15 text-muted\">Allowed characters - Numbers, Data format - dd/mm</span>\n        </div>\n    </div>\n    <div class=\"row mr-0 ml-0 w-100 mb-2\">\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"fromGrade\" class=\"col-form-label\">From grade</label>\n            <ng-select [items]=\"gradesFromList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedFromGrade\" (change)=\"onFromGradeChange()\"\n                formControlName=\"fromGrade\">\n            </ng-select>\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"to\" class=\"col-form-label\">To grade</label>\n            <ng-select [items]=\"gradesToList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedToGrade\" formControlName=\"toGrade\">\n            </ng-select>\n        </div>\n    </div>\n    <div class=\"col-md-12 d-flex justify-content-end\">\n        <button class=\"btn btn-danger mr-2 mb-2\" (click)=\"cancelCurriculum()\">\n            <i class=\"fa fa-times mr-2\"></i>Reset\n        </button>\n        <button class=\"btn btn-info mb-2 mr-2\" (click)=\"saveAsDraft()\" [disabled]=\"validateForm\">\n            <i class=\"fa fa-save mr-2\"></i>Save as draft\n        </button>\n        <button class=\"btn btn-success mb-2\" (click)=\"saveAndPublish()\" [disabled]=\"validateForm\">\n            <i class=\"fe fe-file-plus mr-2\"></i>Save and publish\n        </button>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/curriculum/curriculum-update.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/curriculum/curriculum-update.component.ts ***!
  \***********************************************************/
/*! exports provided: CurriculumUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumUpdateComponent", function() { return CurriculumUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _curriculum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");









var CurriculumUpdateComponent = /** @class */ (function () {
    function CurriculumUpdateComponent(router, activatedRoute, curriculumService, eventManager, pluginService, formBuilder, commonService, changeDetectorRef) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.curriculumService = curriculumService;
        this.eventManager = eventManager;
        this.pluginService = pluginService;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.changeDetectorRef = changeDetectorRef;
        this.curriculum = {};
        this.gradesFromList = [];
        this.gradesToList = [];
        this.validateForm = true;
    }
    CurriculumUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pluginService.sideMenuToggle();
        this.createCurriculumFormGroup();
        this.activatedRoute.data.subscribe(function (_a) {
            var curriculum = _a.curriculum;
            _this.curriculum = curriculum;
            _this.getCountryList();
        });
    };
    CurriculumUpdateComponent.prototype.getCountryList = function () {
        var _this = this;
        this.commonService.getCountryList().subscribe(function (countryData) {
            _this.countryList = countryData;
            _this.getStateList();
            _this.getGeneralDataList();
        });
    };
    CurriculumUpdateComponent.prototype.getGeneralDataList = function () {
        var _this = this;
        this.commonService.getGeneralDataList().subscribe(function (generalData) {
            //this.curriculumTypeList = generalData.curriculumType;
            _this.grades = generalData.grade;
            _this.gradesFromList = _this.grades;
        });
    };
    CurriculumUpdateComponent.prototype.getStateList = function () {
        var _this = this;
        this.commonService.getStateList().subscribe(function (stateData) {
            _this.allStateList = stateData;
            _this.updateCurriculumValues();
        });
    };
    CurriculumUpdateComponent.prototype.createCurriculumFormGroup = function () {
        this.curriculumForm = this.formBuilder.group({
            curriculumAcronym: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10)]),
            curriculumName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(75)]),
            curriculumDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(250)]),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(5)]),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(5)]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            fromGrade: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            toGrade: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required)
        });
    };
    Object.defineProperty(CurriculumUpdateComponent.prototype, "formControl", {
        get: function () { return this.curriculumForm.controls; },
        enumerable: true,
        configurable: true
    });
    CurriculumUpdateComponent.prototype.updateCurriculumValues = function () {
        var _this = this;
        var curriculumType, stateIndex, countryIndex, fromGradeIndex, toGradeIndex;
        this.stateList = [];
        countryIndex = this.countryList.findIndex(function (item) { return item.sortname === _this.curriculum.country; });
        this.selectedCountry = this.countryList[countryIndex];
        this.stateList = this.allStateList.filter(function (item) { return item.country_id === _this.countryList[countryIndex].id.toString(); });
        stateIndex = this.stateList.findIndex(function (item) { return item.name === _this.curriculum.state; });
        this.selectedState = this.stateList[stateIndex];
        fromGradeIndex = this.gradesFromList.findIndex(function (item) { return item.name === _this.curriculum.gradesApplicableFrom; });
        this.selectedFromGrade = this.gradesFromList[fromGradeIndex];
        this.generateGradesToList(this.curriculum.gradesApplicableFrom);
        toGradeIndex = this.gradesToList.findIndex(function (item) { return item.name === _this.curriculum.gradesApplicableTo; });
        this.selectedToGrade = this.gradesToList[toGradeIndex];
        this.curriculumForm.patchValue({
            curriculumType: curriculumType,
            curriculumAcronym: this.curriculum.acronym,
            curriculumName: this.curriculum.name,
            organisation: this.curriculum.id,
            curriculumDescription: this.curriculum.description,
            startDate: this.addSlashBetweenDateMonth(this.curriculum.startDate),
            endDate: this.addSlashBetweenDateMonth(this.curriculum.endDate)
        });
    };
    CurriculumUpdateComponent.prototype.addSlashBetweenDateMonth = function (dateValue) {
        var date, month, dateWithSlash;
        date = dateValue.substring(0, 2);
        month = dateValue.substring(2, 4);
        dateWithSlash = date + "/" + month;
        return dateWithSlash;
    };
    CurriculumUpdateComponent.prototype.ngAfterViewInit = function () {
        this.applyInputMaskForDate();
        this.removeSlashInDate();
    };
    CurriculumUpdateComponent.prototype.applyInputMaskForDate = function () {
        $(document).ready(function () {
            $('.input-mask').mask('00/00');
        });
    };
    CurriculumUpdateComponent.prototype.onCountryChange = function () {
        var countryId;
        if (this.selectedCountry) {
            countryId = this.selectedCountry.id;
            this.getStateListByCountryId(countryId);
        }
    };
    CurriculumUpdateComponent.prototype.onFromGradeChange = function () {
        var grade;
        if (this.selectedFromGrade) {
            grade = this.selectedFromGrade.name;
            this.generateGradesToList(grade);
        }
    };
    CurriculumUpdateComponent.prototype.getStateListByCountryId = function (countryId) {
        var _this = this;
        var stateList = [];
        this.commonService.getStateList().subscribe(function (stateData) {
            stateList = stateData;
            _this.stateList = stateList.filter(function (item) { return item.country_id === countryId.toString(); });
        });
    };
    CurriculumUpdateComponent.prototype.generateGradesToList = function (selectedGrade) {
        this.gradesToList = [];
        for (var i = selectedGrade; i < this.grades.length; i++) {
            this.gradesToList.push(this.grades[i]);
        }
        return this.gradesToList;
    };
    CurriculumUpdateComponent.prototype.trimValue = function (value) {
        if (value === null || value === undefined) {
            return value;
        }
        else {
            return value.trim();
        }
    };
    CurriculumUpdateComponent.prototype.ngAfterViewChecked = function () {
        this.validateCurriculumForm();
        this.changeDetectorRef.detectChanges();
    };
    CurriculumUpdateComponent.prototype.validateCurriculumForm = function () {
        var curriculumName, acronym;
        curriculumName = this.trimValue(this.curriculumForm.value.curriculumName);
        acronym = this.trimValue(this.curriculumForm.value.curriculumAcronym);
        if (curriculumName === "" || curriculumName === undefined || curriculumName === null) {
            this.validateForm = true;
        }
        if (acronym === "" || acronym === undefined || acronym === null) {
            this.validateForm = true;
        }
        if (this.curriculumForm.invalid) {
            this.validateForm = true;
        }
        if (this.curriculumForm.valid) {
            this.validateForm = false;
        }
    };
    CurriculumUpdateComponent.prototype.saveAsDraft = function () {
        if (this.curriculumForm.valid) {
            this.curriculumStatus = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__["DRAFT"];
            this.saveCurriculum();
        }
        if (this.curriculumForm.invalid) {
            return;
        }
    };
    CurriculumUpdateComponent.prototype.saveAndPublish = function () {
        if (this.curriculumForm.valid) {
            this.curriculumStatus = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__["ACTIVE"];
            this.saveCurriculum();
        }
        if (this.curriculumForm.invalid) {
            return;
        }
    };
    CurriculumUpdateComponent.prototype.removeSlashInDate = function () {
        this.startDate = this.curriculumForm.get('startDate').value;
        this.startDate = this.startDate.replace("/", "");
        this.endDate = this.curriculumForm.get('endDate').value;
        this.endDate = this.endDate.replace("/", "");
    };
    CurriculumUpdateComponent.prototype.saveCurriculum = function () {
        this.subscribeToSaveResponse(this.curriculumService.updateCurriculum(this.createCurriculumForm()));
    };
    CurriculumUpdateComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onSaveSuccess(); }, function (res) { return _this.onSaveError(); });
    };
    CurriculumUpdateComponent.prototype.onSaveSuccess = function () {
        if (this.curriculumStatus === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__["DRAFT"]) {
            this.pluginService.alertMessage("Curriculum updated successfully", "success");
        }
        else {
            this.pluginService.alertMessage("Curriculum published successfully", "success");
        }
        this.router.navigateByUrl('/curriculum');
        this.curriculumForm.reset();
    };
    CurriculumUpdateComponent.prototype.onSaveError = function () {
        if (this.curriculumStatus === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__["DRAFT"]) {
            this.pluginService.alertMessage("Error while curriculum save", "error");
        }
        else {
            this.pluginService.alertMessage("Error while curriculum publish", "error");
        }
    };
    CurriculumUpdateComponent.prototype.createCurriculumForm = function () {
        this.removeSlashInDate();
        this.curriculum.name = this.curriculumForm.value.curriculumName;
        this.curriculum.acronym = this.curriculumForm.value.curriculumAcronym;
        this.curriculum.description = this.curriculumForm.value.curriculumDescription;
        this.curriculum.startDate = this.startDate;
        this.curriculum.endDate = this.endDate;
        this.curriculum.country = this.selectedCountry.sortname;
        this.curriculum.state = this.selectedState.name;
        this.curriculum.gradesApplicableFrom = this.selectedFromGrade.name;
        this.curriculum.gradesApplicableTo = this.selectedToGrade.name;
        this.curriculum.status = this.curriculumStatus;
        return this.curriculum;
    };
    CurriculumUpdateComponent.prototype.cancelCurriculum = function () {
        this.curriculumForm.reset();
        this.selectedCountry = null;
        this.selectedState = null;
        this.selectedFromGrade = null;
        this.selectedToGrade = null;
    };
    CurriculumUpdateComponent.prototype.onBack = function () {
        var localObj = this;
        swal({
            title: "Are you sure to go previous page ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localObj.router.navigateByUrl('/curriculum');
                localObj.pluginService.sideMenuToggle();
            }
        });
    };
    CurriculumUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./curriculum-update.component.html */ "./src/app/curriculum/curriculum-update.component.html"),
            providers: [_curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _shared_common_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], CurriculumUpdateComponent);
    return CurriculumUpdateComponent;
}());



/***/ }),

/***/ "./src/app/curriculum/curriculum.module.ts":
/*!*************************************************!*\
  !*** ./src/app/curriculum/curriculum.module.ts ***!
  \*************************************************/
/*! exports provided: CurriculumModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumModule", function() { return CurriculumModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _curriculum_manage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./curriculum-manage.component */ "./src/app/curriculum/curriculum-manage.component.ts");
/* harmony import */ var _curriculum_route__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./curriculum.route */ "./src/app/curriculum/curriculum.route.ts");
/* harmony import */ var _curriculum_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./curriculum-create.component */ "./src/app/curriculum/curriculum-create.component.ts");
/* harmony import */ var _curriculum_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./curriculum-update.component */ "./src/app/curriculum/curriculum-update.component.ts");
/* harmony import */ var _curriculum_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./curriculum-details.component */ "./src/app/curriculum/curriculum-details.component.ts");
/* harmony import */ var _curriculum_update_publish_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./curriculum-update-publish.component */ "./src/app/curriculum/curriculum-update-publish.component.ts");
/* harmony import */ var _curriculum_update_unpublish_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./curriculum-update-unpublish.component */ "./src/app/curriculum/curriculum-update-unpublish.component.ts");
/* harmony import */ var _curriculum_delete_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./curriculum-delete.component */ "./src/app/curriculum/curriculum-delete.component.ts");
/* harmony import */ var _curriculum_affiliations_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./curriculum-affiliations.component */ "./src/app/curriculum/curriculum-affiliations.component.ts");

















var CurriculumModule = /** @class */ (function () {
    function CurriculumModule() {
    }
    CurriculumModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_curriculum_route__WEBPACK_IMPORTED_MODULE_9__["curriculumRoute"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                ng_jhipster__WEBPACK_IMPORTED_MODULE_5__["NgJhipsterModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
            ],
            declarations: [
                _curriculum_manage_component__WEBPACK_IMPORTED_MODULE_8__["CurriculumManageComponent"],
                _curriculum_create_component__WEBPACK_IMPORTED_MODULE_10__["CurriculumCreateComponent"],
                _curriculum_update_component__WEBPACK_IMPORTED_MODULE_11__["CurriculumUpdateComponent"],
                _curriculum_details_component__WEBPACK_IMPORTED_MODULE_12__["CurriculumDetailsComponent"],
                _curriculum_delete_component__WEBPACK_IMPORTED_MODULE_15__["CurriculumDeleteComponent"],
                _curriculum_update_publish_component__WEBPACK_IMPORTED_MODULE_13__["CurriculumPublishComponent"],
                _curriculum_update_unpublish_component__WEBPACK_IMPORTED_MODULE_14__["CurriculumUnpublishComponent"],
                _curriculum_affiliations_component__WEBPACK_IMPORTED_MODULE_16__["CurriculumAffiliationsComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], CurriculumModule);
    return CurriculumModule;
}());



/***/ }),

/***/ "./src/app/curriculum/curriculum.route.ts":
/*!************************************************!*\
  !*** ./src/app/curriculum/curriculum.route.ts ***!
  \************************************************/
/*! exports provided: CurriculumResolve, curriculumRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumResolve", function() { return CurriculumResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curriculumRoute", function() { return curriculumRoute; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_model_content_curriculum_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/model/content/curriculum.model */ "./src/app/shared/model/content/curriculum.model.ts");
/* harmony import */ var _curriculum_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _curriculum_manage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./curriculum-manage.component */ "./src/app/curriculum/curriculum-manage.component.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _curriculum_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./curriculum-create.component */ "./src/app/curriculum/curriculum-create.component.ts");
/* harmony import */ var _curriculum_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./curriculum-update.component */ "./src/app/curriculum/curriculum-update.component.ts");
/* harmony import */ var _curriculum_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./curriculum-details.component */ "./src/app/curriculum/curriculum-details.component.ts");
/* harmony import */ var _curriculum_update_publish_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./curriculum-update-publish.component */ "./src/app/curriculum/curriculum-update-publish.component.ts");
/* harmony import */ var _curriculum_update_unpublish_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./curriculum-update-unpublish.component */ "./src/app/curriculum/curriculum-update-unpublish.component.ts");
/* harmony import */ var _curriculum_delete_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./curriculum-delete.component */ "./src/app/curriculum/curriculum-delete.component.ts");
/* harmony import */ var _curriculum_affiliations_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./curriculum-affiliations.component */ "./src/app/curriculum/curriculum-affiliations.component.ts");















var CurriculumResolve = /** @class */ (function () {
    function CurriculumResolve(service) {
        this.service = service;
    }
    CurriculumResolve.prototype.resolve = function (route, state) {
        var id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (response) { return response.ok; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (curriculum) { return curriculum.body; }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _shared_model_content_curriculum_model__WEBPACK_IMPORTED_MODULE_2__["Curriculum"]());
    };
    CurriculumResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_curriculum_service__WEBPACK_IMPORTED_MODULE_3__["CurriculumService"]])
    ], CurriculumResolve);
    return CurriculumResolve;
}());

var curriculumRoute = [
    {
        path: '',
        component: _curriculum_manage_component__WEBPACK_IMPORTED_MODULE_6__["CurriculumManageComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Manage curriculums'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_7__["UserRouteAccessService"]]
    },
    {
        path: 'create',
        component: _curriculum_create_component__WEBPACK_IMPORTED_MODULE_8__["CurriculumCreateComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Create new curriculum',
            action: "create"
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_7__["UserRouteAccessService"]]
    },
    {
        path: ':id/edit',
        component: _curriculum_update_component__WEBPACK_IMPORTED_MODULE_9__["CurriculumUpdateComponent"],
        resolve: {
            curriculum: CurriculumResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Edit curriculum',
            action: 'edit'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_7__["UserRouteAccessService"]]
    }, {
        path: ':id/view',
        component: _curriculum_details_component__WEBPACK_IMPORTED_MODULE_10__["CurriculumDetailsComponent"],
        resolve: {
            curriculum: CurriculumResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'View curriculum',
            action: 'view'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_7__["UserRouteAccessService"]]
    },
    {
        path: ':id/delete',
        component: _curriculum_delete_component__WEBPACK_IMPORTED_MODULE_13__["CurriculumDeleteComponent"],
        resolve: {
            curriculum: CurriculumResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Delete curriculum',
            action: 'delete'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_7__["UserRouteAccessService"]]
    },
    {
        path: ':id/publish',
        component: _curriculum_update_publish_component__WEBPACK_IMPORTED_MODULE_11__["CurriculumPublishComponent"],
        resolve: {
            curriculum: CurriculumResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Publish curriculum',
            action: 'publish'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_7__["UserRouteAccessService"]]
    },
    {
        path: ':id/unpublish',
        component: _curriculum_update_unpublish_component__WEBPACK_IMPORTED_MODULE_12__["CurriculumUnpublishComponent"],
        resolve: {
            curriculum: CurriculumResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Unpublish curriculum',
            action: 'unpublish'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_7__["UserRouteAccessService"]]
    }, {
        path: ':id/affiliations',
        component: _curriculum_affiliations_component__WEBPACK_IMPORTED_MODULE_14__["CurriculumAffiliationsComponent"],
        resolve: {
            curriculum: CurriculumResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Manage curriculum affiliations',
            action: 'unpublish'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_7__["UserRouteAccessService"]]
    }
];


/***/ }),

/***/ "./src/app/curriculum/curriculum.service.ts":
/*!**************************************************!*\
  !*** ./src/app/curriculum/curriculum.service.ts ***!
  \**************************************************/
/*! exports provided: CurriculumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumService", function() { return CurriculumService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");






var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');
var CurriculumService = /** @class */ (function () {
    function CurriculumService(http) {
        this.http = http;
        this.curriculumResourceUrlSearch = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/curricula/search';
        this.curriculumResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/curricula';
    }
    CurriculumService.prototype.createCurriculum = function (curriculum) {
        return this.http.post(this.curriculumResourceUrl, curriculum, { observe: 'response' });
    };
    CurriculumService.prototype.updateCurriculum = function (curriculum) {
        return this.http.put(this.curriculumResourceUrl, curriculum, { observe: 'response' });
    };
    CurriculumService.prototype.find = function (id) {
        return this.http.get(this.curriculumResourceUrl + "/" + id, { observe: 'response' });
    };
    CurriculumService.prototype.getStandardCurriculums = function (req) {
        var options = Object(_shared__WEBPACK_IMPORTED_MODULE_4__["createRequestOption"])(req);
        var reqJSON = {
            "isExtraCurriculum": false
        };
        return this.http.post(this.curriculumResourceUrlSearch, reqJSON, { params: options, observe: 'response' });
    };
    CurriculumService.prototype.getCurriculumSearch = function (req) {
        var options = Object(_shared__WEBPACK_IMPORTED_MODULE_4__["createRequestOption"])(req);
        var reqJSON = {
            "isExtraCurriculum": false,
            "status": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["ACTIVE"]
        };
        return this.http.post(this.curriculumResourceUrlSearch, reqJSON, { params: options, observe: 'response' });
    };
    CurriculumService.prototype.delete = function (id) {
        return this.http.delete(this.curriculumResourceUrl + "/" + id, { observe: 'response' });
    };
    CurriculumService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CurriculumService);
    return CurriculumService;
}());



/***/ }),

/***/ "./src/app/shared/constants/common.constants.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/constants/common.constants.ts ***!
  \******************************************************/
/*! exports provided: DRAFT, ACTIVE, INACTIVE, ARCHIVED, NOCHANGE, CREATED, EDITED, DELETED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAFT", function() { return DRAFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVE", function() { return ACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INACTIVE", function() { return INACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARCHIVED", function() { return ARCHIVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOCHANGE", function() { return NOCHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATED", function() { return CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITED", function() { return EDITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETED", function() { return DELETED; });
var DRAFT = 'DRAFT';
var ACTIVE = 'ACTIVE';
var INACTIVE = 'INACTIVE';
var ARCHIVED = 'ARCHIVED';
var NOCHANGE = 'NOCHANGE';
var CREATED = 'CREATED';
var EDITED = 'EDITED';
var DELETED = 'DELETED';


/***/ }),

/***/ "./src/app/shared/model/content/curriculum.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/model/content/curriculum.model.ts ***!
  \**********************************************************/
/*! exports provided: Curriculum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Curriculum", function() { return Curriculum; });
var Curriculum = /** @class */ (function () {
    function Curriculum(id, acronym, country, description, endDate, gradesApplicableFrom, gradesApplicableTo, isExtraCurriculum, name, organisationId, curriculumTypeId, startDate, state, status, checked) {
        this.id = id;
        this.acronym = acronym;
        this.country = country;
        this.description = description;
        this.endDate = endDate;
        this.gradesApplicableFrom = gradesApplicableFrom;
        this.gradesApplicableTo = gradesApplicableTo;
        this.isExtraCurriculum = isExtraCurriculum;
        this.name = name;
        this.organisationId = organisationId;
        this.curriculumTypeId = curriculumTypeId;
        this.startDate = startDate;
        this.state = state;
        this.status = status;
        this.checked = checked;
        this.checked = false;
    }
    return Curriculum;
}());



/***/ })

}]);
//# sourceMappingURL=curriculum-curriculum-module.js.map