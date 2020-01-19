(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subject-subject-module"],{

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

/***/ "./src/app/shared/model/content/subject.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/model/content/subject.model.ts ***!
  \*******************************************************/
/*! exports provided: Subject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return Subject; });
var Subject = /** @class */ (function () {
    function Subject(data, icon, id, parent, text, type, state, a_attr, li_attr, status, isExtraCurriculum, generalTopicId) {
        this.data = data;
        this.icon = icon;
        this.id = id;
        this.parent = parent;
        this.text = text;
        this.type = type;
        this.state = state;
        this.a_attr = a_attr;
        this.li_attr = li_attr;
        this.status = status;
        this.isExtraCurriculum = isExtraCurriculum;
        this.generalTopicId = generalTopicId;
    }
    return Subject;
}());



/***/ }),

/***/ "./src/app/subject/subject-create.component.html":
/*!*******************************************************!*\
  !*** ./src/app/subject/subject-create.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 my-3 justify-content-between d-flex\">\n  <div class=\"btn btn-danger\" (click)=\"onBack()\">\n    <i class=\"fa fa-chevron-left mr-2\"></i> Back\n  </div>\n</div>\n\n<div class=\"row-flex stepper\">\n  <div class=\"nav flex-column nav-pills stepper-left\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\n    <a class=\"nav-link active\" id=\"createSubject-tab\" data-toggle=\"pill\" href=\"#createSubject\" role=\"tab\"\n      aria-controls=\"createSubject\" aria-selected=\"false\">\n      <span class=\"index-round\">\n        Step 1\n      </span>\n      <span class=\"step-label\">\n        Create subject\n      </span>\n    </a>\n    <a class=\"nav-link disabled\" id=\"creareSyllabus-tab\" data-toggle=\"pill\" href=\"#creareSyllabus\" role=\"tab\"\n      aria-controls=\"creareSyllabus\" aria-selected=\"false\">\n      <span class=\"index-round\">\n        Step 2\n      </span>\n      <span class=\"step-label\">\n        Create syllabus\n      </span>\n    </a>\n    <a class=\"nav-link disabled\" id=\"confirmation-tab\" data-toggle=\"pill\" href=\"#confirmation\" role=\"tab\"\n      aria-controls=\"confirmation\" aria-selected=\"false\">\n      <span class=\"index-round\">\n        Step 3\n      </span>\n      <span class=\"step-label\">\n        Summary\n      </span>\n    </a>\n  </div>\n  <div class=\"stepper-right tab-content p-3\" id=\"v-pills-tabContent\">\n    <div class=\"tab-pane fade show active\" id=\"createSubject\" role=\"tabpanel\" aria-labelledby=\"createSubject-tab\">\n      <form [formGroup]=\"subjectForm\">\n        <div class=\"form-group mb-2 col-xxl-6\">\n          <label for=\"curriculum\" class=\" col-form-label\">Curriculum</label>\n          <ng-select [items]=\"curriculumList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"acronym\"\n            placeholder=\"Select curriculum\" formControlName=\"curriculum\" [(ngModel)]=\"selectedCurriculum\"\n            (change)=\"onCurriculumChange()\">\n          </ng-select>\n        </div>\n        <div class=\"form-group mb-2 col-xxl-6\" *ngIf=\"selectedCurriculum\">\n          <label for=\"grade\" class=\" col-form-label\">Grade</label>\n          <ng-select [items]=\"gradeList\" formControlName=\"grade\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n            placeholder=\"Select grade\" [(ngModel)]=\"selectedGrade\">\n          </ng-select>\n        </div>\n        <div class=\"form-group mb-2 col-xxl-6\">\n          <label for=\"subjectName\" class=\"col-form-label\">Subject name</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Enter subject name (min length: 3, max length: 50)\"\n            inputRestriction=\"alphabetsWithSpace\" formControlName=\"subjectName\" maxlength=\"50\" minlength=\"3\"\n            [ngClass]=\"{ 'is-invalid': submitted && formControl.subjectName.errors }\">\n          <div class=\"text-muted font-15 my-2\">Allowed\n            characters - Alphabets</div>\n        </div>\n        <div class=\"form-group mb-2 col-xxl-6\">\n          <label for=\"description\" class=\" col-form-label\">Description\n            <span class=\"text-muted\">(Optional)</span></label>\n          <textarea class=\"form-control description-form\"\n            placeholder=\"Enter description  (min length: 3, max length: 250)\" formControlName=\"subjectDescription\"\n            [ngClass]=\"{ 'is-invalid': submitted && formControl.subjectDescription.errors }\" maxlength=\"250\"\n            minlength=\"3\"></textarea>\n          <div class=\"text-muted font-15 my-2\">\n            Allowed characters - Alphabets, Numbers and\n            Special characters\n          </div>\n        </div>\n        <div class=\"form-group mb-2 col-xxl-6 d-flex justify-content-start\">\n          <div class=\"checkbox mr-2\">\n            <input type=\"checkbox\" id=\"isLanguage\" formControlName=\"isLanguage\">\n            <label class=\"mt-2 p-3\" for=\"isLanguage\"></label>\n          </div>\n          <label class=\"mt-2\" for=\"isLanguage\">Is language ?<span class=\"text-muted\">(Optional)</span></label>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xxl-12 d-flex justify-content-end\">\n            <button class=\"btn btn-success next-step\" [disabled]=\"validateSubjectForm\" (click)=\"loadSubjectTree()\">\n              Next\n              <i class=\"fa fa-arrow-right ml-2\"></i>\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n\n    <div class=\"tab-pane fade\" id=\"creareSyllabus\" role=\"tabpanel\" aria-labelledby=\"creareSyllabus-tab\">\n      <div class=\"row\">\n        <div class=\"col-xxl-4 p-2\">\n          <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"updatedJSONTree.length > 1\">\n            <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\n              <i class=\"fa fa-clone mr-2\"></i>\n              <span *ngIf=\"enableExpandNode === false\">\n                Expand all\n              </span>\n              <span *ngIf=\"enableExpandNode === true\">\n                Collapse all\n              </span>\n            </div>\n          </div>\n          <div id=\"buildTree\"></div>\n        </div>\n        <div class=\"col-xxl-8\">\n          <div class=\"w-100 d-flex justify-content-end align-self-start mb-2\" *ngIf=\"enableNodeOperation\">\n            <div class=\"btn btn-primary mr-2\" *ngIf=\"nodeType !== 'lesson'\" (click)=\"createNode()\">\n              <i class=\"fa fa-plus-circle mr-2\"></i>Add new\n              unit / lesson\n            </div>\n            <div class=\"btn btn-success mr-2\" (click)=\"editNode()\" *ngIf=\"enableEditNodeOperation\">\n              <i class=\"fa fa-edit mr-2\"></i>Edit {{nodeType}}\n            </div>\n            <div class=\"btn btn-danger\" (click)=\"deleteNode()\" *ngIf=\"nodeType !== 'root'\">\n              <i class=\"fa fa-trash mr-2\"></i> Delete {{nodeType}}\n            </div>\n          </div>\n          <div class=\"w-100 p-4\">\n            <div *ngIf=\"nodeType === 'unit'\">\n              <p><b>Unit name :</b> {{nodeTitle}} </p>\n              <p><b>Unit description :</b> {{nodeDescription}}</p>\n            </div>\n            <div *ngIf=\"nodeType === 'lesson'\">\n              <p><b>Lesson name :</b> {{nodeTitle}}</p>\n              <p><b>Lesson objective :</b> {{nodeDescription}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"my-2 rounded p-3 border-danger\" *ngIf=\"enableInstruction\">\n        <p class=\"text-danger\"><b>NOTE</b></p>\n        <p class=\"text-primary\">\n          <i class=\"fa fa-check text-danger mr-2\"></i> Select a subject node and do your actions.\n        </p>\n        <p class=\"text-primary\">\n          <i class=\"fa fa-check mr-2 text-danger\"></i> Add atleast one unit or one lesson for general subject\n          creation.\n        </p>\n        <p class=\"text-primary\">\n          <i class=\"fa fa-check mr-2 text-danger\"></i> Only one root node is allowed, you can't drag and drop on top of\n          root node\n        </p>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-xxl-12 d-flex justify-content-end\">\n          <div class=\"btn btn-danger prev-step\">\n            <i class=\"fa fa-arrow-left mr-2\"></i> Previous\n          </div>\n          <button class=\"btn btn-success ml-2 next-step\" [disabled]=\"validateNode\">\n            Next\n            <i class=\"fa fa-arrow-right ml-2\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"tab-pane fade\" id=\"confirmation\" role=\"tabpanel\" aria-labelledby=\"confirmation-tab\">\n\n      <div class=\"card-body\">\n        <div class=\"row mb-3\">\n          <div class=\"col-xxl-6\">\n            <h5>Before changes</h5>\n            <div id=\"beforeChangeTree\"></div>\n          </div>\n          <div class=\"col-xxl-6\">\n            <h5>After changes</h5>\n            <div id=\"afterChangeTree\"></div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-xxl-12 d-flex justify-content-end\">\n          <span class=\"btn btn-danger mr-2 prev-step\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>\n            Previous\n          </span>\n          <div class=\"btn btn-info mr-2\" (click)=\"saveAsDraft()\">\n            <i class=\"fa fa-save mr-2\"></i>\n            Save as draft\n          </div>\n          <div class=\"btn btn-success\" (click)=\"saveAndPublish()\">\n            <i class=\"fe fe-file-plus mr-2\"></i>\n            Save and publish\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"subjectModal\">\n  <div class=\"modal-dialog modal-full-height modal-right modal-notify\" role=\"document\">\n    <div class=\"modal-content\" [formGroup]=\"syllabusForm\">\n      <div class=\"modal-header bg-warning d-flex align-items-center\">\n        <h5 class=\"modal-title text-white\">\n          {{modalTitleName}} unit / lesson\n        </h5>\n        <div class=\"close btn btn-xl\" (click)=\"closeWithOutSavingNode()\">\n          <i class=\"fa fa-times\"></i>\n        </div>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group mb-2\">\n          <label class=\"col-form-label\">Type\n          </label>\n          <ng-select [items]=\"nodeTypes\" [disabled]=\"disableDropdown\" [ngModelOptions]=\"{standalone: true}\"\n            bindLabel=\"name\" placeholder=\"Select node type\" [(ngModel)]=\"selectedNodeType\" (change)=\"onNodeTypeChange()\"\n            [searchable]=\"false\">\n          </ng-select>\n        </div>\n        <div *ngIf=\"nodeType === 'unit'\">\n          <div class=\"form-group mb-2\">\n            <label class=\"col-form-label\">Unit\n              name\n            </label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"unitName\"\n              placeholder=\"Enter unit name (minlength: 3 and maxlength: 75)\"\n              inputRestriction=\"alphabetsNumbersWithMinus\" minlength=\"3\" maxlength=\"75\"\n              [ngClass]=\"{ 'is-invalid': validateNodeForm && modalFormControl.unitName.errors }\" />\n            <div class=\"text-muted font-15 my-2\">\n              Allowed characters - Alphabets, Numbers and Special character (-)\n            </div>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"col-form-label\">Unit\n              description\n            </label>\n            <textarea class=\"form-control description-form\"\n              placeholder=\"Enter unit description (minlength: 3 and maxlength: 250)\" minlength=\"3\" maxlength=\"250\"\n              [ngClass]=\"{ 'is-invalid': validateNodeForm && modalFormControl.unitDescription.errors }\"\n              formControlName=\"unitDescription\"></textarea>\n            <div class=\"text-muted font-15 my-2\">\n              Allowed characters - Alphabets, Numbers and Special characters\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"nodeType === 'lesson'\">\n          <div class=\"form-group mb-2\">\n            <label class=\"col-form-label\">Lesson\n              name\n            </label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"lessonName\"\n              placeholder=\"Enter lesson name (minlength: 3 and maxlength: 75)\"\n              inputRestriction=\"alphabetsNumbersWithMinus\" minlength=\"3\" maxlength=\"75\"\n              [ngClass]=\"{ 'is-invalid': validateNodeForm && modalFormControl.lessonName.errors }\" />\n            <div class=\"text-muted font-15 my-2\">\n              Allowed characters - Alphabets, Numbers and Special character (-)\n            </div>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"col-form-label\">Lesson\n              objective\n            </label>\n            <textarea class=\"form-control description-form\"\n              placeholder=\"Enter lesson objective (minlength: 3 and maxlength: 250)\" minlength=\"3\" maxlength=\"250\"\n              [ngClass]=\"{ 'is-invalid': validateNodeForm && modalFormControl.lessonObjective.errors }\"\n              formControlName=\"lessonObjective\"></textarea>\n            <div class=\"text-muted font-15 my-2\">\n              Allowed characters - Alphabets, Numbers and Special characters\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\" *ngIf=\"enableModalOperation\">\n        <div class=\"btn btn-danger\" (click)=\"cancelNode()\">\n          <i class=\"fa fa-times mr-2\"></i>\n          Reset\n        </div>\n        <button class=\"btn btn-success\" (click)=\"saveNode()\" [disabled]=\"validateNodeForm\">\n          <i class=\"fa fa-save mr-2\"></i>\n          Save\n        </button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/subject/subject-create.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/subject/subject-create.component.ts ***!
  \*****************************************************/
