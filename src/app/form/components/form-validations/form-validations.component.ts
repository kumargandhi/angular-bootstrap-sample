import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
    selector: 'app-form-validations',
    templateUrl: './form-validations.component.html',
    styleUrls: ['./form-validations.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormValidationsComponent implements OnInit {
    form: FormGroup;

    isFormSubmitted = false;

    formDesc: string;

    constructor(private _fb: FormBuilder, private _cd: ChangeDetectorRef) {
        this.form = this._fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            zip: ['', Validators.required],
            toc: [false],
        });
    }

    ngOnInit(): void {
        // do nothing
    }

    onFormSubmit($event: any) {
        if (!$event) {
            return;
        }
        this.isFormSubmitted = true;
        this.formDesc = '';
        _.forIn(this.form.controls, (value, key) => {
            this.formDesc += `Control ${key} with value ${value.value}<br>`;
        });
    }
}
