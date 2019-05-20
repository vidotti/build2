(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/analise-gerencial/analise-gerencial.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/analise-gerencial/analise-gerencial.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYWxpc2UtZ2VyZW5jaWFsL2FuYWxpc2UtZ2VyZW5jaWFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/analise-gerencial/analise-gerencial.component.html":
/*!********************************************************************!*\
  !*** ./src/app/analise-gerencial/analise-gerencial.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid main-content\">\n  <div class=\"col-md-12\">\n    <div class=\"row\">\n      <h1> Análise Gerencial </h1>\n    </div>\n  </div>\n\n<!--botoes iniciais-->\n<div class=\"row botoes-iniciais\">\n    <div class=\"col-md-8\">\n      <a class=\"btn btn-default btn-inicio btn-pause\" href=\"#\" role=\"button\"><span class=\"glyphicon glyphicon-pause\"></span> Pausar</a>\n      <a class=\"btn btn-default btn-inicio btn-pause\" href=\"#\" role=\"button\"><span class=\"glyphicon glyphicon-plus\"></span> Mais opções</a>\n    </div>\n    <div class=\"col-md-4 ajuste-mobile-esquerda ajuste-text-align-right\">\n        <a class=\"btn btn-default btn-inicio btn-topo-direita\" href=\"#\" role=\"button\"><span class=\"glyphicon glyphicon-chevron-left\"></span> Anterior</a>\n        <a class=\"btn btn-default btn-inicio btn-proximo\" href=\"#\" role=\"button\"><span class=\"glyphicon glyphicon-chevron-right\"></span> Próximo</a>\n    </div>        \n  </div>\n\n\n  <!--cliente e tipo de pedido-->    \n  <div class=\"row block-branco block-branco-ajuste-altura1\">\n    <div class=\"col-sm-12\">\n\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <h2>Cliente e Tipo de Pedido</h2>\n          </div>\n        </div>\n\n        <div class=\"row\">\n\n          <div class=\"col-sm-6\">\n              <form>\n                  <div class=\"form-group\">\n                    <label class=\"label-itens-tela\" for=\"exampleInputEmail1\">Cliente</label>\n                    <div class=\"cliente-tipo btn-group btn-group-xs\" role=\"group\" aria-label=\"...\">\n                        <button type=\"button\" class=\"btn btn-default btn-cliente-ativo btn-cliente\">novo</button>\n                        <button type=\"button\" class=\"btn btn-default btn-cliente\">editar</button>\n                      </div>\n                    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Busque por Códigos, CPF, RG ou Nome do cliente\">\n                  </div>\n              </form>\n            </div>\n          \n          \n          <div class=\"col-sm-3\">\n              <form>\n                  <div class=\"form-group\">\n                      <div class=\"exemplo1\">\n                          <label class=\"label-itens-tela\" for=\"\">Tipo</label>\n                          <div>\n                            <input type=\"radio\" value=\"0\" checked=\"checked\" name=\"campo-radio\" id=\"campo-radio1\" />\n                            <label for=\"campo-radio1\">Pedido</label>\n                            <input type=\"radio\" value=\"0\" name=\"campo-radio\" id=\"campo-radio2\" />\n                            <label for=\"campo-radio2\">Orçamento</label>\n                        </div>  \n                        </div>\n                  </div>\n              </form>\n            </div>  \n            \n            <div class=\"col-sm-3\">\n                <form>\n                    <div class=\"form-group\">\n                      <label class=\"label-itens-tela\" for=\"exampleInputEmail1\">Nº do Pedido</label>\n                      <input class=\"form-control\" id=\"disabledInput\" type=\"text\" placeholder=\"0\" disabled readonly>\n                    </div>\n                </form>\n            </div>\n\n        </div>\n\n  </div>\n</div>\n\n\n<!--etapas sistema-->\n <!--cesta de produtos--> \n<div class=\"row\">\n  <div class=\"col-sm-12\">\n     \n      \n<div class=\"row etapas-sistema bloco-normal\">\n    <div class=\"col-md-4 ajuste-barra-itens padding-zero\">\n      <span class=\"ajuste-barra-etapa-span ajuste-barra-etapa-span-selected padding-right\"><span class=\"etapas-numeros etapas-numeros-selected\">1</span>  Adicionar Produtos</span>\n    </div>\n    <div class=\"col-md-4 ajuste-text-align-center ajuste-barra-itens padding-zero\">\n        <span class=\"ajuste-barra-etapa-span padding-left-right\"><span class=\"etapas-numeros\">2</span>  Entrega e Estoque</span>\n    </div>\n    <div class=\"col-md-4 ajuste-text-align-right ajuste-barra-itens padding-zero\">\n        <span class=\"ajuste-barra-etapa-span padding-left\"><span class=\"etapas-numeros\">3</span>  Negociação e Pagamento</span> \n    </div>\n    <div class=\"col-md-12 ajuste-barra-etapas\"></div>\n            \n  \n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/analise-gerencial/analise-gerencial.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/analise-gerencial/analise-gerencial.component.ts ***!
  \******************************************************************/
/*! exports provided: AnaliseGerencialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnaliseGerencialComponent", function() { return AnaliseGerencialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnaliseGerencialComponent = /** @class */ (function () {
    function AnaliseGerencialComponent() {
    }
    AnaliseGerencialComponent.prototype.ngOnInit = function () {
        //concertar menu na troca de página
        $(document).ready(function () {
            if ($(".navbar-primary").hasClass("collapsed")) {
                $(".main-content").addClass('main-content2');
            }
        });
    };
    AnaliseGerencialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-analise-gerencial',
            template: __webpack_require__(/*! ./analise-gerencial.component.html */ "./src/app/analise-gerencial/analise-gerencial.component.html"),
            styles: [__webpack_require__(/*! ./analise-gerencial.component.css */ "./src/app/analise-gerencial/analise-gerencial.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnaliseGerencialComponent);
    return AnaliseGerencialComponent;
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
/* harmony import */ var _pedido_venda_pedido_venda_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pedido-venda/pedido-venda.component */ "./src/app/pedido-venda/pedido-venda.component.ts");
/* harmony import */ var _analise_gerencial_analise_gerencial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./analise-gerencial/analise-gerencial.component */ "./src/app/analise-gerencial/analise-gerencial.component.ts");





var routes = [
    { path: '', component: _pedido_venda_pedido_venda_component__WEBPACK_IMPORTED_MODULE_3__["PedidoVendaComponent"] },
    { path: 'pedido-venda', component: _pedido_venda_pedido_venda_component__WEBPACK_IMPORTED_MODULE_3__["PedidoVendaComponent"] },
    { path: 'analise-gerencial', component: _analise_gerencial_analise_gerencial_component__WEBPACK_IMPORTED_MODULE_4__["AnaliseGerencialComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Nav Menu -->\n\n\n\n\n<!--\n    <nav class=\"navbar navbar-inverse navbar-global navbar-fixed-top\">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">Santhosh Vertical Nav Project</a>\n          </div>\n          <div id=\"navbar\" class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-user navbar-right\">\n              <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Santhosh Giridara</a></li>\n              <li><a href=\"#about\"><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a></li>\n            </ul>\n          </div> \n           \n        </div>\n      </nav>\n    -->\n\n\n\n      \n    <nav class=\"navbar-primary\">\n      <button href=\"#\" class=\"btn-expand-collapse\"><img class=\"logo\" src=\"/assets/images/logo.png\" /><span class=\"glyphicon glyphicon-chevron-left btn-seta-icon btn-seta-left\"></span></button>\n      <ul class=\"navbar-primary-menu\">\n        <li>\n          <a routerLink=\"/pedido-venda\"><span class=\"glyphicon glyphicon glyphicon-lock ajuste-navbar-primary-icons\"></span><span class=\"nav-label\">Pedido de Venda<br> e Orçamento</span></a>\n          <a href=\"#\" class=\"menu-pedido-de-venda\"><span class=\"\"></span><span class=\"nav-label\">Novo</span></a>\n          <a href=\"#\" class=\"menu-pedido-de-venda\"><span class=\"\"></span><span class=\"nav-label\">Consultar</span></a>\n          <a routerLink=\"/analise-gerencial\"><span class=\"glyphicon glyphicon-briefcase\"></span><span class=\"nav-label\">Análise Gerencial</span></a>\n          <a href=\"#\"><span class=\"glyphicon glyphicon-inbox\"></span><span class=\"nav-label\">Consulta Estoques</span></a>\n          <a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span><span class=\"nav-label\">Clientes</span></a>\n          <a href=\"#\"><span class=\"glyphicon glyphicon-gift\"></span><span class=\"nav-label\">Lista de Presente</span></a>\n          <a href=\"#\"><span class=\"glyphicon glyphicon-headphones\"></span><span class=\"nav-label\">SAC</span></a>\n          <a href=\"#\"><span class=\"glyphicon glyphicon-lock\"></span><span class=\"nav-label\">Administração</span></a>\n          <a href=\"#\"><span class=\"glyphicon glyphicon-usd\"></span><span class=\"nav-label\">Painel do Vendedor</span></a>\n          <a href=\"#\"><span class=\"glyphicon glyphicon-calendar\"></span><span class=\"nav-label\">Histórico Cliente</span></a>\n          <a href=\"#\"><span class=\"glyphicon glyphicon-search ajuste-navbar-primary-icons\"></span><span class=\"nav-label\">Consultar Reserva de Produtos</span></a>\n          <a href=\"#\"><span class=\"glyphicon glyphicon-filter ajuste-navbar-primary-icons\"></span><span class=\"nav-label\">Baixa do Sistema Tintométrico</span></a>\n          <a href=\"#\"><span class=\"glyphicon glyphicon-plus ajuste-navbar-primary-icons\"></span><span class=\"nav-label\">Emissão de Cartazete</span></a>\n          <a href=\"#\"><span class=\"glyphicon glyphicon-search\"></span><span class=\"nav-label\">Consulta</span></a>\n          <a href=\"#\"><span class=\"glyphicon glyphicon-log-out\"></span><span class=\"nav-label\">Sair</span></a>\n        </li>\n      </ul>\n    </nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'telha-projeto';
    }
    AppComponent.prototype.ngOnInit = function () {
        $('.btn-expand-collapse').click(function (e) {
            $('.navbar-primary').toggleClass('collapsed');
            $('.main-content').toggleClass('main-content2');
            $('.btn-seta-icon').toggleClass('glyphicon-chevron-right');
            $('.btn-seta-left').toggleClass('btn-seta-right');
            $('.menu-pedido-de-venda').toggleClass('menu-pedido-de-venda-display');
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pedido_venda_pedido_venda_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pedido-venda/pedido-venda.module */ "./src/app/pedido-venda/pedido-venda.module.ts");
/* harmony import */ var _analise_gerencial_analise_gerencial_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./analise-gerencial/analise-gerencial.component */ "./src/app/analise-gerencial/analise-gerencial.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _analise_gerencial_analise_gerencial_component__WEBPACK_IMPORTED_MODULE_6__["AnaliseGerencialComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _pedido_venda_pedido_venda_module__WEBPACK_IMPORTED_MODULE_5__["PedidoVendaModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pedido-venda/pedido-venda.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pedido-venda/pedido-venda.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlZGlkby12ZW5kYS9wZWRpZG8tdmVuZGEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pedido-venda/pedido-venda.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pedido-venda/pedido-venda.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid main-content\">\n  <div class=\"col-md-12\">\n    <div class=\"row\">\n      <h1> Novo Pedido de Venda e Orçamento </h1>\n    </div>\n  </div>\n\n<!--botoes iniciais-->\n<div class=\"row botoes-iniciais\">\n    <div class=\"col-md-8\">\n      <a class=\"btn btn-default btn-inicio btn-pause\" href=\"#\" role=\"button\"><span class=\"glyphicon glyphicon-pause\"></span> Pausar</a>\n      <a class=\"btn btn-default btn-inicio btn-pause\" href=\"#\" role=\"button\"><span class=\"glyphicon glyphicon-plus\"></span> Mais opções</a>\n    </div>\n    <div class=\"col-md-4 ajuste-mobile-esquerda ajuste-text-align-right\">\n        <a class=\"btn btn-default btn-inicio btn-topo-direita\" href=\"#\" role=\"button\"><span class=\"glyphicon glyphicon-chevron-left\"></span> Anterior</a>\n        <a class=\"btn btn-default btn-inicio btn-proximo\" href=\"#\" role=\"button\"><span class=\"glyphicon glyphicon-chevron-right\"></span> Próximo</a>\n    </div>        \n  </div>\n\n\n  <!--cliente e tipo de pedido-->    \n  <div class=\"row block-branco block-branco-ajuste-altura1\">\n    <div class=\"col-sm-12\">\n\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <h2>Cliente e Tipo de Pedido</h2>\n          </div>\n        </div>\n\n        <div class=\"row\">\n\n          <div class=\"col-sm-6\">\n              <form>\n                  <div class=\"form-group\">\n                    <label class=\"label-itens-tela\" for=\"exampleInputEmail1\">Cliente</label>\n                    <div class=\"cliente-tipo btn-group btn-group-xs\" role=\"group\" aria-label=\"...\">\n                        <button type=\"button\" class=\"btn btn-default btn-cliente-ativo btn-cliente\">novo</button>\n                        <button type=\"button\" class=\"btn btn-default btn-cliente\">editar</button>\n                      </div>\n                    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Busque por Códigos, CPF, RG ou Nome do cliente\">\n                  </div>\n              </form>\n            </div>\n          \n          \n          <div class=\"col-sm-3\">\n              <form>\n                  <div class=\"form-group\">\n                      <div class=\"exemplo1\">\n                          <label class=\"label-itens-tela\" for=\"\">Tipo</label>\n                          <div>\n                            <input type=\"radio\" value=\"0\" checked=\"checked\" name=\"campo-radio\" id=\"campo-radio1\" />\n                            <label for=\"campo-radio1\">Pedido</label>\n                            <input type=\"radio\" value=\"0\" name=\"campo-radio\" id=\"campo-radio2\" />\n                            <label for=\"campo-radio2\">Orçamento</label>\n                        </div>  \n                        </div>\n                  </div>\n              </form>\n            </div>  \n            \n            <div class=\"col-sm-3\">\n                <form>\n                    <div class=\"form-group\">\n                      <label class=\"label-itens-tela\" for=\"exampleInputEmail1\">Nº do Pedido</label>\n                      <input class=\"form-control\" id=\"disabledInput\" type=\"text\" placeholder=\"0\" disabled readonly>\n                    </div>\n                </form>\n            </div>\n\n        </div>\n\n  </div>\n</div>\n\n\n<!--etapas sistema-->\n <!--cesta de produtos--> \n<div class=\"row\">\n  <div class=\"col-sm-12\">\n     \n      \n<div class=\"row etapas-sistema bloco-normal\">\n    <div class=\"col-md-4 ajuste-barra-itens padding-zero\">\n      <span class=\"ajuste-barra-etapa-span ajuste-barra-etapa-span-selected padding-right\"><span class=\"etapas-numeros etapas-numeros-selected\">1</span>  Adicionar Produtos</span>\n    </div>\n    <div class=\"col-md-4 ajuste-text-align-center ajuste-barra-itens padding-zero\">\n        <span class=\"ajuste-barra-etapa-span padding-left-right\"><span class=\"etapas-numeros\">2</span>  Entrega e Estoque</span>\n    </div>\n    <div class=\"col-md-4 ajuste-text-align-right ajuste-barra-itens padding-zero\">\n        <span class=\"ajuste-barra-etapa-span padding-left\"><span class=\"etapas-numeros\">3</span>  Negociação e Pagamento</span> \n    </div>\n    <div class=\"col-md-12 ajuste-barra-etapas\"></div>\n            \n  \n</div>\n</div>\n</div>\n\n   <!--produtos-busca--> \n   <div class=\"row block-branco block-branco-ajuste-altura2\">\n    <div class=\"col-sm-12\">\n       \n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <h2>Produtos</h2>\n            </div>\n          </div>\n\n          <div class=\"row\">\n              <div class=\"col-sm-12\">\n\n                  <div class=\"row block-cinza\">\n                      <div class=\"col-sm-12\">\n\n                  <form class=\"\">\n                      <div class=\"form-group\">                    \n                        <input type=\"text\" class=\"form-control campo-busca\" id=\"produto-search\" placeholder=\"Busque pelo código, nome ou característica do produto\">\n                        <span class=\"icone-campo-busca\"></span>\n                        <!--produtos-busca--> \n                            \n                      </div> \n                      <!--<button type=\"submit\" class=\"btn btn-default\">Send invitation</button>-->\n                  </form>\n\n\n\n                  <!-- DRAGGABLE INICIO -->\n                  \n                      <!--Search Box Início-->\n                  <div id=\"draggable\" class=\"animated bounceInRight row block-branco-flymenu adicionar-junto\">\n                      <div class=\"col-sm-12 padding-zero\">\n\n                          <div class=\"row\">\n                              <div class=\"col-sm-12 adicionar-junto-title\">Adicionar junto:</div>\n                          </div>\n\n                        <!--produtos-->\n                          <div class=\"row\">\n\n                              <!--produto-adicionar-junto-->\n                              <div class=\"col-sm-12\">\n\n                                  <div class=\"row block-cinza-search\">\n                                      <div class=\"col-sm-3\">\n                                          <img src=\"images/image-search-thumbnail.jpg\" class=\"img-responsive search-image\" alt=\"Responsive image\">                                              \n                                      </div>\n                                      <div class=\"col-sm-6\">\n                                          <p class=\"search-produto-text\">\n                                            00817943-2<br>                                                \n                                            <span class=\"font-weight-bold\">LAMPA DICRO LED GU10 3W\n                                            BIV 6500K BRA OUROLUX</span><br>\n                                            19012 - TASCHIBRA SC\n                                            ENTREGA, RETIRA\n                                          </p>\n                                      </div>\n                                      <div class=\"col-sm-3\">\n                                          <p class=\"font-weight-bold\">R$ 8,90/unid</p>\n                                          <!--Qtde.-->\n                                              <a href=\"\" class=\"btn-menos\"></a>\n                                              <input type=\"text\" class=\"form-control table-form-quantidade\" id=\"quantidade1\">\n                                              <a href=\"\" class=\"btn-mais\"></a>\n                                          \n                                      </div>\n                                  </div>                                              \n                              </div>\n                              <!--produto1 fim-->\n                              \n                              <!--produto-adicionar-junto-->\n                              <div class=\"col-sm-12\">\n                                <p class=\"ajuste-text-align-right\">Item e quantidade recomendada para o produto já adicionado</p>\n                              </div>\n\n                              <div class=\"col-md-12 ajuste-text-align-right\">\n                                  <a class=\"btn btn-default btn-inicio btn-topo-direita campo-comprar2\" href=\"#\" role=\"button\">\n                                    Agora não\n                                  </a>\n                                  <a class=\"btn btn-default btn-inicio btn-proximo campo-comprar2\" href=\"#\" role=\"button\">\n                                    <span class=\"glyphicon glyphicon-shopping-cart\"></span>Adicionar\n                                  </a>\n                              </div> \n\n                            </div>\n                            </div>\n                          </div>\n                    \n                <!-- DRAGGABLE FIM -->\n\n\n                  <!--Search Box Início-->\n                  <div class=\"row block-branco-search search_box\">\n                      <div class=\"col-sm-12 padding-zero\">\n\n                        <!--produtos-->\n                          <div class=\"row\">\n\n                              <!--produto1-->\n                              <div class=\"col-sm-6\">\n\n                                  <div class=\"row block-cinza-search\">\n                                      <div class=\"col-sm-3\">\n                                          <img src=\"images/image-search-thumbnail.jpg\" class=\"img-responsive search-image\" alt=\"Responsive image\">                                              \n                                      </div>\n                                      <div class=\"col-sm-5\">\n                                          <p class=\"search-produto-text\">\n                                            00817943-2<br>\n                                            Lustre Cristal Cobre Louis\n                                            19012 - TASCHIBRA SC\n                                            ENTREGA, RETIRA\n                                          </p>\n                                      </div>\n                                      <div class=\"col-sm-4\">\n                                          <p class=\"font-weight-bold\">R$ 24.449,90</p>\n                                          <a class=\"btn btn-default btn-inicio btn-produto-adicionar campo-comprar\" href=\"#\" role=\"button\">\n                                              <span class=\"glyphicon glyphicon-shopping-cart\"></span> Adicionar\n                                          </a>\n                                      </div>\n                                  </div>                                              \n                              </div>\n\n                              <!--produto2-->\n                              <div class=\"col-sm-6\">\n\n                                <div class=\"row block-cinza-search\">\n                                    <div class=\"col-sm-3\">\n                                        <img src=\"images/image-search-thumbnail.jpg\" class=\"img-responsive search-image\" alt=\"Responsive image\">                                              \n                                    </div>\n                                    <div class=\"col-sm-5\">\n                                        <p class=\"search-produto-text\">\n                                          00817943-2<br>\n                                          Lustre Cristal Cobre Louis\n                                          19012 - TASCHIBRA SC\n                                          ENTREGA, RETIRA\n                                        </p>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <p class=\"font-weight-bold\">R$ 24.449,90</p>\n                                        <a class=\"btn btn-default btn-inicio btn-produto-adicionar campo-comprar\" href=\"#\" role=\"button\">\n                                            <span class=\"glyphicon glyphicon-shopping-cart\"></span> Adicionar\n                                         </a>\n                                    </div>\n                                </div>                                              \n                            </div>\n\n                            <!--produto3-->\n                            <div class=\"col-sm-6\">\n\n                              <div class=\"row block-cinza-search\">\n                                  <div class=\"col-sm-3\">\n                                      <img src=\"images/image-search-thumbnail.jpg\" class=\"img-responsive search-image\" alt=\"Responsive image\">                                              \n                                  </div>\n                                  <div class=\"col-sm-5\">\n                                      <p class=\"search-produto-text\">\n                                        00817943-2<br>\n                                        Lustre Cristal Cobre Louis\n                                        19012 - TASCHIBRA SC\n                                        ENTREGA, RETIRA\n                                      </p>\n                                  </div>\n                                  <div class=\"col-sm-4\">\n                                      <p class=\"font-weight-bold\">R$ 24.449,90</p>\n                                      <a class=\"btn btn-default btn-inicio btn-produto-adicionar campo-comprar\" href=\"#\" role=\"button\">\n                                        <span class=\"glyphicon glyphicon-shopping-cart\"></span> Adicionar\n                                      </a>\n                                  </div>\n                              </div>                                              \n                          </div>\n\n                           <!--produto4-->\n                           <div class=\"col-sm-6\">\n\n                              <div class=\"row block-cinza-search\">\n                                  <div class=\"col-sm-3\">\n                                      <img src=\"images/image-search-thumbnail.jpg\" class=\"img-responsive search-image\" alt=\"Responsive image\">                                              \n                                  </div>\n                                  <div class=\"col-sm-5\">\n                                      <p class=\"search-produto-text\">\n                                        00817943-2<br>\n                                        Lustre Cristal Cobre Louis\n                                        19012 - TASCHIBRA SC\n                                        ENTREGA, RETIRA\n                                      </p>\n                                  </div>\n                                  <div class=\"col-sm-4\">\n                                      <p class=\"font-weight-bold\">R$ 24.449,90</p>\n                                      <a class=\"btn btn-default btn-inicio btn-produto-adicionar campo-comprar\" href=\"#\" role=\"button\">\n                                        <span class=\"glyphicon glyphicon-shopping-cart\"></span> Adicionar\n                                      </a>\n                                  </div>\n                              </div>                                              \n                          </div>\n\n                          <!--btn ver mais-->\n                          <div class=\"col-sm-12 ajuste-text-align-center\">\n                              <a class=\"btn btn-default btn-inicio btn-pause btn-ver-tudo-search\" href=\"#\" role=\"button\">\n                                  <span class=\"\"></span> Ver todas as opções\n                                </a>\n                          </div>\n\n\n                            </div>\n                            <!--fim box de produtos-->\n\n                  \n                            \n                      </div>\n                  </div>\n                  <!--Search Box Fim-->\n\n\n\n\n\n\n                  \n\n                  </div>\n                </div>\n\n              </div>\n            </div>              \n\n  </div>\n</div>      \n\n\n\n\n  <!--cesta de produtos--> \n  <div class=\"row block-branco\">\n    <div class=\"col-sm-12\">\n\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <h2>Cesta de Produtos</h2>\n        </div>\n      </div>\n\n\n      <div class=\"row\">\n\n        <div class=\"col-sm-12\">\n          <form class=\"form-inline ajuste-cesta-de-produtos\">\n\n            <fieldset class=\"inline-block cesta-de-produtos-forms\">\n              <div class=\"form-group\">\n                <label class=\"label-itens-tela\" for=\"Select\">Canal de Distribuição</label>\n                <select id=\"Select\" class=\"form-control\">\n                  <option>1-Varejo</option>\n                </select>\n              </div> \n            </fieldset>\n\n            <!--2-->\n                        \n            <fieldset class=\"inline-block cesta-de-produtos-forms\">\n              <div class=\"form-group\">\n                <label class=\"label-itens-tela\" for=\"Select\">Modalidade de Entrega</label>\n                <select id=\"Select\" class=\"form-control\">\n                  <option>E-Entrega</option>\n                  <option>R-Retira</option>\n                  <option>P-Retira Posterior</option>\n                </select>\n              </div> \n            </fieldset>\n          \n             <!--3-->               \n                        \n             <fieldset class=\"inline-block cesta-de-produtos-forms2\">\n              <div class=\"form-group\">\n                <label class=\"label-itens-tela\" for=\"Select\">De qual filial deve sair a mercadoria</label>\n                <select id=\"Select\" class=\"form-control\">\n                  <option>001-Butanta</option>\n                </select>\n              </div> \n            </fieldset>\n\n            <!--4-->\n                       \n            <fieldset disabled class=\"inline-block cesta-de-produtos-forms\">\n              <div class=\"form-group\">\n                <label class=\"label-itens-tela\" for=\"disabledSelect\">Loja Estoque</label>\n                <select id=\"disabledSelect\" class=\"form-control\">\n                  <option>Loja</option>\n                </select>\n              </div> \n            </fieldset>\n\n            <!--4-->\n            <fieldset class=\"inline-block cesta-de-produtos-forms\">    \n              <div class=\"form-group\">\n                  <label></label>\n                    <button type=\"submit\" class=\"btn btn-default btn-inicio btn-pause btn-atualizar\">\n                      <span class=\"glyphicon glyphicon-refresh\"></span> Atualizar produtos selecionados\n                    </button>\n                  </div>\n            </fieldset>\n\n\n          </form>\n        </div>\n\n        <br>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n              <div class=\"table-responsive\"> \n                <table class=\"table table-striped border-tabela\">\n                <thead class=\"ajuste-thead\"> \n                  <tr> \n                    <th class=\"ajuste-row-checkbox\">\n                      <!--checkbox--> \n                      <div class=\"exemplo2\">\n                          <input type=\"checkbox\" value=\"0\" name=\"campo-checkbox\" id=\"campo-checkbox1\" />\n                          <label for=\"campo-checkbox1\"></label>\n                          \n                      </div>\n                        <!--<div class=\"btn-group\" data-toggle=\"buttons\">                                          \n                            <label class=\"btn btn-primary\">\n                              <input type=\"checkbox\">\n                            </label>                                          \n                          </div>-->\n                  </th>\n                      <th>Código</th>\n                      <th>Item</th>\n                      <th>Preço unit.</th>\n                      <th>Quantidade</th>\n                      <th>Modalidade de Entrega</th>\n                      <th>Total</th>\n                      <th>Ações</th>\n                 </tr> \n                </thead> \n                <tbody> \n                  <tr> \n                    <th scope=\"row ajuste-row-checkbox\">\n                      <!--checkbox--> \n                      <div class=\"exemplo1 ajuste-checkbox1\">\n                          <input type=\"checkbox\" value=\"0\" name=\"campo-checkbox\" id=\"campo-checkbox2\" />\n                          <label for=\"campo-checkbox2\"></label>\n                      </div>\n                    </th>\n                    <td>\n                      <a href=\"\" class=\"links-tabela\">00817943-2</a>\n                    </td>\n                    <td>\n                      <img alt=\"140x140\" data-src=\"\" class=\"img-rounded\" style=\"width: 140px; height: 140px;\" src=\"\" data-holder-rendered=\"true\">\n                      <a href=\"\" class=\"links-tabela\">LUSTRMANIN 3XE-27 PRE TACHIBRA (E)</a>\n                    </td>\n                    <td>R$879,90</td>\n                    <td>\n                        <a href=\"\" class=\"btn-menos\"></a>\n                        <input type=\"text\" class=\"form-control table-form-quantidade\" id=\"quantidade1\">\n                        <a href=\"\" class=\"btn-mais\"></a>\n                    </td>\n                    <td>Entrega ou Retirada</td>\n                    <td>R$ 879,90</td>\n                    <td>\n                        <div class=\"btn-group btn-group-xs\" role=\"group\" aria-label=\"...\">\n                            <button type=\"button\" class=\"btn btn-default\">excluir</button>\n                            <button type=\"button\" class=\"btn btn-default\">ver mais</button>\n                          </div>                                   \n                    </td>\n                  </tr> \n                  <tr> \n                    <th scope=\"row ajuste-row-checkbox\">\n                      <!--checkbox--> \n                      <div class=\"exemplo1 ajuste-checkbox1\">\n                          <input type=\"checkbox\" value=\"0\" name=\"campo-checkbox\" id=\"campo-checkbox3\" />\n                          <label for=\"campo-checkbox3\"></label>\n                      </div>\n                    </th>\n                    <td>\n                       <a href=\"\" class=\"links-tabela\">00817943-2</a>\n                      </td>\n                      <td>\n                        <img alt=\"140x140\" data-src=\"\" class=\"img-rounded\" style=\"width: 140px; height: 140px;\" src=\"\" data-holder-rendered=\"true\">\n                        <a href=\"\" class=\"links-tabela\">LUSTRMANIN 3XE-27 PRE TACHIBRA (E)</a>\n                      </td>\n                    <td>R$879,90</td>\n                    <td>\n                        <a href=\"\" class=\"btn-menos\"></a>\n                        <input type=\"text\" class=\"form-control table-form-quantidade\" id=\"quantidade1\">\n                        <a href=\"\" class=\"btn-mais\"></a>\n                    </td>\n                    <td>Entrega ou Retirada</td>\n                    <td>R$ 879,90</td>\n                    <td>\n                        <div class=\"btn-group btn-group-xs\" role=\"group\" aria-label=\"...\">\n                            <button type=\"button\" class=\"btn btn-default\">excluir</button>\n                            <button type=\"button\" class=\"btn btn-default\">ver mais</button>\n                          </div>\n                    </td>\n                  </tr> \n                   <tr>\n                     <!--checkbox--> \n                    <th scope=\"row ajuste-row-checkbox\">\n                        <div class=\"exemplo1 ajuste-checkbox1\">\n                            <input type=\"checkbox\" value=\"0\" name=\"campo-checkbox\" id=\"campo-checkbox4\" />\n                            <label for=\"campo-checkbox4\"></label>\n                        </div>\n                        <td>\n                            <a href=\"\" class=\"links-tabela\">00817943-2</a>\n                           </td>\n                           <td>\n                             <img alt=\"140x140\" data-src=\"\" class=\"img-rounded\" style=\"width: 140px; height: 140px;\" src=\"\" data-holder-rendered=\"true\">\n                             <a href=\"\" class=\"links-tabela\">LUSTRMANIN 3XE-27 PRE TACHIBRA (E)</a>\n                           </td>\n                   <td>R$879,90</td>\n                   <td>\n                    <a href=\"\" class=\"btn-menos\"></a>\n                      <input type=\"text\" class=\"form-control table-form-quantidade\" id=\"quantidade1\">\n                      <a href=\"\" class=\"btn-mais\"></a>\n                   </td>\n                   <td>Entrega ou Retirada</td>\n                   <td>R$ 879,90</td>\n                    <td>\n                      <div class=\"btn-group btn-group-xs\" role=\"group\" aria-label=\"...\">\n                        <button type=\"button\" class=\"btn btn-default\">excluir</button>\n                        <button type=\"button\" class=\"btn btn-default\">ver mais</button>\n                      </div>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n\n\n\n        \n\n      </div>\n\n\n\n\n\n\n    </div>\n    <!--rowfim-->\n  </div>  \n\n\n\n\n</div>\n\n<!-- // end .section -->\n<footer class=\"my-5 text-center\">\n  <!-- Copyright removal is not prohibited! -->\n  <!-- <p class=\"mb-2\"><small>COPYRIGHT © 2017. ALL RIGHTS RESERVED. MOBAPP TEMPLATE BY <a href=\"https://colorlib.com\">COLORLIB</a></small></p> -->\n<!-- <p class=\"mb-2\"><small>COPYRIGHT © 2017. ALL RIGHTS RESERVED. MOBAPP TEMPLATE BY COLORLIB</small></p> -->\n<!--\n  <small>\n      <a href=\"#\" class=\"m-2\">PRESS</a>\n      <a href=\"#\" class=\"m-2\">TERMS</a>\n      <a href=\"#\" class=\"m-2\">PRIVACY</a>\n  </small>\n-->\n</footer>\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/pedido-venda/pedido-venda.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pedido-venda/pedido-venda.component.ts ***!
  \********************************************************/
/*! exports provided: PedidoVendaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoVendaComponent", function() { return PedidoVendaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PedidoVendaComponent = /** @class */ (function () {
    function PedidoVendaComponent() {
    }
    PedidoVendaComponent.prototype.ngOnInit = function () {
        //concertar menu na troca de página
        $(document).ready(function () {
            if ($(".navbar-primary").hasClass("collapsed")) {
                $(".main-content").addClass('main-content2');
            }
        });
        //search box
        $(".campo-busca").focus(function (e) {
            e.preventDefault();
            $(".search_box").toggleClass('active-search');
        });
        $(".campo-comprar").click(function (e) {
            e.preventDefault();
            $(".search_box").toggleClass('active-search');
        });
        //adicionar junto
        $(".campo-comprar").click(function (e) {
            e.preventDefault();
            $(".adicionar-junto").toggleClass('active-adicionar-junto');
        });
        $(".campo-comprar2").click(function (e) {
            e.preventDefault();
            $(".adicionar-junto").toggleClass('active-adicionar-junto');
        });
        //DRAGGABLE
        $(function () {
            $("#draggable").draggable();
        });
    };
    PedidoVendaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pedido-venda',
            template: __webpack_require__(/*! ./pedido-venda.component.html */ "./src/app/pedido-venda/pedido-venda.component.html"),
            styles: [__webpack_require__(/*! ./pedido-venda.component.css */ "./src/app/pedido-venda/pedido-venda.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PedidoVendaComponent);
    return PedidoVendaComponent;
}());



/***/ }),

/***/ "./src/app/pedido-venda/pedido-venda.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pedido-venda/pedido-venda.module.ts ***!
  \*****************************************************/
/*! exports provided: PedidoVendaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoVendaModule", function() { return PedidoVendaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pedido_venda_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pedido-venda.component */ "./src/app/pedido-venda/pedido-venda.component.ts");




var PedidoVendaModule = /** @class */ (function () {
    function PedidoVendaModule() {
    }
    PedidoVendaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pedido_venda_component__WEBPACK_IMPORTED_MODULE_3__["PedidoVendaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _pedido_venda_component__WEBPACK_IMPORTED_MODULE_3__["PedidoVendaComponent"]
            ]
        })
    ], PedidoVendaModule);
    return PedidoVendaModule;
}());



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
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\Victor\Desktop\ANGULAR\Telha-Angular\telha-projeto\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map