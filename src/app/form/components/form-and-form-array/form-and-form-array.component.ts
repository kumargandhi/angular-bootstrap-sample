import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
} from '@angular/core';
import {
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'app-form-and-form-array',
    templateUrl: './form-and-form-array.component.html',
    styleUrls: ['./form-and-form-array.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormAndFormArrayComponent implements OnInit {
    form: FormGroup;

    isFormSubmitted = false;

    selectedOption = 0;

    isOptionSelected = false;

    constructor(private _fb: FormBuilder, private _cd: ChangeDetectorRef) {
        this.form = this._fb.group({
            question: ['', Validators.required],
            options: this._fb.array([]),
        });
    }

    get optionsFormArray(): FormArray {
        return this.form.get('options') as FormArray;
    }

    ngOnInit(): void {}

    optionClicked(index: number) {
        this.selectedOption = index;
        this.isOptionSelected = true;
    }

    reset() {}

    addOption() {
        const options = this.form.get('options') as FormArray;
        const option = new FormGroup({
            selected: new FormControl(),
            answer: new FormControl('', [Validators.required]),
        });
        options.push(option);
    }

    submit() {
        this.isFormSubmitted = true;
    }

    setDefault() {
        const { question, options } = this.form.controls;
        question.setValue(
            'Which of the following numbers is farthest from the number 1 on the number line?'
        );
        const answers: string[] = ['0', '-5', '-10', '5', '10'];
        const selectedOption = (this.selectedOption = 2);
        this.isOptionSelected = true;
        (options as FormArray).clear();
        answers.forEach((item) => {
            const option = new FormGroup({
                selected: new FormControl(),
                answer: new FormControl(item, [Validators.required]),
            });
            (options as FormArray).push(option);
        });
        (options as FormArray).controls[selectedOption]
            .get('selected')
            ?.setValue('selected' + selectedOption);
    }

    getOptionsFormGroup(index: number): FormGroup {
        const options = this.form.get('options') as FormArray;
        return options.get('' + index) as FormGroup;
    }

    isAddAnswerBtnDisabled() {
        if (!this.isOptionSelected) {
            return true;
        }
        const options = this.form.get('answers') as FormArray;
        let isValid = true;
        for (let i = 0; i < options.controls.length; i++) {
            const fg = options.get('' + i) as FormGroup;
            if (fg.controls['answer'].touched && !fg.controls['answer'].valid) {
                isValid = !fg.controls['answer'].errors?.required;
            }
            if (!isValid) {
                break;
            }
        }
        return !isValid;
    }
}