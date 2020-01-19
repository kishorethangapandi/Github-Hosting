(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["general-subject-general-subject-module"],{

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

/***/ "./src/app/general-subject/general-subject-create.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/general-subject/general-subject-create.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 my-3 justify-content-between d-flex\">\n  <div class=\"btn btn-danger\" (click)=\"onBack()\">\n    <i class=\"fa fa-chevron-left mr-2\"></i> Back\n  </div>\n</div>\n\n<div class=\"row-flex stepper\">\n  <div class=\"nav flex-column nav-pills stepper-left\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\n    <a class=\"nav-link active\" id=\"createSubject-tab\" data-toggle=\"pill\" href=\"#createSubject\" role=\"tab\"\n      aria-controls=\"createSubject\" aria-selected=\"false\">\n      <span class=\"index-round\">\n        Step 1\n      </span>\n      <span class=\"step-label\">\n        Create subject\n      </span>\n    </a>\n    <a class=\"nav-link disabled\" id=\"createConcept-tab\" data-toggle=\"pill\" href=\"#createConcept\" role=\"tab\"\n      aria-controls=\"createConcept\" aria-selected=\"false\">\n      <span class=\"index-round\">\n        Step 2\n      </span>\n      <span class=\"step-label\">\n        Create concepts and topics\n      </span>\n    </a>\n    <a class=\"nav-link disabled\" id=\"confirmation-tab\" data-toggle=\"pill\" href=\"#confirmation\" role=\"tab\"\n      aria-controls=\"confirmation\" aria-selected=\"false\">\n      <span class=\"index-round\">\n        Step 3\n      </span>\n      <span class=\"step-label\">\n        Summary\n      </span>\n    </a>\n  </div>\n  <div class=\"stepper-right tab-content p-3\" id=\"v-pills-tabContent\">\n\n    <div class=\"tab-pane fade show active\" id=\"createSubject\" role=\"tabpanel\" aria-labelledby=\"createSubject-tab\">\n\n      <form [formGroup]=\"generalSubjectForm\">\n        <div class=\"form-group mb-2 col-md-6\">\n          <label for=\"subjectName\" class=\"col-form-label\">Subject name</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Enter subject name (min length: 3, max length: 50)\"\n            inputRestriction=\"alphabetsWithSpace\" formControlName=\"generalSubjectName\" maxlength=\"50\" minlength=\"3\" />\n          <div class=\"text-muted font-15 my-2\">Allowed\n            characters - Alphabets</div>\n        </div>\n        <div class=\"form-group mb-2 col-md-6\">\n          <label for=\"description\" class=\" col-form-label\">Description\n            <span class=\"text-muted\">(Optional)</span>\n          </label>\n          <textarea class=\"form-control description-form\" name=\"description\"\n            placeholder=\"Enter description  (min length: 3, max length: 250)\"\n            formControlName=\"generalSubjectDescription\" maxlength=\"250\" minlength=\"3\"></textarea>\n          <div class=\"text-muted font-15 my-2\">\n            Allowed characters - Alphabets, Numbers and\n            Special characters\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12 d-flex justify-content-end\">\n            <button class=\"btn btn-success next-step\" [disabled]=\"validateSubjectForm\"\n              (click)=\"loadGeneralSubjectTree()\">\n              Next\n              <i class=\"fa fa-arrow-right ml-2\"></i>\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n\n    <div class=\"tab-pane fade\" id=\"createConcept\" role=\"tabpanel\" aria-labelledby=\"createConcept-tab\">\n      <div class=\"row\">\n        <div class=\"col-xxl-4 p-2\">\n          <div class=\"d-flex justify-content-start mb-2\">\n            <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\" *ngIf=\"updatedJSONTree.length > 1\">\n              <i class=\"fa fa-clone mr-2\"></i>\n              <span *ngIf=\"enableExpandNode === false\">\n                Expand all\n              </span>\n              <span *ngIf=\"enableExpandNode === true\">\n                Collapse all\n              </span>\n            </div>\n          </div>\n          <div id=\"buildTree\"></div>\n        </div>\n        <div class=\"col-xxl-8\">\n          <div class=\"w-100 d-flex justify-content-end align-self-start mb-2\" *ngIf=\"enableNodeOperation\">\n            <div class=\"btn btn-primary mr-2\" *ngIf=\"nodeType !== 'topic'\" (click)=\"createNode()\">\n              <i class=\"fa fa-plus-circle mr-2\"></i>Add new\n              concept / topic\n            </div>\n            <div class=\"btn btn-success mr-2\" (click)=\"editNode()\" *ngIf=\"enableEditNodeOperation\">\n              <i class=\"fa fa-edit mr-2\"></i>Edit {{nodeType}}\n            </div>\n            <div class=\"btn btn-danger\" (click)=\"deleteNode()\" *ngIf=\"nodeType !== 'root'\">\n              <i class=\"fa fa-trash mr-2\"></i> Delete {{nodeType}}\n            </div>\n          </div>\n          <div class=\"w-100 p-4\">\n            <div *ngIf=\"nodeType === 'concept'\">\n              <p><b>Concept name :</b> {{nodeTitle}} </p>\n              <p><b>Concept description :</b> {{nodeDescription}}</p>\n            </div>\n            <div *ngIf=\"nodeType === 'topic'\">\n              <p><b>Topic name :</b> {{nodeTitle}}</p>\n              <p><b>Topic description :</b> {{nodeDescription}}</p>\n              <p><b>Curriculum :</b> {{curriculum}}</p>\n              <p><b>Grade :</b> {{grade}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"my-2 rounded p-3 border-danger\" *ngIf=\"enableInstruction\">\n        <p class=\"text-danger\"><b>NOTE</b></p>\n        <p class=\"text-primary\">\n          <i class=\"fa fa-check text-danger mr-2\"></i> Select a subject node and do your actions.\n        </p>\n        <p class=\"text-primary\">\n          <i class=\"fa fa-check mr-2 text-danger\"></i> Add atleast one concept or one topic for general subject\n          creation.\n        </p>\n        <p class=\"text-primary\">\n          <i class=\"fa fa-check mr-2 text-danger\"></i> Only one root node is allowed, you can't drag and drop on top of\n          root node\n        </p>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-12 d-flex justify-content-end\">\n          <div class=\"btn btn-danger prev-step\">\n            <i class=\"fa fa-arrow-left mr-2\"></i> Previous\n          </div>\n          <button class=\"btn btn-success ml-2 next-step\" [disabled]=\"validateNode\">\n            Next\n            <i class=\"fa fa-arrow-right ml-2\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"tab-pane fade\" id=\"confirmation\" role=\"tabpanel\" aria-labelledby=\"confirmation-tab\">\n\n      <div class=\"card-body\">\n        <div class=\"row mb-3\">\n          <div class=\"col-md-6\">\n            <h5>Before changes</h5>\n            <div id=\"beforeChangeTree\"></div>\n          </div>\n          <div class=\"col-md-6\">\n            <h5>After changes</h5>\n            <div id=\"afterChangeTree\"></div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-12 d-flex justify-content-end\">\n          <span class=\"btn btn-danger mr-2 prev-step\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>\n            Previous\n          </span>\n          <div class=\"btn btn-info mr-2\" (click)=\"saveAsDraft()\">\n            <i class=\"fa fa-save mr-2\"></i>\n            Save as draft\n          </div>\n          <div class=\"btn btn-success\" (click)=\"saveAndPublish()\">\n            <i class=\"fe fe-file-plus mr-2\"></i>\n            Save and publish\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"generalSubjectEditModal\">\n  <div class=\"modal-dialog modal-full-height modal-right modal-notify\" role=\"document\">\n    <div class=\"modal-content\" [formGroup]=\"conceptAndTopicForm\">\n      <div class=\"modal-header bg-warning d-flex align-items-center\">\n        <h5 class=\"modal-title text-white\">\n          {{modalTitleName}} concept / topic\n        </h5>\n        <div class=\"close btn btn-xl\" (click)=\"closeWithOutSavingNode()\">\n          <i class=\"fa fa-times\"></i>\n        </div>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group mb-2\">\n          <label class=\"col-form-label\">Type\n          </label>\n          <ng-select [items]=\"nodeTypes\" [disabled]=\"disableDropdown\" [ngModelOptions]=\"{standalone: true}\"\n            bindLabel=\"name\" placeholder=\"Select node type\" [(ngModel)]=\"selectedNodeType\" (change)=\"onNodeTypeChange()\"\n            [searchable]=\"false\">\n          </ng-select>\n        </div>\n        <div *ngIf=\"nodeType === 'concept'\">\n          <div class=\"form-group mb-2\">\n            <label class=\"col-form-label\">Concept\n              name\n            </label>\n            <input type=\"text\" placeholder=\"Enter concept name (minlength: 3 and maxlength: 75)\" class=\"form-control\"\n              formControlName=\"conceptName\" inputRestriction=\"alphabetsNumbersWithMinus\" minlength=\"3\" maxlength=\"75\"\n              [ngClass]=\"{ 'is-invalid': validateNodeForm && modalFormControl.conceptName.errors }\">\n            <div class=\"text-muted font-15 my-2\">\n              Allowed characters - Alphabets, Numbers and Special character (-)\n            </div>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"col-form-label\">Concept\n              description <span class=\"text-muted\">(Optional)</span>\n            </label>\n            <textarea class=\"form-control description-form\"\n              placeholder=\"Enter description (minlength: 3 and maxlength: 250)\" formControlName=\"conceptDescription\"\n              minlength=\"3\" maxlength=\"250\"\n              [ngClass]=\"{ 'is-invalid': validateNodeForm && modalFormControl.conceptDescription.errors }\"></textarea>\n            <div class=\"text-muted font-15 my-2\">\n              Allowed characters - Alphabets, Numbers and Special characters\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"nodeType === 'topic'\">\n          <div class=\"form-group mb-2\">\n            <label class=\"col-form-label\">Topic\n              name\n            </label>\n            <input type=\"text\" placeholder=\"Enter topic name (minlength: 3 and maxlength: 75)\" class=\"form-control\"\n              formControlName=\"topicName\" inputRestriction=\"alphabetsNumbersWithMinus\" minlength=\"3\" maxlength=\"75\"\n              [ngClass]=\"{ 'is-invalid': validateNodeForm && modalFormControl.topicName.errors }\">\n            <div class=\"text-muted font-15 my-2\">\n              Allowed characters - Alphabets, Numbers and Special character (-)\n            </div>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"col-form-label\">Topic\n              description <span class=\"text-muted\">(Optional)</span>\n            </label>\n            <textarea class=\"form-control description-form\"\n              placeholder=\"Enter description(minlength: 3 and maxlength: 250)\" formControlName=\"topicDescription\"\n              minlength=\"3\" maxlength=\"250\"\n              [ngClass]=\"{ 'is-invalid': validateNodeForm && modalFormControl.topicDescription.errors }\"></textarea>\n            <div class=\"text-muted font-15 my-2\">\n              Allowed characters - Alphabets, Numbers and Special characters\n            </div>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"col-form-label\">Primary\n              applicable curriculum and\n              grade\n            </label>\n            <div class=\"form-row pr-0 mr-0\">\n              <div class=\"col-md-6 mb-2\">\n                <ng-select [items]=\"curriculumList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"acronym\"\n                  placeholder=\"Select curriculum\" [(ngModel)]=\"selectedCurriculum\" (change)=\"onCurriculumChange()\">\n                </ng-select>\n              </div>\n              <div class=\"col-md-6 mb-2\">\n                <ng-select [items]=\"grades\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                  placeholder=\"Select grade\" [(ngModel)]=\"selectedGrade\">\n                </ng-select>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\" *ngIf=\"enableModalOperation\">\n        <div class=\"btn btn-danger\" (click)=\"resetConceptAndTopicFormValues()\">\n          <i class=\"fa fa-times mr-2\"></i>\n          Reset\n        </div>\n        <button class=\"btn btn-success\" (click)=\"saveNode()\" [disabled]=\"validateNodeForm\">\n          <i class=\"fa fa-save mr-2\"></i>\n          Save\n        </button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/general-subject/general-subject-create.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/general-subject/general-subject-create.component.ts ***!
  \*********************************************************************/
/*! exports provided: GeneralSubjectCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSubjectCreateComponent", function() { return GeneralSubjectCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _general_subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general-subject.service */ "./src/app/general-subject/general-subject.service.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../curriculum/curriculum.service */ "./src/app/curriculum/curriculum.service.ts");









var GeneralSubjectCreateComponent = /** @class */ (function () {
    function GeneralSubjectCreateComponent(router, formBuilder, pluginService, curriculumService, generalSubjectService, activatedRoute, commonService, changeDetectRef) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.curriculumService = curriculumService;
        this.generalSubjectService = generalSubjectService;
        this.activatedRoute = activatedRoute;
        this.commonService = commonService;
        this.changeDetectRef = changeDetectRef;
        this.curriculumList = [];
        this.conceptAndTopicTree = [];
        this.updatedJSONTree = [];
        this.nodeTypes = [];
        this.grades = [];
        this.validateSubjectForm = true;
        this.validateNode = true;
        this.validateNodeForm = true;
        this.enableExpandNode = false;
    }
    GeneralSubjectCreateComponent.prototype.getNodeTypeList = function () {
        var _this = this;
        this.commonService.getGeneralDataList().subscribe(function (nodeTypeData) {
            _this.nodeTypes = nodeTypeData.generalSubject;
        });
    };
    GeneralSubjectCreateComponent.prototype.ngOnInit = function () {
        this.pluginService.sideMenuToggle();
        this.createGeneralSubjectGroup();
        this.pluginService.stepper();
        this.getCurriculumList();
        this.getNodeTypeList();
    };
    GeneralSubjectCreateComponent.prototype.createGeneralSubjectGroup = function () {
        this.generalSubjectForm = this.formBuilder.group({
            generalSubjectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            generalSubjectDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])
        });
        this.conceptAndTopicForm = this.formBuilder.group({
            conceptName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            conceptDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]),
            topicName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            topicDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])
        });
    };
    Object.defineProperty(GeneralSubjectCreateComponent.prototype, "formControl", {
        get: function () { return this.generalSubjectForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GeneralSubjectCreateComponent.prototype, "modalFormControl", {
        get: function () { return this.conceptAndTopicForm.controls; },
        enumerable: true,
        configurable: true
    });
    GeneralSubjectCreateComponent.prototype.getCurriculumList = function () {
        var _this = this;
        this.curriculumService.getStandardCurriculums().subscribe(function (res) { return _this.assignResponseToList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    GeneralSubjectCreateComponent.prototype.assignResponseToList = function (data) {
        this.curriculumList = data;
    };
    GeneralSubjectCreateComponent.prototype.validateGeneralSubjectForm = function () {
        this.subjectName = this.trimValue(this.generalSubjectForm.value.generalSubjectName);
        this.subjectDescription = this.trimValue(this.generalSubjectForm.value.generalSubjectDescription);
        if (this.subjectName === "" || this.subjectName === undefined || this.subjectName === null) {
            this.validateSubjectForm = true;
        }
        else {
            this.validateSubjectForm = false;
        }
        if (this.generalSubjectForm.invalid) {
            this.validateSubjectForm = true;
        }
        if (this.generalSubjectForm.valid) {
            this.validateSubjectForm = false;
        }
    };
    GeneralSubjectCreateComponent.prototype.loadGeneralSubjectTree = function () {
        if (this.generalSubjectForm.valid) {
            this.conceptAndTopicTree = [
                {
                    "text": this.subjectName,
                    "icon": "fa fa-book",
                    "data": {
                        "name": this.subjectName,
                        "description": this.subjectDescription,
                        "status": null,
                        "curriculumId": 0,
                        "grade": 0,
                        "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["CREATED"]
                    },
                    "parent": "#",
                    "type": "root"
                }
            ];
            this.pluginService.jsTree("#buildTree", this.conceptAndTopicTree, true);
            this.pluginService.jsTree("#beforeChangeTree", this.conceptAndTopicTree, false);
            this.enableInstruction = true;
        }
        if (this.generalSubjectForm.invalid) {
            return;
        }
    };
    GeneralSubjectCreateComponent.prototype.ngAfterViewInit = function () {
        this.nodeOnSelection();
        this.generateJSONTreeOnDragAndDrop();
    };
    GeneralSubjectCreateComponent.prototype.onNodeTypeChange = function () {
        var validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(75)];
        if (this.selectedNodeType) {
            this.nodeType = this.selectedNodeType.name;
            if (this.nodeType === 'concept') {
                this.enableModalOperation = true;
                this.conceptAndTopicForm.addControl('conceptName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', validators));
                this.conceptAndTopicForm.addControl('topicName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''));
                this.resetConceptAndTopicFormValues();
            }
            else if (this.nodeType === 'topic') {
                this.enableModalOperation = true;
                this.conceptAndTopicForm.addControl('topicName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', validators));
                this.conceptAndTopicForm.addControl('conceptName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''));
                this.resetConceptAndTopicFormValues();
            }
        }
    };
    GeneralSubjectCreateComponent.prototype.onCurriculumChange = function () {
        var gradesApplicableFrom, gradesApplicableTo;
        if (this.selectedCurriculum === null || this.selectedCurriculum === undefined) {
            gradesApplicableFrom = null;
            gradesApplicableTo = null;
        }
        else {
            gradesApplicableFrom = this.selectedCurriculum.gradesApplicableFrom;
            gradesApplicableTo = this.selectedCurriculum.gradesApplicableTo;
            this.generateGradeList(gradesApplicableFrom, gradesApplicableTo);
        }
    };
    GeneralSubjectCreateComponent.prototype.generateGradeList = function (min, max) {
        this.grades = [];
        for (var i = min; i <= max; i++) {
            this.grades.push({
                "id": i,
                "name": i
            });
        }
        return this.grades;
    };
    //Reset all form values
    GeneralSubjectCreateComponent.prototype.resetConceptAndTopicFormValues = function () {
        this.conceptAndTopicForm.reset();
        this.selectedNodeType = null;
        this.selectedCurriculum = null;
        this.selectedGrade = null;
    };
    GeneralSubjectCreateComponent.prototype.validateConceptAndTopicForm = function () {
        var conceptName, topicName;
        conceptName = this.trimValue(this.conceptAndTopicForm.value.conceptName);
        topicName = this.trimValue(this.conceptAndTopicForm.value.topicName);
        if (this.nodeType === 'concept') {
            if (conceptName === "" || conceptName === undefined || conceptName === null) {
                this.validateNodeForm = true;
            }
            else {
                this.validateNodeForm = false;
            }
        }
        else if (this.nodeType === 'topic') {
            if (topicName === "" || topicName === undefined || topicName === null) {
                this.validateNodeForm = true;
            }
            else {
                this.validateNodeForm = false;
            }
        }
    };
    GeneralSubjectCreateComponent.prototype.ngAfterViewChecked = function () {
        //General Subject Form Validation
        this.validateGeneralSubjectForm();
        //Concept and topic form validation
        this.validateConceptAndTopicForm();
        this.changeDetectRef.detectChanges();
    };
    //Tree selection and change method call
    GeneralSubjectCreateComponent.prototype.nodeOnSelection = function () {
        var localThisObj = this;
        $('#buildTree').on('changed.jstree', function (e, data) {
            var i, j, curriculumId;
            for (i = 0, j = data.selected.length; i < j; i++) {
                localThisObj.nodeType = data.node.type;
                if (localThisObj.nodeType === "root") {
                    localThisObj.enableNodeOperation = true;
                    localThisObj.enableEditNodeOperation = false;
                }
                else if (localThisObj.nodeType === "concept") {
                    localThisObj.enableEditNodeOperation = true;
                    localThisObj.enableNodeOperation = true;
                    localThisObj.nodeTitle = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                    localThisObj.conceptAndTopicFormSetValues(localThisObj);
                }
                else if (localThisObj.nodeType === "topic") {
                    localThisObj.enableNodeOperation = true;
                    localThisObj.enableEditNodeOperation = true;
                    localThisObj.nodeTitle = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                    curriculumId = data.node.data.baseCurriculumId;
                    if (curriculumId === null) {
                        localThisObj.selectedCurriculum = null;
                        localThisObj.curriculum = null;
                    }
                    else {
                        localThisObj.curriculum = localThisObj.curriculumList.find(function (item) { return item.id === curriculumId; }).acronym;
                    }
                    localThisObj.grade = data.node.data.baseGrade;
                    localThisObj.conceptAndTopicFormSetValues(localThisObj);
                }
                else {
                    localThisObj.enableNodeOperation = false;
                    localThisObj.enableEditNodeOperation = false;
                }
            }
        });
    };
    //Concept and topic details form setvalues method
    GeneralSubjectCreateComponent.prototype.conceptAndTopicFormSetValues = function (Objectthis) {
        var nodeTypeIndex, curriculumIndex, gradeIndex, gradesApplicableFrom, gradesApplicableTo;
        nodeTypeIndex = this.nodeTypes.findIndex(function (item) { return item.name === Objectthis.nodeType; });
        this.selectedNodeType = this.nodeTypes[nodeTypeIndex];
        if (Objectthis.nodeType === "concept") {
            this.conceptAndTopicForm.setValue({
                conceptName: Objectthis.nodeTitle,
                conceptDescription: Objectthis.nodeDescription,
                topicName: "",
                topicDescription: ""
            });
        }
        else if (Objectthis.nodeType === "topic") {
            if (Objectthis.curriculum === null || Objectthis.curriculum === undefined) {
                this.selectedCurriculum = null;
                this.selectedGrade = null;
            }
            else {
                curriculumIndex = this.curriculumList.findIndex(function (item) { return item.acronym === Objectthis.curriculum; });
                this.selectedCurriculum = this.curriculumList[curriculumIndex];
                gradesApplicableFrom = this.curriculumList[curriculumIndex].gradesApplicableFrom;
                gradesApplicableTo = this.curriculumList[curriculumIndex].gradesApplicableTo;
                this.generateGradeList(gradesApplicableFrom, gradesApplicableTo);
                gradeIndex = this.grades.findIndex(function (item) { return item.name === Objectthis.grade; });
                this.selectedGrade = this.grades[gradeIndex];
            }
            this.conceptAndTopicForm.setValue({
                conceptName: "",
                conceptDescription: "",
                topicName: Objectthis.nodeTitle,
                topicDescription: Objectthis.nodeDescription
            });
        }
    };
    GeneralSubjectCreateComponent.prototype.openConceptAndTopicModal = function () {
        this.pluginService.showModalWindow("#generalSubjectEditModal");
    };
    GeneralSubjectCreateComponent.prototype.closeConceptAndTopicModal = function () {
        this.pluginService.hideModalWindow("#generalSubjectEditModal");
    };
    GeneralSubjectCreateComponent.prototype.closeWithOutSavingNode = function () {
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
                localthisObject.closeConceptAndTopicModal();
                localthisObject.disableNodeOperations();
            }
        });
    };
    GeneralSubjectCreateComponent.prototype.disableNodeOperations = function () {
        this.enableNodeOperation = false;
        this.nodeType = "";
        this.resetConceptAndTopicFormValues();
        var treeCallback = $('#buildTree').jstree(true);
        treeCallback.deselect_all();
    };
    //Create node method
    GeneralSubjectCreateComponent.prototype.createNode = function () {
        this.nodeOperationType = "create";
        this.modalTitleName = "Add new";
        this.openConceptAndTopicModal();
        this.resetConceptAndTopicFormValues();
        this.disableDropdown = false;
        this.enableModalOperation = false;
        this.nodeType = "";
    };
    //Edit node method
    GeneralSubjectCreateComponent.prototype.editNode = function () {
        this.nodeOperationType = "edit";
        this.modalTitleName = "Edit";
        this.disableDropdown = true;
        this.conceptAndTopicForm.patchValue({
            conceptName: this.nodeTitle,
            topicName: this.nodeTitle,
            conceptDescription: this.nodeDescription,
            topicDescription: this.nodeDescription
        });
        this.openConceptAndTopicModal();
        this.enableModalOperation = true;
    };
    //Save node method
    GeneralSubjectCreateComponent.prototype.saveNode = function () {
        if (this.conceptAndTopicForm.valid) {
            this.validateNodeForm = false;
            var newNodeArray, position, parent, treeCallback, jsonArray, nodeIndex, arrayDetails, nodeID, data, curriculum, grade;
            position = 'last';
            parent = $('#buildTree').jstree('get_selected')[0];
            treeCallback = $('#buildTree').jstree(true);
            jsonArray = treeCallback.get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
            nodeID = treeCallback.get_selected()[0];
            nodeIndex = jsonArray.findIndex(function (item) { return item.id === nodeID; });
            if (this.nodeOperationType === "create") {
                if (this.nodeType === "concept") {
                    this.nodeTitle = this.trimValue(this.conceptAndTopicForm.value.conceptName);
                    this.nodeDescription = this.trimValue(this.conceptAndTopicForm.value.conceptDescription);
                    newNodeArray = {
                        "text": this.nodeTitle,
                        "type": "concept",
                        "state": {
                            "opened": true,
                            "selected": false
                        },
                        "data": {
                            "name": this.nodeTitle,
                            "description": this.nodeDescription,
                            "orderNumber": 0,
                            "status": null,
                            "curriculumId": null,
                            "grade": null,
                            "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["CREATED"],
                            "baseCurriculumId": 0,
                            "baseGrade": 0,
                        }
                    };
                    jsonArray[nodeIndex].text = this.nodeTitle;
                    $('#buildTree').jstree().create_node(parent, newNodeArray, position);
                    jsonArray = treeCallback.get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
                }
                else if (this.nodeType === "topic") {
                    this.nodeTitle = this.trimValue(this.conceptAndTopicForm.value.topicName);
                    this.nodeDescription = this.trimValue(this.conceptAndTopicForm.value.topicDescription);
                    if (this.selectedCurriculum === null || this.selectedCurriculum === undefined) {
                        curriculum = null;
                    }
                    else {
                        curriculum = this.selectedCurriculum.id;
                    }
                    if (this.selectedGrade === null || this.selectedGrade === undefined) {
                        grade = null;
                    }
                    else {
                        grade = this.selectedGrade.id;
                    }
                    newNodeArray = {
                        "text": this.nodeTitle,
                        "type": "topic",
                        "state": {
                            "opened": true,
                            "selected": false
                        },
                        "data": {
                            "name": this.nodeTitle,
                            "description": this.nodeDescription,
                            "baseCurriculumId": curriculum,
                            "baseGrade": grade,
                            "orderNumber": 0,
                            "status": null,
                            "curriculumId": null,
                            "grade": null,
                            "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["CREATED"]
                        }
                    };
                    jsonArray[nodeIndex].text = this.nodeTitle;
                    $('#buildTree').jstree().create_node(parent, newNodeArray, position);
                    jsonArray = treeCallback.get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
                }
            }
            else if (this.nodeOperationType === "edit") {
                this.nodeType = jsonArray[nodeIndex].type;
                if (this.nodeType === "concept") {
                    this.nodeTitle = this.trimValue(this.conceptAndTopicForm.value.conceptName);
                    this.nodeDescription = this.trimValue(this.conceptAndTopicForm.value.conceptDescription);
                    jsonArray[nodeIndex].text = this.nodeTitle;
                    data = {
                        "name": this.nodeTitle,
                        "description": this.nodeDescription,
                        "orderNumber": 0,
                        "baseCurriculumId": 0,
                        "baseGrade": 0,
                        "status": null,
                        "curriculumId": null,
                        "grade": null,
                        "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["CREATED"]
                    };
                    arrayDetails = jsonArray[nodeIndex];
                    arrayDetails.data = data;
                }
                else if (this.nodeType === "topic") {
                    this.nodeTitle = this.trimValue(this.conceptAndTopicForm.value.topicName);
                    this.nodeDescription = this.trimValue(this.conceptAndTopicForm.value.topicDescription);
                    jsonArray[nodeIndex].text = this.nodeTitle;
                    if (this.selectedCurriculum === null || this.selectedCurriculum === undefined) {
                        curriculum = null;
                    }
                    else {
                        curriculum = this.selectedCurriculum.id;
                    }
                    if (this.selectedGrade === null || this.selectedGrade === undefined) {
                        grade = null;
                    }
                    else {
                        grade = this.selectedGrade.id;
                    }
                    data = {
                        "name": this.nodeTitle,
                        "description": this.nodeDescription,
                        "baseCurriculumId": curriculum,
                        "baseGrade": grade,
                        "orderNumber": 0,
                        "status": null,
                        "curriculumId": null,
                        "grade": null,
                        "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["CREATED"]
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
            this.closeConceptAndTopicModal();
            this.resetConceptAndTopicFormValues();
        }
        if (this.conceptAndTopicForm.invalid) {
            this.validateNodeForm = true;
            return;
        }
    };
    //Delete node method
    GeneralSubjectCreateComponent.prototype.deleteNode = function () {
        var nodeID, jsonArray, treeCallback;
        this.nodeOperationType = "delete";
        treeCallback = $("#buildTree").jstree();
        nodeID = treeCallback.get_selected()[0];
        treeCallback.delete_node($('#' + nodeID));
        jsonArray = $("#buildTree").jstree(true).get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
        this.updateJSONTreeWithOrderNum(jsonArray);
        this.enableNodeOperation = false;
        this.nodeType = "root";
    };
    //Generate JSON tree on drag and drop
    GeneralSubjectCreateComponent.prototype.generateJSONTreeOnDragAndDrop = function () {
        var localObj = this;
        $(document).on('dnd_stop.vakata', function (e, data) {
            setTimeout(function () {
                var json = $("#buildTree").jstree(true).get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
                localObj.updateJSONTreeWithOrderNum(json);
            }, 100);
        });
    };
    GeneralSubjectCreateComponent.prototype.trimValue = function (value) {
        if (value === null || value === undefined) {
            return value;
        }
        else {
            return value.trim();
        }
    };
    GeneralSubjectCreateComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onSaveSuccess(res); }, function (ErrRes) { return _this.onSaveError(ErrRes); });
    };
    GeneralSubjectCreateComponent.prototype.saveAsDraft = function () {
        this.updatedJSONTree[0].data.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["DRAFT"];
        this.saveGeneralSubject();
    };
    GeneralSubjectCreateComponent.prototype.saveAndPublish = function () {
        this.updatedJSONTree[0].data.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["ACTIVE"];
        this.saveGeneralSubject();
    };
    GeneralSubjectCreateComponent.prototype.saveGeneralSubject = function () {
        this.subscribeToSaveResponse(this.generalSubjectService.saveGeneralSubject(this.createGeneralSubjectForm()));
    };
    GeneralSubjectCreateComponent.prototype.onSaveSuccess = function (res) {
        this.pluginService.alertMessage("General subject saved successfully", "success");
        this.previousUrl();
        this.resetConceptAndTopicFormValues();
        this.generalSubjectForm.reset();
    };
    GeneralSubjectCreateComponent.prototype.onSaveError = function (res) {
        this.pluginService.alertMessage("Could not save, please contact admin", "error");
    };
    GeneralSubjectCreateComponent.prototype.createGeneralSubjectForm = function () {
        return this.updatedJSONTree;
    };
    //update JSON array with order number 
    GeneralSubjectCreateComponent.prototype.updateJSONTreeWithOrderNum = function (json) {
        this.updatedJSONTree = [];
        this.updatedJSONTree = json;
        if (this.updatedJSONTree[0].type === "concept" || this.updatedJSONTree[0].type === "topic") {
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
    GeneralSubjectCreateComponent.prototype.onError = function (errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    };
    GeneralSubjectCreateComponent.prototype.toggleTreeNodes = function () {
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
    GeneralSubjectCreateComponent.prototype.onBack = function () {
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
    GeneralSubjectCreateComponent.prototype.previousUrl = function () {
        this.router.navigateByUrl('/general-subject');
    };
    GeneralSubjectCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./general-subject-create.component.html */ "./src/app/general-subject/general-subject-create.component.html"),
            providers: [_general_subject_service__WEBPACK_IMPORTED_MODULE_4__["GeneralSubjectService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"],
            _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__["CurriculumService"],
            _general_subject_service__WEBPACK_IMPORTED_MODULE_4__["GeneralSubjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], GeneralSubjectCreateComponent);
    return GeneralSubjectCreateComponent;
}());



/***/ }),

/***/ "./src/app/general-subject/general-subject-delete.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/general-subject/general-subject-delete.component.ts ***!
  \*********************************************************************/
/*! exports provided: GeneralSubjectDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSubjectDeleteComponent", function() { return GeneralSubjectDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var _general_subject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./general-subject.service */ "./src/app/general-subject/general-subject.service.ts");






var GeneralSubjectDeleteComponent = /** @class */ (function () {
    function GeneralSubjectDeleteComponent(router, activatedRoute, eventManager, generalSubjectService, pluginService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.eventManager = eventManager;
        this.generalSubjectService = generalSubjectService;
        this.pluginService = pluginService;
    }
    GeneralSubjectDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var generalSubject = _a.generalSubject;
            _this.deletegeneralSubject(generalSubject);
        });
    };
    GeneralSubjectDeleteComponent.prototype.subscribeToDeleteResponse = function (resp) {
        var _this = this;
        resp.subscribe(function (res) { return _this.onDeleteSuccess(res); }, function (res) { return _this.onDeleteError(res); });
    };
    GeneralSubjectDeleteComponent.prototype.deletegeneralSubject = function (generalSubject) {
        var localthisObject = this;
        swal({
            title: "Are you sure to delete this general subject ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localthisObject.confirmDelete(generalSubject.id);
            }
            else {
                localthisObject.previousUrl();
            }
        });
    };
    GeneralSubjectDeleteComponent.prototype.confirmDelete = function (id) {
        this.subscribeToDeleteResponse(this.generalSubjectService.delete(id));
    };
    GeneralSubjectDeleteComponent.prototype.previousUrl = function () {
        this.router.navigateByUrl('/general-subject');
    };
    GeneralSubjectDeleteComponent.prototype.onDeleteSuccess = function (resp) {
        this.pluginService.alertMessage("General subject deleted successfully", "success");
        this.previousUrl();
    };
    GeneralSubjectDeleteComponent.prototype.onDeleteError = function (err) {
        this.pluginService.alertMessage("Could not delete general subject, please contact admin", "error");
    };
    GeneralSubjectDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./general-subject-manage.component.html */ "./src/app/general-subject/general-subject-manage.component.html"),
            providers: [_general_subject_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"],
            _general_subject_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectService"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"]])
    ], GeneralSubjectDeleteComponent);
    return GeneralSubjectDeleteComponent;
}());