/*! exports provided: SubjectCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectCreateComponent", function() { return SubjectCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _subject_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subject.service */ "./src/app/subject/subject.service.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../curriculum/curriculum.service */ "./src/app/curriculum/curriculum.service.ts");









var SubjectCreateComponent = /** @class */ (function () {
    function SubjectCreateComponent(router, formBuilder, pluginService, curriculumService, subjectService, activatedRoute, commonService, changeDetectRef) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.curriculumService = curriculumService;
        this.subjectService = subjectService;
        this.activatedRoute = activatedRoute;
        this.commonService = commonService;
        this.changeDetectRef = changeDetectRef;
        this.gradeList = [];
        this.curriculumList = [];
        this.syllabusTree = [];
        this.updatedJSONTree = [];
        this.nodeTypes = [];
        this.validateSubjectForm = true;
        this.validateNodeForm = true;
        this.validateNode = true;
        this.enableExpandNode = false;
    }
    SubjectCreateComponent.prototype.ngOnInit = function () {
        this.pluginService.sideMenuToggle();
        this.createSubjectGroup();
        this.pluginService.stepper();
        this.loadCurriculumList();
        this.getNodeTypeList();
    };
    SubjectCreateComponent.prototype.getNodeTypeList = function () {
        var _this = this;
        this.commonService.getGeneralDataList().subscribe(function (nodeTypeData) {
            _this.nodeTypes = nodeTypeData.subject;
        });
    };
    SubjectCreateComponent.prototype.createSubjectGroup = function () {
        this.subjectForm = this.formBuilder.group({
            curriculum: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            grade: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            subjectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            subjectDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]),
            isLanguage: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false)
        });
        this.syllabusForm = this.formBuilder.group({
            unitName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            unitDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]),
            lessonName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            lessonObjective: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])
        });
    };
    Object.defineProperty(SubjectCreateComponent.prototype, "formControl", {
        get: function () { return this.subjectForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubjectCreateComponent.prototype, "modalFormControl", {
        get: function () { return this.syllabusForm.controls; },
        enumerable: true,
        configurable: true
    });
    SubjectCreateComponent.prototype.onNodeTypeChange = function () {
        var validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(75)];
        if (this.selectedNodeType) {
            this.nodeType = this.selectedNodeType.name;
            if (this.nodeType === 'unit') {
                this.enableModalOperation = true;
                this.syllabusForm.addControl('unitName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', validators));
                this.syllabusForm.addControl('lessonName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', null));
            }
            else if (this.nodeType === 'lesson') {
                this.enableModalOperation = true;
                this.syllabusForm.addControl('lessonName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', validators));
                this.syllabusForm.addControl('unitName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', null));
            }
        }
    };
    SubjectCreateComponent.prototype.onCurriculumChange = function () {
        var gradesApplicableFrom, gradesApplicableTo;
        if (this.selectedCurriculum) {
            gradesApplicableFrom = this.selectedCurriculum.gradesApplicableFrom;
            gradesApplicableTo = this.selectedCurriculum.gradesApplicableTo;
            this.generateGradeList(gradesApplicableFrom, gradesApplicableTo);
            this.selectedGrade = null;
        }
    };
    SubjectCreateComponent.prototype.loadSubjectTree = function () {
        var language;
        if (this.selectedCurriculum && this.selectedGrade) {
            language = this.subjectForm.value.isLanguage;
            this.syllabusTree = [
                {
                    "icon": "fa fa-book",
                    "parent": "#",
                    "text": this.subjectName,
                    "type": "root",
                    "data": {
                        "name": this.subjectName,
                        "description": this.subjectDescription,
                        "curriculumId": this.selectedCurriculum.id,
                        "grade": this.selectedGrade.name,
                        "isLanguage": language,
                        "curriculumSubjectId": 0,
                        "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["CREATED"],
                        "fullName": "",
                        "objective": "",
                        "orderNumber": 0,
                        "status": null
                    },
                }
            ];
            this.pluginService.jsTree("#buildTree", this.syllabusTree, true);
            this.pluginService.jsTree("#beforeChangeTree", this.syllabusTree, false);
            this.enableInstruction = true;
        }
    };
    SubjectCreateComponent.prototype.cancelForm = function () {
        this.subjectForm.reset();
    };
    SubjectCreateComponent.prototype.loadCurriculumList = function () {
        var _this = this;
        this.curriculumService.getCurriculumSearch().subscribe(function (res) { return _this.assignCurriculumList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    SubjectCreateComponent.prototype.assignCurriculumList = function (data) {
        this.curriculumList = [];
        for (var i = 0; i < data.length; i++) {
            this.curriculumList.push(data[i]);
        }
    };
    SubjectCreateComponent.prototype.ngAfterViewInit = function () {
        this.nodeSelectedEvent();
        this.generateJSONTreeOnDragAndDrop();
    };
    SubjectCreateComponent.prototype.generateGradeList = function (min, max) {
        this.gradeList = [];
        for (var i = min; i <= max; i++) {
            this.gradeList.push({
                "id": i,
                "name": i
            });
        }
        return this.gradeList;
    };
    //Reset all form values
    SubjectCreateComponent.prototype.resetFormValues = function () {
        this.syllabusForm.reset();
        this.selectedNodeType = null;
    };
    //Tree selection and change method call
    SubjectCreateComponent.prototype.nodeSelectedEvent = function () {
        var i, j, conceptThis = this;
        $('#buildTree').on('changed.jstree', function (e, data) {
            for (i = 0, j = data.selected.length; i < j; i++) {
                conceptThis.nodeType = data.node.type;
                if (conceptThis.nodeType === "root") {
                    conceptThis.enableNodeOperation = true;
                    conceptThis.enableEditNodeOperation = false;
                }
                else if (conceptThis.nodeType === "unit") {
                    conceptThis.enableEditNodeOperation = true;
                    conceptThis.enableNodeOperation = true;
                    conceptThis.nodeTitle = data.node.data.name;
                    conceptThis.nodeDescription = data.node.data.description;
                    conceptThis.syllabusFormSetValues(conceptThis);
                }
                else if (conceptThis.nodeType === "lesson") {
                    conceptThis.enableNodeOperation = true;
                    conceptThis.enableEditNodeOperation = true;
                    conceptThis.nodeTitle = data.node.data.name;
                    conceptThis.nodeDescription = data.node.data.objective;
                    conceptThis.syllabusFormSetValues(conceptThis);
                }
                else {
                    conceptThis.enableNodeOperation = false;
                    conceptThis.enableEditNodeOperation = false;
                }
            }
        });
    };
    SubjectCreateComponent.prototype.trimValue = function (value) {
        if (value === null || value === undefined) {
            return value;
        }
        else {
            return value.trim();
        }
    };
    SubjectCreateComponent.prototype.validateSubjectFormValues = function () {
        this.subjectName = this.trimValue(this.subjectForm.value.subjectName);
        this.subjectDescription = this.trimValue(this.subjectForm.value.subjectDescription);
        if (this.subjectName === "" || this.subjectName === undefined || this.subjectName === null) {
            this.validateSubjectForm = true;
        }
        else {
            this.validateSubjectForm = false;
        }
        if (this.subjectForm.invalid) {
            this.validateSubjectForm = true;
        }
        if (this.subjectForm.valid) {
            this.validateSubjectForm = false;
        }
    };
    SubjectCreateComponent.prototype.validateUnitAndLessonForm = function () {
        var unitName, lessonName;
        unitName = this.syllabusForm.value.unitName;
        lessonName = this.syllabusForm.value.lessonName;
        if (this.nodeType === 'unit') {
            if (unitName === null || unitName === "") {
                this.validateNodeForm = true;
            }
            else {
                this.validateNodeForm = false;
            }
        }
        else if (this.nodeType === 'lesson') {
            if (lessonName === null || lessonName === "") {
                this.validateNodeForm = true;
            }
            else {
                this.validateNodeForm = false;
            }
        }
    };
    SubjectCreateComponent.prototype.ngAfterViewChecked = function () {
        //Subject Form Validation
        this.validateSubjectFormValues();
        //Unit and lesson form validation
        this.validateUnitAndLessonForm();
        this.changeDetectRef.detectChanges();
    };
    //Unit and lesson details form setvalues method
    SubjectCreateComponent.prototype.syllabusFormSetValues = function (Objectthis) {
        var nodeTypeIndex;
        nodeTypeIndex = this.nodeTypes.findIndex(function (item) { return item.name === Objectthis.nodeType; });
        this.selectedNodeType = this.nodeTypes[nodeTypeIndex];
        if (Objectthis.nodeType === "unit") {
            this.syllabusForm.setValue({
                unitName: Objectthis.nodeTitle,
                unitDescription: Objectthis.nodeDescription,
                lessonName: "",
                lessonObjective: ""
            });
        }
        else {
            this.syllabusForm.setValue({
                unitName: "",
                unitDescription: "",
                lessonName: Objectthis.nodeTitle,
                lessonObjective: Objectthis.nodeDescription,
            });
        }
    };
    SubjectCreateComponent.prototype.openUnitAndLessonModal = function () {
        this.pluginService.showModalWindow("#subjectModal");
    };
    SubjectCreateComponent.prototype.closeUnitAndLessonModal = function () {
        this.pluginService.hideModalWindow("#subjectModal");
    };
    SubjectCreateComponent.prototype.closeWithOutSavingNode = function () {
        var localthisObject = this;
        swal({
            title: "Are you sure to close without saving ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm === true) {
                localthisObject.closeUnitAndLessonModal();
                localthisObject.disableNodeOperations();
            }
        });
    };
    SubjectCreateComponent.prototype.disableNodeOperations = function () {
        this.enableNodeOperation = false;
        this.nodeType = "";
        this.enableNodeOperation = false;
        this.nodeType = "";
        this.resetFormValues();
        var treeCallback = $('#buildTree').jstree(true);
        treeCallback.deselect_all();
    };
    //Create node method
    SubjectCreateComponent.prototype.createNode = function () {
        this.nodeOperationType = "create";
        this.modalTitleName = "Add new";
        this.openUnitAndLessonModal();
        this.nodeType = "";
        this.resetFormValues();
        this.disableDropdown = false;
        this.enableModalOperation = false;
        this.selectedNodeType = null;
    };
    //Edit node method
    SubjectCreateComponent.prototype.editNode = function () {
        this.nodeOperationType = "edit";
        this.modalTitleName = "Edit";
        this.disableDropdown = true;
        this.syllabusForm.patchValue({
            unitName: this.nodeTitle,
            unitDescription: this.nodeDescription,
            lessonName: this.nodeTitle,
            lessonObjective: this.nodeDescription
        });
        this.openUnitAndLessonModal();
        this.enableModalOperation = true;
    };
    //Save node method
    SubjectCreateComponent.prototype.saveNode = function () {
        this.validateNodeForm = false;
        var newNodeArray, position, parent, treeCallback, jsonArray, nodeIndex, arrayDetails, nodeId, data = {};
        position = 'last';
        parent = $('#buildTree').jstree('get_selected')[0];
        treeCallback = $('#buildTree').jstree(true);
        jsonArray = treeCallback.get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
        nodeId = treeCallback.get_selected()[0];
        nodeIndex = jsonArray.findIndex(function (item) { return item.id === nodeId; });
        if (this.nodeOperationType === "create") {
            if (this.nodeType === "unit") {
                this.nodeTitle = this.trimValue(this.syllabusForm.value.unitName);
                this.nodeDescription = this.trimValue(this.syllabusForm.value.unitDescription);
                newNodeArray = {
                    "icon": "fe fe-server",
                    "text": this.nodeTitle,
                    "type": "unit",
                    "data": {
                        "name": this.nodeTitle,
                        "description": this.nodeDescription,
                        "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["CREATED"],
                        "objective": "",
                        "orderNumber": 0,
                        "status": null,
                        "fullName": ""
                    }
                };
                $('#buildTree').jstree().create_node(parent, newNodeArray, position);
                jsonArray = treeCallback.get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
            }
            else if (this.nodeType === "lesson") {
                this.nodeTitle = this.trimValue(this.syllabusForm.value.lessonName);
                this.nodeDescription = this.trimValue(this.syllabusForm.value.lessonObjective);
                newNodeArray = {
                    "icon": "fa fa-file",
                    "text": this.nodeTitle,
                    "type": "lesson",
                    "data": {
                        "name": this.nodeTitle,
                        "objective": this.nodeDescription,
                        "editStatus": "CREATED",
                        "description": "",
                        "orderNumber": 0,
                        "status": null,
                        "fullName": ""
                    }
                };
                $('#buildTree').jstree().create_node(parent, newNodeArray, position);
                jsonArray = treeCallback.get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
            }
        }
        else if (this.nodeOperationType === "edit") {
            this.nodeType = jsonArray[nodeIndex].type;
            if (this.nodeType === "unit") {
                this.nodeTitle = this.trimValue(this.syllabusForm.value.unitName);
                this.nodeDescription = this.trimValue(this.syllabusForm.value.unitDescription);
                jsonArray[nodeIndex].text = this.nodeTitle;
                data = {
                    "name": this.nodeTitle,
                    "description": this.nodeDescription,
                    "editStatus": "CREATED",
                    "objective": "",
                    "orderNumber": 0,
                    "status": null,
                    "fullName": ""
                };
                arrayDetails = jsonArray[nodeIndex];
                arrayDetails.data = data;
            }
            else if (this.nodeType === "lesson") {
                this.nodeTitle = this.trimValue(this.syllabusForm.value.lessonName);
                this.nodeDescription = this.trimValue(this.syllabusForm.value.lessonObjective);
                jsonArray[nodeIndex].text = this.nodeTitle;
                data = {
                    "name": this.nodeTitle,
                    "objective": this.nodeDescription,
                    "editStatus": "CREATED",
                    "description": "",
                    "orderNumber": 0,
                    "status": null,
                    "fullName": ""
                };
                arrayDetails = jsonArray[nodeIndex];
                arrayDetails.data = data;
            }
        }
        this.pluginService.jsTree("#buildTree", jsonArray, true);
        this.updateJSONTreeWithOrderNum(jsonArray);
        treeCallback.deselect_all();
        this.nodeType = "";
        this.enableNodeOperation = false;
        this.closeUnitAndLessonModal();
        this.resetFormValues();
    };
    //Delete node method
    SubjectCreateComponent.prototype.deleteNode = function () {
        var nodeId, jsonArray, treeCallback;
        this.nodeOperationType = "delete";
        treeCallback = $("#buildTree").jstree();
        nodeId = treeCallback.get_selected()[0];
        treeCallback.delete_node($('#' + nodeId));
        jsonArray = $("#buildTree").jstree(true).get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
        if (this.nodeType === "unit") {
            this.updatedJSONTree = jsonArray;
        }
        else {
            this.updatedJSONTree = jsonArray;
        }
        this.updateJSONTreeWithOrderNum(this.updatedJSONTree);
        this.enableNodeOperation = false;
        this.nodeType = "root";
    };
    //Generate JSON tree on drag and drop
    SubjectCreateComponent.prototype.generateJSONTreeOnDragAndDrop = function () {
        var localObj = this;
        $(document).on('dnd_stop.vakata', function (e, data) {
            setTimeout(function () {
                var json = $("#buildTree").jstree(true).get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
                localObj.updateJSONTreeWithOrderNum(json);
            }, 100);
        });
    };
    SubjectCreateComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onSaveSuccess(res); }, function (ErrRes) { return _this.onSaveError(ErrRes); });
    };
    SubjectCreateComponent.prototype.saveAsDraft = function () {
        this.updatedJSONTree[0].data.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["DRAFT"];
        this.saveGeneralSubject();
    };
    SubjectCreateComponent.prototype.saveAndPublish = function () {
        this.updatedJSONTree[0].data.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["ACTIVE"];
        this.saveGeneralSubject();
    };
    SubjectCreateComponent.prototype.saveGeneralSubject = function () {
        this.subscribeToSaveResponse(this.subjectService.saveSubject(this.createSubjectForm()));
    };
    SubjectCreateComponent.prototype.onSaveSuccess = function (res) {
        this.pluginService.alertMessage("General subject saved successfully", "success");
        this.previousUrl();
        this.resetFormValues();
        this.subjectForm.reset();
    };
    SubjectCreateComponent.prototype.onSaveError = function (res) {
        this.pluginService.alertMessage("Could not save, please contact admin", "error");
    };
    SubjectCreateComponent.prototype.createSubjectForm = function () {
        return this.updatedJSONTree;
    };
    //update JSON array with order number 
    SubjectCreateComponent.prototype.updateJSONTreeWithOrderNum = function (json) {
        this.updatedJSONTree = [];
        this.updatedJSONTree = json;
        if (this.updatedJSONTree[0].type === "unit" || this.updatedJSONTree[0].type === "lesson") {
            this.pluginService.alertMessage("More than one root element is not allowed, please remove the additional root element and proceed", "error");
            this.validateNode = true;
        }
        else if (this.updatedJSONTree[0].type === "root") {
            this.validateNode = false;
        }
        for (var i = 0; i < this.updatedJSONTree.length; i++) {
            this.updatedJSONTree[i].data.orderNumber = i;
            //Remove unwanted objects (for api call) from the JSON tree
            delete this.updatedJSONTree[i].state;
            delete this.updatedJSONTree[i].a_attr;
            delete this.updatedJSONTree[i].li_attr;
            if ((this.updatedJSONTree[i].type !== "root") && (this.updatedJSONTree[i].parent === "#")) {
                this.pluginService.alertMessage("More than one root element is not allowed, please remove the additional root element and proceed", "error");
                this.validateNode = true;
            }
        }
        this.pluginService.jsTree("#afterChangeTree", this.updatedJSONTree, false);
    };
    SubjectCreateComponent.prototype.onError = function (errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    };
    SubjectCreateComponent.prototype.toggleTreeNodes = function () {
        if (this.updatedJSONTree.length > 1) {
            this.enableExpandNode = !this.enableExpandNode;
            if (this.enableExpandNode) {
                this.pluginService.openJsTreeAllNodes("#buildTree");
            }
            else {
                this.pluginService.closeJsTreeAllNodes("#buildTree");
            }
        }
    };
    SubjectCreateComponent.prototype.onBack = function () {
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
    SubjectCreateComponent.prototype.previousUrl = function () {
        this.router.navigateByUrl('/subject');
    };
    SubjectCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./subject-create.component.html */ "./src/app/subject/subject-create.component.html"),
            providers: [_subject_service__WEBPACK_IMPORTED_MODULE_6__["SubjectService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
            _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__["CurriculumService"],
            _subject_service__WEBPACK_IMPORTED_MODULE_6__["SubjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], SubjectCreateComponent);
    return SubjectCreateComponent;
}());



/***/ }),

