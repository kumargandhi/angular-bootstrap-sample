import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
    selector: 'app-simple-form',
    templateUrl: './simple-form.component.html',
    styleUrls: ['./simple-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleFormComponent {
    form: FormGroup;

    isFormSubmitted = false;

    formDesc: string;

    constructor(private _fb: FormBuilder, private _cd: ChangeDetectorRef) {
        this.form = this._fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
            loggedIn: [false],
        });
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
