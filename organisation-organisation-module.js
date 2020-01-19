(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["organisation-organisation-module"],{

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

/***/ "./src/app/organisation-sub-school-user/organisation-school-user-create.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/organisation-sub-school-user/organisation-school-user-create.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row my-3 px-2\">\n    <div class=\"col-xxl-12\">\n        <div class=\"btn btn-danger\" (click)=\"onBack()\">\n            <i class=\"fa fa-chevron-left mr-2\"></i>Back\n        </div>\n    </div>\n</div>\n<div id=\"stepperTab\" [formGroup]=\"organisationSchoolAdminUserForm\">\n    <ul id=\"progressbar\">\n        <li class=\"active\">\n            <span class=\"bar\">\n            </span>\n        </li>\n        <li>\n            <span class=\"bar\">\n            </span>\n        </li>\n        <li>\n        </li>\n    </ul>\n    <fieldset>\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12\">\n                <h5 class=\"font-20\">Personal information</h5>\n            </div>\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"firstName\">First name</label>\n            <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"Enter first name\"\n                formControlName=\"firstName\">\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"lastName\">Last name</label>\n            <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Enter last name\"\n                formControlName=\"lastName\">\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"gender\">Gender</label>\n            <div class=\"row mx-0\">\n                <div class=\"radio mr-2\">\n                    <input type=\"radio\" id=\"male\" formControlName=\"gender\" value=\"MALE\" name=\"gender\">\n                    <label class=\"custom-control-label\" for=\"male\">Male</label>\n                </div>\n                <div class=\"radio mr-2\">\n                    <input type=\"radio\" id=\"female\" formControlName=\"gender\" value=\"FEMALE\" name=\"gender\">\n                    <label class=\"custom-control-label\" for=\"female\">Female</label>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"dob\">Date of birth</label>\n            <div class=\"input-group date datepicker-default\" data-date-format=\"dd-mm-yy\" id=\"dateOfBirth\">\n                <input class=\"form-control\" type=\"text\" placeholder=\"Select date\">\n                <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n            </div>\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"dateOfJoining\">Date of joining</label>\n            <div class=\"input-group date datepicker-default\" data-date-format=\"dd-mm-yy\" id=\"joiningDate\">\n                <input class=\"form-control\" type=\"text\" placeholder=\"Select date\">\n                <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n            </div>\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" formControlName=\"emailId\">\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"mobile\">Mobile number</label>\n            <input type=\"number\" class=\"form-control\" id=\"mobile\" placeholder=\"Enter phone number\"\n                formControlName=\"phoneNumber\">\n        </div>\n        <div class=\"next btn btn-success mx-3 float-right\">\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\n        </div>\n    </fieldset>\n    <fieldset>\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12 d-flex justify-content-between align-items-start\">\n                <h5 class=\"font-20\">Role information</h5>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xxl-12 d-flex justify-content-start\" *ngFor=\"let data of authorities\">\n                <div class=\"checkbox\">\n                    <input type=\"checkbox\" [id]=\"data.id\" [checked]=\"data.checked\" (click)=\"onRoleSelection($event)\">\n                    <label for=\"{{data.id}}\"></label>\n                </div>\n                <label for=\"{{data.id}}\">\n                    {{data.name}}\n                </label>\n                <div class=\"btn btn-outline-primary btn-sm ml-2 mb-2\">\n                    <i class=\"fa fa-user mr-2\"></i> Role information\n                </div>\n            </div>\n        </div>\n        <div class=\"next btn btn-success mx-3 float-right d-block\" (click)=\"mapOrgSchoolAdminUserData()\">\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\n        </div>\n        <div class=\"previous btn btn-danger float-right\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n        </div>\n    </fieldset>\n    <fieldset>\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12\">\n                <h2 class=\"font-20\">Summary</h2>\n            </div>\n        </div>\n        <div class=\"accordion\" id=\"organisationCnf\">\n            <div class=\"mb-2 acd-group\">\n                <div class=\"card-header border\">\n                    <h5 class=\"mb-0\">\n                        <a href=\"#collpaseAccordion1\" class=\"btn-block text-left text-muted acd-heading\"\n                            data-toggle=\"collapse\" aria-expanded=\"true\">Personal information</a>\n                    </h5>\n                </div>\n                <div id=\"collpaseAccordion1\" class=\"collapse show\" data-parent=\"#organisationCnf\">\n                    <div class=\"card-body p-3\">\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>First name</b></p>\n                            <p>{{organisationSchoolAdminUser.user.givenName}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Last name</b></p>\n                            <p>{{organisationSchoolAdminUser.user.lastName}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Gender</b></p>\n                            <p>{{organisationSchoolAdminUser.user.gender}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Date of birth</b></p>\n                            <p>{{dateOfBirth}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Date of joining</b></p>\n                            <p>{{joiningDate}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Email</b></p>\n                            <p>{{organisationSchoolAdminUser.user.email}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Phone number</b></p>\n                            <p>{{organisationSchoolAdminUser.user.mobileNumber}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"mb-2 acd-group\">\n                <div class=\"card-header border\">\n                    <h5 class=\"mb-0\">\n                        <a href=\"#collpaseAccordion3\" class=\"btn-block text-left text-muted acd-heading collapsed\"\n                            data-toggle=\"collapse\">Role information</a>\n                    </h5>\n                </div>\n                <div id=\"collpaseAccordion3\" class=\"collapse\" data-parent=\"#organisationCnf\">\n                    <div class=\"card-body p-3\">\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Selected role</b></p>\n                            <p>\n                                {{authorityNames}}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"btn btn-success mx-3 float-right\" (click)=\"saveOrganisationSchoolAdminUser()\">\n            <i class=\"fa fa-save mr-2\"></i> Save\n        </div>\n        <div class=\"previous btn btn-danger float-right\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n        </div>\n    </fieldset>\n</div>"

/***/ }),

/***/ "./src/app/organisation-sub-school-user/organisation-school-user-create.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/organisation-sub-school-user/organisation-school-user-create.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: OrganisationSchoolUserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSchoolUserCreateComponent", function() { return OrganisationSchoolUserCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-school-user.service */ "./src/app/organisation-sub-school-user/organisation-school-user.service.ts");






var OrganisationSchoolUserCreateComponent = /** @class */ (function () {
    function OrganisationSchoolUserCreateComponent(_router, activatedRoute, formBuilder, pluginService, organisationService) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.organisationService = organisationService;
        this.organisationSchoolAdminUser = {};
        this.authorities = [];
        this.organisationSchoolAdminUser = {};
        this.organisationSchoolAdminUser.user = {};
        this.authorities = [
            {
                id: "schoolAdmin",
                role: "SCHOOL_ADMIN",
                name: "School admin",
                checked: false
            },
            {
                id: "principal",
                role: "PRINCIPAL",
                name: "Principal",
                checked: false
            }
        ];
    }
    OrganisationSchoolUserCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pluginService.newStepperJs();
        this.createOrganisationUserForm();
        this.pluginService.datePicker('#dateOfBirth');
        this.pluginService.datePicker('#joiningDate');
        this.activatedRoute.params.subscribe(function (params) {
            _this.organisationId = params['id'];
            _this.schoolId = params['schoolId'];
        });
    };
    OrganisationSchoolUserCreateComponent.prototype.createOrganisationUserForm = function () {
        this.organisationSchoolAdminUserForm = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            dateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            dateOfJoining: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("")
        });
    };
    OrganisationSchoolUserCreateComponent.prototype.setDateFormat = function (dateValue) {
        var dateFormat = "";
        dateFormat = dateValue + "T12:00:22Z";
        return dateFormat;
    };
    OrganisationSchoolUserCreateComponent.prototype.mapOrgSchoolAdminUserData = function () {
        var updatedAuthorities = [], selectedAuthorities = [], joiningDate, dateOfBirth, dobObject, dojObject;
        this.organisationSchoolAdminUser.organisationId = this.organisationId;
        this.organisationSchoolAdminUser.schoolId = this.schoolId;
        for (var i = 0; i < this.authorities.length; i++) {
            if (this.authorities[i].checked === true) {
                updatedAuthorities.push(this.authorities[i].role);
                selectedAuthorities.push(this.authorities[i].name);
            }
        }
        this.authorityNames = selectedAuthorities.toString();
        dobObject = $("#dateOfBirth").datepicker("getDate");
        this.dateOfBirth = $.datepicker.formatDate("yy-mm-dd", dobObject);
        dojObject = $("#joiningDate").datepicker("getDate");
        this.joiningDate = $.datepicker.formatDate("yy-mm-dd", dojObject);
        dateOfBirth = this.setDateFormat(this.dateOfBirth);
        joiningDate = this.setDateFormat(this.joiningDate);
        this.organisationSchoolAdminUser.user = {
            activated: true,
            givenName: this.organisationSchoolAdminUserForm.value.firstName,
            lastName: this.organisationSchoolAdminUserForm.value.lastName,
            gender: this.organisationSchoolAdminUserForm.value.gender,
            dateOfBirth: dateOfBirth,
            joiningDate: joiningDate,
            email: this.organisationSchoolAdminUserForm.value.emailId,
            mobileNumber: this.organisationSchoolAdminUserForm.value.phoneNumber.toString(),
            //TODO: login and password need Kiran's feedback
            login: this.organisationSchoolAdminUserForm.value.firstName,
            password: this.organisationSchoolAdminUserForm.value.firstName,
            authorities: updatedAuthorities
        };
    };
    OrganisationSchoolUserCreateComponent.prototype.onRoleSelection = function (event) {
        var eventChecked, selectedId;
        eventChecked = event.target.checked;
        selectedId = event.target.id;
        this.authorities.find(function (item) { return item.id === selectedId; }).checked = eventChecked;
    };
    OrganisationSchoolUserCreateComponent.prototype.saveOrganisationSchoolAdminUser = function () {
        this.subscribeToSaveResponse(this.organisationService.createSchoolUser(this.organisationSchoolAdminUser));
    };
    OrganisationSchoolUserCreateComponent.prototype.subscribeToSaveResponse = function (resp) {
        var _this = this;
        resp.subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res); });
    };
    OrganisationSchoolUserCreateComponent.prototype.onSaveSuccess = function (res) {
        this.pluginService.alertMessage("Organisation school admin user created successfully", "success");
        this.previousPage();
    };
    OrganisationSchoolUserCreateComponent.prototype.onSaveError = function (res) {
        this.pluginService.alertMessage("Could not save organisation school admin user contact admin", "error");
    };
    OrganisationSchoolUserCreateComponent.prototype.previousPage = function () {
        this._router.navigate(['/organisation', this.organisationId, 'school', this.schoolId, 'school-user']);
    };
    OrganisationSchoolUserCreateComponent.prototype.onBack = function () {
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
                localObj.previousPage();
            }
        });
    };
    OrganisationSchoolUserCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./organisation-school-user-create.component.html */ "./src/app/organisation-sub-school-user/organisation-school-user-create.component.html"),
            providers: [_organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSchoolUserService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
            _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSchoolUserService"]])
    ], OrganisationSchoolUserCreateComponent);
    return OrganisationSchoolUserCreateComponent;
}());



/***/ }),

/***/ "./src/app/organisation-sub-school-user/organisation-school-user-delete.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/organisation-sub-school-user/organisation-school-user-delete.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: OrganisationSchoolUserDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSchoolUserDeleteComponent", function() { return OrganisationSchoolUserDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-school-user.service */ "./src/app/organisation-sub-school-user/organisation-school-user.service.ts");






var OrganisationSchoolUserDeleteComponent = /** @class */ (function () {
    function OrganisationSchoolUserDeleteComponent(router, activatedRoute, eventManager, organisationService, pluginService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.eventManager = eventManager;
        this.organisationService = organisationService;
        this.pluginService = pluginService;
    }
    OrganisationSchoolUserDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.organisationId = params['id'];
            _this.schoolId = params['schoolId'];
            _this.login = params['login'];
            _this.deleteOrganisationSchoolAdminUser();
        });
    };
    OrganisationSchoolUserDeleteComponent.prototype.subscribeToDeleteResponse = function (resp) {
        var _this = this;
        resp.subscribe(function (res) { return _this.onDeleteSuccess(res); }, function (res) { return _this.onDeleteError(res); });
    };
    OrganisationSchoolUserDeleteComponent.prototype.deleteOrganisationSchoolAdminUser = function () {
        var localthisObject = this;
        swal({
            title: "Are you sure to delete this organisation school admin user ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localthisObject.confirmDelete(localthisObject.login);
            }
            else {
                localthisObject.previousUrl();
            }
        });
    };
    OrganisationSchoolUserDeleteComponent.prototype.confirmDelete = function (login) {
        this.subscribeToDeleteResponse(this.organisationService.deleteSchoolUser(login));
    };
    OrganisationSchoolUserDeleteComponent.prototype.previousUrl = function () {
        this.router.navigate(['/organisation', this.organisationId, 'school', this.schoolId, 'school-user']);
    };
    OrganisationSchoolUserDeleteComponent.prototype.onDeleteSuccess = function (resp) {
        this.pluginService.alertMessage("Organisation school admin user deleted successfully", "success");
        this.previousUrl();
    };
    OrganisationSchoolUserDeleteComponent.prototype.onDeleteError = function (err) {
        this.pluginService.alertMessage("Could not delete organisation school admin user, please contact admin", "error");
    };
    OrganisationSchoolUserDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./organisation-school-user-manage.component.html */ "./src/app/organisation-sub-school-user/organisation-school-user-manage.component.html"),
            providers: [_organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSchoolUserService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"],
            _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSchoolUserService"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"]])
    ], OrganisationSchoolUserDeleteComponent);
    return OrganisationSchoolUserDeleteComponent;
}());



/***/ }),

/***/ "./src/app/organisation-sub-school-user/organisation-school-user-details.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/organisation-sub-school-user/organisation-school-user-details.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row my-3\">\n    <div class=\"col-xxl-12 d-flex justify-content-between\">\n        <div class=\"btn btn-danger\" (click)=\"onBack()\">\n            <i class=\"fa fa-chevron-left mr-2\"></i>Back\n        </div>\n        <a class=\"btn btn-success\"\n            [routerLink]=\"['/organisation',organisationId, 'school', schoolId, 'school-user', schoolUserId, 'edit']\">\n            <i class=\"fa fa-edit mr-2\"></i>Edit organisation school user\n        </a>\n    </div>\n</div>\n\n<div class=\"accordion\" id=\"organisationCnf\">\n    <div class=\"mb-2 acd-group\">\n        <div class=\"card-header border\">\n            <h5 class=\"mb-0\">\n                <a href=\"#collpaseAccordion1\" class=\"btn-block text-left text-muted acd-heading\" data-toggle=\"collapse\"\n                    aria-expanded=\"true\">Personal information</a>\n            </h5>\n        </div>\n        <div id=\"collpaseAccordion1\" class=\"collapse show\" data-parent=\"#organisationCnf\">\n            <div class=\"card-body p-3\">\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>First name</b></p>\n                    <p>{{organisationSchoolAdminUser.givenName}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Last name</b></p>\n                    <p>{{organisationSchoolAdminUser.lastName}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Gender</b></p>\n                    <p>{{organisationSchoolAdminUser.gender}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Date of birth</b></p>\n                    <p>{{dateOfBirth}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Date of joining</b></p>\n                    <p>{{joiningDate}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Email</b></p>\n                    <p>{{organisationSchoolAdminUser.email}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Phone number</b></p>\n                    <p>{{organisationSchoolAdminUser.mobileNumber}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"mb-2 acd-group\">\n        <div class=\"card-header border\">\n            <h5 class=\"mb-0\">\n                <a href=\"#collpaseAccordion3\" class=\"btn-block text-left text-muted acd-heading collapsed\"\n                    data-toggle=\"collapse\">Role information</a>\n            </h5>\n        </div>\n        <div id=\"collpaseAccordion3\" class=\"collapse\" data-parent=\"#organisationCnf\">\n            <div class=\"card-body p-3\">\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Selected role</b></p>\n                    <p>\n                        {{authorityNames}}\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/organisation-sub-school-user/organisation-school-user-details.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/organisation-sub-school-user/organisation-school-user-details.component.ts ***!
  \********************************************************************************************/
/*! exports provided: OrganisationSchoolUserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSchoolUserDetailsComponent", function() { return OrganisationSchoolUserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-school-user.service */ "./src/app/organisation-sub-school-user/organisation-school-user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var OrganisationSchoolUserDetailsComponent = /** @class */ (function () {
    function OrganisationSchoolUserDetailsComponent(_router, activatedRoute, formBuilder, pluginService, organisationService) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.organisationService = organisationService;
        this.organisationSchoolAdminUser = {};
        this.authorities = [];
        this.organisationSchoolAdminUser = {};
        this.authorities = [
            {
                id: "schoolAdmin",
                role: "SCHOOL_ADMIN",
                name: "School admin",
                checked: false
            },
            {
                id: "principal",
                role: "PRINCIPAL",
                name: "Principal",
                checked: false
            }
        ];
    }
    OrganisationSchoolUserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.organisationId = params['id'];
            _this.schoolId = params['schoolId'];
            _this.schoolUserId = params['schoolUserId'];
            _this.getOrganisationUserDetails();
        });
    };
    OrganisationSchoolUserDetailsComponent.prototype.getOrganisationUserDetails = function () {
        var _this = this;
        this.organisationService
            .getUserDetailByUserId(this.schoolUserId)
            .subscribe(function (res) { return _this.assignOrganisationSchoolAdminUser(res.body); }, function (res) { return _this.onError(res.message); });
    };
    OrganisationSchoolUserDetailsComponent.prototype.assignOrganisationSchoolAdminUser = function (data) {
        var organisationSchoolAdminUser = data[0];
        this.patchOrganisationSchoolAdminUserForm(organisationSchoolAdminUser);
    };
    OrganisationSchoolUserDetailsComponent.prototype.convertDateFormat = function (dateValue) {
        var dateFormat = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(dateValue, 'dd-MM-yyyy', 'en-us');
        return dateFormat;
    };
    OrganisationSchoolUserDetailsComponent.prototype.patchOrganisationSchoolAdminUserForm = function (organisationSchoolAdminUser) {
        var authorities = [], selectedAuthorities = [];
        this.dateOfBirth = this.convertDateFormat(organisationSchoolAdminUser.dateOfBirth);
        this.joiningDate = this.convertDateFormat(organisationSchoolAdminUser.joiningDate);
        authorities = organisationSchoolAdminUser.authorities;
        for (var i = 0; i < this.authorities.length; i++) {
            for (var j = 0; j < authorities.length; j++) {
                if (this.authorities[i].role === authorities[j]) {
                    this.authorities[i].checked = true;
                    selectedAuthorities.push(this.authorities[i].name);
                }
            }
        }
        this.authorityNames = selectedAuthorities.toString();
        this.organisationSchoolAdminUser = organisationSchoolAdminUser;
    };
    OrganisationSchoolUserDetailsComponent.prototype.onError = function (res) {
        this.pluginService.alertMessage("Could not get organisation school admin user details contact admin", "error");
    };
    OrganisationSchoolUserDetailsComponent.prototype.previousPage = function () {
        this._router.navigate(['/organisation', this.organisationId, 'school', this.schoolId, 'school-user']);
    };
    OrganisationSchoolUserDetailsComponent.prototype.onBack = function () {
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
                localObj.previousPage();
            }
        });
    };
    OrganisationSchoolUserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./organisation-school-user-details.component.html */ "./src/app/organisation-sub-school-user/organisation-school-user-details.component.html"),
            providers: [_organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSchoolUserService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
            _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSchoolUserService"]])
    ], OrganisationSchoolUserDetailsComponent);
    return OrganisationSchoolUserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/organisation-sub-school-user/organisation-school-user-manage.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/organisation-sub-school-user/organisation-school-user-manage.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 d-flex justify-content-between my-3\">\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\n        <i class=\"fa fa-chevron-left mr-2\"></i>Back\n    </div>\n    <a [routerLink]=\"['/organisation',organisationId, 'school', schoolId , 'school-user', 'create']\">\n        <div class=\"btn btn-primary\">\n            <i class=\"fa fa-plus-circle mr-2\"></i> Create school user\n        </div>\n    </a>\n</div>\n<div class=\"table-responsive\" *ngIf=\"organisationSchoolAdminUserList\">\n    <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\n        <thead>\n            <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"reset.bind(this)\">\n                <th jhiSortBy=\"userId\">User ID<span class=\"fa fa-sort ml-1\"></span></th>\n                <th jhiSortBy=\"loginId\">Login ID <span class=\"fa fa-sort ml-1\"></span></th>\n                <th jhiSortBy=\"fName\">First name <span class=\"fa fa-sort ml-1\"></span></th>\n                <th jhiSortBy=\"lName\">Last name <span class=\"fa fa-sort ml-1\"></span></th>\n                <th jhiSortBy=\"emailId\">Email ID<span class=\"fa fa-sort ml-1\"></span></th>\n                <th class=\"fixed-column\">Actions</th>\n            </tr>\n        </thead>\n        <tbody infinite-scroll (scrolled)=\"loadPage(page + 1)\" [infiniteScrollDisabled]=\"page >= links['last']\"\n            [infiniteScrollDistance]=\"0\">\n            <tr *ngFor=\"let orgUser of organisationSchoolAdminUserList;trackBy: trackId;\">\n                <td data-column=\"User ID\">{{orgUser.user.id}}</td>\n                <td data-column=\"Login ID\">{{orgUser.user.login}}</td>\n                <td data-column=\"First Name\">{{orgUser.user.givenName}}</td>\n                <td data-column=\"Last Name\">{{orgUser.user.lastName}}</td>\n                <td data-column=\"Email ID\">{{orgUser.user.email}}</td>\n                <td class=\"fixed-column\" data-column=\"Actions\">\n                    <div>\n                        <a class=\"btn btn-outline-info btn-icon-size mr-1 mb-1\"\n                            [routerLink]=\"['/organisation',organisationId, 'school' , schoolId, 'school-user', orgUser.user.id, 'view']\">\n                            <i class=\"fa fa-eye\"></i>\n                        </a>\n                        <a class=\"btn btn-outline-success btn-icon-size mr-1 mb-1\"\n                            [routerLink]=\"['/organisation',organisationId,  'school' , schoolId, 'school-user',orgUser.user.id, 'edit']\">\n                            <i class=\"fa fa-edit\"></i>\n                        </a>\n                        <a class=\"btn btn-outline-danger btn-icon-size mr-1 mb-1\"\n                            [routerLink]=\"['/organisation',organisationId,  'school' , schoolId, 'school-user', orgUser.user.login, 'delete']\">\n                            <i class=\"fa fa-trash\"></i>\n                        </a>\n                        <a class=\"btn btn-outline-danger btn-icon-size mb-1\"\n                            [routerLink]=\"['/organisation',organisationId,  'school' , schoolId, 'school-user', orgUser.user.id, 'reset-pin']\">\n                            <i class=\"fa fa-key\"></i>\n                        </a>\n                    </div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/organisation-sub-school-user/organisation-school-user-manage.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/organisation-sub-school-user/organisation-school-user-manage.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: OrganisationSchoolUserManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSchoolUserManageComponent", function() { return OrganisationSchoolUserManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./organisation-school-user.service */ "./src/app/organisation-sub-school-user/organisation-school-user.service.ts");



//import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';





var OrganisationSchoolUserManageComponent = /** @class */ (function () {
    function OrganisationSchoolUserManageComponent(_router, activatedRoute, organisationSubSchoolService, eventManager, parseLinks, principalService, pluginService) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.organisationSubSchoolService = organisationSubSchoolService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.organisationSchoolAdminUserList = [];
        this.itemsPerPage = _shared__WEBPACK_IMPORTED_MODULE_5__["ITEMS_PER_PAGE"];
        this.page = 0;
        this.links = {
            last: 0
        };
        this.predicate = 'id';
        // descending
        this.reverse = false;
    }
    OrganisationSchoolUserManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principalService.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInOrganisationSchoolAdminUser();
        this.activatedRoute.params.subscribe(function (params) {
            _this.organisationId = params['id'];
            _this.schoolId = params['schoolId'];
            _this.getSchoolUserBySchoolId();
        });
    };
    OrganisationSchoolUserManageComponent.prototype.getSchoolUserBySchoolId = function () {
        var _this = this;
        this.organisationSubSchoolService
            .getSchoolUserBySchoolId(this.organisationId, this.schoolId)
            .subscribe(function (res) { return _this.assignOrgUserList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    OrganisationSchoolUserManageComponent.prototype.assignOrgUserList = function (data) {
        this.organisationSchoolAdminUserList = data;
    };
    OrganisationSchoolUserManageComponent.prototype.onError = function (errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    };
    OrganisationSchoolUserManageComponent.prototype.reset = function () {
        this.page = 0;
        this.organisationSchoolAdminUserList = [];
        this.getSchoolUserBySchoolId();
    };
    OrganisationSchoolUserManageComponent.prototype.loadPage = function (page) {
        this.page = page;
        this.getSchoolUserBySchoolId();
    };
    OrganisationSchoolUserManageComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    OrganisationSchoolUserManageComponent.prototype.trackId = function (index, item) {
        return item.organisationId;
    };
    OrganisationSchoolUserManageComponent.prototype.registerChangeInOrganisationSchoolAdminUser = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('organisationSchoolUserListModification', function (response) { return _this.reset(); });
    };
    OrganisationSchoolUserManageComponent.prototype.sort = function () {
        var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    };
    OrganisationSchoolUserManageComponent.prototype.ngDestroy = function () {
        this.eventSubscriber.unsubscribe();
    };
    OrganisationSchoolUserManageComponent.prototype.onBack = function () {
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
                localObj.previousPage();
            }
        });
    };
    OrganisationSchoolUserManageComponent.prototype.previousPage = function () {
        this._router.navigate(['/organisation', this.organisationId, 'school']);
    };
    OrganisationSchoolUserManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./organisation-school-user-manage.component.html */ "./src/app/organisation-sub-school-user/organisation-school-user-manage.component.html"),
            providers: [_organisation_school_user_service__WEBPACK_IMPORTED_MODULE_7__["OrganisationSchoolUserService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_7__["OrganisationSchoolUserService"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"],
            _core__WEBPACK_IMPORTED_MODULE_4__["Principal"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"]])
    ], OrganisationSchoolUserManageComponent);
    return OrganisationSchoolUserManageComponent;
}());



/***/ }),

/***/ "./src/app/organisation-sub-school-user/organisation-school-user-update-password-reset.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/organisation-sub-school-user/organisation-school-user-update-password-reset.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: OrganisationSchoolUserUpdatePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSchoolUserUpdatePasswordComponent", function() { return OrganisationSchoolUserUpdatePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrganisationSchoolUserUpdatePasswordComponent = /** @class */ (function () {
    function OrganisationSchoolUserUpdatePasswordComponent() {
    }
    OrganisationSchoolUserUpdatePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./organisation-school-user-manage.component.html */ "./src/app/organisation-sub-school-user/organisation-school-user-manage.component.html"),
            providers: []
        })
    ], OrganisationSchoolUserUpdatePasswordComponent);
    return OrganisationSchoolUserUpdatePasswordComponent;
}());



/***/ }),