/***/ "./src/app/subject/subject-delete.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/subject/subject-delete.component.ts ***!
  \*****************************************************/
/*! exports provided: SubjectDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectDeleteComponent", function() { return SubjectDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var _subject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subject.service */ "./src/app/subject/subject.service.ts");






var SubjectDeleteComponent = /** @class */ (function () {
    function SubjectDeleteComponent(router, activatedRoute, eventManager, subjectService, pluginService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.eventManager = eventManager;
        this.subjectService = subjectService;
        this.pluginService = pluginService;
    }
    SubjectDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var subject = _a.subject;
            _this.deletegeneralSubject(subject);
        });
    };
    SubjectDeleteComponent.prototype.subscribeToDeleteResponse = function (resp) {
        var _this = this;
        resp.subscribe(function (res) { return _this.onDeleteSuccess(res); }, function (res) { return _this.onDeleteError(res); });
    };
    SubjectDeleteComponent.prototype.deletegeneralSubject = function (subject) {
        var localthisObject = this;
        swal({
            title: "Are you sure to delete this subject ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localthisObject.confirmDelete(subject.id);
            }
            else {
                localthisObject.previousUrl();
            }
        });
    };
    SubjectDeleteComponent.prototype.confirmDelete = function (id) {
        this.subscribeToDeleteResponse(this.subjectService.delete(id));
    };
    SubjectDeleteComponent.prototype.previousUrl = function () {
        this.router.navigateByUrl('/subject');
    };
    SubjectDeleteComponent.prototype.onDeleteSuccess = function (resp) {
        this.pluginService.alertMessage("Subject deleted successfully", "success");
        this.previousUrl();
    };
    SubjectDeleteComponent.prototype.onDeleteError = function (err) {
        this.pluginService.alertMessage("Could not delete general subject, please contact admin", "error");
    };
    SubjectDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./subject-manage.component.html */ "./src/app/subject/subject-manage.component.html"),
            providers: [_subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"],
            _subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"]])
    ], SubjectDeleteComponent);
    return SubjectDeleteComponent;
}());



/***/ }),

/***/ "./src/app/subject/subject-details.component.html":
/*!********************************************************!*\
  !*** ./src/app/subject/subject-details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 my-3 justify-content-between d-flex\">\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\n        <i class=\"fa fa-chevron-left mr-2\"></i> Back\n    </div>\n    <a class=\"btn btn-success mr-2\" [routerLink]=\"['/subject',subjectId, 'edit' ]\">\n        <i class=\"fa fa-edit mr-2\"></i>Edit subject\n    </a>\n</div>\n\n<div class=\"row mb-3 p-3\">\n    <div class=\"col-xxl-3\">\n        <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"subject.length > 1\">\n            <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\n                <i class=\"fa fa-clone mr-2\"></i>\n                <span *ngIf=\"active === false\">\n                    Expand all\n                </span>\n                <span *ngIf=\"active === true\">\n                    Collapse all\n                </span>\n            </div>\n        </div>\n        <div id=\"treeView\"></div>\n    </div>\n    <div class=\"col-xxl-9\">\n        <div class=\"p-3\" *ngIf=\"nodeType === 'root'\">\n            <p><b>Subject name</b></p>\n            <p>{{nodeName}}</p>\n            <p><b>Subject description</b></p>\n            <p>{{nodeDescription}}</p>\n        </div>\n\n        <div *ngIf=\"nodeType === 'unit'\" class=\"p-3\">\n            <p><b>Unit name</b></p>\n            <p>{{nodeName}}</p>\n            <p><b>Unit description</b></p>\n            <p>{{nodeDescription}}</p>\n        </div>\n\n        <div class=\"p-3\" *ngIf=\"nodeType === 'lesson'\">\n            <p><b>Lesson name</b></p>\n            <p>{{nodeName}}</p>\n            <p><b>Lesson objective</b></p>\n            <p>{{nodeDescription}}</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/subject/subject-details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/subject/subject-details.component.ts ***!
  \******************************************************/
