import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
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
        //concertar menu na troca de página
        $(window).load(function () {
            if ($(".navbar-primary").hasClass("collapsed")) {
                alert('fsfldj');
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
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map