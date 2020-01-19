(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./curriculum/curriculum.module": [
		"./src/app/curriculum/curriculum.module.ts",
		"default~curriculum-curriculum-module~general-concept-topic-general-concept-topic-module~general-subj~98b75458",
		"curriculum-curriculum-module"
	],
	"./general-concept-topic/general-concept-topic.module": [
		"./src/app/general-concept-topic/general-concept-topic.module.ts",
		"default~curriculum-curriculum-module~general-concept-topic-general-concept-topic-module~general-subj~98b75458",
		"default~general-concept-topic-general-concept-topic-module~syllabus-lesson-topic-syllabus-lesson-top~f4317c95",
		"general-concept-topic-general-concept-topic-module"
	],
	"./general-subject/general-subject.module": [
		"./src/app/general-subject/general-subject.module.ts",
		"default~curriculum-curriculum-module~general-concept-topic-general-concept-topic-module~general-subj~98b75458",
		"general-subject-general-subject-module"
	],
	"./organisation/organisation.module": [
		"./src/app/organisation/organisation.module.ts",
		"default~curriculum-curriculum-module~general-concept-topic-general-concept-topic-module~general-subj~98b75458",
		"organisation-organisation-module"
	],
	"./subject/subject.module": [
		"./src/app/subject/subject.module.ts",
		"default~curriculum-curriculum-module~general-concept-topic-general-concept-topic-module~general-subj~98b75458",
		"subject-subject-module"
	],
	"./syllabus-lesson-topic/syllabus-lesson-topic.module": [
		"./src/app/syllabus-lesson-topic/syllabus-lesson-topic.module.ts",
		"default~curriculum-curriculum-module~general-concept-topic-general-concept-topic-module~general-subj~98b75458",
		"default~general-concept-topic-general-concept-topic-module~syllabus-lesson-topic-syllabus-lesson-top~f4317c95"
	],
	"./user-admin/user-admin.module": [
		"./src/app/user-admin/user-admin.module.ts",
		"default~curriculum-curriculum-module~general-concept-topic-general-concept-topic-module~general-subj~98b75458",
		"user-admin-user-admin-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _password_reset_init_password_reset_init_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./password-reset/init/password-reset-init.component */ "./src/app/account/password-reset/init/password-reset-init.component.ts");
/* harmony import */ var _account_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account.route */ "./src/app/account/account.route.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/account/login/login.component.ts");
/* harmony import */ var _password_reset_finish_password_reset_finish_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./password-reset/finish/password-reset-finish.component */ "./src/app/account/password-reset/finish/password-reset-finish.component.ts");








var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _password_reset_init_password_reset_init_component__WEBPACK_IMPORTED_MODULE_4__["PasswordResetInitComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _password_reset_finish_password_reset_finish_component__WEBPACK_IMPORTED_MODULE_7__["PasswordResetFinishComponent"]
            ],
            imports: [
                _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_account_route__WEBPACK_IMPORTED_MODULE_5__["accountState"])
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account/account.route.ts":
/*!******************************************!*\
  !*** ./src/app/account/account.route.ts ***!
  \******************************************/
/*! exports provided: accountState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountState", function() { return accountState; });
/* harmony import */ var _login_login_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.route */ "./src/app/account/login/login.route.ts");
/* harmony import */ var _password_reset_init_password_reset_init_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-reset/init/password-reset-init.route */ "./src/app/account/password-reset/init/password-reset-init.route.ts");
/* harmony import */ var _password_reset_finish_password_reset_finish_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-reset/finish/password-reset-finish.route */ "./src/app/account/password-reset/finish/password-reset-finish.route.ts");



var ACCOUNT_ROUTES = [_password_reset_init_password_reset_init_route__WEBPACK_IMPORTED_MODULE_1__["passwordResetInitRoute"], _login_login_route__WEBPACK_IMPORTED_MODULE_0__["loginRoute"], _password_reset_finish_password_reset_finish_route__WEBPACK_IMPORTED_MODULE_2__["passwordResetFinishRoute"]];
var accountState = [
    {
        path: '',
        children: ACCOUNT_ROUTES
    }
];


/***/ }),

/***/ "./src/app/account/index.ts":
/*!**********************************!*\
  !*** ./src/app/account/index.ts ***!
  \**********************************/
/*! exports provided: passwordResetInitRoute, PasswordResetInitService, PasswordResetInitComponent, LoginComponent, loginRoute, accountState, AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _password_reset_init_password_reset_init_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-reset/init/password-reset-init.route */ "./src/app/account/password-reset/init/password-reset-init.route.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "passwordResetInitRoute", function() { return _password_reset_init_password_reset_init_route__WEBPACK_IMPORTED_MODULE_0__["passwordResetInitRoute"]; });

/* harmony import */ var _password_reset_init_password_reset_init_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-reset/init/password-reset-init.service */ "./src/app/account/password-reset/init/password-reset-init.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordResetInitService", function() { return _password_reset_init_password_reset_init_service__WEBPACK_IMPORTED_MODULE_1__["PasswordResetInitService"]; });

/* harmony import */ var _password_reset_init_password_reset_init_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-reset/init/password-reset-init.component */ "./src/app/account/password-reset/init/password-reset-init.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordResetInitComponent", function() { return _password_reset_init_password_reset_init_component__WEBPACK_IMPORTED_MODULE_2__["PasswordResetInitComponent"]; });

/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/account/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]; });

/* harmony import */ var _login_login_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.route */ "./src/app/account/login/login.route.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loginRoute", function() { return _login_login_route__WEBPACK_IMPORTED_MODULE_4__["loginRoute"]; });

/* harmony import */ var _account_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account.route */ "./src/app/account/account.route.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accountState", function() { return _account_route__WEBPACK_IMPORTED_MODULE_5__["accountState"]; });

/* harmony import */ var _account_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.module */ "./src/app/account/account.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return _account_module__WEBPACK_IMPORTED_MODULE_6__["AccountModule"]; });










/***/ }),

