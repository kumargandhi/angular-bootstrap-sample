import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { validateName } from '../../../commom/components/validators/name.validator';
import { validateEmail } from '../../../commom/components/validators/email.validator';

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
            firstName: ['', validateName('firstName', 'First name')],
            lastName: ['', validateName('lastName', 'First name')],
            username: ['', validateEmail('username', 'Username')],
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
