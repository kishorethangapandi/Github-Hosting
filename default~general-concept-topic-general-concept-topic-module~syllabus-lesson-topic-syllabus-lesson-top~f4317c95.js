(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~general-concept-topic-general-concept-topic-module~syllabus-lesson-topic-syllabus-lesson-top~f4317c95"],{

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a,"undefined"!=typeof module&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map

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

/***/ "./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 d-block my-2\" *ngIf=\"viewmodel\">\n    <p class=\"font-20 font-bold\">Question</p>\n    <ckeditor class=\"w-100\" [config]=\"editorQuestionConfig\" [(ngModel)]=\"viewModel.Question\" #questionInput=\"ngModel\"\n        placeholder=\"Enter question (min length: 3 and max length: 4000)\"  [required]=\"true\">\n    </ckeditor>\n</div>\n\n<div class=\"w-100 d-block my-2\">\n    <p class=\"font-20 font-bold\">Response</p>\n    <div class=\"w-100 d-flex mb-2\" *ngFor=\"let option of viewmodel.Options\">\n        <div class=\"editor\">\n            <ckeditor class=\"w-100\" [config]=\"editorChoiceConfig\" [(ngModel)]=\"option.OptionText\" #choiceInput=\"ngModel\"\n                placeholder=\"Enter question (min length: 3 and max length: 4000)\" \n                [required]=\"true\">\n            </ckeditor>\n        </div>\n        <div class=\"delete d-flex align-items-end ml-4 font-20 text-danger\">\n            <i class=\"fa fa-trash\" (click)=\"deleteOption(option.OptionId)\"></i>\n        </div>\n    </div>\n    <div class=\"w-100 d-flex justify-content-end my-2 align-self-start\">\n        <button class=\"btn btn-info\" (click)=\"addOption()\">\n            <i class=\"fa fa-plus-circle mr-2\"></i> Add Option</button>\n    </div>\n</div>\n\n<div class=\"drag--container\">\n    <p class=\"font-20 font-bold\">Preview</p>\n    <div [questionPreview]=\"viewmodel.Question\" class=\"preview-panel\">\n    </div>\n    <div class=\"option--container options zone\">\n        <span *ngFor=\"let option of viewmodel.Options\" [attr.data-option-id]=\"option.OptionId\" class=\"option--item\"\n            [MathJax]=\"option.OptionText | sanitizeHtml\"> </span>\n    </div>\n</div>\n\n<div class=\"w-100 d-flex justify-content-end align-self-start my-2\">\n    <button class=\"btn btn-danger mr-2\" type=\"submit\" (click)=\"cancel()\">\n        <i class=\"fa fa-times mr-2\"></i> Cancel</button>\n    <button class=\"btn btn-success\" type=\"submit\" (click)=\"saveQuestion()\">\n        <i class=\"fa fa-save mr-2\"></i> Save Question</button>\n</div>"

/***/ }),

/***/ "./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".choice--group {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px; }\n\n.choice--answer {\n  width: 5%; }\n\n.choice--editor {\n  width: 95%; }\n\n.choice--delete {\n  width: 5%;\n  text-align: right;\n  font-size: 16px; }\n\n.choice--delete i {\n    cursor: pointer; }\n\n.actions {\n  text-align: center; }\n\n.choice-container, .option-container {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px; }\n\n.choice-container .item, .option-container .item {\n    width: 45%; }\n\n.choice-container {\n  flex-direction: column; }\n\n.option--container.zone {\n  display: flex;\n  justify-content: space-around;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\n.zone {\n  border: 1px solid #eeeeee;\n  padding: 10px 5px;\n  margin-bottom: 10px;\n  min-height: 50px;\n  border: 1px dashed #e8e6e6; }\n\n.zone .option--container {\n    justify-content: space-around;\n    min-width: 50px; }\n\n.choice--label {\n  min-height: 50px;\n  border: 1px solid #eee;\n  padding: 10px 5px;\n  width: 95%; }\n\n.option--container .option--item {\n  min-height: 50px;\n  border: 1px solid #eee;\n  padding: 10px 5px;\n  background-color: #eaeaea; }\n\n.choice--group {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  width: 100%; }\n\n.choice--editor {\n  width: 95%; }\n\n.choice--delete {\n  width: 5%;\n  text-align: right;\n  font-size: 16px; }\n\n.choice--delete i {\n    cursor: pointer; }\n\n.dropzone {\n  outline: solid 1px;\n  height: 50px;\n  height: 50px; }\n\n.actions {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24tYnVpbGRlci9jbG96ZS9kcmFnLW4tZHJvcC9DOlxcVXNlcnNcXGtpc2hvXFxPbmVEcml2ZVxcRGVza3RvcFxcV29ya1xcY2VhZG1pbi1kZXZfa2lzaG9yZVxcY2VhZG1pbi1kZXZfa2lzaG9yZS9zcmNcXGFwcFxccXVlc3Rpb24tYnVpbGRlclxcY2xvemVcXGRyYWctbi1kcm9wXFxkcmFnLW4tZHJvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsK0JBQThCO0VBQzlCLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLFVBQVMsRUFDWjs7QUFFRDtFQUNRLFdBQVUsRUFDakI7O0FBRUQ7RUFDSSxVQUFTO0VBQ1Qsa0JBQWlCO0VBQ2pCLGdCQUFlLEVBSWxCOztBQVBEO0lBS1EsZ0JBQWUsRUFDbEI7O0FBR0w7RUFDSSxtQkFBa0IsRUFDckI7O0FBR0Q7RUFDSSxjQUFhO0VBQ2IsK0JBQThCO0VBQzlCLG9CQUFtQixFQUl0Qjs7QUFQRDtJQUtRLFdBQVUsRUFDYjs7QUFHTDtFQUNJLHVCQUFzQixFQUN6Qjs7QUFHRDtFQUNJLGNBQWE7RUFDYiw4QkFBNkI7RUFDN0Isb0JBQW1CO0VBQ25CLGdCQUFlLEVBQ2xCOztBQUdEO0VBQ0ksMEJBQXlCO0VBQ3pCLGtCQUFpQjtFQUNqQixvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLDJCQUEwQixFQUs3Qjs7QUFWRDtJQU9RLDhCQUE2QjtJQUM3QixnQkFBZSxFQUNsQjs7QUFHTDtFQUNJLGlCQUFnQjtFQUNoQix1QkFBc0I7RUFDdEIsa0JBQWlCO0VBQ2pCLFdBQVUsRUFDYjs7QUFFRDtFQUVRLGlCQUFnQjtFQUNoQix1QkFBc0I7RUFDdEIsa0JBQWlCO0VBQ2pCLDBCQUF5QixFQUM1Qjs7QUFHTDtFQUNJLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsK0JBQThCO0VBQzlCLG9CQUFtQjtFQUNuQixZQUFXLEVBQ2Q7O0FBR0Q7RUFDSSxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxVQUFTO0VBQ1Qsa0JBQWlCO0VBQ2pCLGdCQUFlLEVBSWxCOztBQVBEO0lBS1EsZ0JBQWUsRUFDbEI7O0FBR0w7RUFDSSxtQkFBa0I7RUFBRSxhQUFZO0VBQ2hDLGFBQVksRUFDZjs7QUFHRDtFQUNJLG1CQUFrQixFQUNyQiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uLWJ1aWxkZXIvY2xvemUvZHJhZy1uLWRyb3AvZHJhZy1uLWRyb3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hvaWNlLS1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY2hvaWNlLS1hbnN3ZXIge1xuICAgIHdpZHRoOiA1JTtcbn1cblxuLmNob2ljZS0tZWRpdG9yIHtcbiAgICAgICAgd2lkdGg6IDk1JTtcbn1cblxuLmNob2ljZS0tZGVsZXRlIHtcbiAgICB3aWR0aDogNSU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGkge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4uYWN0aW9ucyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi5jaG9pY2UtY29udGFpbmVyLCAub3B0aW9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAuaXRlbSB7XG4gICAgICAgIHdpZHRoOiA0NSU7XG4gICAgfVxufVxuXG4uY2hvaWNlLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuXG4ub3B0aW9uLS1jb250YWluZXIuem9uZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuXG4uem9uZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNlOGU2ZTY7XG4gICAgLm9wdGlvbi0tY29udGFpbmVyIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIG1pbi13aWR0aDogNTBweDtcbiAgICB9XG59XG5cbi5jaG9pY2UtLWxhYmVsIHtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgd2lkdGg6IDk1JTtcbn1cblxuLm9wdGlvbi0tY29udGFpbmVyIHtcbiAgICAub3B0aW9uLS1pdGVtIHtcbiAgICAgICAgbWluLWhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG4gICAgfVxufVxuXG4uY2hvaWNlLS1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5cbi5jaG9pY2UtLWVkaXRvciB7XG4gICAgd2lkdGg6IDk1JTtcbn1cblxuLmNob2ljZS0tZGVsZXRlIHtcbiAgICB3aWR0aDogNSU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGkge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4uZHJvcHpvbmUge1xuICAgIG91dGxpbmU6IHNvbGlkIDFweDsgaGVpZ2h0OiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuXG4uYWN0aW9ucyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ClozeDrag, Answer, Option, DragAndDropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClozeDrag", function() { return ClozeDrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return Answer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDropComponent", function() { return DragAndDropComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ClozeDrag = /** @class */ (function () {
    function ClozeDrag() {
    }
    return ClozeDrag;
}());

var Answer = /** @class */ (function () {
    function Answer(ZoneId, OptionId) {
        this.ZoneId = ZoneId;
        this.OptionId = OptionId;
    }
    return Answer;
}());

var Option = /** @class */ (function () {
    function Option(OptionId, OptionText) {
        this.OptionId = OptionId;
        this.OptionText = OptionText;
    }
    return Option;
}());

var DragAndDropComponent = /** @class */ (function () {
    function DragAndDropComponent(router, activatedRoute, elementRef) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.elementRef = elementRef;
        this.viewmodel = new ClozeDrag();
    }
    DragAndDropComponent.prototype.ngOnInit = function () {
        if (this.activatedRoute.snapshot.data.question) {
            this.viewmodel = this.activatedRoute.snapshot.data.question;
            this.resetDropState();
        }
    };
    DragAndDropComponent.prototype.ngAfterViewInit = function () {
        var containers = $(this.elementRef.nativeElement).find(".drag--container");
        //const droppable = new Droppable(containers.get(0), {
        //     draggable: ".option--item",
        //     mirror: {
        //         constrainDimensions: false,
        //         cursorOffsetX: 1,
        //         cursorOffsetY: 1
        //     },
        //     dropzone: ".zone"
        // });
        // droppable.on("droppable:dropped", this.onDropped.bind(this));
        // droppable.on("droppable:stop", (args) => {
        //     let dropzone = $(args.data.dropzone);
        //     if (dropzone.is(".options")) dropzone.removeClass("draggable-dropzone--occupied");
        // });
    };
    DragAndDropComponent.prototype.onDropped = function (args) {
        var _this = this;
        /* If the dropzone is Zone(X) then do nothing... */
        if (!$(args.data.dropzone).is(".cloze--dropzone"))
            return;
        //this.viewmodel.Answers = [];
        Promise.resolve().then(function () {
            var previewpanel = $(_this.elementRef.nativeElement).find(".preview-panel");
            previewpanel.find(".zone").map(function (index, item) {
                var zoneId = index + 1;
                var optionId = "";
                item = $(item);
                if (item.children().length > 0) {
                    optionId = item.find(".option--item").data("option-id");
                }
                _this.viewmodel.Answers.push(new Answer(zoneId, optionId));
            });
        });
    };
    DragAndDropComponent.prototype.deleteOption = function (OptionId) {
        this.viewmodel.Options = this.viewmodel.Options.filter(function (item) {
            return item.OptionId !== OptionId;
        });
    };
    DragAndDropComponent.prototype.addOption = function () {
        this.viewmodel.Options = this.viewmodel.Options || [];
        this.viewmodel.Options.push(new Option(new Date().getUTCMilliseconds(), ""));
    };
    DragAndDropComponent.prototype.saveQuestion = function () {
        // console.log(this.viewmodel);
    };
    DragAndDropComponent.prototype.cancel = function () {
        this.router.navigateByUrl("assessment/choose");
    };
    /**
     * This method should be invoked only once after the component is loaded
     */
    DragAndDropComponent.prototype.resetDropState = function () {
        var _this = this;
        // this method will restore the state of the dropped item
        Promise.resolve().then(function () {
            if (_this.viewmodel.Answers && _this.viewmodel.Answers.length > 0) {
                var rootElement = $(_this.elementRef.nativeElement);
                var dropPanel = rootElement.find(".preview-panel");
                var optionPool = rootElement.find(".option--container");
                for (var i = 0; i < _this.viewmodel.Answers.length; i++) {
                    var zone = dropPanel.find(".zone:nth-child(" + _this.viewmodel.Answers[i].ZoneId + ")");
                    var droppable = optionPool.find("[data-option-id='" + _this.viewmodel.Answers[i].OptionId + "']");
                    zone.append(droppable).addClass("draggable-dropzone--occupied");
                }
            }
        });
    };
    DragAndDropComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./drag-n-drop.component.html */ "./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.html"),
            styles: [__webpack_require__(/*! ./drag-n-drop.component.scss */ "./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], DragAndDropComponent);
    return DragAndDropComponent;
}());



/***/ }),

/***/ "./src/app/question-builder/cloze/question-preview.directive.ts":
/*!**********************************************************************!*\
  !*** ./src/app/question-builder/cloze/question-preview.directive.ts ***!
  \**********************************************************************/
/*! exports provided: QuestionPreviewDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionPreviewDirective", function() { return QuestionPreviewDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuestionPreviewDirective = /** @class */ (function () {
    function QuestionPreviewDirective(elementRef) {
        this.elementRef = elementRef;
    }
    QuestionPreviewDirective.prototype.ngOnInit = function () {
        this.rootElement = $(this.elementRef.nativeElement);
    };
    QuestionPreviewDirective.prototype.ngOnChanges = function (change) {
        this.rootElement = $(this.elementRef.nativeElement);
        if (this.rootElement) {
            var preview = this.question ?
                this.question.replace(/{{response}}/g, '<span class="cloze--dropzone zone"></span>') : "";
            this.rootElement.html(preview);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("questionPreview"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], QuestionPreviewDirective.prototype, "question", void 0);
    QuestionPreviewDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "[questionPreview]"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], QuestionPreviewDirective);
    return QuestionPreviewDirective;
}());



/***/ }),

/***/ "./src/app/question-builder/matchlist/matchlist.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/question-builder/matchlist/matchlist.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row my-2\">\n    <div class=\"col-xxl-12 d-flex justify-content-between align-items-center\">\n        <h5 class=\"font-16\">Compose question - Match list</h5>\n    </div>\n</div>\n\n<div class=\"w-100 d-block my-2\" *ngIf=\"viewModel\">\n    <ckeditor class=\"w-100\" [config]=\"editorQuestionConfig\" [(ngModel)]=\"viewModel.Question\" #questionInput=\"ngModel\"\n        placeholder=\"Enter question (min length: 3 and max length: 4000)\" [required]=\"true\">\n    </ckeditor>\n    <span class=\"text-danger font-15 my-2 mx-3\" *ngIf=\"!questionInput.valid\">\n        Question is required\n    </span>\n</div>\n\n<div class=\"w-100 d-block my-2\">\n    <p class=\"font-16\">Left side option</p>\n    <div class=\"w-100 d-flex mb-2\" *ngFor=\"let choice of viewModel.Choices\">\n        <div class=\"mcq-stem\">\n            <ckeditor class=\"w-100\" [config]=\"editorChoiceConfig\" [(ngModel)]=\"choice.ChoiceText\" #choiceInput=\"ngModel\"\n                placeholder=\"Enter choice (min length: 1 and max length: 4000)\" [required]=\"true\">\n            </ckeditor>\n\n            <span class=\"text-danger font-15 my-2\" *ngIf=\"!choiceInput.valid\">\n                Left side option is required\n            </span>\n        </div>\n        <div class=\"mcq-action d-flex align-items-center justify-content-center ml-3 font-20 text-danger delete-icon\">\n            <i class=\"fa fa-trash\" (click)=\"deleteChoice(choice.ChoiceId)\"></i>\n        </div>\n    </div>\n    <div class=\"w-100 d-flex justify-content-end my-2 align-self-start\">\n        <button class=\"btn btn-info\" (click)=\"addChoice()\">\n            <i class=\"fa fa-plus-circle mr-2\"></i> Add left option</button>\n    </div>\n</div>\n\n<div class=\"w-100 d-block my-2\">\n    <p class=\"font-16\">Right side option</p>\n    <div class=\"w-100 d-flex mb-2\" *ngFor=\"let option of viewModel.Options\">\n        <div class=\"mcq-stem\">\n            <ckeditor class=\"w-100\" [config]=\"editorChoiceConfig\" [(ngModel)]=\"option.OptionText\" #optionInput=\"ngModel\"\n                placeholder=\"Enter choice (min length: 1 and max length: 4000)\" [required]=\"true\">\n            </ckeditor>\n            <span class=\"text-danger font-15 my-2\" *ngIf=\"!optionInput.valid\">\n                Right side option is required\n            </span>\n        </div>\n        <div class=\"mcq-action d-flex align-items-center justify-content-center ml-4 font-20 text-danger delete-icon\">\n            <i class=\"fa fa-trash\" (click)=\"deleteOption(option.OptionId)\"></i>\n        </div>\n    </div>\n    <div class=\"w-100 d-flex justify-content-end my-2 align-self-start\">\n        <button class=\"btn btn-info\" (click)=\"addOption()\">\n            <i class=\"fa fa-plus-circle mr-2\"></i> Add right option</button>\n    </div>\n</div>\n\n<div class=\"drag--container mb-2\">\n    <p class=\"font-16\">Setting up answers</p>\n\n    <div cdkDropListGroup>\n        <div class=\"example-container d-flex justify-content-between flex-nowrap mb-2\">\n            <div class=\"mcq-left mr-2\">\n                <div class=\"match-list\" data-value=\"viewModel.Choices\">\n                    <div class=\"list-box\" *ngFor=\"let item of viewModel.Choices\"\n                        [MathJax]=\"item.ChoiceText | sanitizeHtml\"></div>\n                </div>\n            </div>\n            <!-- <div class=\"line-circle w-auto\" *ngFor=\"let item of viewModel.Choices\" id=\"{{item}}\"></div> -->\n            <div class=\"mcq-right ml-2\">\n                <div cdkDropList [cdkDropListData]=\"viewModel.Options\" class=\"match-list\"\n                    (cdkDropListDropped)=\"updatedDropList($event)\">\n                    <div class=\"list-box\" *ngFor=\"let item of viewModel.Options\" cdkDrag\n                        [MathJax]=\"item.OptionText | sanitizeHtml\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"mb-3 font-18\">\n        <div class=\"border-success p-3 alert-success\">\n            <span class=\"text-success\">Answer&nbsp;:&nbsp;</span>\n            <span *ngIf=\"answers.length > 0\">\n                <span class=\"text-dark\" *ngFor=\"let answer of answers;let checkIndex =index\">\n                    <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span>\n                    -\n                    <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\n                    {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\n            </span>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/question-builder/matchlist/matchlist.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/question-builder/matchlist/matchlist.component.ts ***!
  \*******************************************************************/
/*! exports provided: MatchList, Answer, Choice, Option, MatchlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchList", function() { return MatchList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return Answer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Choice", function() { return Choice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchlistComponent", function() { return MatchlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _question_builder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../question-builder.service */ "./src/app/question-builder/question-builder.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");






var MatchList = /** @class */ (function () {
    function MatchList() {
        this.Choices = [];
        this.Options = [];
        this.Answers = [];
    }
    return MatchList;
}());

var Answer = /** @class */ (function () {
    function Answer(ChoiceId, OptionId) {
        this.ChoiceId = ChoiceId;
        this.OptionId = OptionId;
    }
    return Answer;
}());

var Choice = /** @class */ (function () {
    function Choice(ChoiceId, ChoiceText) {
        this.ChoiceId = ChoiceId;
        this.ChoiceText = ChoiceText;
    }
    return Choice;
}());

var Option = /** @class */ (function () {
    function Option(OptionId, OptionText) {
        this.OptionId = OptionId;
        this.OptionText = OptionText;
    }
    return Option;
}());

var MatchlistComponent = /** @class */ (function () {
    function MatchlistComponent(route, router, questionService, pluginService, changedetector) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.questionService = questionService;
        this.pluginService = pluginService;
        this.changedetector = changedetector;
        this.answers = [];
        this.questionResource = {};
        this.checkDrag = false;
        this.editorQuestionConfig = this.pluginService.getCKEditorQuestionConfig();
        this.editorChoiceConfig = this.pluginService.getCKEditorChoiceConfig();
        this.viewModel = new MatchList();
        this.route.data.subscribe(function (args) {
            if (args.type === "MCQ_MATCH_LIST") {
                _this.viewModel.QuestionType = args.type;
            }
        });
    }
    MatchlistComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.data.question) {
            this.viewModel = this.route.snapshot.data.question;
            //this.resetDropState();
        }
        this.getCurrentRouteInfo();
    };
    MatchlistComponent.prototype.getCurrentRouteInfo = function () {
        var splitUrl, routeName;
        splitUrl = this.router.url.split("/");
        routeName = splitUrl.pop();
        if (routeName === "topic-question-edit" || routeName === "general-topic-question-edit") {
            this.viewModel = this.questionResource;
            this.showMatchListAnswers();
            this.checkDrag = true;
        }
    };
    MatchlistComponent.prototype.updatedDropList = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
            this.viewModel.Answers = [];
            for (var i = 0; i < this.viewModel.Choices.length; i++) {
                for (var j = 0; j < this.viewModel.Options.length; j++) {
                    if (i === j) {
                        this.viewModel.Answers.push({
                            ChoiceId: this.viewModel.Choices[i].ChoiceId,
                            OptionId: this.viewModel.Options[j].OptionId
                        });
                        this.showMatchListAnswers();
                    }
                }
            }
            this.viewModel.TotalMarks = this.viewModel.Answers.length;
        }
    };
    MatchlistComponent.prototype.showMatchListAnswers = function () {
        var answers = [], matrixChoices = [], matrixOptions = [];
        this.answers = [];
        matrixChoices = [];
        matrixOptions = [];
        answers = this.viewModel.Answers;
        matrixChoices = this.viewModel.Choices;
        matrixOptions = this.viewModel.Options;
        var _loop_1 = function (k) {
            this_1.answers.push({
                choiceName: matrixChoices.find(function (item) { return item.ChoiceId === answers[k].ChoiceId; }).ChoiceText,
                optionName: matrixOptions.find(function (item) { return item.OptionId === answers[k].OptionId; }).OptionText
            });
        };
        var this_1 = this;
        for (var k = 0; k < answers.length; k++) {
            _loop_1(k);
        }
        this.checkDrag = false;
    };
    MatchlistComponent.prototype.addChoice = function () {
        if (this.viewModel.Choices.length > 0) {
            this.viewModel.Choices = this.viewModel.Choices.concat([new Choice(new Date().getUTCMilliseconds(), "")]);
        }
        else if (this.viewModel.Choices.length === 0) {
            this.viewModel.Choices = [];
            this.viewModel.Choices = this.viewModel.Choices.concat([new Choice(new Date().getUTCMilliseconds(), "")]);
        }
        else {
            this.viewModel.Choices = [];
        }
    };
    MatchlistComponent.prototype.addOption = function () {
        if (this.viewModel.Options.length > 0) {
            this.viewModel.Options = this.viewModel.Options.concat([new Option(new Date().getUTCMilliseconds(), "")]);
        }
        else if (this.viewModel.Options.length === 0) {
            this.viewModel.Options = this.viewModel.Options.concat([new Option(new Date().getUTCMilliseconds(), "")]);
        }
        else {
            this.viewModel.Options = [];
        }
    };
    MatchlistComponent.prototype.deleteChoice = function (choiceId) {
        if (this.viewModel.Answers.length > 0) {
            this.pluginService.alertMessage("You can't delete it, choice is already related to answer", "error");
        }
        else {
            var index = this.viewModel.Choices.findIndex(function (item) { return item.ChoiceId === choiceId; });
            this.viewModel.Choices.splice(index, 1);
        }
    };
    MatchlistComponent.prototype.deleteOption = function (optionId) {
        if (this.viewModel.Answers.length > 0) {
            this.pluginService.alertMessage("You can't delete it, option is already related to answer", "error");
        }
        else {
            var index = this.viewModel.Options.findIndex(function (item) { return item.OptionId === optionId; });
            this.viewModel.Options.splice(index, 1);
        }
    };
    MatchlistComponent.prototype.ngAfterViewChecked = function () {
        if (this.viewModel) {
            this.questionService.generateQuestionResource(this.viewModel);
            this.showMatchListAnswers();
        }
        this.changedetector.detectChanges();
    };
    MatchlistComponent.prototype.ngOnDestroy = function () {
        this.viewModel.Question = "";
        this.viewModel.Choices = [];
        this.viewModel.Options = [];
        this.viewModel.QuestionType = "";
        this.viewModel.Answers = [];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MatchlistComponent.prototype, "questionResource", void 0);
    MatchlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "match-list",
            template: __webpack_require__(/*! ./matchlist.component.html */ "./src/app/question-builder/matchlist/matchlist.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _question_builder_service__WEBPACK_IMPORTED_MODULE_3__["QuestionBuilderService"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], MatchlistComponent);
    return MatchlistComponent;
}());



/***/ }),

/***/ "./src/app/question-builder/mcq-choicematrix/index.ts":
/*!************************************************************!*\
  !*** ./src/app/question-builder/mcq-choicematrix/index.ts ***!
  \************************************************************/
/*! exports provided: MCQChoiceMatrix, Answer, Choice, Option, MCQChoiceMatrixComponent, UpdateAnswersDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mcq_choicematrix_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mcq-choicematrix.component */ "./src/app/question-builder/mcq-choicematrix/mcq-choicematrix.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MCQChoiceMatrix", function() { return _mcq_choicematrix_component__WEBPACK_IMPORTED_MODULE_0__["MCQChoiceMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return _mcq_choicematrix_component__WEBPACK_IMPORTED_MODULE_0__["Answer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Choice", function() { return _mcq_choicematrix_component__WEBPACK_IMPORTED_MODULE_0__["Choice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return _mcq_choicematrix_component__WEBPACK_IMPORTED_MODULE_0__["Option"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MCQChoiceMatrixComponent", function() { return _mcq_choicematrix_component__WEBPACK_IMPORTED_MODULE_0__["MCQChoiceMatrixComponent"]; });

/* harmony import */ var _update_answers_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-answers.directive */ "./src/app/question-builder/mcq-choicematrix/update-answers.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateAnswersDirective", function() { return _update_answers_directive__WEBPACK_IMPORTED_MODULE_1__["UpdateAnswersDirective"]; });





/***/ }),

/***/ "./src/app/question-builder/mcq-choicematrix/mcq-choicematrix.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/question-builder/mcq-choicematrix/mcq-choicematrix.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row my-2\">\n    <div class=\"col-xxl-12 d-flex justify-content-between align-items-center\">\n        <h5 class=\"font-16\">Compose question - Choice matrix question</h5>\n        <a target=\"_blank\" class=\"btn btn-info\" routerLink=\"./topic-question-sample\">\n            <i class=\"fa fa-question-circle mr-2\"></i>View sample questions\n        </a>\n    </div>\n</div>\n\n<div class=\"w-100 d-block my-2\">\n    <ckeditor class=\"w-100\" [config]=\"editorQuestionConfig\" [(ngModel)]=\"viewModel.Question\" #questionInput=\"ngModel\"\n        placeholder=\"Enter question (min length: 3 and max length: 4000)\" [required]=\"true\">\n    </ckeditor>\n    <span class=\"text-danger font-15 my-2 mx-3\" *ngIf=\"!questionInput.valid\">\n        Question is required\n    </span>\n</div>\n\n<div class=\"w-100 d-block my-2\">\n    <p class=\"font-16\">Stems</p>\n    <div class=\"w-100 d-flex mb-2\" *ngFor=\"let choice of viewModel.Choices\">\n        <div class=\"mcq-stem\">\n            <ckeditor class=\"w-100\" [config]=\"editorChoiceConfig\" [required]=\"true\" [(ngModel)]=\"choice.ChoiceText\"\n                #choiceInput=\"ngModel\" placeholder=\"Enter choice (min length: 1 and max length: 4000)\">\n            </ckeditor>\n            <span class=\"text-danger font-15 my-2\" *ngIf=\"!choiceInput.valid\">\n                Stem is required\n            </span>\n        </div>\n        <div class=\"mcq-action d-flex align-items-center justify-content-end font-22 text-danger delete-icon\">\n            <i class=\"fa fa-trash\" (click)=\"deleteChoice(choice.ChoiceId)\"></i>\n        </div>\n    </div>\n</div>\n\n<div class=\"w-100 d-flex justify-content-end my-2 align-self-start\">\n    <button class=\"btn btn-info\" (click)=\"addChoice()\">\n        <i class=\"fa fa-plus-circle mr-2\"></i> Add stem</button>\n</div>\n\n<div class=\"w-100 d-block my-2\">\n    <p class=\"font-16\">Options</p>\n    <div class=\"w-100 d-flex mb-2\" *ngFor=\"let option of viewModel.Options\">\n        <div class=\"mcq-stem\">\n            <ckeditor class=\"w-100\" [config]=\"editorChoiceConfig\" [(ngModel)]=\"option.OptionText\" #optionInput=\"ngModel\"\n                placeholder=\"Enter choice (min length: 1 and max length: 4000)\" [required]=\"true\">\n            </ckeditor>\n            <span class=\"text-danger font-15 my-2\" *ngIf=\"!optionInput.valid\">\n                Option is required\n            </span>\n        </div>\n        <div class=\"mcq-action d-flex align-items-center justify-content-end font-22 text-danger delete-icon\">\n            <i class=\"fa fa-trash\" (click)=\"deleteOption(option.OptionId)\"></i>\n        </div>\n    </div>\n</div>\n\n<div class=\"w-100 d-flex justify-content-end my-2 align-self-start\">\n    <button class=\"btn btn-info\" (click)=\"addOption()\">\n        <i class=\"fa fa-plus-circle mr-2\"></i> Add Option</button>\n</div>\n\n<div class=\"w-100 d-block my-2\">\n    <p class=\"font-16\">Setting up answers</p>\n</div>\n\n<table class=\"table-matrix my-2\">\n    <tr class=\"bg-lightgray\">\n        <td></td>\n        <td *ngFor=\"let option of viewModel.Options\">\n            <span class=\"text-dark\" [MathJax]=\"option.OptionText | sanitizeHtml\"></span>\n        </td>\n    </tr>\n    <tr style=\"background: none !important;\" *ngFor=\"let choice of viewModel.Choices\">\n        <td><span [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></span></td>\n        <td *ngFor=\"let option of viewModel.Options\">\n            <div class=\"radio\">\n                <input type=\"radio\" [id]=\"choice.ChoiceId+option.OptionId\" [choicematrix]=\"viewModel.Answers\"\n                    [optionid]=\"option.OptionId\" [choiceid]=\"choice.ChoiceId\" name=\"{{ choice.ChoiceId }}\"\n                    (click)=\"markAsAnswer(choice, option)\">\n                <label for=\"{{choice.ChoiceId+option.OptionId}}\"></label>\n            </div>\n        </td>\n    </tr>\n</table>\n\n<div class=\"mb-3 font-18\">\n    <div class=\"border-success p-3 alert-success\">\n        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span>\n        <span *ngIf=\"answers.length > 0\">\n            <span class=\"text-dark\" *ngFor=\"let answer of answers;let checkIndex =index\">\n                <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span>\n                -\n                <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\n                {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\n        </span>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/question-builder/mcq-choicematrix/mcq-choicematrix.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/question-builder/mcq-choicematrix/mcq-choicematrix.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-matrix {\n  border-collapse: collapse; }\n\n.bg-lightgray {\n  background-color: #f0f0f0 !important; }\n\n.table-matrix tbody tr td,\n.table-matrix tbody tr th {\n  border: 1px solid #dee2e6 !important;\n  text-align: center; }\n\n.roundLabel {\n  padding: 5px; }\n\n.roundLabel:hover {\n  background: #fcfdd8; }\n\n.mcq-stem {\n  width: 95%; }\n\n.mcq-action {\n  width: 5%; }\n\n.radio {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24tYnVpbGRlci9tY3EtY2hvaWNlbWF0cml4L0M6XFxVc2Vyc1xca2lzaG9cXE9uZURyaXZlXFxEZXNrdG9wXFxXb3JrXFxjZWFkbWluLWRldl9raXNob3JlXFxjZWFkbWluLWRldl9raXNob3JlL3NyY1xcYXBwXFxxdWVzdGlvbi1idWlsZGVyXFxtY3EtY2hvaWNlbWF0cml4XFxtY3EtY2hvaWNlbWF0cml4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUNEO0VBQ0UscUNBQXVDLEVBQ3hDOztBQUVEOztFQUVFLHFDQUFvQztFQUNwQyxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxXQUFVLEVBQ1g7O0FBRUQ7RUFDRSxVQUFTLEVBQ1Y7O0FBRUQ7RUFDRSxjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uLWJ1aWxkZXIvbWNxLWNob2ljZW1hdHJpeC9tY3EtY2hvaWNlbWF0cml4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLi8uLi9zY3NzL2NvbnN0YW50LnNjc3NcIjtcblxuLnRhYmxlLW1hdHJpeCB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG4uYmctbGlnaHRncmF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xufVxuXG4udGFibGUtbWF0cml4IHRib2R5IHRyIHRkLFxuLnRhYmxlLW1hdHJpeCB0Ym9keSB0ciB0aCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucm91bmRMYWJlbCB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLnJvdW5kTGFiZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmNmZGQ4O1xufVxuXG4ubWNxLXN0ZW0ge1xuICB3aWR0aDogOTUlO1xufVxuXG4ubWNxLWFjdGlvbiB7XG4gIHdpZHRoOiA1JTtcbn1cblxuLnJhZGlvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/question-builder/mcq-choicematrix/mcq-choicematrix.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/question-builder/mcq-choicematrix/mcq-choicematrix.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MCQChoiceMatrix, Answer, Choice, Option, MCQChoiceMatrixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MCQChoiceMatrix", function() { return MCQChoiceMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return Answer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Choice", function() { return Choice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MCQChoiceMatrixComponent", function() { return MCQChoiceMatrixComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _question_builder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../question-builder.service */ "./src/app/question-builder/question-builder.service.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");





var MCQChoiceMatrix = /** @class */ (function () {
    function MCQChoiceMatrix() {
        this.Choices = [];
        this.Options = [];
        this.Answers = [];
    }
    return MCQChoiceMatrix;
}());

var Answer = /** @class */ (function () {
    function Answer(ChoiceId, OptionId) {
        this.ChoiceId = ChoiceId;
        this.OptionId = OptionId;
    }
    return Answer;
}());

var Choice = /** @class */ (function () {
    function Choice(choiceId, choiceText) {
        this.ChoiceId = choiceId;
        this.ChoiceText = choiceText;
    }
    return Choice;
}());

var Option = /** @class */ (function () {
    function Option(optionId, optionText) {
        this.OptionId = optionId;
        this.OptionText = optionText;
    }
    return Option;
}());

var MCQChoiceMatrixComponent = /** @class */ (function () {
    function MCQChoiceMatrixComponent(router, route, questionService, pluginService, changedetector) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.questionService = questionService;
        this.pluginService = pluginService;
        this.changedetector = changedetector;
        this.answers = [];
        this.viewModel = new MCQChoiceMatrix();
        this.route.data.subscribe(function (args) {
            if (args.type === "MCQ_CHOICE_MATRIX") {
                _this.viewModel.QuestionType = args.type;
            }
        });
    }
    MCQChoiceMatrixComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editorQuestionConfig = this.pluginService.getCKEditorQuestionConfig();
        this.editorChoiceConfig = this.pluginService.getCKEditorChoiceConfig();
        if (this.route.snapshot.data.question)
            Promise.resolve().then(function () {
                _this.viewModel = _this.route.snapshot.data.question;
            });
    };
    MCQChoiceMatrixComponent.prototype.ngAfterViewChecked = function () {
        if (this.viewModel) {
            this.questionService.generateQuestionResource(this.viewModel);
        }
        this.changedetector.detectChanges();
    };
    MCQChoiceMatrixComponent.prototype.deleteChoice = function (choiceId) {
        if (this.viewModel.Answers.length > 0) {
            this.pluginService.alertMessage("You can't delete it, choice is already related to answer", "error");
        }
        else {
            var index = this.viewModel.Choices.findIndex(function (item) { return item.ChoiceId === choiceId; });
            this.viewModel.Choices.splice(index, 1);
        }
    };
    MCQChoiceMatrixComponent.prototype.addChoice = function () {
        this.viewModel.Choices = this.viewModel.Choices.concat([new Choice(new Date().getUTCMilliseconds(), "")]);
    };
    MCQChoiceMatrixComponent.prototype.addOption = function () {
        this.viewModel.Options = this.viewModel.Options.concat([new Option(new Date().getUTCMilliseconds(), "")]);
    };
    MCQChoiceMatrixComponent.prototype.deleteOption = function (optionId) {
        if (this.viewModel.Answers.length > 0) {
            this.pluginService.alertMessage("You can't delete it, option is already related to answer", "error");
        }
        else {
            var index = this.viewModel.Options.findIndex(function (item) { return item.OptionId === optionId; });
            this.viewModel.Options.splice(index, 1);
        }
    };
    MCQChoiceMatrixComponent.prototype.markAsAnswer = function (choice, option) {
        var _this = this;
        var index;
        if (this.viewModel.Answers.length === 0) {
            this.viewModel.Answers = [];
        }
        this.viewModel.Answers.push({
            ChoiceId: choice.ChoiceId,
            OptionId: option.OptionId
        });
        if (this.viewModel.Answers.length > 0) {
            var _loop_1 = function (i) {
                for (var j = i + 1; j < this_1.viewModel.Answers.length; j++) {
                    if (this_1.viewModel.Answers[i].ChoiceId === this_1.viewModel.Answers[j].ChoiceId) {
                        index = this_1.viewModel.Answers.findIndex(function (item) { return item.ChoiceId === _this.viewModel.Answers[i].ChoiceId; });
                        this_1.viewModel.Answers.splice(index, 1);
                    }
                }
            };
            var this_1 = this;
            for (var i = 0; i < this.viewModel.Answers.length; i++) {
                _loop_1(i);
            }
        }
        this.viewModel.TotalMarks = this.viewModel.Answers.length;
        this.showChoiceMatrixAnswers();
    };
    MCQChoiceMatrixComponent.prototype.showChoiceMatrixAnswers = function () {
        var answers = [], matrixChoices = [], matrixOptions = [];
        this.answers = [];
        answers = this.viewModel.Answers;
        matrixChoices = this.viewModel.Choices;
        matrixOptions = this.viewModel.Options;
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
    };
    MCQChoiceMatrixComponent.prototype.ngOnDestroy = function () {
        this.viewModel.Question = "";
        this.viewModel.Choices = [];
        this.viewModel.Options = [];
        this.viewModel.QuestionType = "";
        this.viewModel.Answers = [];
    };
    MCQChoiceMatrixComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./mcq-choicematrix.component.html */ "./src/app/question-builder/mcq-choicematrix/mcq-choicematrix.component.html"),
            styles: [__webpack_require__(/*! ./mcq-choicematrix.component.scss */ "./src/app/question-builder/mcq-choicematrix/mcq-choicematrix.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _question_builder_service__WEBPACK_IMPORTED_MODULE_3__["QuestionBuilderService"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], MCQChoiceMatrixComponent);
    return MCQChoiceMatrixComponent;
}());



/***/ }),

/***/ "./src/app/question-builder/mcq-choicematrix/update-answers.directive.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/question-builder/mcq-choicematrix/update-answers.directive.ts ***!
  \*******************************************************************************/
/*! exports provided: UpdateAnswersDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAnswersDirective", function() { return UpdateAnswersDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UpdateAnswersDirective = /** @class */ (function () {
    function UpdateAnswersDirective(elementRef) {
        this.elementRef = elementRef;
        this.answers = [];
    }
    UpdateAnswersDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.elementRef.nativeElement.removeAttribute("checked");
        if (changes["answers"]) {
            var answer = this.answers.findIndex(function (item) {
                return item.ChoiceId === _this.choiceid;
            });
            if (answer > -1 && this.answers[answer].OptionId === this.optionid) {
                this.elementRef.nativeElement.setAttribute("checked", "checked");
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('choicematrix'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], UpdateAnswersDirective.prototype, "answers", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('choiceid'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UpdateAnswersDirective.prototype, "choiceid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('optionid'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UpdateAnswersDirective.prototype, "optionid", void 0);
    UpdateAnswersDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "[choicematrix]"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], UpdateAnswersDirective);
    return UpdateAnswersDirective;
}());



/***/ }),

/***/ "./src/app/question-builder/mcq-standard/index.ts":
/*!********************************************************!*\
  !*** ./src/app/question-builder/mcq-standard/index.ts ***!
  \********************************************************/
/*! exports provided: MCQStandardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mcq_standard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mcq-standard.component */ "./src/app/question-builder/mcq-standard/mcq-standard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MCQStandardComponent", function() { return _mcq_standard_component__WEBPACK_IMPORTED_MODULE_0__["MCQStandardComponent"]; });




/***/ }),

/***/ "./src/app/question-builder/mcq-standard/mcq-standard.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/question-builder/mcq-standard/mcq-standard.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 d-block my-2\" *ngIf=\"viewModel\">\n    <div class=\"row my-2\">\n        <div class=\"col-xxl-12 d-flex justify-content-between align-items-center\">\n            <div class=\"\" *ngIf=\"viewModel.QuestionType === 'MCQ_SINGLE'\">\n                <p class=\"font-16\">Compose question - MCQ single answer</p>\n            </div>\n            <div class=\"\" *ngIf=\"viewModel.QuestionType === 'MCQ_MULTIPLE'\">\n                <p class=\"font-16\">Compose question - MCQ multiple answers</p>\n            </div>\n            <div class=\"\" *ngIf=\"viewModel.QuestionType === 'MCQ_TRUE_FALSE'\">\n                <p class=\"font-16\">Compose question - MCQ true or false</p>\n            </div>\n            <a target=\"_blank\" class=\"btn btn-info\" routerLink=\"./topic-question-sample\">\n                <i class=\"fa fa-question-circle mr-2\"></i>View sample questions\n            </a>\n        </div>\n    </div>\n    <div class=\"row mb-3\">\n        <div class=\"col-xxl-12\">\n            <ckeditor class=\"w-100\" [config]=\"editorQuestionConfig\" [(ngModel)]=\"viewModel.Question\"\n                #questionInput=\"ngModel\" placeholder=\"Enter question (min length: 3 and max length: 4000)\"\n                [required]=\"true\">\n            </ckeditor>\n        </div>\n        <span class=\"text-danger font-15 my-2 mx-3\" *ngIf=\"!questionInput.valid\">\n            Question is required\n        </span>\n    </div>\n    <div class=\"mb-3\">\n        <p class=\"font-16\">Choices</p>\n    </div>\n    <div class=\"w-100 mb-2 my-2 d-flex\" *ngFor=\"let choice of viewModel.Choices\">\n        <div class=\"mcq-choice d-flex align-items-center\"\n            [ngClass]=\"{'radio': choiceType === 'radio','checkbox': choiceType === 'checkbox'}\">\n            <input type=\"{{choiceType}}\" [id]=\"choice.ChoiceId\" name=\"answer\" [answers]=\"viewModel.Answers\"\n                [choiceid]=\"choice.ChoiceId\" (click)=\"markAsAnswer(choice.ChoiceId)\">\n            <label for=\"{{choice.ChoiceId}}\"></label>\n        </div>\n        <div class=\"mcq-question\">\n            <ckeditor class=\"w-100\" [config]=\"editorChoiceConfig\" [(ngModel)]=\"choice.ChoiceText\" #choiceInput=\"ngModel\"\n                placeholder=\"Enter choice (min length: 1 and max length: 4000)\" [required]=\"true\">\n            </ckeditor>\n            <span class=\"text-danger font-15 my-2\" *ngIf=\"!choiceInput.valid\">\n                Choice is required\n            </span>\n        </div>\n        <div class=\"mcq-action font-22 d-flex align-items-center text-danger d-flex justify-content-end delete-icon\">\n            <i class=\"fa fa-trash\" (click)=\"deleteChoice(choice.ChoiceId)\"></i>\n        </div>\n    </div>\n    <div class=\"w-100 d-flex justify-content-end align-self-start my-2\">\n        <div class=\"btn btn-info\" *ngIf=\"viewModel.QuestionType !== 'MCQ_TRUE_FALSE'\" (click)=\"addChoice()\">\n            <i class=\"fa fa-plus-circle mr-2\"></i> Add Choice</div>\n    </div>\n    <div class=\"mb-3 font-18\">\n        <div class=\"border-success p-3 alert-success\">\n            <span class=\"text-success\">Answer&nbsp;:&nbsp;</span>\n            <span *ngIf=\"answers.length > 0\">\n                <span class=\"text-dark\" *ngFor=\"let answer of answers;let checkIndex =index\">\n                    <span [MathJax]=\"answer | sanitizeHtml\"></span>\n                    {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\n            </span>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/question-builder/mcq-standard/mcq-standard.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/question-builder/mcq-standard/mcq-standard.component.ts ***!
  \*************************************************************************/
/*! exports provided: MCQStandardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MCQStandardComponent", function() { return MCQStandardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mcq_standard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mcq-standard.service */ "./src/app/question-builder/mcq-standard/mcq-standard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _question_builder_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../question-builder.service */ "./src/app/question-builder/question-builder.service.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/file-management/file-management.service */ "./src/app/shared/file-management/file-management.service.ts");







var MCQStandardComponent = /** @class */ (function () {
    function MCQStandardComponent(mcqService, route, questionService, changedetector, pluginService, fileService) {
        var _this = this;
        this.mcqService = mcqService;
        this.route = route;
        this.questionService = questionService;
        this.changedetector = changedetector;
        this.pluginService = pluginService;
        this.fileService = fileService;
        this.choiceType = "";
        this.answers = [];
        this.editorQuestionConfig = this.pluginService.getCKEditorQuestionConfig();
        this.editorChoiceConfig = this.pluginService.getCKEditorChoiceConfig();
        this.viewModel = mcqService.getQuestion();
        this.route.data.subscribe(function (args) {
            if (args.type === "MCQ_SINGLE") {
                _this.choiceType = "radio";
                _this.viewModel.QuestionType = args.type;
            }
            if (args.type === "MCQ_MULTIPLE") {
                _this.choiceType = "checkbox";
                _this.viewModel.QuestionType = args.type;
            }
            if (args.type === "MCQ_TRUE_FALSE") {
                _this.choiceType = "radio";
                _this.viewModel.Choices = [new _mcq_standard_service__WEBPACK_IMPORTED_MODULE_2__["Choice"](new Date().getUTCMilliseconds() + 1, "True"), new _mcq_standard_service__WEBPACK_IMPORTED_MODULE_2__["Choice"](new Date().getUTCMilliseconds(), "False")];
                _this.viewModel.QuestionType = args.type;
            }
        });
    }
    MCQStandardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.data.question)
            Promise.resolve().then(function () {
                _this.viewModel = _this.mcqService.load(_this.route.snapshot.data.question);
            });
    };
    MCQStandardComponent.prototype.ngAfterViewChecked = function () {
        if (this.viewModel) {
            this.questionService.generateQuestionResource(this.viewModel);
            this.showMCQAnswers();
        }
        this.changedetector.detectChanges();
    };
    MCQStandardComponent.prototype.updateQuestionDetails = function () {
        this.questionService.generateQuestionResource(this.viewModel);
        this.showMCQAnswers();
    };
    MCQStandardComponent.prototype.showMCQAnswers = function () {
        var _this = this;
        this.answers = [];
        var _loop_1 = function (j) {
            var answerText = this_1.viewModel.Choices.find(function (item) { return item.ChoiceId === _this.viewModel.Answers[j]; }).ChoiceText;
            this_1.answers.push(answerText);
            answerText = "";
        };
        var this_1 = this;
        for (var j = 0; j < this.viewModel.Answers.length; j++) {
            _loop_1(j);
        }
    };
    MCQStandardComponent.prototype.addChoice = function () {
        this.mcqService.addChoice();
    };
    MCQStandardComponent.prototype.deleteChoice = function (choiceId) {
        this.mcqService.deleteChoice(choiceId);
    };
    MCQStandardComponent.prototype.markAsAnswer = function (choiceId) {
        this.mcqService.toggleAnswer(choiceId);
        this.viewModel.TotalMarks = this.viewModel.Answers.length;
    };
    MCQStandardComponent.prototype.ngOnDestroy = function () {
        this.viewModel.Question = "";
        this.viewModel.Choices = [];
        this.viewModel.QuestionType = "";
        this.viewModel.Answers = [];
    };
    MCQStandardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./mcq-standard.component.html */ "./src/app/question-builder/mcq-standard/mcq-standard.component.html"),
            providers: [_mcq_standard_service__WEBPACK_IMPORTED_MODULE_2__["MCQStandardService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mcq_standard_service__WEBPACK_IMPORTED_MODULE_2__["MCQStandardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _question_builder_service__WEBPACK_IMPORTED_MODULE_4__["QuestionBuilderService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"],
            _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_6__["FileManagementService"]])
    ], MCQStandardComponent);
    return MCQStandardComponent;
}());



/***/ }),

/***/ "./src/app/question-builder/mcq-standard/mcq-standard.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/question-builder/mcq-standard/mcq-standard.service.ts ***!
  \***********************************************************************/
/*! exports provided: MCQStandard, Choice, MCQStandardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MCQStandard", function() { return MCQStandard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Choice", function() { return Choice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MCQStandardService", function() { return MCQStandardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");



var MCQStandard = /** @class */ (function () {
    function MCQStandard() {
        this.Choices = [];
        this.Answers = [];
    }
    return MCQStandard;
}());

var Choice = /** @class */ (function () {
    /**
     *
     */
    function Choice(ChoiceId, ChoiceText) {
        this.ChoiceId = ChoiceId;
        this.ChoiceText = ChoiceText;
    }
    return Choice;
}());

var MCQStandardService = /** @class */ (function () {
    function MCQStandardService(pluginService) {
        this.pluginService = pluginService;
        this._question = new MCQStandard();
    }
    MCQStandardService.prototype.addChoice = function () {
        this._question.Choices.push(new Choice(new Date().getUTCMilliseconds(), ""));
    };
    MCQStandardService.prototype.getQuestion = function () {
        return this._question;
    };
    MCQStandardService.prototype.deleteChoice = function (choiceId) {
        if (this._question.Answers.length > 0) {
            for (var i = 0; i < this._question.Answers.length; i++) {
                if (this._question.Answers[i] !== choiceId) {
                    var index = this._question.Choices.findIndex(function (item) { return item.ChoiceId === choiceId; });
                    this._question.Choices.splice(index, 1);
                }
                else {
                    this.pluginService.alertMessage("You can't delete it, choice is already related to answer", "error");
                }
            }
        }
        else {
            var index = this._question.Choices.findIndex(function (item) { return item.ChoiceId === choiceId; });
            this._question.Choices.splice(index, 1);
        }
    };
    MCQStandardService.prototype.toggleAnswer = function (choiceId) {
        var index = this._question.Answers.indexOf(choiceId);
        if (this._question.QuestionType !== "MCQ_MULTIPLE") {
            this._question.Answers = [];
        }
        if (index === -1) {
            this._question.Answers = this._question.Answers.concat([choiceId]);
        }
        else {
            this._question.Answers = this._question.Answers.filter(function (item) { return item !== choiceId; });
        }
    };
    MCQStandardService.prototype.load = function (question) {
        this._question = question;
        return this._question;
    };
    MCQStandardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_2__["PluginService"]])
    ], MCQStandardService);
    return MCQStandardService;
}());



/***/ }),

/***/ "./src/app/question-builder/mcq-standard/update-answers.directive.ts":
/*!***************************************************************************!*\
  !*** ./src/app/question-builder/mcq-standard/update-answers.directive.ts ***!
  \***************************************************************************/
/*! exports provided: AnswersDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswersDirective", function() { return AnswersDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnswersDirective = /** @class */ (function () {
    function AnswersDirective(elementRef) {
        this.elementRef = elementRef;
    }
    AnswersDirective.prototype.ngOnChanges = function (changes) {
        this.elementRef.nativeElement.removeAttribute("checked");
        if (changes["answers"]) {
            if (this.answers.indexOf(this.choiceid) > -1) {
                this.elementRef.nativeElement.setAttribute('checked', 'checked');
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('answers'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], AnswersDirective.prototype, "answers", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('choiceid'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AnswersDirective.prototype, "choiceid", void 0);
    AnswersDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[answers]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AnswersDirective);
    return AnswersDirective;
}());



/***/ }),

/***/ "./src/app/question-builder/pick-question-type/pick-question-type.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/question-builder/pick-question-type/pick-question-type.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-between align-items-start flex-wrap\">\n    <div *ngFor=\"let type of questionTypes;let i=index;\">\n        <label for=\"{{type.id}}\">\n            <div class=\"d-flex p-2\" (click)=\"navigateToUrl(type.router)\">\n                <div class=\"radio\">\n                    <input type=\"radio\" id=\"{{type.id}}\" [checked]=\"type.checked\" name=\"mcq\">\n                    <label for=\"{{type.id}}\"></label>\n                </div>\n                <div>\n                    <div class=\"mcq-header\">\n                        <p class=\"text-white p-2\">\n                            {{type.name}}\n                        </p>\n                    </div>\n                    <div class=\"mcq-img p-2\">\n                        <img src=\"{{type.imgsrc}}\" alt=\"{{type.name}}\">\n                    </div>\n                </div>\n            </div>\n        </label>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/question-builder/pick-question-type/pick-question-type.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/question-builder/pick-question-type/pick-question-type.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PickQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickQuestionComponent", function() { return PickQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/common/common.service */ "./src/app/shared/common/common.service.ts");




var PickQuestionComponent = /** @class */ (function () {
    function PickQuestionComponent(router, route, commonService) {
        this.router = router;
        this.route = route;
        this.commonService = commonService;
        this.questionTypes = [];
    }
    PickQuestionComponent.prototype.ngOnInit = function () {
        this.getQuestionTypeDetails();
    };
    PickQuestionComponent.prototype.getQuestionTypeDetails = function () {
        var _this = this;
        this.commonService.getQuestionTypeList().subscribe(function (data) {
            _this.questionTypes = data;
            var currentRoute = _this.router.url;
            _this.setSelectedQuestionType(currentRoute);
        });
    };
    PickQuestionComponent.prototype.setSelectedQuestionType = function (currentRoute) {
        var splitUrl = [], lastItem;
        splitUrl = currentRoute.split("/");
        lastItem = "./" + splitUrl.pop();
        for (var i = 0; i < this.questionTypes.length; i++) {
            if (lastItem === this.questionTypes[i].router) {
                this.questionTypes.find(function (item) { return item.router === lastItem; }).checked = true;
            }
        }
    };
    PickQuestionComponent.prototype.navigateToUrl = function (url) {
        this.router.navigate([url], { relativeTo: this.route });
    };
    PickQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pick-question-type',
            template: __webpack_require__(/*! ./pick-question-type.component.html */ "./src/app/question-builder/pick-question-type/pick-question-type.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], PickQuestionComponent);
    return PickQuestionComponent;
}());



/***/ }),

/***/ "./src/app/question-builder/question-builder.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/question-builder/question-builder.module.ts ***!
  \*************************************************************/
/*! exports provided: QuestionBuilderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionBuilderModule", function() { return QuestionBuilderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mcq_standard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mcq-standard */ "./src/app/question-builder/mcq-standard/index.ts");
/* harmony import */ var _mcq_standard_update_answers_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mcq-standard/update-answers.directive */ "./src/app/question-builder/mcq-standard/update-answers.directive.ts");
/* harmony import */ var _mcq_choicematrix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mcq-choicematrix */ "./src/app/question-builder/mcq-choicematrix/index.ts");
/* harmony import */ var _matchlist_matchlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchlist/matchlist.component */ "./src/app/question-builder/matchlist/matchlist.component.ts");
/* harmony import */ var _cloze_question_preview_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cloze/question-preview.directive */ "./src/app/question-builder/cloze/question-preview.directive.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _question_builder_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./question-builder.service */ "./src/app/question-builder/question-builder.service.ts");
/* harmony import */ var _cloze_drag_n_drop_drag_n_drop_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cloze/drag-n-drop/drag-n-drop.component */ "./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.ts");
/* harmony import */ var _pick_question_type_pick_question_type_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pick-question-type/pick-question-type.component */ "./src/app/question-builder/pick-question-type/pick-question-type.component.ts");











var QuestionBuilderModule = /** @class */ (function () {
    function QuestionBuilderModule() {
    }
    QuestionBuilderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _mcq_standard__WEBPACK_IMPORTED_MODULE_2__["MCQStandardComponent"],
                _pick_question_type_pick_question_type_component__WEBPACK_IMPORTED_MODULE_10__["PickQuestionComponent"],
                _mcq_standard_update_answers_directive__WEBPACK_IMPORTED_MODULE_3__["AnswersDirective"],
                _mcq_choicematrix__WEBPACK_IMPORTED_MODULE_4__["MCQChoiceMatrixComponent"],
                _mcq_choicematrix__WEBPACK_IMPORTED_MODULE_4__["UpdateAnswersDirective"],
                _matchlist_matchlist_component__WEBPACK_IMPORTED_MODULE_5__["MatchlistComponent"],
                _cloze_drag_n_drop_drag_n_drop_component__WEBPACK_IMPORTED_MODULE_9__["DragAndDropComponent"],
                _cloze_question_preview_directive__WEBPACK_IMPORTED_MODULE_6__["QuestionPreviewDirective"]
            ],
            imports: [
                _shared__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            providers: [_question_builder_service__WEBPACK_IMPORTED_MODULE_8__["QuestionBuilderService"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            exports: [
                _mcq_standard__WEBPACK_IMPORTED_MODULE_2__["MCQStandardComponent"],
                _pick_question_type_pick_question_type_component__WEBPACK_IMPORTED_MODULE_10__["PickQuestionComponent"],
                _mcq_standard_update_answers_directive__WEBPACK_IMPORTED_MODULE_3__["AnswersDirective"],
                _mcq_choicematrix__WEBPACK_IMPORTED_MODULE_4__["MCQChoiceMatrixComponent"],
                _mcq_choicematrix__WEBPACK_IMPORTED_MODULE_4__["UpdateAnswersDirective"],
                _matchlist_matchlist_component__WEBPACK_IMPORTED_MODULE_5__["MatchlistComponent"],
                _cloze_drag_n_drop_drag_n_drop_component__WEBPACK_IMPORTED_MODULE_9__["DragAndDropComponent"],
                _cloze_question_preview_directive__WEBPACK_IMPORTED_MODULE_6__["QuestionPreviewDirective"]
            ]
        })
    ], QuestionBuilderModule);
    return QuestionBuilderModule;
}());



/***/ }),

/***/ "./src/app/question-builder/question-builder.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/question-builder/question-builder.service.ts ***!
  \**************************************************************/
/*! exports provided: QuestionBuilderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionBuilderService", function() { return QuestionBuilderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuestionBuilderService = /** @class */ (function () {
    function QuestionBuilderService() {
    }
    //mcq-single, mcq-multiple, mcq-true or false, mcq-choice matrix and matchlist
    QuestionBuilderService.prototype.generateQuestionResource = function (jsonObj) {
        var jsonData = JSON.stringify(jsonObj);
        this.questionDetails = jsonObj;
        this.saveQuestionResource(jsonData);
    };
    //mcq-single, mcq-multiple, mcq-true or false,mcq-choice matrix and matchlist
    QuestionBuilderService.prototype.saveQuestionResource = function (jsonData) {
        this.questionResource = this.convertJsonToString(jsonData);
    };
    Object.defineProperty(QuestionBuilderService.prototype, "getQuestionResource", {
        get: function () {
            return this.questionDetails;
        },
        enumerable: true,
        configurable: true
    });
    //JSON to String conversion
    QuestionBuilderService.prototype.convertJsonToString = function (jsonData) {
        var jsonString;
        jsonString = jsonData.replace(/"/g, '\\"');
        return jsonString;
    };
    //String to JSON conversion
    QuestionBuilderService.prototype.convertStringToJson = function (stringData) {
        var stringJson, parseJsonString;
        stringJson = stringData.replace(/\\"/g, '\"');
        parseJsonString = JSON.parse(stringJson);
        return parseJsonString;
    };
    QuestionBuilderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], QuestionBuilderService);
    return QuestionBuilderService;
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



/***/ }),

/***/ "./src/app/syllabus-lesson-topic/addl-resource/addl-resource-manage.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/addl-resource/addl-resource-manage.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 filterbg my-4 rounded\">\n    <div class=\"filtericon font-20\">\n        <i class=\"fa fa-filter\"></i>\n    </div>\n    <div class=\"row d-flex justify-content-start align-items-center\">\n        <div class=\"col-lg-3 mb-3\" id=\"curriculumDropdown\">\n            <ng-select [items]=\"curriculumList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"acronym\"\n                placeholder=\"Select curriculum\" [(ngModel)]=\"selectedCurriculum\" (change)=\"onCurriculumChange()\">\n            </ng-select>\n        </div>\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedCurriculum\">\n            <ng-select [items]=\"gradeList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedGrade\" (change)=\"onGradeChange()\">\n            </ng-select>\n        </div>\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedGrade\">\n            <ng-select [items]=\"subjectList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"subject\"\n                placeholder=\"Select subject\" [(ngModel)]=\"selectedSubject\">\n            </ng-select>\n        </div>\n    </div>\n    <div class=\"d-flex justify-content-end pb-3 row\">\n        <div class=\"col-lg-2\">\n            <button class=\"btn btn-success float-right waves-effect waves-light\" (click)=\"loadSubjectTree()\">\n                <i class=\"fa fa-filter mr-1\"></i>Apply\n            </button>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-xxl-3 mb-3 py-3\">\n        <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"subjectTree.length > 1\">\n            <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\n                <i class=\"fa fa-clone mr-2\"></i>\n                <span *ngIf=\"enableExpandNode === false\">\n                    Expand all\n                </span>\n                <span *ngIf=\"enableExpandNode === true\">\n                    Collapse all\n                </span>\n            </div>\n        </div>\n        <div id=\"treeView\"></div>\n    </div>\n    <div class=\"col-xxl-9 mb-2 py-2\">\n        <div *ngIf=\"nodeType === 'root'\">\n            <p><b>Subject name</b></p>\n            <p>{{nodeName}}</p>\n            <p><b>Subject description</b></p>\n            <p>{{nodeDescription}}</p>\n        </div>\n\n        <div *ngIf=\"nodeType === 'unit'\">\n            <p><b>Unit name</b></p>\n            <p>{{nodeName}}</p>\n            <p><b>Unit description</b></p>\n            <p>{{nodeDescription}}</p>\n        </div>\n\n        <div *ngIf=\"nodeType === 'lesson'\">\n            <div class=\"d-flex w-100 justify-content-between mb-2 flex-wrap\">\n                <div class=\"filterbg p-3 mb-2 w-100\">\n                    <p class=\"font-20\">Content preference for {{nodeName}}</p>\n                    <div class=\"row m-0 mb-2\">\n                        <div class=\"col-md-6 radio px-0\">\n                            <input type=\"radio\" id=\"ContentCE\" name=\"content\" [checked]=\"checkContentCE\"\n                                (change)=\"checkContentPreference($event)\">\n                            <label for=\"ContentCE\">Recommended by CE</label>\n                        </div>\n                        <div class=\"col-md-6 radio px-0\">\n                            <input type=\"radio\" id=\"OwnContent\" name=\"content\" [checked]=\"checkOwnContent\"\n                                (change)=\"checkContentPreference($event)\">\n                            <label for=\"OwnContent\">Use\n                                our own resource</label>\n                        </div>\n                    </div>\n                    <div class=\"row m-0\">\n                        <div class=\"w-100 d-flex justify-content-end\">\n                            <div class=\"btn btn-success\" (click)=\"saveContentPreference()\">\n                                <i class=\"fa fa-save mr-2\"></i>Save\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"tab w-100\">\n                    <ul class=\"nav nav-tabs\" role=\"tablist\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link show active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\"\n                                aria-controls=\"home\" aria-selected=\"false\">Recommended\n                                by CE </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link show\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\"\n                                aria-controls=\"profile\" aria-selected=\"true\">Recommended by organizations</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link show\" id=\"portfolio-tab\" data-toggle=\"tab\" href=\"#portfolio\" role=\"tab\"\n                                aria-controls=\"portfolio\" aria-selected=\"false\"> Own\n                                additional lesson resources </a>\n                        </li>\n                    </ul>\n                    <div class=\"tab-content\">\n                        <div class=\"tab-pane fade py-3 active show\" id=\"home\" role=\"tabpanel\"\n                            aria-labelledby=\"home-tab\">\n                            <div class=\"row mb-2\">\n                                <div class=\"col-md-12 d-flex justify-content-end\">\n                                    <div class=\"btn btn-primary\" (click)=\"addAddlessonResources()\">\n                                        <i class=\"fa fa-plus-circle mr-2\"></i> Add new\n                                        resources\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"addlResource\">\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\"\n                                    id=\"dragTable\">\n                                    <thead>\n                                        <tr>\n                                            <th>Select</th>\n                                            <th>Order number</th>\n                                            <th>Title</th>\n                                            <th>Resource category</th>\n                                            <th>Content type</th>\n                                            <th>Actions</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody id=\"dragBody\">\n                                        <tr\n                                            *ngFor=\"let resource of addlResource;trackBy: trackId;let topicIndex = index\">\n                                            <td data-column=\"Select\" data-column=\"Select\" id=\"{{resource.id}}\">\n                                                <div class=\"checkbox\">\n                                                    <input type=\"checkbox\" title=\"{{resource.id}}\" id=\"{{resource.id}}2\"\n                                                        (change)=\"checkSelectedContents($event)\" class=\"checkAll\">\n                                                    <label for=\"{{resource.id}}2\"></label>\n                                                </div>\n                                            </td>\n                                            <td data-column=\"Order number\" class=\"index\">\n                                                {{resource.orderNumber}}\n                                            </td>\n                                            <td data-column=\"Title\">\n                                                {{resource.content.title}}\n                                            </td>\n                                            <td data-column=\"Resource category\">\n                                                {{resource.content.tag}}\n                                            </td>\n                                            <td data-column=\"Content type\">\n                                                {{resource.content.contentType}}\n                                            </td>\n                                            <td data-column=\"Actions\">\n                                                <div>\n                                                    <a class=\"btn btn-outline-info mr-1 mb-1 btn-icon-size\"\n                                                        (click)=\"viewAddlResource(resource.id)\">\n                                                        <i class=\"fa fa-eye\"></i>\n                                                    </a>\n                                                    <a class=\"btn btn-outline-success mr-1 mb-1 btn-icon-size\"\n                                                        (click)=\"editAddlResource(resource.id)\">\n                                                        <i class=\"fa fa-edit\"></i>\n                                                    </a>\n                                                </div>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                                <div class=\"mt-3 d-flex w-100 justify-content-end\" *ngIf=\"addlResource.length > 0\">\n                                    <button class=\"btn btn-danger mr-2\" [disabled]=\"tableGenAction\"\n                                        (click)=\"resetSelectedAddlResource()\">\n                                        <i class=\"fa fa-times mr-2\"></i>Reset\n                                    </button>\n                                    <button class=\"btn btn-danger mr-2\" [disabled]=\"tableGenAction\"\n                                        (click)=\"deleteAddlResource()\">\n                                        <i class=\"fa fa-trash mr-2\"></i>Delete\n                                    </button>\n                                    <button class=\"btn btn-success\" [disabled]=\"updateGenAction\"\n                                        (click)=\"updateAddlResourceWithOrderNumber()\">\n                                        <i class=\"fa fa-save mr-2\"></i>Update order\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"tab-pane fade py-3\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n                            <div class=\"col-12 filterbg py-2 px-4 rounded my-4\">\n                                <div class=\"filtericon font-20\">\n                                    <i class=\"fa fa-filter\"></i>\n                                </div>\n                                <div class=\"row col-xxl-4 mb-3\">\n                                    <ng-select [items]=\"organisations\" [ngModelOptions]=\"{standalone: true}\"\n                                        bindLabel=\"name\" placeholder=\"Select organisation\"\n                                        [(ngModel)]=\"selectedOrganisation\" class=\"w-100\">\n                                    </ng-select>\n                                </div>\n                                <div class=\"w-100 d-flex justify-content-end\">\n                                    <div class=\"btn btn-success\" (click)=\"getOrgGeneralAddlResourceByOrganisation()\">\n                                        <i class=\"fa fa-filter mr-2\"></i>Apply\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"orgGeneralAddlResource\">\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\n                                    <thead>\n                                        <tr>\n                                            <th>Order number</th>\n                                            <th>Title</th>\n                                            <th>Resource category</th>\n                                            <th>Content type</th>\n                                            <th>Actions</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let resource of orgGeneralAddlResource;trackBy: trackId;\">\n                                            <td data-column=\"Order number\">\n                                                {{resource.orderNumber}}\n                                            </td>\n                                            <td data-column=\"Title\">\n                                                {{resource.content.title}}\n                                            </td>\n                                            <td data-column=\"Resource category\">\n                                                {{resource.content.tag}}\n                                            </td>\n                                            <td data-column=\"Content type\">\n                                                {{resource.content.contentType}}\n                                            </td>\n                                            <td data-column=\"Actions\">\n                                                <a class=\"btn btn-outline-info mr-1 mb-1 btn-icon-size\"\n                                                    (click)=\"viewOrgAddlResource(resource.id)\">\n                                                    <i class=\"fa fa-eye\"></i>\n                                                </a>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                        <div class=\"tab-pane fade py-3\" id=\"portfolio\" role=\"tabpanel\" aria-labelledby=\"portfolio-tab\">\n                            <div class=\"row mb-2\">\n                                <div class=\"col-md-12 d-flex justify-content-end\">\n                                    <div class=\"btn btn-primary\" (click)=\"addOwnAddlResources()\">\n                                        <i class=\"fa fa-plus-circle mr-2\"></i> Add new\n                                        resources\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"ownAddlResource\">\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\"\n                                    id=\"ownContentDragTable\">\n                                    <thead>\n                                        <tr>\n                                            <th>Select</th>\n                                            <th>Order number</th>\n                                            <th>Title</th>\n                                            <th>Resource category</th>\n                                            <th>Content type</th>\n                                            <th>Actions</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody id=\"ownContentDragBody\">\n                                        <tr *ngFor=\"let resource of ownAddlResource;trackBy: trackId;\">\n                                            <td data-column=\"Select\" data-column=\"Select\" id=\"{{resource.id}}\">\n                                                <div class=\"checkbox\">\n                                                    <input type=\"checkbox\" title=\"{{resource.id}}\" id=\"{{resource.id}}1\"\n                                                        (change)=\"checkSelectedOwnContents($event)\"\n                                                        class=\"checkAllOwnContents\">\n                                                    <label for=\"{{resource.id}}1\"></label>\n                                                </div>\n                                            </td>\n                                            <td data-column=\"Order number\" class=\"index\">\n                                                {{resource.orderNumber}}\n                                            </td>\n                                            <td data-column=\"Title\">\n                                                {{resource.content.title}}\n                                            </td>\n                                            <td data-column=\"Resource category\">\n                                                {{resource.content.tag}}\n                                            </td>\n                                            <td data-column=\"Content type\">\n                                                {{resource.content.contentType}}\n                                            </td>\n                                            <td data-column=\"Actions\">\n                                                <div>\n                                                    <a class=\"btn btn-outline-info mr-1 mb-1 btn-icon-size\"\n                                                        (click)=\"viewOwnAddlResource(resource.id)\">\n                                                        <i class=\"fa fa-eye\"></i>\n                                                    </a>\n                                                    <a class=\"btn btn-outline-success  mr-1 mb-1 btn-icon-size\"\n                                                        (click)=\"editOwnAddlResource(resource.id)\">\n                                                        <i class=\"fa fa-edit\"></i>\n                                                    </a>\n                                                </div>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                                <div class=\"mt-3 d-flex w-100 justify-content-end\" *ngIf=\"ownAddlResource.length > 0\">\n                                    <button class=\"btn btn-danger mr-2\" [disabled]=\"tableAction\"\n                                        (click)=\"resetSelectedOwnAddlResource()\">\n                                        <i class=\"fa fa-times mr-2\"></i>Reset\n                                    </button>\n                                    <button class=\"btn btn-danger mr-2\" [disabled]=\"tableAction\"\n                                        (click)=\"deleteOwnAddlResource()\">\n                                        <i class=\"fa fa-trash mr-2\"></i>Delete\n                                    </button>\n                                    <button class=\"btn btn-success\" [disabled]=\"updateAction\"\n                                        (click)=\"updateOwnAddlResourceWithOrderNumber()\">\n                                        <i class=\"fa fa-save mr-2\"></i>Update order\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"additionalResourceModal\">\n    <div class=\"modal-dialog modal-full-height modal-right modal-notify\" [formGroup]=\"lessonResourceForm\"\n        role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\n                <h5 class=\"modal-title text-white\">\n                    {{modalTitleName}} content\n                </h5>\n                <div class=\"close btn btn-xl\" (click)=\"closeLessonResourceModalWithOutSaving()\">\n                    <i class=\"fa fa-times\"></i>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"form-group mb-2\">\n                    <label class=\"col-form-label\">Title\n                    </label>\n                    <input type=\"text\" placeholder=\"Enter content name (min length: 3 and max length: 75)\"\n                        class=\"form-control\" formControlName=\"contentTitle\" minlength=\"3\" maxlength=\"75\"\n                        inputRestriction=\"alphabetsNumbersWithMinus\" />\n                    <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\n                        Allowed characters - Alphabets, Numbers and One special character (-)\n                    </div>\n                </div>\n                <div class=\"form-group mb-2\">\n                    <label class=\"col-form-label\">Description <span class=\"text-muted\"\n                            *ngIf=\"modalTitleName !== 'View'\">(Optional)</span>\n                    </label>\n                    <textarea class=\"form-control description-form\"\n                        placeholder=\"Enter description (min length: 3 and max length: 250)\"\n                        formControlName=\"contentDescription\" minlength=\"3\" maxlength=\"250\"></textarea>\n                    <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\n                        Allowed characters - Alphabets, Numbers and Special characters\n                    </div>\n                </div>\n                <div class=\"form-group mb-2\">\n                    <label class=\"col-form-label\">Resource category\n                    </label>\n                    <ng-select [items]=\"resourceCategory\" [disabled]=\"disableDropdown\"\n                        [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\" placeholder=\"Select resource category\"\n                        [(ngModel)]=\"selectedCategory\" formControlName=\"resourceCategory\">\n                    </ng-select>\n                </div>\n                <div class=\"form-group mb-2\">\n                    <label class=\"col-form-label\">Content type\n                    </label>\n                    <ng-select [items]=\"contentType\" [disabled]=\"disableDropdown\" [ngModelOptions]=\"{standalone: true}\"\n                        bindLabel=\"name\" placeholder=\"Select content type\" [(ngModel)]=\"selectedContentType\"\n                        formControlName=\"contentType\" [searchable]=\"false\">\n                    </ng-select>\n                </div>\n                <div *ngIf=\"selectedContentType\">\n                    <div class=\"form-group mb-2\" *ngIf=\"selectedContentType.tag === 'VIDEO'\">\n                        <label class=\"col-form-label\">Web URL\n                        </label>\n                        <input type=\"url\" class=\"form-control\"\n                            placeholder=\"Enter web url(min length: 3 and max length: 2048)\" formControlName=\"webSource\"\n                            minlength=\"3\" maxlength=\"2048\">\n                        <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\n                            Allowed characters - Alphabets, Numbers and Special characters\n                        </div>\n                    </div>\n                    <div class=\"form-group mb-2\" *ngIf=\"selectedContentType.tag === 'DOCUMENT'\">\n                        <label class=\"col-form-label\">File\n                        </label>\n                        <div class=\"custom-file\" *ngIf=\"modalTitleName !== 'View'\">\n                            <input type=\"file\" (change)=\"onDocumentFileChanges($event)\" id=\"documentFile\" />\n                            <label class=\"custom-file-label\" for=\"documentFile\">\n                                <i>\n                                    {{fileName}}\n                                </i></label>\n                        </div>\n                        <div class=\" d-flex w-100\" *ngIf=\"modalTitleName !== 'View'\">\n                            <div class=\"text-muted font-15 my-2\">\n                                Only PDF will allow Max file size - 100 MB\n                            </div>\n                        </div>\n                        <div class=\"d-flex w-100 my-2\">\n                            <div *ngIf=\"modalTitleName !== 'View'\">\n                                <button class=\"btn btn-warning mr-2\" (click)=\"uploadDocumentFile()\"\n                                    *ngIf=\"!uploadedFileName && !uploadedFilePath\">\n                                    <i class=\"fa fa-upload mr-2\"></i>Upload file\n                                </button>\n                            </div>\n                            <div *ngIf=\"showFileAction\" class=\"d-flex justify-content-between\">\n                                <a class=\"btn btn-info mr-2\" (click)=\"downloadFile()\" *ngIf=\"uploadedFileName\">\n                                    <i class=\"fa fa-download mr-2\"></i>{{uploadedFileName}}\n                                </a>\n                                <div *ngIf=\"modalTitleName !=='View'\">\n                                    <a class=\" btn btn-danger\" (click)=\"deleteUploadedFile()\" *ngIf=\"uploadedFileName\">\n                                        <i class=\"fa fa-trash mr-2\"></i>Delete file\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <div *ngIf=\"modalTitleName === 'Add' || modalTitleName === 'Edit'\">\n                    <div class=\"btn btn-danger\" (click)=\"resetLessonResource()\">\n                        <i class=\"fa fa-times mr-2\"></i>\n                        Reset\n                    </div>\n                </div>\n\n                <div *ngIf=\"modalTitleName === 'Edit'\">\n                    <button class=\"btn btn-success\" (click)=\"updateAddlResource()\"\n                        [disabled]=\"lessonResourceForm.invalid\">\n                        <i class=\"fa fa-save mr-2\"></i>\n                        Save\n                    </button>\n                </div>\n\n                <div *ngIf=\"modalActionName === 'AddlResource'\">\n                    <div *ngIf=\"modalTitleName === 'Add'\">\n                        <button class=\"btn btn-success\" (click)=\"saveAddlResource()\"\n                            [disabled]=\"lessonResourceForm.invalid\">\n                            <i class=\"fa fa-save mr-2\"></i>\n                            Save\n                        </button>\n                    </div>\n                </div>\n\n                <div *ngIf=\"modalActionName === 'OwnAddlResource'\">\n                    <div *ngIf=\"modalTitleName === 'Add'\">\n                        <button class=\"btn btn-success\" (click)=\"saveOwnAddlResource()\"\n                            [disabled]=\"lessonResourceForm.invalid\">\n                            <i class=\"fa fa-save mr-2\"></i>\n                            Save\n                        </button>\n                    </div>\n                </div>\n\n                <div *ngIf=\"modalTitleName === 'View'\">\n                    <div class=\"btn btn-danger\" (click)=\"closeLessonResourceModal()\">\n                        <i class=\"fa fa-times mr-2\"></i>\n                        Close\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/syllabus-lesson-topic/addl-resource/addl-resource-manage.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/addl-resource/addl-resource-manage.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CurriculumAdditionalResourcesManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumAdditionalResourcesManageComponent", function() { return CurriculumAdditionalResourcesManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../syllabus-lesson-topic.service */ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/user-login-info/user-login-info.service */ "./src/app/shared/user-login-info/user-login-info.service.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _subject_subject_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../subject/subject.service */ "./src/app/subject/subject.service.ts");
/* harmony import */ var _organisation_organisation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../organisation/organisation.service */ "./src/app/organisation/organisation.service.ts");
/* harmony import */ var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../curriculum/curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/file-management/file-management.service */ "./src/app/shared/file-management/file-management.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_16__);

















var CurriculumAdditionalResourcesManageComponent = /** @class */ (function () {
    function CurriculumAdditionalResourcesManageComponent(_router, activatedRoute, addlResourceService, curriculumService, subjectService, organisationService, eventManager, parseLinks, principalService, pluginService, formBuilder, userLoginInfo, commonService, changeDetectorRef, fileService) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.addlResourceService = addlResourceService;
        this.curriculumService = curriculumService;
        this.subjectService = subjectService;
        this.organisationService = organisationService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.formBuilder = formBuilder;
        this.userLoginInfo = userLoginInfo;
        this.commonService = commonService;
        this.changeDetectorRef = changeDetectorRef;
        this.fileService = fileService;
        this.curriculumList = [];
        this.gradeList = [];
        this.subjectList = [];
        this.subjectTree = [];
        this.resourceCategory = [];
        this.contentType = [];
        this.resourceIds = [];
        this.ownLessonResourceIds = [];
        this.organisations = [];
        this.addlResource = [];
        this.ownAddlResource = [];
        this.orgGeneralAddlResource = [];
        this.selectedFile = null;
        this.enableExpandNode = false;
        this.checkContentCE = false;
        this.contentPreferenceStatus = false;
        this.validateForm = true;
        this.tableAction = true;
        this.updateAction = true;
        this.tableGenAction = true;
        this.updateGenAction = true;
    }
    CurriculumAdditionalResourcesManageComponent.prototype.ngOnInit = function () {
        this.loadCurriculums();
        this.createAdditionLessonResourceForm();
        this.getContentCategory();
        this.getContentType();
    };
    CurriculumAdditionalResourcesManageComponent.prototype.getContentCategory = function () {
        var _this = this;
        this.commonService.getContentCategoryList().subscribe(function (categoryData) {
            _this.resourceCategory = categoryData;
        });
    };
    CurriculumAdditionalResourcesManageComponent.prototype.getContentType = function () {
        var _this = this;
        this.commonService.getContentTypeList().subscribe(function (typeData) {
            _this.contentType = typeData;
        });
    };
    CurriculumAdditionalResourcesManageComponent.prototype.createAdditionLessonResourceForm = function () {
        this.lessonResourceForm = this.formBuilder.group({
            contentTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(75)]),
            contentDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(250)]),
            resourceCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            contentType: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            webSource: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null)
        });
    };
    CurriculumAdditionalResourcesManageComponent.prototype.loadCurriculums = function () {
        var _this = this;
        this.curriculumService.getCurriculumSearch().subscribe(function (res) { return _this.assignCurriculumList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    CurriculumAdditionalResourcesManageComponent.prototype.assignCurriculumList = function (data) {
        this.curriculumList = [];
        for (var i = 0; i < data.length; i++) {
            this.curriculumList.push(data[i]);
        }
    };
    CurriculumAdditionalResourcesManageComponent.prototype.onError = function (errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    };
    CurriculumAdditionalResourcesManageComponent.prototype.onDocumentFileChanges = function (event) {
        this.selectedFile = event.target.files;
        this.fileName = this.selectedFile[0].name;
        if ((this.selectedFile[0].type === "application/pdf") && (this.selectedFile[0].size > 104857600)) {
            this.pluginService.alertMessage("Please upload file size lesser than 100 MB", "error");
        }
    };
    CurriculumAdditionalResourcesManageComponent.prototype.uploadDocumentFile = function () {
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
                                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
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
    CurriculumAdditionalResourcesManageComponent.prototype.downloadFile = function () {
        if (this.uploadedFileName) {
            this.subscribeToDownloadResponse(this.fileService.downloadFiles(this.uploadedFileName));
        }
    };
    CurriculumAdditionalResourcesManageComponent.prototype.subscribeToDownloadResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onDownloadSuccess(res); }, function (errRes) { return _this.onDownloadError(errRes); });
    };
    CurriculumAdditionalResourcesManageComponent.prototype.onDownloadSuccess = function (resp) {
        if (resp.body) {
            var downloadFilePath = Object.values(resp.body)[0];
            Object(file_saver__WEBPACK_IMPORTED_MODULE_16__["saveAs"])(downloadFilePath);
        }
    };
    CurriculumAdditionalResourcesManageComponent.prototype.onDownloadError = function (error) {
        this.pluginService.alertMessage("Error in downloading file", "error");
    };
    CurriculumAdditionalResourcesManageComponent.prototype.checkContentType = function () {
        if (this.selectedContentType) {
            if (this.selectedContentType.tag === 'DOCUMENT') {
                if (this.uploadedFilePath) {
                    this.deleteUploadedFile();
                }
            }
        }
    };
    CurriculumAdditionalResourcesManageComponent.prototype.deleteUploadedFile = function () {
        this.subscribeToDeleteFiletResponse(this.fileService.deleteUploadedFile(this.uploadedFileName));
    };
    CurriculumAdditionalResourcesManageComponent.prototype.subscribeToDeleteFiletResponse = function (resp) {
        var _this = this;
        resp.subscribe(function (res) { return _this.onDeleteFileSuccess(res); }, function (res) { return _this.onDeleteError(res); });
    };
    CurriculumAdditionalResourcesManageComponent.prototype.onDeleteFileSuccess = function (resp) {
        this.fileName = "No file chosen";
        this.uploadedFileName = "";
        this.uploadedFilePath = "";
        this.pluginService.alertMessage("File deleted successfully", "success");
    };
    CurriculumAdditionalResourcesManageComponent.prototype.ngAfterViewInit = function () {
        this.showSyllabusDetails();
    };
    CurriculumAdditionalResourcesManageComponent.prototype.onCurriculumChange = function () {
        var gradesApplicableFrom, gradesApplicableTo;
        if (this.selectedCurriculum) {
            gradesApplicableFrom = this.selectedCurriculum.gradesApplicableFrom;
            gradesApplicableTo = this.selectedCurriculum.gradesApplicableTo;
            this.generateGradeList(gradesApplicableFrom, gradesApplicableTo);
        }
        this.selectedGrade = null;
        this.selectedSubject = null;
    };
    CurriculumAdditionalResourcesManageComponent.prototype.onGradeChange = function () {
        var _this = this;
        var curriculumId, gradeId, status;
        if (this.selectedGrade) {
            curriculumId = this.selectedCurriculum.id;
            gradeId = this.selectedGrade.id;
            status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_14__["ACTIVE"];
            this.subjectService
                .getSubjectByCurriculumIdAndGradeId(curriculumId, gradeId, status)
                .subscribe(function (res) { return _this.assignSubjectList(res.body); }, function (res) { return _this.onError(res.message); });
        }
        this.selectedSubject = null;
    };
    CurriculumAdditionalResourcesManageComponent.prototype.assignSubjectList = function (data) {
        this.subjectList = [];
        for (var i = 0; i < data.length; i++) {
            this.subjectList.push(data[i]);
        }
    };
    CurriculumAdditionalResourcesManageComponent.prototype.generateGradeList = function (min, max) {
        this.gradeList = [];
        for (var i = min; i <= max; i++) {
            this.gradeList.push({
                "id": i,
                "name": i
            });
        }
        return this.gradeList;
    };
    CurriculumAdditionalResourcesManageComponent.prototype.loadSubjectTree = function () {
        var _this = this;
        if (this.selectedSubject) {
            var subjectId = this.selectedSubject.id;
            if (subjectId) {
                this.subjectService.getSubjectTreeBySubjectId(subjectId).subscribe(function (res) { return _this.assignSubjectTree(res.body); }, function (res) { return _this.onError(res.message); });
            }
            else {
                this.pluginService.alertMessage("Please select a filter and then apply", "error");
            }
        }
    };
    CurriculumAdditionalResourcesManageComponent.prototype.assignSubjectTree = function (data) {
        this.subjectTree = data;
        this.pluginService.jsTree("#treeView", this.subjectTree, false);
        this.enableExpandNode = false;
    };
    CurriculumAdditionalResourcesManageComponent.prototype.trimValue = function (value) {
        if (value === null || value === undefined) {
            return value;
        }
        else {
            return value.trim();
        }
    };
    CurriculumAdditionalResourcesManageComponent.prototype.ngAfterViewChecked = function () {
        this.validateTopicContentForm();
        this.changeDetectorRef.detectChanges();
    };
    CurriculumAdditionalResourcesManageComponent.prototype.validateTopicContentForm = function () {
        var contentName, webURL;
        contentName = this.trimValue(this.lessonResourceForm.value.contentTitle);
        webURL = this.trimValue(this.lessonResourceForm.value.webSource);
        if (contentName === "" || contentName === undefined || contentName === null) {
            this.validateForm = true;
        }
        if (this.lessonResourceForm.valid) {
            this.validateForm = false;
        }
        if (this.lessonResourceForm.invalid) {
            this.validateForm = true;
        }
        if ((webURL === "" || webURL === undefined || webURL === null) || (this.uploadedFilePath === "" || this.uploadedFilePath === undefined || this.uploadedFilePath === null)) {
            this.validateForm = true;
        }
    };
    CurriculumAdditionalResourcesManageComponent.prototype.showSyllabusDetails = function () {
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
                else if (localThisObj.nodeType === "unit") {
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                }
                else if (localThisObj.nodeType === "lesson") {
                    localThisObj.lessonId = data.node.data.id;
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.objective;
                    localThisObj.addlResource = [];
                    localThisObj.orgGeneralAddlResource = [];
                    localThisObj.ownAddlResource = [];
                    localThisObj.getAddlResourceList(localThisObj.lessonId);
                    localThisObj.getOrgGeneralAddlResourceByOrganisationId(localThisObj.lessonId);
                    localThisObj.getOrganisationList();
                    localThisObj.getAddlResourcePreference(localThisObj.lessonId);
                    localThisObj.updateAction = true;
                    localThisObj.updateGenAction = true;
                    localThisObj.tableAction = true;
                    localThisObj.tableGenAction = true;
                }
                else {
                }
            }
        });
    };
    CurriculumAdditionalResourcesManageComponent.prototype.getAddlResourceList = function (lessonId) {
        var _this = this;
        this.addlResourceService.getAddlResource(lessonId).subscribe(function (res) { return _this.assignResponseToAddlResourceList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    CurriculumAdditionalResourcesManageComponent.prototype.assignResponseToAddlResourceList = function (data) {
        this.addlResource = data;
        this.sortArrayByOrderNumber(this.addlResource);
        this.dragTableContent();
    };
    CurriculumAdditionalResourcesManageComponent.prototype.getOrgGeneralAddlResourceByOrganisation = function () {
        var _this = this;
        var organisationId = this.selectedOrganisation.id;
        this.addlResourceService.getOrgGeneralAddlResourceByOrganisationId(this.lessonId, organisationId).subscribe(function (res) { return _this.assignResponseToOrgAddlResource(res.body); }, function (res) { return _this.onError(res.message); });
    };
    CurriculumAdditionalResourcesManageComponent.prototype.assignResponseToOrgAddlResource = function (data) {
        this.orgGeneralAddlResource = data;
        this.sortArrayByOrderNumber(this.orgGeneralAddlResource);
    };
    CurriculumAdditionalResourcesManageComponent.prototype.getOrgGeneralAddlResourceByOrganisationId = function (lessonId) {
        var _this = this;
        //User login info organisationId
        this.organisationId = this.userLoginInfo.organisationId;
        this.addlResourceService.getOrgGeneralAddlResourceByOrganisationId(lessonId, this.organisationId).subscribe(function (res) { return _this.assignResponseToOrgAddlResourceList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    CurriculumAdditionalResourcesManageComponent.prototype.assignResponseToOrgAddlResourceList = function (data) {
        this.orgGeneralAddlResource = data;
        this.ownAddlResource = data;
        this.sortArrayByOrderNumber(this.ownAddlResource);
        this.ownAddlResourceDragTableContent();
    };
    CurriculumAdditionalResourcesManageComponent.prototype.getOrganisationList = function () {
        var _this = this;
        this.organisationService.getOrganisations().subscribe(function (res) { return _this.assignOrgList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    CurriculumAdditionalResourcesManageComponent.prototype.assignOrgList = function (data) {
        this.organisations = data;
    };
    CurriculumAdditionalResourcesManageComponent.prototype.sortArrayByOrderNumber = function (array) {
        array.sort(function (a, b) { return (a.orderNumber > b.orderNumber) ? 1 : -1; });
    };
    CurriculumAdditionalResourcesManageComponent.prototype.getAddlResourcePreference = function (lessonId) {
        var _this = this;
        this.addlResourceService.getAddlResourcePreference(lessonId, this.organisationId).subscribe(function (res) { return _this.onGetPreferenceSuccess(res.body); }, function (res) { return _this.onError(res.message); });
    };
    CurriculumAdditionalResourcesManageComponent.prototype.onGetPreferenceSuccess = function (acitveStatus) {
        if (acitveStatus === "" || acitveStatus === null || acitveStatus === false) {
            this.checkContentCE = true;
            this.checkOwnContent = false;
        }
        else if (acitveStatus === true) {
            this.checkContentCE = false;
            this.checkOwnContent = true;
        }
    };
    CurriculumAdditionalResourcesManageComponent.prototype.checkContentPreference = function (event) {
        var check = event.target.checked;
        var name = event.target.id;
        if (check === true && name === "ContentCE") {
            this.contentPreferenceStatus = false;
        }
        else if (check === true && name === "OwnContent") {
            this.contentPreferenceStatus = true;
        }
    };
    CurriculumAdditionalResourcesManageComponent.prototype.saveContentPreference = function () {
        if (this.contentPreferenceStatus === false) {
            if (this.addlResource.length <= 0) {
                this.pluginService.alertMessage("Before set content preference atleast one general additional lesson resources is mandatory", "error");
            }
            else {
                this.setContentPreference();
            }
        }
        else if (this.contentPreferenceStatus === true) {
            if (this.ownAddlResource.length <= 0) {
                this.pluginService.alertMessage("Please add atleast one own additional lesson resources and do preference", "error");
            }
            else {
                this.setContentPreference();
            }
        }
    };
    CurriculumAdditionalResourcesManageComponent.prototype.setContentPreference = function () {
        var _this = this;
        this.addlResourceService.setAddlResourcePreference(this.contentPreferenceStatus, this.lessonId, this.organisationId).subscribe(function (res) { return _this.onSuccess(res.body); }, function (res) { return _this.onError(res.message); });
    };
    CurriculumAdditionalResourcesManageComponent.prototype.onSuccess = function (data) {
        this.pluginService.alertMessage("Content preference saved successfully", "success");
    };
    CurriculumAdditionalResourcesManageComponent.prototype.resetFormValues = function () {
        this.lessonResourceForm.reset();
        this.selectedCategory = null;
    };
    CurriculumAdditionalResourcesManageComponent.prototype.addAddlessonResources = function () {
        this.openLessonResourceModal();
        this.modalTitleName = "Add";
        this.modalActionName = "AddlResource";
        this.resetFormValues();
        this.enableFormFields();
    };
    CurriculumAdditionalResourcesManageComponent.prototype.addOwnAddlResources = function () {
        this.openLessonResourceModal();
        this.modalTitleName = "Add";
        this.modalActionName = "OwnAddlResource";
        this.resetFormValues();
        this.enableFormFields();
    };
    CurriculumAdditionalResourcesManageComponent.prototype.openLessonResourceModal = function () {
        this.pluginService.showModalWindow("#additionalResourceModal");
    };
    CurriculumAdditionalResourcesManageComponent.prototype.closeLessonResourceModal = function () {
        this.pluginService.hideModalWindow("#additionalResourceModal");
    };
    CurriculumAdditionalResourcesManageComponent.prototype.viewAddlResource = function (contentId) {
        var lessonResourcesDetails = [], lessonResourceDetail = {};
        lessonResourceDetail.content = {};
        lessonResourcesDetails = this.addlResource.filter(function (item) { return item.id === contentId; });
        lessonResourceDetail = lessonResourcesDetails[0];
        this.modalTitleName = "View";
        this.modalActionName = "AddlResource";
        this.patchContentFormfields(lessonResourceDetail);
        this.openLessonResourceModal();
    };
    CurriculumAdditionalResourcesManageComponent.prototype.editAddlResource = function (contentId) {
        var lessonResourcesDetails = [], lessonResourceDetail = {};
        lessonResourceDetail.content = {};
        lessonResourcesDetails = this.addlResource.filter(function (item) { return item.id === contentId; });
        lessonResourceDetail = lessonResourcesDetails[0];
        this.modalTitleName = "Edit";
        this.modalActionName = "AddlResource";
        this.patchContentFormfields(lessonResourceDetail);
        this.openLessonResourceModal();
    };
    CurriculumAdditionalResourcesManageComponent.prototype.viewOrgAddlResource = function (contentId) {
        var lessonResourcesDetails = [], lessonResourceDetail = {};
        lessonResourceDetail.content = {};
        lessonResourcesDetails = this.orgGeneralAddlResource.filter(function (item) { return item.id === contentId; });
        lessonResourceDetail = lessonResourcesDetails[0];
        this.modalTitleName = "View";
        this.modalActionName = "OrgAddlResource";
        this.patchContentFormfields(lessonResourceDetail);
        this.openLessonResourceModal();
    };
    CurriculumAdditionalResourcesManageComponent.prototype.editOwnAddlResource = function (contentId) {
        var lessonResourcesDetails = [], lessonResourceDetail = {};
        lessonResourceDetail.content = {};
        lessonResourcesDetails = this.ownAddlResource.filter(function (item) { return item.id === contentId; });
        lessonResourceDetail = lessonResourcesDetails[0];
        this.modalTitleName = "Edit";
        this.modalActionName = "OwnAddlResource";
        this.patchContentFormfields(lessonResourceDetail);
        this.openLessonResourceModal();
    };
    CurriculumAdditionalResourcesManageComponent.prototype.viewOwnAddlResource = function (contentId) {
        var lessonResourcesDetails = [], lessonResourceDetail = {};
        lessonResourceDetail.content = {};
        lessonResourcesDetails = this.ownAddlResource.filter(function (item) { return item.id === contentId; });
        lessonResourceDetail = lessonResourcesDetails[0];
        this.modalTitleName = "View";
        this.modalActionName = "OwnAddlResource";
        this.patchContentFormfields(lessonResourceDetail);
        this.openLessonResourceModal();
    };
    CurriculumAdditionalResourcesManageComponent.prototype.patchContentFormfields = function (lessonResourceDetail) {
        this.contentId = lessonResourceDetail.content.id;
        this.selectedCategory = this.resourceCategory.filter(function (item) { return item.tag === lessonResourceDetail.content.tag; })[0];
        this.selectedContentType = this.contentType.filter(function (item) { return item.tag === lessonResourceDetail.content.contentType; })[0];
        this.lessonResourceForm.patchValue({
            contentTitle: lessonResourceDetail.content.title,
            contentDescription: lessonResourceDetail.content.description
        });
        if (this.selectedContentType.tag === "DOCUMENT") {
            this.showFileAction = true;
            this.fileName = lessonResourceDetail.content.fileName;
            this.uploadedFileName = lessonResourceDetail.content.fileName;
            this.uploadedFilePath = lessonResourceDetail.content.filePath;
        }
        else if (this.selectedContentType.tag === "VIDEO") {
            this.lessonResourceForm.patchValue({
                webSource: lessonResourceDetail.content.webUrl
            });
        }
        if (this.modalTitleName === "View") {
            this.disableFormFields();
        }
        else if (this.modalTitleName === "Edit" || this.modalTitleName === "Add") {
            this.enableFormFields();
        }
    };
    CurriculumAdditionalResourcesManageComponent.prototype.disableFormFields = function () {
        this.lessonResourceForm.get('contentTitle').disable();
        this.lessonResourceForm.get('contentDescription').disable();
        this.lessonResourceForm.get('resourceCategory').disable();
        this.lessonResourceForm.get('contentType').disable();
        this.lessonResourceForm.get('webSource').disable();
        //this.disableDropdown = true;
    };
    CurriculumAdditionalResourcesManageComponent.prototype.enableFormFields = function () {
        this.lessonResourceForm.get('contentTitle').enable();
        this.lessonResourceForm.get('contentDescription').enable();
        this.lessonResourceForm.get('resourceCategory').enable();
        this.lessonResourceForm.get('contentType').enable();
        this.lessonResourceForm.get('webSource').enable();
        //this.disableDropdown = false;
    };
    CurriculumAdditionalResourcesManageComponent.prototype.saveAddlResource = function () {
        var _this = this;
        if (this.lessonResourceForm.valid) {
            var addlResources = [], addlResource = {};
            addlResource.content = {};
            addlResource.lessonId = this.lessonId;
            addlResource.orderNumber = this.addlResource.length + 1;
            addlResource.content.title = this.trimValue(this.lessonResourceForm.value.contentTitle);
            addlResource.content.description = this.trimValue(this.lessonResourceForm.value.contentDescription);
            addlResource.content.tag = this.selectedCategory.tag;
            addlResource.content.contentType = this.selectedContentType.tag;
            if (this.selectedContentType.tag === "VIDEO") {
                addlResource.content.contentSource = "WEB_URL";
                addlResource.content.webUrl = this.trimValue(this.lessonResourceForm.value.webSource);
            }
            else if (this.selectedContentType.tag === "DOCUMENT") {
                addlResource.content.contentSource = "FILE_UPLOAD";
                addlResource.content.fileName = this.uploadedFileName;
                addlResource.content.filePath = this.uploadedFilePath;
            }
            addlResources.push(addlResource);
            this.addlResourceService.saveAddlResource(addlResources).subscribe(function (res) { return _this.onSaveSuccess(res.body); }, function (res) { return _this.onSaveError(res.error); });
        }
        if (this.lessonResourceForm.invalid) {
            return;
        }
    };
    CurriculumAdditionalResourcesManageComponent.prototype.saveOwnAddlResource = function () {
        var _this = this;
        if (this.lessonResourceForm.valid) {
            var orgGeneralAddlResources = [], orgGeneralAddlResource = {};
            orgGeneralAddlResource.content = {};
            orgGeneralAddlResource.lessonId = this.lessonId;
            orgGeneralAddlResource.organisationId = this.userLoginInfo.organisationId;
            orgGeneralAddlResource.orderNumber = this.ownAddlResource.length + 1;
            orgGeneralAddlResource.content.title = this.trimValue(this.lessonResourceForm.value.contentTitle);
            orgGeneralAddlResource.content.description = this.trimValue(this.lessonResourceForm.value.contentDescription);
            orgGeneralAddlResource.content.tag = this.selectedCategory.tag;
            orgGeneralAddlResource.content.contentType = this.selectedContentType.tag;
            if (this.selectedContentType.tag === "VIDEO") {
                orgGeneralAddlResource.content.contentSource = "WEB_URL";
                orgGeneralAddlResource.content.webUrl = this.trimValue(this.lessonResourceForm.value.webSource);
            }
            else if (this.selectedContentType.tag === "DOCUMENT") {
                orgGeneralAddlResource.content.contentSource = "FILE_UPLOAD";
                orgGeneralAddlResource.content.fileName = this.uploadedFileName;
                orgGeneralAddlResource.content.filePath = this.uploadedFilePath;
            }
            orgGeneralAddlResources.push(orgGeneralAddlResource);
            this.addlResourceService.saveOwnAddlResource(orgGeneralAddlResources).subscribe(function (res) { return _this.onSaveSuccess(res.body); }, function (res) { return _this.onSaveError(res.error); });
        }
        if (this.lessonResourceForm.invalid) {
            return;
        }
    };
    CurriculumAdditionalResourcesManageComponent.prototype.onSaveSuccess = function (resp) {
        this.pluginService.alertMessage("Additional Lesson resource added successfully", "success");
        this.resetFormValues();
        this.closeLessonResourceModal();
        this.getAddlResourceList(this.lessonId);
        this.getOrgGeneralAddlResourceByOrganisationId(this.lessonId);
    };
    CurriculumAdditionalResourcesManageComponent.prototype.onSaveError = function (errRes) {
        this.pluginService.alertMessage("Could not save, please contact admin", "error");
    };
    CurriculumAdditionalResourcesManageComponent.prototype.updateAddlResource = function () {
        var contentResource = {};
        contentResource = {};
        contentResource.id = this.contentId;
        contentResource.title = this.trimValue(this.lessonResourceForm.value.contentTitle);
        contentResource.description = this.trimValue(this.lessonResourceForm.value.contentDescription);
        contentResource.tag = this.selectedCategory.tag;
        contentResource.contentType = this.selectedContentType.tag;
        if (this.selectedContentType.tag === "VIDEO") {
            contentResource.contentSource = "WEB_URL";
            contentResource.webUrl = this.trimValue(this.lessonResourceForm.value.webSource);
        }
        else if (this.selectedContentType.tag === "DOCUMENT") {
            contentResource.contentSource = "FILE_UPLOAD";
            contentResource.fileName = this.uploadedFileName;
            contentResource.filePath = this.uploadedFilePath;
        }
        this.subscribeToUpdateResponse(this.addlResourceService.updateContentSource(contentResource));
    };
    CurriculumAdditionalResourcesManageComponent.prototype.subscribeToUpdateResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onUpdateSuccess(res); }, function (errRes) { return _this.onUpdateError(errRes); });
    };
    CurriculumAdditionalResourcesManageComponent.prototype.onUpdateSuccess = function (res) {
        this.pluginService.alertMessage("Additional Lesson resource updated successfully", "success");
        this.resetFormValues();
        this.closeLessonResourceModal();
        this.getOrgGeneralAddlResourceByOrganisationId(this.lessonId);
    };
    CurriculumAdditionalResourcesManageComponent.prototype.onUpdateError = function (errRes) {
        this.pluginService.alertMessage("Could not save, please contact admin", "error");
    };
    CurriculumAdditionalResourcesManageComponent.prototype.checkSelectedContents = function (event) {
        var selectedId, checked, index;
        checked = event.target.checked;
        selectedId = Number(event.target.title);
        if (checked === true) {
            this.tableGenAction = false;
            this.resourceIds.push(selectedId);
        }
        else if (checked === false) {
            index = this.resourceIds.findIndex(function (item) { return item === selectedId; });
            this.resourceIds.splice(index, 1);
        }
        this.resourceIds = this.removeDuplicateElements(this.resourceIds);
        if (this.resourceIds.length <= 0) {
            this.tableGenAction = true;
        }
    };
    CurriculumAdditionalResourcesManageComponent.prototype.checkSelectedOwnContents = function (event) {
        var selectedId, checked, index;
        checked = event.target.checked;
        selectedId = Number(event.target.title);
        if (checked === true) {
            this.tableAction = false;
            this.ownLessonResourceIds.push(selectedId);
        }
        else if (checked === false) {
            index = this.ownLessonResourceIds.findIndex(function (item) { return item === selectedId; });
            this.ownLessonResourceIds.splice(index, 1);
        }
        this.ownLessonResourceIds = this.removeDuplicateElements(this.ownLessonResourceIds);
        if (this.ownLessonResourceIds.length <= 0) {
            this.tableAction = true;
        }
    };
    CurriculumAdditionalResourcesManageComponent.prototype.removeDuplicateElements = function (array) {
        var temp = [];
        for (var i = 0; i < array.length; i++) {
            if (temp.indexOf(array[i]) == -1) {
                temp.push(array[i]);
            }
        }
        return temp;
    };
    CurriculumAdditionalResourcesManageComponent.prototype.resetSelectedAddlResource = function () {
        this.resourceIds = [];
        this.tableGenAction = true;
        $(".checkAll").prop("checked", false);
    };
    CurriculumAdditionalResourcesManageComponent.prototype.resetSelectedOwnAddlResource = function () {
        this.ownLessonResourceIds = [];
        this.tableAction = true;
        $(".checkAllOwnContents").prop("checked", false);
    };
    CurriculumAdditionalResourcesManageComponent.prototype.deleteAddlResource = function () {
        var localthisObject = this;
        swal({
            title: "Are you sure to delete additional lesson resources ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm === true) {
                if (localthisObject.resourceIds.length > 0) {
                    localthisObject.subscribeToDeleteResponse(localthisObject.addlResourceService.deleteAddlResource(localthisObject.resourceIds));
                }
            }
        });
    };
    CurriculumAdditionalResourcesManageComponent.prototype.deleteOwnAddlResource = function () {
        var localthisObject = this;
        swal({
            title: "Are you sure to delete additional lesson resources ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm === true) {
                if (localthisObject.ownLessonResourceIds.length > 0) {
                    localthisObject.subscribeToDeleteResponse(localthisObject.addlResourceService.deleteOwnAddlResource(localthisObject.ownLessonResourceIds));
                }
            }
        });
    };
    CurriculumAdditionalResourcesManageComponent.prototype.subscribeToDeleteResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onDeleteSuccess(res); }, function (errRes) { return _this.onDeleteError(errRes); });
    };
    CurriculumAdditionalResourcesManageComponent.prototype.onDeleteSuccess = function (res) {
        this.pluginService.alertMessage("Topic content deleted successfully", "success");
        this.tableGenAction = true;
        this.tableAction = true;
        this.resourceIds = [];
        this.ownLessonResourceIds = [];
        this.getOrgGeneralAddlResourceByOrganisationId(this.lessonId);
        this.getAddlResourceList(this.lessonId);
    };
    CurriculumAdditionalResourcesManageComponent.prototype.onDeleteError = function (errRes) {
        this.pluginService.alertMessage("Could not delete, please contact admin", "error");
    };
    CurriculumAdditionalResourcesManageComponent.prototype.dragTableContent = function () {
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
            localThisObj.updateAddlResourceOrder();
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
    CurriculumAdditionalResourcesManageComponent.prototype.ownAddlResourceDragTableContent = function () {
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
            localThisObj.updateOwnAddlResourceOrder();
        };
        $("#ownContentDragTable #ownContentDragBody")
            .sortable({
            helper: fixHelperModified,
            stop: updateIndex
        });
        $("#ownContentDragBody").sortable({
            distance: 1,
            opacity: 0, delay: 10,
            cursor: "move",
            update: function () { }
        });
    };
    CurriculumAdditionalResourcesManageComponent.prototype.updateAddlResourceOrder = function () {
        var _this = this;
        this.updateGenAction = false;
        this.checkOrderNumChange = true;
        var table = document.querySelector('#dragTable');
        var rows = table.querySelectorAll('tbody tr');
        Array.from(rows).forEach(function (row) {
            var list = row.querySelectorAll('td');
            var contentId = Number(list[0].id);
            var newOrderNum = Number(list[1].textContent);
            for (var i = 0; i < _this.addlResource.length; i++) {
                if (_this.addlResource[i].id === contentId) {
                    _this.addlResource[i].orderNumber = newOrderNum;
                    break;
                }
            }
            _this.sortArrayByOrderNumber(_this.addlResource);
        });
    };
    CurriculumAdditionalResourcesManageComponent.prototype.updateOwnAddlResourceOrder = function () {
        var _this = this;
        this.updateAction = false;
        this.checkOrderNumChange = true;
        var table = document.querySelector('#ownContentDragTable');
        var rows = table.querySelectorAll('tbody tr');
        Array.from(rows).forEach(function (row) {
            var list = row.querySelectorAll('td');
            var contentId = Number(list[0].id);
            var newOrderNum = Number(list[1].textContent);
            for (var i = 0; i < _this.ownAddlResource.length; i++) {
                if (_this.ownAddlResource[i].id === contentId) {
                    _this.ownAddlResource[i].orderNumber = newOrderNum;
                    break;
                }
            }
            _this.sortArrayByOrderNumber(_this.ownAddlResource);
        });
    };
    CurriculumAdditionalResourcesManageComponent.prototype.updateAddlResourceWithOrderNumber = function () {
        var updatedAddlResource = [];
        for (var i = 0; i < this.addlResource.length; i++) {
            updatedAddlResource.push({
                id: this.addlResource[i].id,
                orderNumber: this.addlResource[i].orderNumber
            });
        }
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
                    localthisObject.subscribeToUpdateAddlResouceResponse(localthisObject.addlResourceService.updateAddlResource(updatedAddlResource));
                }
            }
        });
    };
    CurriculumAdditionalResourcesManageComponent.prototype.subscribeToUpdateAddlResouceResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onUpdateAddlSuccess(res); }, function (errRes) { return _this.onUpdateTopicContentError(errRes); });
    };
    CurriculumAdditionalResourcesManageComponent.prototype.onUpdateAddlSuccess = function (res) {
        this.pluginService.alertMessage("Additional resource order updated successfully", "success");
        this.getAddlResourceList(this.lessonId);
        this.updateGenAction = true;
        this.resetFormValues();
    };
    CurriculumAdditionalResourcesManageComponent.prototype.updateOwnAddlResourceWithOrderNumber = function () {
        var updatedOwnAddlResource = [];
        for (var i = 0; i < this.ownAddlResource.length; i++) {
            updatedOwnAddlResource.push({
                id: this.ownAddlResource[i].id,
                orderNumber: this.ownAddlResource[i].orderNumber
            });
        }
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
                    localthisObject.subscribeToUpdateOwnAddlResouceResponse(localthisObject.addlResourceService.updateOwnAddlResource(updatedOwnAddlResource));
                }
            }
        });
    };
    CurriculumAdditionalResourcesManageComponent.prototype.subscribeToUpdateOwnAddlResouceResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onUpdateOwnAddlSuccess(res); }, function (errRes) { return _this.onUpdateTopicContentError(errRes); });
    };
    CurriculumAdditionalResourcesManageComponent.prototype.onUpdateOwnAddlSuccess = function (res) {
        this.pluginService.alertMessage("Additional resource order updated successfully", "success");
        this.getOrgGeneralAddlResourceByOrganisationId(this.lessonId);
        this.updateAction = true;
        this.resetFormValues();
    };
    CurriculumAdditionalResourcesManageComponent.prototype.onUpdateTopicContentError = function (errRes) {
        this.pluginService.alertMessage("Could not save, please contact admin", "error");
    };
    CurriculumAdditionalResourcesManageComponent.prototype.toggleTreeNodes = function () {
        this.enableExpandNode = !this.enableExpandNode;
        if (this.enableExpandNode) {
            this.pluginService.openJsTreeAllNodes("#treeView");
        }
        else {
            this.pluginService.closeJsTreeAllNodes("#treeView");
        }
    };
    CurriculumAdditionalResourcesManageComponent.prototype.closeLessonResourceModalWithOutSaving = function () {
        if (this.modalTitleName === "View") {
            this.closeLessonResourceModal();
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
                    localthisObject.closeLessonResourceModal();
                }
                else {
                    localthisObject.closeLessonResourceModal();
                }
            });
        }
    };
    CurriculumAdditionalResourcesManageComponent.prototype.resetLessonResource = function () {
        this.lessonResourceForm.reset();
        this.fileName = "";
        this.uploadedFileName = "";
        this.uploadedFilePath = "";
        this.selectedContentType = null;
        this.selectedCategory = null;
    };
    CurriculumAdditionalResourcesManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./addl-resource-manage.component.html */ "./src/app/syllabus-lesson-topic/addl-resource/addl-resource-manage.component.html"),
            providers: [_syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_5__["SyllabusLessonTopicService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_5__["SyllabusLessonTopicService"],
            _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_13__["CurriculumService"],
            _subject_subject_service__WEBPACK_IMPORTED_MODULE_11__["SubjectService"],
            _organisation_organisation_service__WEBPACK_IMPORTED_MODULE_12__["OrganisationService"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"],
            _core__WEBPACK_IMPORTED_MODULE_6__["Principal"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__["PluginService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_9__["UserLoginInfoService"],
            _shared_common_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_15__["FileManagementService"]])
    ], CurriculumAdditionalResourcesManageComponent);
    return CurriculumAdditionalResourcesManageComponent;
}());



/***/ }),

/***/ "./src/app/syllabus-lesson-topic/lesson-plan/lesson-plan-manage.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/lesson-plan/lesson-plan-manage.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3 alert-warning w-100\">\n    Coming soon ...!\n</div>"

/***/ }),

/***/ "./src/app/syllabus-lesson-topic/lesson-plan/lesson-plan-manage.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/lesson-plan/lesson-plan-manage.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LessonPlanManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonPlanManageComponent", function() { return LessonPlanManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../syllabus-lesson-topic.service */ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");







var LessonPlanManageComponent = /** @class */ (function () {
    function LessonPlanManageComponent(_router, activatedRoute, eventManager, parseLinks, principalService, pluginService) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.curriculumList = [];
    }
    LessonPlanManageComponent.prototype.ngOnInit = function () {
    };
    LessonPlanManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./lesson-plan-manage.component.html */ "./src/app/syllabus-lesson-topic/lesson-plan/lesson-plan-manage.component.html"),
            providers: [_syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"],
            _core__WEBPACK_IMPORTED_MODULE_5__["Principal"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"]])
    ], LessonPlanManageComponent);
    return LessonPlanManageComponent;
}());



/***/ }),

/***/ "./src/app/syllabus-lesson-topic/lesson-topic/lesson-topic-manage.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/lesson-topic/lesson-topic-manage.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 filterbg my-4 rounded\">\n    <div class=\"filtericon font-20\">\n        <i class=\"fa fa-filter\"></i>\n    </div>\n    <div class=\"row d-flex justify-content-start align-items-center\">\n        <div class=\"col-lg-3 mb-3\">\n            <ng-select [items]=\"curriculumList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"acronym\"\n                placeholder=\"Select curriculum\" [(ngModel)]=\"selectedCurriculum\" (change)=\"onCurriculumChange()\">\n            </ng-select>\n        </div>\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedCurriculum\">\n            <ng-select [items]=\"gradeList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedGrade\" (change)=\"onGradeChange()\">\n            </ng-select>\n        </div>\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedGrade\">\n            <ng-select [items]=\"subjectList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"subject\"\n                placeholder=\"Select subject\" [(ngModel)]=\"selectedSubject\">\n            </ng-select>\n        </div>\n    </div>\n    <div class=\"d-flex justify-content-end pb-3 row\">\n        <div class=\"col-lg-2\">\n            <button class=\"btn btn-success float-right waves-effect waves-light\" (click)=\"loadSubjectTree()\">\n                <i class=\"fa fa-filter mr-1\"></i>Apply\n            </button>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-xxl-3 mb-3 py-3\">\n        <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"subjectTree.length > 1\">\n            <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\n                <i class=\"fa fa-clone mr-2\"></i>\n                <span *ngIf=\"enableExpandSubjectNode === false\">\n                    Expand all\n                </span>\n                <span *ngIf=\"enableExpandSubjectNode === true\">\n                    Collapse all\n                </span>\n            </div>\n        </div>\n        <div id=\"treeView\"></div>\n    </div>\n    <div class=\"col-xxl-9 mb-3 py-3\">\n        <div *ngIf=\"nodeType === 'root'\">\n            <p><b>Subject name</b></p>\n            <p>{{nodeName}}</p>\n            <p><b>Subject description</b></p>\n            <p>{{nodeDescription}}</p>\n        </div>\n        <div *ngIf=\"nodeType === 'unit'\">\n            <p><b>Unit name</b></p>\n            <p>{{nodeName}}</p>\n            <p><b>Unit description</b></p>\n            <p>{{nodeDescription}}</p>\n        </div>\n        <div *ngIf=\"nodeType === 'lesson'\">\n            <div class=\"d-flex w-100 justify-content-between align-items-center\">\n                <div class=\"mb-2\">\n                    <h4 class=\"font-24 mb-2\">{{nodeName}}</h4>\n                </div>\n                <div class=\"d-flex align-items-start\">\n                    <a class=\"btn btn-primary text-white mb-2\" (click)=\"addNewGeneralTopicMapping()\">\n                        <i class=\"fa fa-cog mr-2\"></i> Add new general topic\n                    </a>\n                </div>\n            </div>\n            <div *ngIf=\"lessonTopicsList\">\n                <table class=\"table table-hover table-striped table-bordered nowrap w-100\" id=\"dragTable\">\n                    <thead>\n                        <tr>\n                            <th>Select</th>\n                            <th>Order number</th>\n                            <th>General topic name</th>\n                            <th>New topic name</th>\n                            <th>Primary applicable grade</th>\n                            <th>Action</th>\n                        </tr>\n                    </thead>\n                    <tbody id=\"dragBody\">\n                        <tr *ngFor=\"let lesson of lessonTopicsList;trackBy: trackId;\">\n                            <td data-column=\"Select\" title=\"{{lesson.id}}\">\n                                <div class=\"checkbox\">\n                                    <input type=\"checkbox\" title=\"{{lesson.id}}\" id=\"{{lesson.id}}\"\n                                        (change)=\"checkSelectedTopics($event)\" class=\"checkAll\">\n                                    <label for=\"{{lesson.id}}\"></label>\n                                </div>\n                            </td>\n                            <td data-column=\"Order number\" class=\"index\">\n                                {{lesson.orderNumber}}\n                            </td>\n                            <td data-column=\"General topic name\">\n                                {{lesson.generalTopicName}}\n                            </td>\n                            <td data-column=\"New topic name\">\n                                {{lesson.topicName}}\n                            </td>\n                            <td data-column=\"Primary applicable grade\">\n                                {{lesson.grade}}\n                            </td>\n                            <td data-column=\"Action\">\n                                <a class=\"btn btn-outline-success mr-1 mb-1 btn-icon-size\"\n                                    (click)=\"editLessonTopic(lesson.id)\">\n                                    <i class=\"fa fa-edit\"></i>\n                                </a>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <div class=\"mt-3 d-flex w-100 justify-content-end\" *ngIf=\"lessonTopicsList.length > 0\">\n                    <button class=\"btn btn-danger\" [disabled]=\"tableAction\" (click)=\"resetSelectedTopic()\">\n                        <i class=\"fa fa-times mr-2\"></i>Reset\n                    </button>\n                    <button class=\"btn btn-danger mx-2\" [disabled]=\"tableAction\" (click)=\"deleteLessonTopics()\">\n                        <i class=\"fa fa-trash mr-2\"></i>Delete\n                    </button>\n                    <button class=\"btn btn-success\" [disabled]=\"updateAction\" (click)=\"updateLessonTopics()\">\n                        <i class=\"fa fa-save mr-2\"></i> Update order\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"modal\" id=\"addNewTopicMappingModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addNewTopicMappingModal\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-notify\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\n                <h5 class=\"modal-title text-white\">\n                    Add new general topic mapping - {{nodeName}}\n                </h5>\n                <div class=\"close btn btn-xl\" (click)=\"closeWithOutSavingTopicMapping()\">\n                    <i class=\"fa fa-times\"></i>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"col-12 filterbg my-4 rounded\">\n                    <div class=\"filtericon font-20\">\n                        <i class=\"fa fa-filter\"></i>\n                    </div>\n                    <div class=\"row d-flex justify-content-start align-items-center\">\n                        <div class=\"col-lg-3 mb-3\">\n                            <ng-select [items]=\"generalSubjectList\" [ngModelOptions]=\"{standalone: true}\"\n                                bindLabel=\"title\" placeholder=\"Select general subject\"\n                                [(ngModel)]=\"selectedGeneralSubject\">\n                            </ng-select>\n                        </div>\n                    </div>\n                    <div class=\"d-flex justify-content-end pb-3 row\">\n                        <div class=\"col-lg-2\">\n                            <button class=\"btn btn-success float-right waves-effect waves-light\"\n                                (click)=\"loadGeneralSubjectTree()\">\n                                <i class=\"fa fa-filter mr-1\"></i>Apply\n                            </button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xxl-3\">\n                        <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"generalSubjectTree.length > 1\">\n                            <div class=\"btn btn-primary mr-2\" (click)=\"toggleGeneralSubjectTreeNodes()\">\n                                <i class=\"fa fa-clone mr-2\"></i>\n                                <span *ngIf=\"enableExpandGSubjectNode === false\">\n                                    Expand all\n                                </span>\n                                <span *ngIf=\"enableExpandGSubjectNode === true\">\n                                    Collapse all\n                                </span>\n                            </div>\n                        </div>\n                        <div id=\"generalSubjectTreeView\"></div>\n                    </div>\n                    <div class=\"col-xxl-9\">\n                        <div class=\"p-3\" *ngIf=\"modalNodeType === 'root'\">\n                            <p><b>Subject name</b></p>\n                            <p>{{nodeName}}</p>\n                            <p><b>Subject description</b></p>\n                            <p>{{nodeDescription}}</p>\n                        </div>\n\n                        <div *ngIf=\"modalNodeType === 'concept'\" class=\"p-3\">\n                            <div class=\"my-2\">\n                                <p><b>Concept name</b> - {{nodeName}}</p>\n                                <p><b>Concept description - {{nodeDescription}}</b></p>\n                            </div>\n                            <div *ngIf=\"generalSubTopicsList\">\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\n                                    <thead>\n                                        <tr>\n                                            <th>Select</th>\n                                            <th>Topic name</th>\n                                            <th>Topic description</th>\n                                            <th>Primary applicable grade</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let topic of generalSubTopicsList;\">\n                                            <td data-column=\"Select\">\n                                                <label for=\"{{topic.id}}+123\">\n                                                    <div class=\"checkbox\">\n                                                        <input type=\"checkbox\" name=\"{{topic.id}}\" id=\"{{topic.id}}+123\"\n                                                            (change)=\"checkNewlyAddedTopics($event)\"\n                                                            [checked]=\"topic.disabled\" [disabled]=\"topic.disabled\">\n                                                        <label for=\"{{topic.id}}+123\"></label>\n                                                    </div>\n                                                </label>\n                                            </td>\n                                            <td data-column=\"Topic name\">\n                                                {{topic.data.name}}\n                                            </td>\n                                            <td data-column=\"Topic description\">\n                                                {{topic.data.description}}\n                                            </td>\n                                            <td data-column=\"Primary applicable grade\">\n                                                {{topic.data.baseGrade}}\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                            <div class=\"d-flex justify-content-end my-2\">\n                                <button class=\"btn btn-info\" [disabled]=\"addToListAction\" (click)=\"addTopicToList()\">\n                                    <i class=\"fa fa-plus-circle mr-2\"></i> Add to list\n                                </button>\n                            </div>\n                            <div *ngIf=\"selectedGeneralSubTopicsList\">\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\n                                    <thead>\n                                        <tr>\n                                            <th>Topic name</th>\n                                            <th>Topic description</th>\n                                            <th>Primary applicable grade</th>\n                                            <th>Action</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let topic of selectedGeneralSubTopicsList;\">\n                                            <td data-column=\"Topic name\">\n                                                {{topic.data.name}}\n                                            </td>\n                                            <td data-column=\"Topic description\">\n                                                {{topic.data.description}}\n                                            </td>\n                                            <td data-column=\"Primary applicable grade\">\n                                                {{topic.data.baseGrade}}\n                                            </td>\n                                            <td data-column=\"Action\">\n                                                <div class=\"btn btn-outline-danger\"\n                                                    (click)=\"removeFromNewTopicList(topic.id)\">\n                                                    <i class=\"fa fa-trash\"></i>\n                                                </div>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n\n                        <div class=\"p-3\" *ngIf=\"modalNodeType === 'topic'\">\n                            <p><b>Topic name</b></p>\n                            <p>{{nodeName}}</p>\n                            <p><b>Topic description</b></p>\n                            <p>{{nodeDescription}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <div class=\"btn btn-danger\" (click)=\"closeTopicMappingModal()\">\n                    <i class=\"fa fa-times mr-2\"></i> Close\n                </div>\n                <div class=\"btn btn-success\" (click)=\"saveLessonTopicMapping()\">\n                    <i class=\"fa fa-save mr-2\"></i> Save\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"editLessonTopicModal\">\n    <div class=\"modal-dialog modal-full-height modal-right modal-notify\" role=\"document\">\n        <div class=\"modal-content\" [formGroup]=\"lessonTopicForm\">\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\n                <h5 class=\"modal-title text-white\">\n                    Edit lesson topic\n                </h5>\n                <div class=\"close btn btn-xl\" (click)=\"closeWithOutSavingTopicName()\">\n                    <i class=\"fa fa-times\"></i>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"form-group mb-2\">\n                    <label class=\"col-form-label\">General topic name</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"generalTopicName\" />\n                </div>\n                <div class=\"form-group mb-2\">\n                    <label class=\"col-form-label\">New topic name</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"newTopicName\"\n                        placeholder=\"Enter new topic name (minlength: 3 and maxlength: 75)\"\n                        inputRestriction=\"alphabetsNumbersWithMinus\" minlength=\"3\" maxlength=\"75\" />\n                    <div class=\"text-muted font-15 my-2\">\n                        Allowed characters - Alphabets, Numbers and Special character (-)\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-danger\" (click)=\"resetEditLessonTopicModal()\">\n                    <i class=\"fa fa-times mr-2\"></i>\n                    Reset\n                </button>\n                <button class=\"btn btn-success\" (click)=\"updateLessonTopicName()\" [disabled]=\"validateForm\">\n                    <i class=\"fa fa-save mr-2\"></i>\n                    Save\n                </button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/syllabus-lesson-topic/lesson-topic/lesson-topic-manage.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/lesson-topic/lesson-topic-manage.component.ts ***!
  \*************************************************************************************/
/*! exports provided: LessonTopicManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonTopicManageComponent", function() { return LessonTopicManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../syllabus-lesson-topic.service */ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _subject_subject_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../subject/subject.service */ "./src/app/subject/subject.service.ts");
/* harmony import */ var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../curriculum/curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../general-subject/general-subject.service */ "./src/app/general-subject/general-subject.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");












var LessonTopicManageComponent = /** @class */ (function () {
    function LessonTopicManageComponent(_router, activatedRoute, curriculumService, subjectService, lessonTopicService, eventManager, parseLinks, principalService, pluginService, generalSubjectService, formBuilder) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.curriculumService = curriculumService;
        this.subjectService = subjectService;
        this.lessonTopicService = lessonTopicService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.generalSubjectService = generalSubjectService;
        this.formBuilder = formBuilder;
        this.curriculumList = [];
        this.gradeList = [];
        this.subjectList = [];
        this.generalSubjectList = [];
        this.subjectTree = [];
        this.generalSubjectTree = [];
        this.lessonTopicsList = [];
        this.generalSubTopicsList = [];
        this.selectedGeneralSubTopicsList = [];
        this.topicIds = [];
        this.lessonTopicIds = [];
        this.enableExpandSubjectNode = false;
        this.enableExpandGSubjectNode = false;
        this.tableAction = true;
        this.updateAction = true;
        this.addToListAction = true;
    }
    LessonTopicManageComponent.prototype.ngOnInit = function () {
        this.loadCurriculums();
        this.loadGeneralSubjectList();
        this.createLessonTopicForm();
    };
    LessonTopicManageComponent.prototype.createLessonTopicForm = function () {
        this.lessonTopicForm = this.formBuilder.group({
            generalTopicName: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](""),
            newTopicName: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(75)])
        });
    };
    LessonTopicManageComponent.prototype.loadCurriculums = function () {
        var _this = this;
        this.curriculumService.getCurriculumSearch().subscribe(function (res) { return _this.assignCurriculumList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    LessonTopicManageComponent.prototype.assignCurriculumList = function (data) {
        this.curriculumList = [];
        for (var i = 0; i < data.length; i++) {
            this.curriculumList.push(data[i]);
        }
    };
    LessonTopicManageComponent.prototype.onError = function (errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    };
    LessonTopicManageComponent.prototype.ngAfterViewInit = function () {
        this.showSyllabusDetails();
        this.showGeneralSubjectTreeDetails();
    };
    LessonTopicManageComponent.prototype.onCurriculumChange = function () {
        var gradesApplicableFrom, gradesApplicableTo;
        if (this.selectedCurriculum) {
            gradesApplicableFrom = this.selectedCurriculum.gradesApplicableFrom;
            gradesApplicableTo = this.selectedCurriculum.gradesApplicableTo;
            this.generateGradeList(gradesApplicableFrom, gradesApplicableTo);
        }
        this.selectedGrade = null;
        this.selectedSubject = null;
    };
    LessonTopicManageComponent.prototype.onGradeChange = function () {
        var _this = this;
        var curriculumId, gradeId, status;
        if (this.selectedGrade) {
            curriculumId = this.selectedCurriculum.id;
            gradeId = this.selectedGrade.id;
            status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_9__["ACTIVE"];
            this.subjectService
                .getSubjectByCurriculumIdAndGradeId(curriculumId, gradeId, status)
                .subscribe(function (res) { return _this.assignSubjectList(res.body); }, function (res) { return _this.onError(res.message); });
        }
        this.selectedSubject = null;
    };
    LessonTopicManageComponent.prototype.assignSubjectList = function (data) {
        this.subjectList = [];
        for (var i = 0; i < data.length; i++) {
            this.subjectList.push(data[i]);
        }
    };
    LessonTopicManageComponent.prototype.generateGradeList = function (min, max) {
        this.gradeList = [];
        for (var i = min; i <= max; i++) {
            this.gradeList.push({
                "id": i,
                "name": i
            });
        }
        return this.gradeList;
    };
    LessonTopicManageComponent.prototype.loadSubjectTree = function () {
        var _this = this;
        if (this.selectedSubject) {
            var subjectId = this.selectedSubject.id;
            this.subjectTree = [];
            this.pluginService.jsTree("#treeView", this.subjectTree, false);
            if (subjectId) {
                this.subjectService.getSubjectTreeBySubjectId(subjectId).subscribe(function (res) { return _this.assignSubjectTree(res.body); }, function (res) { return _this.onError(res.message); });
            }
            else {
                this.pluginService.alertMessage("Please select a filter and then apply", "error");
            }
        }
    };
    LessonTopicManageComponent.prototype.assignSubjectTree = function (data) {
        this.subjectTree = data;
        this.pluginService.jsTree("#treeView", this.subjectTree, false);
        this.nodeType = "";
        this.enableExpandSubjectNode = false;
    };
    LessonTopicManageComponent.prototype.showSyllabusDetails = function () {
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
                else if (localThisObj.nodeType === "unit") {
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                }
                else if (localThisObj.nodeType === "lesson") {
                    localThisObj.lessonId = data.node.data.id;
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.objective;
                    localThisObj.getLessonTopicList(localThisObj.lessonId);
                }
                else {
                }
            }
        });
    };
    LessonTopicManageComponent.prototype.getLessonTopicList = function (lessonId) {
        var _this = this;
        this.lessonTopicService
            .getLessonTopicListByLessonId(lessonId)
            .subscribe(function (res) { return _this.assignLessonTopicsList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    LessonTopicManageComponent.prototype.assignLessonTopicsList = function (data) {
        this.lessonTopicsList = [];
        this.lessonTopicsList = data.lessonTopics;
        for (var i = 0; i < this.lessonTopicsList.length; i++) {
            var topicId = this.lessonTopicsList[i].generalTopicId;
            var index = i;
            this.getTopicDetails(topicId, index);
        }
        this.sortArrayByOrderNumber(this.lessonTopicsList);
        this.updateAction = true;
        this.tableAction = true;
        this.topicIds = [];
        this.dragUpdateLessonTopicList();
    };
    LessonTopicManageComponent.prototype.getTopicDetails = function (topicId, index) {
        var _this = this;
        this.lessonTopicService
            .getTopicDetailsByTopicId(topicId)
            .subscribe(function (res) { return _this.assignTopicDetailList(res.body, index); }, function (res) { return _this.onError(res.message); });
    };
    LessonTopicManageComponent.prototype.assignTopicDetailList = function (data, index) {
        var grade = data.baseGrade;
        this.lessonTopicsList[index].grade = grade;
    };
    LessonTopicManageComponent.prototype.sortArrayByOrderNumber = function (array) {
        array.sort(function (a, b) { return (a.orderNumber > b.orderNumber) ? 1 : -1; });
    };
    LessonTopicManageComponent.prototype.toggleTreeNodes = function () {
        this.enableExpandSubjectNode = !this.enableExpandSubjectNode;
        if (this.enableExpandSubjectNode) {
            this.pluginService.openJsTreeAllNodes("#treeView");
        }
        else {
            this.pluginService.closeJsTreeAllNodes("#treeView");
        }
    };
    LessonTopicManageComponent.prototype.checkSelectedTopics = function (event) {
        var selectedId, checked, index;
        checked = event.target.checked;
        selectedId = Number(event.target.title);
        if (checked === true) {
            this.tableAction = false;
            this.lessonTopicIds.push(selectedId);
        }
        else if (checked === false) {
            index = this.lessonTopicIds.findIndex(function (item) { return item === selectedId; });
            this.lessonTopicIds.splice(index, 1);
        }
        this.lessonTopicIds = this.removeDuplicateElements(this.lessonTopicIds);
        if (this.lessonTopicIds.length <= 0) {
            this.tableAction = true;
        }
    };
    LessonTopicManageComponent.prototype.removeDuplicateElements = function (array) {
        var temp = [];
        for (var i = 0; i < array.length; i++) {
            if (temp.indexOf(array[i]) == -1) {
                temp.push(array[i]);
            }
        }
        return temp;
    };
    LessonTopicManageComponent.prototype.deleteLessonTopics = function () {
        var localthisObject = this;
        swal({
            title: "Are you sure to delete lesson topic mapping ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm === true) {
                if (localthisObject.lessonTopicIds.length > 0) {
                    localthisObject.subscribeToDeleteResponse(localthisObject.lessonTopicService.deleteLessonTopicMapping(localthisObject.lessonTopicIds));
                }
            }
        });
    };
    LessonTopicManageComponent.prototype.subscribeToDeleteResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onDeleteSuccess(res); }, function (errRes) { return _this.onDeleteError(errRes); });
    };
    LessonTopicManageComponent.prototype.onDeleteSuccess = function (res) {
        this.pluginService.alertMessage("Lesson topic deleted successfully", "success");
        this.tableAction = true;
        this.lessonTopicIds = [];
        this.getLessonTopicList(this.lessonId);
    };
    LessonTopicManageComponent.prototype.onDeleteError = function (errRes) {
        this.pluginService.alertMessage("Could not delete, please contact admin", "error");
    };
    LessonTopicManageComponent.prototype.resetSelectedTopic = function () {
        this.lessonTopicIds = [];
        this.tableAction = true;
        $(".checkAll").prop("checked", false);
    };
    LessonTopicManageComponent.prototype.updateLessonTopicMapping = function (lessonTopics) {
        this.subscribeToUpdateResponse(this.lessonTopicService.updateLessonTopicMapping(lessonTopics));
    };
    LessonTopicManageComponent.prototype.subscribeToUpdateResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onUpdateSuccess(res); }, function (errRes) { return _this.onUpdateError(errRes); });
    };
    LessonTopicManageComponent.prototype.onUpdateSuccess = function (res) {
        this.pluginService.alertMessage("Lesson topic mapping updated successfully", "success");
        this.getLessonTopicList(this.lessonId);
        this.closeEditLessonTopicModal();
    };
    LessonTopicManageComponent.prototype.onUpdateError = function (errRes) {
        this.pluginService.alertMessage("Could not update, please contact admin", "error");
    };
    LessonTopicManageComponent.prototype.dragUpdateLessonTopicList = function () {
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
            localThisObj.updateLessonTopicOrder();
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
    LessonTopicManageComponent.prototype.updateLessonTopicOrder = function () {
        var _this = this;
        this.updateAction = false;
        this.checkOrderNumChange = true;
        var table = document.querySelector('#dragTable');
        var rows = table.querySelectorAll('tbody tr');
        Array.from(rows).forEach(function (row) {
            var list = row.querySelectorAll('td');
            var topicMappingId = Number(list[0].title);
            var newOrderNum = Number(list[1].textContent);
            for (var i = 0; i < _this.lessonTopicsList.length; i++) {
                if (_this.lessonTopicsList[i].id === topicMappingId) {
                    _this.lessonTopicsList[i].orderNumber = newOrderNum;
                    _this.lessonTopicsList[i].id = topicMappingId;
                    break;
                }
            }
            _this.sortArrayByOrderNumber(_this.lessonTopicsList);
        });
    };
    LessonTopicManageComponent.prototype.updateLessonTopics = function () {
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
                if (localthisObject.checkOrderNumChange) {
                    localthisObject.subscribeToUpdateResponse(localthisObject.lessonTopicService.updateLessonTopicMapping(localthisObject.lessonTopicsList));
                }
            }
        });
    };
    LessonTopicManageComponent.prototype.addNewGeneralTopicMapping = function () {
        this.generalSubTopicsList = [];
        this.selectedGeneralSubTopicsList = [];
        this.generalSubjectTree = [];
        this.selectedGeneralSubject = null;
        this.modalNodeType = "";
        this.pluginService.jsTree("#generalSubjectTreeView", this.generalSubjectTree, false);
        this.openTopicMappingModal();
    };
    LessonTopicManageComponent.prototype.loadGeneralSubjectList = function () {
        var _this = this;
        this.generalSubjectService.getSubjectSearchList().subscribe(function (res) { return _this.assignGeneralSubjectList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    LessonTopicManageComponent.prototype.assignGeneralSubjectList = function (data) {
        this.generalSubjectList = data;
    };
    LessonTopicManageComponent.prototype.loadGeneralSubjectTree = function () {
        var _this = this;
        this.generalSubjectTree = [];
        this.modalNodeType = "";
        this.pluginService.jsTree("#generalSubjectTreeView", this.generalSubjectTree, false);
        if (this.selectedGeneralSubject) {
            var generalSubjectId = this.selectedGeneralSubject.id;
            this.generalSubjectService.getSubjectTreeBySubjectId(generalSubjectId).subscribe(function (res) { return _this.assignGeneralSubjectTree(res.body); }, function (res) { return _this.onError(res.message); });
        }
    };
    LessonTopicManageComponent.prototype.assignGeneralSubjectTree = function (data) {
        this.generalSubjectTree = data;
        this.pluginService.jsTree("#generalSubjectTreeView", this.generalSubjectTree, false);
        this.enableExpandGSubjectNode = false;
    };
    LessonTopicManageComponent.prototype.showGeneralSubjectTreeDetails = function () {
        var localThisObj = this;
        $('#generalSubjectTreeView')
            .on('changed.jstree', function (e, data) {
            var i, j, conceptId;
            for (i = 0, j = data.selected.length; i < j; i++) {
                localThisObj.modalNodeType = data.node.type;
                if (localThisObj.modalNodeType === "root") {
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                }
                else if (localThisObj.modalNodeType === "concept") {
                    conceptId = data.node.id;
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                    localThisObj.topicIds = [];
                    this.addToListAction = true;
                    localThisObj.getTopicsList(conceptId);
                }
                else if (localThisObj.modalNodeType === "topic") {
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                }
                else {
                }
            }
        });
    };
    LessonTopicManageComponent.prototype.getTopicsList = function (conceptId) {
        var conceptChildrenList;
        conceptChildrenList = this.generalSubjectTree.filter(function (item) { return item.parent === conceptId; });
        this.generalSubTopicsList = conceptChildrenList.filter(function (item) { return item.type === 'topic'; });
        this.disablePreSelectedTopics();
    };
    LessonTopicManageComponent.prototype.disablePreSelectedTopics = function () {
        if (this.lessonTopicsList.length > 0) {
            for (var i = 0; i < this.lessonTopicsList.length; i++) {
                for (var j = 0; j < this.generalSubTopicsList.length; j++) {
                    if (this.lessonTopicsList[i].generalTopicId === this.generalSubTopicsList[j].data.id) {
                        this.generalSubTopicsList[j].disabled = true;
                    }
                }
            }
        }
    };
    LessonTopicManageComponent.prototype.checkNewlyAddedTopics = function (event) {
        var selectedId, checked, index;
        checked = event.target.checked;
        selectedId = event.target.name;
        if (checked === true) {
            this.topicIds.push(selectedId);
            this.addToListAction = false;
        }
        else if (checked === false) {
            index = this.topicIds.findIndex(function (item) { return item === selectedId; });
            this.topicIds.splice(index, 1);
        }
        this.topicIds = this.removeDuplicateElements(this.topicIds);
    };
    LessonTopicManageComponent.prototype.addTopicToList = function () {
        var _this = this;
        var _loop_1 = function (i) {
            this_1.selectedGeneralSubTopicsList.push(this_1.generalSubTopicsList.find(function (item) { return item.id === _this.topicIds[i]; }));
        };
        var this_1 = this;
        for (var i = 0; i < this.topicIds.length; i++) {
            _loop_1(i);
        }
        this.selectedGeneralSubTopicsList = this.removeDuplicateElements(this.selectedGeneralSubTopicsList);
        this.addToListAction = true;
    };
    LessonTopicManageComponent.prototype.removeFromNewTopicList = function (id) {
        var topicIndex;
        if (this.selectedGeneralSubTopicsList.length > 0) {
            topicIndex = this.selectedGeneralSubTopicsList.findIndex(function (item) { return item.id === id; });
            this.selectedGeneralSubTopicsList.splice(topicIndex, 1);
        }
        else {
            this.selectedGeneralSubTopicsList = [];
        }
    };
    LessonTopicManageComponent.prototype.toggleGeneralSubjectTreeNodes = function () {
        this.enableExpandGSubjectNode = !this.enableExpandGSubjectNode;
        if (this.enableExpandGSubjectNode) {
            this.pluginService.openJsTreeAllNodes("#generalSubjectTreeView");
        }
        else {
            this.pluginService.closeJsTreeAllNodes("#generalSubjectTreeView");
        }
    };
    LessonTopicManageComponent.prototype.saveLessonTopicMapping = function () {
        var newLessonTopicsList = [];
        for (var i = 0; i < this.selectedGeneralSubTopicsList.length; i++) {
            newLessonTopicsList.push({
                generalTopicId: this.selectedGeneralSubTopicsList[i].data.id,
                topicName: this.selectedGeneralSubTopicsList[i].data.name,
                generalTopicName: this.selectedGeneralSubTopicsList[i].data.name,
                lessonId: this.lessonId,
                orderNumber: this.lessonTopicsList.length + i + 1
            });
        }
        if (newLessonTopicsList.length > 0) {
            this.subscribeToSaveResponse(this.lessonTopicService.saveLessonTopicMapping(newLessonTopicsList));
        }
    };
    LessonTopicManageComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onSaveSuccess(res); }, function (errRes) { return _this.onSaveError(errRes); });
    };
    LessonTopicManageComponent.prototype.onSaveSuccess = function (res) {
        this.pluginService.alertMessage("Lesson topic mapped successfully", "success");
        this.closeTopicMappingModal();
        this.getLessonTopicList(this.lessonId);
        this.pluginService.jsTree("#generalSubjectTreeView", this.generalSubjectTree, false);
    };
    LessonTopicManageComponent.prototype.onSaveError = function (errRes) {
        this.pluginService.alertMessage("Could not save, please contact admin", "error");
    };
    LessonTopicManageComponent.prototype.trimValue = function (value) {
        if (value === null || value === undefined) {
            return value;
        }
        else {
            return value.trim();
        }
    };
    LessonTopicManageComponent.prototype.editLessonTopic = function (lessonTopicId) {
        var lessonTopic = this.lessonTopicsList.filter(function (item) { return item.id === lessonTopicId; })[0];
        this.lessonTopicId = lessonTopicId;
        this.lessonTopicForm.setValue({
            generalTopicName: lessonTopic.generalTopicName,
            newTopicName: lessonTopic.topicName
        });
        this.lessonTopicForm.get('generalTopicName').disable();
        this.openEditLessonTopicModal();
    };
    LessonTopicManageComponent.prototype.closeWithOutSavingTopicMapping = function () {
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
                localthisObject.closeTopicMappingModal();
            }
        });
    };
    LessonTopicManageComponent.prototype.openEditLessonTopicModal = function () {
        this.pluginService.showModalWindow("#editLessonTopicModal");
    };
    LessonTopicManageComponent.prototype.closeEditLessonTopicModal = function () {
        this.pluginService.hideModalWindow("#editLessonTopicModal");
    };
    LessonTopicManageComponent.prototype.closeWithOutSavingTopicName = function () {
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
                localthisObject.closeEditLessonTopicModal();
            }
        });
    };
    LessonTopicManageComponent.prototype.updateLessonTopicName = function () {
        var _this = this;
        var lessonTopic = {}, lessonTopics = [];
        lessonTopic = this.lessonTopicsList.filter(function (item) { return item.id === _this.lessonTopicId; })[0];
        lessonTopic.topicName = this.trimValue(this.lessonTopicForm.get('newTopicName').value);
        lessonTopics.push(lessonTopic);
        this.subscribeToUpdateResponse(this.lessonTopicService.updateLessonTopicMapping(lessonTopics));
    };
    LessonTopicManageComponent.prototype.onUpdateLessonTopicError = function (errRes) {
        this.pluginService.alertMessage("Could not update, please contact admin", "error");
    };
    LessonTopicManageComponent.prototype.resetEditLessonTopicModal = function () {
        var _this = this;
        var lessonTopic = this.lessonTopicsList.filter(function (item) { return item.id === _this.lessonTopicId; })[0];
        this.lessonTopicForm.setValue({
            generalTopicName: lessonTopic.generalTopicName,
            newTopicName: lessonTopic.topicName
        });
        this.lessonTopicForm.get('generalTopicName').disable();
    };
    LessonTopicManageComponent.prototype.openTopicMappingModal = function () {
        this.pluginService.showModalWindow("#addNewTopicMappingModal");
    };
    LessonTopicManageComponent.prototype.closeTopicMappingModal = function () {
        this.pluginService.hideModalWindow("#addNewTopicMappingModal");
    };
    LessonTopicManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./lesson-topic-manage.component.html */ "./src/app/syllabus-lesson-topic/lesson-topic/lesson-topic-manage.component.html"),
            providers: [_syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__["CurriculumService"],
            _subject_subject_service__WEBPACK_IMPORTED_MODULE_7__["SubjectService"],
            _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"],
            _core__WEBPACK_IMPORTED_MODULE_5__["Principal"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"],
            _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_10__["GeneralSubjectService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"]])
    ], LessonTopicManageComponent);
    return LessonTopicManageComponent;
}());



/***/ }),

/***/ "./src/app/syllabus-lesson-topic/prerequisite-lesson-topic/prerequisite-lesson-topic-manage.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/prerequisite-lesson-topic/prerequisite-lesson-topic-manage.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 filterbg my-4 rounded\">\n    <div class=\"filtericon font-20\">\n        <i class=\"fa fa-filter\"></i>\n    </div>\n    <div class=\"row d-flex justify-content-start align-items-center\">\n        <div class=\"col-lg-3 mb-3\">\n            <ng-select [items]=\"curriculumList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"acronym\"\n                placeholder=\"Select curriculum\" [(ngModel)]=\"selectedCurriculum\" (change)=\"onCurriculumChange()\">\n            </ng-select>\n        </div>\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedCurriculum\">\n            <ng-select [items]=\"gradeList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedGrade\" (change)=\"onGradeChange()\">\n            </ng-select>\n        </div>\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedGrade\">\n            <ng-select [items]=\"subjectList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"subject\"\n                placeholder=\"Select subject\" [(ngModel)]=\"selectedSubject\">\n            </ng-select>\n        </div>\n    </div>\n    <div class=\"d-flex justify-content-end pb-3 row\">\n        <div class=\"col-lg-2\">\n            <button class=\"btn btn-success float-right waves-effect waves-light\" (click)=\"loadSubjectTree()\">\n                <i class=\"fa fa-filter mr-1\"></i>Apply\n            </button>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-xxl-3 mb-3 py-3\">\n        <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"subjectTree.length > 1\">\n            <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\n                <i class=\"fa fa-clone mr-2\"></i>\n                <span *ngIf=\"enableExpandSubjectNode === false\">\n                    Expand all\n                </span>\n                <span *ngIf=\"enableExpandSubjectNode === true\">\n                    Collapse all\n                </span>\n            </div>\n        </div>\n        <div id=\"treeView\"></div>\n    </div>\n    <div class=\"col-xxl-9 mb-3 py-3\">\n\n        <div *ngIf=\"nodeType === 'root'\">\n            <p><b>Subject name</b></p>\n            <p>{{nodeName}}</p>\n            <p><b>Subject description</b></p>\n            <p>{{nodeDescription}}</p>\n        </div>\n\n        <div *ngIf=\"nodeType === 'unit'\">\n            <p><b>Unit name</b></p>\n            <p>{{nodeName}}</p>\n            <p><b>Unit description</b></p>\n            <p>{{nodeDescription}}</p>\n        </div>\n\n        <div *ngIf=\"nodeType === 'lesson'\">\n            <div class=\"d-flex w-100 justify-content-between align-items-center\">\n                <div class=\"mb-2\">\n                    <h4 class=\"font-24 mb-2\">{{nodeName}}</h4>\n                </div>\n                <div class=\"d-flex align-items-start\">\n                    <a class=\"btn btn-primary text-white mb-2\" (click)=\"addNewGeneralTopicMapping()\">\n                        <i class=\"fa fa-cog mr-2\"></i> Add new general topic\n                    </a>\n                </div>\n            </div>\n            <div *ngIf=\"lessonTopicsList\">\n                <table class=\"table table-hover table-striped table-bordered nowrap w-100\" id=\"dragTable\">\n                    <thead>\n                        <tr>\n                            <th>Select</th>\n                            <th>Order number</th>\n                            <th>Topic name</th>\n                            <th>Primary applicable grade</th>\n                        </tr>\n                    </thead>\n                    <tbody id=\"dragBody\">\n                        <tr *ngFor=\"let lesson of lessonTopicsList;trackBy: trackId;\">\n                            <td data-column=\"Select\" title=\"{{lesson.id}}\">\n                                <div class=\"checkbox\">\n                                    <input type=\"checkbox\" title=\"{{lesson.id}}\" id=\"{{lesson.id}}\"\n                                        (change)=\"checkSelectedTopics($event)\" class=\"checkAll\">\n                                    <label for=\"{{lesson.id}}\"></label>\n                                </div>\n                            </td>\n                            <td data-column=\"Order number\" class=\"index\">\n                                {{lesson.orderNumber}}\n                            </td>\n                            <td data-column=\"Topic name\">\n                                {{lesson.displayName}}\n                            </td>\n                            <td data-column=\"Primary applicable grade\">\n                                {{lesson.grade}}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <div class=\"mt-3 d-flex w-100 justify-content-end\" *ngIf=\"lessonTopicsList.length > 0\">\n                    <button class=\"btn btn-danger\" [disabled]=\"tableAction\" (click)=\"resetSelectedTopic()\">\n                        <i class=\"fa fa-times mr-2\"></i>Reset\n                    </button>\n                    <button class=\"btn btn-danger mx-2\" [disabled]=\"tableAction\" (click)=\"deleteLessonTopics()\">\n                        <i class=\"fa fa-trash mr-2\"></i>Delete\n                    </button>\n                    <button class=\"btn btn-success\" [disabled]=\"updateAction\" (click)=\"updateLessonTopics()\">\n                        <i class=\"fa fa-save mr-2\"></i> Update order\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal\" id=\"addNewPrereqTopicMappingModal\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"addNewPrereqTopicMappingModal\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-notify\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\n                <h5 class=\"modal-title text-white\">\n                    Add new prerequisite topic mapping - {{nodeName}}\n                </h5>\n                <div class=\"close btn btn-xl\" (click)=\"closeWithOutSavingTopicMapping()\">\n                    <i class=\"fa fa-times\"></i>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"col-12 filterbg my-4 rounded\">\n                    <div class=\"filtericon font-20\">\n                        <i class=\"fa fa-filter\"></i>\n                    </div>\n                    <div class=\"row d-flex justify-content-start align-items-center\">\n                        <div class=\"col-lg-3 mb-3\">\n                            <ng-select [items]=\"generalSubjectList\" [ngModelOptions]=\"{standalone: true}\"\n                                bindLabel=\"title\" placeholder=\"Select general subject\"\n                                [(ngModel)]=\"selectedGeneralSubject\">\n                            </ng-select>\n                        </div>\n                    </div>\n                    <div class=\"d-flex justify-content-end pb-3 row\">\n                        <div class=\"col-lg-2\">\n                            <button class=\"btn btn-success float-right waves-effect waves-light\"\n                                (click)=\"loadGeneralSubjectTree()\">\n                                <i class=\"fa fa-filter mr-1\"></i>Apply\n                            </button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xxl-3\">\n                        <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"generalSubjectTree.length > 1\">\n                            <div class=\"btn btn-primary mr-2\" (click)=\"toggleGeneralSubjectTreeNodes()\">\n                                <i class=\"fa fa-clone mr-2\"></i>\n                                <span *ngIf=\"enableExpandGSubjectNode === false\">\n                                    Expand all\n                                </span>\n                                <span *ngIf=\"enableExpandGSubjectNode === true\">\n                                    Collapse all\n                                </span>\n                            </div>\n                        </div>\n                        <div id=\"generalSubjectTreeView\"></div>\n                    </div>\n                    <div class=\"col-xxl-9\">\n                        <div class=\"p-3\" *ngIf=\"modalNodeType === 'root'\">\n                            <p><b>Subject name</b></p>\n                            <p>{{nodeName}}</p>\n                            <p><b>Subject description</b></p>\n                            <p>{{nodeDescription}}</p>\n                        </div>\n\n                        <div *ngIf=\"modalNodeType === 'concept'\" class=\"p-3\">\n                            <div class=\"my-2\">\n                                <p><b>Concept name</b> - {{nodeName}}</p>\n                                <p><b>Concept description - {{nodeDescription}}</b></p>\n                            </div>\n                            <div *ngIf=\"generalSubTopicsList\">\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\n                                    <thead>\n                                        <tr>\n                                            <th>Select</th>\n                                            <th>Topic name</th>\n                                            <th>Topic description</th>\n                                            <th>Primary applicable grade</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let topic of generalSubTopicsList;\">\n                                            <td data-column=\"Select\">\n                                                <label for=\"{{topic.id}}+123\">\n                                                    <div class=\"checkbox\">\n                                                        <input type=\"checkbox\" name=\"{{topic.id}}\" id=\"{{topic.id}}+123\"\n                                                            (change)=\"checkNewlyAddedTopics($event)\"\n                                                            [checked]=\"topic.disabled\" [disabled]=\"topic.disabled\">\n                                                        <label for=\"{{topic.id}}+123\"></label>\n                                                    </div>\n                                                </label>\n                                            </td>\n                                            <td data-column=\"Topic name\">\n                                                {{topic.data.name}}\n                                            </td>\n                                            <td data-column=\"Topic description\">\n                                                {{topic.data.description}}\n                                            </td>\n                                            <td data-column=\"Primary applicable grade\">\n                                                {{topic.data.baseGrade}}\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                            <div class=\"d-flex justify-content-end my-2\">\n                                <button [disabled]=\"addToListAction\" class=\"btn btn-info\" (click)=\"addTopicToList()\">\n                                    <i class=\"fa fa-plus-circle mr-2\"></i> Add to list\n                                </button>\n                            </div>\n                            <div *ngIf=\"selectedGeneralSubTopicsList\">\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\n                                    <thead>\n                                        <tr>\n                                            <th>Topic name</th>\n                                            <th>Topic description</th>\n                                            <th>Primary applicable grade</th>\n                                            <th>Action</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let topic of selectedGeneralSubTopicsList;\">\n                                            <td data-column=\"Topic name\">\n                                                {{topic.data.name}}\n                                            </td>\n                                            <td data-column=\"Topic description\">\n                                                {{topic.data.description}}\n                                            </td>\n                                            <td data-column=\"Primary applicable grade\">\n                                                {{topic.data.baseGrade}}\n                                            </td>\n                                            <td data-column=\"Action\">\n                                                <div class=\"btn btn-outline-danger\"\n                                                    (click)=\"removeFromNewTopicList(topic.id)\">\n                                                    <i class=\"fa fa-trash\"></i>\n                                                </div>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n\n                        <div class=\"p-3\" *ngIf=\"modalNodeType === 'topic'\">\n                            <p><b>Topic name</b></p>\n                            <p>{{nodeName}}</p>\n                            <p><b>Topic description</b></p>\n                            <p>{{nodeDescription}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <div class=\"btn btn-danger\" (click)=\"closeTopicMappingModal()\">\n                    <i class=\"fa fa-times mr-2\"></i> Close\n                </div>\n                <div class=\"btn btn-success\" (click)=\"saveLessonTopicMapping()\">\n                    <i class=\"fa fa-save mr-2\"></i> Save\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/syllabus-lesson-topic/prerequisite-lesson-topic/prerequisite-lesson-topic-manage.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/prerequisite-lesson-topic/prerequisite-lesson-topic-manage.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PrerequisiteLessonTopicManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrerequisiteLessonTopicManageComponent", function() { return PrerequisiteLessonTopicManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../syllabus-lesson-topic.service */ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../curriculum/curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _subject_subject_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../subject/subject.service */ "./src/app/subject/subject.service.ts");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../general-subject/general-subject.service */ "./src/app/general-subject/general-subject.service.ts");











var PrerequisiteLessonTopicManageComponent = /** @class */ (function () {
    function PrerequisiteLessonTopicManageComponent(_router, activatedRoute, curriculumService, subjectService, lessonTopicService, eventManager, parseLinks, principalService, generalSubjectService, pluginService) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.curriculumService = curriculumService;
        this.subjectService = subjectService;
        this.lessonTopicService = lessonTopicService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.generalSubjectService = generalSubjectService;
        this.pluginService = pluginService;
        this.curriculumList = [];
        this.gradeList = [];
        this.subjectList = [];
        this.generalSubjectList = [];
        this.subjectTree = [];
        this.generalSubjectTree = [];
        this.lessonTopicsList = [];
        this.generalSubTopicsList = [];
        this.selectedGeneralSubTopicsList = [];
        this.topicIds = [];
        this.lessonTopicIds = [];
        this.enableExpandSubjectNode = false;
        this.enableExpandGSubjectNode = false;
        this.addToListAction = true;
        this.tableAction = true;
        this.updateAction = true;
    }
    PrerequisiteLessonTopicManageComponent.prototype.ngOnInit = function () {
        this.loadCurriculums();
        this.loadGeneralSubjectList();
    };
    PrerequisiteLessonTopicManageComponent.prototype.loadCurriculums = function () {
        var _this = this;
        this.curriculumService.getCurriculumSearch().subscribe(function (res) { return _this.assignCurriculumList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    PrerequisiteLessonTopicManageComponent.prototype.assignCurriculumList = function (data) {
        this.curriculumList = [];
        for (var i = 0; i < data.length; i++) {
            this.curriculumList.push(data[i]);
        }
    };
    PrerequisiteLessonTopicManageComponent.prototype.onError = function (errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    };
    PrerequisiteLessonTopicManageComponent.prototype.ngAfterViewInit = function () {
        this.showSyllabusDetails();
        this.showGeneralSubjectTreeDetails();
    };
    PrerequisiteLessonTopicManageComponent.prototype.onCurriculumChange = function () {
        var gradesApplicableFrom, gradesApplicableTo;
        if (this.selectedCurriculum) {
            gradesApplicableFrom = this.selectedCurriculum.gradesApplicableFrom;
            gradesApplicableTo = this.selectedCurriculum.gradesApplicableTo;
            this.generateGradeList(gradesApplicableFrom, gradesApplicableTo);
        }
        this.selectedGrade = null;
        this.selectedSubject = null;
    };
    PrerequisiteLessonTopicManageComponent.prototype.onGradeChange = function () {
        var _this = this;
        var curriculumId, gradeId, status;
        if (this.selectedGrade) {
            curriculumId = this.selectedCurriculum.id;
            gradeId = this.selectedGrade.id;
            status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_9__["ACTIVE"];
            this.subjectService
                .getSubjectByCurriculumIdAndGradeId(curriculumId, gradeId, status)
                .subscribe(function (res) { return _this.assignSubjectList(res.body); }, function (res) { return _this.onError(res.message); });
        }
        this.selectedSubject = null;
    };
    PrerequisiteLessonTopicManageComponent.prototype.assignSubjectList = function (data) {
        this.subjectList = [];
        for (var i = 0; i < data.length; i++) {
            this.subjectList.push(data[i]);
        }
    };
    PrerequisiteLessonTopicManageComponent.prototype.generateGradeList = function (min, max) {
        this.gradeList = [];
        for (var i = min; i <= max; i++) {
            this.gradeList.push({
                "id": i,
                "name": i
            });
        }
        return this.gradeList;
    };
    PrerequisiteLessonTopicManageComponent.prototype.loadSubjectTree = function () {
        var _this = this;
        if (this.selectedSubject) {
            var subjectId = this.selectedSubject.id;
            this.subjectTree = [];
            this.pluginService.jsTree("#treeView", this.subjectTree, false);
            if (subjectId) {
                this.subjectService.getSubjectTreeBySubjectId(subjectId).subscribe(function (res) { return _this.assignSubjectTree(res.body); }, function (res) { return _this.onError(res.message); });
            }
            else {
                this.pluginService.alertMessage("Please select a filter and then apply", "error");
            }
        }
    };
    PrerequisiteLessonTopicManageComponent.prototype.assignSubjectTree = function (data) {
        this.subjectTree = data;
        this.pluginService.jsTree("#treeView", this.subjectTree, false);
        this.enableExpandSubjectNode = false;
    };
    PrerequisiteLessonTopicManageComponent.prototype.showSyllabusDetails = function () {
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
                else if (localThisObj.nodeType === "unit") {
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                }
                else if (localThisObj.nodeType === "lesson") {
                    localThisObj.lessonId = data.node.data.id;
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.objective;
                    localThisObj.getLessonTopicList(localThisObj.lessonId);
                }
                else {
                }
            }
        });
    };
    PrerequisiteLessonTopicManageComponent.prototype.getLessonTopicList = function (lessonId) {
        var _this = this;
        this.lessonTopicService
            .getLessonTopicListByLessonId(lessonId)
            .subscribe(function (res) { return _this.assignLessonTopicsList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    PrerequisiteLessonTopicManageComponent.prototype.assignLessonTopicsList = function (data) {
        this.lessonTopicsList = [];
        this.lessonTopicsList = data.lessonPreReqTopics;
        for (var i = 0; i < this.lessonTopicsList.length; i++) {
            var topicId = this.lessonTopicsList[i].topicId;
            var index = i;
            this.getTopicDetails(topicId, index);
        }
        this.sortArrayByOrderNumber(this.lessonTopicsList);
        this.dragUpdateLessonTopicList();
        this.tableAction = true;
        this.updateAction = true;
        this.topicIds = [];
    };
    PrerequisiteLessonTopicManageComponent.prototype.getTopicDetails = function (topicId, index) {
        var _this = this;
        this.lessonTopicService
            .getTopicDetailsByTopicId(topicId)
            .subscribe(function (res) { return _this.assignTopicDetailList(res.body, index); }, function (res) { return _this.onError(res.message); });
    };
    PrerequisiteLessonTopicManageComponent.prototype.assignTopicDetailList = function (data, index) {
        var grade = data.baseGrade;
        this.lessonTopicsList[index].grade = grade;
    };
    PrerequisiteLessonTopicManageComponent.prototype.sortArrayByOrderNumber = function (array) {
        array.sort(function (a, b) { return (a.orderNumber > b.orderNumber) ? 1 : -1; });
    };
    PrerequisiteLessonTopicManageComponent.prototype.toggleTreeNodes = function () {
        this.enableExpandSubjectNode = !this.enableExpandSubjectNode;
        if (this.enableExpandSubjectNode) {
            this.pluginService.openJsTreeAllNodes("#treeView");
        }
        else {
            this.pluginService.closeJsTreeAllNodes("#treeView");
        }
    };
    PrerequisiteLessonTopicManageComponent.prototype.checkSelectedTopics = function (event) {
        var selectedId, checked, index;
        checked = event.target.checked;
        selectedId = Number(event.target.title);
        if (checked === true) {
            this.tableAction = false;
            this.lessonTopicIds.push(selectedId);
        }
        else if (checked === false) {
            index = this.lessonTopicIds.findIndex(function (item) { return item === selectedId; });
            this.lessonTopicIds.splice(index, 1);
        }
        this.lessonTopicIds = this.removeDuplicateElements(this.lessonTopicIds);
        if (this.lessonTopicIds.length <= 0) {
            this.tableAction = true;
        }
    };
    PrerequisiteLessonTopicManageComponent.prototype.removeDuplicateElements = function (array) {
        var temp = [];
        for (var i = 0; i < array.length; i++) {
            if (temp.indexOf(array[i]) == -1) {
                temp.push(array[i]);
            }
        }
        return temp;
    };
    PrerequisiteLessonTopicManageComponent.prototype.deleteLessonTopics = function () {
        var localthisObject = this;
        swal({
            title: "Are you sure to delete lesson topic mapping ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm === true) {
                if (localthisObject.lessonTopicIds.length > 0) {
                    localthisObject.subscribeToDeleteResponse(localthisObject.lessonTopicService.deletePrerequisiteLessonTopicMapping(localthisObject.lessonTopicIds));
                }
            }
        });
    };
    PrerequisiteLessonTopicManageComponent.prototype.subscribeToDeleteResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onDeleteSuccess(res); }, function (errRes) { return _this.onDeleteError(errRes); });
    };
    PrerequisiteLessonTopicManageComponent.prototype.onDeleteSuccess = function (res) {
        this.pluginService.alertMessage("Lesson topic deleted successfully", "success");
        this.tableAction = true;
        this.lessonTopicIds = [];
        this.getLessonTopicList(this.lessonId);
    };
    PrerequisiteLessonTopicManageComponent.prototype.onDeleteError = function (errRes) {
        this.pluginService.alertMessage("Could not delete, please contact admin", "error");
    };
    PrerequisiteLessonTopicManageComponent.prototype.resetSelectedTopic = function () {
        this.lessonTopicIds = [];
        this.tableAction = true;
        $(".checkAll").prop("checked", false);
    };
    PrerequisiteLessonTopicManageComponent.prototype.updateLessonTopicMapping = function (lessonTopics) {
        this.subscribeToUpdateResponse(this.lessonTopicService.updateLessonTopicMapping(lessonTopics));
    };
    PrerequisiteLessonTopicManageComponent.prototype.subscribeToUpdateResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onUpdateSuccess(res); }, function (errRes) { return _this.onUpdateError(errRes); });
    };
    PrerequisiteLessonTopicManageComponent.prototype.onUpdateSuccess = function (res) {
        this.pluginService.alertMessage("Lesson topic mapping updated successfully", "success");
        this.getLessonTopicList(this.lessonId);
    };
    PrerequisiteLessonTopicManageComponent.prototype.onUpdateError = function (errRes) {
        this.pluginService.alertMessage("Could not update, please contact admin", "error");
    };
    PrerequisiteLessonTopicManageComponent.prototype.dragUpdateLessonTopicList = function () {
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
            localThisObj.updateLessonTopicOrder();
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
    PrerequisiteLessonTopicManageComponent.prototype.updateLessonTopicOrder = function () {
        var _this = this;
        this.updateAction = false;
        this.checkOrderNumChange = true;
        var table = document.querySelector('#dragTable');
        var rows = table.querySelectorAll('tbody tr');
        Array.from(rows).forEach(function (row) {
            var list = row.querySelectorAll('td');
            var topicMappingId = Number(list[0].title);
            var newOrderNum = Number(list[1].textContent);
            for (var i = 0; i < _this.lessonTopicsList.length; i++) {
                if (_this.lessonTopicsList[i].id === topicMappingId) {
                    _this.lessonTopicsList[i].orderNumber = newOrderNum;
                    _this.lessonTopicsList[i].id = topicMappingId;
                    break;
                }
            }
            _this.sortArrayByOrderNumber(_this.lessonTopicsList);
        });
    };
    PrerequisiteLessonTopicManageComponent.prototype.updateLessonTopics = function () {
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
                if (localthisObject.checkOrderNumChange) {
                    localthisObject.subscribeToUpdateResponse(localthisObject.lessonTopicService.updatePrerequisiteLessonTopicMapping(localthisObject.lessonTopicsList));
                }
            }
        });
    };
    PrerequisiteLessonTopicManageComponent.prototype.addNewGeneralTopicMapping = function () {
        this.generalSubTopicsList = [];
        this.selectedGeneralSubTopicsList = [];
        this.generalSubjectTree = [];
        this.selectedGeneralSubject = null;
        this.modalNodeType = "";
        this.pluginService.jsTree("#generalSubjectTreeView", this.generalSubjectTree, false);
        this.openTopicMappingModal();
    };
    PrerequisiteLessonTopicManageComponent.prototype.loadGeneralSubjectList = function () {
        var _this = this;
        this.generalSubjectService.getSubjectSearchList().subscribe(function (res) { return _this.assignGeneralSubjectList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    PrerequisiteLessonTopicManageComponent.prototype.assignGeneralSubjectList = function (data) {
        this.generalSubjectList = data;
    };
    PrerequisiteLessonTopicManageComponent.prototype.loadGeneralSubjectTree = function () {
        var _this = this;
        this.generalSubjectTree = [];
        this.modalNodeType = "";
        this.pluginService.jsTree("#generalSubjectTreeView", this.generalSubjectTree, false);
        if (this.selectedGeneralSubject) {
            var generalSubjectId = this.selectedGeneralSubject.id;
            this.generalSubjectService.getSubjectTreeBySubjectId(generalSubjectId).subscribe(function (res) { return _this.assignGeneralSubjectTree(res.body); }, function (res) { return _this.onError(res.message); });
        }
    };
    PrerequisiteLessonTopicManageComponent.prototype.assignGeneralSubjectTree = function (data) {
        this.generalSubjectTree = data;
        this.pluginService.jsTree("#generalSubjectTreeView", this.generalSubjectTree, false);
        this.enableExpandGSubjectNode = false;
    };
    PrerequisiteLessonTopicManageComponent.prototype.showGeneralSubjectTreeDetails = function () {
        var localThisObj = this;
        $('#generalSubjectTreeView')
            .on('changed.jstree', function (e, data) {
            var i, j, conceptId;
            for (i = 0, j = data.selected.length; i < j; i++) {
                localThisObj.modalNodeType = data.node.type;
                if (localThisObj.modalNodeType === "root") {
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                }
                else if (localThisObj.modalNodeType === "concept") {
                    conceptId = data.node.id;
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                    localThisObj.topicIds = [];
                    localThisObj.getTopicsList(conceptId);
                }
                else if (localThisObj.modalNodeType === "topic") {
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                }
                else {
                }
            }
        });
    };
    PrerequisiteLessonTopicManageComponent.prototype.getTopicsList = function (conceptId) {
        var conceptChildrenList;
        conceptChildrenList = this.generalSubjectTree.filter(function (item) { return item.parent === conceptId; });
        this.generalSubTopicsList = conceptChildrenList.filter(function (item) { return item.type === 'topic'; });
        this.disablePreSelectedTopics();
        this.addToListAction = true;
    };
    PrerequisiteLessonTopicManageComponent.prototype.disablePreSelectedTopics = function () {
        if (this.lessonTopicsList.length > 0) {
            for (var i = 0; i < this.lessonTopicsList.length; i++) {
                for (var j = 0; j < this.generalSubTopicsList.length; j++) {
                    if (this.lessonTopicsList[i].topicId === this.generalSubTopicsList[j].data.id) {
                        this.generalSubTopicsList[j].disabled = true;
                    }
                }
            }
        }
    };
    PrerequisiteLessonTopicManageComponent.prototype.checkNewlyAddedTopics = function (event) {
        var selectedId, checked, index;
        checked = event.target.checked;
        selectedId = event.target.name;
        if (checked === true) {
            this.topicIds.push(selectedId);
            this.addToListAction = false;
        }
        else if (checked === false) {
            index = this.topicIds.findIndex(function (item) { return item === selectedId; });
            this.topicIds.splice(index, 1);
        }
        this.topicIds = this.removeDuplicateElements(this.topicIds);
    };
    PrerequisiteLessonTopicManageComponent.prototype.addTopicToList = function () {
        var _this = this;
        var _loop_1 = function (i) {
            this_1.selectedGeneralSubTopicsList.push(this_1.generalSubTopicsList.find(function (item) { return item.id === _this.topicIds[i]; }));
        };
        var this_1 = this;
        for (var i = 0; i < this.topicIds.length; i++) {
            _loop_1(i);
        }
        this.selectedGeneralSubTopicsList = this.removeDuplicateElements(this.selectedGeneralSubTopicsList);
        this.addToListAction = true;
    };
    PrerequisiteLessonTopicManageComponent.prototype.removeFromNewTopicList = function (id) {
        var topicIndex;
        if (this.selectedGeneralSubTopicsList.length > 0) {
            topicIndex = this.selectedGeneralSubTopicsList.findIndex(function (item) { return item.id === id; });
            this.selectedGeneralSubTopicsList.splice(topicIndex, 1);
        }
        else {
            this.selectedGeneralSubTopicsList = [];
        }
    };
    PrerequisiteLessonTopicManageComponent.prototype.toggleGeneralSubjectTreeNodes = function () {
        this.enableExpandGSubjectNode = !this.enableExpandGSubjectNode;
        if (this.enableExpandGSubjectNode) {
            this.pluginService.openJsTreeAllNodes("#generalSubjectTreeView");
        }
        else {
            this.pluginService.closeJsTreeAllNodes("#generalSubjectTreeView");
        }
    };
    PrerequisiteLessonTopicManageComponent.prototype.saveLessonTopicMapping = function () {
        var newLessonTopicsList = [];
        for (var i = 0; i < this.selectedGeneralSubTopicsList.length; i++) {
            newLessonTopicsList.push({
                topicId: this.selectedGeneralSubTopicsList[i].data.id,
                displayName: this.selectedGeneralSubTopicsList[i].data.name,
                lessonId: this.lessonId,
                orderNumber: this.lessonTopicsList.length + i + 1
            });
        }
        if (newLessonTopicsList.length > 0) {
            this.subscribeToSaveResponse(this.lessonTopicService.savePrerequisiteLessonTopicMapping(newLessonTopicsList));
        }
    };
    PrerequisiteLessonTopicManageComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onSaveSuccess(res); }, function (errRes) { return _this.onSaveError(errRes); });
    };
    PrerequisiteLessonTopicManageComponent.prototype.onSaveSuccess = function (res) {
        this.pluginService.alertMessage("Lesson topic mapped successfully", "success");
        this.closeTopicMappingModal();
        this.getLessonTopicList(this.lessonId);
        this.pluginService.jsTree("#generalSubjectTreeView", this.generalSubjectTree, false);
    };
    PrerequisiteLessonTopicManageComponent.prototype.onSaveError = function (errRes) {
        this.pluginService.alertMessage("Could not save, please contact admin", "error");
    };
    PrerequisiteLessonTopicManageComponent.prototype.openTopicMappingModal = function () {
        this.pluginService.showModalWindow("#addNewPrereqTopicMappingModal");
    };
    PrerequisiteLessonTopicManageComponent.prototype.closeTopicMappingModal = function () {
        this.pluginService.hideModalWindow("#addNewPrereqTopicMappingModal");
    };
    PrerequisiteLessonTopicManageComponent.prototype.closeWithOutSavingTopicMapping = function () {
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
                localthisObject.closeTopicMappingModal();
            }
        });
    };
    PrerequisiteLessonTopicManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./prerequisite-lesson-topic-manage.component.html */ "./src/app/syllabus-lesson-topic/prerequisite-lesson-topic/prerequisite-lesson-topic-manage.component.html"),
            providers: [_syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_7__["CurriculumService"],
            _subject_subject_service__WEBPACK_IMPORTED_MODULE_8__["SubjectService"],
            _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"],
            _core__WEBPACK_IMPORTED_MODULE_5__["Principal"],
            _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_10__["GeneralSubjectService"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"]])
    ], PrerequisiteLessonTopicManageComponent);
    return PrerequisiteLessonTopicManageComponent;
}());



/***/ }),

/***/ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/syllabus-lesson-topic.module.ts ***!
  \***********************************************************************/
/*! exports provided: SyllabusLessonTopicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyllabusLessonTopicModule", function() { return SyllabusLessonTopicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _syllabus_lesson_topic_route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./syllabus-lesson-topic.route */ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.route.ts");
/* harmony import */ var _lesson_topic_lesson_topic_manage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lesson-topic/lesson-topic-manage.component */ "./src/app/syllabus-lesson-topic/lesson-topic/lesson-topic-manage.component.ts");
/* harmony import */ var _prerequisite_lesson_topic_prerequisite_lesson_topic_manage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./prerequisite-lesson-topic/prerequisite-lesson-topic-manage.component */ "./src/app/syllabus-lesson-topic/prerequisite-lesson-topic/prerequisite-lesson-topic-manage.component.ts");
/* harmony import */ var _topic_content_topic_content_manage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./topic-content/topic-content-manage.component */ "./src/app/syllabus-lesson-topic/topic-content/topic-content-manage.component.ts");
/* harmony import */ var _topic_question_topic_question_manage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./topic-question/topic-question-manage.component */ "./src/app/syllabus-lesson-topic/topic-question/topic-question-manage.component.ts");
/* harmony import */ var _addl_resource_addl_resource_manage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./addl-resource/addl-resource-manage.component */ "./src/app/syllabus-lesson-topic/addl-resource/addl-resource-manage.component.ts");
/* harmony import */ var _topic_question_topic_question_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./topic-question/topic-question-create.component */ "./src/app/syllabus-lesson-topic/topic-question/topic-question-create.component.ts");
/* harmony import */ var _question_builder_question_builder_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../question-builder/question-builder.module */ "./src/app/question-builder/question-builder.module.ts");
/* harmony import */ var _topic_question_topic_question_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./topic-question/topic-question-details.component */ "./src/app/syllabus-lesson-topic/topic-question/topic-question-details.component.ts");
/* harmony import */ var _topic_question_topic_question_update_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./topic-question/topic-question-update.component */ "./src/app/syllabus-lesson-topic/topic-question/topic-question-update.component.ts");
/* harmony import */ var _lesson_plan_lesson_plan_manage_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lesson-plan/lesson-plan-manage.component */ "./src/app/syllabus-lesson-topic/lesson-plan/lesson-plan-manage.component.ts");



















var SyllabusLessonTopicModule = /** @class */ (function () {
    function SyllabusLessonTopicModule() {
    }
    SyllabusLessonTopicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _question_builder_question_builder_module__WEBPACK_IMPORTED_MODULE_15__["QuestionBuilderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                ng_jhipster__WEBPACK_IMPORTED_MODULE_5__["NgJhipsterModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_syllabus_lesson_topic_route__WEBPACK_IMPORTED_MODULE_8__["syllabusLessonTopicRoute"])
            ],
            declarations: [
                _lesson_topic_lesson_topic_manage_component__WEBPACK_IMPORTED_MODULE_9__["LessonTopicManageComponent"],
                _prerequisite_lesson_topic_prerequisite_lesson_topic_manage_component__WEBPACK_IMPORTED_MODULE_10__["PrerequisiteLessonTopicManageComponent"],
                _lesson_plan_lesson_plan_manage_component__WEBPACK_IMPORTED_MODULE_18__["LessonPlanManageComponent"],
                _topic_content_topic_content_manage_component__WEBPACK_IMPORTED_MODULE_11__["CurriculumTopicContentManageComponent"],
                _topic_question_topic_question_manage_component__WEBPACK_IMPORTED_MODULE_12__["CurriculumTopicQuestionManageComponent"],
                _topic_question_topic_question_create_component__WEBPACK_IMPORTED_MODULE_14__["CurriculumTopicQuestionCreateComponent"],
                _topic_question_topic_question_details_component__WEBPACK_IMPORTED_MODULE_16__["CurriculumTopicQuestionDetailsComponent"],
                _topic_question_topic_question_update_component__WEBPACK_IMPORTED_MODULE_17__["CurriculumTopicQuestionUpdateComponent"],
                _addl_resource_addl_resource_manage_component__WEBPACK_IMPORTED_MODULE_13__["CurriculumAdditionalResourcesManageComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            exports: [
                _topic_question_topic_question_details_component__WEBPACK_IMPORTED_MODULE_16__["CurriculumTopicQuestionDetailsComponent"],
                _topic_question_topic_question_update_component__WEBPACK_IMPORTED_MODULE_17__["CurriculumTopicQuestionUpdateComponent"]
            ]
        })
    ], SyllabusLessonTopicModule);
    return SyllabusLessonTopicModule;
}());



/***/ }),

/***/ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.route.ts":
/*!**********************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/syllabus-lesson-topic.route.ts ***!
  \**********************************************************************/
/*! exports provided: syllabusLessonTopicRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syllabusLessonTopicRoute", function() { return syllabusLessonTopicRoute; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _lesson_topic_lesson_topic_manage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lesson-topic/lesson-topic-manage.component */ "./src/app/syllabus-lesson-topic/lesson-topic/lesson-topic-manage.component.ts");
/* harmony import */ var _prerequisite_lesson_topic_prerequisite_lesson_topic_manage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prerequisite-lesson-topic/prerequisite-lesson-topic-manage.component */ "./src/app/syllabus-lesson-topic/prerequisite-lesson-topic/prerequisite-lesson-topic-manage.component.ts");
/* harmony import */ var _topic_content_topic_content_manage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topic-content/topic-content-manage.component */ "./src/app/syllabus-lesson-topic/topic-content/topic-content-manage.component.ts");
/* harmony import */ var _topic_question_topic_question_manage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topic-question/topic-question-manage.component */ "./src/app/syllabus-lesson-topic/topic-question/topic-question-manage.component.ts");
/* harmony import */ var _addl_resource_addl_resource_manage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addl-resource/addl-resource-manage.component */ "./src/app/syllabus-lesson-topic/addl-resource/addl-resource-manage.component.ts");
/* harmony import */ var _topic_question_topic_question_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./topic-question/topic-question-create.component */ "./src/app/syllabus-lesson-topic/topic-question/topic-question-create.component.ts");
/* harmony import */ var _question_builder_matchlist_matchlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../question-builder/matchlist/matchlist.component */ "./src/app/question-builder/matchlist/matchlist.component.ts");
/* harmony import */ var _question_builder_mcq_choicematrix__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../question-builder/mcq-choicematrix */ "./src/app/question-builder/mcq-choicematrix/index.ts");
/* harmony import */ var _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../question-builder/mcq-standard */ "./src/app/question-builder/mcq-standard/index.ts");
/* harmony import */ var _topic_question_topic_question_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./topic-question/topic-question-details.component */ "./src/app/syllabus-lesson-topic/topic-question/topic-question-details.component.ts");
/* harmony import */ var _topic_question_topic_question_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./topic-question/topic-question-update.component */ "./src/app/syllabus-lesson-topic/topic-question/topic-question-update.component.ts");
/* harmony import */ var _question_builder_cloze_drag_n_drop_drag_n_drop_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../question-builder/cloze/drag-n-drop/drag-n-drop.component */ "./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.ts");
/* harmony import */ var _lesson_plan_lesson_plan_manage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lesson-plan/lesson-plan-manage.component */ "./src/app/syllabus-lesson-topic/lesson-plan/lesson-plan-manage.component.ts");














var syllabusLessonTopicRoute = [
    {
        path: "", redirectTo: "lesson-topic-manage", pathMatch: "full"
    },
    {
        path: "lesson-topic-manage",
        component: _lesson_topic_lesson_topic_manage_component__WEBPACK_IMPORTED_MODULE_1__["LessonTopicManageComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Manage lesson topics'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_0__["UserRouteAccessService"]]
    },
    {
        path: "prerequisite-lesson-topic-manage",
        component: _prerequisite_lesson_topic_prerequisite_lesson_topic_manage_component__WEBPACK_IMPORTED_MODULE_2__["PrerequisiteLessonTopicManageComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Manage prerequisite lesson topics'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_0__["UserRouteAccessService"]]
    },
    {
        path: "topic-content",
        component: _topic_content_topic_content_manage_component__WEBPACK_IMPORTED_MODULE_3__["CurriculumTopicContentManageComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Manage topic content'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_0__["UserRouteAccessService"]]
    },
    {
        path: "topic-question",
        component: _topic_question_topic_question_manage_component__WEBPACK_IMPORTED_MODULE_4__["CurriculumTopicQuestionManageComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Manage topic questions'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_0__["UserRouteAccessService"]]
    },
    {
        path: ":id/topic-question-create",
        component: _topic_question_topic_question_create_component__WEBPACK_IMPORTED_MODULE_6__["CurriculumTopicQuestionCreateComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Create new topic question'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_0__["UserRouteAccessService"]],
        children: [
            {
                path: 'mcqstandard',
                component: _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_9__["MCQStandardComponent"],
                data: {
                    type: "MCQ_SINGLE",
                    title: "Create"
                },
            },
            {
                path: "mcqmultiple",
                component: _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_9__["MCQStandardComponent"],
                data: {
                    type: "MCQ_MULTIPLE",
                    mode: "Create"
                }
            },
            {
                path: "mcqtruefalse",
                component: _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_9__["MCQStandardComponent"],
                data: {
                    type: "MCQ_TRUE_FALSE",
                    title: "Create"
                }
            },
            {
                path: 'mcqchoicematrix',
                component: _question_builder_mcq_choicematrix__WEBPACK_IMPORTED_MODULE_8__["MCQChoiceMatrixComponent"],
                data: {
                    title: "Create",
                    type: "MCQ_CHOICE_MATRIX"
                }
            }, {
                path: "matchlist",
                component: _question_builder_matchlist_matchlist_component__WEBPACK_IMPORTED_MODULE_7__["MatchlistComponent"],
                data: {
                    title: "Create",
                    type: "MCQ_MATCH_LIST"
                }
            },
            {
                path: "clozedrag",
                component: _question_builder_cloze_drag_n_drop_drag_n_drop_component__WEBPACK_IMPORTED_MODULE_12__["DragAndDropComponent"],
                data: {
                    title: "Create",
                    type: "mcq-drag"
                }
            },
        ],
    },
    {
        path: ":id/topic-question-edit",
        component: _topic_question_topic_question_update_component__WEBPACK_IMPORTED_MODULE_11__["CurriculumTopicQuestionUpdateComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Edit topic question'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_0__["UserRouteAccessService"]]
    },
    {
        path: ":id/topic-question-view",
        component: _topic_question_topic_question_details_component__WEBPACK_IMPORTED_MODULE_10__["CurriculumTopicQuestionDetailsComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'View topic question'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_0__["UserRouteAccessService"]]
    },
    {
        path: "additional-resources",
        component: _addl_resource_addl_resource_manage_component__WEBPACK_IMPORTED_MODULE_5__["CurriculumAdditionalResourcesManageComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Manage additional lesson resources'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_0__["UserRouteAccessService"]]
    },
    {
        path: "lesson-plans",
        component: _lesson_plan_lesson_plan_manage_component__WEBPACK_IMPORTED_MODULE_13__["LessonPlanManageComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Manage lesson plan'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_0__["UserRouteAccessService"]]
    }
];


/***/ }),

/***/ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts ***!
  \************************************************************************/
/*! exports provided: SyllabusLessonTopicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyllabusLessonTopicService", function() { return SyllabusLessonTopicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');
var SyllabusLessonTopicService = /** @class */ (function () {
    function SyllabusLessonTopicService(http) {
        this.http = http;
        this.lessonAllDetailsResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/lessons/all-details';
        this.lessonTopicResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/lesson-topics';
        this.prerequisiteLessonTopicResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/lesson-pre-req-topics';
        this.orgGeneralTopicContentSearchResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/org-general-topic-contents/search';
        this.orgGeneralTopicContentResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/org-general-topic-contents';
        this.orgGeneralTopicQuestionResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/org-general-topic-questions';
        this.topicAllDetailsResouceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/general-topics/all-details';
        this.contentPreferenceResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/org-general-topic-contents/set-content-preference';
        this.getContentPreferenceResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/org-general-topic-contents/get-org-content-preference';
        this.orgGeneralTopicQuestionSearchResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/org-general-topic-questions/search';
        this.orgQuestionPreferenceResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/org-general-topic-questions/set-org-questions-preference';
        this.questionPreferenceResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/questions';
        this.getQuestionPreferenceResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/org-general-topic-questions/get-org-questions-preference';
        this.addlResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/lesson-addl-contents';
        this.orgAddlResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/org-lesson-addl-contents';
        this.getAddlResourcePreferenceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/org-lesson-addl-contents/get-org-content-preference';
        this.setAddlResourcePreferenceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/org-lesson-addl-contents/set-content-preference';
        this.contentResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/contents';
        this.topicResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/general-topics';
    }
    SyllabusLessonTopicService.prototype.getLessonTopicListByLessonId = function (id) {
        return this.http.get(this.lessonAllDetailsResourceUrl + "/" + id, { observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.getLessonTopicListByLessonTopicId = function (id) {
        return this.http.get(this.lessonTopicResourceUrl + "/" + id, { observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.getTopicDetailsByTopicId = function (id) {
        return this.http.get(this.topicResourceUrl + "/" + id, { observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.updateLessonTopicMapping = function (lessonTopic) {
        return this.http.put(this.lessonTopicResourceUrl, lessonTopic, { headers: headers, observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.saveLessonTopicMapping = function (topicMapping) {
        return this.http.post(this.lessonTopicResourceUrl, topicMapping, { headers: headers, observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.deleteLessonTopicMapping = function (topicIds) {
        return this.http.delete(this.lessonTopicResourceUrl + "/" + "batch" + "/" + topicIds, { observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.updatePrerequisiteLessonTopicMapping = function (lessonTopic) {
        return this.http.put(this.prerequisiteLessonTopicResourceUrl, lessonTopic, { headers: headers, observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.savePrerequisiteLessonTopicMapping = function (topicMapping) {
        return this.http.post(this.prerequisiteLessonTopicResourceUrl, topicMapping, { headers: headers, observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.deletePrerequisiteLessonTopicMapping = function (topicIds) {
        return this.http.delete(this.prerequisiteLessonTopicResourceUrl + "/" + "batch" + "/" + topicIds, { observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.getTopicDetails = function (id) {
        return this.http.get(this.topicAllDetailsResouceUrl + "/" + id, { observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.getOrgGeneralTopicContentsByOrgId = function (topicId, organisationId) {
        var reqJSON = {
            "generalTopicId": topicId,
            "organisationId": organisationId
        };
        return this.http.post(this.orgGeneralTopicContentSearchResourceUrl, reqJSON, { observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.getOrgGeneralTopicQuestionsByOrgId = function (topicId, organisationId) {
        var reqJSON = {
            "generalTopicId": topicId,
            "organisationId": organisationId
        };
        return this.http.post(this.orgGeneralTopicQuestionSearchResourceUrl, reqJSON, { observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.setContentPreference = function (isActive, generalTopicId, organisationId) {
        var reqJSON = {
            "active": isActive,
            "generalTopicId": generalTopicId,
            "organisationId": organisationId
        };
        return this.http.put(this.contentPreferenceResourceUrl, reqJSON, { observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.getContentPreference = function (organisationId, generalTopicId) {
        var reqJSON = {
            organisationId: organisationId,
            generalTopicId: generalTopicId
        };
        return this.http.post(this.getContentPreferenceResourceUrl, reqJSON, { headers: headers, observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.setQuestionPreference = function (isActive, generalTopicId, organisationId) {
        var reqJSON = {
            "active": isActive,
            "generalTopicId": generalTopicId,
            "organisationId": organisationId
        };
        return this.http.put(this.orgQuestionPreferenceResourceUrl, reqJSON, { observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.getQuestionPreference = function (orgId, topicId) {
        var reqJSON = {
            organisationId: orgId,
            generalTopicId: topicId
        };
        return this.http.post(this.getQuestionPreferenceResourceUrl, reqJSON, { headers: headers, observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.saveOwnTopicContent = function (ownGeneralTopicContents) {
        return this.http.post(this.orgGeneralTopicContentResourceUrl, ownGeneralTopicContents, { headers: headers, observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.updateOwnTopicContents = function (ownGeneralTopicContents) {
        return this.http.put(this.orgGeneralTopicContentResourceUrl, ownGeneralTopicContents, { headers: headers, observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.updateContentSource = function (ownGeneralTopicContent) {
        return this.http.put(this.contentResourceUrl, ownGeneralTopicContent, { headers: headers, observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.deleteOwnTopicContents = function (contentIds) {
        return this.http.delete(this.orgGeneralTopicContentResourceUrl + "/" + "batch" + "/" + contentIds, { observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.deleteOwnTopicQuestions = function (questionIds) {
        return this.http.delete(this.orgGeneralTopicQuestionResourceUrl + "/" + "batch" + "/" + questionIds, { observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.saveOwnTopicQuestion = function (ownGeneralTopicQuestion) {
        return this.http.post(this.orgGeneralTopicQuestionResourceUrl, ownGeneralTopicQuestion, { headers: headers, observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.getQuestionByQuestionId = function (id) {
        return this.http.get(this.questionPreferenceResourceUrl + "/" + id, { observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.updateQuestion = function (question) {
        return this.http.put(this.questionPreferenceResourceUrl, question, { headers: headers, observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.getAddlResource = function (lessonId) {
        var reqJSON = {
            lessonId: lessonId
        };
        return this.http.post(this.addlResourceUrl + '/search', reqJSON, { headers: headers, observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.saveAddlResource = function (addlResource) {
        return this.http.post(this.addlResourceUrl, addlResource, { headers: headers, observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.updateAddlResource = function (addlResources) {
        return this.http.put(this.addlResourceUrl, addlResources, { headers: headers, observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.deleteAddlResource = function (resourceIds) {
        return this.http.delete(this.addlResourceUrl + "/" + resourceIds, { observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.getOrgGeneralAddlResourceByOrganisationId = function (lessonId, organisationId) {
        var reqJSON = {
            lessonId: lessonId,
            organisationId: organisationId
        };
        return this.http.post(this.orgAddlResourceUrl + '/search', reqJSON, { headers: headers, observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.saveOwnAddlResource = function (ownAddlResource) {
        return this.http.post(this.orgAddlResourceUrl, ownAddlResource, { headers: headers, observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.updateOwnAddlResource = function (ownAddlResources) {
        return this.http.put(this.orgAddlResourceUrl, ownAddlResources, { headers: headers, observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.deleteOwnAddlResource = function (resourceIds) {
        return this.http.delete(this.orgAddlResourceUrl + "/" + resourceIds, { observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.setAddlResourcePreference = function (isActive, lessonId, organisationId) {
        var reqJSON = {
            "active": isActive,
            "lessonId": lessonId,
            "organisationId": organisationId
        };
        return this.http.put(this.setAddlResourcePreferenceUrl, reqJSON, { observe: 'response' });
    };
    SyllabusLessonTopicService.prototype.getAddlResourcePreference = function (lessonId, organisationId) {
        var reqJSON = {
            "lessonId": lessonId,
            "organisationId": organisationId
        };
        return this.http.post(this.getAddlResourcePreferenceUrl, reqJSON, { headers: headers, observe: 'response' });
    };
    SyllabusLessonTopicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SyllabusLessonTopicService);
    return SyllabusLessonTopicService;
}());



/***/ }),

/***/ "./src/app/syllabus-lesson-topic/topic-content/topic-content-manage.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/topic-content/topic-content-manage.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 filterbg my-4 rounded\">\n    <div class=\"filtericon font-20\">\n        <i class=\"fa fa-filter\"></i>\n    </div>\n    <div class=\"row d-flex justify-content-start align-items-center\">\n        <div class=\"col-lg-3 mb-3\">\n            <ng-select [items]=\"curriculumList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"acronym\"\n                placeholder=\"Select curriculum\" [(ngModel)]=\"selectedCurriculum\" (change)=\"onCurriculumChange()\">\n            </ng-select>\n        </div>\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedCurriculum\">\n            <ng-select [items]=\"gradeList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedGrade\" (change)=\"onGradeChange()\">\n            </ng-select>\n        </div>\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedGrade\">\n            <ng-select [items]=\"subjectList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"subject\"\n                placeholder=\"Select subject\" [(ngModel)]=\"selectedSubject\" (change)=\"onSubjectChange()\">\n            </ng-select>\n        </div>\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedSubject\">\n            <ng-select [items]=\"lessonList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"text\"\n                placeholder=\"Select lesson\" [(ngModel)]=\"selectedLesson\">\n            </ng-select>\n        </div>\n    </div>\n    <div class=\"d-flex justify-content-end pb-3 row\">\n        <div class=\"col-lg-2\">\n            <button class=\"btn btn-success float-right waves-effect waves-light\" (click)=\"getLessonTopicList()\">\n                <i class=\"fa fa-filter mr-1\"></i>Apply\n            </button>\n        </div>\n    </div>\n</div>\n\n<div class=\"w-100 d-flex justify-content-between align-items-center\" *ngIf=\"showTopicHeading\">\n    <h5 class=\"font-20 mb-2\">Lesson topics</h5>\n    <div class=\"btn btn-primary\" (click)=\"openSubjectTreeModal()\">\n        <i class=\"fa fa-eye mr-2\"></i>\n        View subject tree\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-xxl-3\">\n        <div id=\"topicsList\"></div>\n    </div>\n    <div class=\"col-xxl-9\">\n        <div class=\"py-2\" *ngIf=\"showContentMapping\">\n            <div class=\"d-flex w-100 justify-content-between align-items-center mb-2 flex-wrap\">\n                <div class=\"filterbg p-3 mb-2 w-100\">\n                    <p class=\"font-20\">Content preference for {{topicName}}</p>\n                    <div class=\"row m-0 mb-2\">\n                        <div class=\"col-md-6 radio px-0\">\n                            <input type=\"radio\" id=\"ContentCE\" name=\"content\" [checked]=\"checkContentCE\"\n                                (change)=\"checkContentPreference($event)\">\n                            <label for=\"ContentCE\">Recommended by CE</label>\n                        </div>\n                        <div class=\"col-md-6 radio px-0\">\n                            <input type=\"radio\" id=\"OwnContent\" name=\"content\" [checked]=\"checkOwnContent\"\n                                (change)=\"checkContentPreference($event)\">\n                            <label for=\"OwnContent\">Use\n                                our own content</label>\n                        </div>\n                    </div>\n                    <div class=\"row m-0\">\n                        <div class=\"w-100 d-flex justify-content-end\">\n                            <div class=\"btn btn-success\" (click)=\"saveContentPreference()\">\n                                <i class=\"fa fa-save mr-2\"></i>Save\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"tab w-100\">\n                    <ul class=\"nav nav-tabs\" role=\"tablist\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link show active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\"\n                                aria-controls=\"home\" aria-selected=\"false\">Recommended\n                                by CE </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link show\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\"\n                                aria-controls=\"profile\" aria-selected=\"true\">Recommended by organizations</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link show\" id=\"portfolio-tab\" data-toggle=\"tab\" href=\"#portfolio\" role=\"tab\"\n                                aria-controls=\"portfolio\" aria-selected=\"false\"> Own\n                                content </a>\n                        </li>\n                    </ul>\n                    <div class=\"tab-content\">\n                        <div class=\"tab-pane fade py-3 active show\" id=\"home\" role=\"tabpanel\"\n                            aria-labelledby=\"home-tab\">\n                            <div *ngIf=\"generalTopicContents\">\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\n                                    <thead>\n                                        <tr>\n                                            <th>Order number</th>\n                                            <th>Title</th>\n                                            <th>Active Web URL</th>\n                                            <th>Actions</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr\n                                            *ngFor=\"let topicContent of generalTopicContents;trackBy: trackId;let topicIndex = index\">\n                                            <td data-column=\"Order number\">\n                                                {{topicContent.orderNumber}}\n                                            </td>\n                                            <td data-column=\"Title\">\n                                                {{topicContent.content.title}}\n                                            </td>\n                                            <td data-column=\"Active Web URL\">\n                                                <a class=\"btn btn-link text-ellipsis\"\n                                                    href=\"{{topicContent.content.webUrl}}\" target=\"_blank\">\n                                                    {{topicContent.content.webUrl}}\n                                                </a>\n                                            </td>\n                                            <td data-column=\"Actions\">\n                                                <a class=\"btn btn-outline-info mr-1 mb-1 btn-icon-size\"\n                                                    (click)=\"viewCETopicContent(topicContent.id)\">\n                                                    <i class=\"fa fa-eye\"></i>\n                                                </a>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                        <div class=\"tab-pane fade py-3\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n                            <div class=\"col-12 filterbg py-2 px-4 rounded my-4\">\n                                <div class=\"filtericon font-20\">\n                                    <i class=\"fa fa-filter\"></i>\n                                </div>\n                                <div class=\"row col-xxl-4 mb-3\">\n                                    <ng-select [items]=\"organisations\" class=\"w-100\"\n                                        [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                                        placeholder=\"Select organisation\" [(ngModel)]=\"selectedOrganisation\">\n                                    </ng-select>\n                                </div>\n                                <div class=\"w-100 d-flex justify-content-end\">\n                                    <div class=\"btn btn-success float-right waves-effect waves-light\"\n                                        (click)=\"getOrgTopicContentByOrgId()\">\n                                        <i class=\"fa fa-filter mr-2\"></i>Apply\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div *ngIf=\"orgGeneralTopicContents\">\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\n                                    <thead>\n                                        <tr>\n                                            <th>Order number</th>\n                                            <th>Title</th>\n                                            <th>Active Web URL</th>\n                                            <th>Actions</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr\n                                            *ngFor=\"let orgcontent of orgGeneralTopicContents;trackBy: trackId;let topicIndex = index\">\n                                            <td data-column=\"Order number\">\n                                                {{orgcontent.orderNumber}}\n                                            </td>\n                                            <td data-column=\"Title\">\n                                                {{orgcontent.content.title}}\n                                            </td>\n                                            <td data-column=\"Active Web URL\">\n                                                <a class=\"btn btn-link text-ellipsis\"\n                                                    href=\"{{orgcontent.content.webUrl}}\" target=\"_blank\">\n                                                    {{orgcontent.content.webUrl}}\n                                                </a>\n                                            </td>\n                                            <td data-column=\"Actions\">\n                                                <a class=\"btn btn-outline-info mr-1 mb-1 btn-icon-size\"\n                                                    (click)=\"viewOrgTopicContent(orgcontent.id)\">\n                                                    <i class=\"fa fa-eye\"></i>\n                                                </a>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                        <div class=\"tab-pane fade py-3\" id=\"portfolio\" role=\"tabpanel\" aria-labelledby=\"portfolio-tab\">\n                            <div class=\"row mb-2\">\n                                <div class=\"col-md-12 d-flex justify-content-end\">\n                                    <div class=\"btn btn-primary\" (click)=\"addOwnTopicContent()\">\n                                        <i class=\"fa fa-plus-circle mr-2\"></i> Add new\n                                        content\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"ownTopicContents\">\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\"\n                                    id=\"dragTable\">\n                                    <thead>\n                                        <tr>\n                                            <th>Select</th>\n                                            <th>Order number</th>\n                                            <th>Title</th>\n                                            <th>Active Web URL</th>\n                                            <th>Actions</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody id=\"dragBody\">\n                                        <tr\n                                            *ngFor=\"let topicContent of ownTopicContents;trackBy: trackId;let topicIndex = index\">\n                                            <td data-column=\"Select\" title=\"{{topicContent.id}}\">\n                                                <div class=\"checkbox\">\n                                                    <input type=\"checkbox\" title=\"{{topicContent.id}}\"\n                                                        id=\"{{topicContent.id}}+1\" class=\"checkAll\"\n                                                        (change)=\"checkSelectedOwnContents($event)\">\n                                                    <label for=\"{{topicContent.id}}+1\"></label>\n                                                </div>\n                                            </td>\n                                            <td data-column=\"Order number\" class=\"index\">\n                                                {{topicContent.orderNumber}}\n                                            </td>\n                                            <td data-column=\"Title\">\n                                                {{topicContent.content.title}}\n                                            </td>\n                                            <td data-column=\"Active Web URL\">\n                                                <a class=\"btn btn-link text-ellipsis\"\n                                                    href=\"{{topicContent.content.webUrl}}\" target=\"_blank\">\n                                                    {{topicContent.content.webUrl}}\n                                                </a>\n                                            </td>\n                                            <td data-column=\"Actions\">\n                                                <div>\n                                                    <a class=\"btn btn-outline-info mr-1 mb-1 btn-icon-size\"\n                                                        (click)=\"viewOwnTopicContent(topicContent.id)\">\n                                                        <i class=\"fa fa-eye\"></i>\n                                                    </a>\n                                                    <a class=\"btn btn-outline-success  mr-1 mb-1 btn-icon-size\"\n                                                        (click)=\"editOwnTopicContent(topicContent.id)\">\n                                                        <i class=\"fa fa-edit\"></i>\n                                                    </a>\n                                                </div>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                                <div class=\"mt-3 d-flex w-100 justify-content-end\" *ngIf=\"ownTopicContents.length > 0\">\n                                    <button class=\"btn btn-danger mr-2\" [disabled]=\"tableAction\"\n                                        (click)=\"resetSelectedOwnTopicContent()\">\n                                        <i class=\"fa fa-times mr-2\"></i>Reset\n                                    </button>\n                                    <button class=\"btn btn-danger mr-2\" [disabled]=\"tableAction\"\n                                        (click)=\"deleteOwnTopicContents()\">\n                                        <i class=\"fa fa-trash mr-2\"></i>Delete\n                                    </button>\n                                    <button class=\"btn btn-success\" [disabled]=\"updateAction\"\n                                        (click)=\"updateOwnTopicContentsWithOrderNumber()\">\n                                        <i class=\"fa fa-save mr-2\"></i>Update order\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"topicContentModal\">\n    <div class=\"modal-dialog modal-full-height modal-right modal-notify\" [formGroup]=\"topicContentForm\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\n                <h5 class=\"modal-title text-white\">\n                    {{modalTitleName}} content\n                </h5>\n                <div class=\"close btn btn-xl\" (click)=\"closeTopicContentModalWithOutSaving()\">\n                    <i class=\"fa fa-times\"></i>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                <div *ngIf=\"modalTitleName === 'Add' || modalTitleName === 'Edit'\">\n                    <div class=\"form-group mb-2\">\n                        <label class=\"col-form-label\">Title\n                        </label>\n                        <input type=\"text\" placeholder=\"Enter content name (min length: 3 and max length: 75)\"\n                            class=\"form-control\" formControlName=\"contentTitle\" minlength=\"3\" maxlength=\"75\"\n                            inputRestriction=\"alphabetsNumbersWithMinus\" />\n                        <div class=\"text-muted font-15 my-2\">\n                            Allowed characters - Alphabets, Numbers and One special character (-)\n                        </div>\n                    </div>\n                    <div class=\" form-group mb-2\">\n                        <label class=\"col-form-label\">Description <span class=\"text-muted\">(Optional)</span>\n                        </label>\n                        <textarea class=\"form-control description-form\"\n                            placeholder=\"Enter description (min length: 3 and max length: 250)\"\n                            formControlName=\"contentDescription\"></textarea>\n                        <div class=\"text-muted font-15 my-2\">\n                            Allowed characters - Alphabets, Numbers and Special characters\n                        </div>\n                    </div>\n                    <!-- <div class=\"form-group mb-2\">\n                    <label class=\"col-form-label\">Content type\n                    </label>\n                    <ng-select [items]=\"contentType\" [disabled]=\"disableDropdown\" [ngModelOptions]=\"{standalone: true}\"\n                        bindLabel=\"name\" placeholder=\"Select content type\" [(ngModel)]=\"selectedContentType\"\n                        [searchable]=\"false\">\n                    </ng-select>\n                </div>\n                <div class=\"form-group mb-2\" *ngIf=\"selectedContentType\">\n                    <label class=\"col-form-label\">Content source\n                    </label>\n                    <ng-select [items]=\"contentSource\" [disabled]=\"disableDropdown\"\n                        [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\" placeholder=\"Select content source\"\n                        [(ngModel)]=\"selectedContentSource\" [searchable]=\"false\">\n                    </ng-select>\n                </div> -->\n                    <!-- <div *ngIf=\"selectedContentSource\"> -->\n                    <!-- <div *ngIf=\"selectedContentSource.name === 'File upload'\">\n                        <div class=\"form-group mb-2\" *ngIf=\"selectedContentSource.name === 'File upload'\">\n                            <label class=\"col-form-label\">File\n                            </label>\n                            <div class=\"custom-file\" *ngIf=\"selectedContentType.tag === 'DOCUMENT'\">\n                                <input type=\"file\" (change)=\"onDocumentFileChanges($event)\" id=\"documentFile\" />\n                                <label class=\"custom-file-label\" for=\"documentFile\">\n                                    <i>\n                                        {{fileName}}\n                                    </i></label>\n                            </div>\n                            <div class=\"custom-file\" *ngIf=\"selectedContentType.tag === 'VIDEO'\">\n                                <input type=\"file\" alife-file-to-base64 (onFileChanged)=\"onVideoFileChanges($event)\"\n                                    id=\"videoFile\" />\n                                <label class=\"custom-file-label\" for=\"videoFile\">\n                                    <i>\n                                        {{fileName}}\n                                    </i></label>\n                            </div>\n                            <div class=\" d-flex w-100\" *ngIf=\"modalTitleName !== 'View'\">\n                                <div class=\"text-muted font-15 my-2\" *ngIf=\"selectedContentType.tag === 'DOCUMENT'\">\n                                    Only PDF will allow Max file size - 100 MB\n                                </div>\n                                <div class=\"text-muted font-15 my-2\" *ngIf=\"selectedContentType.tag === 'VIDEO'\">\n                                    Max file size - 200 MB\n                                </div>\n                            </div>\n                            <div class=\"d-flex w-100 my-2\">\n                                <div *ngIf=\"selectedContentType.tag === 'VIDEO'\">\n                                    <div *ngIf=\"modalTitleName !== 'View'\">\n                                        <button class=\"btn btn-warning mr-2\" (click)=\"uploadVideoFile()\"\n                                            *ngIf=\"!uploadedFileName && !uploadedFilePath\">\n                                            <i class=\"fa fa-upload mr-2\"></i>Upload file\n                                        </button>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"selectedContentType.tag === 'DOCUMENT'\">\n                                    <div *ngIf=\"modalTitleName !== 'View'\">\n                                        <button class=\"btn btn-warning mr-2\" (click)=\"uploadDocumentFile()\"\n                                            *ngIf=\"!uploadedFileName && !uploadedFilePath\">\n                                            <i class=\"fa fa-upload mr-2\"></i>Upload file\n                                        </button>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"showFileAction\" class=\"d-flex justify-content-between\">\n                                    <a class=\"btn btn-info mr-2\" (click)=\"downloadFile()\" *ngIf=\"uploadedFileName\">\n                                        <i class=\"fa fa-download mr-2\"></i>{{uploadedFileName}}\n                                    </a>\n                                    <div *ngIf=\" modalTitleName !=='View'\">\n                                        <a class=\" btn btn-danger\" (click)=\"deleteUploadedFile()\"\n                                            *ngIf=\"uploadedFileName\">\n                                            <i class=\"fa fa-trash mr-2\"></i>Delete file\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div> -->\n                    <!-- <div *ngIf=\"selectedContentSource.name !== 'File upload'\"> -->\n                    <div class=\"border p-2 mb-2\">\n                        <div class=\"form-group mb-2\">\n                            <label class=\"col-form-label\">Web URL\n                            </label>\n                            <input type=\"url\" class=\"form-control\"\n                                placeholder=\"Enter web url (minlength: 3 and maxlength: 2048)\" minlength=\"3\"\n                                maxlength=\"2048\" formControlName=\"webUrl1\">\n                            <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\n                                Allowed characters - Alphabets, Numbers and Special characters\n                            </div>\n                        </div>\n                        <div class=\"form-group mb-2\">\n                            <label class=\"col-form-label\">Publisher\n                            </label>\n                            <input type=\"text\" class=\"form-control\"\n                                placeholder=\"Enter publisher (minlength: 3 and maxlength: 50)\"\n                                inputRestriction=\"alphabetsWithSpace\" formControlName=\"publisher1\">\n                            <div class=\"text-muted font-15 my-2\">\n                                Allowed characters - Alphabets\n                            </div>\n                        </div>\n                        <div class=\"form-group mb-2 radio d-flex\">\n                            <input type=\"radio\" name=\"activeUrl\" id=\"webUrl1\" [checked]=\"checkUrl1\"\n                                (click)=\"onActiveWebUrlSelection($event)\" [disabled]=\"disableUrl\">\n                            <label for=\"webUrl1\">is Active</label>\n                        </div>\n                    </div>\n                    <div class=\"border p-2 mb-2\">\n                        <div class=\"form-group mb-2\">\n                            <label class=\"col-form-label\">Web URL <span class=\"text-muted\">\n                                    (Optional)\n                                </span>\n                            </label>\n                            <input type=\"url\" class=\"form-control\"\n                                placeholder=\"Enter web url (minlength: 3 and maxlength: 2048)\" minlength=\"3\"\n                                maxlength=\"2048\" formControlName=\"webUrl2\">\n                            <div class=\"text-muted font-15 my-2\">\n                                Allowed characters - Alphabets, Numbers and Special characters\n                            </div>\n                        </div>\n                        <div class=\"form-group mb-2\">\n                            <label class=\"col-form-label\">Publisher\n                            </label>\n                            <input type=\"text\" class=\"form-control\"\n                                placeholder=\"Enter publisher (minlength: 3 and maxlength: 50)\"\n                                inputRestriction=\"alphabetsWithSpace\" formControlName=\"publisher2\">\n                            <div class=\"text-muted font-15 my-2\">\n                                Allowed characters - Alphabets\n                            </div>\n                        </div>\n                        <div class=\"form-group mb-2 radio d-flex\">\n                            <input type=\"radio\" name=\"activeUrl\" id=\"webUrl2\" [checked]=\"checkUrl2\"\n                                (click)=\"onActiveWebUrlSelection($event)\" [disabled]=\"disableUrl\">\n                            <label for=\"webUrl2\">is Active</label>\n                        </div>\n                    </div>\n                    <div class=\"border p-2 mb-2\">\n                        <div class=\"form-group mb-2\">\n                            <label class=\"col-form-label\">Web URL <span class=\"text-muted\">\n                                    (Optional)\n                                </span>\n                            </label>\n                            <input type=\"url\" class=\"form-control\"\n                                placeholder=\"Enter web url (minlength: 3 and maxlength: 2048)\" minlength=\"3\"\n                                maxlength=\"2048\" formControlName=\"webUrl3\">\n                            <div class=\"text-muted font-15 my-2\">\n                                Allowed characters - Alphabets, Numbers and Special characters\n                            </div>\n                        </div>\n                        <div class=\"form-group mb-2\">\n                            <label class=\"col-form-label\">Publisher\n                            </label>\n                            <input type=\"text\" class=\"form-control\"\n                                placeholder=\"Enter publisher (minlength: 3 and maxlength: 50)\"\n                                inputRestriction=\"alphabetsWithSpace\" formControlName=\"publisher3\">\n                            <div class=\"text-muted font-15 my-2\">\n                                Allowed characters - Alphabets\n                            </div>\n                        </div>\n                        <div class=\"form-group mb-2 radio d-flex\">\n                            <input type=\"radio\" name=\"activeUrl\" id=\"webUrl3\" [checked]=\"checkUrl3\"\n                                (click)=\"onActiveWebUrlSelection($event)\" [disabled]=\"disableUrl\">\n                            <label for=\"webUrl3\">is Active</label>\n                        </div>\n                    </div>\n                    <!-- </div> -->\n                    <!-- </div> -->\n                </div>\n                <div *ngIf=\"modalTitleName === 'View'\">\n                    <div class=\"d-flex justify-content-between w-100\">\n                        <p><b>Title </b></p>\n                        <p>{{contentDetails.content.title}}</p>\n                    </div>\n                    <div class=\"d-flex justify-content-between w-100\" *ngIf=\"contentDetails.content.description\">\n                        <p><b>Description</b></p>\n                        <p>{{contentDetails.content.description}}</p>\n                    </div>\n                    <div *ngIf=\"contentDetails.content.url1\">\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Web URL 1</b></p>\n                            <p>{{contentDetails.content.url1}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Publisher 1</b></p>\n                            <p>{{contentDetails.content.publisher1}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Active 1</b></p>\n                            <div>\n                                <div class=\"radio\">\n                                    <input type=\"radio\" id=\"url1\" name=\"checkActiveURL\" [checked]=\"checkUrl1\"\n                                        [disabled]=\"true\">\n                                    <label for=\"url1\"></label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"contentDetails.content.url2\">\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Web URL 2</b></p>\n                            <p>{{contentDetails.content.url2}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Publisher 2</b></p>\n                            <p>{{contentDetails.content.publisher2}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Active 2</b></p>\n                            <div>\n                                <div class=\"radio\">\n                                    <input type=\"radio\" id=\"url2\" name=\"checkActiveURL\" [checked]=\"checkUrl2\"\n                                        [disabled]=\"true\">\n                                    <label for=\"url2\"></label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"contentDetails.content.url3\">\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Web URL 3</b></p>\n                            <p>{{contentDetails.content.url3}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Publisher 3</b></p>\n                            <p>{{contentDetails.content.publisher3}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Active 3</b></p>\n                            <div>\n                                <div class=\"radio\">\n                                    <input type=\"radio\" id=\"url3\" name=\"checkActiveURL\" [checked]=\"checkUrl3\"\n                                        [disabled]=\"true\">\n                                    <label for=\"url3\"></label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"modalTitleName === 'ViewOrg'\">\n                    <div class=\"d-flex justify-content-between w-100\">\n                        <p><b>Title </b></p>\n                        <p>{{contentDetails.content.title}}</p>\n                    </div>\n                    <div class=\"d-flex justify-content-between w-100\" *ngIf=\"contentDetails.content.description\">\n                        <p><b>Description</b></p>\n                        <p>{{contentDetails.content.description}}</p>\n                    </div>\n                    <div *ngIf=\"contentDetails.content.url1\">\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Web URL 1</b></p>\n                            <p>{{contentDetails.content.url1}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Publisher 1</b></p>\n                            <p>{{contentDetails.content.publisher1}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Active 1</b></p>\n                            <div>\n                                <div class=\"radio\">\n                                    <input type=\"radio\" id=\"url1\" name=\"checkActiveURL\" [checked]=\"checkUrl1\"\n                                        [disabled]=\"true\">\n                                    <label for=\"url1\"></label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"contentDetails.content.url2\">\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Web URL 2</b></p>\n                            <p>{{contentDetails.content.url2}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Publisher 2</b></p>\n                            <p>{{contentDetails.content.publisher2}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Active 2</b></p>\n                            <div>\n                                <div class=\"radio\">\n                                    <input type=\"radio\" id=\"url2\" name=\"checkActiveURL\" [checked]=\"checkUrl2\"\n                                        [disabled]=\"true\">\n                                    <label for=\"url2\"></label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"contentDetails.content.url3\">\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Web URL 3</b></p>\n                            <p>{{contentDetails.content.url3}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Publisher 3</b></p>\n                            <p>{{contentDetails.content.publisher3}}</p>\n                        </div>\n                        <div class=\"d-flex justify-content-between w-100\">\n                            <p><b>Active 3</b></p>\n                            <div>\n                                <div class=\"radio\">\n                                    <input type=\"radio\" id=\"url3\" name=\"checkActiveURL\" [checked]=\"checkUrl3\"\n                                        [disabled]=\"true\">\n                                    <label for=\"url3\"></label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <div *ngIf=\"modalTitleName === 'Add' || modalTitleName === 'Edit'\">\n                    <div class=\"btn btn-danger\" (click)=\"cancelTopicContent()\">\n                        <i class=\"fa fa-times mr-2\"></i>\n                        Reset\n                    </div>\n                </div>\n\n                <div *ngIf=\"modalTitleName === 'Add'\">\n                    <button class=\"btn btn-success\" (click)=\"saveTopicContent()\" [disabled]=\"validateForm\">\n                        <i class=\"fa fa-save mr-2\"></i>\n                        Save\n                    </button>\n                </div>\n\n                <div *ngIf=\"modalTitleName === 'Edit'\">\n                    <button class=\"btn btn-success\" (click)=\"updateTopicContents()\" [disabled]=\"validateForm\">\n                        <i class=\"fa fa-save mr-2\"></i>\n                        Save\n                    </button>\n                </div>\n\n                <div *ngIf=\"modalTitleName === 'View'|| modalTitleName === 'ViewOrg' \">\n                    <button class=\"btn btn-danger\" (click)=\"closeTopicContentModal()\">\n                        <i class=\"fa fa-times mr-2\"></i>\n                        Close\n                    </button>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"viewSubjectTreeModal\">\n    <div class=\"modal-dialog modal-full-height modal-right modal-notify\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\n                <h5 class=\"modal-title text-white\">\n                    View subject tree\n                </h5>\n                <div class=\"close btn btn-xl\" (click)=\"closeSubjectTreeModal()\">\n                    <i class=\"fa fa-times\"></i>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"subjectTree.length > 1\">\n                    <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\n                        <i class=\"fa fa-clone mr-2\"></i>\n                        <span *ngIf=\"enableExpandNode === false\">\n                            Expand all\n                        </span>\n                        <span *ngIf=\"enableExpandNode === true\">\n                            Collapse all\n                        </span>\n                    </div>\n                </div>\n                <div id=\"viewTree\"></div>\n            </div>\n            <div class=\"modal-footer d-flex justify-content-end align-items-start\">\n                <button class=\"btn btn-danger\" (click)=\"closeSubjectTreeModal()\">\n                    <i class=\"fa fa-times mr-2\"></i>\n                    Close\n                </button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/syllabus-lesson-topic/topic-content/topic-content-manage.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/topic-content/topic-content-manage.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CurriculumTopicContentManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumTopicContentManageComponent", function() { return CurriculumTopicContentManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../syllabus-lesson-topic.service */ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/user-login-info/user-login-info.service */ "./src/app/shared/user-login-info/user-login-info.service.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _subject_subject_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../subject/subject.service */ "./src/app/subject/subject.service.ts");
/* harmony import */ var _organisation_organisation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../organisation/organisation.service */ "./src/app/organisation/organisation.service.ts");
/* harmony import */ var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../curriculum/curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/file-management/file-management.service */ "./src/app/shared/file-management/file-management.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_16__);

















var CurriculumTopicContentManageComponent = /** @class */ (function () {
    function CurriculumTopicContentManageComponent(_router, activatedRoute, subjectService, curriculumService, organisationService, topicContentService, eventManager, parseLinks, principalService, formBuilder, pluginService, userLoginService, commonService, changeDetectRef, fileService) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.subjectService = subjectService;
        this.curriculumService = curriculumService;
        this.organisationService = organisationService;
        this.topicContentService = topicContentService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.userLoginService = userLoginService;
        this.commonService = commonService;
        this.changeDetectRef = changeDetectRef;
        this.fileService = fileService;
        this.curriculumList = [];
        this.gradeList = [];
        this.subjectList = [];
        this.subjectTree = [];
        this.lessonList = [];
        this.organisations = [];
        this.contentDetails = {};
        this.generalTopicContents = [];
        this.ownTopicContents = [];
        this.orgGeneralTopicContents = [];
        this.contentIds = [];
        this.originDetails = [];
        this.hostedDetails = [];
        this.contentType = [];
        this.contentSource = [];
        this.selectedFile = null;
        this.checkContentCE = false;
        this.contentPreferenceStatus = false;
        this.enableExpandNode = false;
        this.validateForm = true;
        this.tableAction = true;
        this.updateAction = true;
        this.checkUrl1 = true;
    }
    CurriculumTopicContentManageComponent.prototype.ngOnInit = function () {
        this.loadCurriculums();
        this.createTopicContentForm();
        this.getContentType();
        this.getContentSource();
    };
    CurriculumTopicContentManageComponent.prototype.createTopicContentForm = function () {
        this.topicContentForm = this.formBuilder.group({
            contentTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(75)]),
            contentDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(250)]),
            webUrl1: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(2048)]),
            publisher1: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(50)]),
            webUrl2: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(2048)]),
            publisher2: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(50)]),
            webUrl3: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(2048)]),
            publisher3: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(50)])
        });
    };
    Object.defineProperty(CurriculumTopicContentManageComponent.prototype, "contentFormControl", {
        get: function () { return this.topicContentForm.controls; },
        enumerable: true,
        configurable: true
    });
    //TODO: load org specific curriculums if user belongs to a org ELSE IF the user is CognitoED content admin/system 
    //admin load all the standard curriculum
    CurriculumTopicContentManageComponent.prototype.loadCurriculums = function () {
        var _this = this;
        this.curriculumService.getCurriculumSearch().subscribe(function (res) { return _this.assignCurriculumList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    CurriculumTopicContentManageComponent.prototype.assignCurriculumList = function (data) {
        this.curriculumList = [];
        for (var i = 0; i < data.length; i++) {
            this.curriculumList.push(data[i]);
        }
    };
    CurriculumTopicContentManageComponent.prototype.onError = function (errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    };
    CurriculumTopicContentManageComponent.prototype.getContentType = function () {
        var _this = this;
        this.commonService.getContentTypeList().subscribe(function (typeData) {
            _this.contentType = typeData;
        });
    };
    CurriculumTopicContentManageComponent.prototype.getContentSource = function () {
        var _this = this;
        this.commonService.getContentSourceList().subscribe(function (sourceData) {
            _this.contentSource = sourceData;
        });
    };
    CurriculumTopicContentManageComponent.prototype.ngAfterViewInit = function () {
        this.nodeOnSelection();
    };
    CurriculumTopicContentManageComponent.prototype.onCurriculumChange = function () {
        var gradesApplicableFrom, gradesApplicableTo;
        if (this.selectedCurriculum) {
            gradesApplicableFrom = this.selectedCurriculum.gradesApplicableFrom;
            gradesApplicableTo = this.selectedCurriculum.gradesApplicableTo;
            this.generateGradeList(gradesApplicableFrom, gradesApplicableTo);
        }
        this.selectedGrade = null;
        this.selectedSubject = null;
        this.selectedLesson = null;
    };
    CurriculumTopicContentManageComponent.prototype.onGradeChange = function () {
        var _this = this;
        var curriculumId, gradeId, status;
        if (this.selectedGrade) {
            curriculumId = this.selectedCurriculum.id;
            gradeId = this.selectedGrade.id;
            status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_14__["ACTIVE"];
            this.subjectService
                .getSubjectByCurriculumIdAndGradeId(curriculumId, gradeId, status)
                .subscribe(function (res) { return _this.assignSubjectList(res.body); }, function (res) { return _this.onError(res.message); });
        }
        this.selectedSubject = null;
        this.selectedLesson = null;
    };
    CurriculumTopicContentManageComponent.prototype.assignSubjectList = function (data) {
        $("#subject").val("").trigger('change');
        this.subjectList = [];
        this.subjectTree = [];
        this.pluginService.jsTree("#viewTree", this.subjectTree, false);
        for (var i = 0; i < data.length; i++) {
            this.subjectList.push(data[i]);
        }
    };
    CurriculumTopicContentManageComponent.prototype.onSubjectChange = function () {
        if (this.selectedSubject) {
            var subjectId = this.selectedSubject.id;
            this.loadSubjectTree(subjectId);
        }
        this.selectedLesson = null;
    };
    CurriculumTopicContentManageComponent.prototype.onActiveWebUrlSelection = function (event) {
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
    CurriculumTopicContentManageComponent.prototype.onVideoFileChanges = function (event) {
        var splitType;
        this.selectedFile = event[0];
        splitType = this.selectedFile.type.split('/');
        this.fileType = splitType[0];
        this.fileName = this.selectedFile.name;
        if ((this.fileType === "video") && (this.selectedFile.size > 209715200)) {
            this.pluginService.alertMessage("Please upload file size lesser than 200 MB", "error");
        }
    };
    CurriculumTopicContentManageComponent.prototype.uploadVideoFile = function () {
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
                                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
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
    CurriculumTopicContentManageComponent.prototype.onDocumentFileChanges = function (event) {
        this.selectedFile = event.target.files;
        this.fileName = this.selectedFile[0].name;
        if ((this.selectedFile[0].type === "application/pdf") && (this.selectedFile[0].size > 104857600)) {
            this.pluginService.alertMessage("Please upload file size lesser than 100 MB", "error");
        }
    };
    CurriculumTopicContentManageComponent.prototype.uploadDocumentFile = function () {
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
                                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
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
    CurriculumTopicContentManageComponent.prototype.downloadFile = function () {
        if (this.uploadedFileName) {
            this.subscribeToDownloadResponse(this.fileService.downloadFiles(this.uploadedFileName));
        }
    };
    CurriculumTopicContentManageComponent.prototype.subscribeToDownloadResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onDownloadSuccess(res); }, function (errRes) { return _this.onDownloadError(errRes); });
    };
    CurriculumTopicContentManageComponent.prototype.onDownloadSuccess = function (resp) {
        if (resp.body) {
            var downloadFilePath = Object.values(resp.body)[0];
            Object(file_saver__WEBPACK_IMPORTED_MODULE_16__["saveAs"])(downloadFilePath);
        }
    };
    CurriculumTopicContentManageComponent.prototype.onDownloadError = function (error) {
        this.pluginService.alertMessage("Error in downloading file", "error");
    };
    CurriculumTopicContentManageComponent.prototype.checkContentType = function () {
        this.closeTopicContentModal();
        if (this.selectedContentSource) {
            if (this.selectedContentSource.tag === 'FILE_UPLOAD') {
                if (this.uploadedFilePath) {
                    this.deleteUploadedFile();
                }
            }
        }
    };
    CurriculumTopicContentManageComponent.prototype.deleteUploadedFile = function () {
        this.subscribeToDeleteFiletResponse(this.fileService.deleteUploadedFile(this.uploadedFileName));
    };
    CurriculumTopicContentManageComponent.prototype.subscribeToDeleteFiletResponse = function (resp) {
        var _this = this;
        resp.subscribe(function (res) { return _this.onDeleteFileSuccess(res); }, function (res) { return _this.onDeleteError(res); });
    };
    CurriculumTopicContentManageComponent.prototype.onDeleteFileSuccess = function (resp) {
        this.fileName = "No file chosen";
        this.uploadedFileName = "";
        this.uploadedFilePath = "";
        this.pluginService.alertMessage("File deleted successfully", "success");
    };
    CurriculumTopicContentManageComponent.prototype.generateGradeList = function (min, max) {
        this.gradeList = [];
        for (var i = min; i <= max; i++) {
            this.gradeList.push({
                "id": i,
                "name": i
            });
        }
        return this.gradeList;
    };
    CurriculumTopicContentManageComponent.prototype.loadSubjectTree = function (subjectId) {
        var _this = this;
        this.subjectService.getSubjectTreeBySubjectId(subjectId).subscribe(function (res) { return _this.assignSubjectTree(res.body); }, function (res) { return _this.onError(res.message); });
    };
    CurriculumTopicContentManageComponent.prototype.assignSubjectTree = function (data) {
        this.lessonList = [];
        $("#lesson").val("").trigger('change');
        this.subjectTree = data;
        this.lessonList = this.subjectTree.filter(function (item) { return item.type === 'lesson'; });
        this.pluginService.jsTree("#viewTree", this.subjectTree, false);
    };
    CurriculumTopicContentManageComponent.prototype.getLessonTopicList = function () {
        var _this = this;
        if (this.selectedLesson) {
            var lessonId = this.selectedLesson.data.id;
            if (lessonId) {
                this.topicContentService
                    .getLessonTopicListByLessonId(lessonId)
                    .subscribe(function (res) { return _this.assignLessonTopicsList(res.body); }, function (res) { return _this.onError(res.message); });
            }
            else {
                this.pluginService.alertMessage("Please select a filter and then apply", "error");
            }
        }
    };
    CurriculumTopicContentManageComponent.prototype.assignLessonTopicsList = function (data) {
        var topicsList = [], treeTopicsList = [];
        topicsList = data.lessonTopics;
        for (var i = 0; i < topicsList.length; i++) {
            treeTopicsList.push({
                text: topicsList[i].topicName,
                generalTopicId: topicsList[i].generalTopicId,
                id: topicsList[i].id,
            });
        }
        this.enableExpandNode = false;
        this.pluginService.jsTree("#topicsList", treeTopicsList, false);
        this.showContentMapping = false;
        this.showTopicHeading = true;
    };
    CurriculumTopicContentManageComponent.prototype.trimValue = function (value) {
        if (value === null || value === undefined) {
            return value;
        }
        else {
            return value.trim();
        }
    };
    CurriculumTopicContentManageComponent.prototype.ngAfterViewChecked = function () {
        this.validateTopicContentForm();
        this.changeDetectRef.detectChanges();
    };
    CurriculumTopicContentManageComponent.prototype.validateTopicContentForm = function () {
        var contentName, webURL1, webURL2, webURL3;
        contentName = this.trimValue(this.topicContentForm.value.contentTitle);
        webURL1 = this.trimValue(this.topicContentForm.value.webUrl1);
        webURL2 = this.trimValue(this.topicContentForm.value.webUrl2);
        webURL3 = this.trimValue(this.topicContentForm.value.webUrl3);
        if (contentName === "" || contentName === undefined || contentName === null) {
            this.validateForm = true;
        }
        if ((this.uploadedFilePath === "" || this.uploadedFilePath === undefined || this.uploadedFilePath === null)) {
            this.validateForm = true;
        }
        if (this.topicContentForm.valid) {
            this.validateForm = false;
        }
        if (this.topicContentForm.invalid) {
            this.validateForm = true;
        }
        if (this.checkUrl1 === true) {
            if ((webURL1 === "" || webURL1 === undefined || webURL1 === null)) {
                this.validateForm = true;
            }
        }
        if (this.checkUrl2 === true) {
            if ((webURL2 === "" || webURL2 === undefined || webURL2 === null)) {
                this.validateForm = true;
            }
        }
        if (this.checkUrl3 === true) {
            if ((webURL3 === "" || webURL3 === undefined || webURL3 === null)) {
                this.validateForm = true;
            }
        }
    };
    CurriculumTopicContentManageComponent.prototype.nodeOnSelection = function () {
        var localThisObj = this;
        $('#topicsList')
            .on('changed.jstree', function (e, data) {
            var i, j;
            for (i = 0, j = data.selected.length; i < j; i++) {
                localThisObj.generalTopicId = data.node.original.generalTopicId;
                localThisObj.topicName = data.node.original.text;
                localThisObj.generalTopicContents = [];
                localThisObj.orgGeneralTopicContents = [];
                localThisObj.ownTopicContents = [];
                localThisObj.getTopicContentList(localThisObj.generalTopicId);
                localThisObj.getOrgGeneralTopicContentByOrganisationId(localThisObj.generalTopicId);
                localThisObj.getOrganisationList();
                localThisObj.getContentPreference(localThisObj.generalTopicId);
                localThisObj.showContentMapping = true;
                localThisObj.selectedOrganisation = null;
                localThisObj.updateAction = true;
                localThisObj.tableAction = true;
            }
        });
    };
    CurriculumTopicContentManageComponent.prototype.getTopicContentList = function (generalTopicId) {
        var _this = this;
        this.topicContentService.getTopicDetails(generalTopicId).subscribe(function (res) { return _this.assignResponseToTopicList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    CurriculumTopicContentManageComponent.prototype.assignResponseToTopicList = function (data) {
        this.generalTopicContents = [];
        this.ownTopicContents = [];
        this.generalTopicContents = data.generalTopicContents;
        this.sortArrayByOrderNumber(this.generalTopicContents);
        this.ownTopicContents = data.orgGeneralTopicContents;
        this.sortArrayByOrderNumber(this.ownTopicContents);
        if (this.ownTopicContents.length > 0 || this.generalTopicContents.length > 0) {
            this.dragTableContent();
        }
    };
    CurriculumTopicContentManageComponent.prototype.getOrgGeneralTopicContentByOrganisationId = function (generalTopicId) {
        var _this = this;
        //User login Information for organisationId 
        this.organisationId = this.userLoginService.organisationId;
        this.topicContentService.getOrgGeneralTopicContentsByOrgId(generalTopicId, this.organisationId).subscribe(function (res) { return _this.assignResponseToOrgTopicList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    CurriculumTopicContentManageComponent.prototype.assignResponseToOrgTopicList = function (data) {
        this.orgGeneralTopicContents = [];
        this.orgGeneralTopicContents = data;
        this.sortArrayByOrderNumber(this.orgGeneralTopicContents);
    };
    CurriculumTopicContentManageComponent.prototype.getOrgTopicContentByOrgId = function () {
        var _this = this;
        var organisationId = this.selectedOrganisation.id;
        this.topicContentService.getOrgGeneralTopicContentsByOrgId(this.generalTopicId, organisationId).subscribe(function (res) { return _this.assignResponseToOrgTopicContentListByOrgId(res.body); }, function (res) { return _this.onError(res.message); });
    };
    CurriculumTopicContentManageComponent.prototype.assignResponseToOrgTopicContentListByOrgId = function (data) {
        this.orgGeneralTopicContents = [];
        this.orgGeneralTopicContents = data;
    };
    CurriculumTopicContentManageComponent.prototype.checkContentPreference = function (event) {
        var check = event.target.checked;
        var name = event.target.id;
        if (check === true && name === "ContentCE") {
            this.contentPreferenceStatus = false;
        }
        else if (check === true && name === "OwnContent") {
            this.contentPreferenceStatus = true;
        }
    };
    CurriculumTopicContentManageComponent.prototype.saveContentPreference = function () {
        if (this.contentPreferenceStatus === false) {
            if (this.generalTopicContents.length <= 0) {
                this.pluginService.alertMessage("Before set content preference atleast one general topic content is mandatory", "error");
            }
            else {
                this.setContentPreference();
            }
        }
        else if (this.contentPreferenceStatus === true) {
            if (this.ownTopicContents.length <= 0) {
                this.pluginService.alertMessage("Please add atleast one own topic content and do preference", "error");
            }
            else {
                this.setContentPreference();
            }
        }
    };
    CurriculumTopicContentManageComponent.prototype.setContentPreference = function () {
        var _this = this;
        this.topicContentService.setContentPreference(this.contentPreferenceStatus, this.generalTopicId, this.organisationId).subscribe(function (res) { return _this.onSuccess(res.body); }, function (res) { return _this.onError(res.message); });
    };
    CurriculumTopicContentManageComponent.prototype.onSuccess = function (data) {
        this.pluginService.alertMessage("Content preference saved successfully", "success");
    };
    CurriculumTopicContentManageComponent.prototype.getContentPreference = function (generalTopicId) {
        var _this = this;
        //User login Information for organisationId 
        var orgId = this.userLoginService.organisationId;
        this.topicContentService.getContentPreference(orgId, generalTopicId).subscribe(function (res) { return _this.onGetPreferenceSuccess(res.body); }, function (res) { return _this.onError(res.message); });
    };
    CurriculumTopicContentManageComponent.prototype.onGetPreferenceSuccess = function (acitveStatus) {
        if (acitveStatus === "" || acitveStatus === null || acitveStatus === false) {
            this.checkContentCE = true;
            this.checkOwnContent = false;
        }
        else if (acitveStatus === true) {
            this.checkContentCE = false;
            this.checkOwnContent = true;
        }
    };
    CurriculumTopicContentManageComponent.prototype.openSubjectTreeModal = function () {
        this.pluginService.showModalWindow("#viewSubjectTreeModal");
    };
    CurriculumTopicContentManageComponent.prototype.closeSubjectTreeModal = function () {
        this.pluginService.hideModalWindow("#viewSubjectTreeModal");
    };
    CurriculumTopicContentManageComponent.prototype.getOrganisationList = function () {
        var _this = this;
        this.organisationService.getOrganisations().subscribe(function (res) { return _this.assignOrgList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    CurriculumTopicContentManageComponent.prototype.assignOrgList = function (data) {
        this.organisations = data;
    };
    CurriculumTopicContentManageComponent.prototype.addOwnTopicContent = function () {
        this.modalTitleName = "Add";
        this.openTopicContentModal();
        this.resetFormValues();
        this.validateForm = false;
        this.disableDropdown = false;
        this.selectedContentSource = null;
        this.selectedContentType = null;
    };
    CurriculumTopicContentManageComponent.prototype.viewCETopicContent = function (contentId) {
        var contentDetails = [], contentDetail = {};
        contentDetails = this.generalTopicContents.filter(function (item) { return item.id === contentId; });
        contentDetail = contentDetails[0];
        this.modalTitleName = "View";
        this.getContentDetails(contentDetail);
        this.openTopicContentModal();
    };
    CurriculumTopicContentManageComponent.prototype.patchCEContentFormfields = function (contentDetails) {
        this.contentId = contentDetails.id;
        this.topicContentForm.patchValue({
            contentTitle: contentDetails.content.title,
            contentDescription: contentDetails.content.description,
            webUrl1: contentDetails.content.url1,
            publisher1: contentDetails.publisher1,
            webUrl2: contentDetails.content.url2,
            publisher2: contentDetails.content.publisher2,
            webUrl3: contentDetails.content.url3,
            publisher3: contentDetails.content.publisher3
        });
        this.selectedContentType = this.contentType.filter(function (item) { return item.tag === contentDetails.content.contentType; })[0];
        this.selectedContentSource = this.contentSource.filter(function (item) { return item.tag === contentDetails.content.contentSource; })[0];
        if (contentDetails.content.webUrl == contentDetails.content.url1) {
            this.checkUrl1 = true;
            this.checkUrl2 = false;
            this.checkUrl3 = false;
        }
        else if (contentDetails.content.webUrl == contentDetails.content.url2) {
            this.checkUrl2 = true;
            this.checkUrl3 = false;
            this.checkUrl1 = false;
        }
        else if (contentDetails.content.webUrl == contentDetails.content.url3) {
            this.checkUrl3 = true;
            this.checkUrl2 = false;
            this.checkUrl1 = false;
        }
        else {
            this.checkUrl1 = false;
            this.checkUrl2 = false;
            this.checkUrl3 = false;
        }
    };
    CurriculumTopicContentManageComponent.prototype.viewOrgTopicContent = function (contentId) {
        var contentDetails = [], contentDetail = {};
        contentDetails = this.orgGeneralTopicContents.filter(function (item) { return item.id === contentId; });
        contentDetail = contentDetails[0];
        this.modalTitleName = "ViewOrg";
        this.getOwnContentDetails(contentDetail);
        this.openTopicContentModal();
    };
    CurriculumTopicContentManageComponent.prototype.editOwnTopicContent = function (contentId) {
        var contentDetails = [], contentDetail = {};
        contentDetails = this.ownTopicContents.filter(function (item) { return item.id === contentId; });
        contentDetail = contentDetails[0];
        this.modalTitleName = "Edit";
        this.patchContentFormfields(contentDetail);
        this.openTopicContentModal();
    };
    CurriculumTopicContentManageComponent.prototype.viewOwnTopicContent = function (contentId) {
        var contentDetails = [], topicContent = {};
        var contentDetail = {};
        contentDetail = topicContent.content;
        contentDetails = this.ownTopicContents.filter(function (item) { return item.id === contentId; });
        contentDetail = contentDetails[0];
        this.modalTitleName = "ViewOrg";
        this.getOwnContentDetails(contentDetail);
        this.openTopicContentModal();
    };
    CurriculumTopicContentManageComponent.prototype.getContentDetails = function (contentDetail) {
        this.contentDetails = contentDetail;
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
    };
    CurriculumTopicContentManageComponent.prototype.getOwnContentDetails = function (contentDetail) {
        this.contentDetails = contentDetail;
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
    };
    CurriculumTopicContentManageComponent.prototype.patchContentFormfields = function (contentDetails) {
        this.contentId = contentDetails.content.id;
        this.topicContentForm.patchValue({
            contentTitle: contentDetails.content.title,
            contentDescription: contentDetails.content.description,
            webUrl1: contentDetails.content.url1,
            publisher1: contentDetails.content.publisher1,
            webUrl2: contentDetails.content.url2,
            publisher2: contentDetails.content.publisher2,
            webUrl3: contentDetails.content.url3,
            publisher3: contentDetails.content.publisher3
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
    CurriculumTopicContentManageComponent.prototype.saveTopicContent = function () {
        if (this.topicContentForm.valid) {
            var ownGeneralTopicContents = [], topiccontent = {}, contentDetail = topiccontent.content;
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
            ownGeneralTopicContents.push({
                organisationId: this.userLoginService.organisationId,
                generalTopicId: this.generalTopicId,
                content: contentDetail,
                orderNumber: this.ownTopicContents.length + 1
            });
            this.saveTopicContents(ownGeneralTopicContents);
        }
        if (this.topicContentForm.invalid) {
            this.validateForm = true;
        }
    };
    CurriculumTopicContentManageComponent.prototype.saveTopicContents = function (ownGeneralTopicContents) {
        this.subscribeToSaveResponse(this.topicContentService.saveOwnTopicContent(ownGeneralTopicContents));
    };
    CurriculumTopicContentManageComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onSaveSuccess(res); }, function (errRes) { return _this.onSaveError(errRes); });
    };
    CurriculumTopicContentManageComponent.prototype.onSaveSuccess = function (res) {
        this.pluginService.alertMessage("Topic content created successfully", "success");
        this.resetFormValues();
        this.closeTopicContentModal();
        this.getTopicContentList(this.generalTopicId);
    };
    CurriculumTopicContentManageComponent.prototype.onSaveError = function (errRes) {
        this.pluginService.alertMessage("Could not save, please contact admin", "error");
    };
    CurriculumTopicContentManageComponent.prototype.updateTopicContents = function () {
        if (this.topicContentForm.valid) {
            var contentDetail = {};
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
            this.subscribeToUpdateResponse(this.topicContentService.updateContentSource(contentDetail));
        }
        if (this.topicContentForm.invalid) {
            this.validateForm = true;
        }
    };
    CurriculumTopicContentManageComponent.prototype.subscribeToUpdateResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onUpdateSuccess(res); }, function (errRes) { return _this.onUpdateError(errRes); });
    };
    CurriculumTopicContentManageComponent.prototype.onUpdateSuccess = function (res) {
        this.pluginService.alertMessage("Topic content updated successfully", "success");
        this.resetFormValues();
        this.closeTopicContentModal();
        this.getTopicContentList(this.generalTopicId);
    };
    CurriculumTopicContentManageComponent.prototype.onUpdateError = function (errRes) {
        this.pluginService.alertMessage("Could not save, please contact admin", "error");
    };
    CurriculumTopicContentManageComponent.prototype.openTopicContentModal = function () {
        this.pluginService.showModalWindow("#topicContentModal");
    };
    CurriculumTopicContentManageComponent.prototype.closeTopicContentModal = function () {
        this.pluginService.hideModalWindow("#topicContentModal");
    };
    CurriculumTopicContentManageComponent.prototype.resetFormValues = function () {
        this.topicContentForm.reset();
    };
    CurriculumTopicContentManageComponent.prototype.dragTableContent = function () {
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
    CurriculumTopicContentManageComponent.prototype.updateTopicContentOrder = function () {
        var _this = this;
        this.updateAction = false;
        this.checkOrderNumChange = true;
        var table = document.querySelector('#dragTable');
        var rows = table.querySelectorAll('tbody tr');
        Array.from(rows).forEach(function (row) {
            var list = row.querySelectorAll('td');
            var contentId = Number(list[0].title);
            var newOrderNum = Number(list[1].textContent);
            for (var i = 0; i < _this.ownTopicContents.length; i++) {
                if (_this.ownTopicContents[i].id === contentId) {
                    _this.ownTopicContents[i].orderNumber = newOrderNum;
                    break;
                }
            }
            _this.sortArrayByOrderNumber(_this.ownTopicContents);
        });
    };
    CurriculumTopicContentManageComponent.prototype.updateOwnTopicContentsWithOrderNumber = function () {
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
                    localthisObject.subscribeToUpdateTopicContentResponse(localthisObject.topicContentService.updateOwnTopicContents(localthisObject.ownTopicContents));
                }
            }
        });
    };
    CurriculumTopicContentManageComponent.prototype.subscribeToUpdateTopicContentResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onUpdateTopicContentSuccess(res); }, function (errRes) { return _this.onUpdateTopicContentError(errRes); });
    };
    CurriculumTopicContentManageComponent.prototype.onUpdateTopicContentSuccess = function (res) {
        this.pluginService.alertMessage("Topic content order updated successfully", "success");
        this.getTopicContentList(this.generalTopicId);
        this.updateAction = true;
        this.resetFormValues();
    };
    CurriculumTopicContentManageComponent.prototype.onUpdateTopicContentError = function (errRes) {
        this.pluginService.alertMessage("Could not save, please contact admin", "error");
    };
    CurriculumTopicContentManageComponent.prototype.resetSelectedOwnTopicContent = function () {
        this.contentIds = [];
        this.tableAction = true;
        $(".checkAll").prop("checked", false);
    };
    CurriculumTopicContentManageComponent.prototype.checkSelectedOwnContents = function (event) {
        var selectedId, checked, index;
        checked = event.target.checked;
        selectedId = Number(event.target.title);
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
    CurriculumTopicContentManageComponent.prototype.removeDuplicateElements = function (array) {
        var temp = [];
        for (var i = 0; i < array.length; i++) {
            if (temp.indexOf(array[i]) == -1) {
                temp.push(array[i]);
            }
        }
        return temp;
    };
    CurriculumTopicContentManageComponent.prototype.sortArrayByOrderNumber = function (array) {
        array.sort(function (a, b) { return (a.orderNumber > b.orderNumber) ? 1 : -1; });
    };
    CurriculumTopicContentManageComponent.prototype.deleteOwnTopicContents = function () {
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
                    localthisObject.subscribeToDeleteResponse(localthisObject.topicContentService.deleteOwnTopicContents(localthisObject.contentIds));
                }
            }
        });
    };
    CurriculumTopicContentManageComponent.prototype.subscribeToDeleteResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onDeleteSuccess(res); }, function (errRes) { return _this.onDeleteError(errRes); });
    };
    CurriculumTopicContentManageComponent.prototype.onDeleteSuccess = function (res) {
        this.pluginService.alertMessage("Topic content deleted successfully", "success");
        this.tableAction = true;
        this.contentIds = [];
        this.getTopicContentList(this.generalTopicId);
    };
    CurriculumTopicContentManageComponent.prototype.onDeleteError = function (errRes) {
        this.pluginService.alertMessage("Could not delete, please contact admin", "error");
    };
    CurriculumTopicContentManageComponent.prototype.toggleTreeNodes = function () {
        this.enableExpandNode = !this.enableExpandNode;
        if (this.enableExpandNode) {
            this.pluginService.openJsTreeAllNodes("#viewTree");
        }
        else {
            this.pluginService.closeJsTreeAllNodes("#viewTree");
        }
    };
    CurriculumTopicContentManageComponent.prototype.closeTopicContentModalWithOutSaving = function () {
        if (this.modalTitleName === "View" || this.modalTitleName === "ViewOrg") {
            this.closeTopicContentModal();
        }
        else if (this.modalTitleName === "Add" || this.modalTitleName === "Edit") {
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
                    localthisObject.closeTopicContentModal();
                }
            });
        }
    };
    CurriculumTopicContentManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./topic-content-manage.component.html */ "./src/app/syllabus-lesson-topic/topic-content/topic-content-manage.component.html"),
            providers: [_syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_5__["SyllabusLessonTopicService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _subject_subject_service__WEBPACK_IMPORTED_MODULE_11__["SubjectService"],
            _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_13__["CurriculumService"],
            _organisation_organisation_service__WEBPACK_IMPORTED_MODULE_12__["OrganisationService"],
            _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_5__["SyllabusLessonTopicService"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"],
            _core__WEBPACK_IMPORTED_MODULE_6__["Principal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__["PluginService"],
            _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_9__["UserLoginInfoService"],
            _shared_common_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_15__["FileManagementService"]])
    ], CurriculumTopicContentManageComponent);
    return CurriculumTopicContentManageComponent;
}());



/***/ }),

/***/ "./src/app/syllabus-lesson-topic/topic-question/topic-question-create.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/topic-question/topic-question-create.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 my-3 justify-content-between d-flex\">\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\n        <i class=\"fa fa-chevron-left mr-2\"></i> Back\n    </div>\n</div>\n\n<div id=\"stepperTab\">\n    <ul id=\"progressbar\">\n        <li class=\"active\">\n            <span class=\"bar\">\n            </span>\n        </li>\n        <li>\n            <span class=\"bar\">\n            </span>\n        </li>\n        <li>\n            <span class=\"bar\">\n            </span>\n        </li>\n        <li>\n        </li>\n    </ul>\n\n    <fieldset>\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12 p-3 alert-warning\">\n                <p class=\"font-20 text-warning\">Step 1 - Select question type</p>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-xxl-12\">\n                <pick-question-type></pick-question-type>\n            </div>\n        </div>\n\n        <button class=\"next btn btn-success float-right\" [disabled]=\"validateQuestionType\">\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\n        </button>\n\n    </fieldset>\n\n    <fieldset>\n        <div class=\"row mb-2\">\n            <div class=\"col-xxl-12 mb-2 alert-warning p-3\">\n                <p class=\"font-20 text-warning\">Step 2 - Build question</p>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-xxl-12 mx-3\">\n                <div class=\"form-group mb-2 row d-flex justify-content-between flex-wrap mb-2\">\n                    <label class=\"font-16 mb-3\">Select question category</label>\n                    <div class=\"d-flex w-100 row\">\n                        <div class=\"radio col-xxl-3\" *ngFor=\"let category of questionCategory\">\n                            <input type=\"radio\" id=\"{{category.name}}\" name=\"assessmentCategory\"\n                                (click)=\"onSelectQuestionCategory(category.tag)\" [checked]=\"category.checked\">\n                            <label for=\"{{category.name}}\">{{category.name}}</label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group  row d-flex justify-content-between flex-wrap mb-2\">\n                    <label class=\"font-16 mb-3\">Select question complexity level</label>\n                    <div class=\"d-flex w-100 row\">\n                        <div class=\"radio col-xxl-3\" *ngFor=\"let level of questionComplexityLevel\">\n                            <input type=\"radio\" id=\"{{level.name}}\" name=\"complexityLevel\" [checked]=\"level.checked\"\n                                (click)=\"onSelectComplexityLevel(level.value)\">\n                            <label for=\"{{level.name}}\">{{level.name}}</label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"w-100\">\n            <router-outlet></router-outlet>\n        </div>\n\n        <button class=\"btn btn-success ml-2 float-right next\" [disabled]=\"validateQuestion\">\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\n        </button>\n        <div class=\"previous btn btn-danger float-right\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12 p-3 alert-warning\">\n                <p class=\"font-20 text-warning\">Step 3 - Add solution content (Optional)</p>\n            </div>\n        </div>\n        \n        <div class=\"row\">\n            <div class=\"col-xxl-12 mb-2\">\n                <label for=\"\">Solution content</label>\n                <ckeditor class=\"w-100\" [config]=\"editorQuestionConfig\" [(ngModel)]=\"solutionContent\"\n                    #questionInput=\"ngModel\" placeholder=\"Enter question (min length: 3 and max length: 4000)\"\n                    [required]=\"true\">\n                </ckeditor>\n            </div>\n        </div>\n\n        <button class=\"btn btn-success ml-2 float-right next\" (click)=\"loadPreviewQuestion()\">\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\n        </button>\n        <div class=\"previous btn btn-danger float-right\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12 p-3 alert-warning\">\n                <p class=\"font-20 text-warning\">Step 4 - Summary</p>\n            </div>\n        </div>\n\n        <div class=\"w-100\">\n            <div\n                *ngIf='questionType === \"MCQ_SINGLE\" || questionType === \"MCQ_MULTIPLE\" || questionType === \"MCQ_TRUE_FALSE\"'>\n                <div class=\"row mb-3\">\n                    <div class=\"col-xxl-12\">\n                        <div class=\"border-info p-3 alert-info font-18\" style=\"line-height: 24px;\">\n                            <span class=\"text-dark\" [MathJax]=\"questionResource.Question | sanitizeHtml\">\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row mb-3 p-3\">\n                    <div class=\"col-lg-6 col-md-12 d-flex justify-content-start mb-2\"\n                        *ngFor=\"let choice of questionResource.Choices;let i = index\">\n                        <div [ngClass]=\"{'radio': type === 'radio','checkbox': type === 'checkbox'}\">\n                            <input type=\"{{type}}\" [id]=\"choice.ChoiceId\" name=\"answer\" disabled readonly>\n                            <label for=\"{{choice.ChoiceId}}\">\n                                <span [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></span>\n                            </label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"mb-3 font-18\">\n                    <div class=\"border-success p-3 alert-success\">\n                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\n                            *ngFor=\"let answer of answers;let checkIndex =index\">\n                            <span [MathJax]=\"answer | sanitizeHtml\"></span>\n                            {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf='questionType === \"MCQ_CHOICE_MATRIX\"'>\n                <div class=\"row mb-3\">\n                    <div class=\"col-xxl-12\">\n                        <div class=\"border-info p-3 alert-info font-18\" style=\"line-height: 24px;\">\n                            <span class=\"text-dark\" [MathJax]=\"questionResource.Question | sanitizeHtml\">\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <table class=\"border-collapse my-2 font-18 p-3\" style=\"pointer-events: none\">\n                    <tr class=\"bg-lightgray\">\n                        <td></td>\n                        <td *ngFor=\"let option of questionResource.Options\">\n                            <span [MathJax]=\"option.OptionText | sanitizeHtml\"></span>\n                        </td>\n                    </tr>\n                    <tr style=\"background: none !important;\" *ngFor=\"let choice of questionResource.Choices\">\n                        <td><span [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></span></td>\n                        <td *ngFor=\"let option of questionResource.Options\">\n                            <div class=\"radio\">\n                                <input type=\"radio\" disabled readonly [id]=\"option.OptionId+choice.ChoiceId\"\n                                    name=\"{{ choice.ChoiceId }}\">\n                                <label for=\"{{option.OptionId+choice.ChoiceId}}\"></label>\n                            </div>\n                        </td>\n                    </tr>\n                </table>\n                <div class=\"mb-3 font-18\">\n                    <div class=\"border-success p-3 alert-success\">\n                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\n                            *ngFor=\"let data of answers;let checkIndex =index\">\n                            <span [MathJax]=\"data.choiceName | sanitizeHtml\"></span> -\n                            <span [MathJax]=\"data.optionName | sanitizeHtml\"></span>\n                            {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf='questionType === \"MCQ_MATCH_LIST\"'>\n                <div class=\"row mb-3\">\n                    <div class=\"col-xxl-12\">\n                        <div class=\"border-info p-3 alert-info font-18\" style=\"line-height: 24px;\">\n                            <span class=\"text-dark\" [MathJax]=\"questionResource.Question | sanitizeHtml\">\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <ng-container *ngFor=\"let answer of answers\">\n                    <div class=\"choice-container\">\n                        <div class=\"item\">\n                            <div class=\"choice--group\">\n                                <div class=\"choice--label\">\n                                    <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"line-circle\">\n                        </div>\n                        <div class=\"item\">\n                            <div class=\"drag--container\">\n                                <div class=\"choice--editor option--container zone\" class=\"option--item\"\n                                    [MathJax]=\"answer.optionName | sanitizeHtml\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </ng-container>\n                <div class=\"mb-3 font-18\">\n                    <div class=\"border-success p-3 alert-success\">\n                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\n                            *ngFor=\"let data of answers;let checkIndex =index\">\n                            <span [MathJax]=\"data.choiceName | sanitizeHtml\"></span> -\n                            <span [MathJax]=\"data.optionName | sanitizeHtml\"></span>\n                            {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div *ngIf=\"showSaveQuestion\">\n            <button class=\"btn btn-success float-right ml-2\" (click)=\"saveQuestion()\" [disabled]=\"showAddQuestion\">\n                <i class=\"fa fa-save mr-2\"></i>\n                Save question\n            </button>\n        </div>\n\n        <div *ngIf=\"showAddQuestion\">\n            <button class=\"btn btn-info float-right\" (click)=\"addQuestion()\">\n                <i class=\"fa fa-plus-circle mr-2\"></i>\n                Add one more question\n            </button>\n        </div>\n\n        <div class=\"previous btn btn-danger float-right mr-2\" (click)=\"resetPreviewQuestions()\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n        </div>\n    </fieldset>\n</div>"

/***/ }),

/***/ "./src/app/syllabus-lesson-topic/topic-question/topic-question-create.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/topic-question/topic-question-create.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CurriculumTopicQuestionCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumTopicQuestionCreateComponent", function() { return CurriculumTopicQuestionCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../syllabus-lesson-topic.service */ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../question-builder/question-builder.service */ "./src/app/question-builder/question-builder.service.ts");
/* harmony import */ var _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/user-login-info/user-login-info.service */ "./src/app/shared/user-login-info/user-login-info.service.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/common/common.service */ "./src/app/shared/common/common.service.ts");









var CurriculumTopicQuestionCreateComponent = /** @class */ (function () {
    function CurriculumTopicQuestionCreateComponent(activatedRoute, router, pluginService, questionBuilderService, questionService, formBuilder, userLoginService, commonService, changedetector) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pluginService = pluginService;
        this.questionBuilderService = questionBuilderService;
        this.questionService = questionService;
        this.formBuilder = formBuilder;
        this.userLoginService = userLoginService;
        this.commonService = commonService;
        this.changedetector = changedetector;
        this.questionResource = {};
        this.questionCategory = [];
        this.questionComplexityLevel = [];
        this.answers = [];
        this.contentSource = [];
        this.editorSolutionConfig = this.pluginService.getCKEditorQuestionConfig();
        this.showSaveQuestion = false;
        this.showAddQuestion = false;
        this.validateQuestionType = true;
    }
    CurriculumTopicQuestionCreateComponent.prototype.ngOnInit = function () {
        this.pluginService.sideMenuToggle();
        this.pluginService.newStepperJs();
        this.generalTopicId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        this.getContentSource();
        this.getQuestionCategory();
        this.getQuestionComplexityLevel();
    };
    CurriculumTopicQuestionCreateComponent.prototype.getContentSource = function () {
        var _this = this;
        this.commonService.getContentSourceList().subscribe(function (data) {
            _this.contentSource = data;
        });
    };
    CurriculumTopicQuestionCreateComponent.prototype.getQuestionCategory = function () {
        var _this = this;
        this.commonService.getQuestionCategoryList().subscribe(function (data) {
            _this.questionCategory = data;
        });
    };
    CurriculumTopicQuestionCreateComponent.prototype.getQuestionComplexityLevel = function () {
        var _this = this;
        this.commonService.getQuestionComplexityLevelList().subscribe(function (data) {
            _this.questionComplexityLevel = data;
        });
    };
    CurriculumTopicQuestionCreateComponent.prototype.ngAfterViewChecked = function () {
        this.validateQuestionTypeSelectedOrNot();
        this.changedetector.detectChanges();
    };
    CurriculumTopicQuestionCreateComponent.prototype.validateQuestionTypeSelectedOrNot = function () {
        var currentRoute, splitUrl = [], lastItem;
        currentRoute = this.router.url;
        splitUrl = currentRoute.split("/");
        lastItem = splitUrl.pop();
        if (lastItem === 'topic-question-create') {
            this.validateQuestionType = true;
        }
        else {
            this.validateQuestionType = false;
        }
    };
    CurriculumTopicQuestionCreateComponent.prototype.loadPreviewQuestion = function () {
        var duplicateChoices = [], choiceText, question, choices = [], choiceId, answers = [], matrixChoices = [], matrixOptions = [];
        this.questionResource = [];
        this.questionResource.Choices = [];
        this.questionResource.Options = [];
        this.questionResource.Answers = [];
        this.questionResource = [];
        this.questionResource = this.questionBuilderService.getQuestionResource;
        this.questionType = this.questionResource.QuestionType;
        answers = this.questionResource.Answers;
        this.onChangeOptionType(this.questionType);
        question = this.questionResource.Question;
        if (question === "" || question === "undefined") {
            //"Question is missing, please fill question detail";
            this.validateQuestion = true;
        }
        else if (question.length > 2) {
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
                    this.answers = [];
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
            }
            else {
                //"Answer is missing, please select a answer";
                this.validateQuestion = true;
            }
        }
    };
    CurriculumTopicQuestionCreateComponent.prototype.onContentSource = function (sourceName) {
        this.selectedContentSource = sourceName;
    };
    CurriculumTopicQuestionCreateComponent.prototype.onSelectQuestionCategory = function (value) {
        this.category = value;
    };
    CurriculumTopicQuestionCreateComponent.prototype.onSelectComplexityLevel = function (value) {
        this.complexityLevel = value;
    };
    CurriculumTopicQuestionCreateComponent.prototype.onChangeOptionType = function (questionType) {
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
    CurriculumTopicQuestionCreateComponent.prototype.resetPreviewQuestions = function () {
        this.questionResource = [];
        this.answers = [];
    };
    CurriculumTopicQuestionCreateComponent.prototype.saveQuestion = function () {
        var questionResource = {}, questionDetails, updatedQuestionResource;
        questionResource.question = {};
        //User login Information for organisationId 
        if (this.category) {
            questionResource.question.category = this.category;
        }
        else {
            questionResource.question.category = this.questionCategory[0].tag;
        }
        if (this.complexityLevel) {
            questionResource.question.complexityLevel = this.complexityLevel;
        }
        else {
            questionResource.question.complexityLevel = 1;
        }
        this.organisationId = this.userLoginService.organisationId;
        updatedQuestionResource = this.questionBuilderService.getQuestionResource;
        questionResource.question.marks = updatedQuestionResource.TotalMarks;
        questionDetails = this.questionBuilderService.convertJsonToString(JSON.stringify(updatedQuestionResource));
        questionResource.question.contentJson = questionDetails;
        questionResource.generalTopicId = this.generalTopicId;
        questionResource.question.generalTopicId = this.generalTopicId;
        questionResource.organisationId = this.organisationId;
        questionResource.question.solutionJson = this.questionBuilderService.convertJsonToString(JSON.stringify(this.solutionContent));
        this.subscribeToSaveResponse(this.questionService.saveOwnTopicQuestion(questionResource));
    };
    CurriculumTopicQuestionCreateComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (resp) { return _this.onSaveSuccess(resp); }, function (errRes) { return _this.onSaveError(errRes); });
    };
    CurriculumTopicQuestionCreateComponent.prototype.onSaveSuccess = function (res) {
        this.pluginService.alertMessage("Own topic question created successfully", "success");
        this.showAddQuestion = true;
        this.showSaveQuestion = false;
    };
    CurriculumTopicQuestionCreateComponent.prototype.onSaveError = function (errRes) {
        this.pluginService.alertMessage("Could not save, please contact admin", "error");
    };
    CurriculumTopicQuestionCreateComponent.prototype.onBack = function () {
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
                localObj.router.navigateByUrl('/lesson-topic/topic-question');
                localObj.pluginService.sideMenuToggle();
            }
        });
    };
    CurriculumTopicQuestionCreateComponent.prototype.addQuestion = function () {
        window.location.reload();
        this.questionType = "";
        this.showSaveQuestion = true;
    };
    CurriculumTopicQuestionCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./topic-question-create.component.html */ "./src/app/syllabus-lesson-topic/topic-question/topic-question-create.component.html"),
            providers: [_syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"],
            _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_6__["QuestionBuilderService"],
            _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__["UserLoginInfoService"],
            _shared_common_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], CurriculumTopicQuestionCreateComponent);
    return CurriculumTopicQuestionCreateComponent;
}());



/***/ }),

/***/ "./src/app/syllabus-lesson-topic/topic-question/topic-question-details.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/topic-question/topic-question-details.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 my-3 justify-content-between d-flex\">\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\n        <i class=\"fa fa-chevron-left mr-2\"></i> Back\n    </div>\n    <a class=\"btn btn-success\" (click)=\"editQuestionRoute()\">\n        <i class=\"fa fa-edit mr-2\"></i> Edit question\n    </a>\n</div>\n<div *ngIf='questionType === \"MCQ_SINGLE\" || questionType === \"MCQ_MULTIPLE\" || questionType === \"MCQ_TRUE_FALSE\"'>\n    <div class=\"row mb-3\">\n        <div class=\"col-xxl-12\">\n            <div class=\"border-info p-3 alert-info font-18\" style=\"line-height: 24px;\">\n                <span class=\"text-info\">Question&nbsp;:&nbsp;</span>\n                <span class=\"text-dark\" [MathJax]=\"questionResource.Question | sanitizeHtml\">\n                </span>\n            </div>\n        </div>\n    </div>\n    <div class=\"row mb-3 p-3\">\n        <div class=\"col-lg-6 col-md-12 d-flex justify-content-start mb-2\"\n            *ngFor=\"let choice of questionResource.Choices;let i = index\">\n            <div [ngClass]=\"{'radio': type === 'radio','checkbox': type === 'checkbox'}\">\n                <input type=\"{{type}}\" [id]=\"choice.ChoiceId\" name=\"answer\" [answers]=\"questionResource.Answers\"\n                    [choiceid]=\"choice.ChoiceId\" disabled readonly>\n                <label for=\"{{choice.ChoiceId}}\"></label>\n            </div>\n            <label for=\"{{choice.ChoiceId}}\">\n                <span [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></span>\n            </label>\n        </div>\n    </div>\n    <div class=\"mb-3 font-18\">\n        <div class=\"border-success p-3 alert-success\">\n            <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\n                *ngFor=\"let answer of answers;let checkIndex =index\">\n                <span [MathJax]=\"answer | sanitizeHtml\"></span>\n                {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\n        </div>\n    </div>\n</div>\n<div *ngIf='questionType === \"MCQ_CHOICE_MATRIX\"'>\n    <div class=\"row mb-3\">\n        <div class=\"col-xxl-12\">\n            <div class=\"border-info p-3 alert-info font-18\" style=\"line-height: 24px;\">\n                <span class=\"text-info\">Question&nbsp;:&nbsp;</span>\n                <span class=\"text-dark\" [MathJax]=\"questionResource.Question | sanitizeHtml\">\n                </span>\n            </div>\n        </div>\n    </div>\n    <table class=\"border-collapse my-2 font-18 p-3\" style=\"pointer-events: none\">\n        <tr class=\"bg-lightgray\">\n            <td></td>\n            <td *ngFor=\"let option of questionResource.Options\">\n                <span [MathJax]=\"option.OptionText | sanitizeHtml\"></span>\n            </td>\n        </tr>\n        <tr style=\"background: none !important;\" *ngFor=\"let choice of questionResource.Choices\">\n            <td><span [MathJax]=\"choice.ChoiceText\"></span></td>\n            <td *ngFor=\"let option of questionResource.Options\">\n                <div class=\"radio\">\n                    <input type=\"radio\" disabled readonly [id]=\"option.OptionId+choice.ChoiceId\"\n                        [choicematrix]=\"questionResource.Answers\" [optionid]=\"option.OptionId\"\n                        [choiceid]=\"choice.ChoiceId\" name=\"{{ choice.ChoiceId }}\">\n                    <label for=\"{{option.OptionId+choice.ChoiceId}}\"></label>\n                </div>\n            </td>\n        </tr>\n    </table>\n    <div class=\"mb-3 font-18\">\n        <div class=\"border-success p-3 alert-success\">\n            <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\n                *ngFor=\"let answer of answers;let checkIndex =index\">\n                <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span> -\n                <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\n                {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\n        </div>\n    </div>\n</div>\n<div *ngIf='questionType === \"MCQ_MATCH_LIST\"'>\n    <div class=\"row mb-3\">\n        <div class=\"col-xxl-12\">\n            <div class=\"border-info p-3 alert-info font-18\" style=\"line-height: 24px;\">\n                <span class=\"text-info\">Question&nbsp;:&nbsp;</span>\n                <span class=\"text-dark\" [MathJax]=\"questionResource.Question | sanitizeHtml\">\n                </span>\n            </div>\n        </div>\n    </div>\n    <ng-container *ngFor=\"let answer of answers\">\n        <div class=\"choice-container\">\n            <div class=\"item\">\n                <div class=\"choice--group\">\n                    <div class=\"choice--label\">\n                        <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"line-circle\">\n            </div>\n            <div class=\"item\">\n                <div class=\"drag--container\">\n                    <div class=\"choice--editor option--container zone\" class=\"option--item\"\n                        [MathJax]=\"answer.optionName | sanitizeHtml\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ng-container>\n    <div class=\"mb-3 font-18\">\n        <div class=\"border-success p-3 alert-success\">\n            <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\n                *ngFor=\"let answer of answers;let checkIndex =index\">\n                <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span> -\n                <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\n                {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/syllabus-lesson-topic/topic-question/topic-question-details.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/topic-question/topic-question-details.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CurriculumTopicQuestionDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumTopicQuestionDetailsComponent", function() { return CurriculumTopicQuestionDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../syllabus-lesson-topic.service */ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../question-builder/question-builder.service */ "./src/app/question-builder/question-builder.service.ts");
/* harmony import */ var _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/user-login-info/user-login-info.service */ "./src/app/shared/user-login-info/user-login-info.service.ts");








var CurriculumTopicQuestionDetailsComponent = /** @class */ (function () {
    function CurriculumTopicQuestionDetailsComponent(activatedRoute, router, pluginService, questionBuilderService, questionService, formBuilder, userLoginService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pluginService = pluginService;
        this.questionBuilderService = questionBuilderService;
        this.questionService = questionService;
        this.formBuilder = formBuilder;
        this.userLoginService = userLoginService;
        this.questionResource = {};
        this.matchList = [];
        this.answers = [];
        this.getCurrentRouteInfo();
    }
    CurriculumTopicQuestionDetailsComponent.prototype.getCurrentRouteInfo = function () {
        var splitArray = [], currentUrl;
        currentUrl = this.router.url;
        splitArray = currentUrl.split('/');
        this.currentRoute = splitArray.pop();
    };
    CurriculumTopicQuestionDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pluginService.sideMenuToggle();
        this.activatedRoute.params.subscribe(function (params) {
            _this.questionId = params['id'];
            _this.getQuestionDetail(_this.questionId);
        });
    };
    CurriculumTopicQuestionDetailsComponent.prototype.getQuestionDetail = function (questionId) {
        var _this = this;
        this.questionService
            .getQuestionByQuestionId(questionId)
            .subscribe(function (res) { return _this.assignQuestionResource(res.body); }, function (res) { return _this.onError(res.message); });
    };
    CurriculumTopicQuestionDetailsComponent.prototype.assignQuestionResource = function (data) {
        var questionResource = {};
        questionResource = data;
        this.loadPreviewQuestion(questionResource);
    };
    CurriculumTopicQuestionDetailsComponent.prototype.onError = function (resp) {
        this.pluginService.alertMessage("Could not get question detail please contact admin", "error");
    };
    CurriculumTopicQuestionDetailsComponent.prototype.loadPreviewQuestion = function (questionResource) {
        var duplicateChoices = [], choiceText, choiceId, choices = [], question, answers = [], matrixChoices = [], matrixOptions = [];
        this.questionResource = [];
        this.questionResource = this.questionBuilderService.convertStringToJson(questionResource.contentJson);
        this.questionType = this.questionResource.QuestionType;
        this.onChangeOptionType(this.questionType);
        question = this.questionResource.Question;
        if (this.questionType === "MCQ_SINGLE" || this.questionType === "MCQ_MULTIPLE" || this.questionType === "MCQ_TRUE_FALSE") {
            duplicateChoices = this.questionResource.Choices;
            answers = this.questionResource.Answers;
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
        }
        else if (this.questionType === "MCQ_CHOICE_MATRIX") {
            this.answers = [];
            answers = this.questionResource.Answers;
            matrixChoices = this.questionResource.Choices;
            matrixOptions = this.questionResource.Options;
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
        else if (this.questionType === "MCQ_MATCH_LIST") {
            this.answers = [];
            matrixChoices = [];
            matrixOptions = [];
            answers = this.questionResource.Answers;
            matrixChoices = this.questionResource.Choices;
            matrixOptions = this.questionResource.Options;
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
    };
    CurriculumTopicQuestionDetailsComponent.prototype.onChangeOptionType = function (questionType) {
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
    CurriculumTopicQuestionDetailsComponent.prototype.resetPreviewQuestions = function () {
        this.questionResource = [];
        this.answers = [];
    };
    CurriculumTopicQuestionDetailsComponent.prototype.editQuestionRoute = function () {
        if (this.currentRoute === "topic-question-view") {
            this.router.navigate(['/lesson-topic', this.questionId, 'topic-question-edit']);
        }
        else if (this.currentRoute === "general-topic-question-view") {
            this.router.navigate(['/general-concept-and-topic', this.questionId, 'general-topic-question-edit']);
        }
    };
    CurriculumTopicQuestionDetailsComponent.prototype.onBack = function () {
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
    CurriculumTopicQuestionDetailsComponent.prototype.previousUrl = function () {
        if (this.currentRoute === "topic-question-view") {
            this.router.navigateByUrl('/lesson-topic/topic-question');
        }
        else if (this.currentRoute === "general-topic-question-view") {
            this.router.navigateByUrl('/general-concept-and-topic/general-topic-question');
        }
        else {
            this.router.navigateByUrl('../');
        }
    };
    CurriculumTopicQuestionDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./topic-question-details.component.html */ "./src/app/syllabus-lesson-topic/topic-question/topic-question-details.component.html"),
            providers: [_syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"],
            _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_6__["QuestionBuilderService"],
            _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__["UserLoginInfoService"]])
    ], CurriculumTopicQuestionDetailsComponent);
    return CurriculumTopicQuestionDetailsComponent;
}());



/***/ }),

/***/ "./src/app/syllabus-lesson-topic/topic-question/topic-question-manage.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/topic-question/topic-question-manage.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 filterbg my-4 rounded\">\n    <div class=\"filtericon font-20\">\n        <i class=\"fa fa-filter\"></i>\n    </div>\n    <div class=\"row d-flex justify-content-start align-items-center\">\n        <div class=\"col-lg-3 mb-3\">\n            <ng-select [items]=\"curriculumList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"acronym\"\n                placeholder=\"Select curriculum\" [(ngModel)]=\"selectedCurriculum\" (change)=\"onCurriculumChange()\">\n            </ng-select>\n        </div>\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedCurriculum\">\n            <ng-select [items]=\"gradeList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedGrade\" (change)=\"onGradeChange()\">\n            </ng-select>\n        </div>\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedGrade\">\n            <ng-select [items]=\"subjectList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"subject\"\n                placeholder=\"Select subject\" [(ngModel)]=\"selectedSubject\" (change)=\"onSubjectChange()\">\n            </ng-select>\n        </div>\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedSubject\">\n            <ng-select [items]=\"lessonList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"text\"\n                placeholder=\"Select lesson\" [(ngModel)]=\"selectedLesson\">\n            </ng-select>\n        </div>\n    </div>\n    <div class=\"d-flex justify-content-end pb-3 row\">\n        <div class=\"col-lg-2\">\n            <button class=\"btn btn-success float-right waves-effect waves-light\" (click)=\"getLessonTopicList()\">\n                <i class=\"fa fa-filter mr-1\"></i>Apply\n            </button>\n        </div>\n    </div>\n</div>\n\n<div class=\"w-100 d-flex justify-content-between align-items-center\" *ngIf=\"showTopicHeading\">\n    <h5 class=\"font-20 mb-2\">Lesson topics</h5>\n    <div class=\"btn btn-primary\" (click)=\"openSubjectTreeModal()\">\n        <i class=\"fa fa-eye mr-2\"></i>\n        View subject tree\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-xxl-3\">\n        <div id=\"topicsList\"></div>\n    </div>\n    <div class=\"col-xxl-9 mb-3\">\n        <div class=\"py-2\" *ngIf=\"showQuestionMapping\">\n            <div class=\"d-flex w-100 justify-content-between align-items-center mb-2 flex-wrap\">\n                <div class=\"filterbg p-3 mb-2 w-100\">\n                    <p class=\"font-20\">Content preference for {{topicName}}</p>\n                    <div class=\"row m-0 mb-2\">\n                        <div class=\"col-md-6 radio px-0\">\n                            <input type=\"radio\" class=\"form-check-input\" id=\"QuestionCE\" name=\"question\"\n                                [checked]=\"checkQuestionCE\" (change)=\"checkQuestionPreference($event)\">\n                            <label for=\"QuestionCE\">Recommended by CE</label>\n                        </div>\n                        <div class=\"col-md-6 radio px-0\">\n                            <input type=\"radio\" class=\"form-check-input\" id=\"OwnQuestion\" name=\"question\"\n                                [checked]=\"checkOwnQuestion\" (change)=\"checkQuestionPreference($event)\">\n                            <label for=\"OwnQuestion\">Use\n                                our own question</label>\n                        </div>\n                    </div>\n                    <div class=\"row mx-0\">\n                        <div class=\"w-100 d-flex justify-content-end\" (click)=\"saveQuestionPreference()\">\n                            <div class=\"btn btn-success\">\n                                <i class=\"fa fa-save mr-2\"></i>Save\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"tab w-100\">\n                    <ul class=\"nav nav-tabs\" role=\"tablist\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link show active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\"\n                                aria-controls=\"home\" aria-selected=\"false\">Recommended\n                                by CE </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link show\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\"\n                                aria-controls=\"profile\" aria-selected=\"true\">Recommended by\n                                organizations</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link show\" id=\"portfolio-tab\" data-toggle=\"tab\" href=\"#portfolio\" role=\"tab\"\n                                aria-controls=\"portfolio\" aria-selected=\"false\"> Own\n                                question </a>\n                        </li>\n                    </ul>\n                    <div class=\"tab-content\">\n                        <div class=\"tab-pane fade py-3 active show\" id=\"home\" role=\"tabpanel\"\n                            aria-labelledby=\"home-tab\">\n                            <div class=\"row\" *ngIf=\"generalTopicQuestions.length > 0\">\n                                <div class=\"col-xxl-12 flex-wrap d-flex justify-content-lg-end\">\n                                    <div class=\"btn btn-info mb-2 mr-2\"\n                                        (click)=\"openGeneralTopicPreviewQuestionModal()\">\n                                        <i class=\"fa fa-list-alt mr-2\"></i> Preview questions\n                                    </div>\n                                    <div class=\"btn btn-success mb-2\" (click)=\"openGeneralTopicSimulateQuestionModal()\">\n                                        <i class=\"fa fa-cogs mr-2\"></i> Simulate questions\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"generalTopicQuestions\">\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\n                                    <thead>\n                                        <tr>\n                                            <th>Question category</th>\n                                            <th>Question type</th>\n                                            <th>Complexity level</th>\n                                            <th>Actions</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let question of generalTopicQuestions ;trackBy: trackId\">\n                                            <td data-column=\"Question category\">{{question.questionCategory}}</td>\n                                            <td data-column=\"Question type\">{{question.questionType}}</td>\n                                            <td data-column=\"Complexity level\">{{question.complexityLevel}}</td>\n                                            <td data-column=\"Actions\">\n                                                <a target=\"_blank\" class=\"btn btn-outline-info  mr-1 mb-1 btn-icon-size\"\n                                                    [routerLink]=\"['/lesson-topic', question.id, 'topic-question-view' ]\">\n                                                    <i class=\"fa fa-eye\"></i>\n                                                </a>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                        <div class=\"tab-pane fade py-3\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n                            <div class=\"w-100 filterbg py-2 px-4 rounded my-4\">\n                                <div class=\"filtericon font-20\">\n                                    <i class=\"fa fa-filter\"></i>\n                                </div>\n                                <div class=\"row col-xxl-4 mb-3\">\n                                    <ng-select [items]=\"organisations\" class=\"w-100\"\n                                        [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\n                                        placeholder=\"Select organisation\" [(ngModel)]=\"selectedOrganisation\">\n                                    </ng-select>\n                                </div>\n                                <div class=\"w-100 d-flex justify-content-end\">\n                                    <div class=\"btn btn-success float-right waves-effect waves-light\"\n                                        (click)=\"getOrgTopicQuestiontByOrgId()\">\n                                        <i class=\"fa fa-filter mr-2\"></i>Apply\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\" *ngIf=\"orgGeneralTopicQuestions.length > 0\">\n                                <div class=\"col-xxl-12 d-flex flex-wrap justify-content-lg-end\">\n                                    <div class=\"btn btn-info mb-2 mr-2\" (click)=\"openOrgTopicPreviewQuestionModal()\">\n                                        <i class=\"fa fa-list-alt mr-2\"></i> Preview questions\n                                    </div>\n                                    <div class=\"btn btn-success mb-2\" (click)=\"openOrgTopicSimulateQuestionModal()\">\n                                        <i class=\"fa fa-cogs mr-2\"></i> Simulate questions\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"orgGeneralTopicQuestions\">\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\n                                    <thead>\n                                        <tr>\n                                            <th>Question category</th>\n                                            <th>Question type</th>\n                                            <th>Complexity level</th>\n                                            <th>Actions</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let orgquestion of orgGeneralTopicQuestions ;trackBy: trackId\">\n                                            <td data-column=\"Question category\">{{orgquestion.questionCategory}}</td>\n                                            <td data-column=\"Question type\">{{orgquestion.questionType}}</td>\n                                            <td data-column=\"Complexity level\">{{orgquestion.complexityLevel}}</td>\n                                            <td data-column=\"Actions\">\n                                                <a target=\"_blank\" class=\"btn btn-outline-info  mr-1 mb-1 btn-icon-size\"\n                                                    [routerLink]=\"['/lesson-topic', orgquestion.id, 'topic-question-view' ]\">\n                                                    <i class=\"fa fa-eye\"></i>\n                                                </a>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                        <div class=\"tab-pane fade py-3\" id=\"portfolio\" role=\"tabpanel\" aria-labelledby=\"portfolio-tab\">\n                            <div class=\"row\">\n                                <div\n                                    class=\"col-xxl-12 flex-wrap d-flex justify-content-lg-end justify-content-md-between\">\n                                    <div class=\"btn btn-info mr-2 mb-2\" (click)=\"openOwnTopicPreviewQuestionModal()\"\n                                        *ngIf=\"ownTopicQuestions.length > 0\">\n                                        <i class=\"fa fa-list-alt mr-2\"></i> Preview questions\n                                    </div>\n                                    <div class=\"btn btn-success mr-2 mb-2\" (click)=\"openOwnTopicSimulateQuestionModal()\"\n                                        *ngIf=\"ownTopicQuestions.length > 0\">\n                                        <i class=\"fa fa-cogs mr-2\"></i> Simulate questions\n                                    </div>\n                                    <a target=\"_blank\" class=\"btn btn-primary mb-2 mr-2\"\n                                        [routerLink]=\"['/lesson-topic',generalTopicId,'topic-question-create']\">\n                                        <i class=\"fa fa-plus-circle mr-2\"></i> Create new question\n                                    </a>\n                                    <div class=\"btn btn-warning mb-2\" (click)=\"loadUpdatedTopicQuestion()\">\n                                        <i class=\"fa fa-refresh mr-2\"></i> Refresh\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"ownTopicQuestions\">\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\n                                    <thead>\n                                        <tr>\n                                            <th>Select</th>\n                                            <th>Question category</th>\n                                            <th>Question type</th>\n                                            <th>Complexity level</th>\n                                            <th>Actions</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let ownquestion of ownTopicQuestions ;trackBy: trackId\">\n                                            <td data-column=\"Select\">\n                                                <div class=\"checkbox\">\n                                                    <input type=\"checkbox\" id=\"{{ownquestion.id}}\" class=\"checkAll\"\n                                                        (change)=\"checkSelectedOwnQuestions($event)\">\n                                                    <label for=\"{{ownquestion.id}}\"></label>\n                                                </div>\n                                            </td>\n                                            <td data-column=\"Question category\">{{ownquestion.questionCategory}}</td>\n                                            <td data-column=\"Question type\">{{ownquestion.questionType}}</td>\n                                            <td data-column=\"Complexity level\">{{ownquestion.complexityLevel}}</td>\n                                            <td data-column=\"Actions\">\n                                                <div>\n                                                    <a target=\"_blank\"\n                                                        class=\"btn btn-outline-info  mr-1 mb-1 btn-icon-size\"\n                                                        [routerLink]=\"['/lesson-topic', ownquestion.questionId, 'topic-question-view' ]\">\n                                                        <i class=\"fa fa-eye\"></i>\n                                                    </a>\n                                                    <a target=\"_blank\"\n                                                        class=\"btn btn-outline-success  mr-1 mb-1 btn-icon-size\"\n                                                        [routerLink]=\"['/lesson-topic', ownquestion.questionId, 'topic-question-edit' ]\">\n                                                        <i class=\"fa fa-edit\"></i>\n                                                    </a>\n                                                </div>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                                <div class=\"w-100 d-flex justify-content-end mt-4\" *ngIf=\"ownTopicQuestions.length > 0\">\n                                    <button class=\"btn btn-danger mr-2\" [disabled]=\"tableAction\"\n                                        (click)=\"resetSelectedOwnTopicQuestions()\">\n                                        <i class=\"fa fa-times mr-2\"></i>Reset\n                                    </button>\n                                    <button class=\"btn btn-danger\" (click)=\"deleteTopicQuestions()\"\n                                        [disabled]=\"tableAction\">\n                                        <i class=\"fa fa-trash mr-2\"></i>Delete\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"viewSubjectTreeModal\">\n    <div class=\"modal-dialog modal-full-height modal-right modal-notify\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\n                <h5 class=\"modal-title text-white\">\n                    View subject tree\n                </h5>\n                <div class=\"close btn btn-xl\" (click)=\"closeSubjectTreeModal()\">\n                    <i class=\"fa fa-times\"></i>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"subjectTree.length > 1\">\n                    <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\n                        <i class=\"fa fa-clone mr-2\"></i>\n                        <span *ngIf=\"enableExpandNode === false\">\n                            Expand all\n                        </span>\n                        <span *ngIf=\"enableExpandNode === true\">\n                            Collapse all\n                        </span>\n                    </div>\n                </div>\n                <div id=\"viewSubjectTree\"></div>\n            </div>\n            <div class=\"modal-footer d-flex justify-content-end align-items-start\">\n                <div class=\"btn btn-danger\" (click)=\"closeSubjectTreeModal()\">\n                    <i class=\"fa fa-times mr-2\"></i>\n                    Close\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal\" id=\"simulateTopicQuestionModal\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"simulateTopicQuestionModal\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-notify\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\n                <h5 class=\"modal-title text-white\">\n                    Simulate question - {{topicName}}\n                </h5>\n                <div class=\"close btn btn-xl\" (click)=\"closeSimulateQuestionModal()\">\n                    <i class=\"fa fa-times\"></i>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                <div id=\"questionSimulateIndicators\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\"\n                    data-interval=\"false\">\n                    <div class=\"carousel-inner\">\n                        <div class=\"carousel-item\" [ngClass]=\"{'active': questionIndex === 0}\"\n                            *ngFor=\"let questiondata of topicQuestions;let questionIndex = index;\">\n                            <div\n                                *ngIf=\"questiondata.questionType === 'MCQ_SINGLE' || questiondata.questionType === 'MCQ_MULTIPLE' || questiondata.questionType === 'MCQ_TRUE_FALSE'\">\n                                <div class=\"row mb-3\">\n                                    <div class=\"col-xxl-12\">\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\n                                            style=\"line-height: 24px;\">\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex+1}}.&nbsp;</span>\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question  | sanitizeHtml\">\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row mb-3 p-3 text-capitalize\">\n                                    <div class=\"col-lg-6 col-md-12 d-flex justify-content-start mb-2\"\n                                        *ngFor=\"let choice of questiondata.choices;let i = index\">\n                                        <div class=\"radio\" *ngIf=\"questiondata.questionType !== 'MCQ_MULTIPLE'\">\n                                            <input type=\"radio\" [id]=\"choice.ChoiceId\" name=\"answer\"\n                                                (change)=\"onSelectMCQSingleAnswer(questiondata.id,choice.ChoiceId)\">\n                                            <label for=\"{{choice.ChoiceId}}\"></label>\n                                        </div>\n                                        <div class=\"checkbox\" *ngIf=\"questiondata.questionType === 'MCQ_MULTIPLE'\">\n                                            <input type=\"checkbox\" [id]=\"choice.ChoiceId\" name=\"answers\"\n                                                (click)=\"onSelectMCQMultipleAnswer(questiondata.id,choice.ChoiceId,$event)\">\n                                            <label for=\" {{choice.ChoiceId}}\"></label>\n                                        </div>\n                                        <label [MathJax]=\"choice.ChoiceText  | sanitizeHtml\"></label>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_MATCH_LIST'\">\n                                <div class=\"row mb-3\">\n                                    <div class=\"col-xxl-12\">\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\n                                            style=\"line-height: 24px;\">\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex}}.&nbsp;</span>\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question  | sanitizeHtml\">\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div cdkDropListGroup>\n                                    <div class=\"example-container d-flex justify-content-between flex-nowrap mb-2\">\n                                        <div class=\"mcq-left mr-2\">\n                                            <div class=\"match-list\" data-value=\"questiondata.choices\">\n                                                <div class=\"list-box\" *ngFor=\"let item of questiondata.choices\"\n                                                    [MathJax]=\"item.ChoiceText  | sanitizeHtml\"></div>\n                                            </div>\n                                        </div>\n                                        <!-- <div class=\"line-circle w-auto\" *ngFor=\"let item of viewModel.Choices\" id=\"{{item}}\"></div> -->\n                                        <div class=\"mcq-right ml-2\">\n                                            <div cdkDropList [cdkDropListData]=\"questiondata.options\" class=\"match-list\"\n                                                (cdkDropListDropped)=\"updatedDropList(questiondata.id, $event)\">\n                                                <div class=\"list-box\" *ngFor=\"let item of questiondata.options\" cdkDrag\n                                                    [MathJax]=\"item.OptionText  | sanitizeHtml\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_CHOICE_MATRIX'\">\n                                <div class=\"row mb-3\">\n                                    <div class=\"col-xxl-12\">\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\n                                            style=\"line-height: 24px;\">\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex}}.&nbsp;</span>\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question  | sanitizeHtml\">\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <table class=\"table-matrix my-2 text-capitalize\">\n                                    <tr class=\"bg-lightgray\">\n                                        <td></td>\n                                        <td *ngFor=\"let option of questiondata.options\">\n                                            <span class=\"text-dark\"\n                                                [MathJax]=\"option.OptionText  | sanitizeHtml\"></span>\n                                        </td>\n                                    </tr>\n                                    <tr style=\"background: none !important;\"\n                                        *ngFor=\"let choice of questiondata.choices\">\n                                        <td><span [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></span></td>\n                                        <td *ngFor=\"let option of questiondata.options\">\n                                            <div class=\"radio\">\n                                                <input type=\"radio\" [id]=\"choice.ChoiceId+option.OptionId\"\n                                                    name=\"{{ choice.ChoiceId }}\"\n                                                    (click)=\"onSelectChoiceMatrixAnswer(questiondata.id,choice.ChoiceId, option.OptionId)\">\n                                                <label for=\"{{choice.ChoiceId+option.OptionId}}\"></label>\n                                            </div>\n                                        </td>\n                                    </tr>\n                                </table>\n                            </div>\n                            <div class=\"w-100 d-flex justify-content-end align-self-center my-2\">\n                                <div class=\"btn btn-danger mb-2\" href=\"#questionSimulateIndicators\" role=\"button\"\n                                    data-slide=\"prev\" *ngIf=\"questionIndex !== 0\" (click)=\"previousQuestion()\">\n                                    <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n                                </div>\n                                <div class=\"btn btn-info mx-2 mb-2\" (click)=\"checkAnswerStatus(questiondata.id)\">\n                                    <i class=\"fa fa-check mr-2\"></i>Check answer\n                                </div>\n                                <div class=\"btn btn-success mb-2\" href=\"#questionSimulateIndicators\" role=\"button\"\n                                    data-slide=\"next\" *ngIf=\"questionIndex !== topicQuestions.length - 1\"\n                                    (click)=\"nextQuestion()\">\n                                    Next<i class=\"fa fa-arrow-right ml-2\"></i>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <div class=\"btn btn-danger\" (click)=\"closeSimulateQuestionModal()\">\n                    <i class=\"fa fa-times mr-2\"></i> Close\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal\" id=\"previewTopicQuestionModal\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"previewTopicQuestionModal\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-notify\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\n                <h5 class=\"modal-title text-white\">\n                    Preview question - {{topicName}}\n                </h5>\n                <div class=\"close btn btn-xl\" (click)=\"closePreviewQuestionModal()\">\n                    <i class=\"fa fa-times\"></i>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                <div id=\"questionPreviewIndicators\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\"\n                    data-interval=\"false\">\n                    <div class=\"carousel-inner\">\n                        <div class=\"carousel-item\" [ngClass]=\"{'active': questionIndex === 0}\"\n                            *ngFor=\"let questiondata of topicQuestions;let questionIndex = index;\">\n                            <div\n                                *ngIf=\"questiondata.questionType === 'MCQ_SINGLE' || questiondata.questionType === 'MCQ_MULTIPLE' || questiondata.questionType === 'MCQ_TRUE_FALSE'\">\n                                <div class=\"row mb-3\">\n                                    <div class=\"col-xxl-12\">\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\n                                            style=\"line-height: 24px;\">\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex+1}}.&nbsp;</span>\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question  | sanitizeHtml\">\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row mb-3 p-3 text-capitalize\">\n                                    <div class=\"col-lg-6 col-md-12 d-flex justify-content-start mb-2\"\n                                        *ngFor=\"let choice of questiondata.choices;let i = index\">\n                                        <div class=\"radio\" *ngIf=\"questiondata.questionType !== 'MCQ_MULTIPLE'\">\n                                            <input type=\"radio\" [id]=\"choice.ChoiceId\" name=\"answer\"\n                                                [answers]=\"questiondata.answers\" disabled readonly>\n                                            <label for=\"{{choice.ChoiceId}}\"></label>\n                                        </div>\n                                        <div class=\"checkbox\" *ngIf=\"questiondata.questionType === 'MCQ_MULTIPLE'\">\n                                            <input type=\"checkbox\" [id]=\"choice.ChoiceId\" name=\"answers\" disabled\n                                                readonly [answers]=\"questiondata.answers\">\n                                            <label for=\" {{choice.ChoiceId}}\"></label>\n                                        </div>\n                                        <label for=\"{{choice.ChoiceId}}\"\n                                            [MathJax]=\"choice.ChoiceText  | sanitizeHtml\"></label>\n                                    </div>\n                                </div>\n                                <div class=\"mb-3 font-18\">\n                                    <div class=\"border-success p-3 alert-success\">\n                                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\n                                            *ngFor=\"let answer of questiondata.answers;let checkIndex =index\">\n                                            <span [MathJax]=\"answer || sanitizeHtml\"></span>\n                                            {{checkIndex  === questiondata.answers.length - 1? ' ' : ','}}</span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_MATCH_LIST'\">\n                                <div class=\"row mb-3\">\n                                    <div class=\"col-xxl-12\">\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\n                                            style=\"line-height: 24px;\">\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex}}.&nbsp;</span>\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question  | sanitizeHtml\">\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <ng-container *ngFor=\"let answer of questiondata.answers;\">\n                                    <div class=\"choice-container\">\n                                        <div class=\"item\">\n                                            <div class=\"choice--group\">\n                                                <div class=\"choice--label\">\n                                                    <span [MathJax]=\"answer.choiceName  | sanitizeHtml\"></span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"line-circle\">\n                                        </div>\n                                        <div class=\"item\">\n                                            <div class=\"drag--container\">\n                                                <div class=\"choice--editor option--container zone\" class=\"option--item\"\n                                                    [MathJax]=\"answer.optionName  | sanitizeHtml\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </ng-container>\n                                <div class=\"mb-3 font-18\">\n                                    <div class=\"border-success p-3 alert-success\">\n                                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span\n                                            class=\"text-dark d-flex flex-nowrap\"\n                                            *ngFor=\"let answer of questiondata.answers;let checkIndex =index\">\n                                            <span [MathJax]=\"answer.choiceName || sanitizeHtml\"></span> <span>-</span>\n                                            <span [MathJax]=\"answer.optionName || sanitizeHtml\"></span>\n                                            {{checkIndex  === questiondata.answers.length - 1? ' ' : ','}}</span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_CHOICE_MATRIX'\">\n                                <div class=\"row mb-3\">\n                                    <div class=\"col-xxl-12\">\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\n                                            style=\"line-height: 24px;\">\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex}}.&nbsp;</span>\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question  | sanitizeHtml\">\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <table class=\"table-matrix my-2 text-capitalize\">\n                                    <tr class=\"bg-lightgray\">\n                                        <td></td>\n                                        <td *ngFor=\"let option of questiondata.options\">\n                                            <span class=\"text-dark\"\n                                                [MathJax]=\"option.OptionText  | sanitizeHtml\"></span>\n                                        </td>\n                                    </tr>\n                                    <tr style=\"background: none !important;\"\n                                        *ngFor=\"let choice of questiondata.choices\">\n                                        <td><span [MathJax]=\"choice.ChoiceText  | sanitizeHtml\"></span></td>\n                                        <td *ngFor=\"let option of questiondata.options\">\n                                            <div class=\"radio\">\n                                                <input type=\"radio\" [id]=\"choice.ChoiceId+option.OptionId\"\n                                                    name=\"{{ choice.ChoiceId }}\" disabled readonly>\n                                                <label for=\"{{choice.ChoiceId+option.OptionId}}\"></label>\n                                            </div>\n                                        </td>\n                                    </tr>\n                                </table>\n                                <div class=\"mb-3 font-18\">\n                                    <div class=\"border-success p-3 alert-success\">\n                                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span\n                                            class=\"text-dark d-flex flex-nowrap\"\n                                            *ngFor=\"let answer of questiondata.answers;let checkIndex =index\">\n                                            <span [MathJax]=\"answer.choiceName || sanitizeHtml\"></span> <span>-</span>\n                                            <span [MathJax]=\"answer.optionName || sanitizeHtml\"></span>\n                                            {{checkIndex  === questiondata.answers.length - 1? ' ' : ','}}</span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"w-100 d-flex justify-content-end align-self-center my-2\">\n                                <div class=\"btn btn-danger mb-2\" href=\"#questionPreviewIndicators\" role=\"button\"\n                                    data-slide=\"prev\" *ngIf=\"questionIndex !== 0\">\n                                    <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n                                </div>\n                                <div class=\"btn btn-success ml-2  mb-2\" href=\"#questionPreviewIndicators\" role=\"button\"\n                                    data-slide=\"next\" *ngIf=\"questionIndex !== topicQuestions.length - 1\">\n                                    Next<i class=\"fa fa-arrow-right ml-2\"></i>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <div class=\"btn btn-danger\" (click)=\"closePreviewQuestionModal()\">\n                    <i class=\"fa fa-times mr-2\"></i> Close\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/syllabus-lesson-topic/topic-question/topic-question-manage.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/topic-question/topic-question-manage.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CurriculumTopicQuestionManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumTopicQuestionManageComponent", function() { return CurriculumTopicQuestionManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../syllabus-lesson-topic.service */ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/user-login-info/user-login-info.service */ "./src/app/shared/user-login-info/user-login-info.service.ts");
/* harmony import */ var _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../question-builder/question-builder.service */ "./src/app/question-builder/question-builder.service.ts");
/* harmony import */ var _subject_subject_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../subject/subject.service */ "./src/app/subject/subject.service.ts");
/* harmony import */ var _organisation_organisation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../organisation/organisation.service */ "./src/app/organisation/organisation.service.ts");
/* harmony import */ var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../curriculum/curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");














var CurriculumTopicQuestionManageComponent = /** @class */ (function () {
    function CurriculumTopicQuestionManageComponent(_router, activatedRoute, curriculumService, organisationService, subjectService, topicQuestionService, eventManager, parseLinks, principalService, pluginService, userLoginService, questionBuilderService) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.curriculumService = curriculumService;
        this.organisationService = organisationService;
        this.subjectService = subjectService;
        this.topicQuestionService = topicQuestionService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.userLoginService = userLoginService;
        this.questionBuilderService = questionBuilderService;
        this.questionIds = [];
        this.curriculumList = [];
        this.gradeList = [];
        this.subjectList = [];
        this.subjectTree = [];
        this.lessonList = [];
        this.organisations = [];
        this.generalTopicQuestions = [];
        this.ownTopicQuestions = [];
        this.orgGeneralTopicQuestions = [];
        this.topicQuestions = [];
        this.ownTopicQuestionResources = [];
        this.orgTopicQuestionResources = [];
        this.generalTopicQuestionResources = [];
        this.selectedAnswer = [];
        this.enableExpandNode = false;
        this.tableAction = true;
    }
    CurriculumTopicQuestionManageComponent.prototype.ngOnInit = function () {
        this.checkQuestionCE = false;
        this.enableExpandNode = false;
        this.questionPreferenceStatus = false;
        this.loadCurriculums();
    };
    CurriculumTopicQuestionManageComponent.prototype.loadCurriculums = function () {
        var _this = this;
        this.curriculumService.getCurriculumSearch().subscribe(function (res) { return _this.assignCurriculumList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    CurriculumTopicQuestionManageComponent.prototype.assignCurriculumList = function (data) {
        this.curriculumList = [];
        for (var i = 0; i < data.length; i++) {
            this.curriculumList.push(data[i]);
        }
    };
    CurriculumTopicQuestionManageComponent.prototype.onError = function (errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    };
    CurriculumTopicQuestionManageComponent.prototype.ngAfterViewInit = function () {
        this.nodeOnSelected();
    };
    CurriculumTopicQuestionManageComponent.prototype.onCurriculumChange = function () {
        var gradesApplicableFrom, gradesApplicableTo;
        if (this.selectedCurriculum) {
            gradesApplicableFrom = this.selectedCurriculum.gradesApplicableFrom;
            gradesApplicableTo = this.selectedCurriculum.gradesApplicableTo;
            this.generateGradeList(gradesApplicableFrom, gradesApplicableTo);
        }
        this.selectedGrade = null;
        this.selectedSubject = null;
        this.selectedLesson = null;
    };
    CurriculumTopicQuestionManageComponent.prototype.onGradeChange = function () {
        var _this = this;
        var curriculumId, gradeId, status;
        if (this.selectedGrade) {
            curriculumId = this.selectedCurriculum.id;
            gradeId = this.selectedGrade.id;
            status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_12__["ACTIVE"];
            this.subjectService
                .getSubjectByCurriculumIdAndGradeId(curriculumId, gradeId, status)
                .subscribe(function (res) { return _this.assignSubjectList(res.body); }, function (res) { return _this.onError(res.message); });
        }
        this.selectedSubject = null;
        this.selectedLesson = null;
    };
    CurriculumTopicQuestionManageComponent.prototype.onSubjectChange = function () {
        if (this.selectedSubject) {
            var subjectId = this.selectedSubject.id;
            this.loadSubjectTree(subjectId);
        }
        this.selectedLesson = null;
    };
    CurriculumTopicQuestionManageComponent.prototype.assignSubjectList = function (data) {
        this.subjectList = [];
        this.subjectTree = [];
        this.pluginService.jsTree("#viewSubjectTree", this.subjectTree, false);
        for (var i = 0; i < data.length; i++) {
            this.subjectList.push(data[i]);
        }
    };
    CurriculumTopicQuestionManageComponent.prototype.generateGradeList = function (min, max) {
        this.gradeList = [];
        for (var i = min; i <= max; i++) {
            this.gradeList.push({
                "id": i,
                "name": i
            });
        }
        return this.gradeList;
    };
    CurriculumTopicQuestionManageComponent.prototype.loadSubjectTree = function (subjectId) {
        var _this = this;
        this.subjectService.getSubjectTreeBySubjectId(subjectId).subscribe(function (res) { return _this.assignSubjectTree(res.body); }, function (res) { return _this.onError(res.message); });
    };
    CurriculumTopicQuestionManageComponent.prototype.assignSubjectTree = function (data) {
        this.lessonList = [];
        $("#lesson").val("").trigger('change');
        this.subjectTree = data;
        this.lessonList = this.subjectTree.filter(function (item) { return item.type === 'lesson'; });
        this.pluginService.jsTree("#viewSubjectTree", this.subjectTree, false);
    };
    CurriculumTopicQuestionManageComponent.prototype.getLessonTopicList = function () {
        var _this = this;
        if (this.selectedLesson) {
            var lessonId = this.selectedLesson.data.id;
            if (lessonId) {
                this.topicQuestionService
                    .getLessonTopicListByLessonId(lessonId)
                    .subscribe(function (res) { return _this.assignLessonTopicsList(res.body); }, function (res) { return _this.onError(res.message); });
            }
            else {
                this.pluginService.alertMessage("Please select a filter and then apply", "error");
            }
        }
    };
    CurriculumTopicQuestionManageComponent.prototype.assignLessonTopicsList = function (data) {
        var topicsList = [], treeTopicsList = [];
        topicsList = data.lessonTopics;
        for (var i = 0; i < topicsList.length; i++) {
            treeTopicsList.push({
                text: topicsList[i].topicName,
                generalTopicId: topicsList[i].generalTopicId,
                id: topicsList[i].id,
            });
        }
        this.pluginService.jsTree("#topicsList", treeTopicsList, false);
        this.showQuestionMapping = false;
        this.showTopicHeading = true;
        this.enableExpandNode = false;
    };
    CurriculumTopicQuestionManageComponent.prototype.nodeOnSelected = function () {
        var localThisObj = this;
        $('#topicsList')
            .on('changed.jstree', function (e, data) {
            var i, j;
            for (i = 0, j = data.selected.length; i < j; i++) {
                localThisObj.generalTopicId = data.node.original.generalTopicId;
                localThisObj.topicName = data.node.original.text;
                localThisObj.generalTopicQuestions = [];
                localThisObj.orgGeneralTopicQuestions = [];
                localThisObj.ownTopicQuestions = [];
                localThisObj.getTopicQuestionList(localThisObj.generalTopicId);
                localThisObj.getOrgGeneralTopicQuestionByOrganisationId(localThisObj.generalTopicId);
                localThisObj.getOrganisationList();
                localThisObj.getQuestionPreference(localThisObj.generalTopicId);
                localThisObj.showQuestionMapping = true;
                localThisObj.tableAction = true;
            }
        });
    };
    CurriculumTopicQuestionManageComponent.prototype.getTopicQuestionList = function (generalTopicId) {
        var _this = this;
        this.topicQuestionService.getTopicDetails(generalTopicId).subscribe(function (res) { return _this.assignResponseToTopicQuestionList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    CurriculumTopicQuestionManageComponent.prototype.assignResponseToTopicQuestionList = function (data) {
        var questionDetails = [], question, complexityLevel, questionType;
        this.generalTopicQuestions = [];
        this.ownTopicQuestions = [];
        this.generalTopicQuestionResources = [];
        this.ownTopicQuestionResources = [];
        this.generalTopicQuestionResources = data.questions;
        this.ownTopicQuestionResources = data.orgGeneralTopicQuestions;
        for (var i = 0; i < this.generalTopicQuestionResources.length; i++) {
            questionDetails = [];
            questionDetails.push(this.questionBuilderService.convertStringToJson(this.generalTopicQuestionResources[i].contentJson));
            for (var j = 0; j < questionDetails.length; j++) {
                question = questionDetails[j].Question;
                if (this.generalTopicQuestionResources[i].complexityLevel === 1) {
                    complexityLevel = "Low";
                }
                else if (this.generalTopicQuestionResources[i].complexityLevel === 2) {
                    complexityLevel = "Medium";
                }
                else if (this.generalTopicQuestionResources[i].complexityLevel === 3) {
                    complexityLevel = "High";
                }
                else {
                    complexityLevel = "";
                }
                if (questionDetails[j].QuestionType === "MCQ_SINGLE") {
                    questionType = "MCQ single answer";
                }
                else if (questionDetails[j].QuestionType === "MCQ_MULTIPLE") {
                    questionType = "MCQ multiple answers";
                }
                else if (questionDetails[j].QuestionType === "MCQ_CHOICE_MATRIX") {
                    questionType = "Choice matrix";
                }
                else if (questionDetails[j].QuestionType === "MCQ_TRUE_FALSE") {
                    questionType = "MCQ true or false";
                }
                else if (questionDetails[j].QuestionType === "MCQ_MATCH_LIST") {
                    questionType = "MCQ match list";
                }
                else {
                    questionType = "";
                }
                this.generalTopicQuestions.push({
                    id: this.generalTopicQuestionResources[i].id,
                    questionCategory: this.titleCapitalize(this.generalTopicQuestionResources[i].category),
                    complexityLevel: complexityLevel,
                    questionText: question,
                    questionType: questionType,
                    generalTopicId: this.generalTopicQuestionResources[i].generalTopicId
                });
            }
        }
        for (var i = 0; i < this.ownTopicQuestionResources.length; i++) {
            questionDetails = [];
            questionDetails.push(this.questionBuilderService.convertStringToJson(this.ownTopicQuestionResources[i].question.contentJson));
            for (var j = 0; j < questionDetails.length; j++) {
                question = questionDetails[j].Question;
                if (this.ownTopicQuestionResources[i].question.complexityLevel === 1) {
                    complexityLevel = "Low";
                }
                else if (this.ownTopicQuestionResources[i].question.complexityLevel === 2) {
                    complexityLevel = "Medium";
                }
                else if (this.ownTopicQuestionResources[i].question.complexityLevel === 3) {
                    complexityLevel = "High";
                }
                else {
                    complexityLevel = "";
                }
                if (questionDetails[j].QuestionType === "MCQ_SINGLE") {
                    questionType = "MCQ single answer";
                }
                else if (questionDetails[j].QuestionType === "MCQ_MULTIPLE") {
                    questionType = "MCQ multiple answers";
                }
                else if (questionDetails[j].QuestionType === "MCQ_CHOICE_MATRIX") {
                    questionType = "Choice matrix";
                }
                else if (questionDetails[j].QuestionType === "MCQ_TRUE_FALSE") {
                    questionType = "MCQ true or false";
                }
                else if (questionDetails[j].QuestionType === "MCQ_MATCH_LIST") {
                    questionType = "MCQ match list";
                }
                else {
                    questionType = "";
                }
                this.ownTopicQuestions.push({
                    id: this.ownTopicQuestionResources[i].id,
                    questionCategory: this.titleCapitalize(this.ownTopicQuestionResources[i].question.category),
                    complexityLevel: complexityLevel,
                    questionText: question,
                    questionType: questionType,
                    generalTopicId: this.ownTopicQuestionResources[i].generalTopicId,
                    questionId: this.ownTopicQuestionResources[i].question.id
                });
            }
        }
    };
    CurriculumTopicQuestionManageComponent.prototype.getOrgGeneralTopicQuestionByOrganisationId = function (generalTopicId) {
        var _this = this;
        //User login Information for organisationId 
        this.organisationId = this.userLoginService.organisationId;
        this.topicQuestionService.getOrgGeneralTopicQuestionsByOrgId(generalTopicId, this.organisationId).subscribe(function (res) { return _this.assignResponseToOrgTopicQuestionList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    CurriculumTopicQuestionManageComponent.prototype.assignResponseToOrgTopicQuestionList = function (data) {
        var questionDetails = [], question, complexityLevel, questionType;
        this.orgGeneralTopicQuestions = [];
        this.orgTopicQuestionResources = [];
        this.orgTopicQuestionResources = data;
        for (var i = 0; i < this.orgTopicQuestionResources.length; i++) {
            questionDetails = [];
            questionDetails.push(this.questionBuilderService.convertStringToJson(this.orgTopicQuestionResources[i].question.contentJson));
            for (var j = 0; j < questionDetails.length; j++) {
                question = questionDetails[j].Question;
                if (this.orgTopicQuestionResources[i].question.complexityLevel === 1) {
                    complexityLevel = "Low";
                }
                else if (this.orgTopicQuestionResources[i].question.complexityLevel === 2) {
                    complexityLevel = "Medium";
                }
                else if (this.orgTopicQuestionResources[i].question.complexityLevel === 3) {
                    complexityLevel = "High";
                }
                else {
                    complexityLevel = "";
                }
                if (questionDetails[j].QuestionType === "MCQ_SINGLE") {
                    questionType = "MCQ single answer";
                }
                else if (questionDetails[j].QuestionType === "MCQ_MULTIPLE") {
                    questionType = "MCQ multiple answers";
                }
                else if (questionDetails[j].QuestionType === "MCQ_CHOICE_MATRIX") {
                    questionType = "Choice matrix";
                }
                else if (questionDetails[j].QuestionType === "MCQ_TRUE_FALSE") {
                    questionType = "MCQ true or false";
                }
                else if (questionDetails[j].QuestionType === "MCQ_MATCH_LIST") {
                    questionType = "MCQ match list";
                }
                else {
                    questionType = "";
                }
                this.orgGeneralTopicQuestions.push({
                    id: this.orgTopicQuestionResources[i].question.id,
                    question: question,
                    questionCategory: this.titleCapitalize(this.orgTopicQuestionResources[i].question.category),
                    complexityLevel: complexityLevel,
                    questionType: questionType,
                    generalTopicId: this.orgTopicQuestionResources[i].generalTopicId
                });
            }
        }
    };
    CurriculumTopicQuestionManageComponent.prototype.titleCapitalize = function (word) {
        if (!word)
            return word;
        return word[0].toUpperCase() + word.substr(1).toLowerCase();
    };
    CurriculumTopicQuestionManageComponent.prototype.getOrgTopicQuestiontByOrgId = function () {
        var _this = this;
        var organisationId = this.selectedOrganisation.id;
        this.topicQuestionService.getOrgGeneralTopicQuestionsByOrgId(this.generalTopicId, organisationId).subscribe(function (res) { return _this.assignResponseToOrgTopicQuestionListByOrgId(res.body); }, function (res) { return _this.onError(res.message); });
    };
    CurriculumTopicQuestionManageComponent.prototype.assignResponseToOrgTopicQuestionListByOrgId = function (data) {
        var questionDetails = [], question;
        this.orgGeneralTopicQuestions = [];
        this.orgTopicQuestionResources = [];
        this.orgTopicQuestionResources = data;
        for (var i = 0; i < this.orgTopicQuestionResources.length; i++) {
            questionDetails = [];
            questionDetails.push(this.questionBuilderService.convertStringToJson(this.orgTopicQuestionResources[i].question.contentJson));
            for (var j = 0; j < questionDetails.length; j++) {
                question = questionDetails[j].Question;
                this.orgGeneralTopicQuestions.push({
                    id: this.orgTopicQuestionResources[i].question.id,
                    question: question,
                    questionType: questionDetails[j].QuestionType,
                    generalTopicId: this.orgTopicQuestionResources[i].generalTopicId
                });
            }
        }
    };
    CurriculumTopicQuestionManageComponent.prototype.getOrganisationList = function () {
        var _this = this;
        this.organisationService.getOrganisations().subscribe(function (res) { return _this.assignOrgList(res.body); }, function (res) { return _this.onError(res.message); });
    };
    CurriculumTopicQuestionManageComponent.prototype.assignOrgList = function (data) {
        this.organisations = data;
    };
    CurriculumTopicQuestionManageComponent.prototype.openSubjectTreeModal = function () {
        this.pluginService.showModalWindow("#viewSubjectTreeModal");
    };
    CurriculumTopicQuestionManageComponent.prototype.closeSubjectTreeModal = function () {
        this.pluginService.hideModalWindow("#viewSubjectTreeModal");
    };
    CurriculumTopicQuestionManageComponent.prototype.checkSelectedOwnQuestions = function (event) {
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
    CurriculumTopicQuestionManageComponent.prototype.removeDuplicateElements = function (array) {
        var temp = [];
        for (var i = 0; i < array.length; i++) {
            if (temp.indexOf(array[i]) == -1) {
                temp.push(array[i]);
            }
        }
        return temp;
    };
    CurriculumTopicQuestionManageComponent.prototype.deleteTopicQuestions = function () {
        var localthisObject = this;
        swal({
            title: "Are you sure to delete questions ?",
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
                    localthisObject.subscribeToDeleteResponse(localthisObject.topicQuestionService.deleteOwnTopicQuestions(localthisObject.questionIds));
                }
            }
        });
    };
    CurriculumTopicQuestionManageComponent.prototype.subscribeToDeleteResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onDeleteSuccess(res); }, function (errRes) { return _this.onDeleteError(errRes); });
    };
    CurriculumTopicQuestionManageComponent.prototype.onDeleteSuccess = function (res) {
        this.pluginService.alertMessage("Topic question deleted successfully", "success");
        this.ownTopicQuestions = [];
        this.questionIds = [];
        this.getTopicQuestionList(this.generalTopicId);
        this.tableAction = true;
    };
    CurriculumTopicQuestionManageComponent.prototype.onDeleteError = function (errRes) {
        this.pluginService.alertMessage("Could not delete, please contact admin", "error");
    };
    CurriculumTopicQuestionManageComponent.prototype.resetSelectedOwnTopicQuestions = function () {
        this.questionIds = [];
        $(".checkAll").prop("checked", false);
        this.tableAction = true;
    };
    CurriculumTopicQuestionManageComponent.prototype.checkQuestionPreference = function (event) {
        var check = event.target.checked;
        var name = event.target.id;
        if (check === true && name === "QuestionCE") {
            this.questionPreferenceStatus = false;
        }
        else if (check === true && name === "OwnQuestion") {
            this.questionPreferenceStatus = true;
        }
    };
    CurriculumTopicQuestionManageComponent.prototype.getQuestionPreference = function (generalTopicId) {
        var _this = this;
        //User login Information for organisationId 
        var orgId = this.userLoginService.organisationId;
        this.topicQuestionService.getQuestionPreference(orgId, generalTopicId).subscribe(function (res) { return _this.onGetPreferenceSuccess(res.body); }, function (res) { return _this.onError(res.message); });
    };
    CurriculumTopicQuestionManageComponent.prototype.onGetPreferenceSuccess = function (acitveStatus) {
        if (acitveStatus === "" || acitveStatus === null || acitveStatus === false) {
            this.checkQuestionCE = true;
            this.checkOwnQuestion = false;
        }
        else if (acitveStatus === true) {
            this.checkQuestionCE = false;
            this.checkOwnQuestion = true;
        }
    };
    CurriculumTopicQuestionManageComponent.prototype.saveQuestionPreference = function () {
        if (this.questionPreferenceStatus === false) {
            if (this.generalTopicQuestions.length <= 0) {
                this.pluginService.alertMessage("Before set question preference atleast one general topic question is mandatory", "error");
            }
            else {
                this.setQuestionPreference();
            }
        }
        else if (this.questionPreferenceStatus === true) {
            if (this.ownTopicQuestions.length <= 0) {
                this.pluginService.alertMessage("Please add atleast one own topic question and do preference", "error");
            }
            else {
                this.setQuestionPreference();
            }
        }
    };
    CurriculumTopicQuestionManageComponent.prototype.setQuestionPreference = function () {
        var _this = this;
        this.topicQuestionService.setQuestionPreference(this.questionPreferenceStatus, this.generalTopicId, this.organisationId).subscribe(function (res) { return _this.onSuccess(res.body); }, function (res) { return _this.onError(res.message); });
    };
    CurriculumTopicQuestionManageComponent.prototype.onSuccess = function (data) {
        this.pluginService.alertMessage("Question preference saved successfully", "success");
    };
    CurriculumTopicQuestionManageComponent.prototype.toggleTreeNodes = function () {
        this.enableExpandNode = !this.enableExpandNode;
        if (this.enableExpandNode) {
            this.pluginService.openJsTreeAllNodes("#viewSubjectTree");
        }
        else {
            this.pluginService.closeJsTreeAllNodes("#viewSubjectTree");
        }
    };
    CurriculumTopicQuestionManageComponent.prototype.loadUpdatedTopicQuestion = function () {
        this.getTopicQuestionList(this.generalTopicId);
        this.getOrgGeneralTopicQuestionByOrganisationId(this.generalTopicId);
    };
    CurriculumTopicQuestionManageComponent.prototype.openGeneralTopicSimulateQuestionModal = function () {
        this.pluginService.showModalWindow("#simulateTopicQuestionModal");
        this.simulateGeneralTopicQuestionList(this.generalTopicQuestionResources);
    };
    CurriculumTopicQuestionManageComponent.prototype.openOrgTopicSimulateQuestionModal = function () {
        this.pluginService.showModalWindow("#simulateTopicQuestionModal");
        this.simulateOwnTopicQuestionList(this.orgTopicQuestionResources);
    };
    CurriculumTopicQuestionManageComponent.prototype.openOwnTopicSimulateQuestionModal = function () {
        this.pluginService.showModalWindow("#simulateTopicQuestionModal");
        this.simulateOwnTopicQuestionList(this.ownTopicQuestionResources);
    };
    CurriculumTopicQuestionManageComponent.prototype.closeSimulateQuestionModal = function () {
        this.pluginService.hideModalWindow("#simulateTopicQuestionModal");
    };
    CurriculumTopicQuestionManageComponent.prototype.openGeneralTopicPreviewQuestionModal = function () {
        this.pluginService.showModalWindow("#previewTopicQuestionModal");
        this.previewGeneralTopicQuestionList(this.generalTopicQuestionResources);
    };
    CurriculumTopicQuestionManageComponent.prototype.openOrgTopicPreviewQuestionModal = function () {
        this.pluginService.showModalWindow("#previewTopicQuestionModal");
        this.previewOwnTopicQuestionList(this.orgTopicQuestionResources);
    };
    CurriculumTopicQuestionManageComponent.prototype.openOwnTopicPreviewQuestionModal = function () {
        this.pluginService.showModalWindow("#previewTopicQuestionModal");
        this.previewOwnTopicQuestionList(this.ownTopicQuestionResources);
    };
    CurriculumTopicQuestionManageComponent.prototype.closePreviewQuestionModal = function () {
        this.pluginService.hideModalWindow("#previewTopicQuestionModal");
    };
    CurriculumTopicQuestionManageComponent.prototype.previewGeneralTopicQuestionList = function (questionResources) {
        var questionDetails, options = [], answers = [], choices = [];
        this.topicQuestions = [];
        for (var i = 0; i < questionResources.length; i++) {
            questionDetails = this.questionBuilderService.convertStringToJson(questionResources[i].contentJson);
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
                id: questionResources[i].id,
                question: questionDetails.Question,
                questionType: questionDetails.QuestionType,
                generalTopicId: questionResources[i].generalTopicId,
                questionId: questionResources[i].id,
                choices: questionDetails.Choices,
                options: options,
                answers: answers
            });
        }
    };
    CurriculumTopicQuestionManageComponent.prototype.simulateGeneralTopicQuestionList = function (questionResources) {
        var questionDetails, options = [], choices = [];
        this.topicQuestions = [];
        for (var i = 0; i < questionResources.length; i++) {
            questionDetails = this.questionBuilderService.convertStringToJson(questionResources[i].contentJson);
            if (questionDetails.QuestionType === "MCQ_MATCH_LIST" || questionDetails.QuestionType === "MCQ_CHOICE_MATRIX") {
                options = this.shuffleArray(questionDetails.Options);
                choices = questionDetails.Choices;
            }
            else {
                options = [];
                choices = this.shuffleArray(questionDetails.Choices);
            }
            this.topicQuestions.push({
                id: questionResources[i].id,
                question: questionDetails.Question,
                questionType: questionDetails.QuestionType,
                generalTopicId: questionResources[i].generalTopicId,
                questionId: questionResources[i].id,
                choices: choices,
                options: options,
                answers: questionDetails.Answers,
                checkAnswer: ""
            });
        }
    };
    CurriculumTopicQuestionManageComponent.prototype.previewOwnTopicQuestionList = function (questionResources) {
        var questionDetails, options = [], answers = [], choices = [];
        this.topicQuestions = [];
        for (var i = 0; i < questionResources.length; i++) {
            questionDetails = this.questionBuilderService.convertStringToJson(questionResources[i].question.contentJson);
            if (questionDetails.QuestionType === "MCQ_MATCH_LIST" || questionDetails.QuestionType === "MCQ_CHOICE_MATRIX") {
                answers = [];
                choices = [];
                options = questionDetails.Options;
                choices = questionDetails.Choices;
                var _loop_3 = function (k) {
                    answers.push({
                        choiceName: choices.find(function (item) { return item.ChoiceId === questionDetails.Answers[k].ChoiceId; }).ChoiceText,
                        optionName: options.find(function (item) { return item.OptionId === questionDetails.Answers[k].OptionId; }).OptionText
                    });
                };
                for (var k = 0; k < questionDetails.Answers.length; k++) {
                    _loop_3(k);
                }
            }
            else if (questionDetails.QuestionType === "MCQ_SINGLE" || questionDetails.QuestionType === "MCQ_MULTIPLE" || questionDetails.QuestionType === "MCQ_TRUE_FALSE") {
                options = [];
                answers = [];
                var _loop_4 = function (j) {
                    var answerText = questionDetails.Choices.find(function (item) { return item.ChoiceId === questionDetails.Answers[j]; }).ChoiceText;
                    answers.push(answerText);
                    answerText = "";
                };
                for (var j = 0; j < questionDetails.Answers.length; j++) {
                    _loop_4(j);
                }
            }
            this.topicQuestions.push({
                id: questionResources[i].id,
                questionType: questionDetails.QuestionType,
                generalTopicId: questionResources[i].generalTopicId,
                questionId: questionResources[i].question.id,
                choices: questionDetails.Choices,
                options: options,
                answers: answers
            });
        }
    };
    CurriculumTopicQuestionManageComponent.prototype.simulateOwnTopicQuestionList = function (questionResources) {
        var questionDetails, options = [], choices = [];
        this.topicQuestions = [];
        for (var i = 0; i < questionResources.length; i++) {
            questionDetails = this.questionBuilderService.convertStringToJson(questionResources[i].question.contentJson);
            if (questionDetails.QuestionType === "MCQ_MATCH_LIST" || questionDetails.QuestionType === "MCQ_CHOICE_MATRIX") {
                options = this.shuffleArray(questionDetails.Options);
                choices = questionDetails.Choices;
            }
            else {
                options = [];
                choices = this.shuffleArray(questionDetails.Choices);
            }
            this.topicQuestions.push({
                id: questionResources[i].id,
                question: questionDetails.Question,
                questionType: questionDetails.QuestionType,
                generalTopicId: questionResources[i].generalTopicId,
                questionId: questionResources[i].question.id,
                choices: choices,
                options: options,
                answers: questionDetails.Answers,
                checkAnswer: ""
            });
        }
    };
    CurriculumTopicQuestionManageComponent.prototype.shuffleArray = function (array) {
        array.sort(function () { return Math.random() - 0.5; });
        return array;
    };
    CurriculumTopicQuestionManageComponent.prototype.onSelectMCQSingleAnswer = function (questionId, choiceId) {
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
    CurriculumTopicQuestionManageComponent.prototype.onSelectMCQMultipleAnswer = function (questionId, choiceId, event) {
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
    CurriculumTopicQuestionManageComponent.prototype.checkMultipleAnswer = function (index) {
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
    CurriculumTopicQuestionManageComponent.prototype.onSelectChoiceMatrixAnswer = function (questionId, choiceId, optionId) {
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
            var _loop_5 = function (i) {
                for (var j = i + 1; j < this_1.selectedAnswer.length; j++) {
                    if (this_1.selectedAnswer[i].ChoiceId === this_1.selectedAnswer[j].ChoiceId) {
                        index = this_1.selectedAnswer.findIndex(function (item) { return item.ChoiceId === _this.selectedAnswer[i].ChoiceId; });
                        this_1.selectedAnswer.splice(index, 1);
                    }
                }
            };
            var this_1 = this;
            for (var i = 0; i < this.selectedAnswer.length; i++) {
                _loop_5(i);
            }
        }
        this.checkMatrixAndMatchListAnswers(topicIndex);
    };
    CurriculumTopicQuestionManageComponent.prototype.checkAnswerStatus = function (questionId) {
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
    CurriculumTopicQuestionManageComponent.prototype.updatedDropList = function (questionId, event) {
        var topicIndex = this.topicQuestions.findIndex(function (item) { return item.id === questionId; });
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
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
    CurriculumTopicQuestionManageComponent.prototype.checkMatrixAndMatchListAnswers = function (index) {
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
    CurriculumTopicQuestionManageComponent.prototype.previousQuestion = function () {
        this.selectedAnswer = [];
    };
    CurriculumTopicQuestionManageComponent.prototype.nextQuestion = function () {
        this.selectedAnswer = [];
    };
    CurriculumTopicQuestionManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./topic-question-manage.component.html */ "./src/app/syllabus-lesson-topic/topic-question/topic-question-manage.component.html"),
            providers: [_syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_11__["CurriculumService"],
            _organisation_organisation_service__WEBPACK_IMPORTED_MODULE_10__["OrganisationService"],
            _subject_subject_service__WEBPACK_IMPORTED_MODULE_9__["SubjectService"],
            _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"],
            _core__WEBPACK_IMPORTED_MODULE_5__["Principal"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"],
            _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__["UserLoginInfoService"],
            _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_8__["QuestionBuilderService"]])
    ], CurriculumTopicQuestionManageComponent);
    return CurriculumTopicQuestionManageComponent;
}());



/***/ }),

/***/ "./src/app/syllabus-lesson-topic/topic-question/topic-question-update.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/topic-question/topic-question-update.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 my-3 justify-content-between d-flex\">\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\n        <i class=\"fa fa-chevron-left mr-2\"></i> Back\n    </div>\n</div>\n\n<div id=\"stepperTab\">\n    <ul id=\"progressbar\">\n        <li class=\"active\">\n            <span class=\"bar\">\n            </span>\n        </li>\n        <li>\n        </li>\n    </ul>\n\n    <fieldset>\n        <div class=\"row pb-4\">\n            <div class=\"col-xxl-12 p-3 alert-warning\">\n                <p class=\"font-20 text-warning\">Step 1 - Edit question</p>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-xxl-12 mx-3\">\n                <div class=\"form-group mb-2 row d-flex justify-content-between flex-wrap mb-2\">\n                    <label class=\"font-16 mb-3\">Select question category</label>\n                    <div class=\"d-flex w-100 row\">\n                        <div class=\"radio col-xxl-3\" *ngFor=\"let category of questionCategory\">\n                            <input type=\"radio\" id=\"{{category.name}}\" name=\"assessmentCategory\"\n                                (click)=\"onSelectQuestionCategory(category.tag)\" [checked]=\"category.checked\">\n                            <label for=\"{{category.name}}\">{{category.name}}</label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group  row d-flex justify-content-between flex-wrap mb-2\">\n                    <label class=\"font-16 mb-3\">Select question complexity level</label>\n                    <div class=\"d-flex w-100 row\">\n                        <div class=\"radio col-xxl-3\" *ngFor=\"let level of questionComplexityLevel\">\n                            <input type=\"radio\" id=\"{{level.name}}\" name=\"complexityLevel\" [checked]=\"level.checked\"\n                                (click)=\"onSelectComplexityLevel(level.value)\">\n                            <label for=\"{{level.name}}\">{{level.name}}</label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div\n            *ngIf=\"viewModel.QuestionType === 'MCQ_SINGLE' || viewModel.QuestionType === 'MCQ_MULTIPLE' || viewModel.QuestionType === 'MCQ_TRUE_FALSE'\">\n            <div class=\"w-100 d-block my-2\" *ngIf=\"viewModel\">\n                <div class=\"row my-2\">\n                    <div class=\"col-xxl-12 d-flex justify-content-between\">\n                        <h5 class=\"font-18 font-bold\">Compose question</h5>\n                    </div>\n                </div>\n                <div class=\"row mb-3\">\n                    <div class=\"col-xxl-12\">\n                        <ckeditor class=\"w-100\" [config]=\"editorQuestionConfig\" [(ngModel)]=\"viewModel.Question\"\n                            #questionInput=\"ngModel\">\n                        </ckeditor>\n                    </div>\n                </div>\n            </div>\n            <div class=\"mb-3\">\n                <h5 class=\"font-20 font-bold\">Choices</h5>\n            </div>\n            <div class=\"w-100 mb-2 my-2 d-flex\" *ngFor=\"let choice of viewModel.Choices\">\n                <div class=\"mcq-choice d-flex align-items-center\"\n                    [ngClass]=\"{'radio': choiceType === 'radio','checkbox': choiceType === 'checkbox'}\">\n                    <input type=\"{{choiceType}}\" [id]=\"choice.ChoiceId\" name=\"answer\" [answers]=\"viewModel.Answers\"\n                        [choiceid]=\"choice.ChoiceId\" (click)=\"markAsMCQAnswer(choice.ChoiceId)\">\n                    <label for=\"{{choice.ChoiceId}}\"></label>\n                </div>\n                <div class=\"mcq-question\">\n                    <ckeditor class=\"w-100\" [config]=\"editorChoiceConfig\" [(ngModel)]=\"choice.ChoiceText\"\n                        #questionInput=\"ngModel\">\n                    </ckeditor>\n                </div>\n                <div class=\"mcq-action font-22 d-flex align-items-center text-danger d-flex justify-content-end\">\n                    <i class=\"fa fa-trash\" (click)=\"deleteChoice(choice.ChoiceId)\"></i>\n                </div>\n            </div>\n            <div class=\"w-100 d-flex justify-content-end align-self-start my-2\">\n                <div class=\"btn btn-info\" *ngIf=\"viewModel.QuestionType !== 'MCQ_TRUE_FALSE'\" (click)=\"addChoice()\">\n                    <i class=\"fa fa-plus-circle mr-2\"></i> Add Choice</div>\n            </div>\n            <div class=\"my-3 font-18\">\n                <div class=\"border-success p-3 alert-success\">\n                    <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\n                        *ngFor=\"let answer of answers;let checkIndex =index\">\n                        <span [MathJax]=\"answer | sanitizeHtml\"></span>\n                        {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\n                </div>\n            </div>\n        </div>\n\n        <div *ngIf=\"viewModel.QuestionType ==='MCQ_CHOICE_MATRIX'\">\n            <div class=\"row my-2\">\n                <div class=\"col-xxl-12 d-flex justify-content-between\">\n                    <h5 class=\"font-18 font-bold\">Compose question</h5>\n                </div>\n            </div>\n            <div class=\"row mb-3\">\n                <div class=\"col-xxl-12\">\n                    <ckeditor class=\"w-100\" [config]=\"editorQuestionConfig\" [(ngModel)]=\"viewModel.Question\">\n                    </ckeditor>\n                </div>\n            </div>\n            <div class=\"w-100 d-block my-2\">\n                <p class=\"font-20 font-bold\">Stems</p>\n                <div class=\"w-100 d-flex mb-2\" *ngFor=\"let choice of viewModel.Choices\">\n                    <div class=\"mcq-stem\">\n                        <ckeditor class=\"w-100\" [config]=\"editorChoiceConfig\" [(ngModel)]=\"choice.ChoiceText\">\n                        </ckeditor>\n                    </div>\n                    <div class=\"mcq-action d-flex align-items-center justify-content-end font-22 text-danger\">\n                        <i class=\"fa fa-trash\" (click)=\"deleteStem(choice.ChoiceId)\"></i>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"w-100 d-flex justify-content-end my-2 align-self-start\">\n                <button class=\"btn btn-info\" (click)=\"addChoice()\">\n                    <i class=\"fa fa-plus-circle mr-2\"></i> Add stem</button>\n            </div>\n\n            <div class=\"w-100 d-block my-2\">\n                <p class=\"font-20 font-bold\">Options</p>\n                <div class=\"w-100 d-flex mb-2\" *ngFor=\"let option of viewModel.Options\">\n                    <div class=\"mcq-stem\">\n                        <ckeditor class=\"w-100\" [config]=\"editorChoiceConfig\" [(ngModel)]=\"option.OptionText\">\n                        </ckeditor>\n                    </div>\n                    <div class=\"mcq-action d-flex align-items-center justify-content-end font-22 text-danger\">\n                        <i class=\"fa fa-trash\" (click)=\"deleteOption(option.OptionId)\"></i>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"w-100 d-flex justify-content-end my-2 align-self-start\">\n                <button class=\"btn btn-info\" (click)=\"addOption()\">\n                    <i class=\"fa fa-plus-circle mr-2\"></i> Add Option</button>\n            </div>\n\n            <div class=\"w-100 d-block my-2\">\n                <p class=\"font-20 font-bold\">Setting up answers</p>\n            </div>\n\n            <table class=\"table-matrix my-2\">\n                <tr class=\"bg-lightgray\">\n                    <td></td>\n                    <td *ngFor=\"let option of viewModel.Options\">\n                        <span class=\"text-dark\" [MathJax]=\"option.OptionText | sanitizeHtml\"></span>\n                    </td>\n                </tr>\n                <tr style=\"background: none !important;\" *ngFor=\"let choice of viewModel.Choices\">\n                    <td><span [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></span></td>\n                    <td *ngFor=\"let option of viewModel.Options\">\n                        <div class=\"radio\">\n                            <input type=\"radio\" [id]=\"choice.ChoiceId+option.OptionId\"\n                                [choicematrix]=\"viewModel.Answers\" [optionid]=\"option.OptionId\"\n                                [choiceid]=\"choice.ChoiceId\" name=\"{{ choice.ChoiceId }}\"\n                                (click)=\"markAsMatrixAnswer(choice, option)\">\n                            <label for=\"{{choice.ChoiceId+option.OptionId}}\"></label>\n                        </div>\n                    </td>\n                </tr>\n            </table>\n\n            <div class=\"mb-3 font-18\">\n                <div class=\"border-success p-3 alert-success\">\n                    <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\n                        *ngFor=\"let answer of answers;let checkIndex =index\">\n                        <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span> -\n                        <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\n                        {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\n                </div>\n            </div>\n        </div>\n\n        <div *ngIf=\"viewModel.QuestionType === 'MCQ_MATCH_LIST'\">\n            <match-list [questionResource]=\"viewModel\"></match-list>\n        </div>\n\n        <button class=\"next btn btn-success float-right\" (click)=\"loadQuestionResource()\">\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\n        </button>\n\n    </fieldset>\n\n    <fieldset>\n        <div class=\"row mb-2\">\n            <div class=\"col-xxl-12 mb-2 alert-warning p-3\">\n                <p class=\"font-20 text-warning\">Step 2 - Edit solution content</p>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-xxl-12 mb-2\">\n                <label for=\"\">Solution content</label>\n                <ckeditor class=\"w-100\" [config]=\"editorQuestionConfig\" [(ngModel)]=\"solutionContent\"\n                    #questionInput=\"ngModel\" placeholder=\"Enter question (min length: 3 and max length: 4000)\"\n                    [required]=\"true\">\n                </ckeditor>\n            </div>\n        </div>\n\n\n        <button class=\"btn btn-success ml-2 float-right next\" (click)=\"updateQuestion()\">\n            <i class=\"fa fa-save mr-2\"></i>\n            Save question\n        </button>\n\n        <button class=\"btn btn-danger ml-2 float-right next\" (click)=\"resetQuestion()\">\n            <i class=\"fa fa-times mr-2\"></i>Reset\n        </button>\n\n        <div class=\"previous btn btn-danger float-right\">\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\n        </div>\n    </fieldset>\n</div>"

/***/ }),

/***/ "./src/app/syllabus-lesson-topic/topic-question/topic-question-update.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/topic-question/topic-question-update.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CurriculumTopicQuestionUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumTopicQuestionUpdateComponent", function() { return CurriculumTopicQuestionUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../syllabus-lesson-topic.service */ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../question-builder/question-builder.service */ "./src/app/question-builder/question-builder.service.ts");
/* harmony import */ var _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/user-login-info/user-login-info.service */ "./src/app/shared/user-login-info/user-login-info.service.ts");
/* harmony import */ var _question_builder_mcq_standard_mcq_standard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../question-builder/mcq-standard/mcq-standard.service */ "./src/app/question-builder/mcq-standard/mcq-standard.service.ts");
/* harmony import */ var _question_builder_mcq_choicematrix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../question-builder/mcq-choicematrix */ "./src/app/question-builder/mcq-choicematrix/index.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/common/common.service */ "./src/app/shared/common/common.service.ts");











var CurriculumTopicQuestionUpdateComponent = /** @class */ (function () {
    function CurriculumTopicQuestionUpdateComponent(activatedRoute, router, pluginService, questionBuilderService, questionService, formBuilder, userLoginService, commonService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pluginService = pluginService;
        this.questionBuilderService = questionBuilderService;
        this.questionService = questionService;
        this.formBuilder = formBuilder;
        this.userLoginService = userLoginService;
        this.commonService = commonService;
        this.questionDetail = {};
        this.viewModel = {};
        this.answers = [];
        this.questionCategory = [];
        this.questionComplexityLevel = [];
        this.contentSource = [];
        this.editorQuestionConfig = this.pluginService.getCKEditorQuestionConfig();
        this.editorChoiceConfig = this.pluginService.getCKEditorQuestionConfig();
        this.validateQuestion = true;
        this.getCurrentRouteInfo();
        this.activatedRoute.data.subscribe(function (args) {
            if (args.type === "MCQ_MATCH_LIST") {
                _this.viewModel.QuestionType = args.type;
            }
        });
    }
    CurriculumTopicQuestionUpdateComponent.prototype.getCurrentRouteInfo = function () {
        var splitArray = [], currentUrl;
        currentUrl = this.router.url;
        splitArray = currentUrl.split('/');
        this.currentRoute = splitArray.pop();
    };
    CurriculumTopicQuestionUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pluginService.sideMenuToggle();
        this.pluginService.newStepperJs();
        this.getContentSource();
        this.getQuestionCategory();
        this.getQuestionComplexityLevel();
        this.activatedRoute.params.subscribe(function (params) {
            _this.questionId = params['id'];
            _this.getQuestionDetail(_this.questionId);
        });
    };
    CurriculumTopicQuestionUpdateComponent.prototype.ngAfterViewInit = function () {
        this.loadUpdatedAnswers();
    };
    CurriculumTopicQuestionUpdateComponent.prototype.loadUpdatedAnswers = function () {
        if (this.viewModel.QuestionType === "MCQ_CHOICE_MATRIX") {
            this.questionBuilderService.generateQuestionResource(this.viewModel);
            this.showChoiceMatrixAnswers();
        }
        else if (this.viewModel.QuestionType === "MCQ_MULTIPLE" || this.viewModel.QuestionType === "MCQ_SINGLE" || this.viewModel.QuestionType === "MCQ_TRUE_FALSE") {
            this.questionBuilderService.generateQuestionResource(this.viewModel);
            this.showMCQAnswers();
        }
    };
    CurriculumTopicQuestionUpdateComponent.prototype.loadQuestionResource = function () {
        if (this.viewModel.QuestionType === "MCQ_CHOICE_MATRIX") {
            this.questionBuilderService.generateQuestionResource(this.viewModel);
            this.showChoiceMatrixAnswers();
            this.validateQuestion = false;
        }
        else if (this.viewModel.QuestionType === "MCQ_MULTIPLE" || this.viewModel.QuestionType === "MCQ_SINGLE" || this.viewModel.QuestionType === "MCQ_TRUE_FALSE") {
            this.questionBuilderService.generateQuestionResource(this.viewModel);
            this.validateQuestion = false;
            this.showMCQAnswers();
        }
    };
    CurriculumTopicQuestionUpdateComponent.prototype.getContentSource = function () {
        var _this = this;
        this.commonService.getContentSourceList().subscribe(function (data) {
            _this.contentSource = data;
        });
    };
    CurriculumTopicQuestionUpdateComponent.prototype.getQuestionCategory = function () {
        var _this = this;
        this.commonService.getQuestionCategoryList().subscribe(function (data) {
            _this.questionCategory = data;
        });
    };
    CurriculumTopicQuestionUpdateComponent.prototype.getQuestionComplexityLevel = function () {
        var _this = this;
        this.commonService.getQuestionComplexityLevelList().subscribe(function (data) {
            _this.questionComplexityLevel = data;
        });
    };
    CurriculumTopicQuestionUpdateComponent.prototype.onSelectQuestionCategory = function (value) {
        this.category = value;
    };
    CurriculumTopicQuestionUpdateComponent.prototype.onSelectComplexityLevel = function (value) {
        this.complexityLevel = value;
    };
    CurriculumTopicQuestionUpdateComponent.prototype.getQuestionDetail = function (questionId) {
        var _this = this;
        this.questionService
            .getQuestionByQuestionId(questionId)
            .subscribe(function (res) { return _this.assignQuestionResource(res.body); }, function (res) { return _this.onError(res.message); });
    };
    CurriculumTopicQuestionUpdateComponent.prototype.assignQuestionResource = function (data) {
        var _this = this;
        var categoryIndex, levelIndex;
        this.questionDetail = data;
        this.viewModel = this.questionBuilderService.convertStringToJson(this.questionDetail.contentJson);
        if (this.viewModel.QuestionType === "MCQ_MULTIPLE") {
            this.choiceType = "checkbox";
        }
        else if (this.viewModel.QuestionType === "MCQ_SINGLE" || this.viewModel.QuestionType === "MCQ_TRUE_FALSE") {
            this.choiceType = "radio";
        }
        categoryIndex = this.questionCategory.findIndex(function (item) { return item.tag === _this.questionDetail.category; });
        this.questionCategory[categoryIndex].checked = true;
        levelIndex = this.questionComplexityLevel.findIndex(function (item) { return item.value === _this.questionDetail.complexityLevel; });
        this.questionComplexityLevel[levelIndex].checked = true;
    };
    CurriculumTopicQuestionUpdateComponent.prototype.onError = function (resp) {
        this.pluginService.alertMessage("Could not get question detail please contact admin", "error");
    };
    CurriculumTopicQuestionUpdateComponent.prototype.addChoice = function () {
        this.viewModel.Choices.push(new _question_builder_mcq_standard_mcq_standard_service__WEBPACK_IMPORTED_MODULE_8__["Choice"](new Date().getUTCMilliseconds(), ""));
    };
    CurriculumTopicQuestionUpdateComponent.prototype.deleteChoice = function (choiceId) {
        for (var i = 0; i < this.viewModel.Answers.length; i++) {
            if (this.viewModel.Answers[i] !== choiceId) {
                var index = this.viewModel.Choices.findIndex(function (item) { return item.ChoiceId === choiceId; });
                this.viewModel.Choices.splice(index, 1);
            }
            else {
                this.pluginService.alertMessage("You can't delete it, choice is already related to answer", "error");
            }
        }
    };
    CurriculumTopicQuestionUpdateComponent.prototype.deleteStem = function (choiceId) {
        if (this.viewModel.Answers.length > 0) {
            this.pluginService.alertMessage("You can't delete it, choice is already related to answer", "error");
        }
        else {
            var index = this.viewModel.Choices.findIndex(function (item) { return item.ChoiceId === choiceId; });
            this.viewModel.Choices.splice(index, 1);
        }
    };
    CurriculumTopicQuestionUpdateComponent.prototype.markAsMCQAnswer = function (choiceId) {
        var index = this.viewModel.Answers.indexOf(choiceId);
        if (this.viewModel.QuestionType !== "MCQ_MULTIPLE") {
            this.viewModel.Answers = [];
        }
        if (index === -1) {
            this.viewModel.Answers = this.viewModel.Answers.concat([choiceId]);
        }
        else {
            this.viewModel.Answers = this.viewModel.Answers.filter(function (item) { return item !== choiceId; });
        }
        this.loadUpdatedAnswers();
    };
    CurriculumTopicQuestionUpdateComponent.prototype.showMCQAnswers = function () {
        var _this = this;
        this.answers = [];
        var _loop_1 = function (j) {
            var answerText = this_1.viewModel.Choices.find(function (item) { return item.ChoiceId === _this.viewModel.Answers[j]; }).ChoiceText;
            this_1.answers.push(answerText);
            answerText = "";
        };
        var this_1 = this;
        for (var j = 0; j < this.viewModel.Answers.length; j++) {
            _loop_1(j);
        }
    };
    CurriculumTopicQuestionUpdateComponent.prototype.showChoiceMatrixAnswers = function () {
        var answers = [], matrixChoices = [], matrixOptions = [];
        this.answers = [];
        answers = this.viewModel.Answers;
        matrixChoices = this.viewModel.Choices;
        matrixOptions = this.viewModel.Options;
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
    };
    CurriculumTopicQuestionUpdateComponent.prototype.addOption = function () {
        this.viewModel.Options = this.viewModel.Options.concat([new _question_builder_mcq_choicematrix__WEBPACK_IMPORTED_MODULE_9__["Option"](new Date().getUTCMilliseconds(), "")]);
    };
    CurriculumTopicQuestionUpdateComponent.prototype.deleteOption = function (optionId) {
        if (this.viewModel.Answers.length > 0) {
            this.pluginService.alertMessage("You can't delete it, option is already related to answer", "error");
        }
        else {
            var index = this.viewModel.Options.findIndex(function (item) { return item.OptionId === optionId; });
            this.viewModel.Options.splice(index, 1);
        }
    };
    CurriculumTopicQuestionUpdateComponent.prototype.markAsMatrixAnswer = function (choice, option) {
        this.viewModel.Answers = this.viewModel.Answers.filter(function (item) {
            return item.ChoiceId !== choice.ChoiceId;
        });
        this.viewModel.Answers = this.viewModel.Answers.concat([new _question_builder_mcq_choicematrix__WEBPACK_IMPORTED_MODULE_9__["Answer"](choice.ChoiceId, option.OptionId)]);
        this.loadUpdatedAnswers();
    };
    CurriculumTopicQuestionUpdateComponent.prototype.resetQuestion = function () {
        this.answers = [];
        this.getQuestionDetail(this.questionId);
    };
    CurriculumTopicQuestionUpdateComponent.prototype.updateQuestion = function () {
        var updatedQuestionResource = this.questionBuilderService.getQuestionResource;
        this.questionDetail.contentJson = this.questionBuilderService.convertJsonToString(JSON.stringify(updatedQuestionResource));
        this.questionDetail.solutionJson = this.questionBuilderService.convertJsonToString(JSON.stringify(this.solutionContent));
        this.questionDetail.marks = updatedQuestionResource.TotalMarks;
        if (this.category) {
            this.questionDetail.category = this.category;
        }
        else {
            this.questionDetail.category = this.questionCategory[0].tag;
        }
        if (this.complexityLevel) {
            this.questionDetail.complexityLevel = this.complexityLevel;
        }
        else {
            this.questionDetail.complexityLevel = 1;
        }
        this.subscribeToSaveResponse(this.questionService.updateQuestion(this.questionDetail));
    };
    CurriculumTopicQuestionUpdateComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (resp) { return _this.onSaveSuccess(resp); }, function (errRes) { return _this.onSaveError(errRes); });
    };
    CurriculumTopicQuestionUpdateComponent.prototype.onSaveSuccess = function (res) {
        this.pluginService.alertMessage("Topic question updated successfully", "success");
        this.previousUrl();
    };
    CurriculumTopicQuestionUpdateComponent.prototype.onSaveError = function (errRes) {
        this.pluginService.alertMessage("Could not save, please contact admin", "error");
    };
    CurriculumTopicQuestionUpdateComponent.prototype.onBack = function () {
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
    CurriculumTopicQuestionUpdateComponent.prototype.previousUrl = function () {
        if (this.currentRoute === "topic-question-edit") {
            this.router.navigateByUrl('/lesson-topic/topic-question');
        }
        else if (this.currentRoute === "general-topic-question-edit") {
            this.router.navigateByUrl('/general-concept-and-topic/general-topic-question');
        }
        else {
            this.router.navigateByUrl('../');
        }
    };
    CurriculumTopicQuestionUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./topic-question-update.component.html */ "./src/app/syllabus-lesson-topic/topic-question/topic-question-update.component.html"),
            providers: [_syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"],
            _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_6__["QuestionBuilderService"],
            _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__["UserLoginInfoService"],
            _shared_common_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"]])
    ], CurriculumTopicQuestionUpdateComponent);
    return CurriculumTopicQuestionUpdateComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~general-concept-topic-general-concept-topic-module~syllabus-lesson-topic-syllabus-lesson-top~f4317c95.js.map