/***/ }),

/***/ "./src/app/general-subject/general-subject-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/general-subject/general-subject-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 my-3 justify-content-between d-flex\">\n  <div class=\"btn btn-danger\" (click)=\"onBack()\">\n    <i class=\"fa fa-chevron-left mr-2\"></i> Back\n  </div>\n  <a class=\"btn btn-success mr-2\" [routerLink]=\"['/general-subject',subjectId, 'edit' ]\">\n    <i class=\"fa fa-edit mr-2\"></i>Edit general subject\n  </a>\n</div>\n\n<div class=\"row mb-3 p-3\">\n  <div class=\"col-xxl-3\">\n    <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"generalSubject.length > 1\">\n      <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\n        <i class=\"fa fa-clone mr-2\"></i>\n        <span *ngIf=\"active === false\">\n          Expand all\n        </span>\n        <span *ngIf=\"active === true\">\n          Collapse all\n        </span>\n      </div>\n    </div>\n    <div id=\"treeView\"></div>\n  </div>\n  <div class=\"col-xxl-9\">\n\n    <div class=\"p-3\" *ngIf=\"nodeType == 'root'\">\n      <p><b>Subject name</b></p>\n      <p>{{nodeName}}</p>\n      <p><b>Subject description</b></p>\n      <p>{{nodeDescription}}</p>\n    </div>\n\n    <div *ngIf=\"nodeType == 'concept'\" class=\"p-3\">\n      <p><b>Concept name</b></p>\n      <p>{{nodeName}}</p>\n      <p><b>Concept description</b></p>\n      <p>{{nodeDescription}}</p>\n    </div>\n\n    <div class=\"p-3\" *ngIf=\"nodeType == 'topic'\">\n      <div class=\"d-flex w-100 justify-content-between mb-3\">\n        <div>\n          <p><b>Topic name</b> - {{nodeName}}</p>\n          <p><b>Topic description</b> - {{nodeDescription}}</p>\n          <p><b>Curriculum :</b> {{curriculum}}</p>\n          <p><b>Grade :</b> {{grade}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/general-subject/general-subject-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/general-subject/general-subject-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: GeneralSubjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSubjectDetailsComponent", function() { return GeneralSubjectDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _general_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general-subject.service */ "./src/app/general-subject/general-subject.service.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../curriculum/curriculum.service */ "./src/app/curriculum/curriculum.service.ts");






var GeneralSubjectDetailsComponent = /** @class */ (function () {
    function GeneralSubjectDetailsComponent(pluginService, curriculumService, generalSubjectService, activatedRoute, router) {
        this.pluginService = pluginService;
        this.curriculumService = curriculumService;
        this.generalSubjectService = generalSubjectService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.generalSubject = [];
        this.active = false;
    }
    GeneralSubjectDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pluginService.sideMenuToggle();
        this.activatedRoute.data.subscribe(function (_a) {
            var generalSubject = _a.generalSubject;
            _this.generalSubject = generalSubject;
            _this.updateGeneralSubjectValues(generalSubject);
        });
        this.getCurriculumList();
    };
    GeneralSubjectDetailsComponent.prototype.updateGeneralSubjectValues = function (generalSubject) {
        this.generalSubject = generalSubject;
        this.pluginService.jsTree("#treeView", this.generalSubject, false);
        this.subjectId = this.generalSubject[0].data.id;
    };
    GeneralSubjectDetailsComponent.prototype.showConceptAndTopicDetails = function () {
        var localThisObj = this;
        $('#treeView')
            .on('changed.jstree', function (e, data) {
            var i, j, curriculumId;
            for (i = 0, j = data.selected.length; i < j; i++) {
                localThisObj.nodeType = data.node.type;
                if (localThisObj.nodeType === "root") {
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                }
                else if (localThisObj.nodeType === "concept") {
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                }
                else if (localThisObj.nodeType === "topic") {
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                    curriculumId = data.node.data.baseCurriculumId;
                    if (curriculumId === null) {
                        localThisObj.curriculum = null;
                    }
                    else {
                        localThisObj.curriculum = localThisObj.curriculumList.find(function (item) { return item.id === curriculumId; }).acronym;
                    }
                    localThisObj.grade = data.node.data.baseGrade;
                }
                else {
                    localThisObj.nodeType = "";
                }
            }
        });
    };
    GeneralSubjectDetailsComponent.prototype.ngAfterViewInit = function () {
        this.showConceptAndTopicDetails();
    };
    GeneralSubjectDetailsComponent.prototype.toggleTreeNodes = function () {
        this.active = !this.active;
        if (this.active) {
            this.pluginService.openJsTreeAllNodes("#treeView");
        }
        else {
            this.pluginService.closeJsTreeAllNodes("#treeView");
        }
    };
    GeneralSubjectDetailsComponent.prototype.getCurriculumList = function () {
        var _this = this;
        this.curriculumService.getStandardCurriculums().subscribe(function (res) { return _this.assignResponseToList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    GeneralSubjectDetailsComponent.prototype.assignResponseToList = function (data) {
        this.curriculumList = data;
    };
    GeneralSubjectDetailsComponent.prototype.onError = function (message) {
        this.pluginService.alertMessage(message, "error");
    };
    GeneralSubjectDetailsComponent.prototype.onBack = function () {
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
    GeneralSubjectDetailsComponent.prototype.previousUrl = function () {
        this.router.navigateByUrl('/general-subject');
    };
    GeneralSubjectDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./general-subject-details.component.html */ "./src/app/general-subject/general-subject-details.component.html"),
            providers: [_general_subject_service__WEBPACK_IMPORTED_MODULE_3__["GeneralSubjectService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
            _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_5__["CurriculumService"],
            _general_subject_service__WEBPACK_IMPORTED_MODULE_3__["GeneralSubjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GeneralSubjectDetailsComponent);
    return GeneralSubjectDetailsComponent;
}());



/***/ }),

/***/ "./src/app/general-subject/general-subject-manage.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/general-subject/general-subject-manage.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 d-flex justify-content-end my-3\">\n  <a [routerLink]=\"['/general-subject','create']\">\n    <div class=\"btn btn-primary\">\n      <i class=\"fa fa-plus-circle mr-2\"></i> Create new subject\n    </div>\n  </a>\n</div>\n<div class=\"table-responsive\" *ngIf=\"generalSubjects\">\n  <table class=\"table table-hover table-striped table-bordered nowrap w-100\" id=\"generalSubjectsTable\">\n    <thead>\n      <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"reset.bind(this)\">\n        <th jhiSortBy=\"title\">Subject Name <span class=\"fa fa-sort ml-1\"></span></th>\n        <th jhiSortBy=\"status\">Status <span class=\"fa fa-sort ml-1\"></span></th>\n        <th class=\"fixed-column\">Update status</th>\n        <th class=\"fixed-column\">Actions</th>\n      </tr>\n    </thead>\n    <tbody infinite-scroll (scrolled)=\"loadPage(page + 1)\" [infiniteScrollDisabled]=\"page >= links['last']\"\n      [infiniteScrollDistance]=\"0\">\n      <tr *ngFor=\"let generalSubject of generalSubjects ;trackBy: trackId\">\n        <td data-column=\"Subject name\">{{generalSubject.title}}</td>\n        <td data-column=\"Status\">{{generalSubject.status}}</td>\n        <td class=\"fixed-column\" data-column=\"Update status\">\n          <a class=\"btn btn-outline-success mr-1 mb-1\"\n            *ngIf=\"generalSubject.status === 'DRAFT' || generalSubject.status === 'INACTIVE'\"\n            [routerLink]=\"['/general-subject', generalSubject.id, 'publish']\">\n            Publish\n          </a>\n          <a class=\"btn btn-outline-danger mr-1 mb-1\" *ngIf=\"generalSubject.status === 'ACTIVE'\"\n            [routerLink]=\"['/general-subject', generalSubject.id, 'unpublish']\">\n            Unpublish\n          </a>\n        </td>\n        <td class=\"fixed-column\" data-column=\"Actions\">\n          <div>\n            <a class=\"btn btn-outline-info mr-1 btn-icon-size mb-1\"\n              [routerLink]=\"['/general-subject', generalSubject.id, 'view' ]\">\n              <i class=\"fa fa-eye\"></i>\n            </a>\n\n            <a class=\"btn btn-outline-success mr-1 btn-icon-size mb-1\"\n              [routerLink]=\"['/general-subject', generalSubject.id, 'edit' ]\">\n              <i class=\"fa fa-edit\"></i>\n            </a>\n\n            <div class=\"btn btn-outline-danger mr-1 btn-icon-size mb-1\"\n              *ngIf=\"generalSubject.status === 'INACTIVE' || generalSubject.status === 'DRAFT'\"\n              [routerLink]=\"['/general-subject', generalSubject.id, 'delete']\">\n              <i class=\"fa fa-trash\"></i>\n            </div>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/general-subject/general-subject-manage.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/general-subject/general-subject-manage.component.ts ***!
  \*********************************************************************/
/*! exports provided: GeneralSubjectManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSubjectManageComponent", function() { return GeneralSubjectManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _general_subject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./general-subject.service */ "./src/app/general-subject/general-subject.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");








var GeneralSubjectManageComponent = /** @class */ (function () {
    function GeneralSubjectManageComponent(_router, generalSubjectService, eventManager, parseLinks, principalService, pluginService) {
        this._router = _router;
        this.generalSubjectService = generalSubjectService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.generalSubjects = [];
        this.itemsPerPage = _shared__WEBPACK_IMPORTED_MODULE_6__["ITEMS_PER_PAGE"];
        this.page = 0;
        this.links = {
            last: 0
        };
        this.predicate = 'id';
        this.reverse = false;
    }
    GeneralSubjectManageComponent.prototype.reset = function () {
        this.page = 0;
        this.generalSubjects = [];
        this.loadGeneralSubjects();
    };
    GeneralSubjectManageComponent.prototype.loadPage = function (page) {
        this.page = page;
        this.loadGeneralSubjects();
    };
    GeneralSubjectManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadGeneralSubjects();
        this.principalService.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInGeneralSubjects();
    };
    GeneralSubjectManageComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    GeneralSubjectManageComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    GeneralSubjectManageComponent.prototype.sort = function () {
        var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    };
    GeneralSubjectManageComponent.prototype.registerChangeInGeneralSubjects = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('generalSubjectListModification', function (response) { return _this.reset(); });
    };
    GeneralSubjectManageComponent.prototype.loadGeneralSubjects = function () {
        var _this = this;
        this.generalSubjectService
            .query({
            page: this.page,
            size: this.itemsPerPage,
            sort: this.sort()
        })
            .subscribe(function (res) { return _this.paginateGeneralSubjects(res.body, res.headers); }, function (res) { return _this.onError(res.message); });
    };
    GeneralSubjectManageComponent.prototype.paginateGeneralSubjects = function (data, headers) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = parseInt(headers.get('X-Total-Count'), 10);
        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
                this.generalSubjects.push(data[i]);
            }
        }
        else {
            this.pluginService.alertMessage("No data found..!", "warning");
        }
    };
    GeneralSubjectManageComponent.prototype.onError = function (errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    };
    GeneralSubjectManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./general-subject-manage.component.html */ "./src/app/general-subject/general-subject-manage.component.html"),
            providers: [_general_subject_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _general_subject_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectService"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"],
            _core__WEBPACK_IMPORTED_MODULE_4__["Principal"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__["PluginService"]])
    ], GeneralSubjectManageComponent);
    return GeneralSubjectManageComponent;
}());



