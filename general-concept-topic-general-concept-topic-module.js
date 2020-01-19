(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["general-concept-topic-general-concept-topic-module"],{

/***/ "./src/app/general-concept-topic/general-concept-topic.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/general-concept-topic/general-concept-topic.module.ts ***!
  \***********************************************************************/
/*! exports provided: GeneralConceptAndTopicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralConceptAndTopicModule", function() { return GeneralConceptAndTopicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _general_topic_question_manage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general-topic-question-manage.component */ "./src/app/general-concept-topic/general-topic-question-manage.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _general_concept_topic_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general-concept-topic.route */ "./src/app/general-concept-topic/general-concept-topic.route.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _general_topic_question_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./general-topic-question-create.component */ "./src/app/general-concept-topic/general-topic-question-create.component.ts");
/* harmony import */ var _question_builder_question_builder_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../question-builder/question-builder.module */ "./src/app/question-builder/question-builder.module.ts");
/* harmony import */ var _general_topic_content_manage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./general-topic-content-manage.component */ "./src/app/general-concept-topic/general-topic-content-manage.component.ts");
/* harmony import */ var _syllabus_lesson_topic_syllabus_lesson_topic_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../syllabus-lesson-topic/syllabus-lesson-topic.module */ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.module.ts");














var GeneralConceptAndTopicModule = /** @class */ (function () {
    function GeneralConceptAndTopicModule() {
    }
    GeneralConceptAndTopicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _question_builder_question_builder_module__WEBPACK_IMPORTED_MODULE_11__["QuestionBuilderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                ng_jhipster__WEBPACK_IMPORTED_MODULE_7__["NgJhipsterModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_general_concept_topic_route__WEBPACK_IMPORTED_MODULE_4__["generalConceptAndTopicRoute"]),
                _syllabus_lesson_topic_syllabus_lesson_topic_module__WEBPACK_IMPORTED_MODULE_13__["SyllabusLessonTopicModule"]
            ],
            declarations: [
                _general_topic_content_manage_component__WEBPACK_IMPORTED_MODULE_12__["GeneralTopicContentManageComponent"],
                _general_topic_question_manage_component__WEBPACK_IMPORTED_MODULE_2__["GeneralTopicQuestionManageComponent"],
                _general_topic_question_create_component__WEBPACK_IMPORTED_MODULE_10__["GeneralTopicQuestionCreateComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], GeneralConceptAndTopicModule);
    return GeneralConceptAndTopicModule;
}());



/***/ }),

/***/ "./src/app/general-concept-topic/general-concept-topic.route.ts":
/*!**********************************************************************!*\
  !*** ./src/app/general-concept-topic/general-concept-topic.route.ts ***!
  \**********************************************************************/
/*! exports provided: generalConceptAndTopicRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generalConceptAndTopicRoute", function() { return generalConceptAndTopicRoute; });
/* harmony import */ var _general_topic_question_manage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general-topic-question-manage.component */ "./src/app/general-concept-topic/general-topic-question-manage.component.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _general_topic_question_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general-topic-question-create.component */ "./src/app/general-concept-topic/general-topic-question-create.component.ts");
/* harmony import */ var _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../question-builder/mcq-standard */ "./src/app/question-builder/mcq-standard/index.ts");
/* harmony import */ var _question_builder_matchlist_matchlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../question-builder/matchlist/matchlist.component */ "./src/app/question-builder/matchlist/matchlist.component.ts");
/* harmony import */ var _question_builder_mcq_choicematrix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../question-builder/mcq-choicematrix */ "./src/app/question-builder/mcq-choicematrix/index.ts");
/* harmony import */ var _general_topic_content_manage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./general-topic-content-manage.component */ "./src/app/general-concept-topic/general-topic-content-manage.component.ts");
/* harmony import */ var _syllabus_lesson_topic_topic_question_topic_question_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../syllabus-lesson-topic/topic-question/topic-question-details.component */ "./src/app/syllabus-lesson-topic/topic-question/topic-question-details.component.ts");
/* harmony import */ var _question_builder_cloze_drag_n_drop_drag_n_drop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../question-builder/cloze/drag-n-drop/drag-n-drop.component */ "./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.ts");
/* harmony import */ var _syllabus_lesson_topic_topic_question_topic_question_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../syllabus-lesson-topic/topic-question/topic-question-update.component */ "./src/app/syllabus-lesson-topic/topic-question/topic-question-update.component.ts");










var generalConceptAndTopicRoute = [
    {
        path: "", redirectTo: "general-topic-question", pathMatch: "full"
    },
    {
        path: 'general-topic-question',
        component: _general_topic_question_manage_component__WEBPACK_IMPORTED_MODULE_0__["GeneralTopicQuestionManageComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Manage general topic questions'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]]
    },
    {
        path: ':id/general-topic-question-create',
        component: _general_topic_question_create_component__WEBPACK_IMPORTED_MODULE_2__["GeneralTopicQuestionCreateComponent"],
        children: [
            {
                path: 'mcqstandard',
                component: _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_3__["MCQStandardComponent"],
                data: {
                    type: "MCQ_SINGLE",
                    title: "Create"
                },
            },
            {
                path: "mcqstandard/:qid",
                component: _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_3__["MCQStandardComponent"],
                data: {
                    type: "MCQ_SINGLE",
                    title: "Edit"
                }
            },
            {
                path: "mcqmultiple",
                component: _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_3__["MCQStandardComponent"],
                data: {
                    type: "MCQ_MULTIPLE",
                    mode: "Create"
                }
            },
            {
                path: "mcqmultiple/:qid",
                component: _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_3__["MCQStandardComponent"],
                data: {
                    type: "MCQ_MULTIPLE",
                    mode: "Edit"
                }
            },
            {
                path: "mcqtruefalse",
                component: _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_3__["MCQStandardComponent"],
                data: {
                    type: "MCQ_TRUE_FALSE",
                    title: "Create"
                }
            },
            {
                path: "mcqtruefalse/:qid",
                component: _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_3__["MCQStandardComponent"],
                data: {
                    type: "MCQ_TRUE_FALSE",
                    title: "Edit"
                }
            },
            {
                path: 'mcqchoicematrix',
                component: _question_builder_mcq_choicematrix__WEBPACK_IMPORTED_MODULE_5__["MCQChoiceMatrixComponent"],
                data: {
                    title: "Create",
                    type: "MCQ_CHOICE_MATRIX"
                }
            }, {
                path: 'mcqchoicematrix/:qid',
                component: _question_builder_mcq_choicematrix__WEBPACK_IMPORTED_MODULE_5__["MCQChoiceMatrixComponent"],
                data: {
                    title: "Edit",
                    type: "MCQ_CHOICE_MATRIX"
                }
            }, {
                path: "matchlist",
                component: _question_builder_matchlist_matchlist_component__WEBPACK_IMPORTED_MODULE_4__["MatchlistComponent"],
                data: {
                    title: "Create",
                    type: "MCQ_MATCH_LIST"
                }
            },
            {
                path: "matchlist/:qid",
                component: _question_builder_matchlist_matchlist_component__WEBPACK_IMPORTED_MODULE_4__["MatchlistComponent"],
                data: {
                    title: "Edit",
                    type: "MCQ_MATCH_LIST"
                }
            },
            {
                path: "clozedrag",
                component: _question_builder_cloze_drag_n_drop_drag_n_drop_component__WEBPACK_IMPORTED_MODULE_8__["DragAndDropComponent"],
                data: {
                    title: "Create",
                    type: "mcq-drag"
                }
            },
            {
                path: "clozedrag/:qid",
                component: _question_builder_cloze_drag_n_drop_drag_n_drop_component__WEBPACK_IMPORTED_MODULE_8__["DragAndDropComponent"],
                data: {
                    title: "Edit",
                    type: "mcq-drag"
                }
            }
        ],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Create general topic question'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]]
    },
    {
        path: ':id/general-topic-question-view',
        component: _syllabus_lesson_topic_topic_question_topic_question_details_component__WEBPACK_IMPORTED_MODULE_7__["CurriculumTopicQuestionDetailsComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'View general topic question'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]]
    },
    {
        path: ':id/general-topic-question-edit',
        component: _syllabus_lesson_topic_topic_question_topic_question_update_component__WEBPACK_IMPORTED_MODULE_9__["CurriculumTopicQuestionUpdateComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Edit general topic question'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]]
    },
    {
        path: 'general-topic-content',
        component: _general_topic_content_manage_component__WEBPACK_IMPORTED_MODULE_6__["GeneralTopicContentManageComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Manage general topic content'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]]
    }
];


/***/ }),

/***/ "./src/app/general-concept-topic/general-concept-topic.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/general-concept-topic/general-concept-topic.service.ts ***!
  \************************************************************************/
/*! exports provided: GeneralConceptAndTopicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralConceptAndTopicService", function() { return GeneralConceptAndTopicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');
var GeneralConceptAndTopicService = /** @class */ (function () {
    function GeneralConceptAndTopicService(http) {
        this.http = http;
        this.generalTopicsResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/general-topics/all-details';
        this.topicContentResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/general-topic-contents';
        this.contentResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/contents';
        this.questionResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/questions';
    }
    GeneralConceptAndTopicService.prototype.getTopicContentList = function (id) {
        return this.http.get(this.generalTopicsResourceUrl + "/" + id, { observe: 'response' });
    };
    GeneralConceptAndTopicService.prototype.getTopicQuestionList = function (id) {
        return this.http.get(this.generalTopicsResourceUrl + "/" + id, { observe: 'response' });
    };
    GeneralConceptAndTopicService.prototype.getContentByContentId = function (id) {
        return this.http.get(this.contentResourceUrl + "/" + id, { observe: 'response' });
    };
    GeneralConceptAndTopicService.prototype.updateContent = function (content) {
        return this.http.put(this.contentResourceUrl, content, { headers: headers, observe: 'response' });
    };
    GeneralConceptAndTopicService.prototype.saveTopicContent = function (topicContents) {
        return this.http.post(this.topicContentResourceUrl, topicContents, { headers: headers, observe: 'response' });
    };
    GeneralConceptAndTopicService.prototype.updateTopicContents = function (topicContents) {
        return this.http.put(this.topicContentResourceUrl, topicContents, { headers: headers, observe: 'response' });
    };
    GeneralConceptAndTopicService.prototype.deleteTopicContents = function (contentIds) {
        return this.http.delete(this.topicContentResourceUrl + "/" + "batch" + "/" + contentIds, { observe: 'response' });
    };
    GeneralConceptAndTopicService.prototype.saveTopicQuestion = function (question) {
        return this.http.post(this.questionResourceUrl, question, { headers: headers, observe: 'response' });
    };
    GeneralConceptAndTopicService.prototype.deleteTopicQuestions = function (questionIds) {
        return this.http.delete(this.questionResourceUrl + "/" + "batch" + "/" + questionIds, { observe: 'response' });
    };
    GeneralConceptAndTopicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GeneralConceptAndTopicService);
    return GeneralConceptAndTopicService;
}());



/***/ }),