/***/ "./src/app/account/login/login.component.html":
/*!****************************************************!*\
  !*** ./src/app/account/login/login.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container bg-login  h-100\">\n  <div class=\"card card-login col-xxl-4\">\n    <div class=\"logo text-center\">\n      <img src=\"../../../assets/img/logo-ed.png\" alt=\"\">\n    </div>\n    <div class=\"card-body p-5\">\n      <form class=\"form-signin\">\n        <div class=\"form-group mb-3\">\n          <input type=\"text\" id=\"userID\" #userid class=\"form-control input-control\" placeholder=\"Email or User ID\"\n            required />\n          <div class=\"input-symbol input-symbol-mail\">\n            <i class=\"fa fa-envelope\"></i>\n          </div>\n        </div>\n        <div class=\"form-group mb-3\">\n          <input type=\"password\" id=\"inputPassword\" #password class=\"form-control input-control\" placeholder=\"Password\"\n            required />\n          <div class=\"input-symbol input-symbol-lock\">\n            <i class=\"fa fa-lock\"></i>\n          </div>\n        </div>\n        <div class=\"d-flex justify-content-end align-self-center mb-2 w-100\">\n          <button class=\"btn btn-success text-uppercase btn-login w-100\" (click)=\"login($event)\" type=\"submit\">\n            Log in\n          </button>\n        </div>\n        <div class=\"d-flex justify-content-between align-self-center mb-3 px-3\">\n          <div class=\"checkbox\">\n            <input #remember type=\"checkbox\" id=\"passwordRemember\" />\n            <label class=\"pl-5\" for=\"passwordRemember\">Remember password</label>\n          </div>\n          <div>\n            <a routerLink=\"/reset/request\" class=\"text-dark\">Forgot password</a>\n          </div>\n        </div>\n\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/account/login/login.component.scss":
/*!****************************************************!*\
  !*** ./src/app/account/login/login.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo > img {\n  width: 250px;\n  background: #fff;\n  margin-top: 30px; }\n\n.bg-login {\n  background-color: #6055cda8;\n  background-size: 100px 100px;\n  background-image: linear-gradient(45deg, #e9ecef 25%, transparent 25%, transparent 50%, #f0f0f0 50%, #f0f0f0 75%, transparent 75%, transparent); }\n\n.login-container {\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 15px; }\n\n.card-login {\n  height: auto;\n  border-radius: 10px; }\n\n.input-symbol {\n  font-size: 17px;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  border-radius: 25px;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  color: #666;\n  transition: all 0.4s; }\n\n.input-symbol-mail {\n  padding-left: 74px;\n  padding-bottom: 85px; }\n\n.input-symbol-lock {\n  padding-left: 74px;\n  padding-top: 45px; }\n\n.input-control {\n  font-size: 15px;\n  line-height: 1.5;\n  color: #666;\n  display: block;\n  width: 100%;\n  background: #e6e6e6;\n  height: 50px;\n  border-radius: 25px;\n  padding: 0 30px 0 68px; }\n\n.mx-auto {\n  margin: 10rem 0; }\n\n.btn-login {\n  border-radius: 25px;\n  height: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9sb2dpbi9DOlxcVXNlcnNcXGtpc2hvXFxPbmVEcml2ZVxcRGVza3RvcFxcV29ya1xcY2VhZG1pbi1kZXZfa2lzaG9yZVxcY2VhZG1pbi1kZXZfa2lzaG9yZS9zcmNcXGFwcFxcYWNjb3VudFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hY2NvdW50L2xvZ2luL0M6XFxVc2Vyc1xca2lzaG9cXE9uZURyaXZlXFxEZXNrdG9wXFxXb3JrXFxjZWFkbWluLWRldl9raXNob3JlXFxjZWFkbWluLWRldl9raXNob3JlL3NyY1xcc2Nzc1xcY29uc3RhbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQVk7RUFDWixpQkNhVTtFRFpWLGlCQUFnQixFQUNqQjs7QUFFRDtFQVFFLDRCQUEyQjtFQUMzQiw2QkFBNEI7RUFDNUIsZ0pBU0MsRUFDRjs7QUFFRDtFQUNFLFlBQVc7RUFDWCxrQkFBaUI7RUFLakIsY0FBYTtFQUNiLGdCQUFlO0VBQ2Ysd0JBQXVCO0VBQ3ZCLG9CQUFtQjtFQUNuQixjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsVUFBUztFQUNULFFBQU87RUFDUCxZQUFXO0VBQ1gsYUFBWTtFQUNaLHFCQUFvQjtFQUNwQixZQUFXO0VBSVgscUJBQW9CLEVBQ3JCOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLHFCQUFvQixFQUNyQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsZUFBYztFQUNkLFlBQVc7RUFDWCxvQkFBbUI7RUFDbkIsYUFBWTtFQUNaLG9CQUFtQjtFQUNuQix1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSxnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLG9CQUFtQjtFQUNuQixhQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvY29uc3RhbnQuc2Nzc1wiO1xuXG4ubG9nbyA+IGltZyB7XG4gIHdpZHRoOiAyNTBweDtcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uYmctbG9naW4ge1xuICAvLyBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgLy8gYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgIzhlNTRlOSAwLCAjNDc3NmU2IDEwMCUpICFpbXBvcnRhbnQ7XG4gIC8vIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0LCByaWdodCwgY29sb3Itc3RvcCgwLCAjOGU1NGU5KSwgY29sb3Itc3RvcCgxMDAlLCAjNDc3NmU2KSkgIWltcG9ydGFudDtcbiAgLy8gYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzhlNTRlOSAwLCAjNDc3NmU2IDEwMCUpICFpbXBvcnRhbnQ7XG4gIC8vIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjOGU1NGU5IDAsICM0Nzc2ZTYgMTAwJSkgIWltcG9ydGFudDtcbiAgLy8gYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjOGU1NGU5IDAsICM0Nzc2ZTYgMTAwJSkgIWltcG9ydGFudDtcbiAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOGU1NGU5IDAsICM0Nzc2ZTYgMTAwJSkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwNTVjZGE4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMHB4IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgNDVkZWcsXG4gICAgI2U5ZWNlZiAyNSUsXG4gICAgdHJhbnNwYXJlbnQgMjUlLFxuICAgIHRyYW5zcGFyZW50IDUwJSxcbiAgICAjZjBmMGYwIDUwJSxcbiAgICAjZjBmMGYwIDc1JSxcbiAgICB0cmFuc3BhcmVudCA3NSUsXG4gICAgdHJhbnNwYXJlbnRcbiAgKTtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uY2FyZC1sb2dpbiB7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmlucHV0LXN5bWJvbCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjb2xvcjogIzY2NjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuXG4uaW5wdXQtc3ltYm9sLW1haWwge1xuICBwYWRkaW5nLWxlZnQ6IDc0cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4NXB4O1xufVxuXG4uaW5wdXQtc3ltYm9sLWxvY2sge1xuICBwYWRkaW5nLWxlZnQ6IDc0cHg7XG4gIHBhZGRpbmctdG9wOiA0NXB4O1xufVxuXG4uaW5wdXQtY29udHJvbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM2NjY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBwYWRkaW5nOiAwIDMwcHggMCA2OHB4O1xufVxuXG4ubXgtYXV0byB7XG4gIG1hcmdpbjogMTByZW0gMDtcbn1cblxuLmJ0bi1sb2dpbiB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGhlaWdodDogNTBweDtcbn1cbiIsIi8vRm9udHNcbiRmb250LWZhbWlseS1yb2JvdG8tcmVndWxhcjogXCJyb2JvdG9yZWd1bGFyXCI7XG4kZm9udC1mYW1pbHktcm9ib3RvLWl0YWxpYzogXCJyb2JvdG9pdGFsaWNcIjtcbiRmb250LWZhbWlseS1yb2JvdG8tYm9sZDogXCJyb2JvdG9ib2xkXCI7XG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogXCJzYW5zLXNlcmlmXCI7XG5cbi8vQ29sb3JzXG4kYmx1ZTogIzAwN2JmZjtcbiRpbmRpZ286ICM2MDU1Y2Q7XG4kcHVycGxlOiAjNmY0MmMxO1xuJHBpbms6ICNlODNlOGM7XG4kcmVkOiAjZGMzNTQ1O1xuJG9yYW5nZTogI2ZkN2UxNDtcbiR5ZWxsb3c6ICNmN2I3MzE7XG4kZ3JlZW46ICMzMmI0MzI7XG4kdGVhbDogIzIwYzk5NztcbiRjeWFuOiAjMTdhMmI4O1xuJHdoaXRlOiAjZmZmO1xuJGdyYXk6ICM2Yzc1N2Q7XG4kZGFyay1ncmF5OiAjMzQzYTQwO1xuJGRhcmtncmF5OiBkYXJrZ3JleTtcbiRwcmltYXJ5OiAkaW5kaWdvO1xuJGxhdmVuZGVyOiBsYXZlbmRlcjtcbiRzZWNvbmRhcnk6ICM2Yzc1N2Q7XG4kc3VjY2VzczogIzI4YTc0NTtcbiRpbmZvOiAjMDA3YmZmO1xuJHdhcm5pbmc6ICNmN2I3MzE7XG4kZGFuZ2VyOiAjZGMzNTQ1O1xuJGxpZ2h0OiAjZGVlMmU2O1xuJGxpZ2h0Z3JleTogIzdlODJhNDtcbiRsaWdodGdyYXk6ICNmMGYwZjA7XG4kZGFyazogIzM0M2E0MDtcblxuLy9SZXNwb25zaXZlIGJyZWFrcG9pbnRzXG4kYnJlYWtwb2ludC14eHhzOiAwO1xuJGJyZWFrcG9pbnQteHhzOiA0ODBweDtcbiRicmVha3BvaW50LXhzOiA1NzZweDtcbiRicmVha3BvaW50LXNtOiA2NjdweDtcbiRicmVha3BvaW50LW1kOiA3NjhweDtcbiRicmVha3BvaW50LWxnOiA5OTJweDtcbiRicmVha3BvaW50LXhsOiAxMjAwcHg7XG4kYnJlYWtwb2ludC14eGw6IDE0NDBweDtcbiRicmVha3BvaW50LXh4eGw6IDE2MDBweDtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/account/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/account/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/user-login-info/user-login-info.service */ "./src/app/shared/user-login-info/user-login-info.service.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router, stateStorageService, userLoginService, pluginService) {
        this.loginService = loginService;
        this.router = router;
        this.stateStorageService = stateStorageService;
        this.userLoginService = userLoginService;
        this.pluginService = pluginService;
    }
    LoginComponent.prototype.login = function (event) {
        var _this = this;
        event.preventDefault();
        this.loginService.login({
            username: this.userid.nativeElement.value,
            password: this.password.nativeElement.value,
            rememberMe: this.remember.nativeElement.checked
        }).then(function (response) {
            // previousState was set in the authExpiredInterceptor before being redirected to login modal.
            // since login is succesful, go to stored previousState and clear previousState
            var redirect = _this.stateStorageService.getUrl();
            if (redirect) {
                _this.stateStorageService.storeUrl(null);
                _this.router.navigateByUrl(redirect);
            }
            else {
                _this.pluginService.alertMessage("Login successfully", "success");
                _this.router.navigateByUrl('/general-subject');
            }
        }, function (error) {
            _this.pluginService.alertMessage("Username and password doesn't match...! Please try again :(", "error");
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("userid", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LoginComponent.prototype, "userid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("password", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LoginComponent.prototype, "password", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("remember", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LoginComponent.prototype, "remember", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/account/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/account/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core__WEBPACK_IMPORTED_MODULE_3__["StateStorageService"],
            _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_4__["UserLoginInfoService"],
            _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/account/login/login.route.ts":
/*!**********************************************!*\
  !*** ./src/app/account/login/login.route.ts ***!
  \**********************************************/
/*! exports provided: loginRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRoute", function() { return loginRoute; });
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/account/login/login.component.ts");

var loginRoute = {
    path: 'account/login',
    component: _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"],
    data: {
        authorities: [],
        pageTitle: 'Login'
    }
};


/***/ }),

/***/ "./src/app/account/password-reset/finish/password-reset-finish.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/account/password-reset/finish/password-reset-finish.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\" style=\"margin: 10rem 0;\">\n            <div class=\"card card-signin\">\n                <div class=\"card-body\">\n\n                    <div *ngIf=\"!keyMissing\">\n                        <form *ngIf=\"!success\" class=\"form-forgotpassword\" name=\"form\" role=\"form\" (ngSubmit)=\"finishReset()\"\n                            #passwordForm=\"ngForm\">\n\n                            <h5 class=\"card-title text-center\" style=\"padding: 15px;\n                    background: #1497E2;\n                    color: white !important;\">\n                                CognitoEd Choose a new password\n                            </h5>\n\n                            <div class=\"alert alert-danger\" *ngIf=\"keyMissing\">\n                                <strong>The password reset key is missing.</strong>\n                            </div>\n\n                            <!-- <div class=\"alert alert-warning\" *ngIf=\"!success && !keyMissing\">\n                                <p>Choose a new password</p>\n                            </div> -->\n\n                            <div class=\"alert alert-danger\" *ngIf=\"error\">\n                                <p>Your password couldn't be reset. Remember a password request is only valid for 24\n                                    hours.</p>\n                            </div>\n\n                            <p class=\"alert alert-success\" *ngIf=\"success\">\n                                <span><strong>Your password has been reset.</strong> Please </span>\n                                <a class=\"alert-link\" (click)=\"login()\">sign in</a>.\n                            </p>\n\n                            <div class=\"alert alert-danger\" *ngIf=\"doNotMatch\">\n                                The password and its confirmation do not match!\n                            </div>\n\n\n\n                            <div class=\"form-group\">\n                                <label class=\"form-control-label\" for=\"password\">New password</label>\n                                <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\"\n                                    #passwordInput=\"ngModel\" placeholder=\"New password\" [(ngModel)]=\"resetAccount.password\"\n                                    minlength=4 maxlength=50 required>\n                                <div *ngIf=\"passwordInput.dirty && passwordInput.invalid\">\n                                    <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.required\">\n                                        Your password is required.\n                                    </small>\n                                    <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.minlength\">\n                                        Your password is required to be at least 4 characters.\n                                    </small>\n                                    <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.maxlength\">\n                                        Your password cannot be longer than 50 characters.\n                                    </small>\n                                </div>\n                                <jhi-password-strength-bar [passwordToCheck]=\"resetAccount.password\"></jhi-password-strength-bar>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label class=\"form-control-label\" for=\"confirmPassword\">New password confirmation</label>\n                                <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" name=\"confirmPassword\"\n                                    #confirmPasswordInput=\"ngModel\" placeholder=\"Confirm the new password\" [(ngModel)]=\"confirmPassword\"\n                                    minlength=4 maxlength=50 required>\n                                <div *ngIf=\"confirmPasswordInput.dirty && confirmPasswordInput.invalid\">\n                                    <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.required\">\n                                        Your password confirmation is required.\n                                    </small>\n                                    <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.minlength\">\n                                        Your password confirmation is required to be at least 4 characters.\n                                    </small>\n                                    <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.maxlength\">\n                                        Your password confirmation cannot be longer than 50 characters.\n                                    </small>\n                                </div>\n                            </div>\n                            <button type=\"submit\" [disabled]=\"passwordForm.form.invalid\" class=\"btn btn-primary\">Reset\n                                Password</button>\n                        </form>\n\n                        <p *ngIf=\"success\" class=\"success-message\">Your password has been changed successfully. Click to go to <a routerLink=\"/account/login\">login</a></p>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/account/password-reset/finish/password-reset-finish.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/account/password-reset/finish/password-reset-finish.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".success-message {\n  font-size: 21px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9maW5pc2gvQzpcXFVzZXJzXFxraXNob1xcT25lRHJpdmVcXERlc2t0b3BcXFdvcmtcXGNlYWRtaW4tZGV2X2tpc2hvcmVcXGNlYWRtaW4tZGV2X2tpc2hvcmUvc3JjXFxhcHBcXGFjY291bnRcXHBhc3N3b3JkLXJlc2V0XFxmaW5pc2hcXHBhc3N3b3JkLXJlc2V0LWZpbmlzaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Y2Nlc3MtbWVzc2FnZSB7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/account/password-reset/finish/password-reset-finish.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/account/password-reset/finish/password-reset-finish.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PasswordResetFinishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetFinishComponent", function() { return PasswordResetFinishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _password_reset_finish_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password-reset-finish.service */ "./src/app/account/password-reset/finish/password-reset-finish.service.ts");


// import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

// import { LoginModalService } from 'app/core';

var PasswordResetFinishComponent = /** @class */ (function () {
    function PasswordResetFinishComponent(passwordResetFinishService, 
    // private loginModalService: LoginModalService,
    route, elementRef, renderer) {
        this.passwordResetFinishService = passwordResetFinishService;
        this.route = route;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    PasswordResetFinishComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.key = params['key'];
        });
        this.resetAccount = {};
        this.keyMissing = !this.key;
    };
    PasswordResetFinishComponent.prototype.ngAfterViewInit = function () {
        if (this.elementRef.nativeElement.querySelector('#password') != null) {
            this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#password'), 'focus', []);
        }
    };
    PasswordResetFinishComponent.prototype.finishReset = function () {
        var _this = this;
        this.doNotMatch = null;
        this.error = null;
        if (this.resetAccount.password !== this.confirmPassword) {
            this.doNotMatch = 'ERROR';
        }
        else {
            this.passwordResetFinishService.save({ key: this.key, newPassword: this.resetAccount.password }).subscribe(function () {
                _this.success = 'OK';
            }, function () {
                _this.success = null;
                _this.error = 'ERROR';
            });
        }
    };
    PasswordResetFinishComponent.prototype.login = function () {
        // this.modalRef = this.loginModalService.open();
    };
    PasswordResetFinishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'jhi-password-reset-finish',
            template: __webpack_require__(/*! ./password-reset-finish.component.html */ "./src/app/account/password-reset/finish/password-reset-finish.component.html"),
            styles: [__webpack_require__(/*! ./password-reset-finish.component.scss */ "./src/app/account/password-reset/finish/password-reset-finish.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_password_reset_finish_service__WEBPACK_IMPORTED_MODULE_3__["PasswordResetFinishService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"]])
    ], PasswordResetFinishComponent);
    return PasswordResetFinishComponent;
}());



/***/ }),

