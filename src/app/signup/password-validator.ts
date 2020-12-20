//tslint:disable
import { FormGroup } from "@angular/forms";

export function ConfirmPasswordValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    let control = formGroup.controls[controlName];
    let matchingControl = formGroup.controls[matchingControlName]
    if (matchingControl.errors && !matchingControl.errors.confirmPasswordValidator) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({
        confirmPasswordValidator: true
      });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

export function PasswordCharacterValidator(controlName: string) {
  return (formGroup: FormGroup) => {
    let control = formGroup.controls[controlName]
    let check = /^(?=\D*\d)(?=.*[!.@#\$%\^&\*])(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{6,30}$/.test(control.value);

    if (!check) {
      control.setErrors({
        strong: true
      })
    } else {
      control.setErrors(null);
    }
  }
}