/***/ }),

/***/ "./src/app/general-subject/general-subject-update-publish.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/general-subject/general-subject-update-publish.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GeneralSubjectPublishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSubjectPublishComponent", function() { return GeneralSubjectPublishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _general_subject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./general-subject.service */ "./src/app/general-subject/general-subject.service.ts");






var GeneralSubjectPublishComponent = /** @class */ (function () {
    function GeneralSubjectPublishComponent(router, activatedRoute, generalSubjectService, pluginService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.generalSubjectService = generalSubjectService;
        this.pluginService = pluginService;
    }
    GeneralSubjectPublishComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var generalSubject = _a.generalSubject;
            _this.publishGeneralSubject(generalSubject);
        });
    };
    GeneralSubjectPublishComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onSaveSuccess(res); }, function (errRes) { return _this.onSaveError(errRes); });
    };
    GeneralSubjectPublishComponent.prototype.publishGeneralSubject = function (generalSubject) {
        generalSubject.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_3__["ACTIVE"];
        this.subscribeToSaveResponse(this.generalSubjectService.updateGeneralSubjectStatus(generalSubject));
        this.router.navigateByUrl('/general-subject');
    };
    GeneralSubjectPublishComponent.prototype.onSaveSuccess = function (resp) {
        if (resp.body.status === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_3__["ACTIVE"]) {
            this.pluginService.alertMessage("General subject published successfully", "success");
        }
    };
    GeneralSubjectPublishComponent.prototype.onSaveError = function (errRes) {
        this.pluginService.alertMessage("Could not publish, please contact admin", "error");
    };
    GeneralSubjectPublishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./general-subject-manage.component.html */ "./src/app/general-subject/general-subject-manage.component.html"),
            providers: [_general_subject_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _general_subject_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectService"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"]])
    ], GeneralSubjectPublishComponent);
    return GeneralSubjectPublishComponent;
}());