/***/ "./src/app/account/password-reset/finish/password-reset-finish.route.ts":
/*!******************************************************************************!*\
  !*** ./src/app/account/password-reset/finish/password-reset-finish.route.ts ***!
  \******************************************************************************/
/*! exports provided: passwordResetFinishRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordResetFinishRoute", function() { return passwordResetFinishRoute; });
/* harmony import */ var _password_reset_finish_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-reset-finish.component */ "./src/app/account/password-reset/finish/password-reset-finish.component.ts");

var passwordResetFinishRoute = {
    path: 'reset/finish',
    component: _password_reset_finish_component__WEBPACK_IMPORTED_MODULE_0__["PasswordResetFinishComponent"],
    data: {
        authorities: [],
        pageTitle: 'Password'
    }
};


/***/ }),

/***/ "./src/app/account/password-reset/finish/password-reset-finish.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/account/password-reset/finish/password-reset-finish.service.ts ***!
  \********************************************************************************/
/*! exports provided: PasswordResetFinishService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetFinishService", function() { return PasswordResetFinishService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




var PasswordResetFinishService = /** @class */ (function () {
    function PasswordResetFinishService(http) {
        this.http = http;
    }
    PasswordResetFinishService.prototype.save = function (keyAndPassword) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'api/account/reset-password/finish', keyAndPassword);
    };
    PasswordResetFinishService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PasswordResetFinishService);
    return PasswordResetFinishService;
}());



/***/ }),

/***/ "./src/app/account/password-reset/init/password-reset-init.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/account/password-reset/init/password-reset-init.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\" style=\"margin: 10rem 0;\">\n            <div class=\"card card-signin\">\n                <div class=\"card-body\">\n\n                    <form class=\"form-forgotpassword\">\n                        <h5 class=\"card-title text-center\" style=\"padding: 15px;\n              background: #1497E2;\n              color: white !important;\">\n                            CognitoEd Reset Password\n                        </h5>\n\n                        <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"success === 'OK'\" >\n                            <p>Check your emails for details on how to reset your password.</p>\n                        </div>\n\n                        <div class=\"form-group reset-password-text\">\n                            <p>Enter your email to reset your password</p>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <input type=\"text\" id=\"email\" (change)=\"resetAccount.email = email.value\" #email class=\"form-control\"\n                                placeholder=\"Email Address\" required autofocus />\n                        </div>\n\n                        <div class=\"custom-control custom-checkbox mb-3\">\n\n                            <div class=\"float-right\">\n                                <a href=\"#\" routerLink=\"/account/login\">Login with your account</a>\n                            </div>\n\n                        </div>\n\n                        <button class=\"btn btn-sm btn-success btn-block text-uppercase\" (click)=\"requestReset()\" type=\"submit\">\n                            Send Email\n                        </button>                     \n\n\n\n                    </form>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/account/password-reset/init/password-reset-init.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/account/password-reset/init/password-reset-init.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reset-password-text {\n  font-size: 21px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9pbml0L0M6XFxVc2Vyc1xca2lzaG9cXE9uZURyaXZlXFxEZXNrdG9wXFxXb3JrXFxjZWFkbWluLWRldl9raXNob3JlXFxjZWFkbWluLWRldl9raXNob3JlL3NyY1xcYXBwXFxhY2NvdW50XFxwYXNzd29yZC1yZXNldFxcaW5pdFxccGFzc3dvcmQtcmVzZXQtaW5pdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9pbml0L3Bhc3N3b3JkLXJlc2V0LWluaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzZXQtcGFzc3dvcmQtdGV4dCB7XG4gICAgZm9udC1zaXplOiAyMXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/account/password-reset/init/password-reset-init.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/account/password-reset/init/password-reset-init.component.ts ***!
  \******************************************************************************/
/*! exports provided: PasswordResetInitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetInitComponent", function() { return PasswordResetInitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _password_reset_init_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-reset-init.service */ "./src/app/account/password-reset/init/password-reset-init.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");




var PasswordResetInitComponent = /** @class */ (function () {
    function PasswordResetInitComponent(passwordResetInitService, elementRef, renderer) {
        this.passwordResetInitService = passwordResetInitService;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    PasswordResetInitComponent.prototype.ngOnInit = function () {
        this.resetAccount = {};
    };
    PasswordResetInitComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#email'), 'focus', []);
    };
    PasswordResetInitComponent.prototype.requestReset = function () {
        var _this = this;
        this.error = null;
        this.errorEmailNotExists = null;
        this.passwordResetInitService.save(this.resetAccount.email).subscribe(function () {
            _this.success = 'OK';
        }, function (response) {
            _this.success = null;
            if (response.status === 400 && response.error.type === _shared__WEBPACK_IMPORTED_MODULE_3__["EMAIL_NOT_FOUND_TYPE"]) {
                _this.errorEmailNotExists = 'ERROR';
            }
            else {
                _this.error = 'ERROR';
            }
        });
    };
    PasswordResetInitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'jhi-password-reset-init',
            template: __webpack_require__(/*! ./password-reset-init.component.html */ "./src/app/account/password-reset/init/password-reset-init.component.html"),
            styles: [__webpack_require__(/*! ./password-reset-init.component.scss */ "./src/app/account/password-reset/init/password-reset-init.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_password_reset_init_service__WEBPACK_IMPORTED_MODULE_2__["PasswordResetInitService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"]])
    ], PasswordResetInitComponent);
    return PasswordResetInitComponent;
}());



/***/ }),

/***/ "./src/app/account/password-reset/init/password-reset-init.route.ts":
/*!**************************************************************************!*\
  !*** ./src/app/account/password-reset/init/password-reset-init.route.ts ***!
  \**************************************************************************/
/*! exports provided: passwordResetInitRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordResetInitRoute", function() { return passwordResetInitRoute; });
/* harmony import */ var _password_reset_init_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-reset-init.component */ "./src/app/account/password-reset/init/password-reset-init.component.ts");

var passwordResetInitRoute = {
    path: 'reset/request',
    component: _password_reset_init_component__WEBPACK_IMPORTED_MODULE_0__["PasswordResetInitComponent"],
    data: {
        authorities: [],
        pageTitle: 'Password'
    }
};


/***/ }),

/***/ "./src/app/account/password-reset/init/password-reset-init.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/account/password-reset/init/password-reset-init.service.ts ***!
  \****************************************************************************/
/*! exports provided: PasswordResetInitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetInitService", function() { return PasswordResetInitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_SERVER);
var PasswordResetInitService = /** @class */ (function () {
    function PasswordResetInitService(http) {
        this.http = http;
    }
    PasswordResetInitService.prototype.save = function (mail) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'api/account/reset-password/init', mail);
    };
    PasswordResetInitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PasswordResetInitService);
    return PasswordResetInitService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _main_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/app.component */ "./src/app/main/app.component.ts");






var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    {
                        path: "", redirectTo: "account/login", pathMatch: "full"
                    },
                    {
                        path: "",
                        component: _main_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        children: [
                            {
                                path: "",
                                component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
                                children: [
                                    {
                                        path: "", redirectTo: "general-subject", pathMatch: "full"
                                    },
                                    {
                                        path: "general-subject",
                                        loadChildren: "./general-subject/general-subject.module#GeneralSubjectsModule",
                                        canActivate: [_core__WEBPACK_IMPORTED_MODULE_3__["UserRouteAccessService"]],
                                        data: {
                                            pageTitle: "General subjects",
                                        }
                                    },
                                    {
                                        path: "general-concept-and-topic",
                                        loadChildren: "./general-concept-topic/general-concept-topic.module#GeneralConceptAndTopicModule",
                                        canActivate: [_core__WEBPACK_IMPORTED_MODULE_3__["UserRouteAccessService"]],
                                        data: {
                                            pageTitle: "Genral concept and topic",
                                        }
                                    },
                                    {
                                        path: "organisation",
                                        loadChildren: "./organisation/organisation.module#OrganisationModule",
                                        canActivate: [_core__WEBPACK_IMPORTED_MODULE_3__["UserRouteAccessService"]],
                                        data: {
                                            pageTitle: "Organisation",
                                        }
                                    },
                                    {
                                        path: "curriculum",
                                        loadChildren: "./curriculum/curriculum.module#CurriculumModule",
                                        canActivate: [_core__WEBPACK_IMPORTED_MODULE_3__["UserRouteAccessService"]],
                                        data: {
                                            pageTitle: "Curriculums",
                                        }
                                    },
                                    {
                                        path: "subject",
                                        loadChildren: "./subject/subject.module#SubjectModule",
                                        canActivate: [_core__WEBPACK_IMPORTED_MODULE_3__["UserRouteAccessService"]],
                                        data: {
                                            pageTitle: "Subjects",
                                        }
                                    },
                                    {
                                        path: "lesson-topic",
                                        loadChildren: "./syllabus-lesson-topic/syllabus-lesson-topic.module#SyllabusLessonTopicModule",
                                        canActivate: [_core__WEBPACK_IMPORTED_MODULE_3__["UserRouteAccessService"]],
                                        data: {
                                            pageTitle: "Syllabus lesson topic",
                                        }
                                    },
                                    {
                                        path: "user-admin",
                                        loadChildren: "./user-admin/user-admin.module#UserAdminModule",
                                        canActivate: [_core__WEBPACK_IMPORTED_MODULE_3__["UserRouteAccessService"]],
                                        data: {
                                            pageTitle: "User administration",
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ], { useHash: true, enableTracing: false })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _main_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/app.component */ "./src/app/main/app.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account */ "./src/app/account/index.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _main_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_10__["LayoutComponent"]
            ],
            imports: [
                ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["NgxWebstorageModule"].forRoot({ prefix: 'ius', separator: '-' }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _core__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                _shared__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _account__WEBPACK_IMPORTED_MODULE_9__["AccountModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _core__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"],
                    multi: true,
                    deps: [ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["SessionStorageService"]]
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _core__WEBPACK_IMPORTED_MODULE_8__["AuthExpiredInterceptor"],
                    multi: true,
                    deps: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]]
                }
                // {
                //     provide: HTTP_INTERCEPTORS,
                //     useClass: ErrorHandlerInterceptor,
                //     multi: true,
                //     deps: [JhiEventManager]
                // },
                // {
                //     provide: HTTP_INTERCEPTORS,
                //     useClass: NotificationInterceptor,
                //     multi: true,
                //     deps: [Injector]
                // }
            ],
            exports: [],
            bootstrap: [_main_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/auth/account.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/auth/account.service.ts ***!
  \**********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var AccountService = /** @class */ (function () {
    function AccountService(http) {
        this.http = http;
        this.appUserResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/common/api/app-users';
    }
    AccountService.prototype.get = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'api/account', { observe: 'response' });
    };
    AccountService.prototype.save = function (account) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'api/account', account, { observe: 'response' });
    };
    AccountService.prototype.getUserLoginInfo = function (login) {
        return this.http.get(this.appUserResourceUrl + "/" + login, { observe: 'response' });
    };
    AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/core/auth/auth-jwt.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/auth/auth-jwt.service.ts ***!
  \***********************************************/