/***/ "./src/app/general-concept-topic/general-topic-content-manage.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/general-concept-topic/general-topic-content-manage.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 filterbg my-4 rounded\">\n    <div class=\"filtericon font-20\">\n        <i class=\"fa fa-filter\"></i>\n    </div>\n    <div class=\"row d-flex justify-content-start align-items-center\">\n        <div class=\"col-lg-3 mb-3\">\n            <ng-select [items]=\"subjects\" bindLabel=\"title\" placeholder=\"Select subject\" [(ngModel)]=\"selectedSubject\">\n            </ng-select>\n        </div>\n    </div>\n\n    <div class=\"d-flex justify-content-end pb-3 row\">\n        <div class=\"col-lg-2\">\n            <button class=\"btn btn-success float-right waves-effect waves-light\" (click)=\"loadSubjectTree()\">\n                <i class=\"fa fa-filter mr-2\"></i>Apply\n            </button>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-xxl-3 mb-3 py-3\">\n        <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"subjectTree.length > 1\">\n            <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\n                <i class=\"fa fa-clone mr-2\"></i>\n                <span *ngIf=\"enableExpandNode === false\">\n                    Expand all\n                </span>\n                <span *ngIf=\"enableExpandNode === true\">\n                    Collapse all\n                </span>\n            </div>\n        </div>\n        <div id=\"treeView\"></div>\n    </div>\n    <div class=\"col-xxl-9 mb-3 py-3\">\n        <div *ngIf=\"nodeType === 'root'\">\n            <p><b>Subject name</b></p>\n            <p>{{nodeName}}</p>\n            <p><b>Subject description</b></p>\n            <p>{{nodeDescription}}</p>\n        </div>\n\n        <div *ngIf=\"nodeType === 'concept'\">\n            <p><b>Concept name</b></p>\n            <p>{{nodeName}}</p>\n            <p><b>Concept description</b></p>\n            <p>{{nodeDescription}}</p>\n        </div>\n\n        <div *ngIf=\"nodeType === 'topic'\">\n            <div class=\"d-flex w-100 justify-content-between align-items-center\">\n                <div>\n                    <h4 class=\"font-24 mb-2\">{{nodeName}}</h4>\n                </div>\n                <div class=\"d-flex align-items-start justify-content-end\">\n                    <div class=\"btn btn-primary text-white mb-2\" (click)=\"addContent()\">\n                        <i class=\"fa fa-plus-circle mr-2\"></i> Add content\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"d-flex flex-wrap w-100\" *ngIf=\"topicContents\">\n                <table class=\"table table-hover table-striped table-bordered nowrap w-100\" id=\"dragTable\">\n                    <thead>\n                        <tr>\n                            <th>Select</th>\n                            <th>Order number</th>\n                            <th>Title</th>\n                            <th>Active Web URL</th>\n                            <th>Actions</th>\n                        </tr>\n                    </thead>\n                    <tbody id=\"dragBody\">\n                        <tr *ngFor=\"let topiccontent of topicContents;trackBy: trackId;let topicIndex = index\">\n                            <td data-column=\"Select\" title=\"{{topiccontent.id}}\">\n                                <div class=\"checkbox\">\n                                    <input type=\"checkbox\" id=\"{{topiccontent.id}}\"\n                                        (change)=\"checkSelectedContents($event)\" class=\"checkAll\">\n                                    <label for=\"{{topiccontent.id}}\"></label>\n                                </div>\n                            </td>\n                            <td data-column=\"Order number\" class=\"index\">\n                                {{topiccontent.orderNumber}}\n                            </td>\n                            <td data-column=\"Title\">\n                                {{topiccontent.content.title}}\n                            </td>\n                            <td data-column=\"Active Web URL\">\n                                <a class=\"btn btn-link text-ellipsis\" href=\"{{topiccontent.content.webUrl}}\"\n                                    target=\"_blank\">\n                                    {{topiccontent.content.webUrl}}\n                                </a>\n                            </td>\n                            <td data-column=\"Actions\">\n                                <div>\n                                    <a class=\"btn btn-outline-info mr-1 mb-1 btn-icon-size\"\n                                        (click)=\"viewContent(topiccontent.content.id)\">\n                                        <i class=\"fa fa-eye\"></i>\n                                    </a>\n                                    <a class=\"btn btn-outline-success  mr-1 mb-1 btn-icon-size\"\n                                        (click)=\"editContent(topiccontent.content.id)\">\n                                        <i class=\"fa fa-edit\"></i>\n                                    </a>\n                                </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <div class=\"mt-3 d-flex w-100 justify-content-end\" *ngIf=\"topicContents.length > 0\">\n                    <button class=\"btn btn-danger mr-2\" [disabled]=\"tableAction\" (click)=\"resetSelectedTopicContent()\">\n                        <i class=\"fa fa-times mr-2\"></i>Reset\n                    </button>\n                    <button class=\"btn btn-danger mr-2\" [disabled]=\"tableAction\" (click)=\"deleteTopicContents()\">\n                        <i class=\"fa fa-trash mr-2\"></i>Delete\n                    </button>\n                    <button class=\"btn btn-success\" [disabled]=\"updateAction\"\n                        (click)=\"updateTopicContentsWithOrderNumber()\">\n                        <i class=\"fa fa-save mr-2\"></i>Update order\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"generalTopicContent\">\n    <div class=\"modal-dialog modal-full-height modal-right modal-notify\" role=\"document\">\n        <div class=\"modal-content\" [formGroup]=\"topicContentForm\">\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\n                <h5 class=\"modal-title text-white\">\n                    {{modalTitleName}} content\n                </h5>\n                <div class=\"close btn btn-xl\" (click)=\"closeTopicContentModalWithOutSaving()\">\n                    <i class=\"fa fa-times\"></i>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                <div *ngIf=\"modalTitleName === 'Add' || modalTitleName === 'Edit'\">\n                    <div class=\"form-group mb-2\">\n                        <label class=\"col-form-label\">Title\n                        </label>\n                        <input type=\"text\" placeholder=\"Enter content name (min length: 3 and max length: 75)\"\n                            class=\"form-control\" formControlName=\"contentTitle\" minlength=\"3\" maxlength=\"75\"\n                            inputRestriction=\"alphabetsNumbersWithMinus\" />\n                        <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\n                            Allowed characters - Alphabets, Numbers and One special character (-)\n                        </div>\n                    </div>\n                    <div class=\" form-group mb-2\">\n                        <label class=\"col-form-label\">Description <span class=\"text-muted\">(Optional)</span>\n                        </label>\n                        <textarea class=\"form-control description-form\"\n                            placeholder=\"Enter description (min length: 3 and max length: 250)\"\n                            formControlName=\"contentDescription\"></textarea>\n                        <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\n                            Allowed characters - Alphabets, Numbers and Special characters\n                        </div>\n                    </div>\n                    <!-- <div class=\"form-group mb-2\">\n                    <label class=\"col-form-label\">Content type\n                    </label>\n                    <ng-select [items]=\"contentType\" [disabled]=\"disableDropdown\" [ngModelOptions]=\"{standalone: true}\"\n                        bindLabel=\"name\" placeholder=\"Select content type\" [(ngModel)]=\"selectedContentType\"\n                        [searchable]=\"false\">\n                    </ng-select>\n                </div>\n                <div class=\"form-group mb-2\" *ngIf=\"selectedContentType\">\n                    <label class=\"col-form-label\">Content source\n                    </label>\n                    <ng-select [items]=\"contentSource\" [disabled]=\"disableDropdown\"\n                        [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\" placeholder=\"Select content source\"\n                        [(ngModel)]=\"selectedContentSource\" [searchable]=\"false\">\n                    </ng-select>\n                </div> -->\n                    <!-- <div *ngIf=\"selectedContentSource\"> -->\n                    <!-- <div *ngIf=\"selectedContentSource.name === 'File upload'\">\n                        <div class=\"form-group mb-2\" *ngIf=\"selectedContentSource.name === 'File upload'\">\n                            <label class=\"col-form-label\">File\n                            </label>\n                            <div class=\"custom-file\" *ngIf=\"selectedContentType.tag === 'DOCUMENT'\">\n                                <input type=\"file\" (change)=\"onDocumentFileChanges($event)\" id=\"documentFile\" />\n                                <label class=\"custom-file-label\" for=\"documentFile\">\n                                    <i>\n                                        {{fileName}}\n                                    </i></label>\n                            </div>\n                            <div class=\"custom-file\" *ngIf=\"selectedContentType.tag === 'VIDEO'\">\n                                <input type=\"file\" alife-file-to-base64 (onFileChanged)=\"onVideoFileChanges($event)\"\n                                    id=\"videoFile\" />\n                                <label class=\"custom-file-label\" for=\"videoFile\">\n                                    <i>\n                                        {{fileName}}\n                                    </i></label>\n                            </div>\n                            <div class=\" d-flex w-100\" *ngIf=\"modalTitleName !== 'View'\">\n                                <div class=\"text-muted font-15 my-2\" *ngIf=\"selectedContentType.tag === 'DOCUMENT'\">\n                                    Only PDF will allow Max file size - 100 MB\n                                </div>\n                                <div class=\"text-muted font-15 my-2\" *ngIf=\"selectedContentType.tag === 'VIDEO'\">\n                                    Max file size - 200 MB\n                                </div>\n                            </div>\n                            <div class=\"d-flex w-100 my-2\">\n                                <div *ngIf=\"selectedContentType.tag === 'VIDEO'\">\n                                    <div *ngIf=\"modalTitleName !== 'View'\">\n                                        <button class=\"btn btn-warning mr-2\" (click)=\"uploadVideoFile()\"\n                                            *ngIf=\"!uploadedFileName && !uploadedFilePath\">\n                                            <i class=\"fa fa-upload mr-2\"></i>Upload file\n                                        </button>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"selectedContentType.tag === 'DOCUMENT'\">\n                                    <div *ngIf=\"modalTitleName !== 'View'\">\n                                        <button class=\"btn btn-warning mr-2\" (click)=\"uploadDocumentFile()\"\n                                            *ngIf=\"!uploadedFileName && !uploadedFilePath\">\n                                            <i class=\"fa fa-upload mr-2\"></i>Upload file\n                                        </button>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"showFileAction\" class=\"d-flex justify-content-between\">\n                                    <a class=\"btn btn-info mr-2\" (click)=\"downloadFile()\" *ngIf=\"uploadedFileName\">\n                                        <i class=\"fa fa-download mr-2\"></i>{{uploadedFileName}}\n                                    </a>\n                                    <div *ngIf=\" modalTitleName !=='View'\">\n                                        <a class=\" btn btn-danger\" (click)=\"deleteUploadedFile()\"\n                                            *ngIf=\"uploadedFileName\">\n                                            <i class=\"fa fa-trash mr-2\"></i>Delete file\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div> -->\n                    <!-- <div *ngIf=\"selectedContentSource.name !== 'File upload'\"> -->\n                    <div class=\"border p-2 mb-2\">\n                        <div class=\"form-group mb-2\">\n                            <label class=\"col-form-label\">Web URL\n                            </label>\n                            <input type=\"url\" class=\"form-control\"\n                                placeholder=\"Enter web url (minlength: 3 and maxlength: 2048)\" minlength=\"3\"\n                                maxlength=\"2048\" formControlName=\"webUrl1\">\n                            <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\n                                Allowed characters - Alphabets, Numbers and Special characters\n                            </div>\n                        </div>\n                        <div class=\"form-group mb-2\">\n                            <label class=\"col-form-label\">Publisher\n                            </label>\n                            <input type=\"text\" class=\"form-control\"\n                                placeholder=\"Enter publisher (minlength: 3 and maxlength: 50)\"\n                                inputRestriction=\"alphabetsWithSpace\" formControlName=\"publisher1\">\n                            <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\n                                Allowed characters - Alphabets\n                            </div>\n                        </div>\n                        <div class=\"form-group mb-2 radio d-flex\">\n                            <input type=\"radio\" name=\"activeUrl\" id=\"webUrl1\" [checked]=\"checkUrl1\"\n                                (click)=\"onActiveWebUrlSelection($event)\" [disabled]=\"disableUrl\">\n                            <label for=\"webUrl1\">is Active</label>\n                        </div>\n                    </div>\n                    <div class=\"border p-2 mb-2\">\n                        <div class=\"form-group mb-2\">\n                            <label class=\"col-form-label\">Web URL <span class=\"text-muted\">\n                                    (Optional)\n                                </span>\n                            </label>\n                            <input type=\"url\" class=\"form-control\"\n                                placeholder=\"Enter web url (minlength: 3 and maxlength: 2048)\" minlength=\"3\"\n                                maxlength=\"2048\" formControlName=\"webUrl2\">\n                            <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\n                                Allowed characters - Alphabets, Numbers and Special characters\n                            </div>\n                        </div>\n                        <div class=\"form-group mb-2\">\n                            <label class=\"col-form-label\">Publisher\n                            </label>\n                            <input type=\"text\" class=\"form-control\"\n                                placeholder=\"Enter publisher (minlength: 3 and maxlength: 50)\"\n                                inputRestriction=\"alphabetsWithSpace\" formControlName=\"publisher2\">\n                            <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\n                                Allowed characters - Alphabets\n                            </div>\n                        </div>\n                        <div class=\"form-group mb-2 radio d-flex\">\n                            <input type=\"radio\" name=\"activeUrl\" id=\"webUrl2\" [checked]=\"checkUrl2\"\n                                (click)=\"onActiveWebUrlSelection($event)\" [disabled]=\"disableUrl\">\n                            <label for=\"webUrl2\">is Active</label>\n                        </div>\n                    </div>\n                    <div class=\"border p-2 mb-2\">\n                        <div class=\"form-group mb-2\">\n                            <label class=\"col-form-label\">Web URL <span class=\"text-muted\">\n                                    (Optional)\n                                </span>\n                            </label>\n                            <input type=\"url\" class=\"form-control\"\n                                placeholder=\"Enter web url (minlength: 3 and maxlength: 2048)\" minlength=\"3\"\n                                maxlength=\"2048\" formControlName=\"webUrl3\">\n                            <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\n                                Allowed characters - Alphabets, Numbers and Special characters\n                            </div>\n                        </div>\n                        <div class=\"form-group mb-2\">\n                            <label class=\"col-form-label\">Publisher\n                            </label>\n                            <input type=\"text\" class=\"form-control\"\n                                placeholder=\"Enter publisher (minlength: 3 and maxlength: 50)\"\n                                inputRestriction=\"alphabetsWithSpace\" formControlName=\"publisher3\">\n                            <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\n                                Allowed characters - Alphabets\n                            </div>\n                        </div>\n                        <div class=\"form-group mb-2 radio d-flex\">\n                            <input type=\"radio\" name=\"activeUrl\" id=\"webUrl3\" [checked]=\"checkUrl3\"\n                                (click)=\"onActiveWebUrlSelection($event)\" [disabled]=\"disableUrl\">\n                            <label for=\"webUrl3\">is Active</label>\n                        </div>\n                    </div>\n                    <!-- </div> -->\n                    <!-- </div> -->\n                </div>\n                <div *ngIf=\"modalTitleName === 'View'\">\n                    <div class=\"d-flex justify-content-between w-100\">\n                        <p><b>Title </b></p>\n                        <p>{{contentDetails.content.title}}</p>\n                    </div>\n                    <div class=\"d-flex justify-content-between w-100\" *ngIf=\"contentDetails.content.description\">\n                        <p><b>Description</b></p>\n                        <p>{{contentDetails.content.description}}</p>\n                    </div>\n                    <div *ngIf=\"contentDetails.content.url1\">\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Web URL 1</b></p>\n                            <p>{{contentDetails.content.url1}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Publisher 1</b></p>\n                            <p>{{contentDetails.content.publisher1}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Active 1</b></p>\n                            <div>\n                                <div class=\"radio\">\n                                    <input type=\"radio\" id=\"url1\" name=\"checkActiveURL\" [checked]=\"checkUrl1\"\n                                        [disabled]=\"true\">\n                                    <label for=\"url1\"></label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"contentDetails.content.url2\">\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Web URL 2</b></p>\n                            <p>{{contentDetails.content.url2}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Publisher 2</b></p>\n                            <p>{{contentDetails.content.publisher2}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Active 2</b></p>\n                            <div>\n                                <div class=\"radio\">\n                                    <input type=\"radio\" id=\"url2\" name=\"checkActiveURL\" [checked]=\"checkUrl2\"\n                                        [disabled]=\"true\">\n                                    <label for=\"url2\"></label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"contentDetails.content.url3\">\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Web URL 3</b></p>\n                            <p>{{contentDetails.content.url3}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Publisher 3</b></p>\n                            <p>{{contentDetails.content.publisher3}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Active 3</b></p>\n                            <div>\n                                <div class=\"radio\">\n                                    <input type=\"radio\" id=\"url3\" name=\"checkActiveURL\" [checked]=\"checkUrl3\"\n                                        [disabled]=\"true\">\n                                    <label for=\"url3\"></label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <div *ngIf=\"modalTitleName === 'Add' || modalTitleName === 'Edit'\">\n                    <button class=\"btn btn-danger\" (click)=\"cancelTopicContent()\">\n                        <i class=\"fa fa-times mr-2\"></i>\n                        Reset\n                    </button>\n                </div>\n\n                <div *ngIf=\"modalTitleName === 'Add'\">\n                    <button class=\"btn btn-success\" (click)=\"saveTopicContent()\" [disabled]=\"validateContent\">\n                        <i class=\"fa fa-save mr-2\"></i>\n                        Save\n                    </button>\n                </div>\n\n                <div *ngIf=\"modalTitleName === 'Edit'\">\n                    <button class=\"btn btn-success\" (click)=\"updateTopicContents()\" [disabled]=\"validateContent\">\n                        <i class=\"fa fa-save mr-2\"></i>\n                        Save\n                    </button>\n                </div>\n\n                <div *ngIf=\"modalTitleName === 'View'\">\n                    <button class=\"btn btn-danger\" (click)=\"closeTopicContentModal()\">\n                        <i class=\"fa fa-times mr-2\"></i>\n                        Close\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/general-concept-topic/general-topic-content-manage.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/general-concept-topic/general-topic-content-manage.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GeneralTopicContentManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralTopicContentManageComponent", function() { return GeneralTopicContentManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general-concept-topic.service */ "./src/app/general-concept-topic/general-concept-topic.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../general-subject/general-subject.service */ "./src/app/general-subject/general-subject.service.ts");
/* harmony import */ var _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/file-management/file-management.service */ "./src/app/shared/file-management/file-management.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_10__);











var GeneralTopicContentManageComponent = /** @class */ (function () {
    function GeneralTopicContentManageComponent(_router, generalSubjectService, generalTopicContentService, formBuilder, pluginService, commonService, changeDetectRef, fileService) {
        this._router = _router;
        this.generalSubjectService = generalSubjectService;
        this.generalTopicContentService = generalTopicContentService;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.commonService = commonService;
        this.changeDetectRef = changeDetectRef;
        this.fileService = fileService;
        this.subjectTree = [];
        this.topicContents = [];
        this.contentDetails = {};
        this.contentSource = [];
        this.contentType = [];
        this.contentIds = [];
        this.selectedFile = null;
        this.enableExpandNode = false;
        this.topicContents = [];
        this.fileName = "No file chosen";
        this.tableAction = true;
        this.updateAction = true;
        this.checkUrl1 = true;
    }
    GeneralTopicContentManageComponent.prototype.ngOnInit = function () {
        this.loadSubjectData();
        this.createTopicContentForm();
        this.getContentType();
        this.getContentSource();
    };
    GeneralTopicContentManageComponent.prototype.getContentType = function () {
        var _this = this;
        this.commonService.getContentTypeList().subscribe(function (typeData) {
            _this.contentType = typeData;
        });
    };
    GeneralTopicContentManageComponent.prototype.getContentSource = function () {
        var _this = this;
        this.commonService.getContentSourceList().subscribe(function (sourceData) {
            _this.contentSource = sourceData;
        });
    };
    GeneralTopicContentManageComponent.prototype.createTopicContentForm = function () {
        this.topicContentForm = this.formBuilder.group({
            contentTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(75)]),
            contentDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(250)]),
            webUrl1: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(2048)]),
            publisher1: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(50)]),
            webUrl2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(2048)]),
            publisher2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(50)]),
            webUrl3: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(2048)]),
            publisher3: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(50)])
        });
    };
    Object.defineProperty(GeneralTopicContentManageComponent.prototype, "contentFormControl", {
        get: function () { return this.topicContentForm.controls; },
        enumerable: true,
        configurable: true
    });
    GeneralTopicContentManageComponent.prototype.loadSubjectData = function () {
        var _this = this;
        this.generalSubjectService.getSubjectSearchList().subscribe(function (res) { return _this.assignResponseToList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    GeneralTopicContentManageComponent.prototype.assignResponseToList = function (data) {
        this.subjects = data;
    };
    GeneralTopicContentManageComponent.prototype.onError = function (errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    };
    GeneralTopicContentManageComponent.prototype.showConceptAndTopicDetails = function () {
        var localThisObj = this;
        $('#treeView')
            .on('changed.jstree', function (e, data) {
            var i, j;
            for (i = 0, j = data.selected.length; i < j; i++) {
                localThisObj.nodeType = data.node.type;
                if (localThisObj.nodeType === "root") {
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                }
                else if (localThisObj.nodeType === "concept") {
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                    localThisObj.contentIds = [];
                }
                else if (localThisObj.nodeType === "topic") {
                    localThisObj.contentIds = [];
                    localThisObj.topicContents = [];
                    localThisObj.topicId = data.node.data.id;
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                    localThisObj.getTopicContentList(localThisObj.topicId);
                }
                else {
                }
            }
        });
    };
    GeneralTopicContentManageComponent.prototype.getTopicContentList = function (topicId) {
        var _this = this;
        this.generalTopicContentService.getTopicContentList(topicId).subscribe(function (res) { return _this.assignResponseToTopicList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    GeneralTopicContentManageComponent.prototype.assignResponseToTopicList = function (data) {
        this.contentIds = [];
        this.topicContents = [];
        this.topicContents = data.generalTopicContents;
        this.sortArrayByOrderNumber(this.topicContents);
        this.updateAction = true;
        this.tableAction = true;
        if (this.topicContents.length > 0) {
            this.dragTableContent();
        }
    };
    GeneralTopicContentManageComponent.prototype.ngAfterViewInit = function () {
        this.showConceptAndTopicDetails();
    };
    GeneralTopicContentManageComponent.prototype.loadSubjectTree = function () {
        var _this = this;
        if (this.selectedSubject === null || this.selectedSubject === undefined) {
            this.selectedSubject = null;
            this.pluginService.alertMessage("Please select a filter and then apply", "error");
        }
        else {
            this.subjectTree = [];
            this.pluginService.jsTree("#treeView", this.subjectTree, false);
            var subjectId = this.selectedSubject.id;
            if (subjectId) {
                this.generalSubjectService.getSubjectTreeBySubjectId(subjectId).subscribe(function (res) { return _this.assignResponsetoTree(res.body); }, function (res) { return _this.onError(res.message); });
            }
        }
    };
    GeneralTopicContentManageComponent.prototype.assignResponsetoTree = function (data) {
        this.subjectTree = data;
        this.pluginService.jsTree("#treeView", this.subjectTree, false);
        this.nodeType = "";
        this.enableExpandNode = false;
    };
    GeneralTopicContentManageComponent.prototype.trimValue = function (value) {
        if (value === null || value === undefined) {
            return value;
        }
        else {
            return value.trim();
        }
    };
    GeneralTopicContentManageComponent.prototype.ngAfterViewChecked = function () {
        this.validateTopicContentForm();
        this.changeDetectRef.detectChanges();
    };
    GeneralTopicContentManageComponent.prototype.validateTopicContentForm = function () {
        var contentName, webURL1, webURL2, webURL3;
        contentName = this.trimValue(this.topicContentForm.value.contentTitle);
        webURL1 = this.trimValue(this.topicContentForm.value.webUrl1);
        webURL2 = this.trimValue(this.topicContentForm.value.webUrl2);
        webURL3 = this.trimValue(this.topicContentForm.value.webUrl3);
        if (contentName === "" || contentName === undefined || contentName === null) {
            this.validateContent = true;
        }
        if ((this.uploadedFilePath === "" || this.uploadedFilePath === undefined || this.uploadedFilePath === null)) {
            this.validateContent = true;
        }
        if (this.topicContentForm.valid) {
            this.validateContent = false;
        }
        if (this.topicContentForm.invalid) {
            this.validateContent = true;
        }
        if (this.checkUrl1 === true) {
            if ((webURL1 === "" || webURL1 === undefined || webURL1 === null)) {
                this.validateContent = true;
            }
        }
        if (this.checkUrl2 === true) {
            if ((webURL2 === "" || webURL2 === undefined || webURL2 === null)) {
                this.validateContent = true;
            }
        }
        if (this.checkUrl3 === true) {
            if ((webURL3 === "" || webURL3 === undefined || webURL3 === null)) {
                this.validateContent = true;
            }
        }
    };
    GeneralTopicContentManageComponent.prototype.onActiveWebUrlSelection = function (event) {
        if (event.target.checked === true) {
            this.activeUrl = event.target.id;
            if (this.activeUrl === "webUrl1") {
                this.checkUrl1 = true;
                this.checkUrl2 = false;
                this.checkUrl3 = false;
            }
            else if (this.activeUrl === "webUrl2") {
                this.checkUrl2 = true;
                this.checkUrl3 = false;
                this.checkUrl1 = false;
            }
            else if (this.activeUrl === "webUrl3") {
                this.checkUrl3 = true;
                this.checkUrl1 = false;
                this.checkUrl2 = false;
            }
        }
    };
    GeneralTopicContentManageComponent.prototype.onVideoFileChanges = function (event) {
        var splitType;
        this.selectedFile = event[0];
        splitType = this.selectedFile.type.split('/');
        this.fileType = splitType[0];
        this.fileName = this.selectedFile.name;
        if ((this.fileType === "video") && (this.selectedFile.size > 209715200)) {
            this.pluginService.alertMessage("Please upload file size lesser than 200 MB", "error");
        }
    };
    GeneralTopicContentManageComponent.prototype.uploadVideoFile = function () {
        var _this = this;
        if (this.fileName !== "No file chosen") {
            if (this.fileType === "video") {
                this.fileService.getpresignedurls(this.fileName).subscribe(function (res) {
                    if (res.status === 200) {
                        _this.uploadedFileName = Object.keys(res.body)[0];
                        _this.uploadedFilePath = Object.values(res.body)[0];
                        _this.fileName = _this.uploadedFileName;
                        if (_this.uploadedFileName && _this.uploadedFilePath) {
                            var block = void 0, base64Data = void 0, dataSrc = void 0;
                            dataSrc = _this.selectedFile.base64;
                            block = dataSrc.split(";");
                            base64Data = block[1].split(",")[1];
                            _this.fileService.uploadVideoFile(_this.uploadedFilePath, base64Data).subscribe(function (event) {
                                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpResponse"]) {
                                    _this.showFileAction = true;
                                    _this.pluginService.alertMessage("File uploaded successfully", "success");
                                }
                            });
                        }
                    }
                });
            }
            else {
                this.pluginService.alertMessage("Invalid file, it support only Video formats", "error");
            }
        }
        else {
            this.pluginService.alertMessage("Please choose file and upload it", "error");
        }
    };
    GeneralTopicContentManageComponent.prototype.onDocumentFileChanges = function (event) {
        this.selectedFile = event.target.files;
        this.fileName = this.selectedFile[0].name;
        if ((this.selectedFile[0].type === "application/pdf") && (this.selectedFile[0].size > 104857600)) {
            this.pluginService.alertMessage("Please upload file size lesser than 100 MB", "error");
        }
    };
    GeneralTopicContentManageComponent.prototype.uploadDocumentFile = function () {
        var _this = this;
        if (this.fileName !== "No file chosen") {
            if (this.selectedFile[0].type === "application/pdf") {
                var file_1 = this.selectedFile.item(0);
                this.fileService.getpresignedurls(this.fileName).subscribe(function (res) {
                    if (res.status === 200) {
                        _this.uploadedFileName = Object.keys(res.body)[0];
                        _this.uploadedFilePath = Object.values(res.body)[0];
                        _this.fileName = _this.uploadedFileName;
                        if (_this.uploadedFileName && _this.uploadedFilePath) {
                            _this.fileService.uploadPDFFile(_this.uploadedFilePath, file_1).subscribe(function (event) {
                                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpResponse"]) {
                                    _this.showFileAction = true;
                                    _this.pluginService.alertMessage("File uploaded successfully", "success");
                                }
                            });
                        }
                    }
                });
            }
            else {
                this.pluginService.alertMessage("Invalid file, it support only PDF", "error");
            }
        }
        else {
            this.pluginService.alertMessage("Please choose file and upload it", "error");
        }
    };
    GeneralTopicContentManageComponent.prototype.downloadFile = function () {
        if (this.uploadedFileName) {
            this.subscribeToDownloadResponse(this.fileService.downloadFiles(this.uploadedFileName));
        }
    };
    GeneralTopicContentManageComponent.prototype.subscribeToDownloadResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onDownloadSuccess(res); }, function (errRes) { return _this.onDownloadError(errRes); });
    };
    GeneralTopicContentManageComponent.prototype.onDownloadSuccess = function (resp) {
        if (resp.body) {
            var downloadFilePath = Object.values(resp.body)[0];
            Object(file_saver__WEBPACK_IMPORTED_MODULE_10__["saveAs"])(downloadFilePath);
        }
    };
    GeneralTopicContentManageComponent.prototype.onDownloadError = function (error) {
        this.pluginService.alertMessage("Error in downloading file", "error");
    };
    GeneralTopicContentManageComponent.prototype.addContent = function () {
        this.modalTitleName = "Add";
        this.openTopicContentModal();
        this.resetFormValues();
        this.validateContent = false;
        this.selectedContentSource = null;
        this.selectedContentType = null;
        this.uploadedFileName = "";
        this.uploadedFilePath = "";
        this.fileName = "No file chosen";
    };
    GeneralTopicContentManageComponent.prototype.saveTopicContent = function () {
        if (this.topicContentForm.valid) {
            this.validateContent = false;
            var generalTopicContents = [], content = {}, contentDetail = content.content;
            contentDetail = {};
            contentDetail.title = this.trimValue(this.topicContentForm.value.contentTitle);
            contentDetail.description = this.trimValue(this.topicContentForm.value.contentDescription);
            contentDetail.url1 = this.trimValue(this.topicContentForm.value.webUrl1);
            contentDetail.url2 = this.trimValue(this.topicContentForm.value.webUrl2);
            contentDetail.url3 = this.trimValue(this.topicContentForm.value.webUrl3);
            contentDetail.publisher1 = this.trimValue(this.topicContentForm.value.publisher1);
            contentDetail.publisher2 = this.trimValue(this.topicContentForm.value.publisher2);
            contentDetail.publisher3 = this.trimValue(this.topicContentForm.value.publisher3);
            contentDetail.contentType = "VIDEO";
            contentDetail.contentSource = "WEB_URL";
            //Below codes are Video and document file upload
            // contentDetail.contentType = this.selectedContentType.tag;
            // contentDetail.contentSource = this.selectedContentSource.tag;
            // if (this.selectedContentSource.tag === "FILE_UPLOAD") {
            //     contentDetail.fileName = this.uploadedFileName;
            //     contentDetail.filePath = this.uploadedFilePath;
            // } else if (this.selectedContentSource.tag === "WEB_URL") {
            //Active web url assigning condition
            if (this.checkUrl1 === true) {
                contentDetail.webUrl = contentDetail.url1;
                contentDetail.publisher = contentDetail.publisher1;
            }
            else if (this.checkUrl2 === true) {
                contentDetail.webUrl = contentDetail.url2;
                contentDetail.publisher = contentDetail.publisher2;
            }
            else if (this.checkUrl3 === true) {
                contentDetail.webUrl = contentDetail.url3;
                contentDetail.publisher = contentDetail.publisher3;
            }
            else {
                //If user not at all changed active url, defaultly it takes first url as active
                contentDetail.webUrl = contentDetail.url1;
                contentDetail.publisher = contentDetail.publisher1;
            }
            // }
            generalTopicContents.push({
                generalTopicId: this.topicId,
                content: contentDetail,
                orderNumber: this.topicContents.length + 1
            });
            this.saveTopicContents(generalTopicContents);
        }
        if (this.topicContentForm.invalid) {
            this.validateContent = true;
        }
    };
    GeneralTopicContentManageComponent.prototype.saveTopicContents = function (generalTopicContents) {
        this.subscribeToSaveResponse(this.generalTopicContentService.saveTopicContent(generalTopicContents));
    };
    GeneralTopicContentManageComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onSaveSuccess(res); }, function (errRes) { return _this.onSaveError(errRes); });
    };
    GeneralTopicContentManageComponent.prototype.onSaveSuccess = function (res) {
        this.pluginService.alertMessage("Topic content created successfully", "success");
        this.getTopicContentList(this.topicId);
        this.checkContentType();
        this.resetFormValues();
        this.uploadedFileName = "";
        this.uploadedFilePath = "";
    };
    GeneralTopicContentManageComponent.prototype.onSaveError = function (errRes) {
        this.pluginService.alertMessage("Could not save, please contact admin", "error");
    };
    GeneralTopicContentManageComponent.prototype.openTopicContentModal = function () {
        this.pluginService.showModalWindow("#generalTopicContent");
    };
    GeneralTopicContentManageComponent.prototype.closeTopicContentModal = function () {
        this.pluginService.hideModalWindow("#generalTopicContent");
    };
    GeneralTopicContentManageComponent.prototype.closeTopicContentModalWithOutSaving = function () {
        if (this.modalTitleName === "View") {
            this.closeTopicContentModal();
        }
        else if (this.modalTitleName === "Add" || this.modalTitleName === "Edit") {
            var localthisObject = this;
            swal({
                title: "Are you sure to close without saving content ?",
                type: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes",
                confirmButtonColor: "#32b432",
                cancelButtonText: "No",
                closeOnConfirm: true,
                closeOnCancel: true
            }, function (isConfirm) {
                if (isConfirm === true) {
                    localthisObject.checkContentType();
                }
                else {
                    localthisObject.closeTopicContentModal();
                }
            });
        }
    };
    GeneralTopicContentManageComponent.prototype.checkContentType = function () {
        this.closeTopicContentModal();
        if (this.selectedContentSource) {
            if (this.selectedContentSource.tag === 'FILE_UPLOAD') {
                if (this.uploadedFilePath) {
                    this.deleteUploadedFile();
                }
            }
        }
    };
    GeneralTopicContentManageComponent.prototype.deleteUploadedFile = function () {
        this.subscribeToDeleteFiletResponse(this.fileService.deleteUploadedFile(this.uploadedFileName));
    };
    GeneralTopicContentManageComponent.prototype.subscribeToDeleteFiletResponse = function (resp) {
        var _this = this;
        resp.subscribe(function (res) { return _this.onDeleteFileSuccess(res); }, function (res) { return _this.onDeleteError(res); });
    };
    GeneralTopicContentManageComponent.prototype.onDeleteFileSuccess = function (resp) {
        this.fileName = "No file chosen";
        this.uploadedFileName = "";
        this.uploadedFilePath = "";
        this.pluginService.alertMessage("File deleted successfully", "success");
    };
    GeneralTopicContentManageComponent.prototype.getContent = function (contentId) {
        var topicContents = [], contentDetails = {};
        topicContents = this.topicContents.filter(function (item) { return item.content.id === contentId; });
        contentDetails = topicContents[0].content;
        this.patchContentFormfields(contentDetails);
        this.openTopicContentModal();
    };
    GeneralTopicContentManageComponent.prototype.getContentDetails = function (contentId) {
        var topicContents = [];
        this.contentDetails = {};
        topicContents = this.topicContents.filter(function (item) { return item.content.id === contentId; });
        this.contentDetails = topicContents[0];
        if (this.contentDetails.content.webUrl == this.contentDetails.content.url1) {
            this.checkUrl1 = true;
            this.checkUrl2 = false;
            this.checkUrl3 = false;
        }
        else if (this.contentDetails.content.webUrl == this.contentDetails.content.url2) {
            this.checkUrl2 = true;
            this.checkUrl3 = false;
            this.checkUrl1 = false;
        }
        else if (this.contentDetails.content.webUrl == this.contentDetails.content.url3) {
            this.checkUrl3 = true;
            this.checkUrl2 = false;
            this.checkUrl1 = false;
        }
        else {
            this.checkUrl1 = false;
            this.checkUrl2 = false;
            this.checkUrl3 = false;
        }
        this.openTopicContentModal();
    };
    GeneralTopicContentManageComponent.prototype.onContentError = function (errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    };
    GeneralTopicContentManageComponent.prototype.patchContentFormfields = function (contentDetails) {
        this.contentId = contentDetails.id;
        this.topicContentForm.patchValue({
            contentTitle: contentDetails.title,
            contentDescription: contentDetails.description,
            webUrl1: contentDetails.url1,
            publisher1: contentDetails.publisher1,
            webUrl2: contentDetails.url2,
            publisher2: contentDetails.publisher2,
            webUrl3: contentDetails.url3,
            publisher3: contentDetails.publisher3
        });
        // this.selectedContentType = this.contentType.filter(item => item.tag === contentDetails.contentType)[0];
        // this.selectedContentSource = this.contentSource.filter(item => item.tag === contentDetails.contentSource)[0];
        // if (this.selectedContentSource) {
        //     if (this.selectedContentSource.tag === "WEB_URL") {
        if (contentDetails.webUrl == contentDetails.url1) {
            this.checkUrl1 = true;
            this.checkUrl2 = false;
            this.checkUrl3 = false;
        }
        else if (contentDetails.webUrl == contentDetails.url2) {
            this.checkUrl2 = true;
            this.checkUrl3 = false;
            this.checkUrl1 = false;
        }
        else if (contentDetails.webUrl == contentDetails.url3) {
            this.checkUrl3 = true;
            this.checkUrl2 = false;
            this.checkUrl1 = false;
        }
        else {
            this.checkUrl1 = false;
            this.checkUrl2 = false;
            this.checkUrl3 = false;
        }
        // } else if (this.selectedContentSource.tag === "FILE_UPLOAD") {
        //     this.uploadedFileName = contentDetails.fileName;
        //     this.fileName = contentDetails.fileName;
        //     this.uploadedFilePath = contentDetails.filePath;
        // }
        // }
    };
    GeneralTopicContentManageComponent.prototype.viewContent = function (contentId) {
        this.modalTitleName = "View";
        this.getContentDetails(contentId);
    };
    GeneralTopicContentManageComponent.prototype.editContent = function (contentId) {
        this.modalTitleName = "Edit";
        this.getContent(contentId);
    };
    GeneralTopicContentManageComponent.prototype.updateTopicContents = function () {
        if (this.topicContentForm.valid) {
            var content = {}, contentDetail = content.content;
            contentDetail = {};
            contentDetail.id = this.contentId;
            contentDetail.title = this.trimValue(this.topicContentForm.value.contentTitle);
            contentDetail.description = this.trimValue(this.topicContentForm.value.contentDescription);
            contentDetail.url1 = this.trimValue(this.topicContentForm.value.webUrl1);
            contentDetail.url2 = this.trimValue(this.topicContentForm.value.webUrl2);
            contentDetail.url3 = this.trimValue(this.topicContentForm.value.webUrl3);
            contentDetail.publisher1 = this.trimValue(this.topicContentForm.value.publisher1);
            contentDetail.publisher2 = this.trimValue(this.topicContentForm.value.publisher2);
            contentDetail.publisher3 = this.trimValue(this.topicContentForm.value.publisher3);
            contentDetail.contentType = "VIDEO";
            contentDetail.contentSource = "WEB_URL";
            //Below codes are Video and document file upload
            // contentDetail.contentType = this.selectedContentType.tag;
            // contentDetail.contentSource = this.selectedContentSource.tag;
            // if (this.selectedContentSource) {
            //     //Active web url assigning condition
            //     if (this.selectedContentSource.tag === "WEB_URL") {
            if (this.checkUrl1 === true) {
                contentDetail.webUrl = contentDetail.url1;
                contentDetail.publisher = contentDetail.publisher1;
            }
            else if (this.checkUrl2 === true) {
                contentDetail.webUrl = contentDetail.url2;
                contentDetail.publisher = contentDetail.publisher2;
            }
            else if (this.checkUrl3 === true) {
                contentDetail.webUrl = contentDetail.url3;
                contentDetail.publisher = contentDetail.publisher3;
            }
            else {
                //If user not at all changed active url, defaultly it takes first url as active
                contentDetail.webUrl = contentDetail.url1;
                contentDetail.publisher = contentDetail.publisher1;
            }
            // } else if (this.selectedContentSource.tag === "FILE_UPLOAD") {
            //     contentDetail.fileName = this.uploadedFileName;
            //     contentDetail.filePath = this.uploadedFilePath;
            // }
            // }
            this.subscribeToUpdateResponse(this.generalTopicContentService.updateContent(contentDetail));
        }
        if (this.topicContentForm.invalid) {
            this.validateContent = true;
        }
    };
    GeneralTopicContentManageComponent.prototype.subscribeToUpdateResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onUpdateSuccess(res); }, function (errRes) { return _this.onUpdateError(errRes); });
    };
    GeneralTopicContentManageComponent.prototype.onUpdateSuccess = function (res) {
        this.getTopicContentList(this.topicId);
        this.checkContentType();
        this.resetFormValues();
        this.pluginService.alertMessage("Topic content updated successfully", "success");
    };
    GeneralTopicContentManageComponent.prototype.onUpdateError = function (errRes) {
        this.pluginService.alertMessage("Could not save, please contact admin", "error");
    };
    GeneralTopicContentManageComponent.prototype.cancelTopicContent = function () {
        this.resetFormValues();
    };
    GeneralTopicContentManageComponent.prototype.checkSelectedContents = function (event) {
        var selectedId, checked, index;
        checked = event.target.checked;
        selectedId = event.target.id;
        if (checked === true) {
            this.tableAction = false;
            this.contentIds.push(selectedId);
        }
        else if (checked === false) {
            index = this.contentIds.findIndex(function (item) { return item === selectedId; });
            this.contentIds.splice(index, 1);
        }
        this.contentIds = this.removeDuplicateElements(this.contentIds);
        if (this.contentIds.length <= 0) {
            this.tableAction = true;
        }
    };
    GeneralTopicContentManageComponent.prototype.removeDuplicateElements = function (array) {
        var temp = [];
        for (var i = 0; i < array.length; i++) {
            if (temp.indexOf(array[i]) == -1) {
                temp.push(array[i]);
            }
        }
        return temp;
    };
    GeneralTopicContentManageComponent.prototype.resetFormValues = function () {
        this.topicContentForm.reset();
        this.selectedContentSource = null;
        this.selectedContentType = null;
    };
    GeneralTopicContentManageComponent.prototype.resetSelectedTopicContent = function () {
        this.contentIds = [];
        $(".checkAll").prop("checked", false);
        this.tableAction = true;
    };
    GeneralTopicContentManageComponent.prototype.deleteTopicContents = function () {
        var localthisObject = this;
        swal({
            title: "Are you sure to delete content ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm === true) {
                if (localthisObject.contentIds.length > 0) {
                    localthisObject.subscribeToDeleteResponse(localthisObject.generalTopicContentService.deleteTopicContents(localthisObject.contentIds));
                }
            }
        });
    };
    GeneralTopicContentManageComponent.prototype.subscribeToDeleteResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onDeleteSuccess(res); }, function (errRes) { return _this.onDeleteError(errRes); });
    };
    GeneralTopicContentManageComponent.prototype.onDeleteSuccess = function (res) {
        this.pluginService.alertMessage("Topic content deleted successfully", "success");
        this.getTopicContentList(this.topicId);
        this.tableAction = true;
        this.contentIds = [];
    };
    GeneralTopicContentManageComponent.prototype.onDeleteError = function (errRes) {
        this.pluginService.alertMessage("Could not delete, please contact admin", "error");
    };
    GeneralTopicContentManageComponent.prototype.dragTableContent = function () {
        var localThisObj = this;
        var fixHelperModified = function (e, tr) {
            var $originals = tr.children();
            var $helper = tr.clone();
            $helper.children().each(function (index) {
                $(this).width($originals.eq(index).width());
            });
            return $helper;
        }, updateIndex = function (e, ui) {
            $("td.index", ui.item.parent()).each(function (i) {
                $(this).html(i + 1);
            });
            localThisObj.updateTopicContentOrder();
        };
        $("#dragTable #dragBody")
            .sortable({
            helper: fixHelperModified,
            stop: updateIndex
        });
        $("#dragBody").sortable({
            distance: 1,
            opacity: 0, delay: 10,
            cursor: "move",
            update: function () { }
        });
    };
    GeneralTopicContentManageComponent.prototype.updateTopicContentOrder = function () {
        var _this = this;
        this.updateAction = false;
        this.checkOrderNumChange = true;
        var table = document.querySelector('#dragTable');
        var rows = table.querySelectorAll('tbody tr');
        Array.from(rows).forEach(function (row) {
            var list = row.querySelectorAll('td');
            var contentId = Number(list[0].title);
            var newOrderNum = Number(list[1].textContent);
            for (var i = 0; i < _this.topicContents.length; i++) {
                if (_this.topicContents[i].id === contentId) {
                    _this.topicContents[i].orderNumber = newOrderNum;
                    break;
                }
            }
            _this.sortArrayByOrderNumber(_this.topicContents);
        });
    };
    GeneralTopicContentManageComponent.prototype.sortArrayByOrderNumber = function (array) {
        array.sort(function (a, b) { return (a.orderNumber > b.orderNumber) ? 1 : -1; });
    };
    GeneralTopicContentManageComponent.prototype.updateTopicContentsWithOrderNumber = function () {
        var localthisObject = this;
        swal({
            title: "Are you sure to update order ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm === true) {
                if (localthisObject.checkOrderNumChange === true) {
                    localthisObject.subscribeToUpdateTopicContentResponse(localthisObject.generalTopicContentService.updateTopicContents(localthisObject.topicContents));
                    localthisObject.updateAction = true;
                }
            }
        });
    };
    GeneralTopicContentManageComponent.prototype.subscribeToUpdateTopicContentResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onUpdateTopicContentSuccess(res); }, function (errRes) { return _this.onUpdateTopicContentError(errRes); });
    };
    GeneralTopicContentManageComponent.prototype.onUpdateTopicContentSuccess = function (res) {
        this.pluginService.alertMessage("Topic content order updated successfully", "success");
        this.getTopicContentList(this.topicId);
        this.resetFormValues();
    };
    GeneralTopicContentManageComponent.prototype.onUpdateTopicContentError = function (errRes) {
        this.pluginService.alertMessage("Could not save, please contact admin", "error");
    };
    GeneralTopicContentManageComponent.prototype.toggleTreeNodes = function () {
        this.enableExpandNode = !this.enableExpandNode;
        if (this.enableExpandNode) {
            this.pluginService.openJsTreeAllNodes("#treeView");
        }
        else {
            this.pluginService.closeJsTreeAllNodes("#treeView");
        }
    };
    GeneralTopicContentManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./general-topic-content-manage.component.html */ "./src/app/general-concept-topic/general-topic-content-manage.component.html"),
            providers: [_general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__["GeneralConceptAndTopicService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_8__["GeneralSubjectService"],
            _general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__["GeneralConceptAndTopicService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"],
            _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_9__["FileManagementService"]])
    ], GeneralTopicContentManageComponent);
    return GeneralTopicContentManageComponent;
}());



