import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PedidoVendaComponent } from './pedido-venda/pedido-venda.component';
import { AnaliseGerencialComponent } from './analise-gerencial/analise-gerencial.component';
var routes = [
    { path: '', component: PedidoVendaComponent },
    { path: 'pedido-venda', component: PedidoVendaComponent },
    { path: 'analise-gerencial', component: AnaliseGerencialComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map