/***/ "./src/app/organisation-sub-school-user/organisation-school-user-update-unlock.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/organisation-sub-school-user/organisation-school-user-update-unlock.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: OrganisationSchoolUserUpdateUnlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSchoolUserUpdateUnlockComponent", function() { return OrganisationSchoolUserUpdateUnlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrganisationSchoolUserUpdateUnlockComponent = /** @class */ (function () {
    function OrganisationSchoolUserUpdateUnlockComponent() {
    }
    OrganisationSchoolUserUpdateUnlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./organisation-school-user-manage.component.html */ "./src/app/organisation-sub-school-user/organisation-school-user-manage.component.html"),
            providers: []
        })
    ], OrganisationSchoolUserUpdateUnlockComponent);
    return OrganisationSchoolUserUpdateUnlockComponent;
}());



/***/ }),

/***/ "./src/app/organisation-sub-school-user/organisation-school-user-update.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/organisation-sub-school-user/organisation-school-user-update.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row my-3 px-2\">\n    <div class=\"col-xxl-12\">\n        <div class=\"btn btn-danger\" (click)=\"onBack()\">\n            <i class=\"fa fa-chevron-left mr-2\"></i>Back\n        </div>\n    </div>\n</div>\n<div id=\"stepperTab\" [formGroup]=\"organisationUserForm\">\n    <ul id=\"progressbar\">\n        <li class=\"active\">\n            <span class=\"bar\">\n            </span>\n        </li>\n        <li>\n            <span class=\"bar\">\n            </span>\n        </li>\n        <li>\n        </li>\n    </ul>\n    <fieldset>\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12\">\n                <h5 class=\"font-20\">Personal information</h5>\n            </div>\n        </div>\n\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"firstName\">First name</label>\n            <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"Enter first name\"\n                formControlName=\"firstName\">\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"lastName\">Last name</label>\n            <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Enter last name\"\n                formControlName=\"lastName\">\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"gender\">Gender</label>\n            <div class=\"row mx-0\">\n                <div class=\"radio mr-2\">\n                    <input type=\"radio\" id=\"male\" formControlName=\"gender\" value=\"MALE\" name=\"gender\">\n                    <label class=\"custom-control-label\" for=\"male\">Male</label>\n                </div>\n                <div class=\"radio mr-2\">\n                    <input type=\"radio\" id=\"female\" formControlName=\"gender\" value=\"FEMALE\" name=\"gender\">\n                    <label class=\"custom-control-label\" for=\"female\">Female</label>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"dob\">Date of birth</label>\n            <div class=\"input-group date datepicker-default\" data-date-format=\"dd-mm-yy\" id=\"dateOfBirth\">\n                <input class=\"form-control\" type=\"text\" formControlName=\"dateOfBirth\" placeholder=\"Select date\">\n                <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n            </div>\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"dateOfJoining\">Date of joining</label>\n            <div class=\"input-group date datepicker-default\" data-date-format=\"dd-mm-yy\" id=\"joiningDate\">\n                <input class=\"form-control\" type=\"text\" formControlName=\"dateOfJoining\" placeholder=\"Select date\">\n                <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n            </div>\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" formControlName=\"emailId\">\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"mobile\">Mobile number</label>\n            <input type=\"number\" class=\"form-control\" id=\"mobile\" placeholder=\"Enter phone number\"\n                formControlName=\"phoneNumber\">\n        </div>\n        <div class=\"next btn btn-success mx-3 float-right\">\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\n        </div>\n    </fieldset>\n    <fieldset>\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12 d-flex justify-content-between align-items-start\">\n                <h5 class=\"font-20\">Role information</h5>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xxl-12 d-flex justify-content-start\" *ngFor=\"let data of authorities\">\n                <div class=\"checkbox\">\n                    <input type=\"checkbox\" [id]=\"data.id\" [checked]=\"data.checked\" (click)=\"onRoleSelection($event)\">\n                    <label for=\"{{data.id}}\"></label>\n                </div>\n                <label for=\"{{data.id}}\">\n                    {{data.name}}\n                </label>\n                <div class=\"btn btn-outline-primary btn-sm ml-2 mb-2\">\n                    <i class=\"fa fa-user mr-2\"></i> Role information\n                </div>\n            </div>\n        </div>\n        <div class=\"next btn btn-success mx-3 float-right d-block\" (click)=\"mapOrgSchoolAdminUserData()\">\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\n        </div>\n        <div class=\"previous btn btn-danger float-right\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n        </div>\n    </fieldset>\n    <fieldset>\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12\">\n                <h2 class=\"font-20\">Summary</h2>\n            </div>\n        </div>\n        <div class=\"accordion\" id=\"organisationCnf\">\n            <div class=\"mb-2 acd-group\">\n                <div class=\"card-header border\">\n                    <h5 class=\"mb-0\">\n                        <a href=\"#collpaseAccordion1\" class=\"btn-block text-left text-muted acd-heading\"\n                            data-toggle=\"collapse\" aria-expanded=\"true\">Personal information</a>\n                    </h5>\n                </div>\n                <div id=\"collpaseAccordion1\" class=\"collapse show\" data-parent=\"#organisationCnf\">\n                    <div class=\"card-body p-3\">\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>First name</b></p>\n                            <p>{{organisationSchoolAdminUser.givenName}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Last name</b></p>\n                            <p>{{organisationSchoolAdminUser.lastName}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Gender</b></p>\n                            <p>{{organisationSchoolAdminUser.gender}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Date of birth</b></p>\n                            <p>{{dateOfBirth}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Date of joining</b></p>\n                            <p>{{joiningDate}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Phone number</b></p>\n                            <p>{{organisationSchoolAdminUser.mobileNumber}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Email</b></p>\n                            <p>{{organisationSchoolAdminUser.email}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"mb-2 acd-group\">\n                <div class=\"card-header border\">\n                    <h5 class=\"mb-0\">\n                        <a href=\"#collpaseAccordion3\" class=\"btn-block text-left text-muted acd-heading collapsed\"\n                            data-toggle=\"collapse\">Role information</a>\n                    </h5>\n                </div>\n                <div id=\"collpaseAccordion3\" class=\"collapse\" data-parent=\"#organisationCnf\">\n                    <div class=\"card-body p-3\">\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Selected role</b></p>\n                            <p>\n                                {{authorityNames}}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"btn btn-success mx-3 float-right\" (click)=\"saveOrganisationSchoolAdminUser()\">\n            <i class=\"fa fa-save mr-2\"></i> Save\n        </div>\n        <div class=\"previous btn btn-danger float-right\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n        </div>\n    </fieldset>\n</div>"

/***/ }),

/***/ "./src/app/organisation-sub-school-user/organisation-school-user-update.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/organisation-sub-school-user/organisation-school-user-update.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: OrganisationSchoolUserUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSchoolUserUpdateComponent", function() { return OrganisationSchoolUserUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-school-user.service */ "./src/app/organisation-sub-school-user/organisation-school-user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var OrganisationSchoolUserUpdateComponent = /** @class */ (function () {
    function OrganisationSchoolUserUpdateComponent(_router, activatedRoute, formBuilder, pluginService, organisationService) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.organisationService = organisationService;
        this.organisationSchoolAdminUser = {};
        this.authorities = [];
        this.organisationSchoolAdminUser = {};
        this.authorities = [
            {
                id: "schoolAdmin",
                role: "SCHOOL_ADMIN",
                name: "School admin",
                checked: false
            },
            {
                id: "principal",
                role: "PRINCIPAL",
                name: "Principal",
                checked: false
            }
        ];
    }
    OrganisationSchoolUserUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pluginService.newStepperJs();
        this.createOrganisationUserForm();
        this.pluginService.datePicker('#dateOfBirth');
        this.pluginService.datePicker('#joiningDate');
        this.activatedRoute.params.subscribe(function (params) {
            _this.organisationId = params['id'];
            _this.schoolId = params['schoolId'];
            _this.schoolUserId = params['schoolUserId'];
            _this.getOrganisationUserDetails();
        });
    };
    OrganisationSchoolUserUpdateComponent.prototype.createOrganisationUserForm = function () {
        this.organisationUserForm = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            dateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            dateOfJoining: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("")
        });
    };
    OrganisationSchoolUserUpdateComponent.prototype.getOrganisationUserDetails = function () {
        var _this = this;
        this.organisationService
            .getUserDetailByUserId(this.schoolUserId)
            .subscribe(function (res) { return _this.assignOrganisationUser(res.body); }, function (res) { return _this.onError(res.message); });
    };
    OrganisationSchoolUserUpdateComponent.prototype.assignOrganisationUser = function (data) {
        var organisationSchoolAdminUser = data[0];
        this.patchOrganisationSchoolAdminUserForm(organisationSchoolAdminUser);
    };
    OrganisationSchoolUserUpdateComponent.prototype.convertDateFormat = function (dateValue) {
        var dateFormat = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(dateValue, 'dd-MM-yyyy', 'en-us');
        return dateFormat;
    };
    OrganisationSchoolUserUpdateComponent.prototype.patchOrganisationSchoolAdminUserForm = function (organisationSchoolAdminUser) {
        var authorities = [], dateOfBirth, joiningDate;
        authorities = organisationSchoolAdminUser.authorities;
        dateOfBirth = this.convertDateFormat(organisationSchoolAdminUser.dateOfBirth);
        joiningDate = this.convertDateFormat(organisationSchoolAdminUser.joiningDate);
        $('#dateOfBirth').datepicker({ dateFormat: 'dd-mm-yyyy' }).datepicker("setDate", dateOfBirth);
        $('#joiningDate').datepicker({ dateFormat: 'dd-mm-yyyy' }).datepicker("setDate", joiningDate);
        for (var i = 0; i < this.authorities.length; i++) {
            for (var j = 0; j < authorities.length; j++) {
                if (this.authorities[i].role === authorities[j]) {
                    this.authorities[i].checked = true;
                }
            }
        }
        this.organisationUserForm.setValue({
            firstName: organisationSchoolAdminUser.givenName,
            lastName: organisationSchoolAdminUser.lastName,
            gender: organisationSchoolAdminUser.gender,
            dateOfBirth: dateOfBirth,
            dateOfJoining: joiningDate,
            emailId: organisationSchoolAdminUser.email,
            phoneNumber: organisationSchoolAdminUser.mobileNumber
        });
    };
    OrganisationSchoolUserUpdateComponent.prototype.onError = function (res) {
        this.pluginService.alertMessage("Could not get organisation user details contact admin", "error");
    };
    OrganisationSchoolUserUpdateComponent.prototype.setDefaultDropdownValues = function () {
        $("#country").val("").trigger('change');
        $("#state").val("").trigger('change');
        $("#city").val("").trigger('change');
    };
    OrganisationSchoolUserUpdateComponent.prototype.setDateFormat = function (dateValue) {
        var dateFormat = "";
        dateFormat = dateValue + "T12:00:22Z";
        return dateFormat;
    };
    OrganisationSchoolUserUpdateComponent.prototype.mapOrgSchoolAdminUserData = function () {
        var updatedAuthorities = [], selectedAuthorities = [], dobObject, dojObject, dateOfBirth, joiningDate;
        for (var i = 0; i < this.authorities.length; i++) {
            if (this.authorities[i].checked === true) {
                updatedAuthorities.push(this.authorities[i].role);
                selectedAuthorities.push(this.authorities[i].name);
            }
        }
        this.authorityNames = selectedAuthorities.toString();
        dobObject = $("#dateOfBirth").datepicker("getDate");
        this.dateOfBirth = $.datepicker.formatDate("yy-mm-dd", dobObject);
        dojObject = $("#joiningDate").datepicker("getDate");
        this.joiningDate = $.datepicker.formatDate("yy-mm-dd", dojObject);
        dateOfBirth = this.setDateFormat(this.dateOfBirth);
        joiningDate = this.setDateFormat(this.joiningDate);
        this.organisationSchoolAdminUser = {
            id: this.schoolUserId,
            activated: true,
            givenName: this.organisationUserForm.value.firstName,
            lastName: this.organisationUserForm.value.lastName,
            gender: this.organisationUserForm.value.gender,
            dateOfBirth: dateOfBirth,
            joiningDate: joiningDate,
            email: this.organisationUserForm.value.emailId,
            mobileNumber: this.organisationUserForm.value.phoneNumber.toString(),
            //TODO: login and password 
            login: this.organisationUserForm.value.firstName,
            password: this.organisationUserForm.value.firstName,
            authorities: updatedAuthorities
        };
    };
    OrganisationSchoolUserUpdateComponent.prototype.onRoleSelection = function (event) {
        var eventChecked, selectedId;
        eventChecked = event.target.checked;
        selectedId = event.target.id;
        if (eventChecked === true) {
            this.authorities.find(function (item) { return item.id === selectedId; }).checked = true;
        }
        else if (eventChecked === false) {
            this.authorities.find(function (item) { return item.id === selectedId; }).checked = false;
        }
    };
    OrganisationSchoolUserUpdateComponent.prototype.saveOrganisationSchoolAdminUser = function () {
        this.subscribeToSaveResponse(this.organisationService.updateSchoolUser(this.organisationSchoolAdminUser));
    };
    OrganisationSchoolUserUpdateComponent.prototype.subscribeToSaveResponse = function (resp) {
        var _this = this;
        resp.subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res); });
    };
    OrganisationSchoolUserUpdateComponent.prototype.onSaveSuccess = function (res) {
        this.pluginService.alertMessage("Organisation school user updated successfully", "success");
        this.previousPage();
    };
    OrganisationSchoolUserUpdateComponent.prototype.onSaveError = function (res) {
        this.pluginService.alertMessage("Could not save organisation school user contact admin", "error");
    };
    OrganisationSchoolUserUpdateComponent.prototype.previousPage = function () {
        this._router.navigate(['/organisation', this.organisationId, 'school', this.schoolId, 'school-user']);
    };
    OrganisationSchoolUserUpdateComponent.prototype.onBack = function () {
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
                localObj.previousPage();
            }
        });
    };
    OrganisationSchoolUserUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./organisation-school-user-update.component.html */ "./src/app/organisation-sub-school-user/organisation-school-user-update.component.html"),
            providers: [_organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSchoolUserService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
            _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSchoolUserService"]])
    ], OrganisationSchoolUserUpdateComponent);
    return OrganisationSchoolUserUpdateComponent;
}());



/***/ }),

/***/ "./src/app/organisation-sub-school-user/organisation-school-user.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/organisation-sub-school-user/organisation-school-user.service.ts ***!
  \**********************************************************************************/
/*! exports provided: OrganisationSchoolUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSchoolUserService", function() { return OrganisationSchoolUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');
var OrganisationSchoolUserService = /** @class */ (function () {
    function OrganisationSchoolUserService(http) {
        this.http = http;
        this.orgUsersResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/common/api/app-users';
        this.orgUsersSearchResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/common/api/app-users/basic-search';
        this.usersResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'api/users';
        this.usersSearchResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'api/users/search';
    }
    OrganisationSchoolUserService.prototype.getSchoolUserBySchoolId = function (organisationId, schoolId) {
        // const options = createRequestOption(req);
        var reqJSON = {
            "organisationId": organisationId,
            "schoolId": schoolId
        };
        return this.http.post(this.orgUsersSearchResourceUrl, reqJSON, { observe: 'response' });
    };
    OrganisationSchoolUserService.prototype.getUserDetailByUserId = function (userId) {
        var reqJSON = {
            "id": userId
        };
        return this.http.post(this.usersSearchResourceUrl, reqJSON, { observe: 'response' });
    };
    OrganisationSchoolUserService.prototype.createSchoolUser = function (orgSchool) {
        return this.http.post(this.orgUsersResourceUrl, orgSchool, { headers: headers, observe: 'response' });
    };
    OrganisationSchoolUserService.prototype.updateSchoolUser = function (organisationUser) {
        return this.http.put(this.usersResourceUrl, organisationUser, { observe: 'response' });
    };
    OrganisationSchoolUserService.prototype.deleteSchoolUser = function (login) {
        return this.http.delete(this.usersResourceUrl + "/" + login, { observe: 'response' });
    };
    OrganisationSchoolUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OrganisationSchoolUserService);
    return OrganisationSchoolUserService;
}());



/***/ }),

/***/ "./src/app/organisation-sub-school/organisation-sub-school-create.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/organisation-sub-school/organisation-sub-school-create.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row my-3 px-2\">\n    <div class=\"col-xxl-12\">\n        <div class=\"btn btn-danger\" (click)=\"onBack()\">\n            <i class=\"fa fa-chevron-left mr-2\"></i>Back\n        </div>\n    </div>\n</div>\n<div id=\"stepperTab\">\n    <ul id=\"progressbar\">\n        <li class=\"active\">\n            <span class=\"bar\">\n            </span>\n        </li>\n        <li>\n            <span class=\"bar\">\n            </span>\n        </li>\n        <li>\n        </li>\n    </ul>\n\n    <fieldset [formGroup]=\"organisationSubSchoolForm\">\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12\">\n                <h5 class=\"font-20\">School information</h5>\n            </div>\n        </div>\n\n        <div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"orgName\">School name</label>\n                <input type=\"text\" class=\"form-control\"\n                    placeholder=\"Enter school name (min length: 3 and max length: 50)\" formControlName=\"schoolName\"\n                    minlength=\"3\" maxlength=\"50\" inputRestriction=\"alphabetsWithSpace\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Alphabets\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"regNumber\">Registration number <span class=\"text-muted\">(Optional)</span></label>\n                <input type=\"number\" class=\"form-control\"\n                    placeholder=\"Enter registration number (min length: 3 and max length: 25)\"\n                    formControlName=\"registrationNumber\" minlength=\"3\" maxlength=\"25\" inputRestriction=\"onlyIntegers\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Numbers\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"address1\">Address line 1<span class=\"text-muted\">(Optional)</span></label>\n                <input type=\"text\" class=\"form-control\"\n                    placeholder=\"Enter address line 1 (min length: 3 and max length: 250)\"\n                    formControlName=\"addressLineOne\" minlength=\"3\" maxlength=\"250\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Alphabets, Numbers and Special characters\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"address2\">Address line 2<span class=\"text-muted\">(Optional)</span></label>\n                <input type=\"text\" class=\"form-control\"\n                    placeholder=\"Enter address line 2 (min length: 3 and max length: 250)\"\n                    formControlName=\"addressLineTwo\" minlength=\"3\" maxlength=\"250\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Alphabets, Numbers and Special characters\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"country\">Country</label>\n                <ng-select [items]=\"countries\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                    placeholder=\"Select country\" [(ngModel)]=\"selectedCountry\" (change)=\"onCountryChange()\"\n                    formControlName=\"country\">\n                </ng-select>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"state\">State</label>\n                <ng-select [items]=\"states\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                    placeholder=\"Select state\" [(ngModel)]=\"selectedState\" (change)=\"onStateChange()\"\n                    formControlName=\"state\">\n                </ng-select>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"city\">City<span class=\"text-muted\">(Optional)</span></label>\n                <ng-select [items]=\"cities\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                    placeholder=\"Select city\" [(ngModel)]=\"selectedCity\">\n                </ng-select>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"number\">Pin code</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter pin code (min length: 6 and max length: 10)\"\n                    formControlName=\"pincode\" minlength=\"6\" maxlength=\"10\" inputRestriction=\"onlyIntegers\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Numbers\n                </div>\n            </div>\n        </div>\n\n        <button class=\"next btn btn-success float-right\" [disabled]=\"validateOrgSchoolInfo\">\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\n        </button>\n\n    </fieldset>\n\n    <fieldset [formGroup]=\"contactInfoForm\">\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12 d-flex justify-content-between align-items-start\">\n                <h5 class=\"font-20\">Primary contact information</h5>\n            </div>\n        </div>\n\n        <div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"fName\">Name</label>\n                <input type=\"text\" class=\"form-control\"\n                    placeholder=\"Enter contact name (min length: 3 and max length: 50)\" formControlName=\"contactName\"\n                    minlength=\"3\" maxlength=\"50\" inputRestriction=\"alphabetsWithSpace\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Alphabets\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"designation\">Designation</label>\n                <input type=\"text\" class=\"form-control\"\n                    placeholder=\"Enter designation (min length: 3 and max length: 50)\" formControlName=\"designation\"\n                    minlength=\"3\" maxlength=\"50\" inputRestriction=\"alphabetsWithSpace\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Alphabets\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"emailId\">Email</label>\n                <input type=\"email\" class=\"form-control\" placeholder=\"Enter email (min length: 3 and max length: 50)\"\n                    formControlName=\"emailId\" minlength=\"3\" maxlength=\"50\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Alphabets, Numbers and Special characters\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"phone\">Mobile number</label>\n                <input type=\"text\" class=\"form-control\"\n                    placeholder=\"Enter mobile number (min length: 10 and max length: 10)\" formControlName=\"phoneNumber\"\n                    minlength=\"10\" maxlength=\"10\" inputRestriction=\"onlyIntegers\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Numbers\n                </div>\n            </div>\n        </div>\n\n        <button class=\"next btn btn-success ml-2 float-right\" [disabled]=\"validateContactInfo\"\n            (click)=\"mapOrganisationSubSchoolData()\">\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\n        </button>\n        <div class=\"previous btn btn-danger float-right\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n        </div>\n\n    </fieldset>\n\n    <fieldset>\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12\">\n                <h2 class=\"font-20\">Summary</h2>\n            </div>\n        </div>\n\n        <div class=\"accordion\" id=\"organisationCnf\">\n            <div class=\"mb-2 acd-group\">\n                <div class=\"card-header border\">\n                    <h5 class=\"mb-0\">\n                        <a href=\"#collpaseAccordion1\" class=\"btn-block text-left text-muted acd-heading\"\n                            data-toggle=\"collapse\" aria-expanded=\"true\">School information</a>\n                    </h5>\n                </div>\n                <div id=\"collpaseAccordion1\" class=\"collapse show\" data-parent=\"#organisationCnf\">\n                    <div class=\"card-body p-3\">\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>School name</b></p>\n                            <p>{{organisationSubSchool.name}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\"\n                            *ngIf=\"organisationSubSchool.registrationNumber\">\n                            <p><b>Registration number</b></p>\n                            <p>{{organisationSubSchool.registrationNumber}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisationSubSchool.addressLine1\">\n                            <p><b>Address line 1</b></p>\n                            <p>{{organisationSubSchool.addressLine1}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisationSubSchool.addressLine2\">\n                            <p><b>Address line 2</b></p>\n                            <p>{{organisationSubSchool.addressLine2}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Country</b></p>\n                            <p>{{organisationSubSchool.country}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>State</b></p>\n                            <p>{{organisationSubSchool.state}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisationSubSchool.city\">\n                            <p><b>City</b></p>\n                            <p>{{organisationSubSchool.city}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Pincode</b></p>\n                            <p>{{organisationSubSchool.pincode}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"mb-2 acd-group\">\n                <div class=\"card-header border\">\n                    <h5 class=\"mb-0\">\n                        <a href=\"#collpaseAccordion2\" class=\"btn-block text-left text-muted acd-heading collapsed\"\n                            data-toggle=\"collapse\">Contact information</a>\n                    </h5>\n                </div>\n                <div id=\"collpaseAccordion2\" class=\"collapse\" data-parent=\"#organisationCnf\">\n                    <div class=\"card-body p-3\">\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Name</b></p>\n                            <p>{{organisationSubSchool.primaryContactName}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Designation</b></p>\n                            <p>{{organisationSubSchool.primaryContactDesignation}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Phone number</b></p>\n                            <p>{{organisationSubSchool.primaryContactPhone}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Email</b></p>\n                            <p>{{organisationSubSchool.primaryContactMail}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"btn btn-success ml-2 float-right\" (click)=\"saveOrganisationSubSchool()\">\n            <i class=\"fa fa-save mr-2\"></i> Save\n        </div>\n        <div class=\"previous btn btn-danger float-right\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n        </div>\n    </fieldset>\n</div>"

/***/ }),

/***/ "./src/app/organisation-sub-school/organisation-sub-school-create.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/organisation-sub-school/organisation-sub-school-create.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OrganisationSubSchoolCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSubSchoolCreateComponent", function() { return OrganisationSubSchoolCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-sub-school.service */ "./src/app/organisation-sub-school/organisation-sub-school.service.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");







var OrganisationSubSchoolCreateComponent = /** @class */ (function () {
    function OrganisationSubSchoolCreateComponent(_router, activatedRoute, formBuilder, pluginService, organisationService, commonService, changeDetector) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.organisationService = organisationService;
        this.commonService = commonService;
        this.changeDetector = changeDetector;
        this.countries = [];
        this.states = [];
        this.cities = [];
        this.organisationSubSchool = {};
        this.validateOrgSchoolInfo = true;
        this.validateContactInfo = true;
    }
    OrganisationSubSchoolCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pluginService.newStepperJs();
        this.createOrganisationSchoolForm();
        this.activatedRoute.data.subscribe(function (_a) {
            var organisation = _a.organisation;
            _this.organisationId = organisation.id;
            _this.getCountryList();
        });
    };
    OrganisationSubSchoolCreateComponent.prototype.getCountryList = function () {
        var _this = this;
        this.commonService.getCountryList().subscribe(function (countryData) {
            _this.countries = countryData;
        });
    };
    OrganisationSubSchoolCreateComponent.prototype.createOrganisationSchoolForm = function () {
        this.organisationSubSchoolForm = this.formBuilder.group({
            schoolName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            registrationNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)]),
            addressLineOne: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]),
            addressLineTwo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)])
        });
        this.contactInfoForm = this.formBuilder.group({
            contactName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)])
        });
    };
    OrganisationSubSchoolCreateComponent.prototype.trimValue = function (value) {
        if (value === null || value === undefined) {
            return value;
        }
        else {
            return value.trim();
        }
    };
    OrganisationSubSchoolCreateComponent.prototype.ngAfterViewChecked = function () {
        this.validateOrganisationSchoolForm();
        this.changeDetector.detectChanges();
    };
    OrganisationSubSchoolCreateComponent.prototype.validateOrganisationSchoolForm = function () {
        var schoolName, contactName, emailId, designation;
        schoolName = this.trimValue(this.organisationSubSchoolForm.value.schoolName);
        contactName = this.trimValue(this.contactInfoForm.value.contactName);
        emailId = this.trimValue(this.contactInfoForm.value.email);
        designation = this.trimValue(this.contactInfoForm.value.designation);
        if (schoolName === "" || schoolName === undefined || schoolName === null) {
            this.validateOrgSchoolInfo = true;
        }
        if (contactName === "" || contactName === undefined || contactName === null) {
            this.validateContactInfo = true;
        }
        if (emailId === "" || emailId === undefined || emailId === null) {
            this.validateContactInfo = true;
        }
        if (designation === "" || designation === undefined || designation === null) {
            this.validateContactInfo = true;
        }
        if (this.organisationSubSchoolForm.valid) {
            this.validateOrgSchoolInfo = false;
        }
        if (this.organisationSubSchoolForm.invalid) {
            this.validateOrgSchoolInfo = true;
        }
        if (this.contactInfoForm.valid) {
            this.validateContactInfo = false;
        }
        if (this.contactInfoForm.invalid) {
            this.validateContactInfo = true;
        }
    };
    OrganisationSubSchoolCreateComponent.prototype.onCountryChange = function () {
        if (this.selectedCountry) {
            var countryId = this.selectedCountry.id;
            this.getStateListByCountryId(countryId);
            this.selectedState = null;
            this.selectedCity = null;
        }
    };
    OrganisationSubSchoolCreateComponent.prototype.onStateChange = function () {
        if (this.selectedState) {
            var stateId = this.selectedState.id;
            this.getCityListByStateId(stateId);
            this.selectedCity = null;
        }
    };
    OrganisationSubSchoolCreateComponent.prototype.getStateListByCountryId = function (countryId) {
        var _this = this;
        var stateList = [];
        this.states = [];
        this.commonService.getStateList().subscribe(function (stateData) {
            stateList = stateData;
            _this.states = stateList.filter(function (item) { return item.country_id === countryId.toString(); });
        });
    };
    OrganisationSubSchoolCreateComponent.prototype.getCityListByStateId = function (stateId) {
        var _this = this;
        var cityList = [];
        this.cities = [];
        this.commonService.getCityList().subscribe(function (cityData) {
            cityList = cityData;
            _this.cities = cityList.filter(function (item) { return item.state_id === stateId; });
        });
    };
    OrganisationSubSchoolCreateComponent.prototype.mapOrganisationSubSchoolData = function () {
        var regNumber, addressLine1, addressLine2, city;
        regNumber = this.organisationSubSchoolForm.get('registrationNumber').value;
        if (regNumber === null || regNumber === "") {
            regNumber = null;
        }
        addressLine1 = this.trimValue(this.organisationSubSchoolForm.get('addressLineOne').value);
        if (addressLine1 === null || addressLine1 === "") {
            addressLine1 = null;
        }
        addressLine2 = this.trimValue(this.organisationSubSchoolForm.get('addressLineTwo').value);
        if (addressLine2 === null || addressLine2 === "") {
            addressLine2 = null;
        }
        if (this.selectedCity === null || this.selectedCity === "") {
            city = null;
        }
        else {
            city = this.selectedCity.name;
        }
        this.organisationSubSchool = {
            name: this.trimValue(this.organisationSubSchoolForm.get('schoolName').value),
            registrationNumber: regNumber,
            addressLine1: addressLine1,
            addressLine2: addressLine2,
            country: this.selectedCountry.name,
            state: this.selectedState.name,
            city: city,
            pincode: this.organisationSubSchoolForm.get('pincode').value,
            primaryContactName: this.trimValue(this.contactInfoForm.get('contactName').value),
            primaryContactDesignation: this.trimValue(this.contactInfoForm.get('designation').value),
            primaryContactPhone: this.contactInfoForm.get('phoneNumber').value,
            primaryContactMail: this.trimValue(this.contactInfoForm.get('emailId').value),
            parentOrganisationId: this.organisationId
        };
    };
    OrganisationSubSchoolCreateComponent.prototype.saveOrganisationSubSchool = function () {
        this.subscribeToSaveResponse(this.organisationService.createOrgSchool(this.organisationSubSchool));
    };
    OrganisationSubSchoolCreateComponent.prototype.subscribeToSaveResponse = function (resp) {
        var _this = this;
        resp.subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res); });
    };
    OrganisationSubSchoolCreateComponent.prototype.onSaveSuccess = function (res) {
        this.pluginService.alertMessage("Organisation subsidairy school created successfully", "success");
        this.previousPage();
    };
    OrganisationSubSchoolCreateComponent.prototype.onSaveError = function (res) {
        this.pluginService.alertMessage("Could not save organisation subsidairy school contact admin", "error");
    };
    OrganisationSubSchoolCreateComponent.prototype.previousPage = function () {
        this._router.navigate(['/organisation', this.organisationId, 'school']);
    };
    OrganisationSubSchoolCreateComponent.prototype.onBack = function () {
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
                localObj.previousPage();
            }
        });
    };
    OrganisationSubSchoolCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./organisation-sub-school-create.component.html */ "./src/app/organisation-sub-school/organisation-sub-school-create.component.html"),
            providers: [_organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSubSchoolService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
            _organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSubSchoolService"],
            _shared_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], OrganisationSubSchoolCreateComponent);
    return OrganisationSubSchoolCreateComponent;
}());



