(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-admin-user-admin-module"],{

/***/ "./src/app/user-admin/user-admin-manage.component.html":
/*!*************************************************************!*\
  !*** ./src/app/user-admin/user-admin-manage.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3 alert-warning w-100\">\n  Coming soon..!\n</div>"

/***/ }),

/***/ "./src/app/user-admin/user-admin-manage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user-admin/user-admin-manage.component.ts ***!
  \***********************************************************/
/*! exports provided: UserAdminManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAdminManageComponent", function() { return UserAdminManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-admin.service */ "./src/app/user-admin/user-admin.service.ts");



var UserAdminManageComponent = /** @class */ (function () {
    function UserAdminManageComponent() {
    }
    UserAdminManageComponent.prototype.ngOnInit = function () { };
    UserAdminManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./user-admin-manage.component.html */ "./src/app/user-admin/user-admin-manage.component.html"),
            providers: [_user_admin_service__WEBPACK_IMPORTED_MODULE_2__["UserAdminService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserAdminManageComponent);
    return UserAdminManageComponent;
}());



/***/ }),

/***/ "./src/app/user-admin/user-admin.module.ts":
/*!*************************************************!*\
  !*** ./src/app/user-admin/user-admin.module.ts ***!
  \*************************************************/
/*! exports provided: UserAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAdminModule", function() { return UserAdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm5/ng-jhipster.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_admin_manage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-admin-manage.component */ "./src/app/user-admin/user-admin-manage.component.ts");
/* harmony import */ var _user_admin_route__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-admin.route */ "./src/app/user-admin/user-admin.route.ts");










var UserAdminModule = /** @class */ (function () {
    function UserAdminModule() {
    }
    UserAdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_user_admin_route__WEBPACK_IMPORTED_MODULE_9__["userAdminRoute"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["NgJhipsterModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ],
            declarations: [
                _user_admin_manage_component__WEBPACK_IMPORTED_MODULE_8__["UserAdminManageComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], UserAdminModule);
    return UserAdminModule;
}());



/***/ }),

/***/ "./src/app/user-admin/user-admin.route.ts":
/*!************************************************!*\
  !*** ./src/app/user-admin/user-admin.route.ts ***!
  \************************************************/
/*! exports provided: userAdminRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userAdminRoute", function() { return userAdminRoute; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _user_admin_manage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-admin-manage.component */ "./src/app/user-admin/user-admin-manage.component.ts");


var userAdminRoute = [
    {
        path: '',
        component: _user_admin_manage_component__WEBPACK_IMPORTED_MODULE_1__["UserAdminManageComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Manage user administration'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_0__["UserRouteAccessService"]]
    }
];


/***/ }),

/***/ "./src/app/user-admin/user-admin.service.ts":
/*!**************************************************!*\
  !*** ./src/app/user-admin/user-admin.service.ts ***!
  \**************************************************/
/*! exports provided: UserAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAdminService", function() { return UserAdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');
var UserAdminService = /** @class */ (function () {
    function UserAdminService(http) {
        this.http = http;
        this.userResourceUrlSearch = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/common/api/users';
    }
    UserAdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserAdminService);
    return UserAdminService;
}());



/***/ })

}]);
//# sourceMappingURL=user-admin-user-admin-module.js.map