/*! exports provided: AuthServerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServerProvider", function() { return AuthServerProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");







var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
//headers = headers.append('Access-Control-Allow-Origin', 'http://18.220.201.109/');
//headers = headers.append('Access-Control-Allow-Origin', 'http://192.168.1.14/');
var AuthServerProvider = /** @class */ (function () {
    function AuthServerProvider(http, $localStorage, $sessionStorage) {
        this.http = http;
        this.$localStorage = $localStorage;
        this.$sessionStorage = $sessionStorage;
    }
    AuthServerProvider.prototype.getToken = function () {
        return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
    };
    AuthServerProvider.prototype.login = function (credentials) {
        var data = {
            username: credentials.username,
            password: credentials.password,
            rememberMe: credentials.rememberMe
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].API_URL + 'api/authenticate', data, { headers: headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(authenticateSuccess.bind(this)));
        function authenticateSuccess(resp) {
            var bearerToken = resp.headers.get('Authorization');
            if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
                var jwt = bearerToken.slice(7, bearerToken.length);
                this.storeAuthenticationToken(jwt, credentials.rememberMe);
                return jwt;
            }
        }
    };
    AuthServerProvider.prototype.loginWithToken = function (jwt, rememberMe) {
        if (jwt) {
            this.storeAuthenticationToken(jwt, rememberMe);
            return Promise.resolve(jwt);
        }
        else {
            return Promise.reject('auth-jwt-service Promise reject'); // Put appropriate error message here
        }
    };
    AuthServerProvider.prototype.storeAuthenticationToken = function (jwt, rememberMe) {
        if (rememberMe) {
            this.$localStorage.store('authenticationToken', jwt);
        }
        else {
            this.$sessionStorage.store('authenticationToken', jwt);
        }
    };
    AuthServerProvider.prototype.logout = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.$localStorage.clear('authenticationToken');
            _this.$sessionStorage.clear('authenticationToken');
            observer.complete();
        });
    };
    AuthServerProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__["SessionStorageService"]])
    ], AuthServerProvider);
    return AuthServerProvider;
}());



/***/ }),

/***/ "./src/app/core/auth/principal.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/auth/principal.service.ts ***!
  \************************************************/
/*! exports provided: Principal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Principal", function() { return Principal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.service */ "./src/app/core/auth/account.service.ts");




var Principal = /** @class */ (function () {
    function Principal(account) {
        this.account = account;
        this.authenticated = false;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    Principal.prototype.authenticate = function (identity) {
        this.userIdentity = identity;
        this.authenticated = identity !== null;
        this.authenticationState.next(this.userIdentity);
    };
    Principal.prototype.hasAnyAuthority = function (authorities) {
        return Promise.resolve(this.hasAnyAuthorityDirect(authorities));
    };
    Principal.prototype.hasAnyAuthorityDirect = function (authorities) {
        if (!this.authenticated || !this.userIdentity || !this.userIdentity.authorities) {
            return false;
        }
        for (var i = 0; i < authorities.length; i++) {
            if (this.userIdentity.authorities.includes(authorities[i])) {
                return true;
            }
        }
        return false;
    };
    Principal.prototype.hasAuthority = function (authority) {
        if (!this.authenticated) {
            return Promise.resolve(false);
        }
        return this.identity().then(function (id) {
            return Promise.resolve(id.authorities && id.authorities.includes(authority));
        }, function () {
            return Promise.resolve(false);
        });
    };
    Principal.prototype.identity = function (force) {
        var _this = this;
        if (force === true) {
            this.userIdentity = undefined;
        }
        // check and see if we have retrieved the userIdentity data from the server.
        // if we have, reuse it by immediately resolving
        if (this.userIdentity) {
            return Promise.resolve(this.userIdentity);
        }
        // retrieve the userIdentity data from the server, update the identity object, and then resolve.
        return this.account
            .get()
            .toPromise()
            .then(function (response) {
            var account = response.body;
            if (account) {
                _this.userIdentity = account;
                _this.authenticated = true;
            }
            else {
                _this.userIdentity = null;
                _this.authenticated = false;
            }
            _this.authenticationState.next(_this.userIdentity);
            return _this.userIdentity;
        })
            .catch(function (err) {
            _this.userIdentity = null;
            _this.authenticated = false;
            _this.authenticationState.next(_this.userIdentity);
            return null;
        });
    };
    Principal.prototype.isAuthenticated = function () {
        return this.authenticated;
    };
    Principal.prototype.isIdentityResolved = function () {
        return this.userIdentity !== undefined;
    };
    Principal.prototype.getAuthenticationState = function () {
        return this.authenticationState.asObservable();
    };
    Principal.prototype.getImageUrl = function () {
        return this.isIdentityResolved() ? this.userIdentity.imageUrl : null;
    };
    Principal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]])
    ], Principal);
    return Principal;
}());



/***/ }),

/***/ "./src/app/core/auth/state-storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/auth/state-storage.service.ts ***!
  \****************************************************/
/*! exports provided: StateStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateStorageService", function() { return StateStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");



var StateStorageService = /** @class */ (function () {
    function StateStorageService($sessionStorage) {
        this.$sessionStorage = $sessionStorage;
    }
    StateStorageService.prototype.getPreviousState = function () {
        return this.$sessionStorage.retrieve('previousState');
    };
    StateStorageService.prototype.resetPreviousState = function () {
        this.$sessionStorage.clear('previousState');
    };
    StateStorageService.prototype.storePreviousState = function (previousStateName, previousStateParams) {
        var previousState = { name: previousStateName, params: previousStateParams };
        this.$sessionStorage.store('previousState', previousState);
    };
    StateStorageService.prototype.getDestinationState = function () {
        return this.$sessionStorage.retrieve('destinationState');
    };
    StateStorageService.prototype.storeUrl = function (url) {
        this.$sessionStorage.store('previousUrl', url);
    };
    StateStorageService.prototype.getUrl = function () {
        return this.$sessionStorage.retrieve('previousUrl');
    };
    StateStorageService.prototype.storeDestinationState = function (destinationState, destinationStateParams, fromState) {
        var destinationInfo = {
            destination: {
                name: destinationState.name,
                data: destinationState.data
            },
            params: destinationStateParams,
            from: {
                name: fromState.name
            }
        };
        this.$sessionStorage.store('destinationState', destinationInfo);
    };
    StateStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"]])
    ], StateStorageService);
    return StateStorageService;
}());



/***/ }),

/***/ "./src/app/core/auth/user-route-access.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/auth/user-route-access.service.ts ***!
  \********************************************************/
/*! exports provided: UserRouteAccessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRouteAccessService", function() { return UserRouteAccessService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _state_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state-storage.service */ "./src/app/core/auth/state-storage.service.ts");
/* harmony import */ var _principal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./principal.service */ "./src/app/core/auth/principal.service.ts");





var UserRouteAccessService = /** @class */ (function () {
    function UserRouteAccessService(router, principal, stateStorageService, activatedRoute) {
        this.router = router;
        this.principal = principal;
        this.stateStorageService = stateStorageService;
        this.activatedRoute = activatedRoute;
    }
    UserRouteAccessService.prototype.canActivate = function (route, state) {
        var authorities = route.data['authorities'];
        // We need to call the checkLogin / and so the principal.identity() function, to ensure,
        // that the client has a principal too, if they already logged in by the server.
        // This could happen on a page refresh.
        this.pageTitle = route.data['pageTitle'];
        return this.checkLogin(authorities, state.url);
    };
    UserRouteAccessService.prototype.checkLogin = function (authorities, url) {
        var _this = this;
        var principal = this.principal;
        return Promise.resolve(principal.identity().then(function (account) {
            if (!authorities || authorities.length === 0) {
                return true;
            }
            if (account) {
                return principal.hasAnyAuthority(authorities).then(function (response) {
                    if (response) {
                        return true;
                    }
                    if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
                        // console.error('User has not any of required authorities: ', authorities);
                    }
                    return false;
                });
            }
            _this.stateStorageService.storeUrl(url);
            _this.router.navigate(['account/login']).then(function () {
                // only show the login dialog, if the user hasn't logged in yet
                if (!account) {
                    // this.loginModalService.open();
                }
            });
            return false;
        }));
    };
    UserRouteAccessService.prototype.getPageTitle = function () {
        return this.pageTitle;
    };
    UserRouteAccessService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _principal_service__WEBPACK_IMPORTED_MODULE_4__["Principal"],
            _state_storage_service__WEBPACK_IMPORTED_MODULE_3__["StateStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserRouteAccessService);
    return UserRouteAccessService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");








var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]],
            exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]],
            declarations: [],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
                    useValue: 'en'
                },
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: Principal, AccountService, LoginService, StateStorageService, UserRouteAccessService, CoreModule, AuthExpiredInterceptor, AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_principal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/principal.service */ "./src/app/core/auth/principal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Principal", function() { return _auth_principal_service__WEBPACK_IMPORTED_MODULE_0__["Principal"]; });

/* harmony import */ var _auth_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/account.service */ "./src/app/core/auth/account.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return _auth_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]; });

/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.service */ "./src/app/core/login/login.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return _login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]; });

/* harmony import */ var _auth_state_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/state-storage.service */ "./src/app/core/auth/state-storage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateStorageService", function() { return _auth_state_storage_service__WEBPACK_IMPORTED_MODULE_3__["StateStorageService"]; });

/* harmony import */ var _auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/user-route-access.service */ "./src/app/core/auth/user-route-access.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserRouteAccessService", function() { return _auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_4__["UserRouteAccessService"]; });

/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core.module */ "./src/app/core/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]; });

/* harmony import */ var _interceptor_auth_expired_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interceptor/auth-expired.interceptor */ "./src/app/core/interceptor/auth-expired.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthExpiredInterceptor", function() { return _interceptor_auth_expired_interceptor__WEBPACK_IMPORTED_MODULE_6__["AuthExpiredInterceptor"]; });