/***/ }),

/***/ "./src/app/organisation-sub-school/organisation-sub-school-delete.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/organisation-sub-school/organisation-sub-school-delete.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OrganisationSubSchoolDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSubSchoolDeleteComponent", function() { return OrganisationSubSchoolDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var _organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-sub-school.service */ "./src/app/organisation-sub-school/organisation-sub-school.service.ts");






var OrganisationSubSchoolDeleteComponent = /** @class */ (function () {
    function OrganisationSubSchoolDeleteComponent(router, activatedRoute, eventManager, organisationService, pluginService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.eventManager = eventManager;
        this.organisationService = organisationService;
        this.pluginService = pluginService;
    }
    OrganisationSubSchoolDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            var organisationSchoolId = params['schoolId'];
            _this.getOrganisationSubSchoolDetails(organisationSchoolId);
        });
    };
    OrganisationSubSchoolDeleteComponent.prototype.getOrganisationSubSchoolDetails = function (schoolId) {
        var _this = this;
        this.organisationService
            .getOrganisationSchoolBySchoolId(schoolId)
            .subscribe(function (res) { return _this.assignOrganisationSubSchool(res.body); }, function (res) { return _this.onError(res.message); });
    };
    OrganisationSubSchoolDeleteComponent.prototype.assignOrganisationSubSchool = function (data) {
        var organisationSubSchool = data;
        this.organisationId = organisationSubSchool.parentOrganisationId;
        this.deleteOrganisationSubSchool(organisationSubSchool);
    };
    OrganisationSubSchoolDeleteComponent.prototype.onError = function (res) {
        this.pluginService.alertMessage("Could not get organisation subsidairy school details contact admin", "error");
    };
    OrganisationSubSchoolDeleteComponent.prototype.subscribeToDeleteResponse = function (resp) {
        var _this = this;
        resp.subscribe(function (res) { return _this.onDeleteSuccess(res); }, function (res) { return _this.onDeleteError(res); });
    };
    OrganisationSubSchoolDeleteComponent.prototype.deleteOrganisationSubSchool = function (organisationSubSchool) {
        var localthisObject = this;
        swal({
            title: "Are you sure to delete this organisation subsidiary school?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localthisObject.confirmDelete(organisationSubSchool.id);
            }
            else {
                localthisObject.previousUrl();
            }
        });
    };
    OrganisationSubSchoolDeleteComponent.prototype.confirmDelete = function (id) {
        this.subscribeToDeleteResponse(this.organisationService.deleteOrgSchool(id));
    };
    OrganisationSubSchoolDeleteComponent.prototype.previousUrl = function () {
        this.router.navigate(['/organisation', this.organisationId, 'school']);
    };
    OrganisationSubSchoolDeleteComponent.prototype.onDeleteSuccess = function (resp) {
        this.pluginService.alertMessage("Organisation subsidiary school deleted successfully", "success");
        this.previousUrl();
    };
    OrganisationSubSchoolDeleteComponent.prototype.onDeleteError = function (err) {
        this.pluginService.alertMessage("Could not delete organisation subsidiary school, please contact admin", "error");
    };
    OrganisationSubSchoolDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./organisation-sub-school-manage.component.html */ "./src/app/organisation-sub-school/organisation-sub-school-manage.component.html"),
            providers: [_organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSubSchoolService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"],
            _organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSubSchoolService"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"]])
    ], OrganisationSubSchoolDeleteComponent);
    return OrganisationSubSchoolDeleteComponent;
}());



/***/ }),

/***/ "./src/app/organisation-sub-school/organisation-sub-school-details.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/organisation-sub-school/organisation-sub-school-details.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row my-3\">\n    <div class=\"col-xxl-12 d-flex justify-content-between\">\n        <div class=\"btn btn-danger\" (click)=\"onBack()\">\n            <i class=\"fa fa-chevron-left mr-2\"></i>Back\n        </div>\n        <a class=\"btn btn-success\"\n            [routerLink]=\"['/organisation',organisationSubSchool.parentOrganisationId, 'school', organisationSubSchool.id, 'edit']\">\n            <i class=\"fa fa-edit mr-2\"></i>Edit organisation school\n        </a>\n    </div>\n</div>\n<div class=\"accordion\" id=\"organisationCnf\">\n    <div class=\"mb-2 acd-group\">\n        <div class=\"card-header border\">\n            <h5 class=\"mb-0\">\n                <a href=\"#collpaseAccordion1\" class=\"btn-block text-left text-muted acd-heading\" data-toggle=\"collapse\"\n                    aria-expanded=\"true\">School information</a>\n            </h5>\n        </div>\n        <div id=\"collpaseAccordion1\" class=\"collapse show\" data-parent=\"#organisationCnf\">\n            <div class=\"card-body p-3\">\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>School name</b></p>\n                    <p>{{organisationSubSchool.name}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisationSubSchool.registrationNumber\">\n                    <p><b>Registration number</b></p>\n                    <p>{{organisationSubSchool.registrationNumber}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisationSubSchool.addressLine1\">\n                    <p><b>Address line 1</b></p>\n                    <p>{{organisationSubSchool.addressLine1}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisationSubSchool.addressLine2\">\n                    <p><b>Address line 2</b></p>\n                    <p>{{organisationSubSchool.addressLine2}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Country</b></p>\n                    <p>{{organisationSubSchool.country}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>State</b></p>\n                    <p>{{organisationSubSchool.state}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisationSubSchool.city\">\n                    <p><b>City</b></p>\n                    <p>{{organisationSubSchool.city}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Pincode</b></p>\n                    <p>{{organisationSubSchool.pincode}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"mb-2 acd-group\">\n        <div class=\"card-header border\">\n            <h5 class=\"mb-0\">\n                <a href=\"#collpaseAccordion2\" class=\"btn-block text-left text-muted acd-heading collapsed\"\n                    data-toggle=\"collapse\">Contact information</a>\n            </h5>\n        </div>\n        <div id=\"collpaseAccordion2\" class=\"collapse\" data-parent=\"#organisationCnf\">\n            <div class=\"card-body p-3\">\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Name</b></p>\n                    <p>{{organisationSubSchool.primaryContactName}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Designation</b></p>\n                    <p>{{organisationSubSchool.primaryContactDesignation}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Phone number</b></p>\n                    <p>{{organisationSubSchool.primaryContactPhone}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Email</b></p>\n                    <p>{{organisationSubSchool.primaryContactMail}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/organisation-sub-school/organisation-sub-school-details.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/organisation-sub-school/organisation-sub-school-details.component.ts ***!
  \**************************************************************************************/
/*! exports provided: OrganisationSubSchoolDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSubSchoolDetailsComponent", function() { return OrganisationSubSchoolDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-sub-school.service */ "./src/app/organisation-sub-school/organisation-sub-school.service.ts");






var OrganisationSubSchoolDetailsComponent = /** @class */ (function () {
    function OrganisationSubSchoolDetailsComponent(_router, activatedRoute, formBuilder, pluginService, organisationService) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.organisationService = organisationService;
        this.organisationSubSchool = {};
    }
    OrganisationSubSchoolDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pluginService.newStepperJs();
        this.activatedRoute.params.subscribe(function (params) {
            var organisationSchoolId = params['schoolId'];
            _this.getOrganisationSubSchoolDetails(organisationSchoolId);
        });
    };
    OrganisationSubSchoolDetailsComponent.prototype.getOrganisationSubSchoolDetails = function (schoolId) {
        var _this = this;
        this.organisationService
            .getOrganisationSchoolBySchoolId(schoolId)
            .subscribe(function (res) { return _this.assignOrganisationSubSchool(res.body); }, function (res) { return _this.onError(res.message); });
    };
    OrganisationSubSchoolDetailsComponent.prototype.assignOrganisationSubSchool = function (data) {
        this.organisationSubSchool = data;
    };
    OrganisationSubSchoolDetailsComponent.prototype.onError = function (res) {
        this.pluginService.alertMessage("Could not get organisation subsidairy school details contact admin", "error");
    };
    OrganisationSubSchoolDetailsComponent.prototype.onBack = function () {
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
                localObj._router.navigate(['/organisation', localObj.organisationSubSchool.parentOrganisationId, 'school']);
            }
        });
    };
    OrganisationSubSchoolDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./organisation-sub-school-details.component.html */ "./src/app/organisation-sub-school/organisation-sub-school-details.component.html"),
            providers: [_organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSubSchoolService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
            _organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSubSchoolService"]])
    ], OrganisationSubSchoolDetailsComponent);
    return OrganisationSubSchoolDetailsComponent;
}());



/***/ }),

/***/ "./src/app/organisation-sub-school/organisation-sub-school-manage.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/organisation-sub-school/organisation-sub-school-manage.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 d-flex justify-content-between my-3\">\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\n        <i class=\"fa fa-chevron-left mr-2\"></i>Back\n    </div>\n    <a [routerLink]=\"['/organisation',organisationId, 'school', 'create']\">\n        <div class=\"btn btn-primary\">\n            <i class=\"fa fa-plus-circle mr-2\"></i> Create subsidiary school\n        </div>\n    </a>\n</div>\n<div class=\"table-responsive\" *ngIf=\"schoolList\">\n    <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\n        <thead>\n            <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"reset.bind(this)\">\n                <th jhiSortBy=\"id\">ID<span class=\"fa fa-sort ml-1\"></span></th>\n                <th jhiSortBy=\"name\">School name <span class=\"fa fa-sort ml-1\"></span></th>\n                <th jhiSortBy=\"city\">City <span class=\"fa fa-sort ml-1\"></span></th>\n                <th class=\"fixed-column\">School user<span class=\"fa fa-sort ml-1\"></span></th>\n                <th class=\"fixed-column\">Actions</th>\n            </tr>\n        </thead>\n        <tbody infinite-scroll (scrolled)=\"loadPage(page + 1)\" [infiniteScrollDisabled]=\"page >= links['last']\"\n            [infiniteScrollDistance]=\"0\">\n            <tr *ngFor=\"let school of schoolList;trackBy: trackId\">\n                <td data-column=\"ID\">{{school.id}}</td>\n                <td data-column=\"School name\">{{school.name}}</td>\n                <td data-column=\"City\">{{school.city}}</td>\n                <td class=\"fixed-column\" data-column=\"School users\">\n                    <a class=\"btn btn-outline-primary mr-1\"\n                        [routerLink]=\"['/organisation',organisationId, 'school', school.id, 'school-user']\">\n                        <i class=\"fa fa-cog mr-2\"></i>\n                        Manage\n                    </a>\n                </td>\n                <td class=\"fixed-column\" data-column=\"Actions\">\n                    <div>\n                        <a class=\"btn btn-outline-info btn-icon-size mr-1 mb-1\"\n                            [routerLink]=\"['/organisation',organisationId, 'school', school.id, 'view']\">\n                            <i class=\"fa fa-eye\"></i>\n                        </a>\n                        <a class=\"btn btn-outline-success btn-icon-size mr-1 mb-1\"\n                            [routerLink]=\"['/organisation',organisationId, 'school', school.id, 'edit']\">\n                            <i class=\"fa fa-edit\"></i>\n                        </a>\n                        <a class=\"btn btn-outline-danger btn-icon-size mb-1\"\n                            [routerLink]=\"['/organisation',organisationId, 'school', school.id, 'delete']\">\n                            <i class=\"fa fa-trash\"></i>\n                        </a>\n                    </div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/organisation-sub-school/organisation-sub-school-manage.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/organisation-sub-school/organisation-sub-school-manage.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OrganisationSubSchoolManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSubSchoolManageComponent", function() { return OrganisationSubSchoolManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./organisation-sub-school.service */ "./src/app/organisation-sub-school/organisation-sub-school.service.ts");



//import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';





var OrganisationSubSchoolManageComponent = /** @class */ (function () {
    function OrganisationSubSchoolManageComponent(_router, activatedRoute, organisationSubSchoolService, eventManager, parseLinks, principalService, pluginService) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.organisationSubSchoolService = organisationSubSchoolService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.schoolList = [];
        this.itemsPerPage = _shared__WEBPACK_IMPORTED_MODULE_5__["ITEMS_PER_PAGE"];
        this.page = 0;
        this.links = {
            last: 0
        };
        this.predicate = 'id';
        this.reverse = false;
    }
    OrganisationSubSchoolManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pluginService.sideMenuToggle();
        this.principalService.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInOrganisationSchool();
        this.activatedRoute.data.subscribe(function (_a) {
            var organisation = _a.organisation;
            _this.organisationId = organisation.id;
            _this.getSchoolListByOrgID();
        });
    };
    OrganisationSubSchoolManageComponent.prototype.getSchoolListByOrgID = function () {
        var _this = this;
        this.organisationSubSchoolService
            .getSchoolByOrgId(this.organisationId)
            .subscribe(function (res) { return _this.assignOrgSchoolList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    OrganisationSubSchoolManageComponent.prototype.assignOrgSchoolList = function (data) {
        if (data.length > 0) {
            this.schoolList = data;
        }
        else {
            this.pluginService.alertMessage("No data found..!", "warning");
        }
    };
    OrganisationSubSchoolManageComponent.prototype.onError = function (errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    };
    OrganisationSubSchoolManageComponent.prototype.reset = function () {
        this.page = 0;
        this.schoolList = [];
        this.getSchoolListByOrgID();
    };
    OrganisationSubSchoolManageComponent.prototype.loadPage = function (page) {
        this.page = page;
        this.getSchoolListByOrgID();
    };
    OrganisationSubSchoolManageComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    OrganisationSubSchoolManageComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    OrganisationSubSchoolManageComponent.prototype.registerChangeInOrganisationSchool = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('organisationSubSchoolListModification', function (response) { return _this.reset(); });
    };
    OrganisationSubSchoolManageComponent.prototype.sort = function () {
        var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    };
    OrganisationSubSchoolManageComponent.prototype.onBack = function () {
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
                localObj._router.navigateByUrl('/organisation');
                localObj.pluginService.sideMenuToggle();
            }
        });
    };
    OrganisationSubSchoolManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./organisation-sub-school-manage.component.html */ "./src/app/organisation-sub-school/organisation-sub-school-manage.component.html"),
            providers: [_organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_7__["OrganisationSubSchoolService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_7__["OrganisationSubSchoolService"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"],
            _core__WEBPACK_IMPORTED_MODULE_4__["Principal"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"]])
    ], OrganisationSubSchoolManageComponent);
    return OrganisationSubSchoolManageComponent;
}());



/***/ }),

/***/ "./src/app/organisation-sub-school/organisation-sub-school-update.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/organisation-sub-school/organisation-sub-school-update.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row my-3 px-2\">\n    <div class=\"col-xxl-12\">\n        <div class=\"btn btn-danger\" (click)=\"onBack()\">\n            <i class=\"fa fa-chevron-left mr-2\"></i>Back\n        </div>\n    </div>\n</div>\n<div id=\"stepperTab\">\n    <ul id=\"progressbar\">\n        <li class=\"active\">\n            <span class=\"bar\">\n            </span>\n        </li>\n        <li>\n            <span class=\"bar\">\n            </span>\n        </li>\n        <li>\n            <span class=\"bar\">\n            </span>\n        </li>\n        <li>\n        </li>\n    </ul>\n    <fieldset [formGroup]=\"organisationSubSchoolForm\">\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12\">\n                <h5 class=\"font-20\">School information</h5>\n            </div>\n        </div>\n\n        <div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"orgName\">School name</label>\n                <input type=\"text\" class=\"form-control\"\n                    placeholder=\"Enter school name (min length: 3 and max length: 50)\" formControlName=\"schoolName\"\n                    minlength=\"3\" maxlength=\"50\" inputRestriction=\"alphabetsWithSpace\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Alphabets\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"regNumber\">Registration number <span class=\"text-muted\">(Optional)</span></label>\n                <input type=\"number\" class=\"form-control\"\n                    placeholder=\"Enter registration number (min length: 3 and max length: 25)\"\n                    formControlName=\"registrationNumber\" minlength=\"3\" maxlength=\"25\" inputRestriction=\"onlyIntegers\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Numbers\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"address1\">Address line 1<span class=\"text-muted\">(Optional)</span></label>\n                <input type=\"text\" class=\"form-control\"\n                    placeholder=\"Enter address line 1 (min length: 3 and max length: 250)\"\n                    formControlName=\"addressLineOne\" minlength=\"3\" maxlength=\"250\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Alphabets, Numbers and Special characters\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"address2\">Address line 2<span class=\"text-muted\">(Optional)</span></label>\n                <input type=\"text\" class=\"form-control\"\n                    placeholder=\"Enter address line 2 (min length: 3 and max length: 250)\"\n                    formControlName=\"addressLineTwo\" minlength=\"3\" maxlength=\"250\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Alphabets, Numbers and Special characters\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"country\">Country</label>\n                <ng-select [items]=\"countries\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                    placeholder=\"Select country\" [(ngModel)]=\"selectedCountry\" (change)=\"onCountryChange()\"\n                    formControlName=\"country\">\n                </ng-select>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"state\">State</label>\n                <ng-select [items]=\"states\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                    placeholder=\"Select state\" [(ngModel)]=\"selectedState\" (change)=\"onStateChange()\"\n                    formControlName=\"state\">\n                </ng-select>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"city\">City<span class=\"text-muted\">(Optional)</span></label>\n                <ng-select [items]=\"cities\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                    placeholder=\"Select city\" [(ngModel)]=\"selectedCity\">\n                </ng-select>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"number\">Pin code</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter pin code (min length: 6 and max length: 10)\"\n                    formControlName=\"pincode\" minlength=\"6\" maxlength=\"10\" inputRestriction=\"onlyIntegers\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Numbers\n                </div>\n            </div>\n        </div>\n\n        <button class=\"next btn btn-success float-right\" [disabled]=\"validateOrgSchoolInfo\">\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\n        </button>\n\n    </fieldset>\n\n    <fieldset [formGroup]=\"contactInfoForm\">\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12 d-flex justify-content-between align-items-start\">\n                <h5 class=\"font-20\">Primary contact information</h5>\n            </div>\n        </div>\n\n        <div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"fName\">Name</label>\n                <input type=\"text\" class=\"form-control\"\n                    placeholder=\"Enter contact name (min length: 3 and max length: 50)\" formControlName=\"contactName\"\n                    minlength=\"3\" maxlength=\"50\" inputRestriction=\"alphabetsWithSpace\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Alphabets\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"designation\">Designation</label>\n                <input type=\"text\" class=\"form-control\"\n                    placeholder=\"Enter designation (min length: 3 and max length: 50)\" formControlName=\"designation\"\n                    minlength=\"3\" maxlength=\"50\" inputRestriction=\"alphabetsWithSpace\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Alphabets\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"emailId\">Email</label>\n                <input type=\"email\" class=\"form-control\" placeholder=\"Enter email (min length: 3 and max length: 50)\"\n                    formControlName=\"emailId\" minlength=\"3\" maxlength=\"50\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Alphabets, Numbers and Special characters\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"phone\">Mobile number</label>\n                <input type=\"text\" class=\"form-control\"\n                    placeholder=\"Enter mobile number (min length: 10 and max length: 10)\" formControlName=\"phoneNumber\"\n                    minlength=\"10\" maxlength=\"10\" inputRestriction=\"onlyIntegers\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Numbers\n                </div>\n            </div>\n        </div>\n\n        <button class=\"next btn btn-success ml-2 float-right\" [disabled]=\"validateContactInfo\"\n            (click)=\"mapOrganisationSubSchoolData()\">\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\n        </button>\n        <div class=\"previous btn btn-danger float-right\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n        </div>\n\n    </fieldset>\n\n    <fieldset>\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12\">\n                <h2 class=\"font-20\">Summary</h2>\n            </div>\n        </div>\n\n        <div class=\"accordion\" id=\"organisationCnf\">\n            <div class=\"mb-2 acd-group\">\n                <div class=\"card-header border\">\n                    <h5 class=\"mb-0\">\n                        <a href=\"#collpaseAccordion1\" class=\"btn-block text-left text-muted acd-heading\"\n                            data-toggle=\"collapse\" aria-expanded=\"true\">School information</a>\n                    </h5>\n                </div>\n                <div id=\"collpaseAccordion1\" class=\"collapse show\" data-parent=\"#organisationCnf\">\n                    <div class=\"card-body p-3\">\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>School name</b></p>\n                            <p>{{organisationSubSchool.name}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\"\n                            *ngIf=\"organisationSubSchool.registrationNumber\">\n                            <p><b>Registration number</b></p>\n                            <p>{{organisationSubSchool.registrationNumber}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisationSubSchool.addressLine1\">\n                            <p><b>Address line 1</b></p>\n                            <p>{{organisationSubSchool.addressLine1}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisationSubSchool.addressLine2\">\n                            <p><b>Address line 2</b></p>\n                            <p>{{organisationSubSchool.addressLine2}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Country</b></p>\n                            <p>{{organisationSubSchool.country}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>State</b></p>\n                            <p>{{organisationSubSchool.state}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisationSubSchool.city\">\n                            <p><b>City</b></p>\n                            <p>{{organisationSubSchool.city}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Pincode</b></p>\n                            <p>{{organisationSubSchool.pincode}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"mb-2 acd-group\">\n                <div class=\"card-header border\">\n                    <h5 class=\"mb-0\">\n                        <a href=\"#collpaseAccordion2\" class=\"btn-block text-left text-muted acd-heading collapsed\"\n                            data-toggle=\"collapse\">Contact information</a>\n                    </h5>\n                </div>\n                <div id=\"collpaseAccordion2\" class=\"collapse\" data-parent=\"#organisationCnf\">\n                    <div class=\"card-body p-3\">\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Name</b></p>\n                            <p>{{organisationSubSchool.primaryContactName}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Designation</b></p>\n                            <p>{{organisationSubSchool.primaryContactDesignation}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Phone number</b></p>\n                            <p>{{organisationSubSchool.primaryContactPhone}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Email</b></p>\n                            <p>{{organisationSubSchool.primaryContactMail}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"btn btn-success ml-2 float-right\" (click)=\"updateOrganisationSubSchool()\">\n            <i class=\"fa fa-save mr-2\"></i> Save\n        </div>\n        <div class=\"previous btn btn-danger float-right\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n        </div>\n    </fieldset>\n</div>"

/***/ }),

/***/ "./src/app/organisation-sub-school/organisation-sub-school-update.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/organisation-sub-school/organisation-sub-school-update.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OrganisationSubSchoolUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSubSchoolUpdateComponent", function() { return OrganisationSubSchoolUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-sub-school.service */ "./src/app/organisation-sub-school/organisation-sub-school.service.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");