/*! exports provided: SubjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectDetailsComponent", function() { return SubjectDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subject.service */ "./src/app/subject/subject.service.ts");





var SubjectDetailsComponent = /** @class */ (function () {
    function SubjectDetailsComponent(pluginService, subjectService, router, activatedRoute) {
        this.pluginService = pluginService;
        this.subjectService = subjectService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.subject = [];
        this.active = false;
    }
    SubjectDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pluginService.sideMenuToggle();
        this.activatedRoute.data.subscribe(function (_a) {
            var subject = _a.subject;
            _this.subject = subject;
            _this.updateSubjectValues(subject);
        });
    };
    SubjectDetailsComponent.prototype.updateSubjectValues = function (subject) {
        this.subject = subject;
        this.pluginService.jsTree("#treeView", this.subject, false);
        this.subjectId = this.subject[0].data.id;
    };
    SubjectDetailsComponent.prototype.showSyllabusTreeDetails = function () {
        var localThisObj = this;
        $('#treeView')
            .on('changed.jstree', function (e, data) {
            var i, j, nodeTreeType;
            for (i = 0, j = data.selected.length; i < j; i++) {
                localThisObj.nodeType = data.node.type;
                if (localThisObj.nodeType === "root") {
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                }
                else if (localThisObj.nodeType === "unit") {
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                }
                else if (localThisObj.nodeType === "lesson") {
                    localThisObj.topicId = data.node.data.id;
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.objective;
                }
                else {
                }
            }
        });
    };
    SubjectDetailsComponent.prototype.toggleTreeNodes = function () {
        this.active = !this.active;
        if (this.active) {
            this.pluginService.openJsTreeAllNodes("#treeView");
        }
        else {
            this.pluginService.closeJsTreeAllNodes("#treeView");
        }
    };
    SubjectDetailsComponent.prototype.ngAfterViewInit = function () {
        this.showSyllabusTreeDetails();
    };
    SubjectDetailsComponent.prototype.onBack = function () {
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
                localObj.router.navigateByUrl('/subject');
                localObj.pluginService.sideMenuToggle();
            }
        });
    };
    SubjectDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./subject-details.component.html */ "./src/app/subject/subject-details.component.html"),
            providers: [_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"],
            _subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SubjectDetailsComponent);
    return SubjectDetailsComponent;
}());



/***/ }),

/***/ "./src/app/subject/subject-manage.component.html":
/*!*******************************************************!*\
  !*** ./src/app/subject/subject-manage.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 d-flex justify-content-end my-3\">\n    <a routerLink=\"/subject/create\">\n        <div class=\"btn btn-primary\">\n            <i class=\"fa fa-plus-circle mr-2\"></i> Create new subject\n        </div>\n    </a>\n</div>\n\n<div class=\"col-12 filterbg my-4 rounded\">\n    <div class=\"filtericon font-20\">\n        <i class=\"fa fa-filter\"></i>\n    </div>\n    <div class=\"row d-flex justify-content-start align-items-center\">\n        <div class=\"col-lg-3 mb-3\">\n            <ng-select [items]=\"curriculumList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"acronym\"\n                placeholder=\"Select curriculum\" [(ngModel)]=\"selectedCurriculum\" (change)=\"onCurriculumChange()\">\n            </ng-select>\n        </div>\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedCurriculum\">\n            <ng-select [items]=\"gradeList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedGrade\">\n            </ng-select>\n        </div>\n    </div>\n    <div class=\"d-flex justify-content-end pb-3 row\">\n        <div class=\"col-lg-2\">\n            <button class=\"btn btn-success float-right waves-effect waves-light\" (click)=\"loadSubjectList()\">\n                <i class=\"fa fa-filter mr-1\"></i>Apply\n            </button>\n        </div>\n    </div>\n</div>\n\n<div class=\"table-responsive\" *ngIf=\"subjects\">\n    <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\n        <thead>\n            <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"reset.bind(this)\">\n                <th jhiSortBy=\"subject\">Subject Name <span class=\"fa fa-sort ml-1\"></span></th>\n                <th jhiSortBy=\"grade\">Grade <span class=\"fa fa-sort ml-1\"></span></th>\n                <th jhiSortBy=\"status\">Status <span class=\"fa fa-sort ml-1\"></span></th>\n                <th class=\"fixed-column\">Update status</th>\n                <th class=\"fixed-column\">Actions</th>\n            </tr>\n        </thead>\n        <tbody infinite-scroll (scrolled)=\"loadPage(page + 1)\" [infiniteScrollDisabled]=\"page >= links['last']\"\n            [infiniteScrollDistance]=\"0\">\n            <tr *ngFor=\"let data of subjects ;trackBy: trackId\">\n                <td data-column=\"Subject name\">{{data.subject}}</td>\n                <td data-column=\"Grade\">{{data.grade}}</td>\n                <td data-column=\"Status\">{{data.status}}</td>\n                <td class=\"fixed-column\" data-column=\"Update status\">\n                    <a class=\"btn btn-outline-success mr-1 mb-1\"\n                        *ngIf=\"data.status === 'DRAFT' || data.status === 'INACTIVE'\"\n                        [routerLink]=\"['/subject', data.id, 'publish']\">\n                        Publish\n                    </a>\n                    <a class=\"btn btn-outline-danger mr-1 mb-1\" *ngIf=\"data.status === 'ACTIVE'\"\n                        [routerLink]=\"['/subject', data.id, 'unpublish']\">\n                        Unpublish\n                    </a>\n                </td>\n                <td class=\"fixed-column\" data-column=\"Actions\">\n                    <div>\n                        <a class=\"btn btn-outline-info mr-1 btn-icon-size mb-1\"\n                            [routerLink]=\"['/subject', data.id, 'view' ]\">\n                            <i class=\"fa fa-eye\"></i>\n                        </a>\n                        <a class=\"btn btn-outline-success mr-1 btn-icon-size mb-1\"\n                            [routerLink]=\"['/subject', data.id, 'edit' ]\">\n                            <i class=\"fa fa-edit\"></i>\n                        </a>\n                        <div class=\"btn btn-outline-danger mr-1 btn-icon-size mb-1\"\n                            *ngIf=\"data.status === 'INACTIVE' || data.status === 'DRAFT'\"\n                            [routerLink]=\"['/subject', data.id, 'delete']\">\n                            <i class=\"fa fa-trash\"></i>\n                        </div>\n                    </div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/subject/subject-manage.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/subject/subject-manage.component.ts ***!
  \*****************************************************/
/*! exports provided: SubjectManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectManageComponent", function() { return SubjectManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _subject_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subject.service */ "./src/app/subject/subject.service.ts");
/* harmony import */ var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../curriculum/curriculum.service */ "./src/app/curriculum/curriculum.service.ts");









var SubjectManageComponent = /** @class */ (function () {
    function SubjectManageComponent(_router, activatedRoute, curriculumService, subjectService, eventManager, parseLinks, principalService, pluginService) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.curriculumService = curriculumService;
        this.subjectService = subjectService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.curriculumList = [];
        this.gradeList = [];
        this.subjects = [];
        this.itemsPerPage = _shared__WEBPACK_IMPORTED_MODULE_5__["ITEMS_PER_PAGE"];
        this.page = 0;
        this.links = {
            last: 0
        };
        this.predicate = 'id';
        this.reverse = false;
    }
    SubjectManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principalService.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInSubjects();
        this.loadCurriculums();
    };
    SubjectManageComponent.prototype.reset = function () {
        this.page = 0;
        this.subjects = [];
        this.loadSubjectList();
    };
    SubjectManageComponent.prototype.loadPage = function (page) {
        this.page = page;
        this.loadSubjectList();
    };
    SubjectManageComponent.prototype.loadCurriculums = function () {
        var _this = this;
        this.curriculumService.getCurriculumSearch().subscribe(function (res) { return _this.assignCurriculumList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    SubjectManageComponent.prototype.assignCurriculumList = function (data) {
        this.curriculumList = [];
        for (var i = 0; i < data.length; i++) {
            this.curriculumList.push(data[i]);
        }
    };
    SubjectManageComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    SubjectManageComponent.prototype.sort = function () {
        var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    };
    SubjectManageComponent.prototype.registerChangeInSubjects = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('subjectListModification', function (response) { return _this.reset(); });
    };
    SubjectManageComponent.prototype.onError = function (errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    };
    SubjectManageComponent.prototype.onCurriculumChange = function () {
        var gradesApplicableFrom, gradesApplicableTo;
        if (this.selectedCurriculum) {
            gradesApplicableFrom = this.selectedCurriculum.gradesApplicableFrom;
            gradesApplicableTo = this.selectedCurriculum.gradesApplicableTo;
            this.generateGradeList(gradesApplicableFrom, gradesApplicableTo);
            this.selectedGrade = null;
        }
    };
    SubjectManageComponent.prototype.generateGradeList = function (min, max) {
        this.gradeList = [];
        for (var i = min; i <= max; i++) {
            this.gradeList.push({
                "id": i,
                "name": i
            });
        }
        return this.gradeList;
    };
    SubjectManageComponent.prototype.loadSubjectList = function () {
        var _this = this;
        this.subjects = [];
        if (this.selectedCurriculum && this.selectedGrade) {
            this.subjectService
                .getSubjectByCurriculumIdAndGradeId(this.selectedCurriculum.id, this.selectedGrade.id, null)
                .subscribe(function (res) { return _this.paginateSubjects(res.body, res.headers); }, function (res) { return _this.onError(res.message); });
        }
        else {
            this.pluginService.alertMessage("Please select a filter and then apply", "error");
        }
    };
    SubjectManageComponent.prototype.paginateSubjects = function (data, headers) {
        //this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = parseInt(headers.get('X-Total-Count'), 10);
        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
                this.subjects.push(data[i]);
            }
        }
        else {
            this.pluginService.alertMessage("No data found..!", "warning");
        }
    };
    SubjectManageComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    SubjectManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./subject-manage.component.html */ "./src/app/subject/subject-manage.component.html"),
            providers: [_subject_service__WEBPACK_IMPORTED_MODULE_7__["SubjectService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__["CurriculumService"],
            _subject_service__WEBPACK_IMPORTED_MODULE_7__["SubjectService"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"],
            _core__WEBPACK_IMPORTED_MODULE_4__["Principal"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"]])
    ], SubjectManageComponent);
    return SubjectManageComponent;
}());



/***/ }),

/***/ "./src/app/subject/subject-update-publish.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/subject/subject-update-publish.component.ts ***!
  \*************************************************************/
/*! exports provided: SubjectPublishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectPublishComponent", function() { return SubjectPublishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _subject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subject.service */ "./src/app/subject/subject.service.ts");