/* harmony import */ var _interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interceptor/auth.interceptor */ "./src/app/core/interceptor/auth.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return _interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["AuthInterceptor"]; });









// export * from './interceptor/errorhandler.interceptor';
// export * from './interceptor/notification.interceptor';


/***/ }),

/***/ "./src/app/core/interceptor/auth-expired.interceptor.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/interceptor/auth-expired.interceptor.ts ***!
  \**************************************************************/
/*! exports provided: AuthExpiredInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthExpiredInterceptor", function() { return AuthExpiredInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.service */ "./src/app/core/login/login.service.ts");



var AuthExpiredInterceptor = /** @class */ (function () {
    function AuthExpiredInterceptor(injector) {
        this.injector = injector;
    }
    AuthExpiredInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (event) { }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    var loginService = _this.injector.get(_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]);
                    loginService.logout();
                }
            }
        }));
    };
    return AuthExpiredInterceptor;
}());



/***/ }),

/***/ "./src/app/core/interceptor/auth.interceptor.ts":
/*!******************************************************!*\
  !*** ./src/app/core/interceptor/auth.interceptor.ts ***!
  \******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");

var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(localStorage, sessionStorage) {
        this.localStorage = localStorage;
        this.sessionStorage = sessionStorage;
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        if (!request || !request.url || (/^http/.test(request.url) && !(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL && request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL)))) {
            return next.handle(request);
        }
        // to avoid CROS error
        request = request.clone({
            setHeaders: {
                'Access-Control-Allow-Origin': _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_SERVER
            }
        });
        var token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
        if (!!token) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token,
                }
            });
        }
        return next.handle(request);
    };
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/core/login/login.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/login/login.service.ts ***!
  \*********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_principal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/principal.service */ "./src/app/core/auth/principal.service.ts");
/* harmony import */ var _auth_auth_jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth-jwt.service */ "./src/app/core/auth/auth-jwt.service.ts");