var OrganisationSubSchoolUpdateComponent = /** @class */ (function () {
    function OrganisationSubSchoolUpdateComponent(_router, activatedRoute, formBuilder, pluginService, organisationService, commonService, changeDetector) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.organisationService = organisationService;
        this.commonService = commonService;
        this.changeDetector = changeDetector;
        this.organisationSubSchool = {};
        this.countries = [];
        this.states = [];
        this.cities = [];
        this.allStates = [];
        this.allCities = [];
        this.validateOrgSchoolInfo = true;
        this.validateContactInfo = true;
    }
    OrganisationSubSchoolUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pluginService.newStepperJs();
        this.createOrganisationForm();
        this.activatedRoute.params.subscribe(function (params) {
            _this.organisationSchoolId = params['schoolId'];
            _this.getCountryList();
        });
    };
    OrganisationSubSchoolUpdateComponent.prototype.getCountryList = function () {
        var _this = this;
        this.commonService.getCountryList().subscribe(function (countryData) {
            _this.countries = countryData;
            _this.getStateList();
        });
    };
    OrganisationSubSchoolUpdateComponent.prototype.getStateList = function () {
        var _this = this;
        this.allStates = [];
        this.commonService.getStateList().subscribe(function (stateData) {
            _this.allStates = stateData;
            _this.getCityList();
        });
    };
    OrganisationSubSchoolUpdateComponent.prototype.getCityList = function () {
        var _this = this;
        this.allCities = [];
        this.commonService.getCityList().subscribe(function (cityData) {
            _this.allCities = cityData;
            _this.getOrganisationSubSchoolDetails(_this.organisationSchoolId);
        });
    };
    OrganisationSubSchoolUpdateComponent.prototype.getOrganisationSubSchoolDetails = function (schoolId) {
        var _this = this;
        this.organisationService
            .getOrganisationSchoolBySchoolId(schoolId)
            .subscribe(function (res) { return _this.assignOrganisationSubSchool(res.body); }, function (res) { return _this.onError(res.message); });
    };
    OrganisationSubSchoolUpdateComponent.prototype.assignOrganisationSubSchool = function (data) {
        this.organisationSubSchool = data;
        this.organisationId = this.organisationSubSchool.parentOrganisationId;
        this.patchOrganisationForm(this.organisationSubSchool);
    };
    OrganisationSubSchoolUpdateComponent.prototype.onError = function (res) {
        this.pluginService.alertMessage("Could not get organisation subsidairy school details contact admin", "error");
    };
    OrganisationSubSchoolUpdateComponent.prototype.createOrganisationForm = function () {
        this.organisationSubSchoolForm = this.formBuilder.group({
            schoolName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
            registrationNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)]),
            addressLineOne: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(250)]),
            addressLineTwo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(250)]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)])
        });
        this.contactInfoForm = this.formBuilder.group({
            contactName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)])
        });
    };
    OrganisationSubSchoolUpdateComponent.prototype.trimValue = function (value) {
        if (value === null || value === undefined) {
            return value;
        }
        else {
            return value.trim();
        }
    };
    OrganisationSubSchoolUpdateComponent.prototype.ngAfterViewChecked = function () {
        this.validateOrganisationSchoolForm();
        this.changeDetector.detectChanges();
    };
    OrganisationSubSchoolUpdateComponent.prototype.validateOrganisationSchoolForm = function () {
        var schoolName, contactName, emailId, designation;
        schoolName = this.trimValue(this.organisationSubSchoolForm.value.schoolName);
        contactName = this.trimValue(this.contactInfoForm.value.contactName);
        emailId = this.trimValue(this.contactInfoForm.value.email);
        designation = this.trimValue(this.contactInfoForm.value.designation);
        if (schoolName === "" || schoolName === undefined || schoolName === null) {
            this.validateOrgSchoolInfo = true;
        }
        if (contactName === "" || contactName === undefined || contactName === null) {
            this.validateContactInfo = true;
        }
        if (emailId === "" || emailId === undefined || emailId === null) {
            this.validateContactInfo = true;
        }
        if (designation === "" || designation === undefined || designation === null) {
            this.validateContactInfo = true;
        }
        if (this.organisationSubSchoolForm.valid) {
            this.validateOrgSchoolInfo = false;
        }
        if (this.organisationSubSchoolForm.invalid) {
            this.validateOrgSchoolInfo = true;
        }
        if (this.contactInfoForm.valid) {
            this.validateContactInfo = false;
        }
        if (this.contactInfoForm.invalid) {
            this.validateContactInfo = true;
        }
    };
    OrganisationSubSchoolUpdateComponent.prototype.patchOrganisationForm = function (organisationSubSchool) {
        var _this = this;
        var countryIndex, stateIndex, cityIndex;
        this.organisationSubSchoolForm.setValue({
            schoolName: organisationSubSchool.name,
            registrationNumber: organisationSubSchool.registrationNumber,
            addressLineOne: organisationSubSchool.addressLine1,
            addressLineTwo: organisationSubSchool.addressLine2,
            country: null,
            state: null,
            pincode: organisationSubSchool.pincode
        });
        this.contactInfoForm.setValue({
            contactName: organisationSubSchool.primaryContactName,
            designation: organisationSubSchool.primaryContactDesignation,
            emailId: organisationSubSchool.primaryContactMail,
            phoneNumber: organisationSubSchool.primaryContactPhone
        });
        countryIndex = this.countries.findIndex(function (item) { return item.name === organisationSubSchool.country; });
        this.selectedCountry = this.countries[countryIndex];
        this.states = this.allStates.filter(function (item) { return item.country_id === _this.countries[countryIndex].id.toString(); });
        stateIndex = this.states.findIndex(function (item) { return item.name === organisationSubSchool.state; });
        this.selectedState = this.states[stateIndex];
        this.cities = this.allCities.filter(function (item) { return item.state_id === _this.states[stateIndex].id; });
        cityIndex = this.cities.findIndex(function (item) { return item.name === organisationSubSchool.city; });
        this.selectedCity = this.cities[cityIndex];
        this.organisationSubSchool.id = organisationSubSchool.id;
    };
    OrganisationSubSchoolUpdateComponent.prototype.onCountryChange = function () {
        if (this.selectedCountry) {
            var countryId = this.selectedCountry.id;
            this.getStateListByCountryId(countryId);
            this.selectedState = null;
            this.selectedCity = null;
        }
    };
    OrganisationSubSchoolUpdateComponent.prototype.onStateChange = function () {
        if (this.selectedState) {
            var stateId = this.selectedState.id;
            this.getCityListByStateId(stateId);
            this.selectedCity = null;
        }
    };
    OrganisationSubSchoolUpdateComponent.prototype.getStateListByCountryId = function (countryId) {
        var _this = this;
        var stateList = [];
        this.states = [];
        this.commonService.getStateList().subscribe(function (stateData) {
            stateList = stateData;
            _this.states = stateList.filter(function (item) { return item.country_id === countryId.toString(); });
        });
    };
    OrganisationSubSchoolUpdateComponent.prototype.getCityListByStateId = function (stateId) {
        var _this = this;
        var cityList = [];
        this.cities = [];
        this.commonService.getCityList().subscribe(function (cityData) {
            cityList = cityData;
            _this.cities = cityList.filter(function (item) { return item.state_id === stateId; });
        });
    };
    OrganisationSubSchoolUpdateComponent.prototype.mapOrganisationSubSchoolData = function () {
        var regNumber, addressLine1, addressLine2, city;
        regNumber = this.organisationSubSchoolForm.get('registrationNumber').value;
        if (regNumber === null || regNumber === "") {
            regNumber = null;
        }
        addressLine1 = this.trimValue(this.organisationSubSchoolForm.get('addressLineOne').value);
        if (addressLine1 === null || addressLine1 === "") {
            addressLine1 = null;
        }
        addressLine2 = this.trimValue(this.organisationSubSchoolForm.get('addressLineTwo').value);
        if (addressLine2 === null || addressLine2 === "") {
            addressLine2 = null;
        }
        if (this.selectedCity === null || this.selectedCity === "") {
            city = null;
        }
        else {
            city = this.selectedCity.name;
        }
        this.organisationSubSchool = {
            id: this.organisationSchoolId,
            name: this.trimValue(this.organisationSubSchoolForm.get('schoolName').value),
            registrationNumber: regNumber,
            addressLine1: addressLine1,
            addressLine2: addressLine2,
            country: this.selectedCountry.name,
            state: this.selectedState.name,
            city: city,
            pincode: this.organisationSubSchoolForm.get('pincode').value,
            primaryContactName: this.trimValue(this.contactInfoForm.get('contactName').value),
            primaryContactDesignation: this.trimValue(this.contactInfoForm.get('designation').value),
            primaryContactPhone: this.contactInfoForm.get('phoneNumber').value,
            primaryContactMail: this.trimValue(this.contactInfoForm.get('emailId').value),
            parentOrganisationId: this.organisationId
        };
    };
    OrganisationSubSchoolUpdateComponent.prototype.updateOrganisationSubSchool = function () {
        this.subscribeToSaveResponse(this.organisationService.updateOrgSchool(this.organisationSubSchool));
    };
    OrganisationSubSchoolUpdateComponent.prototype.subscribeToSaveResponse = function (resp) {
        var _this = this;
        resp.subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res); });
    };
    OrganisationSubSchoolUpdateComponent.prototype.onSaveSuccess = function (res) {
        this.pluginService.alertMessage("Organisation subsidiary school updated successfully", "success");
        this.previousPage();
    };
    OrganisationSubSchoolUpdateComponent.prototype.onSaveError = function (res) {
        this.pluginService.alertMessage("Could not update organisation subsidiary school contact admin", "error");
    };
    OrganisationSubSchoolUpdateComponent.prototype.previousPage = function () {
        this._router.navigate(['/organisation', this.organisationId, 'school']);
    };
    OrganisationSubSchoolUpdateComponent.prototype.onBack = function () {
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
                localObj.previousPage();
            }
        });
    };
    OrganisationSubSchoolUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./organisation-sub-school-update.component.html */ "./src/app/organisation-sub-school/organisation-sub-school-update.component.html"),
            providers: [_organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSubSchoolService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
            _organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSubSchoolService"],
            _shared_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], OrganisationSubSchoolUpdateComponent);
    return OrganisationSubSchoolUpdateComponent;
}());



/***/ }),

/***/ "./src/app/organisation-sub-school/organisation-sub-school.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/organisation-sub-school/organisation-sub-school.service.ts ***!
  \****************************************************************************/
/*! exports provided: OrganisationSubSchoolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSubSchoolService", function() { return OrganisationSubSchoolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');
var OrganisationSubSchoolService = /** @class */ (function () {
    function OrganisationSubSchoolService(http) {
        this.http = http;
        this.schoolResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/common/api/schools';
        this.schoolSearchResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/common/api/schools/search';
    }
    OrganisationSubSchoolService.prototype.getSchoolByOrgId = function (organisationId) {
        // const options = createRequestOption(req);
        var reqJSON = {
            "parentOrganisationId": organisationId
        };
        return this.http.post(this.schoolSearchResourceUrl, reqJSON, { observe: 'response' });
    };
    OrganisationSubSchoolService.prototype.createOrgSchool = function (orgSchool) {
        return this.http.post(this.schoolResourceUrl, orgSchool, { headers: headers, observe: 'response' });
    };
    OrganisationSubSchoolService.prototype.updateOrgSchool = function (organisation) {
        return this.http.put(this.schoolResourceUrl, organisation, { observe: 'response' });
    };
    OrganisationSubSchoolService.prototype.getOrganisationSchoolBySchoolId = function (id) {
        return this.http.get(this.schoolResourceUrl + "/" + id, { observe: 'response' });
    };
    OrganisationSubSchoolService.prototype.deleteOrgSchool = function (id) {
        return this.http.delete(this.schoolResourceUrl + "/" + id, { observe: 'response' });
    };
    OrganisationSubSchoolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OrganisationSubSchoolService);
    return OrganisationSubSchoolService;
}());



/***/ }),

/***/ "./src/app/organisation-user/organisation-user-create.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/organisation-user/organisation-user-create.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row my-3 px-2\">\n    <div class=\"col-xxl-12\">\n        <div class=\"btn btn-danger\" (click)=\"onBack()\">\n            <i class=\"fa fa-chevron-left mr-2\"></i>Back\n        </div>\n    </div>\n</div>\n<div id=\"stepperTab\" [formGroup]=\"organisationAdminUserForm\">\n    <ul id=\"progressbar\">\n        <li class=\"active\">\n            <span class=\"bar\">\n            </span>\n        </li>\n        <li>\n            <span class=\"bar\">\n            </span>\n        </li>\n        <li>\n        </li>\n    </ul>\n\n    <fieldset>\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12\">\n                <h5 class=\"font-20\">Personal information</h5>\n            </div>\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"firstName\">First name</label>\n            <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"Enter first name\"\n                formControlName=\"firstName\">\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"lastName\">Last name</label>\n            <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Enter last name\"\n                formControlName=\"lastName\">\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"gender\">Gender</label>\n            <div class=\"row mx-0\">\n                <div class=\"radio mr-2\">\n                    <input type=\"radio\" id=\"male\" formControlName=\"gender\" value=\"MALE\" name=\"gender\">\n                    <label class=\"custom-control-label\" for=\"male\">Male</label>\n                </div>\n                <div class=\"radio mr-2\">\n                    <input type=\"radio\" id=\"female\" formControlName=\"gender\" value=\"FEMALE\" name=\"gender\">\n                    <label class=\"custom-control-label\" for=\"female\">Female</label>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"dob\">Date of birth</label>\n            <div class=\"input-group date datepicker-default\" data-date-format=\"dd-mm-yy\" id=\"dateOfBirth\">\n                <input class=\"form-control\" type=\"text\" placeholder=\"Select date\">\n                <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n            </div>\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"dateOfJoining\">Date of joining</label>\n            <div class=\"input-group date datepicker-default\" data-date-format=\"dd-mm-yy\" id=\"joiningDate\">\n                <input class=\"form-control\" type=\"text\" placeholder=\"Select date\">\n                <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n            </div>\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" formControlName=\"emailId\">\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"mobile\">Mobile number</label>\n            <input type=\"number\" class=\"form-control\" id=\"mobile\" placeholder=\"Enter phone number\"\n                formControlName=\"phoneNumber\">\n        </div>\n        <div class=\"next btn btn-success mx-3 float-right\">\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\n        </div>\n\n    </fieldset>\n\n    <fieldset>\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12 d-flex justify-content-between align-items-start\">\n                <h5 class=\"font-20\">Role information</h5>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-xxl-12 d-flex justify-content-start\" *ngFor=\"let data of authorities\">\n                <div class=\"checkbox\">\n                    <input type=\"checkbox\" [id]=\"data.id\" [checked]=\"data.checked\" (click)=\"onRoleSelection($event)\">\n                    <label for=\"{{data.id}}\"></label>\n                </div>\n                <label for=\"{{data.id}}\">\n                    {{data.name}}\n                </label>\n                <div class=\"btn btn-outline-primary btn-sm ml-2 mb-2\">\n                    <i class=\"fa fa-user mr-2\"></i> Role information\n                </div>\n            </div>\n        </div>\n\n        <div class=\"next btn btn-success mx-3 float-right d-block\" (click)=\"mapOrgUserAdminData()\">\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\n        </div>\n        <div class=\"previous btn btn-danger float-right\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n        </div>\n\n    </fieldset>\n\n    <fieldset>\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12\">\n                <h2 class=\"font-20\">Summary</h2>\n            </div>\n        </div>\n\n        <div class=\"accordion\" id=\"organisationCnf\">\n            <div class=\"mb-2 acd-group\">\n                <div class=\"card-header border\">\n                    <h5 class=\"mb-0\">\n                        <a href=\"#collpaseAccordion1\" class=\"btn-block text-left text-muted acd-heading\"\n                            data-toggle=\"collapse\" aria-expanded=\"true\">Personal information</a>\n                    </h5>\n                </div>\n                <div id=\"collpaseAccordion1\" class=\"collapse show\" data-parent=\"#organisationCnf\">\n                    <div class=\"card-body p-3\">\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>First name</b></p>\n                            <p>{{organisationAdminUser.user.givenName}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Last name</b></p>\n                            <p>{{organisationAdminUser.user.lastName}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Gender</b></p>\n                            <p>{{organisationAdminUser.user.gender}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Date of birth</b></p>\n                            <p>{{dateOfBirth}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Date of joining</b></p>\n                            <p>{{joiningDate}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Phone number</b></p>\n                            <p>{{organisationAdminUser.user.mobileNumber}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Email</b></p>\n                            <p>{{organisationAdminUser.user.email}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"mb-2 acd-group\">\n                <div class=\"card-header border\">\n                    <h5 class=\"mb-0\">\n                        <a href=\"#collpaseAccordion3\" class=\"btn-block text-left text-muted acd-heading collapsed\"\n                            data-toggle=\"collapse\">Role information</a>\n                    </h5>\n                </div>\n                <div id=\"collpaseAccordion3\" class=\"collapse\" data-parent=\"#organisationCnf\">\n                    <div class=\"card-body p-3\">\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Selected role</b></p>\n                            <p>\n                                {{authorityNames}}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"btn btn-success mx-3 float-right\" (click)=\"saveOrganisationUserAdmin()\">\n            <i class=\"fa fa-save mr-2\"></i> Save\n        </div>\n        <div class=\"previous btn btn-danger float-right\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n        </div>\n    </fieldset>\n</div>"

/***/ }),

/***/ "./src/app/organisation-user/organisation-user-create.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/organisation-user/organisation-user-create.component.ts ***!
  \*************************************************************************/
/*! exports provided: OrganisationUserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationUserCreateComponent", function() { return OrganisationUserCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-user.service */ "./src/app/organisation-user/organisation-user.service.ts");






var OrganisationUserCreateComponent = /** @class */ (function () {
    function OrganisationUserCreateComponent(_router, activatedRoute, formBuilder, pluginService, organisationService) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.organisationService = organisationService;
        this.organisationAdminUser = {};
        this.authorities = [];
        this.organisationAdminUser = {};
        this.organisationAdminUser.user = {};
        this.authorities = [
            {
                id: "orgAdmin",
                role: "ORG_USER_ADMIN",
                name: "Organisation admin",
                checked: false
            },
            {
                id: "contentAdmin",
                role: "ORG_CONTENT_ADMIN",
                name: "Content admin",
                checked: false
            }
        ];
    }
    OrganisationUserCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pluginService.newStepperJs();
        this.createOrganisationUserForm();
        this.activatedRoute.data.subscribe(function (_a) {
            var organisation = _a.organisation;
            _this.organisationId = organisation.id;
        });
        this.pluginService.datePicker('#dateOfBirth');
        this.pluginService.datePicker('#joiningDate');
    };
    OrganisationUserCreateComponent.prototype.createOrganisationUserForm = function () {
        this.organisationAdminUserForm = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("")
        });
    };
    OrganisationUserCreateComponent.prototype.setDateFormat = function (dateValue) {
        var dateFormat = "";
        dateFormat = dateValue + "T12:00:22Z";
        return dateFormat;
    };
    OrganisationUserCreateComponent.prototype.mapOrgUserAdminData = function () {
        var updatedAuthorities = [], selectedAuthorities = [], joiningDate, dateOfBirth, dobObject, dojObject;
        this.organisationAdminUser.organisationId = this.organisationId;
        for (var i = 0; i < this.authorities.length; i++) {
            if (this.authorities[i].checked === true) {
                updatedAuthorities.push(this.authorities[i].role);
                selectedAuthorities.push(this.authorities[i].name);
            }
        }
        this.authorityNames = selectedAuthorities.toString();
        dobObject = $("#dateOfBirth").datepicker("getDate");
        this.dateOfBirth = $.datepicker.formatDate("yy-mm-dd", dobObject);
        dojObject = $("#joiningDate").datepicker("getDate");
        this.joiningDate = $.datepicker.formatDate("yy-mm-dd", dojObject);
        dateOfBirth = this.setDateFormat(this.dateOfBirth);
        joiningDate = this.setDateFormat(this.joiningDate);
        this.organisationAdminUser.user = {
            activated: true,
            givenName: this.organisationAdminUserForm.value.firstName,
            lastName: this.organisationAdminUserForm.value.lastName,
            gender: this.organisationAdminUserForm.value.gender,
            dateOfBirth: dateOfBirth,
            joiningDate: joiningDate,
            email: this.organisationAdminUserForm.value.emailId,
            mobileNumber: this.organisationAdminUserForm.value.phoneNumber.toString(),
            //TODO: login and password 
            login: this.organisationAdminUserForm.value.firstName,
            password: this.organisationAdminUserForm.value.firstName,
            authorities: updatedAuthorities
        };
    };
    OrganisationUserCreateComponent.prototype.onRoleSelection = function (event) {
        var eventChecked, selectedId;
        eventChecked = event.target.checked;
        selectedId = event.target.id;
        this.authorities.find(function (item) { return item.id === selectedId; }).checked = eventChecked;
    };
    OrganisationUserCreateComponent.prototype.saveOrganisationUserAdmin = function () {
        this.subscribeToSaveResponse(this.organisationService.createOrgUser(this.organisationAdminUser));
    };
    OrganisationUserCreateComponent.prototype.subscribeToSaveResponse = function (resp) {
        var _this = this;
        resp.subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res); });
    };
    OrganisationUserCreateComponent.prototype.onSaveSuccess = function (res) {
        this.pluginService.alertMessage("Organisation admin user created successfully", "success");
        this.previousPage();
    };
    OrganisationUserCreateComponent.prototype.onSaveError = function (res) {
        this.pluginService.alertMessage("Could not save organisation admin user contact admin", "error");
    };
    OrganisationUserCreateComponent.prototype.previousPage = function () {
        this._router.navigate(['/organisation', this.organisationId, 'organisation-user']);
    };
    OrganisationUserCreateComponent.prototype.onBack = function () {
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
                localObj.previousPage();
            }
        });
    };
    OrganisationUserCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./organisation-user-create.component.html */ "./src/app/organisation-user/organisation-user-create.component.html"),
            providers: [_organisation_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationUserService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
            _organisation_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationUserService"]])
    ], OrganisationUserCreateComponent);
    return OrganisationUserCreateComponent;
}());



/***/ }),

/***/ "./src/app/organisation-user/organisation-user-delete.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/organisation-user/organisation-user-delete.component.ts ***!
  \*************************************************************************/
/*! exports provided: OrganisationUserDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationUserDeleteComponent", function() { return OrganisationUserDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var _organisation_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-user.service */ "./src/app/organisation-user/organisation-user.service.ts");






var OrganisationUserDeleteComponent = /** @class */ (function () {
    function OrganisationUserDeleteComponent(router, activatedRoute, eventManager, organisationService, pluginService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.eventManager = eventManager;
        this.organisationService = organisationService;
        this.pluginService = pluginService;
    }
    OrganisationUserDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.organisationId = params['id'];
            _this.login = params['login'];
            _this.deleteOrganisationAdminUser();
        });
    };
    OrganisationUserDeleteComponent.prototype.onError = function (res) {
        this.pluginService.alertMessage("Could not get organisation subsidairy school details contact admin", "error");
    };
    OrganisationUserDeleteComponent.prototype.subscribeToDeleteResponse = function (resp) {
        var _this = this;
        resp.subscribe(function (res) { return _this.onDeleteSuccess(res); }, function (res) { return _this.onDeleteError(res); });
    };
    OrganisationUserDeleteComponent.prototype.deleteOrganisationAdminUser = function () {
        var localthisObject = this;
        swal({
            title: "Are you sure to delete this organisation admin user ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localthisObject.confirmDelete(localthisObject.login);
            }
            else {
                localthisObject.previousUrl();
            }
        });
    };
    OrganisationUserDeleteComponent.prototype.confirmDelete = function (login) {
        this.subscribeToDeleteResponse(this.organisationService.deleteOrgUser(login));
    };
    OrganisationUserDeleteComponent.prototype.previousUrl = function () {
        this.router.navigate(['/organisation', this.organisationId, 'organisation-user']);
    };
    OrganisationUserDeleteComponent.prototype.onDeleteSuccess = function (resp) {
        this.pluginService.alertMessage("Organisation user deleted successfully", "success");
        this.previousUrl();
    };
    OrganisationUserDeleteComponent.prototype.onDeleteError = function (err) {
        this.pluginService.alertMessage("Could not delete organisation user, please contact admin", "error");
    };
    OrganisationUserDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./organisation-user-manage.component.html */ "./src/app/organisation-user/organisation-user-manage.component.html"),
            providers: [_organisation_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationUserService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"],
            _organisation_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationUserService"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"]])
    ], OrganisationUserDeleteComponent);
    return OrganisationUserDeleteComponent;
}());



/***/ }),