/***/ }),

/***/ "./src/app/general-concept-topic/general-topic-question-create.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/general-concept-topic/general-topic-question-create.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 my-3 justify-content-between d-flex\">\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\n        <i class=\"fa fa-chevron-left mr-2\"></i> Back\n    </div>\n</div>\n\n<div id=\"stepperTab\">\n    <ul id=\"progressbar\">\n        <li class=\"active\">\n            <span class=\"bar\">\n            </span>\n        </li>\n        <li>\n            <span class=\"bar\">\n            </span>\n        </li>\n        <li>\n            <span class=\"bar\">\n            </span>\n        </li>\n        <li>\n        </li>\n    </ul>\n\n    <fieldset>\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12 p-3 alert-warning\">\n                <p class=\"font-20 text-warning\">Step 1 - Select question type</p>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-xxl-12\">\n                <pick-question-type></pick-question-type>\n            </div>\n        </div>\n\n        <button class=\"next btn btn-success float-right\" [disabled]=\"validateQuestionType\">\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\n        </button>\n\n    </fieldset>\n\n    <fieldset>\n        <div class=\"row mb-2\">\n            <div class=\"col-xxl-12 mb-2 alert-warning p-3\">\n                <p class=\"font-20 text-warning\">Step 2 - Build question</p>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-xxl-12 mx-3\">\n                <div class=\"form-group mb-2 row d-flex justify-content-between flex-wrap mb-2\">\n                    <label class=\"font-16 mb-3\">Select question category</label>\n                    <div class=\"d-flex w-100 row\">\n                        <div class=\"radio col-xxl-3\" *ngFor=\"let category of questionCategory\">\n                            <input type=\"radio\" id=\"{{category.name}}\" name=\"assessmentCategory\"\n                                (click)=\"onSelectQuestionCategory(category.tag)\" [checked]=\"category.checked\">\n                            <label for=\"{{category.name}}\">{{category.name}}</label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group  row d-flex justify-content-between flex-wrap mb-2\">\n                    <label class=\"font-16 mb-3\">Select question complexity level</label>\n                    <div class=\"d-flex w-100 row\">\n                        <div class=\"radio col-xxl-3\" *ngFor=\"let level of questionComplexityLevel\">\n                            <input type=\"radio\" id=\"{{level.name}}\" name=\"complexityLevel\" [checked]=\"level.checked\"\n                                (click)=\"onSelectComplexityLevel(level.value)\">\n                            <label for=\"{{level.name}}\">{{level.name}}</label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"w-100\">\n            <router-outlet></router-outlet>\n        </div>\n\n        <button class=\"btn btn-success ml-2 float-right next\" [disabled]=\"validateQuestion\">\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\n        </button>\n        <div class=\"previous btn btn-danger float-right\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12 p-3 alert-warning\">\n                <p class=\"font-20 text-warning\">Step 3 - Add solution content (Optional)</p>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-xxl-12 mb-2\">\n                <label for=\"\">Solution content</label>\n                <ckeditor class=\"w-100\" [config]=\"editorSolutionConfig\" [(ngModel)]=\"solutionContent\"\n                    #questionInput=\"ngModel\" placeholder=\"Enter question (min length: 3 and max length: 4000)\"\n                    [required]=\"true\">\n                </ckeditor>\n            </div>\n        </div>\n\n        <button class=\"btn btn-success ml-2 float-right next\" (click)=\"loadPreviewQuestion()\">\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\n        </button>\n        <div class=\"previous btn btn-danger float-right\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12 p-3 alert-warning\">\n                <p class=\"font-20 text-warning\">Step 4 - Summary</p>\n            </div>\n        </div>\n\n        <div class=\"w-100\">\n            <div\n                *ngIf='questionType === \"MCQ_SINGLE\" || questionType === \"MCQ_MULTIPLE\" || questionType === \"MCQ_TRUE_FALSE\"'>\n                <div class=\"row mb-3\">\n                    <div class=\"col-xxl-12\">\n                        <div class=\"border-info p-3 alert-info font-18\" style=\"line-height: 24px;\">\n                            <span class=\"text-dark\" [MathJax]=\"questionResource.Question | sanitizeHtml\">\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row mb-3 p-3\">\n                    <div class=\"col-lg-6 col-md-12 d-flex justify-content-start mb-2  font-18\"\n                        *ngFor=\"let choice of questionResource.Choices;let i = index\">\n                        <div [ngClass]=\"{'radio': type === 'radio','checkbox': type === 'checkbox'}\">\n                            <input type=\"{{type}}\" [id]=\"choice.ChoiceId\" name=\"answer\" disabled readonly>\n                            <label for=\"{{choice.ChoiceId}}\"></label>\n                        </div>\n                        <label for=\"{{choice.ChoiceId}}\">\n                            <span [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></span>\n                        </label>\n                    </div>\n                </div>\n                <div class=\"mb-3 font-18\">\n                    <div class=\"border-success p-3 alert-success\">\n                        <div class=\"text-dark\" *ngFor=\"let data of answers;let checkIndex =index\">\n                            <span [MathJax]=\"data | sanitizeHtml\">\n                            </span>\n                            {{checkIndex  === answers.length - 1? ' ' : ','}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf='questionType === \"MCQ_CHOICE_MATRIX\"'>\n                <div class=\"row mb-3\">\n                    <div class=\"col-xxl-12\">\n                        <div class=\"border-info p-3 alert-info font-18\" style=\"line-height: 24px;\">\n                            <span class=\"text-dark\" [MathJax]=\"questionResource.Question | sanitizeHtml\">\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <table class=\"border-collapse my-2 font-18 p-3\" style=\"pointer-events: none\">\n                    <tr class=\"bg-lightgray\">\n                        <td></td>\n                        <td *ngFor=\"let option of questionResource.Options\">\n                            <span [MathJax]=\"option.OptionText | sanitizeHtml\"></span>\n                        </td>\n                    </tr>\n                    <tr style=\"background: none !important;\" *ngFor=\"let choice of questionResource.Choices\">\n                        <td><span [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></span></td>\n                        <td *ngFor=\"let option of questionResource.Options\">\n                            <div class=\"radio\">\n                                <input type=\"radio\" disabled readonly [id]=\"option.OptionId+choice.ChoiceId\"\n                                    name=\"{{ choice.ChoiceId }}\">\n                                <label for=\"{{option.OptionId+choice.ChoiceId}}\"></label>\n                            </div>\n                        </td>\n                    </tr>\n                </table>\n                <div class=\"mb-3 font-18\">\n                    <div class=\"border-success p-3 alert-success\">\n                        <span *ngIf=\"answers.length > 0\">\n                            <span class=\"text-dark\" *ngFor=\"let answer of answers;let checkIndex =index\">\n                                <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span>\n                                -\n                                <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\n                                {{checkIndex  === answers.length - 1? ' ' : ','}}\n                            </span>\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf='questionType === \"MCQ_MATCH_LIST\"'>\n                <div class=\"row mb-3\">\n                    <div class=\"col-xxl-12\">\n                        <div class=\"border-info p-3 alert-info font-18\" style=\"line-height: 24px;\">\n                            <span class=\"text-dark\" [MathJax]=\"questionResource.Question | sanitizeHtml\">\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <ng-container *ngFor=\"let answer of answers\">\n                    <div class=\"choice-container\">\n                        <div class=\"item\">\n                            <div class=\"choice--group\">\n                                <div class=\"choice--label\">\n                                    <span [MathJax]=\"answer.choiceName  | sanitizeHtml\"></span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"line-circle\">\n                        </div>\n                        <div class=\"item\">\n                            <div class=\"drag--container\">\n                                <div class=\"choice--editor option--container zone\" class=\"option--item\"\n                                    [MathJax]=\"answer.optionName  | sanitizeHtml\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </ng-container>\n                <div class=\"mb-3 font-18\">\n                    <div class=\"border-success p-3 alert-success\">\n                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span>\n                        <span *ngIf=\"answers.length > 0\">\n                            <span class=\"text-dark\" *ngFor=\"let answer of answers;let checkIndex =index\">\n                                <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span>\n                                -\n                                <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\n                                {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div *ngIf=\"showSaveQuestion\">\n            <button class=\"btn btn-success float-right ml-2\" (click)=\"saveQuestion()\" [disabled]=\"showAddQuestion\">\n                <i class=\"fa fa-save mr-2\"></i>\n                Save question\n            </button>\n        </div>\n\n        <div *ngIf=\"showAddQuestion\">\n            <button class=\"btn btn-info float-right\" (click)=\"addQuestion()\">\n                <i class=\"fa fa-plus-circle mr-2\"></i>\n                Add one more question\n            </button>\n        </div>\n\n        <div class=\"previous btn btn-danger float-right mr-2\" (click)=\"resetPreviewQuestions()\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n        </div>\n    </fieldset>\n</div>"