/***/ }),

/***/ "./src/app/general-subject/general-subject-update-unpublish.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/general-subject/general-subject-update-unpublish.component.ts ***!
  \*******************************************************************************/
/*! exports provided: GeneralSubjectUnpublishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSubjectUnpublishComponent", function() { return GeneralSubjectUnpublishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _general_subject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./general-subject.service */ "./src/app/general-subject/general-subject.service.ts");






var GeneralSubjectUnpublishComponent = /** @class */ (function () {
    function GeneralSubjectUnpublishComponent(router, activatedRoute, generalSubjectService, pluginService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.generalSubjectService = generalSubjectService;
        this.pluginService = pluginService;
    }
    GeneralSubjectUnpublishComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var generalSubject = _a.generalSubject;
            _this.unpublishGeneralSubject(generalSubject);
        });
    };
    GeneralSubjectUnpublishComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onSaveSuccess(res); }, function (errRes) { return _this.onSaveError(errRes); });
    };
    GeneralSubjectUnpublishComponent.prototype.unpublishGeneralSubject = function (generalSubject) {
        generalSubject.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_3__["INACTIVE"];
        this.subscribeToSaveResponse(this.generalSubjectService.updateGeneralSubjectStatus(generalSubject));
        this.router.navigateByUrl('/general-subject');
    };
    GeneralSubjectUnpublishComponent.prototype.onSaveSuccess = function (resp) {
        if (resp.body.status === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_3__["INACTIVE"]) {
            this.pluginService.alertMessage("General subject unpublished successfully", "success");
        }
    };
    GeneralSubjectUnpublishComponent.prototype.onSaveError = function (errRes) {
        this.pluginService.alertMessage("Could not unpublish, please contact admin", "error");
    };
    GeneralSubjectUnpublishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./general-subject-manage.component.html */ "./src/app/general-subject/general-subject-manage.component.html"),
            providers: [_general_subject_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _general_subject_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectService"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"]])
    ], GeneralSubjectUnpublishComponent);
    return GeneralSubjectUnpublishComponent;
}());



/***/ }),