var SubjectPublishComponent = /** @class */ (function () {
    function SubjectPublishComponent(router, activatedRoute, subjectService, pluginService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.subjectService = subjectService;
        this.pluginService = pluginService;
    }
    SubjectPublishComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var subject = _a.subject;
            _this.publishSubject(subject);
        });
    };
    SubjectPublishComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onSaveSuccess(res); }, function (errRes) { return _this.onSaveError(errRes); });
    };
    SubjectPublishComponent.prototype.publishSubject = function (subject) {
        subject.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_3__["ACTIVE"];
        this.subscribeToSaveResponse(this.subjectService.updateSubjectStatus(subject));
        this.router.navigateByUrl('/subject');
    };
    SubjectPublishComponent.prototype.onSaveSuccess = function (resp) {
        if (resp.body.status === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_3__["ACTIVE"]) {
            this.pluginService.alertMessage("Subject published successfully", "success");
        }
    };
    SubjectPublishComponent.prototype.onSaveError = function (errRes) {
        this.pluginService.alertMessage("Could not publish, please contact admin", "error");
    };
    SubjectPublishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./subject-manage.component.html */ "./src/app/subject/subject-manage.component.html"),
            providers: [_subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"]])
    ], SubjectPublishComponent);
    return SubjectPublishComponent;
}());



/***/ }),

/***/ "./src/app/subject/subject-update-unpublish.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/subject/subject-update-unpublish.component.ts ***!
  \***************************************************************/
/*! exports provided: SubjectUnpublishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectUnpublishComponent", function() { return SubjectUnpublishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _subject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subject.service */ "./src/app/subject/subject.service.ts");






var SubjectUnpublishComponent = /** @class */ (function () {
    function SubjectUnpublishComponent(router, activatedRoute, subjectService, pluginService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.subjectService = subjectService;
        this.pluginService = pluginService;
    }
    SubjectUnpublishComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var subject = _a.subject;
            _this.unpublishGeneralSubject(subject);
        });
    };
    SubjectUnpublishComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onSaveSuccess(res); }, function (errRes) { return _this.onSaveError(errRes); });
    };
    SubjectUnpublishComponent.prototype.unpublishGeneralSubject = function (subject) {
        subject.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_3__["INACTIVE"];
        this.subscribeToSaveResponse(this.subjectService.updateSubjectStatus(subject));
        this.router.navigateByUrl('/subject');
    };
    SubjectUnpublishComponent.prototype.onSaveSuccess = function (resp) {
        if (resp.body.status === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_3__["INACTIVE"]) {
            this.pluginService.alertMessage("Subject unpublished successfully", "success");
        }
    };
    SubjectUnpublishComponent.prototype.onSaveError = function (errRes) {
        this.pluginService.alertMessage("Could not unpublish, please contact admin", "error");
    };
    SubjectUnpublishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./subject-manage.component.html */ "./src/app/subject/subject-manage.component.html"),
            providers: [_subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"]])
    ], SubjectUnpublishComponent);
    return SubjectUnpublishComponent;
}());



/***/ }),

/***/ "./src/app/subject/subject-update.component.html":
/*!*******************************************************!*\
  !*** ./src/app/subject/subject-update.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xxl-12 justify-content-between d-flex my-3\">\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\n        <i class=\"fa fa-chevron-left mr-2\"></i> Back\n    </div>\n</div>\n\n<div class=\"row-flex stepper\">\n    <div class=\"nav flex-column nav-pills stepper-left\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\n        <a class=\"nav-link active\" id=\"createSubject-tab\" data-toggle=\"pill\" href=\"#createSubject\" role=\"tab\"\n            aria-controls=\"createSubject\" aria-selected=\"false\">\n            <span class=\"index-round\">\n                Step 1\n            </span>\n            <span class=\"step-label\">\n                Create subject\n            </span>\n        </a>\n        <a class=\"nav-link disabled\" id=\"creareSyllabus-tab\" data-toggle=\"pill\" href=\"#creareSyllabus\" role=\"tab\"\n            aria-controls=\"creareSyllabus\" aria-selected=\"false\">\n            <span class=\"index-round\">\n                Step 2\n            </span>\n            <span class=\"step-label\">\n                Create syllabus\n            </span>\n        </a>\n        <a class=\"nav-link disabled\" id=\"confirmation-tab\" data-toggle=\"pill\" href=\"#confirmation\" role=\"tab\"\n            aria-controls=\"confirmation\" aria-selected=\"false\">\n            <span class=\"index-round\">\n                Step 3\n            </span>\n            <span class=\"step-label\">\n                Summary\n            </span>\n        </a>\n    </div>\n    <div class=\"stepper-right tab-content p-3\" id=\"v-pills-tabContent\">\n        <div class=\"tab-pane fade show active\" id=\"createSubject\" role=\"tabpanel\" aria-labelledby=\"createSubject-tab\">\n            <form [formGroup]=\"subjectForm\">\n                <div class=\"form-group mb-2 col-xxl-6\">\n                    <label for=\"curriculum\" class=\"col-form-label\">Curriculum name</label>\n                    <input type=\"text\" class=\"form-control\" id=\"curriculum\" formControlName=\"curriculum\">\n                </div>\n                <div class=\"form-group mb-2 col-xxl-6\">\n                    <label for=\"grade\" class=\"col-form-label\">Grade</label>\n                    <input type=\"text\" class=\"form-control\" id=\"grade\" formControlName=\"grade\">\n                </div>\n                <div class=\"form-group mb-2 col-xxl-6\">\n                    <label for=\"subjectName\" class=\"col-form-label\">Subject name</label>\n                    <input type=\"text\" class=\"form-control\"\n                        placeholder=\"Enter subject name (min length: 3, max length: 50)\"\n                        inputRestriction=\"alphabetsWithSpace\" formControlName=\"subjectName\" maxlength=\"50\" minlength=\"3\"\n                        [ngClass]=\"{ 'is-invalid': validateSubjectForm && formControl.subjectName.errors }\">\n                    <div class=\"text-muted font-15 my-2\">Allowed\n                        characters - Alphabets</div>\n                </div>\n                <div class=\"form-group mb-2 col-xxl-6\">\n                    <label for=\"description\" class=\" col-form-label\">Description\n                        <span class=\"text-muted\">(Optional)</span></label>\n                    <textarea class=\"form-control description-form\"\n                        placeholder=\"Enter description  (min length: 3, max length: 250)\"\n                        formControlName=\"subjectDescription\"\n                        [ngClass]=\"{ 'is-invalid': validateSubjectForm && formControl.subjectDescription.errors }\"\n                        maxlength=\"250\" minlength=\"3\"></textarea>\n                    <div class=\"text-muted font-15 my-2\">\n                        Allowed characters - Alphabets, Numbers and\n                        Special characters\n                    </div>\n                </div>\n                <div class=\"form-group mb-2 col-xxl-6 d-flex justify-content-start\">\n                    <div class=\"checkbox mr-2\">\n                        <input type=\"checkbox\" id=\"isLanguage\" formControlName=\"isLanguage\">\n                        <label class=\"mt-2 p-3\" for=\"isLanguage\"></label>\n                    </div>\n                    <label class=\"mt-2\" for=\"isLanguage\">Is language ? <span\n                            class=\"text-muted\">(Optional)</span></label>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xxl-12 d-flex justify-content-end\">\n                        <button class=\"btn btn-success next-step\" [disabled]=\"validateSubjectForm\"\n                            (click)=\"loadUpdatedSubjectTree()\">\n                            Next\n                            <i class=\"fa fa-arrow-right ml-2\"></i>\n                        </button>\n                    </div>\n                </div>\n            </form>\n        </div>\n\n        <div class=\"tab-pane fade\" id=\"creareSyllabus\" role=\"tabpanel\" aria-labelledby=\"creareSyllabus-tab\">\n\n            <div class=\"row\">\n                <div class=\"col-xxl-4 p-2\">\n                    <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"subject.length > 1\">\n                        <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\n                            <i class=\"fa fa-clone mr-2\"></i>\n                            <span *ngIf=\"enableExpandNode === false\">\n                                Expand all\n                            </span>\n                            <span *ngIf=\"enableExpandNode === true\">\n                                Collapse all\n                            </span>\n                        </div>\n                    </div>\n                    <div id=\"buildTree\"></div>\n                </div>\n                <div class=\"col-xxl-8\">\n                    <div class=\"w-100 d-flex justify-content-end align-self-start mb-2\" *ngIf=\"enableNodeOperation\">\n                        <div class=\"btn btn-primary mr-2\" *ngIf=\"nodeType !== 'lesson'\" (click)=\"createNode()\">\n                            <i class=\"fa fa-plus-circle mr-2\"></i>Add new\n                            unit / lesson\n                        </div>\n                        <div class=\"btn btn-success mr-2\" (click)=\"editNode()\" *ngIf=\"enableEditNodeOperation\">\n                            <i class=\"fa fa-edit mr-2\"></i>Edit {{nodeType}}\n                        </div>\n                        <div class=\"btn btn-danger\" (click)=\"deleteNode()\" *ngIf=\"nodeType !== 'root'\">\n                            <i class=\"fa fa-trash mr-2\"></i> Delete {{nodeType}}\n                        </div>\n                    </div>\n                    <div class=\"w-100 p-4\">\n                        <div *ngIf=\"nodeType === 'unit'\">\n                            <p><b>Unit name :</b> {{nodeTitle}} </p>\n                            <p><b>Unit description :</b> {{nodeDescription}}</p>\n                        </div>\n                        <div *ngIf=\"nodeType === 'lesson'\">\n                            <p><b>Lesson name :</b> {{nodeTitle}}</p>\n                            <p><b>Lesson objective :</b> {{nodeDescription}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"my-2 p-3 border-danger rounded\">\n                <p class=\"text-danger\"><b>NOTE</b></p>\n                <p class=\"text-primary\">\n                    <i class=\"fa fa-check mr-2 text-danger\"></i> Select a node and do your actions.\n                </p>\n                <p class=\"text-primary\">\n                    <i class=\"fa fa-check mr-2 text-danger\"></i> Without any changes, you can't update subject.\n                </p>\n                <p class=\"text-primary\">\n                    <i class=\"fa fa-check mr-2 text-danger\"></i> Only one root node is allowed, you can't do drag and\n                    drop on top of\n                    root node\n                </p>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-xxl-12 d-flex justify-content-end\">\n                    <div class=\"btn btn-danger prev-step\">\n                        <i class=\"fa fa-arrow-left mr-2\"></i> Previous\n                    </div>\n                    <button class=\"btn btn-success ml-2 next-step\" [disabled]=\"validateNode\">\n                        Next\n                        <i class=\"fa fa-arrow-right ml-2\"></i>\n                    </button>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"tab-pane fade\" id=\"confirmation\" role=\"tabpanel\" aria-labelledby=\"confirmation-tab\">\n\n            <div class=\"card-body\">\n                <div class=\"row mb-3\">\n                    <div class=\"col-xxl-6\">\n                        <h5>Before changes</h5>\n                        <div id=\"beforeChangeTree\"></div>\n                    </div>\n                    <div class=\"col-xxl-6\">\n                        <h5>After changes</h5>\n                        <div id=\"afterChangeTree\"></div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-xxl-12 d-flex justify-content-end\">\n                    <span class=\"btn btn-danger mr-2 prev-step\">\n                        <i class=\"fa fa-arrow-left mr-2\"></i>\n                        Previous\n                    </span>\n                    <div class=\"btn btn-info mr-2\" (click)=\"saveAsDraft()\">\n                        <i class=\"fa fa-save mr-2\"></i>\n                        Save as draft\n                    </div>\n                    <div class=\"btn btn-success\" (click)=\"saveAndPublish()\">\n                        <i class=\"fe fe-file-plus mr-2\"></i>\n                        Save and publish\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"subjectEditModal\">\n    <div class=\"modal-dialog modal-full-height modal-right modal-notify\" role=\"document\">\n        <div class=\"modal-content\" [formGroup]=\"syllabusForm\">\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\n                <h5 class=\"modal-title text-white\">\n                    {{modalTitleName}} unit / lesson\n                </h5>\n                <div class=\"close btn btn-xl\" (click)=\"closeWithOutSavingNode()\">\n                    <i class=\"fa fa-times\"></i>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"form-group mb-2\">\n                    <label class=\"col-form-label\">Type\n                    </label>\n                    <ng-select [items]=\"nodeTypes\" [disabled]=\"disableDropdown\" [ngModelOptions]=\"{standalone: true}\"\n                        bindLabel=\"name\" placeholder=\"Select node type\" [(ngModel)]=\"selectedNodeType\"\n                        (change)=\"onNodeTypeChange()\" [searchable]=\"false\">\n                    </ng-select>\n                </div>\n                <div *ngIf=\"nodeType === 'unit'\">\n                    <div class=\"form-group mb-2\">\n                        <label class=\"col-form-label\">Unit\n                            name\n                        </label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"unitName\"\n                            placeholder=\"Enter unit name (minlength: 3 and maxlength: 75)\"\n                            inputRestriction=\"alphabetsNumbersWithMinus\" minlength=\"3\" maxlength=\"75\" />\n                        <div class=\"text-muted font-15 my-2\">\n                            Allowed characters - Alphabets, Numbers and Special character (-)\n                        </div>\n                    </div>\n                    <div class=\"form-group mb-2\">\n                        <label class=\"col-form-label\">Unit\n                            description\n                        </label>\n                        <textarea class=\"form-control description-form\"\n                            placeholder=\"Enter unit description (minlength: 3 and maxlength: 250)\" minlength=\"3\"\n                            maxlength=\"250\" formControlName=\"unitDescription\"></textarea>\n                        <div class=\"text-muted font-15 my-2\">\n                            Allowed characters - Alphabets, Numbers and Special characters\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"nodeType === 'lesson'\">\n                    <div class=\"form-group mb-2\">\n                        <label class=\"col-form-label\">Lesson\n                            name\n                        </label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"lessonName\"\n                            placeholder=\"Enter lesson name (minlength: 3 and maxlength: 75)\"\n                            inputRestriction=\"alphabetsNumbersWithMinus\" minlength=\"3\" maxlength=\"75\" />\n                        <div class=\"text-muted font-15 my-2\">\n                            Allowed characters - Alphabets, Numbers and Special character (-)\n                        </div>\n                    </div>\n                    <div class=\"form-group mb-2\">\n                        <label class=\"col-form-label\">Lesson\n                            objective\n                        </label>\n                        <textarea class=\"form-control description-form\"\n                            placeholder=\"Enter lesson objective (minlength: 3 and maxlength: 250)\" minlength=\"3\"\n                            maxlength=\"250\" formControlName=\"lessonObjective\"></textarea>\n                        <div class=\"text-muted font-15 my-2\">\n                            Allowed characters - Alphabets, Numbers and Special characters\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\" *ngIf=\"enableModalOperation\">\n                <div class=\"btn btn-danger\" (click)=\"cancelNode()\">\n                    <i class=\"fa fa-times mr-2\"></i>\n                    Reset\n                </div>\n                <button class=\"btn btn-success\" (click)=\"saveNode()\" [disabled]=\"validateNodeForm\">\n                    <i class=\"fa fa-save mr-2\"></i>\n                    Save\n                </button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/subject/subject-update.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/subject/subject-update.component.ts ***!
  \*****************************************************/
