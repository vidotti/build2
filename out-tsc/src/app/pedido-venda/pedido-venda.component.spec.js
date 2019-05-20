import { async, TestBed } from '@angular/core/testing';
import { PedidoVendaComponent } from './pedido-venda.component';
describe('PedidoVendaComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PedidoVendaComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PedidoVendaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pedido-venda.component.spec.js.map