(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-form-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/form/form.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/form/form.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar class=\"greenBD\">\n        <ion-title>Nombre del grupo</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item *ngFor=\"let i of pre\">\n            <ion-label position=\"floating\">{{i.descripcion}}</ion-label>\n            <ion-input [(ngModel)]=\"i.calf\"></ion-input>\n        </ion-item>\n\n\n    </ion-list>\n    <ion-fab vertical=\"bottom\" (click)=\"send()\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button class=\"orangeB\">\n            <ion-icon name=\"send\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/form/form.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/form/form.module.ts ***!
  \*******************************************/
/*! exports provided: FormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPageModule", function() { return FormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form.page */ "./src/app/pages/form/form.page.ts");







var routes = [
    {
        path: '',
        component: _form_page__WEBPACK_IMPORTED_MODULE_6__["FormPage"]
    }
];
var FormPageModule = /** @class */ (function () {
    function FormPageModule() {
    }
    FormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_form_page__WEBPACK_IMPORTED_MODULE_6__["FormPage"]]
        })
    ], FormPageModule);
    return FormPageModule;
}());



/***/ }),

/***/ "./src/app/pages/form/form.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/form/form.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zvcm0vZm9ybS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/form/form.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/form/form.page.ts ***!
  \*****************************************/
/*! exports provided: FormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPage", function() { return FormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/form.service */ "./src/app/services/form.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var FormPage = /** @class */ (function () {
    function FormPage(alertController, route, router, form) {
        // this.route.params.subscribe(parametros =>{
        //     // tslint:disable-next-line:no-string-literal
        //     this.id = parametros['id'];
        //     console.log(this.id);
        // });
        this.alertController = alertController;
        this.route = route;
        this.router = router;
        this.form = form;
        this.id = '';
        this.forma = {
            idForm: ''
        };
        this.res = {
            idForm: null,
            calf: null,
            numPregunta: null
        };
        // // this.forma.idForm = localStorage.getItem("form");
        // this.forma.idForm = this.id;
        // this.pre = [];
        // this.form.getForm(this.forma).subscribe(data => {
        //   this.pre = JSON.parse(JSON.stringify(data));
        //   console.log(this.pre);
        // });
    }
    FormPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (parametros) {
            // tslint:disable-next-line:no-string-literal
            _this.id = parametros['id'];
            console.log(_this.id);
        });
        // this.forma.idForm = localStorage.getItem("form");
        this.forma.idForm = this.id;
        this.pre = [];
        this.form.getForm(this.forma).subscribe(function (data) {
            _this.pre = JSON.parse(JSON.stringify(data));
            console.log(_this.pre);
        });
    };
    FormPage.prototype.send = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i, alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        for (i = 0; i < this.pre.length; i++) {
                            this.res.idForm = this.forma.idForm;
                            this.res.numPregunta = this.pre[i].ordenPregunta;
                            this.res.calf = this.pre[i].calf;
                            this.form.setForm(this.res).subscribe(function (data) {
                                console.log(data);
                            });
                        }
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Correcto',
                                message: 'Sus respuestas fueron enviadas ',
                                buttons: ['OK']
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        this.router.navigateByUrl('/tabs/tab1');
                        return [2 /*return*/];
                }
            });
        });
    };
    FormPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"] }
    ]; };
    FormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! raw-loader!./form.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/form/form.page.html"),
            styles: [__webpack_require__(/*! ./form.page.scss */ "./src/app/pages/form/form.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"]])
    ], FormPage);
    return FormPage;
}());



/***/ }),

/***/ "./src/app/services/form.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/form.service.ts ***!
  \******************************************/
/*! exports provided: FormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FormService = /** @class */ (function () {
    function FormService(http) {
        this.http = http;
        //urlForm = 'http://localhost:80/pruebas/formulario.php';
        this.urlForm = 'http://jenkins.b612.cloud/formulario.php';
        //urlRes = 'http://localhost:80/pruebas/calificar.php';
        this.urlRes = 'http://jenkins.b612.cloud/calificar.php';
    }
    FormService.prototype.setForm = function (form) {
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
        return this.http.post(this.urlRes, form, { headers: header });
    };
    FormService.prototype.getForm = function (id) {
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
        return this.http.post(this.urlForm, id, { headers: header });
    };
    FormService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    FormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FormService);
    return FormService;
}());



/***/ })

}]);
//# sourceMappingURL=form-form-module-es5.js.map