/***/ "./src/app/general-subject/general-subject-update.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/general-subject/general-subject-update.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xxl-12 justify-content-between d-flex my-3\">\n  <div class=\"btn btn-danger\" (click)=\"onBack()\">\n    <i class=\"fa fa-chevron-left mr-2\"></i> Back\n  </div>\n</div>\n\n<div class=\"row-flex stepper\">\n  <div class=\"nav flex-column nav-pills stepper-left\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\n    <a class=\"nav-link active\" id=\"editSubject-tab\" data-toggle=\"pill\" href=\"#editSubject\" role=\"tab\"\n      aria-controls=\"editSubject\" aria-selected=\"false\">\n      <span class=\"index-round\">\n        Step 1\n      </span>\n      <span class=\"step-label\">\n        Edit subject\n      </span>\n    </a>\n    <a class=\"nav-link disabled\" id=\"manageConcept-tab\" data-toggle=\"pill\" href=\"#manageConcept\" role=\"tab\"\n      aria-controls=\"manageConcept\" aria-selected=\"false\">\n      <span class=\"index-round\">\n        Step 2\n      </span>\n      <span class=\"step-label\">\n        Manage concepts and topics\n      </span>\n    </a>\n    <a class=\"nav-link disabled\" id=\"confirmation-tab\" data-toggle=\"pill\" href=\"#confirmation\" role=\"tab\"\n      aria-controls=\"confirmation\" aria-selected=\"false\">\n      <span class=\"index-round\">\n        Step 3\n      </span>\n      <span class=\"step-label\">\n        Summary\n      </span>\n    </a>\n  </div>\n  <div class=\"stepper-right tab-content p-3\" id=\"v-pills-tabContent\">\n\n    <div class=\"tab-pane fade show active\" id=\"editSubject\" role=\"tabpanel\" aria-labelledby=\"editSubject-tab\">\n\n      <form [formGroup]=\"generalSubjectForm\">\n        <div class=\"form-group mb-2 col-md-6\">\n          <label for=\"subjectName\" class=\"col-form-label\">Subject name</label>\n          <input type=\"text\" class=\"form-control\" id=\"subjectName\"\n            placeholder=\"Enter subject name (min length: 3, max length: 50)\" inputRestriction=\"alphabetsWithSpace\"\n            formControlName=\"generalSubjectName\" maxlength=\"50\" minlength=\"3\"\n            [ngClass]=\"{ 'is-invalid': submitted && formControl.generalSubjectName.errors }\" />\n          <div class=\"text-muted font-15 my-2\">Allowed\n            characters - Alphabets</div>\n        </div>\n        <div class=\"form-group mb-2 col-md-6\">\n          <label for=\"description\" class=\" col-form-label\">Description\n            <span class=\"text-muted\">(Optional)</span>\n          </label>\n          <textarea class=\"form-control description-form\" id=\"description\" name=\"description\"\n            placeholder=\"Enter description  (min length: 3, max length: 250)\"\n            formControlName=\"generalSubjectDescription\"\n            [ngClass]=\"{ 'is-invalid': submitted && formControl.generalSubjectDescription.errors }\" maxlength=\"250\"\n            minlength=\"3\"></textarea>\n          <div class=\"text-muted font-15 my-2\">\n            Allowed characters - Alphabets, Numbers and\n            Special characters\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12 d-flex justify-content-end\">\n            <button class=\"btn btn-success next-step\" [disabled]=\"validateSubjectForm\" (click)=\"updateSubjectTree()\">\n              Next\n              <i class=\"fa fa-arrow-right ml-2\"></i>\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n\n    <div class=\"tab-pane fade\" id=\"manageConcept\" role=\"tabpanel\" aria-labelledby=\"manageConcept-tab\">\n      <div class=\"row\">\n        <div class=\"col-xxl-4 p-2\">\n          <div class=\"d-flex justify-content-start mb-2\">\n            <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\" *ngIf=\"generalSubject.length > 1\">\n              <i class=\"fa fa-clone mr-2\"></i>\n              <span *ngIf=\"enableExpandNode === false\">\n                Expand all\n              </span>\n              <span *ngIf=\"enableExpandNode === true\">\n                Collapse all\n              </span>\n            </div>\n          </div>\n          <div id=\"buildTree\"></div>\n        </div>\n        <div class=\"col-xxl-8\">\n          <div class=\"w-100 d-flex justify-content-end align-self-start mb-2\" *ngIf=\"enableNodeOperation\">\n            <div class=\"btn btn-primary mr-2\" *ngIf=\"nodeType !== 'topic'\" (click)=\"createNode()\">\n              <i class=\"fa fa-plus-circle mr-2\"></i>Add new\n              concept / topic\n            </div>\n            <div class=\"btn btn-success mr-2\" (click)=\"editNode()\" *ngIf=\"enableEditNodeOperation\">\n              <i class=\"fa fa-edit mr-2\"></i>Edit {{nodeType}}\n            </div>\n            <div class=\"btn btn-danger\" (click)=\"deleteNode()\" *ngIf=\"nodeType !== 'root'\">\n              <i class=\"fa fa-trash mr-2\"></i> Delete {{nodeType}}\n            </div>\n          </div>\n          <div class=\"w-100 p-4\">\n            <div *ngIf=\"nodeType === 'concept'\">\n              <p><b>Concept name :</b> {{nodeTitle}} </p>\n              <p><b>Concept description :</b> {{nodeDescription}}</p>\n            </div>\n            <div *ngIf=\"nodeType === 'topic'\">\n              <p><b>Topic name :</b> {{nodeTitle}}</p>\n              <p><b>Topic description :</b> {{nodeDescription}}</p>\n              <p><b>Curriculum :</b> {{curriculum}}</p>\n              <p><b>Grade :</b> {{grade}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"my-2 p-3 border-danger rounded\">\n        <p class=\"text-danger\"><b>NOTE</b></p>\n        <p class=\"text-primary\">\n          <i class=\"fa fa-check mr-2 text-danger\"></i> Select a node and do your actions.\n        </p>\n        <p class=\"text-primary\">\n          <i class=\"fa fa-check mr-2 text-danger\"></i> Without any changes, you can't update general subject.\n        </p>\n        <p class=\"text-primary\">\n          <i class=\"fa fa-check mr-2 text-danger\"></i> Only one root node is allowed, you can't do drag and drop on top\n          of\n          root node\n        </p>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-12 d-flex justify-content-end\">\n          <div class=\"btn btn-danger prev-step\">\n            <i class=\"fa fa-arrow-left mr-2\"></i> Previous\n          </div>\n          <button class=\"btn btn-success ml-2 next-step\" [disabled]=\"validateNode\">\n            Next\n            <i class=\"fa fa-arrow-right ml-2\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"tab-pane fade\" id=\"confirmation\" role=\"tabpanel\" aria-labelledby=\"confirmation-tab\">\n      <div class=\"card-body\">\n        <div class=\"row mb-3\">\n          <div class=\"col-md-6\">\n            <h5>Before changes</h5>\n            <div id=\"beforeChangeTree\"></div>\n          </div>\n          <div class=\"col-md-6\">\n            <h5>After changes</h5>\n            <div id=\"afterChangeTree\"></div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-12 d-flex justify-content-end\">\n          <span class=\"btn btn-danger mr-2 prev-step\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>\n            Previous\n          </span>\n          <div class=\"btn btn-info mr-2\" (click)=\"saveAsDraft()\">\n            <i class=\"fa fa-save mr-2\"></i>\n            Save as draft\n          </div>\n          <div class=\"btn btn-success\" (click)=\"saveAndPublish()\">\n            <i class=\"fe fe-file-plus mr-2\"></i>\n            Save and publish\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"generalSubjectModal\">\n  <div class=\"modal-dialog modal-full-height modal-right modal-notify\" role=\"document\">\n    <div class=\"modal-content\" [formGroup]=\"conceptAndTopicForm\">\n      <div class=\"modal-header bg-warning d-flex align-items-center\">\n        <h5 class=\"modal-title text-white\">\n          {{modalTitleName}} concept / topic\n        </h5>\n        <div class=\"close btn btn-xl\" (click)=\"closeWithOutSavingNode()\">\n          <i class=\"fa fa-times\"></i>\n        </div>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"conceptAndTopicForm\">\n          <div class=\"form-group mb-2\">\n            <label class=\"col-form-label\">Type\n            </label>\n            <ng-select [items]=\"nodeTypes\" [disabled]=\"disableDropdown\" [ngModelOptions]=\"{standalone: true}\"\n              bindLabel=\"name\" placeholder=\"Select node type\" [(ngModel)]=\"selectedNodeType\" [searchable]=\"false\"\n              (change)=\"onNodeTypeChange()\">\n            </ng-select>\n          </div>\n          <div *ngIf=\"nodeType === 'concept'\">\n            <div class=\"form-group mb-2\">\n              <label class=\"col-form-label\">Concept\n                name\n              </label>\n              <input type=\"text\" placeholder=\"Enter concept name (min length: 3 and max length: 75)\"\n                class=\"form-control\" formControlName=\"conceptName\" inputRestriction=\"alphabetsNumbersWithMinus\"\n                minlength=\"3\" maxlength=\"75\">\n              <div class=\"text-muted font-15 my-2\">\n                Allowed characters - Alphabets, Numbers and Special character (-)\n              </div>\n            </div>\n            <div class=\"form-group mb-2\">\n              <label class=\"col-form-label\">Concept\n                description <span class=\"text-muted\">(Optional)</span>\n              </label>\n              <textarea class=\"form-control description-form\"\n                placeholder=\"Enter description (min length: 3 and max length: 250)\" formControlName=\"conceptDescription\"\n                minlength=\"3\" maxlength=\"250\"></textarea>\n              <div class=\"text-muted font-15 my-2\">\n                Allowed characters - Alphabets, Numbers and Special characters\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"nodeType === 'topic'\">\n            <div class=\"form-group mb-2\">\n              <label class=\"col-form-label\">Topic\n                name\n              </label>\n              <input type=\"text\" placeholder=\"Enter topic name(min length: 3 and max length: 75)\" class=\"form-control\"\n                formControlName=\"topicName\" inputRestriction=\"alphabetsNumbersWithMinus\" minlength=\"3\" maxlength=\"75\">\n              <div class=\"text-muted font-15 my-2\">\n                Allowed characters - Alphabets, Numbers and Special character (-)\n              </div>\n            </div>\n            <div class=\"form-group mb-2\">\n              <label class=\"col-form-label\">Topic\n                description <span class=\"text-muted\">(Optional)</span>\n              </label>\n              <textarea class=\"form-control description-form\"\n                placeholder=\"Enter description(min length: 3 and max length: 250)\" formControlName=\"topicDescription\"\n                minlength=\"3\" maxlength=\"250\"></textarea>\n              <div class=\"text-muted font-15 my-2\">\n                Allowed characters - Alphabets, Numbers and Special characters\n              </div>\n            </div>\n            <div class=\"form-group mb-2\">\n              <label class=\"col-form-label\">Primary\n                applicable curriculum and\n                grade\n              </label>\n              <div class=\"form-row pr-0 mr-0\">\n                <div class=\"col-md-6 mb-2\">\n                  <ng-select [items]=\"curriculumList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"acronym\"\n                    placeholder=\"Select curriculum\" [(ngModel)]=\"selectedCurriculum\" (change)=\"onCurriculumChange()\">\n                  </ng-select>\n                </div>\n                <div class=\"col-md-6 mb-2\">\n                  <ng-select [items]=\"grades\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                    placeholder=\"Select grade\" [(ngModel)]=\"selectedGrade\">\n                  </ng-select>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\" *ngIf=\"enableModalOperation\">\n        <div class=\"btn btn-danger\" (click)=\"resetConceptAndTopicFormValues()\">\n          <i class=\"fa fa-times mr-2\"></i>\n          Reset\n        </div>\n        <button class=\"btn btn-success\" (click)=\"saveNode()\" [disabled]=\"validateNodeForm\">\n          <i class=\"fa fa-save mr-2\"></i>\n          Save\n        </button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/general-subject/general-subject-update.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/general-subject/general-subject-update.component.ts ***!
  \*********************************************************************/
/*! exports provided: GeneralSubjectUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSubjectUpdateComponent", function() { return GeneralSubjectUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _general_subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general-subject.service */ "./src/app/general-subject/general-subject.service.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../curriculum/curriculum.service */ "./src/app/curriculum/curriculum.service.ts");