/***/ "./src/app/organisation-user/organisation-user-details.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/organisation-user/organisation-user-details.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row my-3\">\n    <div class=\"col-xxl-12 d-flex justify-content-between\">\n        <div class=\"btn btn-danger\" (click)=\"onBack()\">\n            <i class=\"fa fa-chevron-left mr-2\"></i>Back\n        </div>\n        <a class=\"btn btn-success\"\n            [routerLink]=\"['/organisation', organisationId,  'organisation-user', organisationUserId , 'edit']\">\n            <i class=\"fa fa-edit mr-2\"></i>Edit organisation user\n        </a>\n    </div>\n</div>\n\n<div class=\"accordion\" id=\"organisationCnf\">\n    <div class=\"mb-2 acd-group\">\n        <div class=\"card-header border\">\n            <h5 class=\"mb-0\">\n                <a href=\"#collpaseAccordion1\" class=\"btn-block text-left text-muted acd-heading\" data-toggle=\"collapse\"\n                    aria-expanded=\"true\">Personal information</a>\n            </h5>\n        </div>\n        <div id=\"collpaseAccordion1\" class=\"collapse show\" data-parent=\"#organisationCnf\">\n            <div class=\"card-body p-3\">\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>First name</b></p>\n                    <p>{{organisationAdminUser.givenName}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Last name</b></p>\n                    <p>{{organisationAdminUser.lastName}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Gender</b></p>\n                    <p>{{organisationAdminUser.gender}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Date of birth</b></p>\n                    <p>{{dateOfBirth}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Date of joining</b></p>\n                    <p>{{joiningDate}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Email</b></p>\n                    <p>{{organisationAdminUser.email}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Phone number</b></p>\n                    <p>{{organisationAdminUser.mobileNumber}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"mb-2 acd-group\">\n        <div class=\"card-header border\">\n            <h5 class=\"mb-0\">\n                <a href=\"#collpaseAccordion3\" class=\"btn-block text-left text-muted acd-heading collapsed\"\n                    data-toggle=\"collapse\">Role information</a>\n            </h5>\n        </div>\n        <div id=\"collpaseAccordion3\" class=\"collapse\" data-parent=\"#organisationCnf\">\n            <div class=\"card-body p-3\">\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Selected role</b></p>\n                    <p>\n                        {{authorityNames}}\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/organisation-user/organisation-user-details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/organisation-user/organisation-user-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: OrganisationUserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationUserDetailsComponent", function() { return OrganisationUserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-user.service */ "./src/app/organisation-user/organisation-user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var OrganisationUserDetailsComponent = /** @class */ (function () {
    function OrganisationUserDetailsComponent(_router, activatedRoute, formBuilder, pluginService, organisationService) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.organisationService = organisationService;
        this.organisationAdminUser = {};
        this.authorities = [];
        this.organisationAdminUser = {};
        this.authorities = [
            {
                id: "orgAdmin",
                role: "ORG_USER_ADMIN",
                name: "Organisation admin",
                checked: false
            },
            {
                id: "contentAdmin",
                role: "ORG_CONTENT_ADMIN",
                name: "Content admin",
                checked: false
            }
        ];
    }
    OrganisationUserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.organisationId = params['id'];
            _this.organisationUserId = params['orgUserId'];
            _this.getOrganisationUserDetails(_this.organisationUserId);
        });
    };
    OrganisationUserDetailsComponent.prototype.getOrganisationUserDetails = function (userId) {
        var _this = this;
        this.organisationService
            .getUserDetailByUserId(userId)
            .subscribe(function (res) { return _this.assignOrganisationUser(res.body); }, function (res) { return _this.onError(res.message); });
    };
    OrganisationUserDetailsComponent.prototype.assignOrganisationUser = function (data) {
        var organisationAdminUser = data[0];
        this.patchOrganisationAdminUserForm(organisationAdminUser);
    };
    OrganisationUserDetailsComponent.prototype.convertDateFormat = function (dateValue) {
        var dateFormat = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(dateValue, 'dd-MM-yyyy', 'en-us');
        return dateFormat;
    };
    OrganisationUserDetailsComponent.prototype.patchOrganisationAdminUserForm = function (organisationAdminUser) {
        var authorities = [], selectedAuthorities = [];
        authorities = organisationAdminUser.authorities;
        this.dateOfBirth = this.convertDateFormat(organisationAdminUser.dateOfBirth);
        this.joiningDate = this.convertDateFormat(organisationAdminUser.joiningDate);
        for (var i = 0; i < this.authorities.length; i++) {
            for (var j = 0; j < authorities.length; j++) {
                if (this.authorities[i].role === authorities[j]) {
                    this.authorities[i].checked = true;
                    selectedAuthorities.push(this.authorities[i].name);
                }
            }
        }
        this.authorityNames = selectedAuthorities.toString();
        this.organisationAdminUser = organisationAdminUser;
    };
    OrganisationUserDetailsComponent.prototype.onError = function (res) {
        this.pluginService.alertMessage("Could not get organisation user details contact admin", "error");
    };
    OrganisationUserDetailsComponent.prototype.previousPage = function () {
        this._router.navigate(['/organisation', this.organisationId, 'organisation-user']);
    };
    OrganisationUserDetailsComponent.prototype.onBack = function () {
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
                localObj.previousPage();
            }
        });
    };
    OrganisationUserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./organisation-user-details.component.html */ "./src/app/organisation-user/organisation-user-details.component.html"),
            providers: [_organisation_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationUserService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
            _organisation_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationUserService"]])
    ], OrganisationUserDetailsComponent);
    return OrganisationUserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/organisation-user/organisation-user-manage.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/organisation-user/organisation-user-manage.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 d-flex justify-content-between my-3\">\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\n        <i class=\"fa fa-chevron-left mr-2\"></i>Back\n    </div>\n    <a [routerLink]=\"['/organisation',organisationId, 'organisation-user', 'create']\">\n        <div class=\"btn btn-primary\">\n            <i class=\"fa fa-plus-circle mr-2\"></i> Create organisation user\n        </div>\n    </a>\n</div>\n<div class=\"table-responsive\" *ngIf=\"organisationAdminUserList\">\n    <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\n        <thead>\n            <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"reset.bind(this)\">\n                <th jhiSortBy=\"userId\">User ID<span class=\"fa fa-sort ml-1\"></span></th>\n                <th jhiSortBy=\"loginId\">Login ID <span class=\"fa fa-sort ml-1\"></span></th>\n                <th jhiSortBy=\"fName\">First name <span class=\"fa fa-sort ml-1\"></span></th>\n                <th jhiSortBy=\"lName\">Last name <span class=\"fa fa-sort ml-1\"></span></th>\n                <th jhiSortBy=\"emailId\">Email ID<span class=\"fa fa-sort ml-1\"></span></th>\n                <th class=\"fixed-column\">Actions</th>\n            </tr>\n        </thead>\n        <tbody infinite-scroll (scrolled)=\"loadPage(page + 1)\" [infiniteScrollDisabled]=\"page >= links['last']\"\n            [infiniteScrollDistance]=\"0\">\n            <tr *ngFor=\"let orgUser of organisationAdminUserList;trackBy: trackId;\">\n                <td data-column=\"User ID\">{{orgUser.user.id}}</td>\n                <td data-column=\"Login ID\">{{orgUser.user.login}}</td>\n                <td data-column=\"First Name\">{{orgUser.user.givenName}}</td>\n                <td data-column=\"Last Name\">{{orgUser.user.lastName}}</td>\n                <td data-column=\"Email ID\">{{orgUser.user.email}}</td>\n                <td class=\"fixed-column\" data-column=\"Actions\">\n                    <div>\n                        <a class=\"btn btn-outline-info btn-icon-size mr-1 mb-1\"\n                            [routerLink]=\"['/organisation',organisationId, 'organisation-user', orgUser.user.id, 'view']\">\n                            <i class=\"fa fa-eye\"></i>\n                        </a>\n                        <a class=\"btn btn-outline-success btn-icon-size mr-1 mb-1\"\n                            [routerLink]=\"['/organisation',organisationId,  'organisation-user', orgUser.user.id, 'edit']\">\n                            <i class=\"fa fa-edit\"></i>\n                        </a>\n                        <a class=\"btn btn-outline-danger btn-icon-size mr-1 mb-1\"\n                            [routerLink]=\"['/organisation',organisationId,  'organisation-user', orgUser.user.login, 'delete']\">\n                            <i class=\"fa fa-trash\"></i>\n                        </a>\n                        <a class=\"btn btn-outline-danger btn-icon-size mb-1\"\n                            [routerLink]=\"['/organisation',organisationId,  'organisation-user', orgUser.user.id, 'reset-pin']\">\n                            <i class=\"fa fa-key\"></i>\n                        </a>\n                    </div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/organisation-user/organisation-user-manage.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/organisation-user/organisation-user-manage.component.ts ***!
  \*************************************************************************/
/*! exports provided: OrganisationUserManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationUserManageComponent", function() { return OrganisationUserManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./organisation-user.service */ "./src/app/organisation-user/organisation-user.service.ts");



//import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';





var OrganisationUserManageComponent = /** @class */ (function () {
    function OrganisationUserManageComponent(_router, activatedRoute, organisationSubSchoolService, eventManager, parseLinks, principalService, pluginService) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.organisationSubSchoolService = organisationSubSchoolService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.organisationAdminUserList = [];
        this.itemsPerPage = _shared__WEBPACK_IMPORTED_MODULE_5__["ITEMS_PER_PAGE"];
        this.page = 0;
        this.links = {
            last: 0
        };
        this.predicate = 'id';
        // descending
        this.reverse = false;
    }
    OrganisationUserManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pluginService.sideMenuToggle();
        this.principalService.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInOrganisationUserAdmin();
        this.activatedRoute.data.subscribe(function (_a) {
            var organisation = _a.organisation;
            _this.organisationId = organisation.id;
            _this.getOrganisationUserByOrganisationId();
        });
    };
    OrganisationUserManageComponent.prototype.getOrganisationUserByOrganisationId = function () {
        var _this = this;
        this.organisationSubSchoolService
            .getOrganisationUserByOrgUserId(this.organisationId)
            .subscribe(function (res) { return _this.assignOrgUserList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    OrganisationUserManageComponent.prototype.assignOrgUserList = function (data) {
        this.organisationAdminUserList = data;
    };
    OrganisationUserManageComponent.prototype.onError = function (errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    };
    OrganisationUserManageComponent.prototype.reset = function () {
        this.page = 0;
        this.organisationAdminUserList = [];
        this.getOrganisationUserByOrganisationId();
    };
    OrganisationUserManageComponent.prototype.loadPage = function (page) {
        this.page = page;
        this.getOrganisationUserByOrganisationId();
    };
    OrganisationUserManageComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    OrganisationUserManageComponent.prototype.trackId = function (index, item) {
        return item.organisationId;
    };
    OrganisationUserManageComponent.prototype.registerChangeInOrganisationUserAdmin = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('organisationUserListModification', function (response) { return _this.reset(); });
    };
    OrganisationUserManageComponent.prototype.sort = function () {
        var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    };
    OrganisationUserManageComponent.prototype.ngDestroy = function () {
        this.eventSubscriber.unsubscribe();
    };
    OrganisationUserManageComponent.prototype.onBack = function () {
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
                localObj._router.navigateByUrl('/organisation');
                localObj.pluginService.sideMenuToggle();
            }
        });
    };
    OrganisationUserManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./organisation-user-manage.component.html */ "./src/app/organisation-user/organisation-user-manage.component.html"),
            providers: [_organisation_user_service__WEBPACK_IMPORTED_MODULE_7__["OrganisationUserService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _organisation_user_service__WEBPACK_IMPORTED_MODULE_7__["OrganisationUserService"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"],
            _core__WEBPACK_IMPORTED_MODULE_4__["Principal"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"]])
    ], OrganisationUserManageComponent);
    return OrganisationUserManageComponent;
}());



/***/ }),

/***/ "./src/app/organisation-user/organisation-user-update-password-reset.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/organisation-user/organisation-user-update-password-reset.component.ts ***!
  \****************************************************************************************/
/*! exports provided: OrganisationUserUpdatePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationUserUpdatePasswordComponent", function() { return OrganisationUserUpdatePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrganisationUserUpdatePasswordComponent = /** @class */ (function () {
    function OrganisationUserUpdatePasswordComponent() {
    }
    OrganisationUserUpdatePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./organisation-user-manage.component.html */ "./src/app/organisation-user/organisation-user-manage.component.html"),
            providers: []
        })
    ], OrganisationUserUpdatePasswordComponent);
    return OrganisationUserUpdatePasswordComponent;
}());



/***/ }),

/***/ "./src/app/organisation-user/organisation-user-update-unlock.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/organisation-user/organisation-user-update-unlock.component.ts ***!
  \********************************************************************************/
/*! exports provided: OrganisationUserUpdateUnlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationUserUpdateUnlockComponent", function() { return OrganisationUserUpdateUnlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrganisationUserUpdateUnlockComponent = /** @class */ (function () {
    function OrganisationUserUpdateUnlockComponent() {
    }
    OrganisationUserUpdateUnlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./organisation-user-manage.component.html */ "./src/app/organisation-user/organisation-user-manage.component.html"),
            providers: []
        })
    ], OrganisationUserUpdateUnlockComponent);
    return OrganisationUserUpdateUnlockComponent;
}());



/***/ }),

/***/ "./src/app/organisation-user/organisation-user-update.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/organisation-user/organisation-user-update.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row my-3 px-2\">\n    <div class=\"col-xxl-12\">\n        <div class=\"btn btn-danger\" (click)=\"onBack()\">\n            <i class=\"fa fa-chevron-left mr-2\"></i>Back\n        </div>\n    </div>\n</div>\n<div id=\"stepperTab\" [formGroup]=\"organisationAdminUserForm\">\n    <ul id=\"progressbar\">\n        <li class=\"active\">\n            <span class=\"bar\">\n            </span>\n        </li>\n        <li>\n            <span class=\"bar\">\n            </span>\n        </li>\n        <li>\n        </li>\n    </ul>\n\n    <fieldset>\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12\">\n                <h5 class=\"font-20\">Personal information</h5>\n            </div>\n        </div>\n\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"firstName\">First name</label>\n            <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"Enter first name\"\n                formControlName=\"firstName\">\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"lastName\">Last name</label>\n            <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Enter last name\"\n                formControlName=\"lastName\">\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"gender\">Gender</label>\n            <div class=\"row mx-0\">\n                <div class=\"radio mr-2\">\n                    <input type=\"radio\" id=\"male\" formControlName=\"gender\" value=\"MALE\" name=\"gender\"\">\n                    <label class=\" custom-control-label\" for=\"male\">Male</label>\n                </div>\n                <div class=\"custom-control custom-radio mr-2\">\n                    <input type=\"radio\" id=\"female\" formControlName=\"gender\" value=\"FEMALE\" name=\"gender\">\n                    <label class=\"custom-control-label\" for=\"female\">Female</label>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"dob\">Date of birth</label>\n            <div class=\"input-group date datepicker-default\" data-date-format=\"dd-mm-yy\" id=\"dateOfBirth\">\n                <input class=\"form-control\" type=\"text\" formControlName=\"dateOfBirth\" placeholder=\"Select date\">\n                <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n            </div>\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"dateOfJoining\">Date of joining</label>\n            <div class=\"input-group date datepicker-default\" data-date-format=\"dd-mm-yy\" id=\"joiningDate\">\n                <input class=\"form-control\" type=\"text\" formControlName=\"dateOfJoining\" placeholder=\"Select date\">\n                <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n            </div>\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" formControlName=\"emailId\">\n        </div>\n        <div class=\"form-group col-xxl-6\">\n            <label for=\"mobile\">Mobile number</label>\n            <input type=\"number\" class=\"form-control\" id=\"mobile\" placeholder=\"Enter phone number\"\n                formControlName=\"phoneNumber\">\n        </div>\n        <div class=\"next btn btn-success mx-3 float-right\">\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\n        </div>\n\n    </fieldset>\n\n    <fieldset>\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12 d-flex justify-content-between align-items-start\">\n                <h5 class=\"font-20\">Role information</h5>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-xxl-12 d-flex justify-content-start\" *ngFor=\"let data of authorities\">\n                <div class=\"checkbox\">\n                    <input type=\"checkbox\" [id]=\"data.id\" [checked]=\"data.checked\" (click)=\"roleOnSelection($event)\">\n                    <label for=\"{{data.id}}\"></label>\n                </div>\n                <label for=\"{{data.id}}\">\n                    {{data.name}}\n                </label>\n                <div class=\"btn btn-outline-primary btn-sm ml-2 mb-2\">\n                    <i class=\"fa fa-user mr-2\"></i> Role information\n                </div>\n            </div>\n        </div>\n\n        <div class=\"next btn btn-success mx-3 float-right d-block\" (click)=\"mapOrgAdminUserData()\">\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\n        </div>\n        <div class=\"previous btn btn-danger float-right\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n        </div>\n\n    </fieldset>\n\n    <fieldset>\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12\">\n                <h2 class=\"font-20\">Summary</h2>\n            </div>\n        </div>\n\n        <div class=\"accordion\" id=\"organisationCnf\">\n            <div class=\"mb-2 acd-group\">\n                <div class=\"card-header border\">\n                    <h5 class=\"mb-0\">\n                        <a href=\"#collpaseAccordion1\" class=\"btn-block text-left text-muted acd-heading\"\n                            data-toggle=\"collapse\" aria-expanded=\"true\">Personal information</a>\n                    </h5>\n                </div>\n                <div id=\"collpaseAccordion1\" class=\"collapse show\" data-parent=\"#organisationCnf\">\n                    <div class=\"card-body p-3\">\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>First name</b></p>\n                            <p>{{organisationAdminUser.givenName}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Last name</b></p>\n                            <p>{{organisationAdminUser.lastName}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Gender</b></p>\n                            <p>{{organisationAdminUser.gender}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Date of birth</b></p>\n                            <p>{{dateOfBirth}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Date of joining</b></p>\n                            <p>{{joiningDate}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Email</b></p>\n                            <p>{{organisationAdminUser.email}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Phone number</b></p>\n                            <p>{{organisationAdminUser.mobileNumber}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"mb-2 acd-group\">\n                <div class=\"card-header border\">\n                    <h5 class=\"mb-0\">\n                        <a href=\"#collpaseAccordion3\" class=\"btn-block text-left text-muted acd-heading collapsed\"\n                            data-toggle=\"collapse\">Role information</a>\n                    </h5>\n                </div>\n                <div id=\"collpaseAccordion3\" class=\"collapse\" data-parent=\"#organisationCnf\">\n                    <div class=\"card-body p-3\">\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Selected role</b></p>\n                            <p>\n                                {{authorityNames}}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"btn btn-success mx-3 float-right\" (click)=\"saveOrganisationAdminUser()\">\n            <i class=\"fa fa-save mr-2\"></i> Save\n        </div>\n        <div class=\"previous btn btn-danger float-right\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n        </div>\n    </fieldset>\n</div>"

/***/ }),

/***/ "./src/app/organisation-user/organisation-user-update.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/organisation-user/organisation-user-update.component.ts ***!
  \*************************************************************************/
/*! exports provided: OrganisationUserUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationUserUpdateComponent", function() { return OrganisationUserUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-user.service */ "./src/app/organisation-user/organisation-user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var OrganisationUserUpdateComponent = /** @class */ (function () {
    function OrganisationUserUpdateComponent(_router, activatedRoute, formBuilder, pluginService, organisationService) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.organisationService = organisationService;
        this.organisationAdminUser = {};
        this.authorities = [];
        this.organisationAdminUser = {};
        this.authorities = [
            {
                id: "orgAdmin",
                role: "ORG_USER_ADMIN",
                name: "Organisation admin",
                checked: false
            },
            {
                id: "contentAdmin",
                role: "ORG_CONTENT_ADMIN",
                name: "Content admin",
                checked: false
            }
        ];
    }
    OrganisationUserUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pluginService.newStepperJs();
        this.createOrganisationUserForm();
        this.pluginService.datePicker('#dateOfBirth');
        this.pluginService.datePicker('#joiningDate');
        this.activatedRoute.params.subscribe(function (params) {
            _this.organisationId = params['id'];
            _this.organisationUserId = params['orgUserId'];
            _this.getOrganisationUserDetails(_this.organisationUserId);
        });
    };
    OrganisationUserUpdateComponent.prototype.createOrganisationUserForm = function () {
        this.organisationAdminUserForm = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            dateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            dateOfJoining: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("")
        });
    };
    OrganisationUserUpdateComponent.prototype.getOrganisationUserDetails = function (userId) {
        var _this = this;
        this.organisationService
            .getUserDetailByUserId(userId)
            .subscribe(function (res) { return _this.assignOrganisationUser(res.body); }, function (res) { return _this.onError(res.message); });
    };
    OrganisationUserUpdateComponent.prototype.assignOrganisationUser = function (data) {
        var organisationAdminUser = data[0];
        this.patchOrganisationAdminUserForm(organisationAdminUser);
    };
    OrganisationUserUpdateComponent.prototype.convertDateFormat = function (dateValue) {
        var dateFormat = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(dateValue, 'dd-MM-yyyy', 'en-us');
        return dateFormat;
    };
    OrganisationUserUpdateComponent.prototype.patchOrganisationAdminUserForm = function (organisationAdminUser) {
        var authorities = [], dateOfBirth, joiningDate;
        authorities = organisationAdminUser.authorities;
        for (var i = 0; i < this.authorities.length; i++) {
            for (var j = 0; j < authorities.length; j++) {
                if (this.authorities[i].role === authorities[j]) {
                    this.authorities[i].checked = true;
                }
            }
        }
        dateOfBirth = this.convertDateFormat(organisationAdminUser.dateOfBirth);
        joiningDate = this.convertDateFormat(organisationAdminUser.joiningDate);
        $('#dateOfBirth').datepicker({ dateFormat: 'dd-mm-yyyy' }).datepicker("setDate", dateOfBirth);
        $('#joiningDate').datepicker({ dateFormat: 'dd-mm-yyyy' }).datepicker("setDate", joiningDate);
        this.organisationAdminUserForm.setValue({
            firstName: organisationAdminUser.givenName,
            lastName: organisationAdminUser.lastName,
            gender: organisationAdminUser.gender,
            dateOfBirth: dateOfBirth,
            dateOfJoining: joiningDate,
            emailId: organisationAdminUser.email,
            phoneNumber: organisationAdminUser.mobileNumber
        });
    };
    OrganisationUserUpdateComponent.prototype.onError = function (res) {
        this.pluginService.alertMessage("Could not get organisation admin user details contact admin", "error");
    };
    OrganisationUserUpdateComponent.prototype.setDateFormat = function (dateValue) {
        var dateFormat = "";
        dateFormat = dateValue + "T12:00:22Z";
        return dateFormat;
    };
    OrganisationUserUpdateComponent.prototype.mapOrgAdminUserData = function () {
        var updatedAuthorities = [], selectedAuthorities = [], dobObject, dojObject, dateOfBirth, joiningDate;
        for (var i = 0; i < this.authorities.length; i++) {
            if (this.authorities[i].checked === true) {
                updatedAuthorities.push(this.authorities[i].role);
                selectedAuthorities.push(this.authorities[i].name);
            }
        }
        this.authorityNames = selectedAuthorities.toString();
        dobObject = $("#dateOfBirth").datepicker("getDate");
        this.dateOfBirth = $.datepicker.formatDate("yy-mm-dd", dobObject);
        dojObject = $("#joiningDate").datepicker("getDate");
        this.joiningDate = $.datepicker.formatDate("yy-mm-dd", dojObject);
        dateOfBirth = this.setDateFormat(this.dateOfBirth);
        joiningDate = this.setDateFormat(this.joiningDate);
        this.organisationAdminUser = {
            id: this.organisationUserId,
            activated: true,
            givenName: this.organisationAdminUserForm.value.firstName,
            lastName: this.organisationAdminUserForm.value.lastName,
            gender: this.organisationAdminUserForm.value.gender,
            dateOfBirth: dateOfBirth,
            joiningDate: joiningDate,
            email: this.organisationAdminUserForm.value.emailId,
            mobileNumber: this.organisationAdminUserForm.value.phoneNumber.toString(),
            //TODO: login and password 
            login: this.organisationAdminUserForm.value.firstName,
            password: this.organisationAdminUserForm.value.firstName,
            authorities: updatedAuthorities
        };
    };
    OrganisationUserUpdateComponent.prototype.roleOnSelection = function (event) {
        var eventChecked, selectedId;
        eventChecked = event.target.checked;
        selectedId = event.target.id;
        this.authorities.find(function (item) { return item.id === selectedId; }).checked = eventChecked;
    };
    OrganisationUserUpdateComponent.prototype.saveOrganisationAdminUser = function () {
        this.subscribeToSaveResponse(this.organisationService.updateOrgUser(this.organisationAdminUser));
    };
    OrganisationUserUpdateComponent.prototype.subscribeToSaveResponse = function (resp) {
        var _this = this;
        resp.subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res); });
    };
    OrganisationUserUpdateComponent.prototype.onSaveSuccess = function (res) {
        this.pluginService.alertMessage("Organisation user updated successfully", "success");
        this.previousPage();
    };
    OrganisationUserUpdateComponent.prototype.onSaveError = function (res) {
        this.pluginService.alertMessage("Could not save organisation user contact admin", "error");
    };
    OrganisationUserUpdateComponent.prototype.previousPage = function () {
        this._router.navigate(['/organisation', this.organisationId, 'organisation-user']);
    };
    OrganisationUserUpdateComponent.prototype.onBack = function () {
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
                localObj.previousPage();
            }
        });
    };
    OrganisationUserUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./organisation-user-update.component.html */ "./src/app/organisation-user/organisation-user-update.component.html"),
            providers: [_organisation_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationUserService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
            _organisation_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationUserService"]])
    ], OrganisationUserUpdateComponent);
    return OrganisationUserUpdateComponent;
}());



/***/ }),

/***/ "./src/app/organisation-user/organisation-user.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/organisation-user/organisation-user.service.ts ***!
  \****************************************************************/
/*! exports provided: OrganisationUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationUserService", function() { return OrganisationUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');
var OrganisationUserService = /** @class */ (function () {
    function OrganisationUserService(http) {
        this.http = http;
        this.orgUsersResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/common/api/app-users';
        this.orgUsersSearchResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/common/api/app-users/basic-search';
        this.usersResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'api/users';
        this.usersSearchResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'api/users/search';
    }
    OrganisationUserService.prototype.getOrganisationUserByOrgUserId = function (organisationId) {
        // const options = createRequestOption(req);
        var reqJSON = {
            "organisationId": organisationId
        };
        return this.http.post(this.orgUsersSearchResourceUrl, reqJSON, { observe: 'response' });
    };
    OrganisationUserService.prototype.getUserDetailByUserId = function (userId) {
        var reqJSON = {
            "id": userId
        };
        return this.http.post(this.usersSearchResourceUrl, reqJSON, { observe: 'response' });
    };
    OrganisationUserService.prototype.createOrgUser = function (orgSchool) {
        return this.http.post(this.orgUsersResourceUrl, orgSchool, { headers: headers, observe: 'response' });
    };
    OrganisationUserService.prototype.updateOrgUser = function (organisationUser) {
        return this.http.put(this.usersResourceUrl, organisationUser, { observe: 'response' });
    };
    OrganisationUserService.prototype.deleteOrgUser = function (login) {
        return this.http.delete(this.usersResourceUrl + "/" + login, { observe: 'response' });
    };
    OrganisationUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OrganisationUserService);
    return OrganisationUserService;
}());



/***/ }),