var LoginService = /** @class */ (function () {
    function LoginService(principal, authServerProvider) {
        this.principal = principal;
        this.authServerProvider = authServerProvider;
    }
    LoginService.prototype.login = function (credentials, callback) {
        var _this = this;
        var cb = callback || function () { };
        return new Promise(function (resolve, reject) {
            _this.authServerProvider.login(credentials).subscribe(function (data) {
                _this.principal.identity(true).then(function (account) {
                    resolve(data);
                });
                return cb();
            }, function (err) {
                _this.logout();
                reject(err);
                return cb(err);
            });
        });
    };
    LoginService.prototype.loginWithToken = function (jwt, rememberMe) {
        return this.authServerProvider.loginWithToken(jwt, rememberMe);
    };
    LoginService.prototype.logout = function () {
        this.authServerProvider.logout().subscribe();
        this.principal.authenticate(null);
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_principal_service__WEBPACK_IMPORTED_MODULE_2__["Principal"], _auth_auth_jwt_service__WEBPACK_IMPORTED_MODULE_3__["AuthServerProvider"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container [ngSwitch]=\"isAuthenticated()\">\n  <div class=\"light-sidebar\" *ngSwitchCase=\"true\">\n    <div class=\"app\">\n      <div class=\"app-wrap\">\n        <!-- begin app-header -->\n        <header class=\"app-header top-bar\">\n          <!-- begin navbar -->\n          <nav class=\"navbar navbar-expand-md\">\n            <!-- begin navbar-header -->\n            <div class=\"navbar-header d-flex align-items-center\">\n              <a href=\"javascript:void:(0)\" class=\"mobile-toggle\"><i class=\"ti ti-align-right\"></i></a>\n              <a class=\"navbar-brand\">\n                <img src=\"assets/img/logo-white.png\" class=\"img-fluid\" alt=\"logo\" />\n              </a>\n            </div>\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n              aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <i class=\"ti ti-align-left\"></i>\n            </button>\n            <!-- end navbar-header -->\n            <!-- begin navigation -->\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n              <div class=\"navigation d-flex\">\n                <ul class=\"navbar-nav nav-left\">\n                  <li class=\"nav-item\">\n                    <a href=\"javascript:void(0)\" class=\"nav-link sidebar-toggle\">\n                      <i class=\"ti ti-align-right text-white\"></i>\n                    </a>\n                  </li>\n                  <li class=\"nav-item full-screen d-none d-lg-block\" id=\"btnFullscreen\">\n                    <a href=\"javascript:void(0)\" class=\"nav-link expand\">\n                      <i class=\"icon-size-fullscreen\"></i>\n                    </a>\n                  </li>\n                </ul>\n                <ul class=\"navbar-nav nav-right ml-auto\">\n                  <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link dropdown-toggle\" data-toggle=\"modal\" data-target=\"#toDoList\">\n                      <i class=\"fe fe-edit \"></i>\n                      <span class=\"notify\">\n                        <span class=\"blink\"></span>\n                        <span class=\"dot\"></span>\n                      </span>\n                    </a>\n                  </li>\n                  <li class=\"nav-item dropdown user-profile\">\n                    <a href=\"javascript:void(0)\" class=\"nav-link dropdown-toggle \" id=\"navbarDropdown4\" role=\"button\"\n                      data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                      <img src=\"assets/img/avtar/02.jpg\" alt=\"avtar-img\" />\n                      <span class=\"bg-success user-status\"></span>\n                    </a>\n                    <div class=\"dropdown-menu animated fadeIn\" aria-labelledby=\"navbarDropdown\">\n                      <div class=\"bg-warning px-4 py-3\">\n                        <div class=\"d-flex align-items-center justify-content-between\">\n                          <div class=\"mr-1\">\n                            <h4 class=\"text-white mb-0\">Naveen doulaghar</h4>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"p-4\">\n                        <a class=\"dropdown-item d-flex nav-link\" href=\"javascript:void(0)\">\n                          <i class=\"fa fa-user pr-2 text-success\"></i> Profile\n                        </a>\n                        <a class=\"dropdown-item d-flex nav-link\" href=\"javascript:void(0)\">\n                          <i class=\"fa fa-unlock-alt pr-2 text-primary\"></i> Change password\n                        </a>\n                        <a class=\"dropdown-item d-flex nav-link\" (click)=\"logout()\">\n                          <i class=\"fa fa-sign-out pr-2 text-info\"></i> Logout\n                        </a>\n                      </div>\n                    </div>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <!-- end navigation -->\n          </nav>\n          <!-- end navbar -->\n        </header>\n        <!-- end app-header -->\n        <!-- begin app-container -->\n        <div class=\"app-container\">\n          <!-- begin app-navbar -->\n          <aside class=\"app-navbar\">\n            <!-- begin sidebar-nav -->\n            <div class=\"sidebar-nav scrollbar scroll_light\">\n              <ul class=\"metismenu \" id=\"sidebarNav\">\n                <li class=\"sidebar-banner p-4 text-center d-block\">\n                  <img src=\"assets/img/client/logo.png\" class=\"mCS_img_loaded\" />\n                </li>\n                <li *ngFor=\"let item of adminItems\">\n                  <a href=\"javascript:void(0)\" (click)=\"onRouteNavigation(item)\"\n                    [ngClass]=\"{'active': item.route ? router.isActive(item.route, true): false,'expaned':expanded ,'has-arrow':item.child === true}\"\n                    aria-expanded=\"false\" [routerLinkActiveOptions]=\"{exact: true}\" routerLinkActive=\"active\">\n                    <!-- Below code is useful for teacher ,showing icons in menu items  -->\n                    <!-- <i class=\"nav-icon  {{item.iconName}}\"></i> -->\n                    <span class=\"nav-title\">\n                      {{item.displayName}}\n                    </span>\n                  </a>\n                  <ul aria-expanded=\"false\" *ngIf=\"item.child == true\">\n                    <li *ngFor=\"let subItem of item['children']\">\n                      <a routerLink=\"{{subItem.route}}\" routerLinkActive=\"active\"\n                        [routerLinkActiveOptions]=\"{exact: true}\" aria-expanded=\"false\">\n                        <span class=\"nav-title\">{{subItem.displayName}}</span>\n                      </a>\n                    </li>\n                  </ul>\n                </li>\n              </ul>\n            </div>\n            <!-- end sidebar-nav -->\n          </aside>\n          <!-- end app-navbar -->\n          <!-- begin app-main -->\n          <div class=\"app-main\" id=\"main\">\n            <!-- begin container-fluid -->\n            <div class=\"container-fluid\">\n              <!--Breadcump begin row -->\n              <div class=\"row\">\n                <div class=\"col-md-12 mb-3\">\n                  <div class=\"d-block d-sm-flex flex-nowrap align-items-center\">\n                    <div class=\"page-title mb-2 mb-sm-0\">\n                      <p class=\"text-white\">{{pageTitle}}</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!--Breadcump end row -->\n              <div class=\"card card-statistics\">\n                <div class=\"card-body p-3\">\n                  <router-outlet></router-outlet>\n                  <div class=\"scroll-top\" *ngIf=\"showScroll\" (click)=\"scrollOnTop()\" id=\"rocketmeluncur\">\n                    <i class=\"fa fa-chevron-up\"></i>\n                  </div>\n                </div>\n              </div>\n              <!-- end app-main -->\n            </div>\n            <!-- end app-container -->\n            <!-- begin footer -->\n            <!-- <footer class=\"footer\">\n              <div class=\"row\">\n                <div class=\"col-12 col-sm-6 text-center text-sm-left\">\n                  <p>&copy; Copyright 2019. All rights reserved.</p>\n                </div>\n                <div class=\"col  col-sm-6 ml-sm-auto text-center text-sm-right\">\n                  <p>\n                    Hand-crafted made with\n                    <i class=\"fa fa-heart text-danger mx-1\"></i> by insightus.in\n                  </p>\n                </div>\n              </div>\n            </footer> -->\n            <!-- end footer -->\n          </div>\n          <!-- end app-wrap -->\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ng-container>"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js");








var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(principal, router, loginService, activatedRoute, titleService, userAccessService, changeDetectorRef) {
        this.principal = principal;
        this.router = router;
        this.loginService = loginService;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.userAccessService = userAccessService;
        this.changeDetectorRef = changeDetectorRef;
        this.ariaExpanded = this.expanded;
        this.adminItems = [];
        this.topPosToStartShowing = 30;
        this.getMenuItemsList();
        this.activatedRoute.url.subscribe(function (activeUrl) {
            var currentRoute = window.location.hash.slice(1);
        });
    }
    LayoutComponent.prototype.checkScroll = function () {
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= this.topPosToStartShowing) {
            this.showScroll = true;
        }
        else {
            this.showScroll = false;
        }
    };
    LayoutComponent.prototype.ngOnInit = function () {
        this.metisMenu();
        this.getPageTitleInfo();
    };
    LayoutComponent.prototype.ngAfterViewChecked = function () {
        this.getPageTitleInfo();
        this.changeDetectorRef.detectChanges();
    };
    LayoutComponent.prototype.getPageTitleInfo = function () {
        this.pageTitle = this.userAccessService.getPageTitle();
    };
    LayoutComponent.prototype.getMenuItemsList = function () {
        this.adminItems = [
            {
                "displayName": "General subject administration",
                "iconName": "",
                "child": true,
                "children": [
                    {
                        "displayName": "Subjects",
                        "route": "/general-subject"
                    },
                    {
                        "displayName": "Topic content mapping",
                        "route": "/general-concept-and-topic/general-topic-content"
                    },
                    {
                        "displayName": "Topic questions",
                        "route": "/general-concept-and-topic/general-topic-question"
                    }
                ]
            },
            {
                "displayName": "Curriculum  administration",
                "iconName": "",
                "child": true,
                "children": [
                    {
                        "displayName": "Manage curriculums",
                        "route": "/curriculum"
                    },
                    {
                        "displayName": "Manage subjects",
                        "route": "/subject"
                    },
                    {
                        "displayName": "Manage lesson topics",
                        "route": "/lesson-topic/lesson-topic-manage"
                    },
                    {
                        "displayName": "Manage prerequisite topics",
                        "route": "/lesson-topic/prerequisite-lesson-topic-manage"
                    }
                ]
            },
            {
                "displayName": "Curriculum content administration",
                "iconName": "",
                "child": true,
                "children": [
                    {
                        "displayName": "Topic content",
                        "route": "/lesson-topic/topic-content"
                    },
                    {
                        "displayName": "Topic questions",
                        "route": "/lesson-topic/topic-question"
                    },
                    {
                        "displayName": "Additional lesson resources",
                        "route": "/lesson-topic/additional-resources"
                    },
                    {
                        "displayName": "Manage lesson plans",
                        "route": "/lesson-topic/lesson-plans"
                    }
                ]
            },
            {
                "displayName": "Organisation  administration",
                "iconName": "",
                "route": "/organisation",
                "child": false
            },
            {
                "displayName": "User  administration",
                "iconName": "",
                "route": "/user-admin",
                "child": false
            },
            {
                "displayName": "Student promotions",
                "iconName": "",
                "route": "/organisation/student-promotions",
                "child": false
            }
        ];
    };
    LayoutComponent.prototype.metisMenu = function () {
        $(function () {
            var sidebarNav = $(".sidebar-nav");
            if (sidebarNav.length > 0) {
                $('#sidebarNav').metisMenu();
            }
            $('.mobile-toggle').on('click', function () {
                $('.light-sidebar').toggleClass('sidebar-toggled');
            });
            $('.sidebar-toggle').on('click', function () {
                $('.light-sidebar').toggleClass('sidebar-mini');
                $('.app-navbar').toggleClass('expand');
            });
            $('.app-navbar').hover(function () {
                if ($('.light-sidebar').hasClass('sidebar-mini')) {
                    $('.navbar-header').toggleClass('expand');
                }
            });
        });
    };
    LayoutComponent.prototype.isAuthenticated = function () {
        return this.principal.isAuthenticated();
    };
    LayoutComponent.prototype.logout = function () {
        this.loginService.logout();
        this.router.navigate(["/account/login"]);
    };
    LayoutComponent.prototype.onRouteNavigation = function (item) {
        if (!item.children || !item.children.length) {
            this.router.navigate([item.route]);
        }
        if (item.children && item.children.length) {
            this.expanded = !this.expanded;
        }
        this.titleService.setTitle(item.displayName);
    };
    LayoutComponent.prototype.scrollOnTop = function () {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
    LayoutComponent.prototype.ngOnDestroy = function () {
        this.pageTitle = "";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.aria-expanded'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LayoutComponent.prototype, "ariaExpanded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], LayoutComponent.prototype, "checkScroll", null);
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "layout",
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["Principal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
            _core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/main/app.component.html":
/*!*****************************************!*\
  !*** ./src/app/main/app.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/main/app.component.scss":
/*!*****************************************!*\
  !*** ./src/app/main/app.component.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYXBwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/app.component.ts":
/*!***************************************!*\
  !*** ./src/app/main/app.component.ts ***!
  \***************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/main/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/main/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/shared/auth/has-any-authority.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/auth/has-any-authority.directive.ts ***!
  \************************************************************/
/*! exports provided: HasAnyAuthorityDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasAnyAuthorityDirective", function() { return HasAnyAuthorityDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");



/**
 * @whatItDoes Conditionally includes an HTML element if current user has any
 * of the authorities passed as the `expression`.
 *
 * @howToUse
 * ```
 *     <some-element *iusHasAnyAuthority="'ROLE_ADMIN'">...</some-element>
 *
 *     <some-element *iusHasAnyAuthority="['ROLE_ADMIN', 'ROLE_USER']">...</some-element>
 * ```
 */
var HasAnyAuthorityDirective = /** @class */ (function () {
    function HasAnyAuthorityDirective(principal, templateRef, viewContainerRef) {
        this.principal = principal;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    Object.defineProperty(HasAnyAuthorityDirective.prototype, "iusHasAnyAuthority", {
        set: function (value) {
            var _this = this;
            this.authorities = typeof value === 'string' ? [value] : value;
            this.updateView();
            // Get notified each time authentication state changes.
            this.principal.getAuthenticationState().subscribe(function (identity) { return _this.updateView(); });
        },
        enumerable: true,
        configurable: true
    });
    HasAnyAuthorityDirective.prototype.updateView = function () {
        var _this = this;
        this.principal.hasAnyAuthority(this.authorities).then(function (result) {
            _this.viewContainerRef.clear();
            if (result) {
                _this.viewContainerRef.createEmbeddedView(_this.templateRef);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], HasAnyAuthorityDirective.prototype, "iusHasAnyAuthority", null);
    HasAnyAuthorityDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[iusHasAnyAuthority]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["Principal"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], HasAnyAuthorityDirective);
    return HasAnyAuthorityDirective;
}());



/***/ }),

/***/ "./src/app/shared/common/common.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/common/common.service.ts ***!
  \*************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CommonService = /** @class */ (function () {
    function CommonService(http) {
        this.http = http;
    }
    CommonService.prototype.getMenuItems = function () {
        return this.http.get('./assets/local-data/menu-items.json');
    };
    CommonService.prototype.getCountryList = function () {
        return this.http.get('./assets/local-data/countries.json');
    };
    CommonService.prototype.getStateList = function () {
        return this.http.get('./assets/local-data/states.json');
    };
    CommonService.prototype.getCityList = function () {
        return this.http.get('./assets/local-data/cities.json');
    };
    CommonService.prototype.getGeneralDataList = function () {
        return this.http.get('./assets/local-data/general.json');
    };
    CommonService.prototype.getContentHostedDetailsList = function () {
        return this.http.get('./assets/local-data/content-hosted-details.json');
    };
    CommonService.prototype.getContentCategoryList = function () {
        return this.http.get('./assets/local-data/content-category.json');
    };
    CommonService.prototype.getContentSourceList = function () {
        return this.http.get('./assets/local-data/content-source.json');
    };
    CommonService.prototype.getContentTypeList = function () {
        return this.http.get('./assets/local-data/content-type.json');
    };
    CommonService.prototype.getQuestionTypeList = function () {
        return this.http.get('./assets/local-data/question-type.json');
    };
    CommonService.prototype.getQuestionCategoryList = function () {
        return this.http.get('./assets/local-data/question-category.json');
    };
    CommonService.prototype.getQuestionComplexityLevelList = function () {
        return this.http.get('./assets/local-data/question-complexity-level.json');
    };
    CommonService.prototype.getOrganisationTypeList = function () {
        return this.http.get('./assets/local-data/organisation-type.json');
    };
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/shared/constants/error.constants.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/constants/error.constants.ts ***!
  \*****************************************************/
/*! exports provided: PROBLEM_BASE_URL, EMAIL_ALREADY_USED_TYPE, LOGIN_ALREADY_USED_TYPE, EMAIL_NOT_FOUND_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROBLEM_BASE_URL", function() { return PROBLEM_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_ALREADY_USED_TYPE", function() { return EMAIL_ALREADY_USED_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_ALREADY_USED_TYPE", function() { return LOGIN_ALREADY_USED_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_NOT_FOUND_TYPE", function() { return EMAIL_NOT_FOUND_TYPE; });
var PROBLEM_BASE_URL = 'https://www.jhipster.tech/problem';
var EMAIL_ALREADY_USED_TYPE = PROBLEM_BASE_URL + '/email-already-used';
var LOGIN_ALREADY_USED_TYPE = PROBLEM_BASE_URL + '/login-already-used';
var EMAIL_NOT_FOUND_TYPE = PROBLEM_BASE_URL + '/email-not-found';


/***/ }),

/***/ "./src/app/shared/constants/pagination.constants.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/constants/pagination.constants.ts ***!
  \**********************************************************/
/*! exports provided: ITEMS_PER_PAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITEMS_PER_PAGE", function() { return ITEMS_PER_PAGE; });
var ITEMS_PER_PAGE = 10;


/***/ }),

/***/ "./src/app/shared/file-management/file-management.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/file-management/file-management.service.ts ***!
  \*******************************************************************/
/*! exports provided: FileManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileManagementService", function() { return FileManagementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');
var FileManagementService = /** @class */ (function () {
    function FileManagementService(http) {
        this.http = http;
        this.generateURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/file/file-upload-url';
        this.downloadFile = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/file/download-url';
        this.deleteFile = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/file/delete';
        this.imgBase64File = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/file/image-upload-url';
    }
    //Service call to get a presigned URL from AWS 
    FileManagementService.prototype.getpresignedurls = function (fileName) {
        return this.http.get(this.generateURL + "/" + fileName, { observe: 'response' });
    };
    //Upload a PDF file to a presigned URL from AWS
    FileManagementService.prototype.uploadPDFFile = function (fileuploadurl, file) {
        var formdata = new FormData();
        formdata.append('file', file);
        return this.http.put(fileuploadurl, formdata, { observe: 'response' });
    };
    //Service call to get a presigned URL from AWS
    FileManagementService.prototype.getImagePresignedurls = function (fileName) {
        //return this.http.get<any>(`${this.imgBase64File}/${fileName}`, { observe: 'response' });
        return this.http.get(this.imgBase64File + "/" + fileName).toPromise();
    };
    //Upload a image file to a presigned URL from AWS
    FileManagementService.prototype.uploadImagefileAWSS3 = function (fileuploadurl, base64Data) {
        var binaryBuf = this.base64ToArrayBuffer(base64Data);
        //return this.http.put<any>(fileuploadurl, binaryBuf, { observe: 'response' })
        return this.http.put(fileuploadurl, binaryBuf).toPromise();
    };
    //Upload a video file to a presigned URL from AWS
    FileManagementService.prototype.uploadVideoFile = function (fileuploadurl, base64Data) {
        var binaryBuf = this.base64ToArrayBuffer(base64Data);
        return this.http.put(fileuploadurl, binaryBuf, { observe: 'response' });
    };
    //Service call to delete a uploaded file
    FileManagementService.prototype.deleteUploadedFile = function (fileName) {
        return this.http.delete(this.deleteFile + "/" + fileName, { observe: 'response' });
    };
    //Base64 to array buffer conversion
    FileManagementService.prototype.base64ToArrayBuffer = function (base64) {
        var binary_string = window.atob(base64);
        var len = binary_string.length;
        var bytes = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes.buffer;
    };
    //Service call to download files
    FileManagementService.prototype.downloadFiles = function (fileName) {
        return this.http.get(this.downloadFile + "/" + fileName, { observe: 'response' });
    };
    FileManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FileManagementService);
    return FileManagementService;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: PROBLEM_BASE_URL, EMAIL_ALREADY_USED_TYPE, LOGIN_ALREADY_USED_TYPE, EMAIL_NOT_FOUND_TYPE, ITEMS_PER_PAGE, SharedModule, HasAnyAuthorityDirective, createRequestOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_error_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/error.constants */ "./src/app/shared/constants/error.constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PROBLEM_BASE_URL", function() { return _constants_error_constants__WEBPACK_IMPORTED_MODULE_0__["PROBLEM_BASE_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EMAIL_ALREADY_USED_TYPE", function() { return _constants_error_constants__WEBPACK_IMPORTED_MODULE_0__["EMAIL_ALREADY_USED_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGIN_ALREADY_USED_TYPE", function() { return _constants_error_constants__WEBPACK_IMPORTED_MODULE_0__["LOGIN_ALREADY_USED_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EMAIL_NOT_FOUND_TYPE", function() { return _constants_error_constants__WEBPACK_IMPORTED_MODULE_0__["EMAIL_NOT_FOUND_TYPE"]; });

/* harmony import */ var _constants_pagination_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/pagination.constants */ "./src/app/shared/constants/pagination.constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ITEMS_PER_PAGE", function() { return _constants_pagination_constants__WEBPACK_IMPORTED_MODULE_1__["ITEMS_PER_PAGE"]; });

/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]; });

/* harmony import */ var _auth_has_any_authority_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/has-any-authority.directive */ "./src/app/shared/auth/has-any-authority.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HasAnyAuthorityDirective", function() { return _auth_has_any_authority_directive__WEBPACK_IMPORTED_MODULE_3__["HasAnyAuthorityDirective"]; });

/* harmony import */ var _util_request_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/request-util */ "./src/app/shared/util/request-util.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRequestOption", function() { return _util_request_util__WEBPACK_IMPORTED_MODULE_4__["createRequestOption"]; });








/***/ }),

/***/ "./src/app/shared/input-directive/input.restriction.directive.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/input-directive/input.restriction.directive.ts ***!
  \***********************************************************************/
/*! exports provided: InputRestrictionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputRestrictionDirective", function() { return InputRestrictionDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputRestrictionDirective = /** @class */ (function () {
    function InputRestrictionDirective(el) {
        this.arabicRegex = '[\u0600-\u06FF]';
        this.inputElement = el;
    }
    InputRestrictionDirective.prototype.onKeyPress = function (event) {
        if (this.inputRestriction === 'onlyIntegers') {
            this.integerOnly(event);
        }
        else if (this.inputRestriction === 'alphabetsWithSpace') {
            this.alphabetsWithSpace(event);
        }
        else if (this.inputRestriction === 'alphabetsNumbersWithMinus') {
            this.alphabetsNumbersWithMinus(event);
        }
        else if (this.inputRestriction === 'noSpecialChars') {
            this.noSpecialChars(event);
        }
    };
    InputRestrictionDirective.prototype.integerOnly = function (event) {
        var e = event;
        if (e.key === 'Tab' || e.key === 'TAB') {
            return true;
        }
        if ([46, 8, 9, 27, 13, 110].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode === 65 && e.ctrlKey === true) ||
            // Allow: Ctrl+C
            (e.keyCode === 67 && e.ctrlKey === true) ||
            // Allow: Ctrl+V
            (e.keyCode === 86 && e.ctrlKey === true) ||
            // Allow: Ctrl+X
            (e.keyCode === 88 && e.ctrlKey === true)) {
            // let it happen, don't do anything
            return true;
        }
        if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].indexOf(e.key) === -1) {
            e.preventDefault();
        }
    };
    InputRestrictionDirective.prototype.alphabetsWithSpace = function (event) {
        var e = event;
        if (e.key === 'Tab' || e.key === 'TAB') {
            return true;
        }
        if ([46, 8, 9, 27, 13, 110].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode === 65 && e.ctrlKey === true) ||
            // Allow: Ctrl+C
            (e.keyCode === 67 && e.ctrlKey === true) ||
            // Allow: Ctrl+V
            (e.keyCode === 86 && e.ctrlKey === true) ||
            // Allow: Ctrl+X
            (e.keyCode === 88 && e.ctrlKey === true)) {
            // let it happen, don't do anything
            return true;
        }
        var k;
        k = event.keyCode; // k = event.charCode;  (Both can be used)
        if ((k > 64 && k < 91) || (k > 96 && k < 123 || k === 32)) {
            return true;
        }
        e.preventDefault();
    };
    InputRestrictionDirective.prototype.alphabetsNumbersWithMinus = function (event) {
        var e = event;
        if (e.key === 'Tab' || e.key === 'TAB') {
            return true;
        }
        if ([46, 8, 9, 27, 13, 110].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode === 65 && e.ctrlKey === true) ||
            // Allow: Ctrl+C
            (e.keyCode === 67 && e.ctrlKey === true) ||
            // Allow: Ctrl+V
            (e.keyCode === 86 && e.ctrlKey === true) ||
            // Allow: Ctrl+X
            (e.keyCode === 88 && e.ctrlKey === true)) {
            // let it happen, don't do anything
            return true;
        }
        var k;
        k = event.keyCode; // k = event.charCode;  (Both can be used)
        if ((k > 64 && k < 91) || (k > 96 && k < 123 || k === 45 || k === 109 || k === 32 || k > 47 && k < 58) || event.key === "&" || event.key === "V") {
            return true;
        }
        e.preventDefault();
    };
    InputRestrictionDirective.prototype.noSpecialChars = function (event) {
        var e = event;
        if (e.key === 'Tab' || e.key === 'TAB') {
            return true;
        }
        var k;
        k = event.keyCode; // k = event.charCode;  (Both can be used)
        if ((k > 64 && k < 91) || (k > 96 && k < 123) || k === 8 || k === 32 || (k >= 48 && k <= 57)) {
            return true;
        }
        var ch = String.fromCharCode(e.keyCode);
        var regEx = new RegExp(this.arabicRegex);
        if (regEx.test(ch)) {
            return true;
        }
        e.preventDefault();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('inputRestriction'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputRestrictionDirective.prototype, "inputRestriction", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keypress', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], InputRestrictionDirective.prototype, "onKeyPress", null);
    InputRestrictionDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[inputRestriction]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], InputRestrictionDirective);
    return InputRestrictionDirective;
}());