/***/ }),

/***/ "./src/app/general-concept-topic/general-topic-question-create.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/general-concept-topic/general-topic-question-create.component.ts ***!
  \**********************************************************************************/
/*! exports provided: GeneralTopicQuestionCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralTopicQuestionCreateComponent", function() { return GeneralTopicQuestionCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general-concept-topic.service */ "./src/app/general-concept-topic/general-concept-topic.service.ts");
/* harmony import */ var _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../question-builder/question-builder.service */ "./src/app/question-builder/question-builder.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/file-management/file-management.service */ "./src/app/shared/file-management/file-management.service.ts");









var GeneralTopicQuestionCreateComponent = /** @class */ (function () {
    function GeneralTopicQuestionCreateComponent(activatedRoute, router, pluginService, questionBuilderService, questionService, commonService, formBuilder, changedetector, fileService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pluginService = pluginService;
        this.questionBuilderService = questionBuilderService;
        this.questionService = questionService;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.changedetector = changedetector;
        this.fileService = fileService;
        this.questionResource = {};
        this.questionCategory = [];
        this.questionComplexityLevel = [];
        this.answers = [];
        this.contentSource = [];
        this.showSaveQuestion = false;
        this.showAddQuestion = false;
        this.validateQuestionType = true;
    }
    GeneralTopicQuestionCreateComponent.prototype.ngOnInit = function () {
        this.editorSolutionConfig = this.pluginService.getCKEditorQuestionConfig();
        this.pluginService.sideMenuToggle();
        this.pluginService.newStepperJs();
        this.topicId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        this.getContentSource();
        this.getQuestionCategory();
        this.getQuestionComplexityLevel();
        this.validateQuestionTypeSelectedOrNot();
    };
    GeneralTopicQuestionCreateComponent.prototype.getContentSource = function () {
        var _this = this;
        this.commonService.getContentSourceList().subscribe(function (data) {
            _this.contentSource = data;
        });
    };
    GeneralTopicQuestionCreateComponent.prototype.getQuestionCategory = function () {
        var _this = this;
        this.commonService.getQuestionCategoryList().subscribe(function (data) {
            _this.questionCategory = data;
        });
    };
    GeneralTopicQuestionCreateComponent.prototype.getQuestionComplexityLevel = function () {
        var _this = this;
        this.commonService.getQuestionComplexityLevelList().subscribe(function (data) {
            _this.questionComplexityLevel = data;
        });
    };
    GeneralTopicQuestionCreateComponent.prototype.ngAfterViewChecked = function () {
        this.validateQuestionTypeSelectedOrNot();
        this.changedetector.detectChanges();
    };
    GeneralTopicQuestionCreateComponent.prototype.validateQuestionTypeSelectedOrNot = function () {
        var currentRoute, splitUrl = [], lastItem;
        currentRoute = this.router.url;
        splitUrl = currentRoute.split("/");
        lastItem = splitUrl.pop();
        if (lastItem === 'general-topic-question-create') {
            this.validateQuestionType = true;
        }
        else {
            this.validateQuestionType = false;
        }
    };
    GeneralTopicQuestionCreateComponent.prototype.loadPreviewQuestion = function () {
        var duplicateChoices = [], question, choices = [], choiceText, choiceId, answers = [], matrixChoices = [], matrixOptions = [];
        this.questionResource = [];
        this.questionResource = this.questionBuilderService.getQuestionResource;
        this.questionType = this.questionResource.QuestionType;
        answers = this.questionResource.Answers;
        this.onChangeOptionType(this.questionType);
        if (question === "" || question === "undefined") {
            //"Question is missing, please fill question detail";
            this.validateQuestion = true;
        }
        else {
            if (answers.length > 0) {
                if (this.questionType === "MCQ_SINGLE" || this.questionType === "MCQ_MULTIPLE" || this.questionType === "MCQ_TRUE_FALSE") {
                    this.answers = [];
                    duplicateChoices = this.questionResource.Choices;
                    if (duplicateChoices.length > 0) {
                        choices = [];
                        for (var i = 0; i < duplicateChoices.length; i++) {
                            choiceId = duplicateChoices[i].ChoiceId;
                            choiceText = duplicateChoices[i].ChoiceText;
                            choices.push({
                                "choiceId": choiceId,
                                "choiceText": choiceText
                            });
                        }
                        var _loop_1 = function (j) {
                            var answerText = choices.find(function (item) { return item.choiceId === answers[j]; }).choiceText;
                            this_1.answers.push(answerText);
                            answerText = "";
                        };
                        var this_1 = this;
                        for (var j = 0; j < answers.length; j++) {
                            _loop_1(j);
                        }
                        this.validateQuestion = false;
                    }
                    else {
                        //"Choices are missing, Please fill the choices";
                        this.validateQuestion = true;
                    }
                }
                else if (this.questionType === "MCQ_CHOICE_MATRIX") {
                    matrixChoices = [];
                    matrixOptions = [];
                    matrixChoices = this.questionResource.Choices;
                    matrixOptions = this.questionResource.Options;
                    if (matrixChoices.length > 0 && matrixOptions.length > 0) {
                        if (answers.length > 0) {
                            this.answers = [];
                            var _loop_2 = function (k) {
                                this_2.answers.push({
                                    choiceName: matrixChoices.find(function (item) { return item.ChoiceId === answers[k].ChoiceId; }).ChoiceText,
                                    optionName: matrixOptions.find(function (item) { return item.OptionId === answers[k].OptionId; }).OptionText
                                });
                            };
                            var this_2 = this;
                            for (var k = 0; k < answers.length; k++) {
                                _loop_2(k);
                            }
                        }
                        this.validateQuestion = false;
                    }
                    else {
                        //"Choices and options are missing, please fill the details";
                        this.validateQuestion = true;
                    }
                }
                else if (this.questionType === "MCQ_MATCH_LIST") {
                    matrixChoices = [];
                    matrixOptions = [];
                    matrixChoices = this.questionResource.Choices;
                    matrixOptions = this.questionResource.Options;
                    if (matrixChoices.length > 0 && matrixOptions.length > 0) {
                        if (answers.length > 0) {
                            this.answers = [];
                            var _loop_3 = function (k) {
                                this_3.answers.push({
                                    choiceName: matrixChoices.find(function (item) { return item.ChoiceId === answers[k].ChoiceId; }).ChoiceText,
                                    optionName: matrixOptions.find(function (item) { return item.OptionId === answers[k].OptionId; }).OptionText
                                });
                            };
                            var this_3 = this;
                            for (var k = 0; k < answers.length; k++) {
                                _loop_3(k);
                            }
                        }
                        this.validateQuestion = false;
                    }
                    else {
                        //"Left side and right side options are missing, please fill the details";
                        this.validateQuestion = true;
                    }
                }
                this.showSaveQuestion = true;
                this.updateQuestionResource();
            }
            else {
                //"Answer is missing, please select a answer";
                this.validateQuestion = true;
            }
        }
    };
    GeneralTopicQuestionCreateComponent.prototype.questionAlertMsg = function (str) {
        this.pluginService.alertMessage(str, "error");
    };
    GeneralTopicQuestionCreateComponent.prototype.onChangeOptionType = function (questionType) {
        if (questionType === "MCQ_SINGLE" || questionType === "MCQ_TRUE_FALSE") {
            this.type = "radio";
        }
        else if (questionType === "MCQ_MULTIPLE") {
            this.type = "checkbox";
        }
        else {
            this.type = "";
        }
    };
    GeneralTopicQuestionCreateComponent.prototype.onContentSource = function (sourceName) {
        this.selectedContentSource = sourceName;
    };
    GeneralTopicQuestionCreateComponent.prototype.onSelectQuestionCategory = function (value) {
        this.category = value;
    };
    GeneralTopicQuestionCreateComponent.prototype.onSelectComplexityLevel = function (value) {
        this.complexityLevel = value;
    };
    GeneralTopicQuestionCreateComponent.prototype.resetPreviewQuestions = function () {
        this.questionResource = [];
        this.answers = [];
    };
    GeneralTopicQuestionCreateComponent.prototype.getBase64ImageFromUrl = function (imageUrl) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, blob;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(imageUrl)];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.blob()];
                    case 2:
                        blob = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var reader = new FileReader();
                                reader.addEventListener("load", function () {
                                    resolve(reader.result);
                                }, false);
                                reader.onerror = function () {
                                    return reject(_this);
                                };
                                reader.readAsDataURL(blob);
                            })];
                }
            });
        });
    };
    GeneralTopicQuestionCreateComponent.prototype.updateImageSrc = function (dataSource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var imageTags, htmlElement, imageId, imageUrl, index, updatedHTMLData, base64, i;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        htmlElement = document.createElement("div");
                        htmlElement.innerHTML = dataSource;
                        imageTags = htmlElement.getElementsByTagName("img");
                        if (!(imageTags.length > 0)) return [3 /*break*/, 6];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < imageTags.length)) return [3 /*break*/, 5];
                        imageId = "image" + [i];
                        index = i;
                        imageTags[i].setAttribute("id", imageId); //Set id attribute for image 
                        imageUrl = imageTags[i].src; //Get image source 
                        return [4 /*yield*/, this.getBase64ImageFromUrl(imageUrl)];
                    case 2:
                        base64 = _a.sent();
                        return [4 /*yield*/, this.getAWSFilePath(base64, index, htmlElement)];
                    case 3:
                        updatedHTMLData = _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        updatedHTMLData = htmlElement.innerHTML;
                        _a.label = 7;
                    case 7: return [2 /*return*/, updatedHTMLData];
                }
            });
        });
    };
    GeneralTopicQuestionCreateComponent.prototype.getAWSFilePath = function (base64, index, htmlElement) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var block, contentType, encodedData, fileType, imageType, presignedURL, imageTags, updatedHTMLData, fileName, res, map;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        imageTags = htmlElement.getElementsByTagName("img");
                        block = base64.split(',');
                        contentType = block[0].split(':')[1];
                        fileType = contentType.split('/')[1];
                        imageType = fileType.split(';')[0];
                        encodedData = block[1];
                        fileName = new Date().getUTCMilliseconds() + "quesImage" + "." + imageType;
                        if (!encodedData) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.fileService.getImagePresignedurls(fileName)];
                    case 1:
                        res = _a.sent();
                        map = new Map().set(Object.keys(res)[0], Object.values(res)[0]).set(Object.keys(res)[1], Object.values(res)[1]);
                        map.forEach(function (value, key) {
                            if (key !== "objectURL") {
                                presignedURL = value;
                            }
                            else if (key === "objectURL") {
                                var updatedFilePath = value;
                                imageTags[index].setAttribute("src", updatedFilePath); //Setting aws filepath in respective image source
                                updatedHTMLData = htmlElement.innerHTML;
                                _this.getImagePathUploadedHTML(updatedHTMLData);
                            }
                        });
                        return [4 /*yield*/, this.fileService.uploadImagefileAWSS3(presignedURL, encodedData)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GeneralTopicQuestionCreateComponent.prototype.updateQuestionResource = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var choices, options, questionResource, choiceText, optionText, i, i;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        choices = [], options = [], questionResource = {};
                        questionResource = this.questionBuilderService.getQuestionResource;
                        if (!questionResource.Question) return [3 /*break*/, 2];
                        this.updatedHTMLDATA = questionResource.Question;
                        return [4 /*yield*/, this.updateImageSrc(questionResource.Question)];
                    case 1:
                        _a.sent();
                        questionResource.Question = this.updatedHTMLDATA;
                        _a.label = 2;
                    case 2:
                        if (!(questionResource.Choices.length > 0)) return [3 /*break*/, 7];
                        i = 0;
                        _a.label = 3;
                    case 3:
                        if (!(i < questionResource.Choices.length)) return [3 /*break*/, 6];
                        this.updatedHTMLDATA = questionResource.Choices[i].ChoiceText;
                        return [4 /*yield*/, this.updateImageSrc(questionResource.Choices[i].ChoiceText)];
                    case 4:
                        _a.sent();
                        choiceText = this.updatedHTMLDATA;
                        choices.push({
                            ChoiceText: choiceText,
                            ChoiceId: questionResource.Choices[i].ChoiceId
                        });
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 3];
                    case 6:
                        questionResource.Choices = choices;
                        _a.label = 7;
                    case 7:
                        if (!(questionResource.Options.length > 0)) return [3 /*break*/, 12];
                        i = 0;
                        _a.label = 8;
                    case 8:
                        if (!(i < questionResource.Options.length)) return [3 /*break*/, 11];
                        this.updatedHTMLDATA = questionResource.Options[i].OptionText;
                        return [4 /*yield*/, this.updateImageSrc(questionResource.Options[i].OptionText)];
                    case 9:
                        _a.sent();
                        optionText = this.updatedHTMLDATA;
                        options.push({
                            OptionText: optionText,
                            OptionId: questionResource.Options[i].OptionId
                        });
                        _a.label = 10;
                    case 10:
                        i++;
                        return [3 /*break*/, 8];
                    case 11:
                        questionResource.Options = options;
                        _a.label = 12;
                    case 12: return [4 /*yield*/, this.questionBuilderService.generateQuestionResource(questionResource)];
                    case 13:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GeneralTopicQuestionCreateComponent.prototype.getImagePathUploadedHTML = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.updatedHTMLDATA = data;
                return [2 /*return*/];
            });
        });
    };
    GeneralTopicQuestionCreateComponent.prototype.saveQuestion = function () {
        var questionResource = {}, jsonConversion, questionDetails, solutionContentJson, updatedQuestionResource;
        if (this.category) {
            questionResource.category = this.category;
        }
        else {
            questionResource.category = this.questionCategory[0].tag;
        }
        if (this.complexityLevel) {
            questionResource.complexityLevel = this.complexityLevel;
        }
        else {
            questionResource.complexityLevel = 1;
        }
        solutionContentJson = this.questionBuilderService.convertJsonToString(JSON.stringify(this.solutionContent));
        updatedQuestionResource = this.questionBuilderService.getQuestionResource;
        questionResource.marks = updatedQuestionResource.TotalMarks;
        jsonConversion = JSON.stringify(updatedQuestionResource);
        questionDetails = this.questionBuilderService.convertJsonToString(jsonConversion);
        questionResource.contentJson = questionDetails;
        questionResource.generalTopicId = this.topicId;
        questionResource.solutionJson = solutionContentJson;
        this.subscribeToSaveResponse(this.questionService.saveTopicQuestion(questionResource));
    };
    GeneralTopicQuestionCreateComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (resp) { return _this.onSaveSuccess(resp); }, function (errRes) { return _this.onSaveError(errRes); });
    };
    GeneralTopicQuestionCreateComponent.prototype.onSaveSuccess = function (res) {
        this.pluginService.alertMessage("General Topic question created successfully", "success");
        this.showAddQuestion = true;
        this.showSaveQuestion = false;
    };
    GeneralTopicQuestionCreateComponent.prototype.onSaveError = function (errRes) {
        this.pluginService.alertMessage("Could not save, please contact admin", "error");
    };
    GeneralTopicQuestionCreateComponent.prototype.onBack = function () {
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
                localObj.router.navigateByUrl('/general-concept-and-topic/general-topic-question');
                localObj.pluginService.sideMenuToggle();
            }
        });
    };
    GeneralTopicQuestionCreateComponent.prototype.addQuestion = function () {
        window.location.reload();
        this.questionType = "";
        this.showSaveQuestion = true;
    };
    GeneralTopicQuestionCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./general-topic-question-create.component.html */ "./src/app/general-concept-topic/general-topic-question-create.component.html"),
            providers: [_general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__["GeneralConceptAndTopicService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"],
            _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_5__["QuestionBuilderService"],
            _general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__["GeneralConceptAndTopicService"],
            _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_8__["FileManagementService"]])
    ], GeneralTopicQuestionCreateComponent);
    return GeneralTopicQuestionCreateComponent;
}());