var GeneralSubjectUpdateComponent = /** @class */ (function () {
    function GeneralSubjectUpdateComponent(router, formBuilder, pluginService, curriculumService, generalSubjectService, activatedRoute, commonService, changeDetectRef) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.curriculumService = curriculumService;
        this.generalSubjectService = generalSubjectService;
        this.activatedRoute = activatedRoute;
        this.commonService = commonService;
        this.changeDetectRef = changeDetectRef;
        this.updatedJSONTree = [];
        this.curriculumList = [];
        this.nodeTypes = [];
        this.grades = [];
        this.validateSubjectForm = true;
        this.validateNode = true;
        this.validateNodeForm = true;
        this.enableExpandNode = false;
    }
    GeneralSubjectUpdateComponent.prototype.getNodeTypeList = function () {
        var _this = this;
        this.commonService.getGeneralDataList().subscribe(function (nodeTypeData) {
            _this.nodeTypes = nodeTypeData.generalSubject;
        });
    };
    GeneralSubjectUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pluginService.sideMenuToggle();
        this.createGeneralSubjectGroup();
        this.pluginService.stepper();
        this.activatedRoute.data.subscribe(function (_a) {
            var generalSubject = _a.generalSubject;
            _this.updateGeneralSubjectValues(generalSubject);
        });
        this.getNodeTypeList();
        this.getCurriculumList();
        this.resetConceptAndTopicFormValues();
    };
    GeneralSubjectUpdateComponent.prototype.createGeneralSubjectGroup = function () {
        this.generalSubjectForm = this.formBuilder.group({
            generalSubjectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            generalSubjectDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])
        });
        this.conceptAndTopicForm = this.formBuilder.group({
            conceptName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            conceptDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]),
            topicName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            topicDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])
        });
    };
    Object.defineProperty(GeneralSubjectUpdateComponent.prototype, "formControl", {
        get: function () { return this.generalSubjectForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GeneralSubjectUpdateComponent.prototype, "modalFormControl", {
        get: function () { return this.conceptAndTopicForm.controls; },
        enumerable: true,
        configurable: true
    });
    GeneralSubjectUpdateComponent.prototype.getCurriculumList = function () {
        var _this = this;
        this.curriculumService.getStandardCurriculums().subscribe(function (res) { return _this.assignResponseToList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    GeneralSubjectUpdateComponent.prototype.assignResponseToList = function (data) {
        this.curriculumList = data;
    };
    GeneralSubjectUpdateComponent.prototype.updateGeneralSubjectValues = function (generalSubject) {
        this.updateStatusForAllNodes(generalSubject);
        this.pluginService.jsTree("#beforeChangeTree", generalSubject, false);
        this.subjectName = generalSubject[0].data.name;
        this.subjectDescription = generalSubject[0].data.description;
        this.generalSubjectForm.setValue({
            generalSubjectName: this.subjectName,
            generalSubjectDescription: this.subjectDescription
        });
    };
    GeneralSubjectUpdateComponent.prototype.updateStatusForAllNodes = function (generalSubject) {
        for (var i = 0; i < generalSubject.length; i++) {
            generalSubject[i].data.editStatus = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["NOCHANGE"];
        }
        this.generalSubject = generalSubject;
        this.pluginService.jsTree("#buildTree", generalSubject, true);
    };
    GeneralSubjectUpdateComponent.prototype.trimValue = function (value) {
        if (value === null || value === undefined) {
            return value;
        }
        else {
            return value.trim();
        }
    };
    GeneralSubjectUpdateComponent.prototype.validateGeneralSubjectForm = function () {
        this.subjectName = this.trimValue(this.generalSubjectForm.value.generalSubjectName);
        this.subjectDescription = this.trimValue(this.generalSubjectForm.value.generalSubjectDescription);
        if (this.subjectName === "" || this.subjectName === undefined || this.subjectName === null) {
            this.validateSubjectForm = true;
        }
        else {
            this.validateSubjectForm = false;
        }
        if (this.generalSubjectForm.invalid) {
            this.validateSubjectForm = true;
        }
        if (this.generalSubjectForm.valid) {
            this.validateSubjectForm = false;
        }
    };
    GeneralSubjectUpdateComponent.prototype.updateSubjectTree = function () {
        var name, description;
        if (this.generalSubjectForm.valid) {
            name = this.trimValue(this.generalSubjectForm.value.generalSubjectName);
            description = this.trimValue(this.generalSubjectForm.value.generalSubjectDescription);
            this.generalSubject[0].text = name;
            this.generalSubject[0].data.name = name;
            this.generalSubject[0].data.description = description;
            this.pluginService.jsTree("#buildTree", this.generalSubject, true);
        }
        if (this.generalSubjectForm.invalid) {
            return;
        }
    };
    GeneralSubjectUpdateComponent.prototype.ngAfterViewInit = function () {
        this.nodeOnSelection();
        this.generateJSONTreeOnDragAndDrop();
    };
    GeneralSubjectUpdateComponent.prototype.onNodeTypeChange = function () {
        var validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(75)];
        if (this.selectedNodeType) {
            this.nodeType = this.selectedNodeType.name;
            if (this.nodeType === 'concept') {
                this.enableModalOperation = true;
                this.conceptAndTopicForm.addControl('conceptName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', validators));
                this.conceptAndTopicForm.addControl('topicName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''));
            }
            else if (this.nodeType === 'topic') {
                this.enableModalOperation = true;
                this.conceptAndTopicForm.addControl('topicName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', validators));
                this.conceptAndTopicForm.addControl('conceptName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''));
            }
        }
    };
    GeneralSubjectUpdateComponent.prototype.onCurriculumChange = function () {
        var gradesApplicableFrom, gradesApplicableTo;
        if (this.selectedCurriculum === null || this.selectedCurriculum === undefined) {
            gradesApplicableFrom = null;
            gradesApplicableTo = null;
        }
        else {
            gradesApplicableFrom = this.selectedCurriculum.gradesApplicableFrom;
            gradesApplicableTo = this.selectedCurriculum.gradesApplicableTo;
            this.generateGradeList(gradesApplicableFrom, gradesApplicableTo);
        }
    };
    GeneralSubjectUpdateComponent.prototype.generateGradeList = function (min, max) {
        this.grades = [];
        for (var i = min; i <= max; i++) {
            this.grades.push({
                "id": i,
                "name": i
            });
        }
        return this.grades;
    };
    //Reset all form values
    GeneralSubjectUpdateComponent.prototype.resetConceptAndTopicFormValues = function () {
        this.conceptAndTopicForm.reset();
        this.selectedNodeType = null;
        this.selectedCurriculum = null;
        this.selectedGrade = null;
    };
    //Tree selection and change method call
    GeneralSubjectUpdateComponent.prototype.nodeOnSelection = function () {
        var localThisObj = this;
        $('#buildTree').on('changed.jstree', function (e, data) {
            var i, j;
            for (i = 0, j = data.selected.length; i < j; i++) {
                localThisObj.nodeType = data.node.type;
                if (localThisObj.nodeType === "root") {
                    localThisObj.enableNodeOperation = true;
                    localThisObj.enableEditNodeOperation = false;
                }
                else if (localThisObj.nodeType === "concept") {
                    localThisObj.enableEditNodeOperation = true;
                    localThisObj.enableNodeOperation = true;
                    localThisObj.nodeId = data.node.data.id;
                    localThisObj.nodeTitle = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                    localThisObj.conceptAndTopicFormSetValues(localThisObj);
                }
                else if (localThisObj.nodeType === "topic") {
                    localThisObj.enableNodeOperation = true;
                    localThisObj.enableEditNodeOperation = true;
                    localThisObj.nodeId = data.node.data.id;
                    localThisObj.nodeTitle = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                    localThisObj.curriculumId = data.node.data.baseCurriculumId;
                    if (localThisObj.curriculumId === null) {
                        localThisObj.selectedCurriculum = null;
                        localThisObj.curriculum = null;
                    }
                    else {
                        localThisObj.curriculum = localThisObj.curriculumList.find(function (item) { return item.id === localThisObj.curriculumId; }).acronym;
                    }
                    localThisObj.grade = data.node.data.baseGrade;
                    localThisObj.conceptAndTopicFormSetValues(localThisObj);
                }
                else {
                    localThisObj.enableNodeOperation = false;
                    localThisObj.enableEditNodeOperation = false;
                }
            }
        });
    };
    //Concept and topic details form setvalues method
    GeneralSubjectUpdateComponent.prototype.conceptAndTopicFormSetValues = function (Objectthis) {
        var nodeTypeIndex, curriculumIndex, gradeIndex, gradesApplicableFrom, gradesApplicableTo;
        nodeTypeIndex = this.nodeTypes.findIndex(function (item) { return item.name === Objectthis.nodeType; });
        this.selectedNodeType = this.nodeTypes[nodeTypeIndex];
        if (Objectthis.nodeType === "concept") {
            this.conceptAndTopicForm.setValue({
                conceptName: Objectthis.nodeTitle,
                conceptDescription: Objectthis.nodeDescription,
                topicName: "",
                topicDescription: ""
            });
        }
        else if (Objectthis.nodeType === "topic") {
            if (Objectthis.curriculum === null || Objectthis.curriculum === undefined) {
                this.selectedCurriculum = null;
                this.selectedGrade = null;
            }
            else {
                curriculumIndex = this.curriculumList.findIndex(function (item) { return item.acronym === Objectthis.curriculum; });
                this.selectedCurriculum = this.curriculumList[curriculumIndex];
                gradesApplicableFrom = this.curriculumList[curriculumIndex].gradesApplicableFrom;
                gradesApplicableTo = this.curriculumList[curriculumIndex].gradesApplicableTo;
                this.generateGradeList(gradesApplicableFrom, gradesApplicableTo);
                gradeIndex = this.grades.findIndex(function (item) { return item.name === Objectthis.grade; });
                this.selectedGrade = this.grades[gradeIndex];
            }
            this.conceptAndTopicForm.setValue({
                conceptName: "",
                conceptDescription: "",
                topicName: Objectthis.nodeTitle,
                topicDescription: Objectthis.nodeDescription
            });
        }
    };
    GeneralSubjectUpdateComponent.prototype.validateConceptAndTopicForm = function () {
        var conceptName, topicName;
        conceptName = this.trimValue(this.conceptAndTopicForm.value.conceptName);
        topicName = this.trimValue(this.conceptAndTopicForm.value.topicName);
        if (this.nodeType === 'concept') {
            if (conceptName === "" || conceptName === undefined || conceptName === null) {
                this.validateNodeForm = true;
            }
            else {
                this.validateNodeForm = false;
            }
        }
        else if (this.nodeType === 'topic') {
            if (topicName === "" || topicName === undefined || topicName === null) {
                this.validateNodeForm = true;
            }
            else {
                this.validateNodeForm = false;
            }
        }
    };
    GeneralSubjectUpdateComponent.prototype.ngAfterViewChecked = function () {
        //General Subject Form Validation
        this.validateGeneralSubjectForm();
        //Concept and topic form validation
        this.validateConceptAndTopicForm();
        this.changeDetectRef.detectChanges();
    };
    //Create node method
    GeneralSubjectUpdateComponent.prototype.createNode = function () {
        this.nodeOperationType = "create";
        this.modalTitleName = "Add new";
        this.openConceptAndTopicModal();
        this.resetConceptAndTopicFormValues();
        this.disableDropdown = false;
        this.enableModalOperation = false;
        this.nodeType = "";
    };
    //Edit node method
    GeneralSubjectUpdateComponent.prototype.editNode = function () {
        this.nodeOperationType = "edit";
        this.modalTitleName = "Edit";
        this.disableDropdown = true;
        this.conceptAndTopicForm.patchValue({
            conceptName: this.nodeTitle,
            topicName: this.nodeTitle,
            conceptDescription: this.nodeDescription,
            topicDescription: this.nodeDescription
        });
        this.enableModalOperation = true;
        this.openConceptAndTopicModal();
    };
    GeneralSubjectUpdateComponent.prototype.openConceptAndTopicModal = function () {
        this.pluginService.showModalWindow("#generalSubjectModal");
    };
    GeneralSubjectUpdateComponent.prototype.closeConceptAndTopicModal = function () {
        this.pluginService.hideModalWindow("#generalSubjectModal");
    };
    GeneralSubjectUpdateComponent.prototype.closeWithOutSavingNode = function () {
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
                localthisObject.closeConceptAndTopicModal();
                localthisObject.disableNodeOperations();
            }
        });
    };
    GeneralSubjectUpdateComponent.prototype.disableNodeOperations = function () {
        this.enableNodeOperation = false;
        this.nodeType = "";
        this.resetConceptAndTopicFormValues();
        var treeCallback = $('#buildTree').jstree(true);
        treeCallback.deselect_all();
    };
    //Save node method
    GeneralSubjectUpdateComponent.prototype.saveNode = function () {
        if (this.conceptAndTopicForm.valid) {
            this.validateNodeForm = false;
            var newNodeArray = void 0, position = void 0, parent_1, treeCallback = void 0, jsonArray = void 0, nodeIndex = void 0, arrayDetails = void 0, selectedNodeID_1, data = void 0, curriculum = void 0, grade = void 0;
            position = 'last';
            parent_1 = $('#buildTree').jstree('get_selected')[0];
            treeCallback = $('#buildTree').jstree(true);
            jsonArray = treeCallback.get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
            selectedNodeID_1 = treeCallback.get_selected()[0];
            nodeIndex = jsonArray.findIndex(function (item) { return item.id === selectedNodeID_1; });
            if (this.nodeOperationType === "create") {
                if (this.nodeType === "concept") {
                    this.nodeTitle = this.trimValue(this.conceptAndTopicForm.value.conceptName);
                    this.nodeDescription = this.trimValue(this.conceptAndTopicForm.value.conceptDescription);
                    newNodeArray = {
                        "text": this.nodeTitle,
                        "type": "concept",
                        "state": {
                            "opened": true,
                            "selected": false
                        },
                        "data": {
                            "name": this.nodeTitle,
                            "description": this.nodeDescription,
                            "orderNumber": null,
                            "status": null,
                            "curriculumId": null,
                            "baseCurriculumId": null,
                            "baseGrade": null,
                            "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["CREATED"]
                        }
                    };
                    jsonArray[nodeIndex].text = this.nodeTitle;
                    $('#buildTree').jstree().create_node(parent_1, newNodeArray, position);
                    jsonArray = treeCallback.get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
                }
                else if (this.nodeType === "topic") {
                    this.nodeTitle = this.trimValue(this.conceptAndTopicForm.value.topicName);
                    this.nodeDescription = this.trimValue(this.conceptAndTopicForm.value.topicDescription);
                    if (this.selectedCurriculum === null || this.selectedCurriculum === undefined) {
                        curriculum = null;
                    }
                    else {
                        curriculum = this.selectedCurriculum.id;
                    }
                    if (this.selectedGrade === null || this.selectedGrade === undefined) {
                        grade = null;
                    }
                    else {
                        grade = this.selectedGrade.id;
                    }
                    newNodeArray = {
                        "text": this.nodeTitle,
                        "type": "topic",
                        "state": {
                            "opened": true,
                            "selected": false
                        },
                        "data": {
                            "name": this.nodeTitle,
                            "description": this.nodeDescription,
                            "baseCurriculumId": curriculum,
                            "baseGrade": grade,
                            "orderNumber": null,
                            "status": null,
                            "curriculumId": null,
                            "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["CREATED"]
                        }
                    };
                    jsonArray[nodeIndex].text = this.nodeTitle;
                    $('#buildTree').jstree().create_node(parent_1, newNodeArray, position);
                    jsonArray = treeCallback.get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
                }
                this.validateNode = false;
            }
            if (this.nodeOperationType === "edit") {
                this.validateNode = false;
                this.nodeType = jsonArray[nodeIndex].type;
                if (this.nodeType === "concept") {
                    this.nodeTitle = this.trimValue(this.conceptAndTopicForm.value.conceptName);
                    this.nodeDescription = this.trimValue(this.conceptAndTopicForm.value.conceptDescription);
                    jsonArray[nodeIndex].text = this.nodeTitle;
                    data = {
                        "id": this.nodeId,
                        "name": this.nodeTitle,
                        "description": this.nodeDescription,
                        "orderNumber": null,
                        "baseCurriculumId": null,
                        "baseGrade": null,
                        "status": null,
                        "curriculumId": null,
                        "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["EDITED"]
                    };
                    arrayDetails = jsonArray[nodeIndex];
                    arrayDetails.data = data;
                }
                else if (this.nodeType === "topic") {
                    this.nodeTitle = this.trimValue(this.conceptAndTopicForm.value.topicName);
                    this.nodeDescription = this.trimValue(this.conceptAndTopicForm.value.topicDescription);
                    jsonArray[nodeIndex].text = this.nodeTitle;
                    if (this.selectedCurriculum === null || this.selectedCurriculum === undefined) {
                        curriculum = null;
                    }
                    else {
                        curriculum = this.selectedCurriculum.id;
                    }
                    if (this.selectedGrade === null || this.selectedGrade === undefined) {
                        grade = null;
                    }
                    else {
                        grade = this.selectedGrade.id;
                    }
                    data = {
                        "id": this.nodeId,
                        "name": this.nodeTitle,
                        "description": this.nodeDescription,
                        "baseCurriculumId": curriculum,
                        "baseGrade": grade,
                        "orderNumber": null,
                        "status": null,
                        "curriculumId": null,
                        "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["EDITED"]
                    };
                    arrayDetails = jsonArray[nodeIndex];
                    arrayDetails.data = data;
                }
            }
            else if (this.nodeOperationType === "delete") {
                this.validateNode = false;
                this.nodeType = jsonArray[nodeIndex].type;
                if (this.nodeType === "concept") {
                    data = {
                        "id": this.nodeId,
                        "name": this.nodeTitle,
                        "description": this.nodeDescription,
                        "orderNumber": null,
                        "baseCurriculumId": null,
                        "baseGrade": null,
                        "status": null,
                        "curriculumId": null,
                        "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["DELETED"]
                    };
                    arrayDetails = jsonArray[nodeIndex];
                    arrayDetails.data = data;
                    arrayDetails.type = 'concept';
                    jsonArray[nodeIndex].icon = "fa fa-trash";
                    //Update a child node status
                    if (treeCallback.is_parent(selectedNodeID_1) === true) {
                        this.getChildrenDOM(selectedNodeID_1, jsonArray);
                    }
                }
                else {
                    data = {
                        "id": this.nodeId,
                        "name": this.nodeTitle,
                        "description": this.nodeDescription,
                        "orderNumber": null,
                        "baseCurriculumId": this.curriculumId,
                        "baseGrade": this.grade,
                        "status": null,
                        "curriculumId": null,
                        "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["DELETED"]
                    };
                    arrayDetails = jsonArray[nodeIndex];
                    arrayDetails.data = data;
                    arrayDetails.type = 'topic';
                    jsonArray[nodeIndex].icon = "fa fa-trash";
                }
            }
            else {
            }
            this.pluginService.jsTree("#buildTree", jsonArray, true);
            this.changeNodeStatus(jsonArray);
            treeCallback.deselect_all();
            this.nodeType = "";
            this.enableNodeOperation = false;
            this.closeConceptAndTopicModal();
            this.resetConceptAndTopicFormValues();
        }
        if (this.conceptAndTopicForm.invalid) {
            this.validateNodeForm = true;
            return;
        }
    };
    //Delete node method
    GeneralSubjectUpdateComponent.prototype.deleteNode = function () {
        this.nodeOperationType = "delete";
        this.saveNode();
    };
    //Get children DOM
    GeneralSubjectUpdateComponent.prototype.getChildrenDOM = function (selectedNode, jsonArray) {
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
    GeneralSubjectUpdateComponent.prototype.updateDeleteStatus = function (childrenIDs, jsonArray) {
        var k, nodeIndex, nodeType, data;
        for (k = 0; k < childrenIDs.length; k++) {
            nodeIndex = jsonArray.findIndex(function (item) { return item.id === childrenIDs[k].id; });
            nodeType = jsonArray[nodeIndex].type;
            if (nodeType === "concept") {
                data = {
                    "id": this.nodeId,
                    "name": this.nodeTitle,
                    "description": this.nodeDescription,
                    "orderNumber": null,
                    "baseCurriculumId": null,
                    "baseGrade": null,
                    "status": null,
                    "curriculumId": null,
                    "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["DELETED"]
                };
                jsonArray[nodeIndex].data = data;
                jsonArray[nodeIndex].type = 'concept';
                jsonArray[nodeIndex].icon = "fa fa-trash";
            }
            else {
                data = {
                    "id": this.nodeId,
                    "name": this.nodeTitle,
                    "description": this.nodeDescription,
                    "orderNumber": null,
                    "baseCurriculumId": this.curriculumId,
                    "baseGrade": this.grade,
                    "status": null,
                    "curriculumId": null,
                    "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["DELETED"]
                };
                jsonArray[nodeIndex].data = data;
                jsonArray[nodeIndex].type = 'topic';
                jsonArray[nodeIndex].icon = "fa fa-trash";
            }
        }
    };
    //Generate JSON tree on drag and drop
    GeneralSubjectUpdateComponent.prototype.generateJSONTreeOnDragAndDrop = function () {
        var localObj = this, json = [];
        $(document).on('dnd_stop.vakata', function (e, data) {
            setTimeout(function () {
                var json = $("#buildTree").jstree(true).get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
                localObj.updateJSONTreeWithOrderNum(json);
            }, 100);
        });
    };
    GeneralSubjectUpdateComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onSaveSuccess(res); }, function (errRes) { return _this.onSaveError(errRes); });
    };
    GeneralSubjectUpdateComponent.prototype.onSaveSuccess = function (res) {
        this.pluginService.alertMessage("General subject saved successfully", "success");
        this.previousUrl();
        this.resetConceptAndTopicFormValues();
        this.generalSubjectForm.reset();
    };
    GeneralSubjectUpdateComponent.prototype.onSaveError = function (errRes) {
        this.pluginService.alertMessage("Could not save, please contact admin", "error");
    };
    GeneralSubjectUpdateComponent.prototype.saveAsDraft = function () {
        this.updatedJSONTree[0].data.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["DRAFT"];
        this.saveGeneralSubject();
        this.resetConceptAndTopicFormValues();
    };
    GeneralSubjectUpdateComponent.prototype.saveAndPublish = function () {
        this.updatedJSONTree[0].data.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["ACTIVE"];
        this.saveGeneralSubject();
        this.resetConceptAndTopicFormValues();
    };
    GeneralSubjectUpdateComponent.prototype.saveGeneralSubject = function () {
        this.subscribeToSaveResponse(this.generalSubjectService.saveGeneralSubject(this.createGeneralSubjectForm()));
    };
    GeneralSubjectUpdateComponent.prototype.createGeneralSubjectForm = function () {
        return this.updatedJSONTree;
    };
    //update JSON array with order number 
    GeneralSubjectUpdateComponent.prototype.updateJSONTreeWithOrderNum = function (json) {
        this.updatedJSONTree = [];
        this.updatedJSONTree = json;
        if (this.updatedJSONTree[0].type === "concept" || this.updatedJSONTree[0].type === "topic") {
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
    GeneralSubjectUpdateComponent.prototype.changeNodeStatus = function (json) {
        var selectedNodeID, treeCallback, updatedJson;
        for (var i = 0; i < json.length; i++)
            if (json[i].data.id === undefined) {
                if (json[i].data.editStatus === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["EDITED"]) {
                    json[i].data.editStatus = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["CREATED"];
                }
                else if (json[i].data.editStatus === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["DELETED"]) {
                    treeCallback = $('#buildTree').jstree(true);
                    selectedNodeID = treeCallback.get_selected()[0];
                    treeCallback.delete_node($('#' + selectedNodeID));
                    updatedJson = $("#buildTree").jstree(true).get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
                    json = updatedJson;
                }
            }
        this.updateJSONTreeWithOrderNum(json);
    };
    GeneralSubjectUpdateComponent.prototype.toggleTreeNodes = function () {
        this.enableExpandNode = !this.enableExpandNode;
        if (this.enableExpandNode) {
            this.pluginService.openJsTreeAllNodes("#buildTree");
        }
        else {
            this.pluginService.closeJsTreeAllNodes("#buildTree");
        }
    };
    GeneralSubjectUpdateComponent.prototype.onError = function (errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    };
    GeneralSubjectUpdateComponent.prototype.previousUrl = function () {
        this.router.navigateByUrl('/general-subject');
    };
    GeneralSubjectUpdateComponent.prototype.onBack = function () {
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
    GeneralSubjectUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./general-subject-update.component.html */ "./src/app/general-subject/general-subject-update.component.html"),
            providers: [_general_subject_service__WEBPACK_IMPORTED_MODULE_4__["GeneralSubjectService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"],
            _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__["CurriculumService"],
            _general_subject_service__WEBPACK_IMPORTED_MODULE_4__["GeneralSubjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], GeneralSubjectUpdateComponent);
    return GeneralSubjectUpdateComponent;
}());



/***/ }),

