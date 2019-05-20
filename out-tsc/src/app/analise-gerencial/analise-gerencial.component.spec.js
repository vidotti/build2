import { async, TestBed } from '@angular/core/testing';
import { AnaliseGerencialComponent } from './analise-gerencial.component';
describe('AnaliseGerencialComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AnaliseGerencialComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AnaliseGerencialComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=analise-gerencial.component.spec.js.map