/***/ "./src/app/organisation/organisation-create.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/organisation/organisation-create.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row my-3 px-2\">\n    <div class=\"col-xxl-12\">\n        <div class=\"btn btn-danger\" (click)=\"onBack()\">\n            <i class=\"fa fa-chevron-left mr-2\"></i>Back\n        </div>\n    </div>\n</div>\n<div id=\"stepperTab\">\n    <ul id=\"progressbar\">\n        <li class=\"active\">\n            <span class=\"bar\">\n            </span>\n        </li>\n        <li>\n            <span class=\"bar\">\n            </span>\n        </li>\n        <li>\n            <span class=\"bar\">\n            </span>\n        </li>\n        <li>\n        </li>\n    </ul>\n\n    <fieldset [formGroup]=\"organisationInfoForm\">\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12\">\n                <h5 class=\"font-20\">Organisation information</h5>\n            </div>\n        </div>\n\n        <div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"orgName\">Organisation type</label>\n                <ng-select [items]=\"organisationTypes\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                    placeholder=\"Select organisation type\" [(ngModel)]=\"selectedOrganisationType\"\n                    formControlName=\"organisationType\" [searchable]=\"false\">\n                </ng-select>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"orgName\">Organisation name</label>\n                <input type=\"text\" class=\"form-control\"\n                    placeholder=\"Enter organisation name (min length: 3 and max length: 50)\"\n                    formControlName=\"organisationName\" minlength=\"3\" maxlength=\"50\"\n                    inputRestriction=\"alphabetsWithSpace\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Alphabets\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"regNumber\">Registration number <span class=\"text-muted\">(Optional)</span></label>\n                <input type=\"number\" class=\"form-control\"\n                    placeholder=\"Enter registration number (min length: 3 and max length: 25)\"\n                    formControlName=\"registrationNumber\" minlength=\"3\" maxlength=\"25\" inputRestriction=\"onlyIntegers\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Numbers\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"address1\">Address line 1<span class=\"text-muted\">(Optional)</span></label>\n                <input type=\"text\" class=\"form-control\"\n                    placeholder=\"Enter address line 1 (min length: 3 and max length: 250)\"\n                    formControlName=\"addressLineOne\" minlength=\"3\" maxlength=\"250\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Alphabets, Numbers and Special characters\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"address2\">Address line 2<span class=\"text-muted\">(Optional)</span></label>\n                <input type=\"text\" class=\"form-control\"\n                    placeholder=\"Enter address line 2 (min length: 3 and max length: 250)\"\n                    formControlName=\"addressLineTwo\" minlength=\"3\" maxlength=\"250\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Alphabets, Numbers and Special characters\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"country\">Country</label>\n                <ng-select [items]=\"countries\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                    placeholder=\"Select country\" [(ngModel)]=\"selectedCountry\" (change)=\"onCountryChange()\"\n                    formControlName=\"country\">\n                </ng-select>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"state\">State</label>\n                <ng-select [items]=\"states\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                    placeholder=\"Select state\" [(ngModel)]=\"selectedState\" (change)=\"onStateChange()\"\n                    formControlName=\"state\">\n                </ng-select>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"city\">City<span class=\"text-muted\">(Optional)</span></label>\n                <ng-select [items]=\"cities\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                    placeholder=\"Select city\" [(ngModel)]=\"selectedCity\">\n                </ng-select>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"number\">Pin code</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter pin code (min length: 6 and max length: 10)\"\n                    formControlName=\"pincode\" minlength=\"6\" maxlength=\"10\" inputRestriction=\"onlyIntegers\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Numbers\n                </div>\n            </div>\n        </div>\n\n        <button class=\"next btn btn-success float-right\" [disabled]=\"validateOrgInfo\">\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\n        </button>\n\n    </fieldset>\n\n    <fieldset [formGroup]=\"contactInfoForm\">\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12 d-flex justify-content-between align-items-start\">\n                <h5 class=\"font-20\">Primary contact information</h5>\n            </div>\n        </div>\n\n        <div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"fName\">Name</label>\n                <input type=\"text\" class=\"form-control\"\n                    placeholder=\"Enter contact name (min length: 3 and max length: 50)\" formControlName=\"contactName\"\n                    minlength=\"3\" maxlength=\"50\" inputRestriction=\"alphabetsWithSpace\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Alphabets\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"designation\">Designation</label>\n                <input type=\"text\" class=\"form-control\"\n                    placeholder=\"Enter designation (min length: 3 and max length: 50)\" formControlName=\"designation\"\n                    minlength=\"3\" maxlength=\"50\" inputRestriction=\"alphabetsWithSpace\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Alphabets\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"emailId\">Email</label>\n                <input type=\"email\" class=\"form-control\" placeholder=\"Enter email (min length: 3 and max length: 50)\"\n                    formControlName=\"emailId\" minlength=\"3\" maxlength=\"50\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Alphabets, Numbers and Special characters\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"phone\">Mobile number</label>\n                <input type=\"text\" class=\"form-control\"\n                    placeholder=\"Enter mobile number (min length: 10 and max length: 10)\" formControlName=\"phoneNumber\"\n                    minlength=\"10\" maxlength=\"10\" inputRestriction=\"onlyIntegers\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Numbers\n                </div>\n            </div>\n        </div>\n\n        <button class=\"next btn btn-success ml-2 float-right\" [disabled]=\"validateContactInfo\">\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\n        </button>\n        <div class=\"previous btn btn-danger float-right\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n        </div>\n\n    </fieldset>\n\n    <fieldset>\n        <div *ngIf=\"selectedOrganisationType\">\n            <div *ngIf=\"selectedOrganisationType.tag === 'SCHOOL_ORG' \">\n                <div class=\"row pb-4\">\n                    <div class=\"col-xxl-12\">\n                        <h2 class=\"font-20\">Curriculum information</h2>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-xxl-6 d-flex justify-content-start\" *ngFor=\"let data of curriculums;\">\n                        <div class=\"checkbox\">\n                            <input type=\"checkbox\" id=\"{{data.id}}\" [checked]=\"data.checked\"\n                                (click)=\"onCurriculumSelection($event)\">\n                            <label for=\"{{data.id}}\"></label>\n                        </div>\n                        <label for=\"{{data.id}}\">\n                            {{data.acronym}}\n                        </label>\n                        <div class=\"btn btn-icon btn-xs btn-outline-info align-self-center ml-4 mb-3\"\n                            (click)=\"showCurriculumDetails(data.id)\">\n                            <i class=\"fa fa-eye\"></i>\n                        </div>\n                    </div>\n                </div>\n\n                <div [formGroup]=\"examTypeForm\">\n                    <div class=\"row d-flex mb-2 align-items-end col-xxl-6 px-0\"\n                        *ngFor=\"let row of examTypeForm.get('examTypesList')?.controls;let index = index;\">\n                        <div class=\"col-xxl-8\">\n                            <label>Exam name</label>\n                            <input class=\"form-control\" [formControl]=\"row.get('examType')\" type=\"text\" minlength=\"3\"\n                                maxlength=\"50\" placeholder=\"Enter exam name\" />\n                        </div>\n                        <div class=\"btn btn-xxl btn-outline-danger\" (click)=\"deleteExamType(index)\">\n                            <i class=\"fa fa-trash\"></i>\n                        </div>\n                    </div>\n                    <div class=\"text-muted font-15 my-2 w-100\">\n                        Allowed characters - Alphabets, Numbers and Special characters\n                    </div>\n                    <div class=\"btn btn-info\" (click)=\"addExamType()\">\n                        <i class=\"fa fa-plus-circle mr-2\"></i>Add exam type\n                    </div>\n                </div>\n            </div>\n\n            <div *ngIf=\"selectedOrganisationType.tag === 'SUPER' \">\n                <div class=\"border-warning alert-warning p-2 mb-2\">\n                    Coming soon..!\n                </div>\n            </div>\n\n            <div *ngIf=\"selectedOrganisationType.tag === 'RETAILER' \">\n                <div class=\"border-warning alert-warning p-2 mb-2\">\n                    Coming soon..!\n                </div>\n            </div>\n        </div>\n\n        <button class=\"next btn btn-success ml-2 float-right\" (click)=\"mapOrganisationData()\"\n            [disabled]=\"validateCurriculumInfo\">\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\n        </button>\n        <div class=\"previous btn btn-danger float-right\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12\">\n                <h2 class=\"font-20\">Summary</h2>\n            </div>\n        </div>\n\n        <div class=\"accordion\" id=\"organisationCnf\">\n            <div class=\"mb-2 acd-group\">\n                <div class=\"card-header border\">\n                    <h5 class=\"mb-0\">\n                        <a href=\"#collpaseAccordion1\" class=\"btn-block text-left text-muted acd-heading\"\n                            data-toggle=\"collapse\" aria-expanded=\"true\">Organisation information</a>\n                    </h5>\n                </div>\n                <div id=\"collpaseAccordion1\" class=\"collapse show\" data-parent=\"#organisationCnf\">\n                    <div class=\"card-body p-3\">\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Organisation type</b></p>\n                            <p>{{organisation.organisationType}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Organisation name</b></p>\n                            <p>{{organisation.name}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.registrationNumber\">\n                            <p><b>Registration number</b></p>\n                            <p>{{organisation.registrationNumber}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.addressLine1\">\n                            <p><b>Address line 1</b></p>\n                            <p>{{organisation.addressLine1}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.addressLine2\">\n                            <p><b>Address line 2</b></p>\n                            <p>{{organisation.addressLine2}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Country</b></p>\n                            <p>{{organisation.country}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>State</b></p>\n                            <p>{{organisation.state}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.city\">\n                            <p><b>City</b></p>\n                            <p>{{organisation.city}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.pincode\">\n                            <p><b>Pincode</b></p>\n                            <p>{{organisation.pincode}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"mb-2 acd-group\">\n                <div class=\"card-header border\">\n                    <h5 class=\"mb-0\">\n                        <a href=\"#collpaseAccordion2\" class=\"btn-block text-left text-muted acd-heading collapsed\"\n                            data-toggle=\"collapse\">Contact information</a>\n                    </h5>\n                </div>\n                <div id=\"collpaseAccordion2\" class=\"collapse\" data-parent=\"#organisationCnf\">\n                    <div class=\"card-body p-3\">\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Name</b></p>\n                            <p>{{organisation.primaryContactName}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Designation</b></p>\n                            <p>{{organisation.primaryContactDesignation}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Phone number</b></p>\n                            <p>{{organisation.primaryContactPhone}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Email</b></p>\n                            <p>{{organisation.primaryContactMail}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"mb-2 acd-group\" *ngIf=\"selectedOrganisationType\">\n                <div class=\"card-header border\" *ngIf=\"selectedOrganisationType.tag === 'SCHOOL_ORG' \">\n                    <h5 class=\"mb-0\">\n                        <a href=\"#collpaseAccordion3\" class=\"btn-block text-left text-muted acd-heading collapsed\"\n                            data-toggle=\"collapse\">Curriculum information</a>\n                    </h5>\n                </div>\n                <div id=\"collpaseAccordion3\" class=\"collapse\" data-parent=\"#organisationCnf\">\n                    <div class=\"card-body p-3\">\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Curriculum</b></p>\n                            <p>{{curriculumNames}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"examTypes\">\n                            <p><b>Exam types</b></p>\n                            <p>{{examTypes}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"btn btn-success ml-3 float-right\" (click)=\"saveOrganisation()\">\n            <i class=\"fa fa-save mr-2\"></i> Save\n        </div>\n        <div class=\"previous btn btn-danger float-right\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n        </div>\n    </fieldset>\n</div>\n\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"viewCurriculumDetailModal\">\n    <div class=\"modal-dialog modal-full-height modal-right modal-notify\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\n                <h5 class=\"modal-title text-white\">\n                    View curriculum\n                </h5>\n                <div class=\"close btn btn-xl\" (click)=\"closeViewCurriculum()\">\n                    <i class=\"fa fa-times\"></i>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Curriculum name</b></p>\n                    <p>{{curriculum.acronym}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Description</b></p>\n                    <p>{{curriculum.description}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>From grade</b></p>\n                    <p>{{curriculum.gradesApplicableFrom}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>To grade</b></p>\n                    <p>{{curriculum.gradesApplicableTo}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Country</b></p>\n                    <p>{{country}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>State</b></p>\n                    <p>{{curriculum.state}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Start date</b></p>\n                    <p>{{startDate}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>End date</b></p>\n                    <p>{{endDate}}</p>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-danger\" (click)=\"closeViewCurriculum()\">\n                    <i class=\"fa fa-times mr-2\"></i>\n                    Close\n                </button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/organisation/organisation-create.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/organisation/organisation-create.component.ts ***!
  \***************************************************************/
/*! exports provided: OrganisationCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationCreateComponent", function() { return OrganisationCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation.service */ "./src/app/organisation/organisation.service.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../curriculum/curriculum.service */ "./src/app/curriculum/curriculum.service.ts");








var OrganisationCreateComponent = /** @class */ (function () {
    function OrganisationCreateComponent(_router, activatedRoute, formBuilder, pluginService, curriculumService, organisationService, commonService, changeDetector) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.curriculumService = curriculumService;
        this.organisationService = organisationService;
        this.commonService = commonService;
        this.changeDetector = changeDetector;
        this.countries = [];
        this.states = [];
        this.cities = [];
        this.curriculums = [];
        this.organisationTypes = [];
        this.curriculum = {};
        this.organisation = {};
        this.validateOrgInfo = true;
        this.validateContactInfo = true;
        this.validateCurriculumInfo = true;
    }
    OrganisationCreateComponent.prototype.ngOnInit = function () {
        this.pluginService.sideMenuToggle();
        this.pluginService.newStepperJs();
        this.createorganisationInfoForm();
        this.getOrganisationTypeList();
        this.getCountryList();
        this.getCurriculums();
        this.examTypesList = this.formBuilder.array([]);
    };
    OrganisationCreateComponent.prototype.getCountryList = function () {
        var _this = this;
        this.commonService.getCountryList().subscribe(function (countryData) {
            _this.countries = countryData;
        });
    };
    OrganisationCreateComponent.prototype.getOrganisationTypeList = function () {
        var _this = this;
        this.commonService.getOrganisationTypeList().subscribe(function (orgTypes) {
            _this.organisationTypes = orgTypes;
        });
    };
    OrganisationCreateComponent.prototype.createorganisationInfoForm = function () {
        this.organisationInfoForm = this.formBuilder.group({
            organisationType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            organisationName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            registrationNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)]),
            addressLineOne: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]),
            addressLineTwo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)])
        });
        this.contactInfoForm = this.formBuilder.group({
            contactName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)])
        });
        this.examTypeForm = this.formBuilder.group({});
    };
    OrganisationCreateComponent.prototype.createExamType = function () {
        return this.formBuilder.group({
            examType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
    };
    OrganisationCreateComponent.prototype.addExamType = function () {
        this.examTypeForm.addControl('examTypesList', this.examTypesList);
        this.examTypesList.push(this.createExamType());
    };
    OrganisationCreateComponent.prototype.deleteExamType = function (index) {
        this.examTypesList.removeAt(index);
    };
    OrganisationCreateComponent.prototype.trimValue = function (value) {
        if (value === null || value === undefined) {
            return value;
        }
        else {
            return value.trim();
        }
    };
    OrganisationCreateComponent.prototype.ngAfterViewChecked = function () {
        this.validateOrganisationForm();
        this.changeDetector.detectChanges();
    };
    OrganisationCreateComponent.prototype.validateOrganisationForm = function () {
        var orgName, contactName, emailId, designation;
        orgName = this.trimValue(this.organisationInfoForm.value.organisationName);
        contactName = this.trimValue(this.contactInfoForm.value.contactName);
        emailId = this.trimValue(this.contactInfoForm.value.email);
        designation = this.trimValue(this.contactInfoForm.value.designation);
        if (orgName === "" || orgName === undefined || orgName === null) {
            this.validateOrgInfo = true;
        }
        if (contactName === "" || contactName === undefined || contactName === null) {
            this.validateContactInfo = true;
        }
        if (emailId === "" || emailId === undefined || emailId === null) {
            this.validateContactInfo = true;
        }
        if (designation === "" || designation === undefined || designation === null) {
            this.validateContactInfo = true;
        }
        if (this.organisationInfoForm.valid) {
            this.validateOrgInfo = false;
        }
        if (this.organisationInfoForm.invalid) {
            this.validateOrgInfo = true;
        }
        if (this.contactInfoForm.valid) {
            this.validateContactInfo = false;
        }
        if (this.contactInfoForm.invalid) {
            this.validateContactInfo = true;
        }
        if (this.curriculums.length > 0) {
            for (var i = 0; i < this.curriculums.length; i++) {
                if (this.curriculums[i].checked === true) {
                    this.validateCurriculumInfo = false;
                }
                else if (this.curriculums[i].checked === false) {
                    this.validateCurriculumInfo = true;
                }
            }
        }
    };
    OrganisationCreateComponent.prototype.getCurriculums = function () {
        var _this = this;
        this.curriculumService
            .getStandardCurriculums()
            .subscribe(function (res) { return _this.assignCurriculumList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    OrganisationCreateComponent.prototype.assignCurriculumList = function (data) {
        this.curriculums = data;
    };
    OrganisationCreateComponent.prototype.onError = function (res) {
        this.pluginService.alertMessage("Could not get curriculum , please contact admin", "error");
    };
    OrganisationCreateComponent.prototype.onCurriculumSelection = function (event) {
        var selectedId, checked;
        checked = event.target.checked;
        selectedId = Number(event.target.id);
        this.curriculums.find(function (item) { return item.id === selectedId; }).checked = checked;
    };
    OrganisationCreateComponent.prototype.onCountryChange = function () {
        if (this.selectedCountry) {
            var countryId = this.selectedCountry.id;
            this.getStateListByCountryId(countryId);
            this.selectedState = null;
            this.selectedCity = null;
        }
    };
    OrganisationCreateComponent.prototype.onStateChange = function () {
        if (this.selectedState) {
            var stateId = this.selectedState.id;
            this.getCityListByStateId(stateId);
            this.selectedCity = null;
        }
    };
    OrganisationCreateComponent.prototype.getStateListByCountryId = function (countryId) {
        var _this = this;
        var stateList = [];
        this.states = [];
        this.commonService.getStateList().subscribe(function (stateData) {
            stateList = stateData;
            _this.states = stateList.filter(function (item) { return item.country_id === countryId.toString(); });
        });
    };
    OrganisationCreateComponent.prototype.getCityListByStateId = function (stateId) {
        var _this = this;
        var cityList = [];
        this.cities = [];
        this.commonService.getCityList().subscribe(function (cityData) {
            cityList = cityData;
            _this.cities = cityList.filter(function (item) { return item.state_id === stateId; });
        });
    };
    OrganisationCreateComponent.prototype.showCurriculumDetails = function (curriculumId) {
        var _this = this;
        var curriculum = [];
        curriculum = this.curriculums.filter(function (item) { return item.id === curriculumId; });
        this.curriculum = curriculum[0];
        this.country = this.countries.find(function (item) { return item.sortname === _this.curriculum.country; }).name;
        this.startDate = this.curriculum.startDate.substr(1, 2) + '/' + this.curriculum.startDate.substr(2, 3);
        this.endDate = this.curriculum.endDate.substr(1, 2) + '/' + this.curriculum.endDate.substr(2, 3);
        this.openViewCurriculumModal();
    };
    OrganisationCreateComponent.prototype.openViewCurriculumModal = function () {
        this.pluginService.showModalWindow("#viewCurriculumDetailModal");
    };
    OrganisationCreateComponent.prototype.closeViewCurriculum = function () {
        this.pluginService.hideModalWindow("#viewCurriculumDetailModal");
    };
    OrganisationCreateComponent.prototype.mapOrganisationData = function () {
        var curriculumIds = [], curriculumNames = [], regNumber, addressLine1, addressLine2, city, examTypes = [];
        for (var i = 0; i < this.curriculums.length; i++) {
            if (this.curriculums[i].checked === true) {
                curriculumIds.push(this.curriculums[i].id);
                curriculumNames.push(this.curriculums[i].acronym);
            }
        }
        this.curriculumNames = curriculumNames.toString();
        regNumber = this.organisationInfoForm.get('registrationNumber').value;
        if (regNumber === null || regNumber === "") {
            regNumber = null;
        }
        addressLine1 = this.trimValue(this.organisationInfoForm.get('addressLineOne').value);
        if (addressLine1 === null || addressLine1 === "") {
            addressLine1 = null;
        }
        addressLine2 = this.trimValue(this.organisationInfoForm.get('addressLineTwo').value);
        if (addressLine2 === null || addressLine2 === "") {
            addressLine2 = null;
        }
        if (this.selectedCity === null || this.selectedCity === "") {
            city = null;
        }
        else {
            city = this.selectedCity.name;
        }
        for (var j = 0; j < this.examTypesList.value.length; j++) {
            examTypes.push(this.examTypesList.value[j].examType);
        }
        this.examTypes = examTypes.toString();
        this.organisation = {
            organisationType: this.selectedOrganisationType.tag,
            examType: this.examTypes,
            curriculumIds: curriculumIds.toString(),
            name: this.trimValue(this.organisationInfoForm.get('organisationName').value),
            registrationNumber: regNumber,
            addressLine1: addressLine1,
            addressLine2: addressLine2,
            country: this.selectedCountry.name,
            state: this.selectedState.name,
            city: city,
            pincode: this.organisationInfoForm.get('pincode').value,
            primaryContactName: this.trimValue(this.contactInfoForm.get('contactName').value),
            primaryContactDesignation: this.trimValue(this.contactInfoForm.get('designation').value),
            primaryContactPhone: this.contactInfoForm.get('phoneNumber').value,
            primaryContactMail: this.trimValue(this.contactInfoForm.get('emailId').value),
        };
    };
    OrganisationCreateComponent.prototype.saveOrganisation = function () {
        this.subscribeToSaveResponse(this.organisationService.createOrganisation(this.organisation));
    };
    OrganisationCreateComponent.prototype.subscribeToSaveResponse = function (resp) {
        var _this = this;
        resp.subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res); });
    };
    OrganisationCreateComponent.prototype.onSaveSuccess = function (res) {
        this.pluginService.alertMessage("Organisation created successfully", "success");
        this.previousPage();
    };
    OrganisationCreateComponent.prototype.onSaveError = function (res) {
        this.pluginService.alertMessage("Could not save organisation contact admin", "error");
    };
    OrganisationCreateComponent.prototype.previousPage = function () {
        this._router.navigateByUrl('/organisation');
    };
    OrganisationCreateComponent.prototype.onBack = function () {
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
                localObj.previousPage();
                localObj.pluginService.sideMenuToggle();
            }
        });
    };
    OrganisationCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./organisation-create.component.html */ "./src/app/organisation/organisation-create.component.html"),
            providers: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
            _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_7__["CurriculumService"],
            _organisation_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"],
            _shared_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], OrganisationCreateComponent);
    return OrganisationCreateComponent;
}());



/***/ }),

/***/ "./src/app/organisation/organisation-delete.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/organisation/organisation-delete.component.ts ***!
  \***************************************************************/
/*! exports provided: OrganisationDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationDeleteComponent", function() { return OrganisationDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var _organisation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation.service */ "./src/app/organisation/organisation.service.ts");






var OrganisationDeleteComponent = /** @class */ (function () {
    function OrganisationDeleteComponent(router, activatedRoute, eventManager, organisationService, pluginService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.eventManager = eventManager;
        this.organisationService = organisationService;
        this.pluginService = pluginService;
    }
    OrganisationDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var organisation = _a.organisation;
            _this.deleteOrganisation(organisation);
        });
    };
    OrganisationDeleteComponent.prototype.subscribeToDeleteResponse = function (resp) {
        var _this = this;
        resp.subscribe(function (res) { return _this.onDeleteSuccess(res); }, function (res) { return _this.onDeleteError(res); });
    };
    OrganisationDeleteComponent.prototype.deleteOrganisation = function (organisation) {
        var localthisObject = this;
        swal({
            title: "Are you sure to delete this organisation ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localthisObject.confirmDelete(organisation.id);
            }
            else {
                localthisObject.previousUrl();
            }
        });
    };
    OrganisationDeleteComponent.prototype.confirmDelete = function (id) {
        this.subscribeToDeleteResponse(this.organisationService.deleteOrganisation(id));
    };
    OrganisationDeleteComponent.prototype.previousUrl = function () {
        this.router.navigateByUrl('/organisation');
    };
    OrganisationDeleteComponent.prototype.onDeleteSuccess = function (resp) {
        this.pluginService.alertMessage("Organisation deleted successfully", "success");
        this.previousUrl();
    };
    OrganisationDeleteComponent.prototype.onDeleteError = function (err) {
        this.pluginService.alertMessage("Could not delete organisation, please contact admin", "error");
    };
    OrganisationDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./organisation-manage.component.html */ "./src/app/organisation/organisation-manage.component.html"),
            providers: [_organisation_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"],
            _organisation_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"]])
    ], OrganisationDeleteComponent);
    return OrganisationDeleteComponent;
}());



/***/ }),

/***/ "./src/app/organisation/organisation-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/organisation/organisation-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row my-3\">\n    <div class=\"col-xxl-12 d-flex justify-content-between\">\n        <div class=\"btn btn-danger\" (click)=\"onBack()\">\n            <i class=\"fa fa-chevron-left mr-2\"></i>Back\n        </div>\n        <a class=\"btn btn-success\" [routerLink]=\"['/organisation',organisation.id, 'edit']\">\n            <i class=\"fa fa-edit mr-2\"></i>Edit organisation\n        </a>\n    </div>\n</div>\n<div class=\"accordion\" id=\"organisationCnf\">\n    <div class=\"mb-2 acd-group\">\n        <div class=\"card-header border\">\n            <h5 class=\"mb-0\">\n                <a href=\"#collpaseAccordion1\" class=\"btn-block text-left text-muted acd-heading\" data-toggle=\"collapse\"\n                    aria-expanded=\"true\">Organisation information</a>\n            </h5>\n        </div>\n        <div id=\"collpaseAccordion1\" class=\"collapse show\" data-parent=\"#organisationCnf\">\n            <div class=\"card-body p-3\">\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Organisation type</b></p>\n                    <p>{{organisationType}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Organisation name</b></p>\n                    <p>{{organisation.name}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.registrationNumber\">\n                    <p><b>Registration number</b></p>\n                    <p>{{organisation.registrationNumber}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.addressLine1\">\n                    <p><b>Address line 1</b></p>\n                    <p>{{organisation.addressLine1}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.addressLine2\">\n                    <p><b>Address line 2</b></p>\n                    <p>{{organisation.addressLine2}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Country</b></p>\n                    <p>{{organisation.country}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>State</b></p>\n                    <p>{{organisation.state}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.city\">\n                    <p><b>City</b></p>\n                    <p>{{organisation.city}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.pincode\">\n                    <p><b>Pincode</b></p>\n                    <p>{{organisation.pincode}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"mb-2 acd-group\">\n        <div class=\"card-header border\">\n            <h5 class=\"mb-0\">\n                <a href=\"#collpaseAccordion2\" class=\"btn-block text-left text-muted acd-heading collapsed\"\n                    data-toggle=\"collapse\">Contact information</a>\n            </h5>\n        </div>\n        <div id=\"collpaseAccordion2\" class=\"collapse\" data-parent=\"#organisationCnf\">\n            <div class=\"card-body p-3\">\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Name</b></p>\n                    <p>{{organisation.primaryContactName}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Designation</b></p>\n                    <p>{{organisation.primaryContactDesignation}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Phone number</b></p>\n                    <p>{{organisation.primaryContactPhone}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Email</b></p>\n                    <p>{{organisation.primaryContactMail}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"mb-2 acd-group\">\n        <div class=\"card-header border\">\n            <h5 class=\"mb-0\">\n                <a href=\"#collpaseAccordion3\" class=\"btn-block text-left text-muted acd-heading collapsed\"\n                    data-toggle=\"collapse\">Curriculum information</a>\n            </h5>\n        </div>\n        <div id=\"collpaseAccordion3\" class=\"collapse\" data-parent=\"#organisationCnf\">\n            <div class=\"card-body p-3\">\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Curriculum</b></p>\n                    <p>{{curriculumNames}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.examType\">\n                    <p><b>Exam types</b></p>\n                    <p>{{organisation.examType}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/organisation/organisation-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/organisation/organisation-details.component.ts ***!
  \****************************************************************/
/*! exports provided: OrganisationDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationDetailsComponent", function() { return OrganisationDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation.service */ "./src/app/organisation/organisation.service.ts");
/* harmony import */ var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../curriculum/curriculum.service */ "./src/app/curriculum/curriculum.service.ts");







var OrganisationDetailsComponent = /** @class */ (function () {
    function OrganisationDetailsComponent(_router, activatedRoute, formBuilder, pluginService, curriculumService, organisationService) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.curriculumService = curriculumService;
        this.organisationService = organisationService;
        this.curriculums = [];
        this.organisation = {};
    }
    OrganisationDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pluginService.sideMenuToggle();
        this.pluginService.newStepperJs();
        this.activatedRoute.data.subscribe(function (_a) {
            var organisation = _a.organisation;
            _this.organisation = organisation;
            _this.getCurriculums();
        });
    };
    OrganisationDetailsComponent.prototype.updateOrganisationDetails = function (organisation) {
        var curriculumNames = [], curriculumIds, curriculumIdArray = [];
        curriculumIds = organisation.curriculumIds;
        curriculumIdArray = curriculumIds.split(",", 3);
        var _loop_1 = function (i) {
            curriculumNames.push(this_1.curriculums.find(function (item) { return item.id === Number(curriculumIdArray[i]); }).acronym);
        };
        var this_1 = this;
        for (var i = 0; i < curriculumIdArray.length; i++) {
            _loop_1(i);
        }
        this.curriculumNames = curriculumNames.toString();
        if (organisation.organisationType === 'SCHOOL_ORG') {
            this.organisationType = "School organisation";
        }
        else if (organisation.organisationType === 'SUPER') {
            this.organisationType = "Super";
        }
        else if (organisation.organisationType === 'RETAILER') {
            this.organisationType = "Retailer";
        }
    };
    OrganisationDetailsComponent.prototype.getCurriculums = function () {
        var _this = this;
        this.curriculumService
            .getStandardCurriculums()
            .subscribe(function (res) { return _this.assignCurriculumList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    OrganisationDetailsComponent.prototype.assignCurriculumList = function (data) {
        this.curriculums = data;
        this.updateOrganisationDetails(this.organisation);
    };
    OrganisationDetailsComponent.prototype.onError = function (res) {
        this.pluginService.alertMessage("Could not get organisation details , please contact admin", "error");
    };
    OrganisationDetailsComponent.prototype.onBack = function () {
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
                localObj._router.navigateByUrl('/organisation');
                localObj.pluginService.sideMenuToggle();
            }
        });
    };
    OrganisationDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./organisation-details.component.html */ "./src/app/organisation/organisation-details.component.html"),
            providers: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
            _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_6__["CurriculumService"],
            _organisation_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"]])
    ], OrganisationDetailsComponent);
    return OrganisationDetailsComponent;
}());



/***/ }),