/***/ "./src/app/general-subject/general-subject.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/general-subject/general-subject.module.ts ***!
  \***********************************************************/
/*! exports provided: GeneralSubjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSubjectsModule", function() { return GeneralSubjectsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! . */ "./src/app/general-subject/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _general_subject_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./general-subject-create.component */ "./src/app/general-subject/general-subject-create.component.ts");
/* harmony import */ var _general_subject_update_publish_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./general-subject-update-publish.component */ "./src/app/general-subject/general-subject-update-publish.component.ts");
/* harmony import */ var _general_subject_update_unpublish_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./general-subject-update-unpublish.component */ "./src/app/general-subject/general-subject-update-unpublish.component.ts");
/* harmony import */ var _general_subject_delete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./general-subject-delete.component */ "./src/app/general-subject/general-subject-delete.component.ts");













var GeneralSubjectsModule = /** @class */ (function () {
    function GeneralSubjectsModule() {
    }
    GeneralSubjectsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(___WEBPACK_IMPORTED_MODULE_7__["generalSubjectRoute"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["NgJhipsterModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ],
            declarations: [
                ___WEBPACK_IMPORTED_MODULE_7__["GeneralSubjectManageComponent"],
                _general_subject_create_component__WEBPACK_IMPORTED_MODULE_9__["GeneralSubjectCreateComponent"],
                ___WEBPACK_IMPORTED_MODULE_7__["GeneralSubjectUpdateComponent"],
                ___WEBPACK_IMPORTED_MODULE_7__["GeneralSubjectDetailsComponent"],
                _general_subject_delete_component__WEBPACK_IMPORTED_MODULE_12__["GeneralSubjectDeleteComponent"],
                _general_subject_update_publish_component__WEBPACK_IMPORTED_MODULE_10__["GeneralSubjectPublishComponent"],
                _general_subject_update_unpublish_component__WEBPACK_IMPORTED_MODULE_11__["GeneralSubjectUnpublishComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], GeneralSubjectsModule);
    return GeneralSubjectsModule;
}());



/***/ }),

/***/ "./src/app/general-subject/general-subject.route.ts":
/*!**********************************************************!*\
  !*** ./src/app/general-subject/general-subject.route.ts ***!
  \**********************************************************/
/*! exports provided: GeneralSubjectResolve, GeneralSubjectWithTreeResolve, generalSubjectRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSubjectResolve", function() { return GeneralSubjectResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSubjectWithTreeResolve", function() { return GeneralSubjectWithTreeResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generalSubjectRoute", function() { return generalSubjectRoute; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _general_subject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./general-subject.service */ "./src/app/general-subject/general-subject.service.ts");
/* harmony import */ var _general_subject_manage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./general-subject-manage.component */ "./src/app/general-subject/general-subject-manage.component.ts");
/* harmony import */ var _general_subject_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./general-subject-details.component */ "./src/app/general-subject/general-subject-details.component.ts");
/* harmony import */ var _general_subject_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./general-subject-update.component */ "./src/app/general-subject/general-subject-update.component.ts");
/* harmony import */ var _shared_model_content_general_subject_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/model/content/general-subject.model */ "./src/app/shared/model/content/general-subject.model.ts");
/* harmony import */ var _general_subject_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./general-subject-create.component */ "./src/app/general-subject/general-subject-create.component.ts");
/* harmony import */ var _general_subject_update_publish_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./general-subject-update-publish.component */ "./src/app/general-subject/general-subject-update-publish.component.ts");
/* harmony import */ var _general_subject_update_unpublish_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./general-subject-update-unpublish.component */ "./src/app/general-subject/general-subject-update-unpublish.component.ts");
/* harmony import */ var _general_subject_delete_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./general-subject-delete.component */ "./src/app/general-subject/general-subject-delete.component.ts");














