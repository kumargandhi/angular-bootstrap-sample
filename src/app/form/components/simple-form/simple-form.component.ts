import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-simple-form',
    templateUrl: './simple-form.component.html',
    styleUrls: ['./simple-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleFormComponent implements OnInit {
    form: FormGroup;

    isFormSubmitted = false;

    constructor(private _fb: FormBuilder, private _cd: ChangeDetectorRef) {
        this.form = this._fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
            loggedIn: [false],
        });
    }

    ngOnInit(): void {}
}