/***/ "./src/app/organisation/organisation-manage.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/organisation/organisation-manage.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 d-flex justify-content-end my-3\">\n    <a routerLink=\"/organisation/create\">\n        <div class=\"btn btn-primary\">\n            <i class=\"fa fa-plus-circle mr-2\"></i> Create organisation\n        </div>\n    </a>\n</div>\n<div class=\"table-responsive\" *ngIf=\"organisations\">\n    <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\n        <thead>\n            <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"reset.bind(this)\">\n                <th jhiSortBy=\"name\">Organisation name <span class=\"fa fa-sort ml-1\"></span></th>\n                <th jhiSortBy=\"country\">Country <span class=\"fa fa-sort ml-1\"></span></th>\n                <th class=\"fixed-column\">Subsidiary schools</th>\n                <th class=\"fixed-column\">Organisation users</th>\n                <th class=\"fixed-column\">Actions</th>\n            </tr>\n        </thead>\n        <tbody infinite-scroll (scrolled)=\"loadPage(page + 1)\" [infiniteScrollDisabled]=\"page >= links['last']\"\n            [infiniteScrollDistance]=\"0\">\n            <tr *ngFor=\"let organisation of organisations ;trackBy: trackId\">\n                <td data-column=\"Organisation name\">{{organisation.name}}</td>\n                <td data-column=\"Country\">{{organisation.country}}</td>\n                <td class=\"fixed-column\" data-column=\"Subsidiary schools\">\n                    <a class=\"btn btn-outline-primary mr-1\"\n                        [routerLink]=\"['/organisation', organisation.id, 'school' ]\">\n                        <i class=\"fa fa-cog mr-2\"></i>\n                        Manage\n                    </a>\n                </td>\n                <td class=\"fixed-column\" data-column=\"Organisation users\">\n                    <a class=\"btn btn-outline-primary mr-1\"\n                        [routerLink]=\"['/organisation', organisation.id, 'organisation-user' ]\">\n                        <i class=\"fa fa-cog mr-2\"></i>\n                        Manage\n                    </a>\n                </td>\n                <td class=\"fixed-column\" data-column=\"Actions\">\n                    <div>\n                        <a class=\"btn btn-outline-info btn-icon-size mr-1 mb-1\"\n                            [routerLink]=\"['/organisation', organisation.id, 'view' ]\">\n                            <i class=\"fa fa-eye\"></i>\n                        </a>\n\n                        <a class=\"btn btn-outline-success btn-icon-size mr-1 mb-1\"\n                            [routerLink]=\"['/organisation', organisation.id, 'edit']\">\n                            <i class=\"fa fa-edit\"></i>\n                        </a>\n\n                        <a class=\"btn btn-outline-danger btn-icon-size mb-1\"\n                            [routerLink]=\"['/organisation', organisation.id, 'delete']\">\n                            <i class=\"fa fa-trash\"></i>\n                        </a>\n                    </div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/organisation/organisation-manage.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/organisation/organisation-manage.component.ts ***!
  \***************************************************************/
/*! exports provided: OrganisationManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationManageComponent", function() { return OrganisationManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _organisation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./organisation.service */ "./src/app/organisation/organisation.service.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");








var OrganisationManageComponent = /** @class */ (function () {
    function OrganisationManageComponent(_router, activatedRoute, organisationService, eventManager, parseLinks, principalService, pluginService) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.organisationService = organisationService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.organisations = [];
        this.itemsPerPage = _shared__WEBPACK_IMPORTED_MODULE_5__["ITEMS_PER_PAGE"];
        this.page = 0;
        this.links = {
            last: 0
        };
        this.predicate = 'id';
        this.reverse = false;
    }
    OrganisationManageComponent.prototype.loadOrganisationList = function () {
        var _this = this;
        this.organisationService
            .getOrganisations({
            page: this.page,
            size: this.itemsPerPage,
            sort: this.sort()
        })
            .subscribe(function (res) { return _this.paginateOrganisations(res.body, res.headers); }, function (res) { return _this.onError(res.message); });
    };
    OrganisationManageComponent.prototype.paginateOrganisations = function (data, headers) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = parseInt(headers.get('X-Total-Count'), 10);
        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
                this.organisations.push(data[i]);
            }
        }
        else {
            this.pluginService.alertMessage("No data found..!", "warning");
        }
    };
    OrganisationManageComponent.prototype.onError = function (errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    };
    OrganisationManageComponent.prototype.reset = function () {
        this.page = 0;
        this.organisations = [];
        this.loadOrganisationList();
    };
    OrganisationManageComponent.prototype.loadPage = function (page) {
        this.page = page;
        this.loadOrganisationList();
    };
    OrganisationManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadOrganisationList();
        this.principalService.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInOrganisations();
    };
    OrganisationManageComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    OrganisationManageComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    OrganisationManageComponent.prototype.registerChangeInOrganisations = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('organisationListModification', function (response) { return _this.reset(); });
    };
    OrganisationManageComponent.prototype.sort = function () {
        var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    };
    OrganisationManageComponent.prototype.ngDestroy = function () {
        this.eventSubscriber.unsubscribe();
    };
    OrganisationManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./organisation-manage.component.html */ "./src/app/organisation/organisation-manage.component.html"),
            providers: [_organisation_service__WEBPACK_IMPORTED_MODULE_6__["OrganisationService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _organisation_service__WEBPACK_IMPORTED_MODULE_6__["OrganisationService"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"],
            _core__WEBPACK_IMPORTED_MODULE_4__["Principal"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__["PluginService"]])
    ], OrganisationManageComponent);
    return OrganisationManageComponent;
}());



/***/ }),

/***/ "./src/app/organisation/organisation-update.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/organisation/organisation-update.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row my-3 px-2\">\n    <div class=\"col-xxl-12\">\n        <div class=\"btn btn-danger\" (click)=\"onBack()\">\n            <i class=\"fa fa-chevron-left mr-2\"></i>Back\n        </div>\n    </div>\n</div>\n<div id=\"stepperTab\">\n    <ul id=\"progressbar\">\n        <li class=\"active\">\n            <span class=\"bar\">\n            </span>\n        </li>\n        <li>\n            <span class=\"bar\">\n            </span>\n        </li>\n        <li>\n            <span class=\"bar\">\n            </span>\n        </li>\n        <li>\n        </li>\n    </ul>\n\n    <fieldset [formGroup]=\"organisationInfoForm\">\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12\">\n                <h5 class=\"font-20\">Organisation information</h5>\n            </div>\n        </div>\n\n        <div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"orgName\">Organisation type</label>\n                <ng-select [items]=\"organisationTypes\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                    placeholder=\"Select organisation type\" [(ngModel)]=\"selectedOrganisationType\"\n                    formControlName=\"organisationType\" [searchable]=\"false\">\n                </ng-select>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"orgName\">Organisation name</label>\n                <input type=\"text\" class=\"form-control\"\n                    placeholder=\"Enter organisation name (min length: 3 and max length: 50)\"\n                    formControlName=\"organisationName\" minlength=\"3\" maxlength=\"50\"\n                    inputRestriction=\"alphabetsWithSpace\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Alphabets\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"regNumber\">Registration number <span class=\"text-muted\">(Optional)</span></label>\n                <input type=\"number\" class=\"form-control\"\n                    placeholder=\"Enter registration number (min length: 3 and max length: 25)\"\n                    formControlName=\"registrationNumber\" minlength=\"3\" maxlength=\"25\" inputRestriction=\"onlyIntegers\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Numbers\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"address1\">Address line 1<span class=\"text-muted\">(Optional)</span></label>\n                <input type=\"text\" class=\"form-control\"\n                    placeholder=\"Enter address line 1 (min length: 3 and max length: 250)\"\n                    formControlName=\"addressLineOne\" minlength=\"3\" maxlength=\"250\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Alphabets, Numbers and Special characters\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"address2\">Address line 2<span class=\"text-muted\">(Optional)</span></label>\n                <input type=\"text\" class=\"form-control\"\n                    placeholder=\"Enter address line 2 (min length: 3 and max length: 250)\"\n                    formControlName=\"addressLineTwo\" minlength=\"3\" maxlength=\"250\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Alphabets, Numbers and Special characters\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"country\">Country</label>\n                <ng-select [items]=\"countries\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                    placeholder=\"Select country\" [(ngModel)]=\"selectedCountry\" (change)=\"onCountryChange()\"\n                    formControlName=\"country\">\n                </ng-select>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"state\">State</label>\n                <ng-select [items]=\"states\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                    placeholder=\"Select state\" [(ngModel)]=\"selectedState\" (change)=\"onStateChange()\"\n                    formControlName=\"state\">\n                </ng-select>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"city\">City<span class=\"text-muted\">(Optional)</span></label>\n                <ng-select [items]=\"cities\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                    placeholder=\"Select city\" [(ngModel)]=\"selectedCity\">\n                </ng-select>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"number\">Pin code </label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter pin code (min length: 6 and max length: 10)\"\n                    formControlName=\"pincode\" minlength=\"6\" maxlength=\"10\" inputRestriction=\"onlyIntegers\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Numbers\n                </div>\n            </div>\n        </div>\n\n        <button class=\"next btn btn-success float-right\" [disabled]=\"validateOrgInfo\">\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\n        </button>\n\n    </fieldset>\n\n    <fieldset [formGroup]=\"contactInfoForm\">\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12 d-flex justify-content-between align-items-start\">\n                <h5 class=\"font-20\">Primary contact information</h5>\n            </div>\n        </div>\n\n        <div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"fName\">Name</label>\n                <input type=\"text\" class=\"form-control\"\n                    placeholder=\"Enter contact name (min length: 3 and max length: 50)\" formControlName=\"contactName\"\n                    minlength=\"3\" maxlength=\"50\" inputRestriction=\"alphabetsWithSpace\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Alphabets\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"designation\">Designation</label>\n                <input type=\"text\" class=\"form-control\"\n                    placeholder=\"Enter designation (min length: 3 and max length: 50)\" formControlName=\"designation\"\n                    minlength=\"3\" maxlength=\"50\" inputRestriction=\"alphabetsWithSpace\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Alphabets\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"emailId\">Email</label>\n                <input type=\"email\" class=\"form-control\" placeholder=\"Enter email (min length: 3 and max length: 50)\"\n                    formControlName=\"emailId\" minlength=\"3\" maxlength=\"50\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Alphabets, Numbers and Special characters\n                </div>\n            </div>\n            <div class=\"form-group col-xxl-6 p-0\">\n                <label for=\"phone\">Mobile number</label>\n                <input type=\"text\" class=\"form-control\"\n                    placeholder=\"Enter mobile number (min length: 10 and max length: 10)\" formControlName=\"phoneNumber\"\n                    minlength=\"10\" maxlength=\"10\" inputRestriction=\"onlyIntegers\">\n                <div class=\"text-muted font-15 my-2\">\n                    Allowed characters - Numbers\n                </div>\n            </div>\n        </div>\n\n        <button class=\"next btn btn-success ml-2 float-right\" [disabled]=\"validateContactInfo\">\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\n        </button>\n        <div class=\"previous btn btn-danger float-right\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n        </div>\n\n    </fieldset>\n\n    <fieldset>\n        <div *ngIf=\"selectedOrganisationType\" [formGroup]=\"examTypeForm\">\n            <div *ngIf=\"selectedOrganisationType.tag === 'SCHOOL_ORG' \">\n                <div class=\"row pb-4\">\n                    <div class=\"col-xxl-12\">\n                        <h2 class=\"font-20\">Curriculum information</h2>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-xxl-6 d-flex justify-content-start\" *ngFor=\"let data of curriculums;\">\n                        <div class=\"checkbox\">\n                            <input type=\"checkbox\" id=\"{{data.id}}\" [checked]=\"data.checked\"\n                                (click)=\"onCurriculumSelection($event)\">\n                            <label for=\"{{data.id}}\"></label>\n                        </div>\n                        <label for=\"{{data.id}}\">\n                            {{data.acronym}}\n                        </label>\n                        <div class=\"btn btn-icon btn-xs btn-outline-info align-self-center ml-4 mb-3\"\n                            (click)=\"showCurriculumDetails(data.id)\">\n                            <i class=\"fa fa-eye\"></i>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"examTypesList.length > 0\">\n                    <div class=\"row d-flex mb-2 align-items-end col-xxl-6 px-0\"\n                        *ngFor=\"let data of examTypesList;let index = index;\">\n                        <div class=\"col-xxl-8\">\n                            <label>Exam name</label>\n                            <input class=\"form-control\" type=\"text\" minlength=\"3\" maxlength=\"50\"\n                                placeholder=\"Enter exam name\" [value]=\"data\" readonly />\n                        </div>\n                        <div class=\"btn btn-xxl btn-outline-danger\" data-action=\"edit\"\n                            (click)=\"deleteExamType($event,index)\">\n                            <i class=\"fa fa-trash\"></i>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row d-flex mb-2 align-items-end col-xxl-6 px-0\"\n                    *ngFor=\"let row of examTypeForm.get('updatedExamTypesList')?.controls;let index = index;\">\n                    <div class=\"col-xxl-8\">\n                        <label>Exam name</label>\n                        <input class=\"form-control\" [formControl]=\"row.get('examType')\" type=\"text\" minlength=\"3\"\n                            maxlength=\"50\" placeholder=\"Enter exam name\" />\n                    </div>\n                    <div class=\"btn btn-xxl btn-outline-danger\" data-action=\"create\"\n                        (click)=\"deleteExamType($event,index)\">\n                        <i class=\"fa fa-trash\"></i>\n                    </div>\n                    <div class=\"text-muted font-15 my-2 w-100 px-4\">\n                        Allowed characters - Alphabets, Numbers and Special characters\n                    </div>\n                </div>\n                <div class=\"btn btn-info\" (click)=\"addExamType()\">\n                    <i class=\"fa fa-plus-circle mr-2\"></i>Add exam type\n                </div>\n            </div>\n\n            <div *ngIf=\"selectedOrganisationType.tag === 'SUPER' \">\n                <div class=\"border-warning alert-warning p-2 mb-2\">\n                    Coming soon..!\n                </div>\n            </div>\n\n            <div *ngIf=\"selectedOrganisationType.tag === 'RETAILER' \">\n                <div class=\"border-warning alert-warning p-2 mb-2\">\n                    Coming soon..!\n                </div>\n            </div>\n        </div>\n\n        <button class=\"next btn btn-success mx-3 float-right\" [disabled]=\"validateCurriculumInfo\"\n            (click)=\"mapOrganisationData()\">\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\n        </button>\n        <div class=\"previous btn btn-danger float-right\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12\">\n                <h2 class=\"font-20\">Summary</h2>\n            </div>\n        </div>\n\n        <div class=\"accordion\" id=\"organisationCnf\">\n            <div class=\"mb-2 acd-group\">\n                <div class=\"card-header border\">\n                    <h5 class=\"mb-0\">\n                        <a href=\"#collpaseAccordion1\" class=\"btn-block text-left text-muted acd-heading\"\n                            data-toggle=\"collapse\" aria-expanded=\"true\">Organisation information</a>\n                    </h5>\n                </div>\n                <div id=\"collpaseAccordion1\" class=\"collapse show\" data-parent=\"#organisationCnf\">\n                    <div class=\"card-body p-3\">\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Organisation type</b></p>\n                            <p>{{organisation.organisationType}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Organisation name</b></p>\n                            <p>{{organisation.name}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.registrationNumber\">\n                            <p><b>Registration number</b></p>\n                            <p>{{organisation.registrationNumber}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.addressLine1\">\n                            <p><b>Address line 1</b></p>\n                            <p>{{organisation.addressLine1}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.addressLine2\">\n                            <p><b>Address line 2</b></p>\n                            <p>{{organisation.addressLine2}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Country</b></p>\n                            <p>{{organisation.country}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>State</b></p>\n                            <p>{{organisation.state}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.city\">\n                            <p><b>City</b></p>\n                            <p>{{organisation.city}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.pincode\">\n                            <p><b>Pincode</b></p>\n                            <p>{{organisation.pincode}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"mb-2 acd-group\">\n                <div class=\"card-header border\">\n                    <h5 class=\"mb-0\">\n                        <a href=\"#collpaseAccordion2\" class=\"btn-block text-left text-muted acd-heading collapsed\"\n                            data-toggle=\"collapse\">Contact information</a>\n                    </h5>\n                </div>\n                <div id=\"collpaseAccordion2\" class=\"collapse\" data-parent=\"#organisationCnf\">\n                    <div class=\"card-body p-3\">\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Name</b></p>\n                            <p>{{organisation.primaryContactName}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Designation</b></p>\n                            <p>{{organisation.primaryContactDesignation}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Phone number</b></p>\n                            <p>{{organisation.primaryContactPhone}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Email</b></p>\n                            <p>{{organisation.primaryContactMail}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"mb-2 acd-group\" *ngIf=\"selectedOrganisationType\">\n                <div class=\"card-header border\" *ngIf=\"selectedOrganisationType.tag === 'SCHOOL_ORG' \">\n                    <h5 class=\"mb-0\">\n                        <a href=\"#collpaseAccordion3\" class=\"btn-block text-left text-muted acd-heading collapsed\"\n                            data-toggle=\"collapse\">Curriculum information</a>\n                    </h5>\n                </div>\n                <div id=\"collpaseAccordion3\" class=\"collapse\" data-parent=\"#organisationCnf\">\n                    <div class=\"card-body p-3\">\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Curriculum</b></p>\n                            <p>{{curriculumNames}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"examTypes\">\n                            <p><b>Exam types</b></p>\n                            <p>{{examTypes}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"btn btn-success ml-2 float-right\" (click)=\"updateOrganisation()\">\n            <i class=\"fa fa-save mr-2\"></i> Save\n        </div>\n        <div class=\"previous btn btn-danger float-right\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n        </div>\n    </fieldset>\n\n</div>\n\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"viewCurriculumDetailEditModal\">\n    <div class=\"modal-dialog modal-full-height modal-right modal-notify\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\n                <h5 class=\"modal-title text-white\">\n                    View curriculum\n                </h5>\n                <div class=\"close btn btn-xl\" data-dismiss=\"modal\" (click)=\"closeViewCurriculum()\" aria-label=\"Close\">\n                    <i class=\"fa fa-times\"></i>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Curriculum name</b></p>\n                    <p>{{curriculum.acronym}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Description</b></p>\n                    <p>{{curriculum.description}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>From grade</b></p>\n                    <p>{{curriculum.gradesApplicableFrom}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>To grade</b></p>\n                    <p>{{curriculum.gradesApplicableTo}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Country</b></p>\n                    <p>{{country}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>State</b></p>\n                    <p>{{curriculum.state}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>Start date</b></p>\n                    <p>{{startDate}}</p>\n                </div>\n                <div class=\"d-flex justify-content-between w-100\">\n                    <p><b>End date</b></p>\n                    <p>{{endDate}}</p>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <div class=\"d-flex justify-content-end\">\n                    <button class=\"btn btn-danger\" (click)=\"closeViewCurriculum()\">\n                        <i class=\"fa fa-times mr-2\"></i>\n                        Close\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/organisation/organisation-update.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/organisation/organisation-update.component.ts ***!
  \***************************************************************/
/*! exports provided: OrganisationUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationUpdateComponent", function() { return OrganisationUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation.service */ "./src/app/organisation/organisation.service.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../curriculum/curriculum.service */ "./src/app/curriculum/curriculum.service.ts");








var OrganisationUpdateComponent = /** @class */ (function () {
    function OrganisationUpdateComponent(_router, activatedRoute, formBuilder, pluginService, curriculumService, organisationService, commonService, changeDetector) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.curriculumService = curriculumService;
        this.organisationService = organisationService;
        this.commonService = commonService;
        this.changeDetector = changeDetector;
        this.examTypesList = [];
        this.countries = [];
        this.states = [];
        this.cities = [];
        this.allStates = [];
        this.allCities = [];
        this.curriculums = [];
        this.curriculumIds = [];
        this.organisationTypes = [];
        this.curriculum = {};
        this.organisation = {};
        this.validateOrgInfo = true;
        this.validateContactInfo = true;
        this.validateCurriculumInfo = true;
    }
    OrganisationUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pluginService.sideMenuToggle();
        this.pluginService.newStepperJs();
        this.createorganisationInfoForm();
        this.getCountryList();
        this.getOrganisationTypeList();
        this.activatedRoute.data.subscribe(function (_a) {
            var organisation = _a.organisation;
            _this.organisation = organisation;
        });
        this.updatedExamTypesList = this.formBuilder.array([]);
    };
    OrganisationUpdateComponent.prototype.getOrganisationTypeList = function () {
        var _this = this;
        this.commonService.getOrganisationTypeList().subscribe(function (orgTypes) {
            _this.organisationTypes = orgTypes;
        });
    };
    OrganisationUpdateComponent.prototype.getCountryList = function () {
        var _this = this;
        this.commonService.getCountryList().subscribe(function (countryData) {
            _this.countries = countryData;
            _this.getStateList();
        });
    };
    OrganisationUpdateComponent.prototype.getStateList = function () {
        var _this = this;
        this.allStates = [];
        this.commonService.getStateList().subscribe(function (stateData) {
            _this.allStates = stateData;
            _this.getCityList();
        });
    };
    OrganisationUpdateComponent.prototype.getCityList = function () {
        var _this = this;
        this.allCities = [];
        this.commonService.getCityList().subscribe(function (cityData) {
            _this.allCities = cityData;
            _this.patchorganisationInfoForm();
        });
    };
    OrganisationUpdateComponent.prototype.createorganisationInfoForm = function () {
        this.organisationInfoForm = this.formBuilder.group({
            organisationType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            organisationName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
            registrationNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)]),
            addressLineOne: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(250)]),
            addressLineTwo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(250)]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)])
        });
        this.contactInfoForm = this.formBuilder.group({
            contactName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)])
        });
        this.examTypeForm = this.formBuilder.group({});
    };
    OrganisationUpdateComponent.prototype.createExamType = function () {
        return this.formBuilder.group({
            examType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
    };
    OrganisationUpdateComponent.prototype.addExamType = function () {
        this.examTypeForm.addControl('updatedExamTypesList', this.updatedExamTypesList);
        this.updatedExamTypesList.push(this.createExamType());
    };
    OrganisationUpdateComponent.prototype.deleteExamType = function (event, index) {
        var action = event.target.dataset.action;
        if (action === "create") {
            this.updatedExamTypesList.removeAt(index);
        }
        else if (action === "edit") {
            this.examTypesList.splice(index, 1);
        }
    };
    OrganisationUpdateComponent.prototype.trimValue = function (value) {
        if (value === null || value === undefined) {
            return value;
        }
        else {
            return value.trim();
        }
    };
    OrganisationUpdateComponent.prototype.ngAfterViewChecked = function () {
        this.validateOrganisationForm();
        this.changeDetector.detectChanges();
    };
    OrganisationUpdateComponent.prototype.validateOrganisationForm = function () {
        var orgName, contactName, emailId, designation;
        orgName = this.trimValue(this.organisationInfoForm.value.organisationName);
        contactName = this.trimValue(this.contactInfoForm.value.contactName);
        emailId = this.trimValue(this.contactInfoForm.value.email);
        designation = this.trimValue(this.contactInfoForm.value.designation);
        if (orgName === "" || orgName === undefined || orgName === null) {
            this.validateOrgInfo = true;
        }
        if (contactName === "" || contactName === undefined || contactName === null) {
            this.validateContactInfo = true;
        }
        if (emailId === "" || emailId === undefined || emailId === null) {
            this.validateContactInfo = true;
        }
        if (designation === "" || designation === undefined || designation === null) {
            this.validateContactInfo = true;
        }
        if (this.organisationInfoForm.valid) {
            this.validateOrgInfo = false;
        }
        if (this.organisationInfoForm.invalid) {
            this.validateOrgInfo = true;
        }
        if (this.contactInfoForm.valid) {
            this.validateContactInfo = false;
        }
        if (this.contactInfoForm.invalid) {
            this.validateContactInfo = true;
        }
        if (this.curriculums.length > 0) {
            for (var i = 0; i < this.curriculums.length; i++) {
                if (this.curriculums[i].checked === true) {
                    this.validateCurriculumInfo = false;
                }
                else if (this.curriculums[i].checked === false) {
                    this.validateCurriculumInfo = true;
                }
            }
        }
    };
    OrganisationUpdateComponent.prototype.patchorganisationInfoForm = function () {
        var _this = this;
        var countryIndex, stateIndex, cityIndex, organisation;
        this.curriculumIds = [];
        organisation = this.organisation;
        this.organisationId = this.organisation.id;
        if (this.organisation.examType) {
            this.examTypesList = organisation.examType.split(',');
        }
        if (this.organisation.organisationType) {
            this.selectedOrganisationType = this.organisationTypes.filter(function (item) { return item.tag === _this.organisation.organisationType; })[0];
        }
        else {
            this.selectedOrganisationType = null;
        }
        this.organisationInfoForm.setValue({
            organisationType: this.selectedOrganisationType,
            organisationName: organisation.name,
            registrationNumber: organisation.registrationNumber,
            addressLineOne: organisation.addressLine1,
            addressLineTwo: organisation.addressLine2,
            country: null,
            state: null,
            pincode: organisation.pincode
        });
        this.contactInfoForm.setValue({
            contactName: organisation.primaryContactName,
            designation: organisation.primaryContactDesignation,
            emailId: organisation.primaryContactMail,
            phoneNumber: organisation.primaryContactPhone
        });
        countryIndex = this.countries.findIndex(function (item) { return item.name === organisation.country; });
        this.selectedCountry = this.countries[countryIndex];
        this.states = this.allStates.filter(function (item) { return item.country_id === _this.countries[countryIndex].id.toString(); });
        stateIndex = this.states.findIndex(function (item) { return item.name === organisation.state; });
        this.selectedState = this.states[stateIndex];
        this.cities = this.allCities.filter(function (item) { return item.state_id === _this.states[stateIndex].id; });
        cityIndex = this.cities.findIndex(function (item) { return item.name === organisation.city; });
        this.selectedCity = this.cities[cityIndex];
        this.curriculumIds = organisation.curriculumIds;
        this.getCurriculums();
    };
    OrganisationUpdateComponent.prototype.getCurriculums = function () {
        var _this = this;
        this.curriculumService
            .getStandardCurriculums()
            .subscribe(function (res) { return _this.assignCurriculumList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    OrganisationUpdateComponent.prototype.assignCurriculumList = function (data) {
        var curriculumIdArray = [], curriculums = [];
        this.curriculums = [];
        curriculums = data;
        curriculumIdArray = this.curriculumIds.toString().split(",", 3);
        for (var j = 0; j < curriculumIdArray.length; j++) {
            for (var i = 0; i < curriculums.length; i++) {
                if (curriculums[i].id === Number(curriculumIdArray[j])) {
                    curriculums[i].checked = true;
                }
            }
        }
        this.curriculums = curriculums;
    };
    OrganisationUpdateComponent.prototype.onError = function (res) {
        this.pluginService.alertMessage("Could not get curriculum , please contact admin", "error");
    };
    OrganisationUpdateComponent.prototype.onCurriculumSelection = function (event) {
        var selectedId, checked;
        checked = event.target.checked;
        selectedId = Number(event.target.id);
        this.curriculums.find(function (item) { return item.id === selectedId; }).checked = checked;
    };
    OrganisationUpdateComponent.prototype.onCountryChange = function () {
        var countryId = this.selectedCountry.id;
        this.getStateListByCountryId(countryId);
        this.selectedState = null;
        this.selectedCity = null;
    };
    OrganisationUpdateComponent.prototype.onStateChange = function () {
        var stateId = this.selectedState.id;
        this.getCityListByStateId(stateId);
        this.selectedCity = null;
    };
    OrganisationUpdateComponent.prototype.getStateListByCountryId = function (countryId) {
        var _this = this;
        var stateList = [];
        this.states = [];
        this.commonService.getStateList().subscribe(function (stateData) {
            stateList = stateData;
            _this.states = stateList.filter(function (item) { return item.country_id === countryId.toString(); });
        });
    };
    OrganisationUpdateComponent.prototype.getCityListByStateId = function (stateId) {
        var _this = this;
        var cityList = [];
        this.cities = [];
        this.commonService.getCityList().subscribe(function (cityData) {
            cityList = cityData;
            _this.cities = cityList.filter(function (item) { return item.state_id === stateId; });
        });
    };
    OrganisationUpdateComponent.prototype.showCurriculumDetails = function (curriculumId) {
        var _this = this;
        var curriculum = [];
        curriculum = this.curriculums.filter(function (item) { return item.id === curriculumId; });
        this.curriculum = curriculum[0];
        this.country = this.countries.find(function (item) { return item.sortname === _this.curriculum.country; }).name;
        this.startDate = this.curriculum.startDate.substr(1, 2) + '/' + this.curriculum.startDate.substr(2, 3);
        this.endDate = this.curriculum.endDate.substr(1, 2) + '/' + this.curriculum.endDate.substr(2, 3);
        this.openViewCurriculumModal();
    };
    OrganisationUpdateComponent.prototype.openViewCurriculumModal = function () {
        this.pluginService.showModalWindow("#viewCurriculumDetailEditModal");
    };
    OrganisationUpdateComponent.prototype.closeViewCurriculum = function () {
        this.pluginService.hideModalWindow("#viewCurriculumDetailEditModal");
    };
    OrganisationUpdateComponent.prototype.mapOrganisationData = function () {
        var curriculumNames = [], curriculumIds = [], regNumber, addressLine1, addressLine2, city, examTypes = [], updatedExamTypes = [];
        for (var i = 0; i < this.curriculums.length; i++) {
            if (this.curriculums[i].checked === true) {
                curriculumIds.push(this.curriculums[i].id);
                curriculumNames.push(this.curriculums[i].acronym);
            }
        }
        this.curriculumNames = curriculumNames.toString();
        regNumber = this.organisationInfoForm.get('registrationNumber').value;
        if (regNumber === null || regNumber === "") {
            regNumber = null;
        }
        addressLine1 = this.trimValue(this.organisationInfoForm.get('addressLineOne').value);
        if (addressLine1 === null || addressLine1 === "") {
            addressLine1 = null;
        }
        addressLine2 = this.trimValue(this.organisationInfoForm.get('addressLineTwo').value);
        if (addressLine2 === null || addressLine2 === "") {
            addressLine2 = null;
        }
        if (this.selectedCity === null || this.selectedCity === "") {
            city = null;
        }
        else {
            city = this.selectedCity.name;
        }
        for (var j = 0; j < this.updatedExamTypesList.value.length; j++) {
            examTypes.push(this.updatedExamTypesList.value[j].examType);
        }
        updatedExamTypes = this.examTypesList.concat(examTypes);
        this.examTypes = updatedExamTypes.toString();
        this.organisation = {
            id: this.organisationId,
            organisationType: this.selectedOrganisationType.tag,
            examType: this.examTypes,
            curriculumIds: curriculumIds.toString(),
            name: this.trimValue(this.organisationInfoForm.get('organisationName').value),
            registrationNumber: regNumber,
            addressLine1: addressLine1,
            addressLine2: addressLine2,
            country: this.selectedCountry.name,
            state: this.selectedState.name,
            city: city,
            pincode: this.organisationInfoForm.get('pincode').value,
            primaryContactName: this.trimValue(this.contactInfoForm.get('contactName').value),
            primaryContactDesignation: this.trimValue(this.contactInfoForm.get('designation').value),
            primaryContactPhone: this.contactInfoForm.get('phoneNumber').value,
            primaryContactMail: this.trimValue(this.contactInfoForm.get('emailId').value),
        };
    };
    OrganisationUpdateComponent.prototype.updateOrganisation = function () {
        this.subscribeToSaveResponse(this.organisationService.updateOrganisation(this.organisation));
    };
    OrganisationUpdateComponent.prototype.subscribeToSaveResponse = function (resp) {
        var _this = this;
        resp.subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res); });
    };
    OrganisationUpdateComponent.prototype.onSaveSuccess = function (res) {
        this.pluginService.alertMessage("Organisation updated successfully", "success");
        this.previousPage();
    };
    OrganisationUpdateComponent.prototype.onSaveError = function (res) {
        this.pluginService.alertMessage("Could not update organisation contact admin", "error");
    };
    OrganisationUpdateComponent.prototype.previousPage = function () {
        this._router.navigateByUrl('/organisation');
    };
    OrganisationUpdateComponent.prototype.onBack = function () {
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
                localObj.previousPage();
                localObj.pluginService.sideMenuToggle();
            }
        });
    };
    OrganisationUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./organisation-update.component.html */ "./src/app/organisation/organisation-update.component.html"),
            providers: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
            _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_7__["CurriculumService"],
            _organisation_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"],
            _shared_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], OrganisationUpdateComponent);
    return OrganisationUpdateComponent;
}());