var GeneralSubjectResolve = /** @class */ (function () {
    function GeneralSubjectResolve(service) {
        this.service = service;
    }
    GeneralSubjectResolve.prototype.resolve = function (route, state) {
        var id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.getSubjectBySubjectId(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (response) { return response.ok; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (generalSubject) { return generalSubject.body; }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _shared_model_content_general_subject_model__WEBPACK_IMPORTED_MODULE_9__["GeneralSubject"]());
    };
    GeneralSubjectResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_general_subject_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectService"]])
    ], GeneralSubjectResolve);
    return GeneralSubjectResolve;
}());

var GeneralSubjectWithTreeResolve = /** @class */ (function () {
    function GeneralSubjectWithTreeResolve(service) {
        this.service = service;
    }
    GeneralSubjectWithTreeResolve.prototype.resolve = function (route, state) {
        var id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.getSubjectTreeBySubjectId(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (response) { return response.ok; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (generalSubject) { return generalSubject.body; }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _shared_model_content_general_subject_model__WEBPACK_IMPORTED_MODULE_9__["GeneralSubject"]());
    };
    GeneralSubjectWithTreeResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_general_subject_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectService"]])
    ], GeneralSubjectWithTreeResolve);
    return GeneralSubjectWithTreeResolve;
}());

var generalSubjectRoute = [
    {
        path: '',
        component: _general_subject_manage_component__WEBPACK_IMPORTED_MODULE_6__["GeneralSubjectManageComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Manage general subjects'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: 'create',
        component: _general_subject_create_component__WEBPACK_IMPORTED_MODULE_10__["GeneralSubjectCreateComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Create new general subject'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/edit',
        component: _general_subject_update_component__WEBPACK_IMPORTED_MODULE_8__["GeneralSubjectUpdateComponent"],
        resolve: {
            generalSubject: GeneralSubjectWithTreeResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Edit general subject',
            action: 'edit'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/view',
        component: _general_subject_details_component__WEBPACK_IMPORTED_MODULE_7__["GeneralSubjectDetailsComponent"],
        resolve: {
            generalSubject: GeneralSubjectWithTreeResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'View general subject'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/delete',
        component: _general_subject_delete_component__WEBPACK_IMPORTED_MODULE_13__["GeneralSubjectDeleteComponent"],
        resolve: {
            generalSubject: GeneralSubjectResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Delete general subject'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/publish',
        component: _general_subject_update_publish_component__WEBPACK_IMPORTED_MODULE_11__["GeneralSubjectPublishComponent"],
        resolve: {
            generalSubject: GeneralSubjectResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Publish general subject',
            action: 'publish'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/unpublish',
        component: _general_subject_update_unpublish_component__WEBPACK_IMPORTED_MODULE_12__["GeneralSubjectUnpublishComponent"],
        resolve: {
            generalSubject: GeneralSubjectResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Unpublish general subject',
            action: 'unpublish'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    }
];


/***/ }),

/***/ "./src/app/general-subject/general-subject.service.ts":
/*!************************************************************!*\
  !*** ./src/app/general-subject/general-subject.service.ts ***!
  \************************************************************/
/*! exports provided: GeneralSubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSubjectService", function() { return GeneralSubjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");






var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');
var GeneralSubjectService = /** @class */ (function () {
    function GeneralSubjectService(http) {
        this.http = http;
        this.curriculumResourceUrlSearch = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/curricula/search';
        this.curriculumResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/curricula';
        this.generalSubjectResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/general-subjects';
        this.generalSubjectSearchResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/general-subjects/search';
        this.generalSubjectResourceUrlWithTree = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/general-subjects/subject-tree';
    }
    GeneralSubjectService.prototype.getSubjectBySubjectId = function (id) {
        return this.http.get(this.generalSubjectResourceUrl + "/" + id, { observe: 'response' });
    };
    GeneralSubjectService.prototype.getSubjectSearchList = function () {
        var reqJSON = {
            "status": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["ACTIVE"]
        };
        return this.http.post(this.generalSubjectSearchResourceUrl, reqJSON, { observe: 'response' });
    };
    GeneralSubjectService.prototype.getSubjectTreeBySubjectId = function (id) {
        return this.http.get(this.generalSubjectResourceUrlWithTree + "/" + id, { observe: 'response' });
    };
    GeneralSubjectService.prototype.updateGeneralSubjectStatus = function (generalSubject) {
        return this.http.put(this.generalSubjectResourceUrl, generalSubject, { observe: 'response' });
    };
    GeneralSubjectService.prototype.query = function (req) {
        var options = Object(_shared__WEBPACK_IMPORTED_MODULE_4__["createRequestOption"])(req);
        return this.http.get(this.generalSubjectResourceUrl, { params: options, observe: 'response' });
    };
    GeneralSubjectService.prototype.delete = function (id) {
        return this.http.delete(this.generalSubjectResourceUrl + "/" + id, { observe: 'response' });
    };
    GeneralSubjectService.prototype.saveGeneralSubject = function (generalSubject) {
        return this.http.post(this.generalSubjectResourceUrlWithTree, generalSubject, { headers: headers, observe: 'response' });
    };
    GeneralSubjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GeneralSubjectService);
    return GeneralSubjectService;
}());



/***/ }),

/***/ "./src/app/general-subject/index.ts":
/*!******************************************!*\
  !*** ./src/app/general-subject/index.ts ***!
  \******************************************/
/*! exports provided: GeneralSubjectCreateComponent, GeneralSubjectDeleteComponent, GeneralSubjectPublishComponent, GeneralSubjectUnpublishComponent, GeneralSubjectManageComponent, GeneralSubjectUpdateComponent, GeneralSubjectDetailsComponent, GeneralSubjectResolve, GeneralSubjectWithTreeResolve, generalSubjectRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _general_subject_manage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general-subject-manage.component */ "./src/app/general-subject/general-subject-manage.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeneralSubjectManageComponent", function() { return _general_subject_manage_component__WEBPACK_IMPORTED_MODULE_0__["GeneralSubjectManageComponent"]; });

/* harmony import */ var _general_subject_update_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general-subject-update.component */ "./src/app/general-subject/general-subject-update.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeneralSubjectUpdateComponent", function() { return _general_subject_update_component__WEBPACK_IMPORTED_MODULE_1__["GeneralSubjectUpdateComponent"]; });

/* harmony import */ var _general_subject_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general-subject-create.component */ "./src/app/general-subject/general-subject-create.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeneralSubjectCreateComponent", function() { return _general_subject_create_component__WEBPACK_IMPORTED_MODULE_2__["GeneralSubjectCreateComponent"]; });

/* harmony import */ var _general_subject_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general-subject-details.component */ "./src/app/general-subject/general-subject-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeneralSubjectDetailsComponent", function() { return _general_subject_details_component__WEBPACK_IMPORTED_MODULE_3__["GeneralSubjectDetailsComponent"]; });

/* harmony import */ var _general_subject_delete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general-subject-delete.component */ "./src/app/general-subject/general-subject-delete.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeneralSubjectDeleteComponent", function() { return _general_subject_delete_component__WEBPACK_IMPORTED_MODULE_4__["GeneralSubjectDeleteComponent"]; });

/* harmony import */ var _general_subject_update_publish_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./general-subject-update-publish.component */ "./src/app/general-subject/general-subject-update-publish.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeneralSubjectPublishComponent", function() { return _general_subject_update_publish_component__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectPublishComponent"]; });

/* harmony import */ var _general_subject_update_unpublish_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./general-subject-update-unpublish.component */ "./src/app/general-subject/general-subject-update-unpublish.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeneralSubjectUnpublishComponent", function() { return _general_subject_update_unpublish_component__WEBPACK_IMPORTED_MODULE_6__["GeneralSubjectUnpublishComponent"]; });

/* harmony import */ var _general_subject_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./general-subject.route */ "./src/app/general-subject/general-subject.route.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeneralSubjectResolve", function() { return _general_subject_route__WEBPACK_IMPORTED_MODULE_7__["GeneralSubjectResolve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeneralSubjectWithTreeResolve", function() { return _general_subject_route__WEBPACK_IMPORTED_MODULE_7__["GeneralSubjectWithTreeResolve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generalSubjectRoute", function() { return _general_subject_route__WEBPACK_IMPORTED_MODULE_7__["generalSubjectRoute"]; });











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

/***/ "./src/app/shared/model/content/general-subject.model.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/model/content/general-subject.model.ts ***!
  \***************************************************************/
/*! exports provided: GeneralSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSubject", function() { return GeneralSubject; });
var GeneralSubject = /** @class */ (function () {
    function GeneralSubject(id, title, description, status, data, icon, parent, disabled, text, type, state, a_attr, li_attr, curriculumID, name, acronym, gradesApplicableFrom, gradesApplicableTo, grades) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.data = data;
        this.icon = icon;
        this.parent = parent;
        this.disabled = disabled;
        this.text = text;
        this.type = type;
        this.state = state;
        this.a_attr = a_attr;
        this.li_attr = li_attr;
        this.curriculumID = curriculumID;
        this.name = name;
        this.acronym = acronym;
        this.gradesApplicableFrom = gradesApplicableFrom;
        this.gradesApplicableTo = gradesApplicableTo;
        this.grades = grades;
    }
    return GeneralSubject;
}());



/***/ })

}]);
//# sourceMappingURL=general-subject-general-subject-module.js.map