/*! exports provided: SubjectUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectUpdateComponent", function() { return SubjectUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _subject_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subject.service */ "./src/app/subject/subject.service.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");








var SubjectUpdateComponent = /** @class */ (function () {
    function SubjectUpdateComponent(router, formBuilder, pluginService, subjectService, activatedRoute, commonService, changeDetectRef) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.subjectService = subjectService;
        this.activatedRoute = activatedRoute;
        this.commonService = commonService;
        this.changeDetectRef = changeDetectRef;
        this.updatedJSONTree = [];
        this.nodeTypes = [];
        this.validateNodeForm = true;
        this.validateNode = true;
        this.enableExpandNode = false;
    }
    SubjectUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pluginService.sideMenuToggle();
        this.createSubjectGroup();
        this.pluginService.stepper();
        this.activatedRoute.data.subscribe(function (_a) {
            var subject = _a.subject;
            _this.updateSubjectValues(subject);
        });
        this.getNodeTypeList();
    };
    SubjectUpdateComponent.prototype.getNodeTypeList = function () {
        var _this = this;
        this.commonService.getGeneralDataList().subscribe(function (nodeTypeData) {
            _this.nodeTypes = nodeTypeData.subject;
        });
    };
    SubjectUpdateComponent.prototype.createSubjectGroup = function () {
        this.subjectForm = this.formBuilder.group({
            curriculum: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            grade: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            subjectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            subjectDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]),
            isLanguage: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false)
        });
        this.syllabusForm = this.formBuilder.group({
            unitName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            unitDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]),
            lessonName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            lessonObjective: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])
        });
    };
    Object.defineProperty(SubjectUpdateComponent.prototype, "formControl", {
        get: function () { return this.subjectForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubjectUpdateComponent.prototype, "modalFormControl", {
        get: function () { return this.syllabusForm.controls; },
        enumerable: true,
        configurable: true
    });
    SubjectUpdateComponent.prototype.onNodeTypeChange = function () {
        var validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(75)];
        if (this.selectedNodeType) {
            this.nodeType = this.selectedNodeType.name;
            if (this.nodeType === 'unit') {
                this.enableModalOperation = true;
                this.syllabusForm.addControl('unitName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', validators));
                this.syllabusForm.addControl('lessonName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', null));
            }
            else if (this.nodeType === 'lesson') {
                this.enableModalOperation = true;
                this.syllabusForm.addControl('lessonName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', validators));
                this.syllabusForm.addControl('unitName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', null));
            }
        }
    };
    SubjectUpdateComponent.prototype.updateSubjectValues = function (subject) {
        var name, description, isLanguage, curriculumId, grade;
        this.updateStatusForAllNode(subject);
        name = subject[0].data.name;
        description = subject[0].data.description;
        isLanguage = subject[0].data.isLanguage;
        grade = subject[0].data.grade;
        curriculumId = subject[0].data.curriculumId;
        this.subjectForm.setValue({
            subjectName: name,
            subjectDescription: description,
            isLanguage: isLanguage,
            curriculum: curriculumId,
            grade: grade
        });
        this.pluginService.jsTree("#beforeChangeTree", subject, false);
        this.subjectForm.get('curriculum').disable();
        this.subjectForm.get('grade').disable();
    };
    SubjectUpdateComponent.prototype.updateStatusForAllNode = function (subject) {
        for (var i = 0; i < subject.length; i++) {
            subject[i].data.editStatus = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["NOCHANGE"];
        }
        this.subject = subject;
    };
    SubjectUpdateComponent.prototype.loadUpdatedSubjectTree = function () {
        this.subject[0].text = this.subjectName;
        this.subject[0].data.name = this.subjectName;
        this.subject[0].data.description = this.subjectDescription;
        this.subject[0].data.isLanguage = this.subjectForm.value.isLanguage;
        this.pluginService.jsTree("#buildTree", this.subject, true);
    };
    SubjectUpdateComponent.prototype.cancelForm = function () {
        this.subjectForm.reset();
    };
    SubjectUpdateComponent.prototype.ngAfterViewInit = function () {
        this.nodeSelectedEvent();
        this.generateJSONTreeOnDragAndDrop();
    };
    SubjectUpdateComponent.prototype.openUnitAndLessonModal = function () {
        this.pluginService.showModalWindow("#subjectEditModal");
    };
    SubjectUpdateComponent.prototype.closeUnitAndLessonModal = function () {
        this.pluginService.hideModalWindow("#subjectEditModal");
    };
    SubjectUpdateComponent.prototype.closeWithOutSavingNode = function () {
        var localthisObject = this;
        swal({
            title: "Are you sure to close without saving ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm === true) {
                localthisObject.closeUnitAndLessonModal();
                localthisObject.disableNodeOperations();
            }
        });
    };
    SubjectUpdateComponent.prototype.disableNodeOperations = function () {
        this.enableNodeOperation = false;
        this.nodeType = "";
        this.enableNodeOperation = false;
        this.nodeType = "";
        this.resetFormValues();
        var treeCallback = $('#buildTree').jstree(true);
        treeCallback.deselect_all();
    };
    //Reset all form values
    SubjectUpdateComponent.prototype.resetFormValues = function () {
        this.syllabusForm.reset();
        this.selectedNodeType = null;
    };
    //Tree selection and change method call
    SubjectUpdateComponent.prototype.nodeSelectedEvent = function () {
        var conceptThis = this;
        $('#buildTree').on('changed.jstree', function (e, data) {
            var i, j;
            for (i = 0, j = data.selected.length; i < j; i++) {
                conceptThis.nodeType = data.node.type;
                if (conceptThis.nodeType === "root") {
                    conceptThis.enableNodeOperation = true;
                    conceptThis.enableEditNodeOperation = false;
                }
                else if (conceptThis.nodeType === "unit") {
                    conceptThis.enableEditNodeOperation = true;
                    conceptThis.enableNodeOperation = true;
                    conceptThis.nodeId = data.node.data.id;
                    conceptThis.nodeTitle = data.node.data.name;
                    conceptThis.nodeDescription = data.node.data.description;
                    conceptThis.syllabusFormSetValues(conceptThis);
                }
                else if (conceptThis.nodeType === "lesson") {
                    conceptThis.enableNodeOperation = true;
                    conceptThis.enableEditNodeOperation = true;
                    conceptThis.nodeId = data.node.data.id;
                    conceptThis.nodeTitle = data.node.data.name;
                    conceptThis.nodeDescription = data.node.data.objective;
                    conceptThis.syllabusFormSetValues(conceptThis);
                }
                else {
                    conceptThis.enableNodeOperation = false;
                    conceptThis.enableEditNodeOperation = false;
                }
            }
        });
    };
    //Unit and lesson details form setvalues method
    SubjectUpdateComponent.prototype.syllabusFormSetValues = function (Objectthis) {
        var nodeTypeIndex;
        nodeTypeIndex = this.nodeTypes.findIndex(function (item) { return item.name === Objectthis.nodeType; });
        this.selectedNodeType = this.nodeTypes[nodeTypeIndex];
        if (Objectthis.nodeType === "unit") {
            this.syllabusForm.setValue({
                unitName: Objectthis.nodeTitle,
                unitDescription: Objectthis.nodeDescription,
                lessonName: "",
                lessonObjective: ""
            });
        }
        else {
            this.syllabusForm.setValue({
                unitName: "",
                unitDescription: "",
                lessonName: Objectthis.nodeTitle,
                lessonObjective: Objectthis.nodeDescription,
            });
        }
    };
    //Create node method
    SubjectUpdateComponent.prototype.createNode = function () {
        this.nodeOperationType = "create";
        this.modalTitleName = "Add new";
        this.disableDropdown = false;
        this.openUnitAndLessonModal();
        this.nodeType = "";
        this.resetFormValues();
        this.disableDropdown = false;
        this.enableModalOperation = false;
        this.selectedNodeType = null;
    };
    //Edit node method
    SubjectUpdateComponent.prototype.editNode = function () {
        this.nodeOperationType = "edit";
        this.modalTitleName = "Edit";
        this.disableDropdown = true;
        this.syllabusForm.patchValue({
            unitName: this.nodeTitle,
            unitDescription: this.nodeDescription,
            lessonName: this.nodeTitle,
            lessonObjective: this.nodeDescription
        });
        this.openUnitAndLessonModal();
        this.enableModalOperation = true;
    };
    SubjectUpdateComponent.prototype.trimValue = function (value) {
        if (value === null || value === undefined) {
            return value;
        }
        else {
            return value.trim();
        }
    };
    SubjectUpdateComponent.prototype.validateSubjectFormValues = function () {
        this.subjectName = this.trimValue(this.subjectForm.value.subjectName);
        this.subjectDescription = this.trimValue(this.subjectForm.value.subjectDescription);
        if (this.subjectName === "" || this.subjectName === undefined || this.subjectName === null) {
            this.validateSubjectForm = true;
        }
        else {
            this.validateSubjectForm = false;
        }
        if (this.subjectForm.invalid) {
            this.validateSubjectForm = true;
        }
        if (this.subjectForm.valid) {
            this.validateSubjectForm = false;
        }
    };
    SubjectUpdateComponent.prototype.validateUnitAndLessonForm = function () {
        var unitName, lessonName;
        unitName = this.trimValue(this.syllabusForm.value.unitName);
        lessonName = this.trimValue(this.syllabusForm.value.lessonName);
        if (this.nodeType === 'unit') {
            if (unitName === null || unitName === "" || unitName === undefined) {
                this.validateNodeForm = true;
            }
            else {
                this.validateNodeForm = false;
            }
        }
        else if (this.nodeType === 'lesson') {
            if (lessonName === null || lessonName === "" || lessonName === undefined) {
                this.validateNodeForm = true;
            }
            else {
                this.validateNodeForm = false;
            }
        }
    };
    SubjectUpdateComponent.prototype.ngAfterViewChecked = function () {
        //Subject Form Validation
        this.validateSubjectFormValues();
        //Unit and lesson form validation
        this.validateUnitAndLessonForm();
        this.changeDetectRef.detectChanges();
    };
    //Save node method
    SubjectUpdateComponent.prototype.saveNode = function () {
        if (this.syllabusForm.valid) {
            this.validateNodeForm = false;
            var newNodeArray, position, parent, treeCallback, jsonArray, nodeIndex, arrayDetails, selectedNodeID, data;
            position = 'last';
            parent = $('#buildTree').jstree('get_selected')[0];
            treeCallback = $('#buildTree').jstree(true);
            jsonArray = treeCallback.get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
            selectedNodeID = treeCallback.get_selected()[0];
            nodeIndex = jsonArray.findIndex(function (item) { return item.id === selectedNodeID; });
            if (this.nodeOperationType === "create") {
                if (this.nodeType === "unit") {
                    this.nodeTitle = this.trimValue(this.syllabusForm.value.unitName);
                    this.nodeDescription = this.trimValue(this.syllabusForm.value.unitDescription);
                    newNodeArray = {
                        "icon": "fe fe-server",
                        "text": this.nodeTitle,
                        "type": "unit",
                        "data": {
                            "name": this.nodeTitle,
                            "description": this.nodeDescription,
                            "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["CREATED"],
                            "objective": "",
                            "orderNumber": 0,
                            "status": null,
                            "fullName": "",
                            "curriculumId": null,
                            "grade": null
                        }
                    };
                    $('#buildTree').jstree().create_node(parent, newNodeArray, position);
                    jsonArray = treeCallback.get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
                }
                else if (this.nodeType === "lesson") {
                    this.nodeTitle = this.trimValue(this.syllabusForm.value.lessonName);
                    this.nodeDescription = this.trimValue(this.syllabusForm.value.lessonObjective);
                    newNodeArray = {
                        "icon": "fa fa-file",
                        "text": this.nodeTitle,
                        "type": "lesson",
                        "data": {
                            "name": this.nodeTitle,
                            "objective": this.nodeDescription,
                            "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["CREATED"],
                            "description": "",
                            "orderNumber": 0,
                            "status": null,
                            "fullName": "",
                            "curriculumId": null,
                            "grade": null
                        }
                    };
                    jsonArray[nodeIndex].text = this.nodeTitle;
                    $('#buildTree').jstree().create_node(parent, newNodeArray, position);
                    jsonArray = treeCallback.get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
                }
                this.validateNode = false;
            }
            if (this.nodeOperationType === "edit") {
                this.nodeType = jsonArray[nodeIndex].type;
                if (this.nodeType === "unit") {
                    this.nodeTitle = this.trimValue(this.syllabusForm.value.unitName);
                    this.nodeDescription = this.trimValue(this.syllabusForm.value.unitDescription);
                    jsonArray[nodeIndex].text = this.nodeTitle;
                    data = {
                        "id": this.nodeId,
                        "name": this.nodeTitle,
                        "description": this.nodeDescription,
                        "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["EDITED"],
                        "objective": "",
                        "orderNumber": 0,
                        "status": null,
                        "fullName": ""
                    };
                    arrayDetails = jsonArray[nodeIndex];
                    arrayDetails.data = data;
                }
                else if (this.nodeType === "lesson") {
                    this.nodeTitle = this.trimValue(this.syllabusForm.value.lessonName);
                    this.nodeDescription = this.trimValue(this.syllabusForm.value.lessonObjective);
                    jsonArray[nodeIndex].text = this.nodeTitle;
                    data = {
                        "id": this.nodeId,
                        "name": this.nodeTitle,
                        "objective": this.nodeDescription,
                        "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["EDITED"],
                        "description": "",
                        "orderNumber": 0,
                        "status": null,
                        "fullName": "",
                        "curriculumId": null,
                        "grade": null
                    };
                    arrayDetails = jsonArray[nodeIndex];
                    arrayDetails.data = data;
                }
                this.validateNode = false;
            }
            else if (this.nodeOperationType === "delete") {
                this.nodeType = jsonArray[nodeIndex].type;
                if (this.nodeType === "unit") {
                    data = {
                        "id": this.nodeId,
                        "name": this.nodeTitle,
                        "description": this.nodeDescription,
                        "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["DELETED"],
                        "objective": "",
                        "orderNumber": 0,
                        "status": null,
                        "fullName": "",
                        "curriculumId": null,
                        "grade": null
                    };
                    arrayDetails = jsonArray[nodeIndex];
                    arrayDetails.data = data;
                    arrayDetails.type = 'unit';
                    jsonArray[nodeIndex].icon = "fa fa-trash";
                    //Update a child node status
                    if (treeCallback.is_parent(selectedNodeID) === true) {
                        this.getChildrenDOM(selectedNodeID, jsonArray);
                    }
                }
                else if (this.nodeType === "lesson") {
                    data = {
                        "id": this.nodeId,
                        "name": this.nodeTitle,
                        "objective": this.nodeDescription,
                        "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["DELETED"],
                        "description": "",
                        "orderNumber": 0,
                        "status": null,
                        "fullName": "",
                        "curriculumId": null,
                        "grade": null
                    };
                    arrayDetails = jsonArray[nodeIndex];
                    arrayDetails.data = data;
                    arrayDetails.type = 'lesson';
                    jsonArray[nodeIndex].icon = "fa fa-trash";
                }
                this.validateNode = false;
            }
            this.pluginService.jsTree("#buildTree", jsonArray, true);
            this.changeNodeStatus(jsonArray);
            treeCallback.deselect_all();
            this.nodeType = "";
            this.enableNodeOperation = false;
            this.closeUnitAndLessonModal();
            this.resetFormValues();
        }
        if (this.syllabusForm.invalid) {
            this.validateNodeForm = true;
            return;
        }
    };
    //Delete node method
    SubjectUpdateComponent.prototype.deleteNode = function () {
        this.nodeOperationType = "delete";
        this.saveNode();
    };
    //Get children DOM
    SubjectUpdateComponent.prototype.getChildrenDOM = function (selectedNode, jsonArray) {
        var treeCallBack, childrenDOM, childDOM, lastChildDOM, subChildDOM, i, j, k, l, childrenIDs1 = [], childrenIDs2 = [], childrenIDs3 = [], childrenIDs4 = [], childrenIDs = [];
        treeCallBack = $("#buildTree").jstree(true);
        childrenDOM = treeCallBack.get_children_dom(selectedNode);
        for (i = 0; i < childrenDOM.length; i++) {
            childrenIDs1.push({ "id": childrenDOM[i].id });
            if (treeCallBack.is_parent(childrenIDs1[i]) === true) {
                childDOM = treeCallBack.get_children_dom(childrenIDs1[i]);
                for (j = 0; j < childDOM.length; j++) {
                    childrenIDs2.push({ "id": childDOM[j].id });
                    if (treeCallBack.is_parent(childrenIDs2[j]) === true) {
                        subChildDOM = treeCallBack.get_children_dom(childrenIDs2[j]);
                        for (k = 0; k < subChildDOM.length; k++) {
                            childrenIDs3.push({ "id": subChildDOM[k].id });
                            if (treeCallBack.is_parent(childrenIDs3[k]) === true) {
                                lastChildDOM = treeCallBack.get_children_dom(childrenIDs3[k]);
                                for (l = 0; l < lastChildDOM.length; l++) {
                                    childrenIDs4.push({ "id": lastChildDOM[l].id });
                                    this.updateDeleteStatus(childrenIDs4, jsonArray);
                                }
                            }
                            this.updateDeleteStatus(childrenIDs3, jsonArray);
                        }
                    }
                    this.updateDeleteStatus(childrenIDs2, jsonArray);
                }
            }
        }
        this.updateDeleteStatus(childrenIDs1, jsonArray);
        this.updatedJSONTree = jsonArray;
    };
    //Update delete status
    SubjectUpdateComponent.prototype.updateDeleteStatus = function (childrenIDs, jsonArray) {
        var k, nodeIndex, nodeType, data, childrenIDs;
        for (k = 0; k < childrenIDs.length; k++) {
            nodeIndex = jsonArray.findIndex(function (item) { return item.id === childrenIDs[k].id; });
            nodeType = jsonArray[nodeIndex].type;
            if (nodeType === "unit") {
                data = {
                    "id": this.nodeId,
                    "name": this.nodeTitle,
                    "description": this.nodeDescription,
                    "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["DELETED"],
                    "objective": "",
                    "orderNumber": 0,
                    "status": null,
                    "fullName": "",
                    "curriculumId": null,
                    "grade": null
                };
                jsonArray[nodeIndex].data = data;
                jsonArray[nodeIndex].type = 'unit';
                jsonArray[nodeIndex].icon = "fa fa-trash";
            }
            else {
                data = {
                    "id": this.nodeId,
                    "name": this.nodeTitle,
                    "objective": this.nodeDescription,
                    "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["DELETED"],
                    "description": "",
                    "orderNumber": 0,
                    "status": null,
                    "fullName": "",
                    "curriculumId": null,
                    "grade": null
                };
                jsonArray[nodeIndex].data = data;
                jsonArray[nodeIndex].type = 'lesson';
                jsonArray[nodeIndex].icon = "fa fa-trash";
            }
        }
    };
    //Generate JSON tree on drag and drop
    SubjectUpdateComponent.prototype.generateJSONTreeOnDragAndDrop = function () {
        var localObj = this;
        $(document).on('dnd_stop.vakata', function (e, data) {
            setTimeout(function () {
                var json = $("#buildTree").jstree(true).get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
                localObj.updateJSONTreeWithOrderNum(json);
            }, 100);
        });
    };
    SubjectUpdateComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onSaveSuccess(res); }, function (ErrRes) { return _this.onSaveError(ErrRes); });
    };
    SubjectUpdateComponent.prototype.saveAsDraft = function () {
        this.updatedJSONTree[0].data.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["DRAFT"];
        this.saveGeneralSubject();
    };
    SubjectUpdateComponent.prototype.saveAndPublish = function () {
        this.updatedJSONTree[0].data.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["ACTIVE"];
        this.saveGeneralSubject();
    };
    SubjectUpdateComponent.prototype.saveGeneralSubject = function () {
        this.subscribeToSaveResponse(this.subjectService.saveSubject(this.createSubjectForm()));
    };
    SubjectUpdateComponent.prototype.onSaveSuccess = function (res) {
        this.pluginService.alertMessage("General subject saved successfully", "success");
        this.previousUrl();
        this.resetFormValues();
        this.subjectForm.reset();
    };
    SubjectUpdateComponent.prototype.onSaveError = function (res) {
        this.pluginService.alertMessage("Could not save, please contact admin", "error");
    };
    SubjectUpdateComponent.prototype.createSubjectForm = function () {
        return this.updatedJSONTree;
    };
    //update JSON array with order number 
    SubjectUpdateComponent.prototype.updateJSONTreeWithOrderNum = function (json) {
        this.updatedJSONTree = [];
        this.updatedJSONTree = json;
        if (this.updatedJSONTree[0].type === "unit" || this.updatedJSONTree[0].type === "lesson") {
            this.pluginService.alertMessage("More than one root element is not allowed, please remove the additional root element and proceed", "error");
            this.validateNode = true;
        }
        else if (this.updatedJSONTree[0].type === "root") {
            this.validateNode = false;
        }
        for (var i = 0; i < this.updatedJSONTree.length; i++) {
            this.updatedJSONTree[i].data.orderNumber = i;
            //Remove unwanted objects (for api call) from the JSON tree
            delete this.updatedJSONTree[i].state;
            delete this.updatedJSONTree[i].a_attr;
            delete this.updatedJSONTree[i].li_attr;
            if ((this.updatedJSONTree[i].type !== "root") && (this.updatedJSONTree[i].parent === "#")) {
                this.pluginService.alertMessage("More than one root element is not allowed, please remove the additional root element and proceed", "error");
                this.validateNode = true;
            }
        }
        this.pluginService.jsTree("#afterChangeTree", this.updatedJSONTree, false);
    };
    //If new node is created and edited , status will be created only 
    //If new node is created and deleted , remove an element from the updated array
    SubjectUpdateComponent.prototype.changeNodeStatus = function (json) {
        var selectedNodeID, treeCallback, updatedJson;
        for (var i = 0; i < json.length; i++)
            if (json[i].data.id === undefined) {
                if (json[i].data.editStatus === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["EDITED"]) {
                    json[i].data.editStatus = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["CREATED"];
                }
                else if (json[i].data.editStatus === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["DELETED"]) {
                    treeCallback = $('#buildTree').jstree(true);
                    selectedNodeID = treeCallback.get_selected()[0];
                    treeCallback.delete_node($('#' + selectedNodeID));
                    updatedJson = $("#buildTree").jstree(true).get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
                    json = updatedJson;
                }
            }
        this.updateJSONTreeWithOrderNum(json);
    };
    SubjectUpdateComponent.prototype.cancelNode = function () {
        this.resetFormValues();
    };
    SubjectUpdateComponent.prototype.onError = function (errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    };
    SubjectUpdateComponent.prototype.toggleTreeNodes = function () {
        this.enableExpandNode = !this.enableExpandNode;
        if (this.enableExpandNode) {
            this.pluginService.openJsTreeAllNodes("#buildTree");
        }
        else {
            this.pluginService.closeJsTreeAllNodes("#buildTree");
        }
    };
    SubjectUpdateComponent.prototype.onBack = function () {
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
    SubjectUpdateComponent.prototype.previousUrl = function () {
        this.router.navigateByUrl('/subject');
    };
    SubjectUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./subject-update.component.html */ "./src/app/subject/subject-update.component.html"),
            providers: [_subject_service__WEBPACK_IMPORTED_MODULE_6__["SubjectService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
            _subject_service__WEBPACK_IMPORTED_MODULE_6__["SubjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], SubjectUpdateComponent);
    return SubjectUpdateComponent;
}());



/***/ }),