/***/ }),

/***/ "./src/app/organisation/organisation.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/organisation/organisation.module.ts ***!
  \*****************************************************/
/*! exports provided: OrganisationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationModule", function() { return OrganisationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _organisation_manage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./organisation-manage.component */ "./src/app/organisation/organisation-manage.component.ts");
/* harmony import */ var _organisation_sub_school_organisation_sub_school_manage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../organisation-sub-school/organisation-sub-school-manage.component */ "./src/app/organisation-sub-school/organisation-sub-school-manage.component.ts");
/* harmony import */ var _organisation_route__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./organisation.route */ "./src/app/organisation/organisation.route.ts");
/* harmony import */ var _organisation_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./organisation-details.component */ "./src/app/organisation/organisation-details.component.ts");
/* harmony import */ var _organisation_sub_school_organisation_sub_school_update_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../organisation-sub-school/organisation-sub-school-update.component */ "./src/app/organisation-sub-school/organisation-sub-school-update.component.ts");
/* harmony import */ var _organisation_delete_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./organisation-delete.component */ "./src/app/organisation/organisation-delete.component.ts");
/* harmony import */ var _organisation_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./organisation-create.component */ "./src/app/organisation/organisation-create.component.ts");
/* harmony import */ var _organisation_update_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./organisation-update.component */ "./src/app/organisation/organisation-update.component.ts");
/* harmony import */ var _organisation_sub_school_organisation_sub_school_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../organisation-sub-school/organisation-sub-school-create.component */ "./src/app/organisation-sub-school/organisation-sub-school-create.component.ts");
/* harmony import */ var _organisation_sub_school_organisation_sub_school_delete_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../organisation-sub-school/organisation-sub-school-delete.component */ "./src/app/organisation-sub-school/organisation-sub-school-delete.component.ts");
/* harmony import */ var _organisation_sub_school_organisation_sub_school_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../organisation-sub-school/organisation-sub-school-details.component */ "./src/app/organisation-sub-school/organisation-sub-school-details.component.ts");
/* harmony import */ var _organisation_user_organisation_user_manage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../organisation-user/organisation-user-manage.component */ "./src/app/organisation-user/organisation-user-manage.component.ts");
/* harmony import */ var _organisation_user_organisation_user_create_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../organisation-user/organisation-user-create.component */ "./src/app/organisation-user/organisation-user-create.component.ts");
/* harmony import */ var _organisation_user_organisation_user_delete_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../organisation-user/organisation-user-delete.component */ "./src/app/organisation-user/organisation-user-delete.component.ts");
/* harmony import */ var _organisation_user_organisation_user_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../organisation-user/organisation-user-details.component */ "./src/app/organisation-user/organisation-user-details.component.ts");
/* harmony import */ var _organisation_user_organisation_user_update_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../organisation-user/organisation-user-update.component */ "./src/app/organisation-user/organisation-user-update.component.ts");
/* harmony import */ var _organisation_user_organisation_user_update_password_reset_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../organisation-user/organisation-user-update-password-reset.component */ "./src/app/organisation-user/organisation-user-update-password-reset.component.ts");
/* harmony import */ var _organisation_user_organisation_user_update_unlock_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../organisation-user/organisation-user-update-unlock.component */ "./src/app/organisation-user/organisation-user-update-unlock.component.ts");
/* harmony import */ var _organisation_sub_school_user_organisation_school_user_manage_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-manage.component */ "./src/app/organisation-sub-school-user/organisation-school-user-manage.component.ts");
/* harmony import */ var _organisation_sub_school_user_organisation_school_user_details_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-details.component */ "./src/app/organisation-sub-school-user/organisation-school-user-details.component.ts");
/* harmony import */ var _organisation_sub_school_user_organisation_school_user_update_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-update.component */ "./src/app/organisation-sub-school-user/organisation-school-user-update.component.ts");
/* harmony import */ var _organisation_sub_school_user_organisation_school_user_delete_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-delete.component */ "./src/app/organisation-sub-school-user/organisation-school-user-delete.component.ts");
/* harmony import */ var _organisation_sub_school_user_organisation_school_user_update_password_reset_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-update-password-reset.component */ "./src/app/organisation-sub-school-user/organisation-school-user-update-password-reset.component.ts");
/* harmony import */ var _organisation_sub_school_user_organisation_school_user_update_unlock_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-update-unlock.component */ "./src/app/organisation-sub-school-user/organisation-school-user-update-unlock.component.ts");
/* harmony import */ var _organisation_sub_school_user_organisation_school_user_create_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-create.component */ "./src/app/organisation-sub-school-user/organisation-school-user-create.component.ts");
/* harmony import */ var _student_promotions_student_promotions_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../student-promotions/student-promotions.component */ "./src/app/student-promotions/student-promotions.component.ts");


































var OrganisationModule = /** @class */ (function () {
    function OrganisationModule() {
    }
    OrganisationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_organisation_route__WEBPACK_IMPORTED_MODULE_10__["organisationRoute"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["NgJhipsterModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ],
            declarations: [
                _organisation_manage_component__WEBPACK_IMPORTED_MODULE_8__["OrganisationManageComponent"],
                _organisation_create_component__WEBPACK_IMPORTED_MODULE_14__["OrganisationCreateComponent"],
                _organisation_delete_component__WEBPACK_IMPORTED_MODULE_13__["OrganisationDeleteComponent"],
                _organisation_details_component__WEBPACK_IMPORTED_MODULE_11__["OrganisationDetailsComponent"],
                _organisation_update_component__WEBPACK_IMPORTED_MODULE_15__["OrganisationUpdateComponent"],
                _organisation_sub_school_organisation_sub_school_create_component__WEBPACK_IMPORTED_MODULE_16__["OrganisationSubSchoolCreateComponent"],
                _organisation_sub_school_organisation_sub_school_manage_component__WEBPACK_IMPORTED_MODULE_9__["OrganisationSubSchoolManageComponent"],
                _organisation_sub_school_organisation_sub_school_delete_component__WEBPACK_IMPORTED_MODULE_17__["OrganisationSubSchoolDeleteComponent"],
                _organisation_sub_school_organisation_sub_school_details_component__WEBPACK_IMPORTED_MODULE_18__["OrganisationSubSchoolDetailsComponent"],
                _organisation_sub_school_organisation_sub_school_update_component__WEBPACK_IMPORTED_MODULE_12__["OrganisationSubSchoolUpdateComponent"],
                _organisation_user_organisation_user_manage_component__WEBPACK_IMPORTED_MODULE_19__["OrganisationUserManageComponent"],
                _organisation_user_organisation_user_create_component__WEBPACK_IMPORTED_MODULE_20__["OrganisationUserCreateComponent"],
                _organisation_user_organisation_user_details_component__WEBPACK_IMPORTED_MODULE_22__["OrganisationUserDetailsComponent"],
                _organisation_user_organisation_user_update_component__WEBPACK_IMPORTED_MODULE_23__["OrganisationUserUpdateComponent"],
                _organisation_user_organisation_user_delete_component__WEBPACK_IMPORTED_MODULE_21__["OrganisationUserDeleteComponent"],
                _organisation_user_organisation_user_update_password_reset_component__WEBPACK_IMPORTED_MODULE_24__["OrganisationUserUpdatePasswordComponent"],
                _organisation_user_organisation_user_update_unlock_component__WEBPACK_IMPORTED_MODULE_25__["OrganisationUserUpdateUnlockComponent"],
                _organisation_sub_school_user_organisation_school_user_manage_component__WEBPACK_IMPORTED_MODULE_26__["OrganisationSchoolUserManageComponent"],
                _organisation_sub_school_user_organisation_school_user_create_component__WEBPACK_IMPORTED_MODULE_32__["OrganisationSchoolUserCreateComponent"],
                _organisation_sub_school_user_organisation_school_user_details_component__WEBPACK_IMPORTED_MODULE_27__["OrganisationSchoolUserDetailsComponent"],
                _organisation_sub_school_user_organisation_school_user_update_component__WEBPACK_IMPORTED_MODULE_28__["OrganisationSchoolUserUpdateComponent"],
                _organisation_sub_school_user_organisation_school_user_delete_component__WEBPACK_IMPORTED_MODULE_29__["OrganisationSchoolUserDeleteComponent"],
                _organisation_sub_school_user_organisation_school_user_update_password_reset_component__WEBPACK_IMPORTED_MODULE_30__["OrganisationSchoolUserUpdatePasswordComponent"],
                _organisation_sub_school_user_organisation_school_user_update_unlock_component__WEBPACK_IMPORTED_MODULE_31__["OrganisationSchoolUserUpdateUnlockComponent"],
                _student_promotions_student_promotions_component__WEBPACK_IMPORTED_MODULE_33__["StudentPromotionComponent"]
            ],
            entryComponents: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], OrganisationModule);
    return OrganisationModule;
}());



/***/ }),

/***/ "./src/app/organisation/organisation.route.ts":
/*!****************************************************!*\
  !*** ./src/app/organisation/organisation.route.ts ***!
  \****************************************************/
/*! exports provided: OrganisationResolve, organisationRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationResolve", function() { return OrganisationResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "organisationRoute", function() { return organisationRoute; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _organisation_manage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-manage.component */ "./src/app/organisation/organisation-manage.component.ts");
/* harmony import */ var _organisation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./organisation.service */ "./src/app/organisation/organisation.service.ts");
/* harmony import */ var _shared_model_common_organisation_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/model/common/organisation.model */ "./src/app/shared/model/common/organisation.model.ts");
/* harmony import */ var _organisation_sub_school_organisation_sub_school_manage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organisation-sub-school/organisation-sub-school-manage.component */ "./src/app/organisation-sub-school/organisation-sub-school-manage.component.ts");
/* harmony import */ var _organisation_delete_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./organisation-delete.component */ "./src/app/organisation/organisation-delete.component.ts");
/* harmony import */ var _organisation_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./organisation-create.component */ "./src/app/organisation/organisation-create.component.ts");
/* harmony import */ var _organisation_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./organisation-details.component */ "./src/app/organisation/organisation-details.component.ts");
/* harmony import */ var _organisation_update_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./organisation-update.component */ "./src/app/organisation/organisation-update.component.ts");
/* harmony import */ var _organisation_sub_school_organisation_sub_school_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../organisation-sub-school/organisation-sub-school-create.component */ "./src/app/organisation-sub-school/organisation-sub-school-create.component.ts");
/* harmony import */ var _organisation_sub_school_organisation_sub_school_delete_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../organisation-sub-school/organisation-sub-school-delete.component */ "./src/app/organisation-sub-school/organisation-sub-school-delete.component.ts");
/* harmony import */ var _organisation_sub_school_organisation_sub_school_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../organisation-sub-school/organisation-sub-school-details.component */ "./src/app/organisation-sub-school/organisation-sub-school-details.component.ts");
/* harmony import */ var _organisation_sub_school_organisation_sub_school_update_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../organisation-sub-school/organisation-sub-school-update.component */ "./src/app/organisation-sub-school/organisation-sub-school-update.component.ts");
/* harmony import */ var _organisation_user_organisation_user_manage_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../organisation-user/organisation-user-manage.component */ "./src/app/organisation-user/organisation-user-manage.component.ts");
/* harmony import */ var _organisation_user_organisation_user_create_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../organisation-user/organisation-user-create.component */ "./src/app/organisation-user/organisation-user-create.component.ts");
/* harmony import */ var _organisation_user_organisation_user_delete_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../organisation-user/organisation-user-delete.component */ "./src/app/organisation-user/organisation-user-delete.component.ts");
/* harmony import */ var _organisation_user_organisation_user_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../organisation-user/organisation-user-details.component */ "./src/app/organisation-user/organisation-user-details.component.ts");
/* harmony import */ var _organisation_user_organisation_user_update_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../organisation-user/organisation-user-update.component */ "./src/app/organisation-user/organisation-user-update.component.ts");
/* harmony import */ var _organisation_sub_school_user_organisation_school_user_manage_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-manage.component */ "./src/app/organisation-sub-school-user/organisation-school-user-manage.component.ts");
/* harmony import */ var _organisation_sub_school_user_organisation_school_user_create_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-create.component */ "./src/app/organisation-sub-school-user/organisation-school-user-create.component.ts");
/* harmony import */ var _organisation_sub_school_user_organisation_school_user_update_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-update.component */ "./src/app/organisation-sub-school-user/organisation-school-user-update.component.ts");
/* harmony import */ var _organisation_sub_school_user_organisation_school_user_details_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-details.component */ "./src/app/organisation-sub-school-user/organisation-school-user-details.component.ts");
/* harmony import */ var _organisation_sub_school_user_organisation_school_user_delete_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-delete.component */ "./src/app/organisation-sub-school-user/organisation-school-user-delete.component.ts");
/* harmony import */ var _student_promotions_student_promotions_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../student-promotions/student-promotions.component */ "./src/app/student-promotions/student-promotions.component.ts");




























var OrganisationResolve = /** @class */ (function () {
    function OrganisationResolve(service) {
        this.service = service;
    }
    OrganisationResolve.prototype.resolve = function (route, state) {
        var id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.getOrganisationByOrganisationId(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (response) { return response.ok; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (organisation) { return organisation.body; }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _shared_model_common_organisation_model__WEBPACK_IMPORTED_MODULE_7__["Organisation"]());
    };
    OrganisationResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_organisation_service__WEBPACK_IMPORTED_MODULE_6__["OrganisationService"]])
    ], OrganisationResolve);
    return OrganisationResolve;
}());

var organisationRoute = [
    {
        path: '',
        component: _organisation_manage_component__WEBPACK_IMPORTED_MODULE_5__["OrganisationManageComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Manage organisations'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: 'create',
        component: _organisation_create_component__WEBPACK_IMPORTED_MODULE_10__["OrganisationCreateComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Create organisation'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/view',
        component: _organisation_details_component__WEBPACK_IMPORTED_MODULE_11__["OrganisationDetailsComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'View organisation'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        },
    },
    {
        path: ':id/edit',
        component: _organisation_update_component__WEBPACK_IMPORTED_MODULE_12__["OrganisationUpdateComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Edit organisation'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        },
    },
    {
        path: ':id/delete',
        component: _organisation_delete_component__WEBPACK_IMPORTED_MODULE_9__["OrganisationDeleteComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Delete organisation'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        },
    },
    {
        path: ':id/school',
        component: _organisation_sub_school_organisation_sub_school_manage_component__WEBPACK_IMPORTED_MODULE_8__["OrganisationSubSchoolManageComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Manage organisations subsidiary school'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        }
    },
    {
        path: ':id/school/create',
        component: _organisation_sub_school_organisation_sub_school_create_component__WEBPACK_IMPORTED_MODULE_13__["OrganisationSubSchoolCreateComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Create organisations subsidiary school'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        }
    },
    {
        path: ':id/school/:schoolId/delete',
        component: _organisation_sub_school_organisation_sub_school_delete_component__WEBPACK_IMPORTED_MODULE_14__["OrganisationSubSchoolDeleteComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Delete organisation subsidiary school'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/school/:schoolId/view',
        component: _organisation_sub_school_organisation_sub_school_details_component__WEBPACK_IMPORTED_MODULE_15__["OrganisationSubSchoolDetailsComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'View organisation subsidiary school'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/school/:schoolId/edit',
        component: _organisation_sub_school_organisation_sub_school_update_component__WEBPACK_IMPORTED_MODULE_16__["OrganisationSubSchoolUpdateComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'View organisation subsidiary school'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/school/:schoolId/school-user',
        component: _organisation_sub_school_user_organisation_school_user_manage_component__WEBPACK_IMPORTED_MODULE_22__["OrganisationSchoolUserManageComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Manage school users'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        }
    },
    {
        path: ':id/school/:schoolId/school-user/create',
        component: _organisation_sub_school_user_organisation_school_user_create_component__WEBPACK_IMPORTED_MODULE_23__["OrganisationSchoolUserCreateComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Create school users'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        }
    },
    {
        path: ':id/school/:schoolId/school-user/:schoolUserId/edit',
        component: _organisation_sub_school_user_organisation_school_user_update_component__WEBPACK_IMPORTED_MODULE_24__["OrganisationSchoolUserUpdateComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Edit school user'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        }
    },
    {
        path: ':id/school/:schoolId/school-user/:schoolUserId/view',
        component: _organisation_sub_school_user_organisation_school_user_details_component__WEBPACK_IMPORTED_MODULE_25__["OrganisationSchoolUserDetailsComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'View school user'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        }
    },
    {
        path: ':id/school/:schoolId/school-user/:login/delete',
        component: _organisation_sub_school_user_organisation_school_user_delete_component__WEBPACK_IMPORTED_MODULE_26__["OrganisationSchoolUserDeleteComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Delete school user'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        }
    },
    {
        path: ':id/organisation-user',
        component: _organisation_user_organisation_user_manage_component__WEBPACK_IMPORTED_MODULE_17__["OrganisationUserManageComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Manage organisation users'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        }
    },
    {
        path: ':id/organisation-user/create',
        component: _organisation_user_organisation_user_create_component__WEBPACK_IMPORTED_MODULE_18__["OrganisationUserCreateComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Create organisation user'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        }
    },
    {
        path: ':id/organisation-user/:login/delete',
        component: _organisation_user_organisation_user_delete_component__WEBPACK_IMPORTED_MODULE_19__["OrganisationUserDeleteComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Delete organisation user'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/organisation-user/:orgUserId/view',
        component: _organisation_user_organisation_user_details_component__WEBPACK_IMPORTED_MODULE_20__["OrganisationUserDetailsComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'View organisation user'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/organisation-user/:orgUserId/edit',
        component: _organisation_user_organisation_user_update_component__WEBPACK_IMPORTED_MODULE_21__["OrganisationUserUpdateComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Edit organisation user'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: "student-promotions",
        component: _student_promotions_student_promotions_component__WEBPACK_IMPORTED_MODULE_27__["StudentPromotionComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Student promotions'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    }
];


/***/ }),

/***/ "./src/app/organisation/organisation.service.ts":
/*!******************************************************!*\
  !*** ./src/app/organisation/organisation.service.ts ***!
  \******************************************************/
/*! exports provided: OrganisationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationService", function() { return OrganisationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");





var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');
var OrganisationService = /** @class */ (function () {
    function OrganisationService(http) {
        this.http = http;
        this.organisationResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/common/api/organisations';
        this.curriculumResourceUrlSearch = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/curricula/search';
    }
    OrganisationService.prototype.createOrganisation = function (organisation) {
        return this.http.post(this.organisationResourceUrl, organisation, { headers: headers, observe: 'response' });
    };
    OrganisationService.prototype.updateOrganisation = function (organisation) {
        return this.http.put(this.organisationResourceUrl, organisation, { observe: 'response' });
    };
    OrganisationService.prototype.getOrganisationByOrganisationId = function (id) {
        return this.http.get(this.organisationResourceUrl + "/" + id, { observe: 'response' });
    };
    OrganisationService.prototype.getOrganisations = function (req) {
        var options = Object(_shared__WEBPACK_IMPORTED_MODULE_4__["createRequestOption"])(req);
        return this.http.get(this.organisationResourceUrl, { params: options, observe: 'response' });
    };
    OrganisationService.prototype.deleteOrganisation = function (id) {
        return this.http.delete(this.organisationResourceUrl + "/" + id, { observe: 'response' });
    };
    OrganisationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OrganisationService);
    return OrganisationService;
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

/***/ "./src/app/shared/model/common/organisation.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/model/common/organisation.model.ts ***!
  \***********************************************************/
/*! exports provided: Organisation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Organisation", function() { return Organisation; });
var Organisation = /** @class */ (function () {
    function Organisation(addressLine1, addressLine2, city, country, curriculumIds, district, extraCurriculumId, hasExtraCurriculum, id, name, phone1, phone2, pincode, primaryContactDesignation, primaryContactName, primaryContactPhone, primaryContactMail, registrationNumber, secondaryContactDesignation, secondaryContactName, secondaryContactPhone, secondaryContactMail, state, gender, organisationType, examType) {
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.city = city;
        this.country = country;
        this.curriculumIds = curriculumIds;
        this.district = district;
        this.extraCurriculumId = extraCurriculumId;
        this.hasExtraCurriculum = hasExtraCurriculum;
        this.id = id;
        this.name = name;
        this.phone1 = phone1;
        this.phone2 = phone2;
        this.pincode = pincode;
        this.primaryContactDesignation = primaryContactDesignation;
        this.primaryContactName = primaryContactName;
        this.primaryContactPhone = primaryContactPhone;
        this.primaryContactMail = primaryContactMail;
        this.registrationNumber = registrationNumber;
        this.secondaryContactDesignation = secondaryContactDesignation;
        this.secondaryContactName = secondaryContactName;
        this.secondaryContactPhone = secondaryContactPhone;
        this.secondaryContactMail = secondaryContactMail;
        this.state = state;
        this.gender = gender;
        this.organisationType = organisationType;
        this.examType = examType;
    }
    return Organisation;
}());



/***/ }),

/***/ "./src/app/student-promotions/student-promotions.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/student-promotions/student-promotions.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3 alert-warning w-100\">\n  Coming soon..!\n</div>"

/***/ }),

/***/ "./src/app/student-promotions/student-promotions.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/student-promotions/student-promotions.component.ts ***!
  \********************************************************************/
/*! exports provided: StudentPromotionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentPromotionComponent", function() { return StudentPromotionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _student_promotions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-promotions.service */ "./src/app/student-promotions/student-promotions.service.ts");



var StudentPromotionComponent = /** @class */ (function () {
    function StudentPromotionComponent() {
    }
    StudentPromotionComponent.prototype.ngOnInit = function () { };
    StudentPromotionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./student-promotions.component.html */ "./src/app/student-promotions/student-promotions.component.html"),
            providers: [_student_promotions_service__WEBPACK_IMPORTED_MODULE_2__["StudentPromotionsService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StudentPromotionComponent);
    return StudentPromotionComponent;
}());



/***/ }),

/***/ "./src/app/student-promotions/student-promotions.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/student-promotions/student-promotions.service.ts ***!
  \******************************************************************/
/*! exports provided: StudentPromotionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentPromotionsService", function() { return StudentPromotionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');
var StudentPromotionsService = /** @class */ (function () {
    function StudentPromotionsService(http) {
        this.http = http;
        this.userResourceUrlSearch = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/common/api/users';
    }
    StudentPromotionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StudentPromotionsService);
    return StudentPromotionsService;
}());



/***/ })

}]);
//# sourceMappingURL=organisation-organisation-module.js.map