/***/ }),

/***/ "./src/app/general-concept-topic/general-topic-question-manage.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/general-concept-topic/general-topic-question-manage.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 filterbg my-4 rounded\">\n    <div class=\"filtericon font-20\">\n        <i class=\"fa fa-filter\"></i>\n    </div>\n    <div class=\"row d-flex justify-content-start align-items-center\">\n        <div class=\"col-lg-3 mb-3\">\n            <ng-select [items]=\"subjects\" bindLabel=\"title\" placeholder=\"Select subject\" [(ngModel)]=\"selectedSubject\">\n            </ng-select>\n        </div>\n    </div>\n\n    <div class=\"d-flex justify-content-end pb-3 row\">\n        <div class=\"col-lg-2\">\n            <button class=\"btn btn-success float-right waves-effect waves-light\" (click)=\"loadSubjectTree()\">\n                <i class=\"fa fa-filter mr-2\"></i>Apply\n            </button>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-xxl-3 mb-3 py-3\">\n        <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"subjectTree.length > 1\">\n            <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\n                <i class=\"fa fa-clone mr-2\"></i>\n                <span *ngIf=\"enableExpandNode === false\">\n                    Expand all\n                </span>\n                <span *ngIf=\"enableExpandNode === true\">\n                    Collapse all\n                </span>\n            </div>\n        </div>\n        <div id=\"treeView\"></div>\n    </div>\n    <div class=\"col-xxl-9 mb-3 py-3\">\n\n        <div *ngIf=\"nodeType === 'root'\">\n            <p><b>Subject name</b></p>\n            <p>{{nodeName}}</p>\n            <p><b>Subject description</b></p>\n            <p>{{nodeDescription}}</p>\n        </div>\n\n        <div *ngIf=\"nodeType === 'concept'\">\n            <p><b>Concept name</b></p>\n            <p>{{nodeName}}</p>\n            <p><b>Concept description</b></p>\n            <p>{{nodeDescription}}</p>\n        </div>\n\n        <div *ngIf=\"nodeType === 'topic'\">\n            <div class=\"d-flex row justify-content-between align-items-center\">\n                <div class=\"col-xxl-3\">\n                    <h4 class=\"font-20 mb-2\">{{nodeName}}</h4>\n                </div>\n                <div\n                    class=\"d-flex align-items-start flex-wrap justify-content-md-between justify-content-lg-end col-xxl-9\">\n                    <div class=\"btn btn-info mb-2 mr-2\" (click)=\"openPreviewQuestionModal()\"\n                        *ngIf=\"questions.length > 0\">\n                        <i class=\"fa fa-list-alt mr-2\"></i> Preview questions\n                    </div>\n                    <div class=\"btn btn-success mb-2 mr-2\" (click)=\"openSimulateQuestionModal()\"\n                        *ngIf=\"questions.length > 0\">\n                        <i class=\"fa fa-cogs mr-2\"></i> Simulate questions\n                    </div>\n                    <a class=\"btn btn-primary text-white mb-2 mr-2\" target=\"_blank\"\n                        [routerLink]=\"['/general-concept-and-topic',topicId,'general-topic-question-create']\">\n                        <i class=\"fa fa-plus-circle mr-2\"></i> Create new question\n                    </a>\n                    <div class=\"btn btn-warning text-white mb-2\" (click)=\"loadUpdatedTopicQuestions()\">\n                        <i class=\"fa fa-refresh mr-2\"></i> Refresh\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"table-responsive\" *ngIf=\"questions\">\n                <table class=\"table table-hover table-striped table-bordered nowrap w-100\" id=\"generalSubjectsTable\">\n                    <thead>\n                        <tr>\n                            <th>Select</th>\n                            <th>Question category</th>\n                            <th>Question type</th>\n                            <th>Complexity level</th>\n                            <th>Actions</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let question of questions ;trackBy: trackId\">\n                            <td data-column=\"Select\">\n                                <div class=\"checkbox\">\n                                    <input type=\"checkbox\" id=\"{{question.id}}\"\n                                        (change)=\"checkSelectedQuestions($event)\" class=\"checkAll\">\n                                    <label for=\"{{question.id}}\"></label>\n                                </div>\n                            </td>\n                            <td data-column=\"Question category\">{{question.questionCategory}}</td>\n                            <td data-column=\"Question type\">{{question.questionType}}</td>\n                            <td data-column=\"Complexity level\">{{question.complexityLevel}}</td>\n                            <td data-column=\"Actions\">\n                                <div>\n                                    <a class=\"btn btn-outline-info  mr-1 mb-1 btn-icon-size\" target=\"_blank\"\n                                        [routerLink]=\"['/general-concept-and-topic', question.id, 'general-topic-question-view' ]\">\n                                        <i class=\"fa fa-eye\"></i>\n                                    </a>\n                                    <a class=\"btn btn-outline-success  mr-1 mb-1 btn-icon-size\" target=\"_blank\"\n                                        [routerLink]=\"['/general-concept-and-topic', question.id, 'general-topic-question-edit' ]\">\n                                        <i class=\"fa fa-edit\"></i>\n                                    </a>\n                                </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <div class=\"mt-3 d-flex w-100 justify-content-end\" *ngIf=\"questions.length > 0\">\n                    <button class=\"btn btn-danger mr-2\" [disabled]=\"tableAction\" (click)=\"resetSelectedTopicQuestion()\">\n                        <i class=\"fa fa-times mr-2\"></i>Reset\n                    </button>\n                    <button class=\"btn btn-danger\" [disabled]=\"tableAction\" (click)=\"deleteTopicQuestions()\">\n                        <i class=\"fa fa-trash mr-2\"></i>Delete\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal\" id=\"simulateQuestionModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"simulateQuestionModal\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-notify\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\n                <h5 class=\"modal-title text-white\">\n                    Simulate question - {{nodeName}}\n                </h5>\n                <div class=\"close btn btn-xl\" (click)=\"closeSimulateQuestionModal()\">\n                    <i class=\"fa fa-times\"></i>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                <div id=\"questionSimulateIndicators\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\"\n                    data-interval=\"false\">\n                    <div class=\"carousel-inner\">\n                        <div class=\"carousel-item\" [ngClass]=\"{'active': questionIndex === 0}\"\n                            *ngFor=\"let questiondata of topicQuestions;let questionIndex = index;\">\n                            <div\n                                *ngIf=\"questiondata.questionType === 'MCQ_SINGLE' || questiondata.questionType === 'MCQ_MULTIPLE' || questiondata.questionType === 'MCQ_TRUE_FALSE'\">\n                                <div class=\"row mb-3\">\n                                    <div class=\"col-xxl-12\">\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\n                                            style=\"line-height: 24px;\">\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex}}.&nbsp;</span>\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question | sanitizeHtml\">\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row mb-3 p-3 text-capitalize\">\n                                    <div class=\"col-lg-6 col-md-12 d-flex justify-content-start mb-2\"\n                                        *ngFor=\"let choice of questiondata.choices;let i = index\">\n                                        <div class=\"radio\" *ngIf=\"questiondata.questionType !== 'MCQ_MULTIPLE'\">\n                                            <input type=\"radio\" [id]=\"choice.ChoiceId\" name=\"answer\"\n                                                (change)=\"onSelectMCQSingleAnswer(questiondata.id,choice.ChoiceId)\">\n                                            <label for=\"{{choice.ChoiceId}}\"></label>\n                                        </div>\n                                        <div class=\"checkbox\" *ngIf=\"questiondata.questionType === 'MCQ_MULTIPLE'\">\n                                            <input type=\"checkbox\" [id]=\"choice.ChoiceId\" name=\"answers\"\n                                                (click)=\"onSelectMCQMultipleAnswer(questiondata.id,choice.ChoiceId,$event)\">\n                                            <label for=\" {{choice.ChoiceId}}\"></label>\n                                        </div>\n                                        <label for=\"{{choice.ChoiceId}}\"\n                                            [MathJax]=\"choice.ChoiceText  | sanitizeHtml\"></label>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_MATCH_LIST'\">\n                                <div class=\"row mb-3\">\n                                    <div class=\"col-xxl-12\">\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\n                                            style=\"line-height: 24px;\">\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex}}.&nbsp;</span>\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question | sanitizeHtml\">\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div cdkDropListGroup>\n                                    <div class=\"example-container d-flex justify-content-between flex-nowrap mb-2\">\n                                        <div class=\"mcq-left mr-2\">\n                                            <div class=\"match-list\" data-value=\"questiondata.choices\">\n                                                <div class=\"list-box\" *ngFor=\"let item of questiondata.choices\"\n                                                    [MathJax]=\"item.ChoiceText  | sanitizeHtml\"></div>\n                                            </div>\n                                        </div>\n                                        <!-- <div class=\"line-circle w-auto\" *ngFor=\"let item of viewModel.Choices\" id=\"{{item}}\"></div> -->\n                                        <div class=\"mcq-right ml-2\">\n                                            <div cdkDropList [cdkDropListData]=\"questiondata.options\" class=\"match-list\"\n                                                (cdkDropListDropped)=\"updatedDropList(questiondata.id, $event)\">\n                                                <div class=\"list-box\" *ngFor=\"let item of questiondata.options\" cdkDrag\n                                                    [MathJax]=\"item.OptionText  | sanitizeHtml\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_CHOICE_MATRIX'\">\n                                <div class=\"row mb-3\">\n                                    <div class=\"col-xxl-12\">\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\n                                            style=\"line-height: 24px;\">\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex}}.&nbsp;</span>\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question | sanitizeHtml\">\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <table class=\"table-matrix my-2 text-capitalize\">\n                                    <tr class=\"bg-lightgray\">\n                                        <td></td>\n                                        <td *ngFor=\"let option of questiondata.options\">\n                                            <span class=\"text-dark\" [MathJax]=\"option.OptionText | sanitizeHtml\"></span>\n                                        </td>\n                                    </tr>\n                                    <tr style=\"background: none !important;\"\n                                        *ngFor=\"let choice of questiondata.choices\">\n                                        <td><span [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></span></td>\n                                        <td *ngFor=\"let option of questiondata.options\">\n                                            <div class=\"radio\">\n                                                <input type=\"radio\" [id]=\"choice.ChoiceId+option.OptionId\"\n                                                    name=\"{{ choice.ChoiceId }}\"\n                                                    (click)=\"onSelectChoiceMatrixAnswer(questiondata.id,choice.ChoiceId, option.OptionId)\">\n                                                <label for=\"{{choice.ChoiceId+option.OptionId}}\"></label>\n                                            </div>\n                                        </td>\n                                    </tr>\n                                </table>\n                            </div>\n                            <div class=\"w-100 d-flex justify-content-end align-self-center my-2\">\n                                <div class=\"btn btn-danger mb-2\" href=\"#questionSimulateIndicators\" role=\"button\"\n                                    data-slide=\"prev\" *ngIf=\"questionIndex !== 0\" (click)=\"previousQuestion()\">\n                                    <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n                                </div>\n                                <div class=\"btn btn-info mx-2 mb-2\" (click)=\"checkAnswerStatus(questiondata.id)\">\n                                    <i class=\"fa fa-check mr-2\"></i>Check answer\n                                </div>\n                                <div class=\"btn btn-success mb-2\" href=\"#questionSimulateIndicators\" role=\"button\"\n                                    data-slide=\"next\" *ngIf=\"questionIndex !== topicQuestions.length - 1\"\n                                    (click)=\"nextQuestion()\">\n                                    Next<i class=\"fa fa-arrow-right ml-2\"></i>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <div class=\"btn btn-danger\" (click)=\"closeSimulateQuestionModal()\">\n                    <i class=\"fa fa-times mr-2\"></i> Close\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal\" id=\"previewQuestionModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"previewQuestionModal\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-notify\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\n                <h5 class=\"modal-title text-white\">\n                    Preview question - {{nodeName}}\n                </h5>\n                <div class=\"close btn btn-xl\" (click)=\"closePreviewQuestionModal()\">\n                    <i class=\"fa fa-times\"></i>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                <div id=\"questionPreviewIndicators\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\"\n                    data-interval=\"false\">\n                    <div class=\"carousel-inner\">\n                        <div class=\"carousel-item\" [ngClass]=\"{'active': questionIndex === 0}\"\n                            *ngFor=\"let questiondata of topicQuestions;let questionIndex = index;\">\n                            <div\n                                *ngIf=\"questiondata.questionType === 'MCQ_SINGLE' || questiondata.questionType === 'MCQ_MULTIPLE' || questiondata.questionType === 'MCQ_TRUE_FALSE'\">\n                                <div class=\"row mb-3\">\n                                    <div class=\"col-xxl-12\">\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\n                                            style=\"line-height: 24px;\">\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex}}.&nbsp;</span>\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question  | sanitizeHtml\">\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row mb-3 p-3 text-capitalize\">\n                                    <div class=\"col-lg-6 col-md-12 d-flex justify-content-start mb-2\"\n                                        *ngFor=\"let choice of questiondata.choices;let i = index\">\n                                        <div class=\"radio\" *ngIf=\"questiondata.questionType !== 'MCQ_MULTIPLE'\">\n                                            <input type=\"radio\" [id]=\"choice.ChoiceId\" name=\"answer\"\n                                                [answers]=\"questiondata.answers\" disabled readonly>\n                                            <label for=\"{{choice.ChoiceId}}\"></label>\n                                        </div>\n                                        <div class=\"checkbox\" *ngIf=\"questiondata.questionType === 'MCQ_MULTIPLE'\">\n                                            <input type=\"checkbox\" [id]=\"choice.ChoiceId\" name=\"answers\" disabled\n                                                readonly [answers]=\"questiondata.answers\">\n                                            <label for=\" {{choice.ChoiceId}}\"></label>\n                                        </div>\n                                        <label for=\"{{choice.ChoiceId}}\"\n                                            [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></label>\n                                    </div>\n                                </div>\n                                <div class=\"mb-3 font-18\">\n                                    <div class=\"border-success p-3 alert-success\">\n                                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\n                                            *ngFor=\"let answer of questiondata.answers;let checkIndex =index\">\n                                            <span [MathJax]=\"answer | sanitizeHtml\"></span>\n                                            {{checkIndex  === questiondata.answers.length - 1? ' ' : ','}}</span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_MATCH_LIST'\">\n                                <div class=\"row mb-3\">\n                                    <div class=\"col-xxl-12\">\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\n                                            style=\"line-height: 24px;\">\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex}}.&nbsp;</span>\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question | sanitizeHtml\">\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <ng-container *ngFor=\"let answer of questiondata.answers;\">\n                                    <div class=\"choice-container\">\n                                        <div class=\"item\">\n                                            <div class=\"choice--group\">\n                                                <div class=\"choice--label\">\n                                                    <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"line-circle\">\n                                        </div>\n                                        <div class=\"item\">\n                                            <div class=\"drag--container\">\n                                                <div class=\"choice--editor option--container zone\" class=\"option--item\"\n                                                    [MathJax]=\"answer.optionName | sanitizeHtml\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </ng-container>\n                                <div class=\"mb-3 font-18\">\n                                    <div class=\"border-success p-3 alert-success\">\n                                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span\n                                            class=\"d-flex text-dark flex-nowrap\"\n                                            *ngFor=\"let answer of questiondata.answers;let checkIndex =index\">\n                                            <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span> <span>-</span>\n                                            <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\n                                            {{checkIndex  === questiondata.answers.length - 1? ' ' : ' ,'}}</span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_CHOICE_MATRIX'\">\n                                <div class=\"row mb-3\">\n                                    <div class=\"col-xxl-12\">\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\n                                            style=\"line-height: 24px;\">\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex}}.&nbsp;</span>\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question | sanitizeHtml\">\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <table class=\"table-matrix my-2 text-capitalize\">\n                                    <tr class=\"bg-lightgray\">\n                                        <td></td>\n                                        <td *ngFor=\"let option of questiondata.options\">\n                                            <span class=\"text-dark\" [MathJax]=\"option.OptionText | sanitizeHtml\"></span>\n                                        </td>\n                                    </tr>\n                                    <tr style=\"background: none !important;\"\n                                        *ngFor=\"let choice of questiondata.choices\">\n                                        <td><span [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></span></td>\n                                        <td *ngFor=\"let option of questiondata.options\">\n                                            <div class=\"radio\">\n                                                <input type=\"radio\" [id]=\"choice.ChoiceId+option.OptionId\"\n                                                    name=\"{{ choice.ChoiceId }}\" disabled readonly>\n                                                <label for=\"{{choice.ChoiceId+option.OptionId}}\"></label>\n                                            </div>\n                                        </td>\n                                    </tr>\n                                </table>\n                                <div class=\"mb-3 font-18\">\n                                    <div class=\"border-success p-3 alert-success\">\n                                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span\n                                            class=\"d-flex text-dark flex-nowrap\"\n                                            *ngFor=\"let answer of questiondata.answers;let checkIndex =index\">\n                                            <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span> <span>-</span>\n                                            <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\n                                            {{checkIndex  === questiondata.answers.length - 1? ' ' : ','}}</span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"w-100 d-flex justify-content-end align-self-center my-2\">\n                                <div class=\"btn btn-danger mb-2\" href=\"#questionPreviewIndicators\" role=\"button\"\n                                    data-slide=\"prev\" *ngIf=\"questionIndex !== 0\">\n                                    <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n                                </div>\n                                <div class=\"btn btn-success ml-2  mb-2\" href=\"#questionPreviewIndicators\" role=\"button\"\n                                    data-slide=\"next\" *ngIf=\"questionIndex !== topicQuestions.length - 1\">\n                                    Next<i class=\"fa fa-arrow-right ml-2\"></i>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <div class=\"btn btn-danger\" (click)=\"closePreviewQuestionModal()\">\n                    <i class=\"fa fa-times mr-2\"></i> Close\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/general-concept-topic/general-topic-question-manage.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/general-concept-topic/general-topic-question-manage.component.ts ***!
  \**********************************************************************************/