/***/ "./src/app/subject/subject.module.ts":
/*!*******************************************!*\
  !*** ./src/app/subject/subject.module.ts ***!
  \*******************************************/
/*! exports provided: SubjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectModule", function() { return SubjectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _subject_route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subject.route */ "./src/app/subject/subject.route.ts");
/* harmony import */ var _subject_manage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./subject-manage.component */ "./src/app/subject/subject-manage.component.ts");
/* harmony import */ var _subject_update_publish_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./subject-update-publish.component */ "./src/app/subject/subject-update-publish.component.ts");
/* harmony import */ var _subject_delete_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./subject-delete.component */ "./src/app/subject/subject-delete.component.ts");
/* harmony import */ var _subject_update_unpublish_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./subject-update-unpublish.component */ "./src/app/subject/subject-update-unpublish.component.ts");
/* harmony import */ var _subject_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./subject-create.component */ "./src/app/subject/subject-create.component.ts");
/* harmony import */ var _subject_update_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./subject-update.component */ "./src/app/subject/subject-update.component.ts");
/* harmony import */ var _subject_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./subject-details.component */ "./src/app/subject/subject-details.component.ts");
















var SubjectModule = /** @class */ (function () {
    function SubjectModule() {
    }
    SubjectModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_subject_route__WEBPACK_IMPORTED_MODULE_8__["subjectRoute"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["NgJhipsterModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ],
            declarations: [
                _subject_manage_component__WEBPACK_IMPORTED_MODULE_9__["SubjectManageComponent"],
                _subject_create_component__WEBPACK_IMPORTED_MODULE_13__["SubjectCreateComponent"],
                _subject_update_component__WEBPACK_IMPORTED_MODULE_14__["SubjectUpdateComponent"],
                _subject_details_component__WEBPACK_IMPORTED_MODULE_15__["SubjectDetailsComponent"],
                _subject_delete_component__WEBPACK_IMPORTED_MODULE_11__["SubjectDeleteComponent"],
                _subject_update_publish_component__WEBPACK_IMPORTED_MODULE_10__["SubjectPublishComponent"],
                _subject_update_unpublish_component__WEBPACK_IMPORTED_MODULE_12__["SubjectUnpublishComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SubjectModule);
    return SubjectModule;
}());



/***/ }),

/***/ "./src/app/subject/subject.route.ts":
/*!******************************************!*\
  !*** ./src/app/subject/subject.route.ts ***!
  \******************************************/
/*! exports provided: SubjectResolve, SubjectWithTreeResolve, subjectRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectResolve", function() { return SubjectResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectWithTreeResolve", function() { return SubjectWithTreeResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subjectRoute", function() { return subjectRoute; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _subject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subject.service */ "./src/app/subject/subject.service.ts");
/* harmony import */ var _shared_model_content_subject_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/model/content/subject.model */ "./src/app/shared/model/content/subject.model.ts");
/* harmony import */ var _subject_update_publish_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subject-update-publish.component */ "./src/app/subject/subject-update-publish.component.ts");
/* harmony import */ var _subject_manage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subject-manage.component */ "./src/app/subject/subject-manage.component.ts");
/* harmony import */ var _subject_delete_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./subject-delete.component */ "./src/app/subject/subject-delete.component.ts");
/* harmony import */ var _subject_update_unpublish_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./subject-update-unpublish.component */ "./src/app/subject/subject-update-unpublish.component.ts");
/* harmony import */ var _subject_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./subject-create.component */ "./src/app/subject/subject-create.component.ts");
/* harmony import */ var _subject_update_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./subject-update.component */ "./src/app/subject/subject-update.component.ts");
/* harmony import */ var _subject_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./subject-details.component */ "./src/app/subject/subject-details.component.ts");














