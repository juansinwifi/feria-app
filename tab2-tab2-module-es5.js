(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tab2/tab2.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tab2/tab2.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <ion-slides pager=\"true\">\n\n        <ion-slide>\n            <ion-list>\n                <ion-item>\n                    <!-- <ion-img src=\"../assets/img/mejor.jpg\"></ion-img> -->\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col size=\"4\" class=\"organgeT\">Nombre del grupo</ion-col>\n                            <ion-col size=\"4\" class=\"organgeT\" style=\"text-align:center;\"># grupo</ion-col>\n                            <ion-col size=\"4\" class=\"organgeT\" style=\"text-align:center;\">Puntuación total</ion-col>\n                        </ion-row>\n                    </ion-grid>\n                    <br>\n\n                </ion-item>\n                <ion-item *ngFor=\"let i of tabla\">\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col>{{i.descripcion}}</ion-col>\n                            <ion-col style=\"text-align:center;\">{{i.grupo}}</ion-col>\n                            <ion-col style=\"text-align:center;\">{{i.puntaje}}</ion-col>\n                        </ion-row>\n                    </ion-grid>\n\n                </ion-item>\n                <ion-item>\n                    <h2>Mejor proyecto</h2>\n                </ion-item>\n                <ion-item>\n                    <p>Actualamente el mejor grupo debido a su calficación es el:<b><b> {{mayor.grupo}}</b></b> con su proyecto <b> {{mayor.descripcion}}</b> </p>\n\n\n                </ion-item>\n            </ion-list>\n            <br>\n\n        </ion-slide>\n        <ion-slide>\n            <ion-list>\n                <ion-item>\n                    <ion-img class=\"primero\" src=\"../assets/img/primero.jpg\"></ion-img>\n                </ion-item>\n                <ion-item>\n                    <h2>Mejor proyecto primer semestre</h2>\n                </ion-item>\n                <ion-item>\n                    <p>Actualamente el mejor grupo debido a su calficación es: <b>{{primero.grupo}}</b> con su proyecto <b> {{primero.descripcion}}</b></p>\n\n\n                </ion-item>\n            </ion-list>\n\n        </ion-slide>\n        <ion-slide>\n            <ion-list>\n                <ion-item>\n                    <ion-img class=\"ultimo\" src=\"../assets/img/ultimo.jpg\"></ion-img>\n                </ion-item>\n                <ion-item>\n                    <h2>Mejor proyecto ultimo semestre</h2>\n                </ion-item>\n                <ion-item>\n                    <p>Actualamente el mejor grupo debido a su calficación es:<b>{{ultimo.grupo}}</b> con su proyecto <b>{{ultimo.descripcion}}</b> </p>\n\n\n                </ion-item>\n            </ion-list>\n\n        </ion-slide>\n    </ion-slides>\n\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/tab2/tab2.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tab2/tab2.module.ts ***!
  \*******************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/pages/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/pages/tab2/tab2.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tab2/tab2.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slides {\n  height: 100%;\n}\n\n.primero {\n  width: 344px;\n}\n\n.ultimo {\n  width: 339px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFiMi9DOlxcVXNlcnNcXFRlcXVpbGFcXERlc2t0b3BcXGFuZ3VsYXIyXFxmZXJpYS9zcmNcXGFwcFxccGFnZXNcXHRhYjJcXHRhYjIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWIyL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnByaW1lcm8ge1xuICAgIHdpZHRoOiAzNDRweDtcbn1cblxuLnVsdGltbyB7XG4gICAgd2lkdGg6IDMzOXB4O1xufSIsImlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wcmltZXJvIHtcbiAgd2lkdGg6IDM0NHB4O1xufVxuXG4udWx0aW1vIHtcbiAgd2lkdGg6IDMzOXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tab2/tab2.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tab2/tab2.page.ts ***!
  \*****************************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/reports.service */ "./src/app/services/reports.service.ts");



var Tab2Page = /** @class */ (function () {
    function Tab2Page(reporte) {
        var _this = this;
        this.reporte = reporte;
        this.mayor = {
            grupo: '',
            descripcion: '',
        };
        this.primero = {
            grupo: '',
            descripcion: '',
        };
        this.ultimo = {
            grupo: '',
            descripcion: '',
        };
        this.tabla = [];
        this.reporte.getMayor().subscribe(function (data) {
            _this.mayor = JSON.parse(JSON.stringify(data));
        });
        this.reporte.getPrimero().subscribe(function (data) {
            _this.primero = JSON.parse(JSON.stringify(data));
        });
        this.reporte.getMayor().subscribe(function (data) {
            _this.ultimo = JSON.parse(JSON.stringify(data));
        });
        this.reporte.getTabla().subscribe(function (data) {
            console.log(data);
            _this.tabla = JSON.parse(JSON.stringify(data));
        });
    }
    Tab2Page.ctorParameters = function () { return [
        { type: _services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"] }
    ]; };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/pages/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ }),

/***/ "./src/app/services/reports.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/reports.service.ts ***!
  \*********************************************/
/*! exports provided: ReportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsService", function() { return ReportsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ReportsService = /** @class */ (function () {
    //urlTabla = 'http://jenkins.b612.cloud/tabla.php';
    function ReportsService(http) {
        this.http = http;
        //urlMayor = 'http://localhost:80/pruebas/Mayor.php';
        this.urlMayor = 'http://jenkins.b612.cloud/mayor.php';
        //urlPrimero = 'http://localhost:80/pruebas/primero.php';
        this.urlPrimero = 'http://jenkins.b612.cloud/primero.php';
        //urlUltimo = 'http://localhost:80/pruebas/primero.php';
        this.urlUltimo = 'http://jenkins.b612.cloud/ultimo.php';
        this.urlTabla = 'http://localhost:80/pruebas/tabla.php';
    }
    ReportsService.prototype.getPrimero = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'X-Requested-With': 'XMLHttpRequest',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                'content-Type': 'application/json',
            })
        };
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-Type': 'application/json',
        });
        return this.http.get(this.urlPrimero, { headers: header });
    };
    ReportsService.prototype.getTabla = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'X-Requested-With': 'XMLHttpRequest',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                'content-Type': 'application/json',
            })
        };
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-Type': 'application/json',
        });
        return this.http.get(this.urlTabla, { headers: header });
    };
    ReportsService.prototype.getUltimo = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'X-Requested-With': 'XMLHttpRequest',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                'content-Type': 'application/json',
            })
        };
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-Type': 'application/json',
        });
        return this.http.get(this.urlUltimo, { headers: header });
    };
    ;
    ReportsService.prototype.getMayor = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'X-Requested-With': 'XMLHttpRequest',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                'content-Type': 'application/json',
            })
        };
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-Type': 'application/json',
        });
        return this.http.get(this.urlMayor, { headers: header });
    };
    ReportsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ReportsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ReportsService);
    return ReportsService;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map