/***/ }),

/***/ "./src/app/shared/mathjax/mathjax-directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/mathjax/mathjax-directive.ts ***!
  \*****************************************************/
/*! exports provided: MathJaxDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathJaxDirective", function() { return MathJaxDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MathJaxDirective = /** @class */ (function () {
    function MathJaxDirective(element) {
        this.element = element;
    }
    MathJaxDirective.prototype.ngOnChanges = function () {
        this.element.nativeElement.innerHTML = this.texExpression;
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.element.nativeElement.innerHTML]);
        MathJax.Hub.Config({
            showMathMenu: false,
            messageStyle: "none"
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(' MathJax'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MathJaxDirective.prototype, "texExpression", void 0);
    MathJaxDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[MathJax]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], MathJaxDirective);
    return MathJaxDirective;
}());



/***/ }),

/***/ "./src/app/shared/plugin/plugin.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/plugin/plugin.service.ts ***!
  \*************************************************/
/*! exports provided: PluginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginService", function() { return PluginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PluginService = /** @class */ (function () {
    function PluginService() {
        this.ckEditorQuestionConfig = {
            lang: 'en',
            allowedContent: true,
            height: '150px',
            extraPlugins: ['mathjax', 'divarea', 'easyimage'],
            mathJaxClass: 'math-tex',
            mathJaxLib: './assets/MathJax-2.7.7/latest.js?config=TeX-MML-AM_CHTML',
            removePlugins: ['elementspath', 'image', 'maximize'],
            cloudServices_tokenUrl: './assets',
            cloudServices_uploadUrl: './assets',
            toolbarGroups: [
                { name: 'clipboard', groups: ['clipboard', 'undo'] },
                { name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
                { name: 'insert' },
                { name: 'forms' },
                { name: 'tools' },
                { name: 'document', groups: ['mode', 'document', 'doctools'] },
                { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
                { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] },
                { name: 'styles' },
                { name: 'colors' }
            ]
        };
        this.ckEditorChoiceConfig = {
            lang: 'en',
            allowedContent: true,
            height: '50px',
            extraPlugins: ['mathjax', 'divarea', 'easyimage'],
            mathJaxClass: 'm-equation',
            mathJaxLib: './assets/MathJax-2.7.7/latest.js?config=TeX-MML-AM_CHTML',
            removePlugins: ['elementspath', 'image', 'maximize'],
            cloudServices_tokenUrl: './assets',
            cloudServices_uploadUrl: './assets',
            toolbarGroups: [
                { name: 'clipboard', groups: ['clipboard', 'undo'] },
                { name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
                { name: 'insert' },
                { name: 'forms' },
                { name: 'tools' },
                { name: 'document', groups: ['mode', 'document', 'doctools'] },
                { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
                { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] },
                { name: 'styles' },
                { name: 'colors' }
            ]
        };
    }
    PluginService.prototype.stepper = function () {
        $(document).ready(function () {
            var $progressWizard = $('.stepper'), $tab_active, $tab_prev, $tab_next, $btn_prev = $progressWizard.find('.prev-step'), $btn_next = $progressWizard.find('.next-step');
            $btn_next.on('click', function () {
                $tab_active = $progressWizard.find('.active');
                $tab_active.next().removeClass('disabled').addClass('active');
                $tab_active.removeClass('active').addClass('disabled');
                $tab_next = $progressWizard.find('.show');
                $tab_next.next().addClass('show').addClass('active');
                $tab_next.removeClass('show').removeClass('show');
            });
            $btn_prev.click(function () {
                $tab_active = $progressWizard.find('.active');
                $tab_active.prev().removeClass('disabled').addClass('active');
                $tab_active.removeClass('active').addClass('disabled');
                $tab_prev = $progressWizard.find('.show');
                $tab_prev.prev().addClass('show').addClass('active');
                $tab_prev.removeClass('show').removeClass('show');
            });
        });
    };
    PluginService.prototype.dragAndDrop = function (dragTableID, dragBody) {
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
        };
        $(dragTableID + "" + dragBody)
            .sortable({
            helper: fixHelperModified,
            stop: updateIndex
        })
            .disableSelection();
        $(dragBody).sortable({
            distance: 5,
            delay: 100,
            opacity: 0.6,
            cursor: "move",
            update: function () { }
        });
    };
    PluginService.prototype.jsTree = function (ID, jsonData, isDraggable) {
        var pluginConfig;
        var localObj = this;
        if (isDraggable) {
            pluginConfig = ["types", "conditionalselect", "dnd"];
        }
        else {
            pluginConfig = ["types", "conditionalselect"];
        }
        $(document).ready(function () {
            $(ID).jstree({
                core: {
                    check_callback: function (operation, node, node_parent, node_position, more) {
                        var childnodeLength = node_parent.children.length;
                        if ((operation === "move_node" || operation === "copy_node") && node.type && node.type == "root") {
                            return false;
                        }
                        if (operation === "move_node") {
                            console.log(node_position);
                        }
                    },
                    data: jsonData,
                    expand_selected_onload: true
                },
                types: {
                    root: {
                        icon: "fa fa-book",
                        valid_children: ["unit", "lesson", "concept", "topic"]
                    },
                    default: {
                        icon: "fa fa-file",
                        valid_children: []
                    },
                    unit: {
                        icon: "fe fe-server",
                        valid_children: ["unit", "lesson"]
                    },
                    lesson: {
                        icon: "fa fa-file",
                        valid_children: []
                    },
                    concept: {
                        icon: "fe fe-server",
                        valid_children: ["concept", "topic"]
                    },
                    topic: {
                        icon: "fa fa-file",
                        valid_children: []
                    }
                },
                plugins: pluginConfig
            });
            $(ID).jstree(true).settings.core.data = jsonData;
            $(ID).jstree().refresh();
            localObj.openJsTreeAllNodes(ID);
        });
    };
    PluginService.prototype.openJsTreeAllNodes = function (ID) {
        $(document).ready(function () {
            $(ID).jstree("open_all");
        });
    };
    PluginService.prototype.closeJsTreeAllNodes = function (ID) {
        $(document).ready(function () {
            $(ID).jstree("close_all");
        });
    };
    PluginService.prototype.alertMessage = function (message, messageType) {
        swal({
            title: message,
            //text: "You will not be able to recover this imaginary file!",
            type: messageType,
            showCancelButton: false,
            closeOnConfirm: false,
            closeOnCancel: false
        });
    };
    PluginService.prototype.newStepperJs = function () {
        //jQuery time
        var current_fs, next_fs, previous_fs; //fieldsets
        var left, opacity, scale; //fieldset properties which we will animate
        var animating; //flag to prevent quick multi-click glitches
        $(".next").click(function () {
            if (animating)
                return false;
            animating = true;
            current_fs = $(this).parent();
            next_fs = $(this).parent().next();
            //activate next step on progressbar using the index of next_fs
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
            //show the next fieldset
            next_fs.show();
            //hide the current fieldset with style
            current_fs.animate({ opacity: 0 }, {
                step: function (now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale current_fs down to 80%
                    scale = 1 - (1 - now) * 0.2;
                    //2. bring next_fs from the right(50%)
                    left = (now * 50) + "%";
                    //3. increase opacity of next_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({
                        'transform': 'scale(' + scale + ')',
                    });
                    next_fs.css({ 'left': left, 'opacity': opacity });
                },
                duration: 0,
                complete: function () {
                    current_fs.hide();
                    animating = false;
                },
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });
        });
        $(".previous").click(function () {
            if (animating)
                return false;
            animating = false;
            current_fs = $(this).parent();
            previous_fs = $(this).parent().prev();
            //de-activate current step on progressbar
            $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
            //show the previous fieldset
            previous_fs.show();
            //hide the current fieldset with style
            current_fs.animate({ opacity: 0 }, {
                step: function (now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale previous_fs from 80% to 100%
                    scale = 0.8 + (1 - now) * 0.2;
                    //2. take current_fs to the right(50%) - from 0%
                    left = ((1 - now) * 50) + "%";
                    //3. increase opacity of previous_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({ 'left': left });
                    previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
                },
                duration: 0,
                complete: function () {
                    current_fs.hide();
                    animating = false;
                },
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });
        });
    };
    PluginService.prototype.datePicker = function (ID) {
        $(document).ready(function () {
            $(ID).datepicker({
                format: 'dd-mm-yyyy',
                autoclose: true,
                orientation: "bottom",
                templates: {
                    leftArrow: '<i class="fa fa-angle-left"></i>',
                    rightArrow: '<i class="fa fa-angle-right"></i>'
                }
            });
        });
    };
    PluginService.prototype.showModalWindow = function (ID) {
        $(document).ready(function () {
            $(ID).modal({
                detachable: false,
                closable: false,
                transition: "slide left"
            }).modal('show');
        });
    };
    PluginService.prototype.hideModalWindow = function (ID) {
        $(document).ready(function () {
            $(ID).modal('hide others').modal('hide dimmer').modal('hide');
        });
    };
    PluginService.prototype.sideMenuToggle = function () {
        $('#sidebarNav').metisMenu();
        $('.light-sidebar').toggleClass('sidebar-mini');
        $('.app-navbar').toggleClass('expand');
        $('.light-sidebar').toggleClass('sidebar-toggled');
        $('.app-navbar').hover(function () {
            if ($('.light-sidebar').hasClass('sidebar-mini')) {
                $('.navbar-header').toggleClass('expand');
            }
        });
    };
    PluginService.prototype.getCKEditorQuestionConfig = function () {
        return this.ckEditorQuestionConfig;
    };
    PluginService.prototype.getCKEditorChoiceConfig = function () {
        return this.ckEditorChoiceConfig;
    };
    PluginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PluginService);
    return PluginService;
}());