var SubjectResolve = /** @class */ (function () {
    function SubjectResolve(service) {
        this.service = service;
    }
    SubjectResolve.prototype.resolve = function (route, state) {
        var id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.getSubjectBySubjectId(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (response) { return response.ok; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (subject) { return subject.body; }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _shared_model_content_subject_model__WEBPACK_IMPORTED_MODULE_6__["Subject"]());
    };
    SubjectResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"]])
    ], SubjectResolve);
    return SubjectResolve;
}());

var SubjectWithTreeResolve = /** @class */ (function () {
    function SubjectWithTreeResolve(service) {
        this.service = service;
    }
    SubjectWithTreeResolve.prototype.resolve = function (route, state) {
        var id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.getSubjectTreeBySubjectId(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (response) { return response.ok; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (subject) { return subject.body; }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _shared_model_content_subject_model__WEBPACK_IMPORTED_MODULE_6__["Subject"]());
    };
    SubjectWithTreeResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"]])
    ], SubjectWithTreeResolve);
    return SubjectWithTreeResolve;
}());

var subjectRoute = [
    {
        path: '',
        component: _subject_manage_component__WEBPACK_IMPORTED_MODULE_8__["SubjectManageComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Manage subjects'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: 'create',
        component: _subject_create_component__WEBPACK_IMPORTED_MODULE_11__["SubjectCreateComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Create new subject'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/edit',
        component: _subject_update_component__WEBPACK_IMPORTED_MODULE_12__["SubjectUpdateComponent"],
        resolve: {
            subject: SubjectWithTreeResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Edit subject',
            action: 'edit'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/view',
        component: _subject_details_component__WEBPACK_IMPORTED_MODULE_13__["SubjectDetailsComponent"],
        resolve: {
            subject: SubjectWithTreeResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'View subject'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/delete',
        component: _subject_delete_component__WEBPACK_IMPORTED_MODULE_9__["SubjectDeleteComponent"],
        resolve: {
            subject: SubjectResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Delete subject'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/publish',
        component: _subject_update_publish_component__WEBPACK_IMPORTED_MODULE_7__["SubjectPublishComponent"],
        resolve: {
            subject: SubjectResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Publish subject',
            action: 'publish'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/unpublish',
        component: _subject_update_unpublish_component__WEBPACK_IMPORTED_MODULE_10__["SubjectUnpublishComponent"],
        resolve: {
            subject: SubjectResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Unpublish subject',
            action: 'unpublish'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    }
];


/***/ }),

/***/ "./src/app/subject/subject.service.ts":
/*!********************************************!*\
  !*** ./src/app/subject/subject.service.ts ***!
  \********************************************/
/*! exports provided: SubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectService", function() { return SubjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");





var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');
var SubjectService = /** @class */ (function () {
    function SubjectService(http) {
        this.http = http;
        this.subjectResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/curriculum-subjects';
        this.subjectResourceUrlWithTree = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/curriculum-subjects/subject-tree';
        this.subjectResourceUrlSearch = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/curriculum-subjects/search';
    }
    SubjectService.prototype.getSubjectBySubjectId = function (id) {
        return this.http.get(this.subjectResourceUrl + "/" + id, { observe: 'response' });
    };
    SubjectService.prototype.updateSubjectStatus = function (generalSubject) {
        return this.http.put(this.subjectResourceUrl, generalSubject, { observe: 'response' });
    };
    SubjectService.prototype.delete = function (id) {
        return this.http.delete(this.subjectResourceUrl + "/" + id, { observe: 'response' });
    };
    SubjectService.prototype.saveSubject = function (generalSubject) {
        return this.http.post(this.subjectResourceUrlWithTree, generalSubject, { headers: headers, observe: 'response' });
    };
    SubjectService.prototype.getSubjectByCurriculumIdAndGradeId = function (curriculumId, gradeId, status) {
        var reqJSON;
        if (status === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_4__["ACTIVE"]) {
            reqJSON = {
                "curriculumId": curriculumId,
                "grade": gradeId,
                "status": status
            };
        }
        else {
            reqJSON = {
                "curriculumId": curriculumId,
                "grade": gradeId
            };
        }
        return this.http.post(this.subjectResourceUrlSearch, reqJSON, { observe: 'response' });
    };
    SubjectService.prototype.getSubjectTreeBySubjectId = function (id) {
        return this.http.get(this.subjectResourceUrlWithTree + "/" + id, { observe: 'response' });
    };
    SubjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SubjectService);
    return SubjectService;
}());



/***/ })

}]);
//# sourceMappingURL=subject-subject-module.js.map