/*! exports provided: GeneralTopicQuestionManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralTopicQuestionManageComponent", function() { return GeneralTopicQuestionManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general-concept-topic.service */ "./src/app/general-concept-topic/general-concept-topic.service.ts");
/* harmony import */ var _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../question-builder/question-builder.service */ "./src/app/question-builder/question-builder.service.ts");
/* harmony import */ var _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../general-subject/general-subject.service */ "./src/app/general-subject/general-subject.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");








var GeneralTopicQuestionManageComponent = /** @class */ (function () {
    function GeneralTopicQuestionManageComponent(_router, generalSubjectService, generalTopicQuestionService, pluginService, questionBuilderService) {
        this._router = _router;
        this.generalSubjectService = generalSubjectService;
        this.generalTopicQuestionService = generalTopicQuestionService;
        this.pluginService = pluginService;
        this.questionBuilderService = questionBuilderService;
        this.subjectTree = [];
        this.questions = [];
        this.topicQuestions = [];
        this.questionResources = [];
        this.questionIds = [];
        this.selectedAnswer = [];
        this.enableExpandNode = false;
        this.tableAction = true;
    }
    GeneralTopicQuestionManageComponent.prototype.ngOnInit = function () {
        this.loadSubjectData();
    };
    GeneralTopicQuestionManageComponent.prototype.loadSubjectData = function () {
        var _this = this;
        this.generalSubjectService.getSubjectSearchList().subscribe(function (res) { return _this.assignResponseToList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    GeneralTopicQuestionManageComponent.prototype.assignResponseToList = function (data) {
        this.subjects = data;
    };
    GeneralTopicQuestionManageComponent.prototype.onError = function (errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    };
    GeneralTopicQuestionManageComponent.prototype.showConceptAndTopicDetails = function () {
        var localThisObj = this;
        $('#treeView')
            .on('changed.jstree', function (e, data) {
            var i, j;
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
                    localThisObj.topicId = data.node.data.id;
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                    localThisObj.questions = [];
                    localThisObj.questionIds = [];
                    localThisObj.getTopicQuestionsList(localThisObj.topicId);
                }
                else {
                    localThisObj.nodeType = "";
                }
            }
        });
    };
    GeneralTopicQuestionManageComponent.prototype.loadUpdatedTopicQuestions = function () {
        this.getTopicQuestionsList(this.topicId);
    };
    GeneralTopicQuestionManageComponent.prototype.getTopicQuestionsList = function (topicId) {
        var _this = this;
        this.generalTopicQuestionService.getTopicQuestionList(topicId).subscribe(function (res) { return _this.assignResponseToQuestionList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    GeneralTopicQuestionManageComponent.prototype.assignResponseToQuestionList = function (data) {
        var questionDetails = [], question, complexityLevel, questionType;
        this.questions = [];
        this.questionResources = data.questions;
        if (this.questionResources.length > 0) {
            for (var i = 0; i < this.questionResources.length; i++) {
                questionDetails.push(this.questionBuilderService.convertStringToJson(this.questionResources[i].contentJson));
                question = questionDetails[i].Question;
                if (this.questionResources[i].complexityLevel === 1) {
                    complexityLevel = "Low";
                }
                else if (this.questionResources[i].complexityLevel === 2) {
                    complexityLevel = "Medium";
                }
                else if (this.questionResources[i].complexityLevel === 3) {
                    complexityLevel = "High";
                }
                else {
                    complexityLevel = "";
                }
                if (questionDetails[i].QuestionType === "MCQ_SINGLE") {
                    questionType = "MCQ single answer";
                }
                else if (questionDetails[i].QuestionType === "MCQ_MULTIPLE") {
                    questionType = "MCQ multiple answers";
                }
                else if (questionDetails[i].QuestionType === "MCQ_CHOICE_MATRIX") {
                    questionType = "Choice matrix";
                }
                else if (questionDetails[i].QuestionType === "MCQ_TRUE_FALSE") {
                    questionType = "MCQ true or false";
                }
                else if (questionDetails[i].QuestionType === "MCQ_MATCH_LIST") {
                    questionType = "MCQ match list";
                }
                else {
                    questionType = "";
                }
                this.questions.push({
                    id: this.questionResources[i].id,
                    complexityLevel: complexityLevel,
                    questionCategory: this.titleCapitalize(this.questionResources[i].category),
                    questionText: question,
                    questionType: questionType
                });
            }
        }
        this.questionIds = [];
        this.tableAction = true;
    };
    GeneralTopicQuestionManageComponent.prototype.titleCapitalize = function (word) {
        if (!word)
            return word;
        return word[0].toUpperCase() + word.substr(1).toLowerCase();
    };
    GeneralTopicQuestionManageComponent.prototype.ngAfterViewInit = function () {
        this.showConceptAndTopicDetails();
    };
    GeneralTopicQuestionManageComponent.prototype.loadSubjectTree = function () {
        var _this = this;
        if (this.selectedSubject === null || this.selectedSubject === undefined) {
            this.selectedSubject = null;
            this.pluginService.alertMessage("Please select a filter and then apply", "error");
        }
        else {
            this.subjectTree = [];
            this.pluginService.jsTree("#treeView", this.subjectTree, false);
            var subjectId = this.selectedSubject.id;
            if (subjectId) {
                this.generalSubjectService.getSubjectTreeBySubjectId(subjectId).subscribe(function (res) { return _this.assignResponsetoTree(res.body); }, function (res) { return _this.onError(res.message); });
            }
        }
    };
    GeneralTopicQuestionManageComponent.prototype.assignResponsetoTree = function (data) {
        this.subjectTree = data;
        this.pluginService.jsTree("#treeView", this.subjectTree, false);
        this.nodeType = "";
        this.enableExpandNode = false;
    };
    GeneralTopicQuestionManageComponent.prototype.resetSelectedTopicQuestion = function () {
        this.questionIds = [];
        this.tableAction = true;
        $(".checkAll").prop("checked", false);
    };
    GeneralTopicQuestionManageComponent.prototype.checkSelectedQuestions = function (event) {
        var selectedId, checked, index;
        checked = event.target.checked;
        selectedId = event.target.id;
        if (checked === true) {
            this.tableAction = false;
            this.questionIds.push(selectedId);
        }
        else if (checked === false) {
            index = this.questionIds.findIndex(function (item) { return item === selectedId; });
            this.questionIds.splice(index, 1);
        }
        this.questionIds = this.removeDuplicateElements(this.questionIds);
        if (this.questionIds.length <= 0) {
            this.tableAction = true;
        }
    };
    GeneralTopicQuestionManageComponent.prototype.removeDuplicateElements = function (array) {
        var temp = [];
        for (var i = 0; i < array.length; i++) {
            if (temp.indexOf(array[i]) == -1) {
                temp.push(array[i]);
            }
        }
        return temp;
    };
    GeneralTopicQuestionManageComponent.prototype.deleteTopicQuestions = function () {
        var localthisObject = this;
        swal({
            title: "Are you sure to delete topic question ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm === true) {
                if (localthisObject.questionIds.length > 0) {
                    localthisObject.subscribeToDeleteResponse(localthisObject.generalTopicQuestionService.deleteTopicQuestions(localthisObject.questionIds));
                }
            }
        });
    };
    GeneralTopicQuestionManageComponent.prototype.subscribeToDeleteResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onDeleteSuccess(res); }, function (errRes) { return _this.onDeleteError(errRes); });
    };
    GeneralTopicQuestionManageComponent.prototype.onDeleteSuccess = function (res) {
        this.pluginService.alertMessage("Topic content deleted successfully", "success");
        this.questions = [];
        this.questionIds = [];
        this.getTopicQuestionsList(this.topicId);
        this.tableAction = true;
    };
    GeneralTopicQuestionManageComponent.prototype.onDeleteError = function (errRes) {
        this.pluginService.alertMessage("Could not delete, please contact admin", "error");
    };
    GeneralTopicQuestionManageComponent.prototype.toggleTreeNodes = function () {
        this.enableExpandNode = !this.enableExpandNode;
        if (this.enableExpandNode) {
            this.pluginService.openJsTreeAllNodes("#treeView");
        }
        else {
            this.pluginService.closeJsTreeAllNodes("#treeView");
        }
    };
    GeneralTopicQuestionManageComponent.prototype.openSimulateQuestionModal = function () {
        this.pluginService.showModalWindow("#simulateQuestionModal");
        this.simulateTopicQuestionList();
    };
    GeneralTopicQuestionManageComponent.prototype.closeSimulateQuestionModal = function () {
        this.pluginService.hideModalWindow("#simulateQuestionModal");
    };
    GeneralTopicQuestionManageComponent.prototype.openPreviewQuestionModal = function () {
        this.pluginService.showModalWindow("#previewQuestionModal");
        this.previewTopicQuestionList();
    };
    GeneralTopicQuestionManageComponent.prototype.closePreviewQuestionModal = function () {
        this.pluginService.hideModalWindow("#previewQuestionModal");
    };
    GeneralTopicQuestionManageComponent.prototype.previewTopicQuestionList = function () {
        var questionDetails, options = [], answers = [], choices = [];
        this.topicQuestions = [];
        for (var i = 0; i < this.questionResources.length; i++) {
            questionDetails = this.questionBuilderService.convertStringToJson(this.questionResources[i].contentJson);
            if (questionDetails.QuestionType === "MCQ_MATCH_LIST" || questionDetails.QuestionType === "MCQ_CHOICE_MATRIX") {
                answers = [];
                choices = [];
                options = questionDetails.Options;
                choices = questionDetails.Choices;
                var _loop_1 = function (k) {
                    answers.push({
                        choiceName: choices.find(function (item) { return item.ChoiceId === questionDetails.Answers[k].ChoiceId; }).ChoiceText,
                        optionName: options.find(function (item) { return item.OptionId === questionDetails.Answers[k].OptionId; }).OptionText
                    });
                };
                for (var k = 0; k < questionDetails.Answers.length; k++) {
                    _loop_1(k);
                }
            }
            else if (questionDetails.QuestionType === "MCQ_SINGLE" || questionDetails.QuestionType === "MCQ_MULTIPLE" || questionDetails.QuestionType === "MCQ_TRUE_FALSE") {
                options = [];
                answers = [];
                var _loop_2 = function (j) {
                    var answerText = questionDetails.Choices.find(function (item) { return item.ChoiceId === questionDetails.Answers[j]; }).ChoiceText;
                    answers.push(answerText);
                    answerText = "";
                };
                for (var j = 0; j < questionDetails.Answers.length; j++) {
                    _loop_2(j);
                }
            }
            this.topicQuestions.push({
                id: this.questionResources[i].id,
                question: questionDetails.Question,
                questionType: questionDetails.QuestionType,
                generalTopicId: this.questionResources[i].generalTopicId,
                questionId: this.questionResources[i].id,
                choices: questionDetails.Choices,
                options: options,
                answers: answers
            });
        }
    };
    GeneralTopicQuestionManageComponent.prototype.simulateTopicQuestionList = function () {
        var questionDetails, options = [], choices = [];
        this.topicQuestions = [];
        for (var i = 0; i < this.questionResources.length; i++) {
            questionDetails = this.questionBuilderService.convertStringToJson(this.questionResources[i].contentJson);
            if (questionDetails.QuestionType === "MCQ_MATCH_LIST" || questionDetails.QuestionType === "MCQ_CHOICE_MATRIX") {
                options = this.shuffleArray(questionDetails.Options);
                choices = questionDetails.Choices;
            }
            else {
                options = [];
                choices = this.shuffleArray(questionDetails.Choices);
            }
            this.topicQuestions.push({
                id: this.questionResources[i].id,
                questionType: questionDetails.QuestionType,
                question: questionDetails.Question,
                generalTopicId: this.questionResources[i].generalTopicId,
                questionId: this.questionResources[i].id,
                choices: choices,
                options: options,
                answers: questionDetails.Answers,
                checkAnswer: ""
            });
        }
    };
    GeneralTopicQuestionManageComponent.prototype.shuffleArray = function (array) {
        array.sort(function () { return Math.random() - 0.5; });
        return array;
    };
    GeneralTopicQuestionManageComponent.prototype.onSelectMCQSingleAnswer = function (questionId, choiceId) {
        var topicIndex;
        topicIndex = this.topicQuestions.findIndex(function (item) { return item.id === questionId; });
        for (var i = 0; i < this.topicQuestions[topicIndex].answers.length; i++) {
            if (this.topicQuestions[topicIndex].answers[i] === choiceId) {
                this.topicQuestions[topicIndex].checkAnswer = "Correct";
            }
            else {
                this.topicQuestions[topicIndex].checkAnswer = "Wrong";
            }
        }
    };
    GeneralTopicQuestionManageComponent.prototype.onSelectMCQMultipleAnswer = function (questionId, choiceId, event) {
        var topicIndex, checked, choiceIndex;
        checked = event.target.checked;
        topicIndex = this.topicQuestions.findIndex(function (item) { return item.id === questionId; });
        if (checked === true) {
            this.selectedAnswer.push(choiceId);
        }
        else {
            choiceIndex = this.selectedAnswer.findIndex(function (item) { return item === choiceId; });
            this.selectedAnswer.splice(choiceIndex, 1);
        }
        this.checkMultipleAnswer(topicIndex);
    };
    GeneralTopicQuestionManageComponent.prototype.checkMultipleAnswer = function (index) {
        var answers = this.topicQuestions[index].answers.sort();
        var selectedAnswers = this.selectedAnswer.sort();
        var duplicateAnswers = [];
        for (var i = 0; i < answers.length; i++) {
            for (var j = 0; j < selectedAnswers.length; j++) {
                if (answers[i] === selectedAnswers[j]) {
                    duplicateAnswers.push(selectedAnswers[j]);
                    this.topicQuestions[index].checkAnswer = "Partial";
                }
                else {
                    this.topicQuestions[index].checkAnswer = "Wrong";
                }
            }
        }
        if (duplicateAnswers.length > 0) {
            if (duplicateAnswers.length === answers.length) {
                if (JSON.stringify(duplicateAnswers.sort()) === JSON.stringify(selectedAnswers)) {
                    this.topicQuestions[index].checkAnswer = "Correct";
                }
                else {
                    this.topicQuestions[index].checkAnswer = "Partial";
                }
            }
            else {
                this.topicQuestions[index].checkAnswer = "Partial";
            }
        }
    };
    GeneralTopicQuestionManageComponent.prototype.onSelectChoiceMatrixAnswer = function (questionId, choiceId, optionId) {
        var _this = this;
        var topicIndex, index;
        topicIndex = this.topicQuestions.findIndex(function (item) { return item.id === questionId; });
        if (this.selectedAnswer.length === 0) {
            this.selectedAnswer = [];
        }
        this.selectedAnswer.push({
            ChoiceId: choiceId,
            OptionId: optionId
        });
        if (this.selectedAnswer.length > 1) {
            var _loop_3 = function (i) {
                for (var j = i + 1; j < this_1.selectedAnswer.length; j++) {
                    if (this_1.selectedAnswer[i].ChoiceId === this_1.selectedAnswer[j].ChoiceId) {
                        index = this_1.selectedAnswer.findIndex(function (item) { return item.ChoiceId === _this.selectedAnswer[i].ChoiceId; });
                        this_1.selectedAnswer.splice(index, 1);
                    }
                }
            };
            var this_1 = this;
            for (var i = 0; i < this.selectedAnswer.length; i++) {
                _loop_3(i);
            }
        }
        this.checkMatrixAndMatchListAnswers(topicIndex);
    };
    GeneralTopicQuestionManageComponent.prototype.checkAnswerStatus = function (questionId) {
        var topicIndex = this.topicQuestions.findIndex(function (item) { return item.id === questionId; });
        if (this.topicQuestions[topicIndex].checkAnswer === "Correct") {
            this.pluginService.alertMessage("Good keep going...Correct answer", "success");
        }
        else if (this.topicQuestions[topicIndex].checkAnswer === "Partial") {
            this.pluginService.alertMessage("This is partially correct", "warning");
        }
        else if (this.topicQuestions[topicIndex].checkAnswer === "Wrong") {
            this.pluginService.alertMessage("Oops..! this is wrong", "error");
        }
        else {
            this.pluginService.alertMessage("Please select a answer and check it", "error");
        }
    };
    GeneralTopicQuestionManageComponent.prototype.updatedDropList = function (questionId, event) {
        var topicIndex = this.topicQuestions.findIndex(function (item) { return item.id === questionId; });
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
            this.selectedAnswer = [];
            for (var i = 0; i < this.topicQuestions[topicIndex].choices.length; i++) {
                for (var j = 0; j < this.topicQuestions[topicIndex].options.length; j++) {
                    if (i === j) {
                        this.selectedAnswer.push({
                            ChoiceId: this.topicQuestions[topicIndex].choices[i].ChoiceId,
                            OptionId: this.topicQuestions[topicIndex].options[j].OptionId
                        });
                    }
                }
            }
            this.checkMatrixAndMatchListAnswers(topicIndex);
        }
    };
    GeneralTopicQuestionManageComponent.prototype.checkMatrixAndMatchListAnswers = function (index) {
        var sortArr1, sortArr2, duplicateAnswers = [];
        for (var i = 0; i < this.topicQuestions[index].answers.length; i++) {
            for (var j = 0; j < this.selectedAnswer.length; j++) {
                if (this.topicQuestions[index].answers[i].ChoiceId === this.selectedAnswer[j].ChoiceId) {
                    if (this.topicQuestions[index].answers[i].OptionId === this.selectedAnswer[j].OptionId) {
                        duplicateAnswers.push({
                            ChoiceId: this.selectedAnswer[j].ChoiceId,
                            OptionId: this.selectedAnswer[j].OptionId
                        });
                    }
                }
                else {
                    this.topicQuestions[index].checkAnswer = "Wrong";
                }
            }
        }
        if (duplicateAnswers.length > 0) {
            sortArr1 = function (obj1, obj2) { return obj1.ChoiceId - obj2.ChoiceId; };
            var sortedArray1 = duplicateAnswers.sort(sortArr1);
            sortArr2 = function (obj1, obj2) { return obj1.ChoiceId - obj2.ChoiceId; };
            var sortedArray2 = this.selectedAnswer.sort(sortArr2);
            if (duplicateAnswers.length === this.topicQuestions[index].answers.length) {
                if (JSON.stringify(sortedArray1) === JSON.stringify(sortedArray2)) {
                    this.topicQuestions[index].checkAnswer = "Correct";
                }
                else {
                    this.topicQuestions[index].checkAnswer = "Partial";
                }
            }
            else {
                this.topicQuestions[index].checkAnswer = "Partial";
            }
        }
    };
    GeneralTopicQuestionManageComponent.prototype.previousQuestion = function () {
        this.selectedAnswer = [];
    };
    GeneralTopicQuestionManageComponent.prototype.nextQuestion = function () {
        this.selectedAnswer = [];
    };
    GeneralTopicQuestionManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./general-topic-question-manage.component.html */ "./src/app/general-concept-topic/general-topic-question-manage.component.html"),
            providers: [_general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__["GeneralConceptAndTopicService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_6__["GeneralSubjectService"],
            _general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__["GeneralConceptAndTopicService"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"],
            _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_5__["QuestionBuilderService"]])
    ], GeneralTopicQuestionManageComponent);
    return GeneralTopicQuestionManageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=general-concept-topic-general-concept-topic-module.js.map