/***/ }),

/***/ "./src/app/shared/sanitizeHtml-pipe/sanitizeHtml.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/sanitizeHtml-pipe/sanitizeHtml.pipe.ts ***!
  \***************************************************************/
/*! exports provided: SanitizeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeHtmlPipe", function() { return SanitizeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SanitizeHtmlPipe = /** @class */ (function () {
    function SanitizeHtmlPipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SanitizeHtmlPipe.prototype.transform = function (value) {
        return this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, this._sanitizer.bypassSecurityTrustHtml(value));
    };
    SanitizeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'sanitizeHtml'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SanitizeHtmlPipe);
    return SanitizeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/shared/shared-library.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/shared-library.module.ts ***!
  \*************************************************/
/*! exports provided: SharedLibraryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedLibraryModule", function() { return SharedLibraryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var alife_file_to_base64__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! alife-file-to-base64 */ "./node_modules/alife-file-to-base64/fesm5/alife-file-to-base64.js");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm5/ckeditor4-angular.js");








var SharedLibraryModule = /** @class */ (function () {
    function SharedLibraryModule() {
    }
    SharedLibraryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
                alife_file_to_base64__WEBPACK_IMPORTED_MODULE_6__["AlifeFileToBase64Module"],
                ckeditor4_angular__WEBPACK_IMPORTED_MODULE_7__["CKEditorModule"]
            ],
            exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"], alife_file_to_base64__WEBPACK_IMPORTED_MODULE_6__["AlifeFileToBase64Module"], ckeditor4_angular__WEBPACK_IMPORTED_MODULE_7__["CKEditorModule"]]
        })
    ], SharedLibraryModule);
    return SharedLibraryModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_library_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared-library.module */ "./src/app/shared/shared-library.module.ts");
/* harmony import */ var _auth_has_any_authority_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/has-any-authority.directive */ "./src/app/shared/auth/has-any-authority.directive.ts");
/* harmony import */ var _plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-login-info/user-login-info.service */ "./src/app/shared/user-login-info/user-login-info.service.ts");
/* harmony import */ var _common_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _input_directive_input_restriction_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input-directive/input.restriction.directive */ "./src/app/shared/input-directive/input.restriction.directive.ts");
/* harmony import */ var _sanitizeHtml_pipe_sanitizeHtml_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sanitizeHtml-pipe/sanitizeHtml.pipe */ "./src/app/shared/sanitizeHtml-pipe/sanitizeHtml.pipe.ts");
/* harmony import */ var _file_management_file_management_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./file-management/file-management.service */ "./src/app/shared/file-management/file-management.service.ts");
/* harmony import */ var _mathjax_mathjax_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mathjax/mathjax-directive */ "./src/app/shared/mathjax/mathjax-directive.ts");











var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _auth_has_any_authority_directive__WEBPACK_IMPORTED_MODULE_3__["HasAnyAuthorityDirective"],
                _input_directive_input_restriction_directive__WEBPACK_IMPORTED_MODULE_7__["InputRestrictionDirective"],
                _sanitizeHtml_pipe_sanitizeHtml_pipe__WEBPACK_IMPORTED_MODULE_8__["SanitizeHtmlPipe"],
                _mathjax_mathjax_directive__WEBPACK_IMPORTED_MODULE_10__["MathJaxDirective"]
            ],
            imports: [_shared_library_module__WEBPACK_IMPORTED_MODULE_2__["SharedLibraryModule"]],
            exports: [
                _auth_has_any_authority_directive__WEBPACK_IMPORTED_MODULE_3__["HasAnyAuthorityDirective"],
                _input_directive_input_restriction_directive__WEBPACK_IMPORTED_MODULE_7__["InputRestrictionDirective"],
                _shared_library_module__WEBPACK_IMPORTED_MODULE_2__["SharedLibraryModule"],
                _sanitizeHtml_pipe_sanitizeHtml_pipe__WEBPACK_IMPORTED_MODULE_8__["SanitizeHtmlPipe"],
                _mathjax_mathjax_directive__WEBPACK_IMPORTED_MODULE_10__["MathJaxDirective"]
            ],
            providers: [_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"], _user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_5__["UserLoginInfoService"], _common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"], _file_management_file_management_service__WEBPACK_IMPORTED_MODULE_9__["FileManagementService"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/user-login-info/user-login-info.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/user-login-info/user-login-info.service.ts ***!
  \*******************************************************************/
/*! exports provided: UserLoginInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginInfoService", function() { return UserLoginInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/core */ "./src/app/core/index.ts");





var UserLoginInfoService = /** @class */ (function () {
    function UserLoginInfoService(http, accountService, pluginService, principalService) {
        this.http = http;
        this.accountService = accountService;
        this.pluginService = pluginService;
        this.principalService = principalService;
        if (principalService.authenticated === true) {
            this.getLoginInformation();
        }
    }
    UserLoginInfoService.prototype.getLoginInformation = function () {
        var _this = this;
        this.accountService.get()
            .subscribe(function (res) { return _this.assignLoginInfo(res.body); }, function (res) { return _this.onError(res.message); });
    };
    UserLoginInfoService.prototype.assignLoginInfo = function (data) {
        var login = data.login;
        this.getUserLoginInfo(login);
    };
    UserLoginInfoService.prototype.onError = function (errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    };
    UserLoginInfoService.prototype.getUserLoginInfo = function (login) {
        var _this = this;
        this.accountService.getUserLoginInfo(login)
            .subscribe(function (res) { return _this.assignUserLoginInfo(res.body); }, function (res) { return _this.onError(res.message); });
    };
    UserLoginInfoService.prototype.assignUserLoginInfo = function (data) {
        this.organisationId = data.organisationId;
    };
    UserLoginInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _app_core__WEBPACK_IMPORTED_MODULE_4__["AccountService"],
            _plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"],
            _app_core__WEBPACK_IMPORTED_MODULE_4__["Principal"]])
    ], UserLoginInfoService);
    return UserLoginInfoService;
}());



/***/ }),

/***/ "./src/app/shared/util/request-util.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/util/request-util.ts ***!
  \*********************************************/
/*! exports provided: createRequestOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRequestOption", function() { return createRequestOption; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

var createRequestOption = function (req) {
    var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
    if (req) {
        Object.keys(req).forEach(function (key) {
            if (key !== 'sort') {
                options = options.set(key, req[key]);
            }
        });
        if (req.sort) {
            req.sort.forEach(function (val) {
                options = options.append('sort', val);
            });
        }
    }
    return options;
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    // API_SERVER: "http://192.168.1.14:8080",
    // API_URL: "http://192.168.1.14:8080/"
    API_SERVER: "http://172.105.47.78:8080",
    API_URL: "http://172.105.47.78:8080/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kisho\OneDrive\Desktop\Work\ceadmin-dev_kishore\ceadmin-dev_kishore\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map