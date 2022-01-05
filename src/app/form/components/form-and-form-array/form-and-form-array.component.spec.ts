import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAndFormArrayComponent } from './form-and-form-array.component';

describe('FormAndFormArrayComponent', () => {
    let component: FormAndFormArrayComponent;
    let fixture: ComponentFixture<FormAndFormArrayComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FormAndFormArrayComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FormAndFormArrayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
