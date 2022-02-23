import { AbstractControl } from '@angular/forms';

export function validateName(fieldName = 'name', displayName = 'Name') {
    return (control: AbstractControl) => {
        const value = control.value;
        if (value == null) {
            return null;
        }
        if (value.length < 1) {
            return { [fieldName]: `${displayName} is required` };
        }
        if (!isValidName(value)) {
            return { [fieldName]: `You must enter a valid ${displayName}` };
        }
        return null;
    };
}

export function isValidName(value: string) {
    const pattern = /^[a-zA-Z\d_.]*$/;
    return pattern.exec(value) !== null;
}
