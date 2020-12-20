import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ConfirmPasswordValidator, PasswordCharacterValidator } from './password-validator';

interface SignUpForm {
  signUpEmail: string;
  signUpFirstName: string;
  signUpLastName: string;
  signUpNewPassword: string;
  signUpConfirmNewPassword: string;
  signUpGender: "male" | "female";
  signUpBirthDay: string;
  signUpPhoneNumber: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  forms: FormGroup;
  signUpPhoneNumberValue = '';
  isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private changeDetection: ChangeDetectorRef
  ) {
    this.forms = this.formBuilder.group({
      signUpEmail: '',
      signUpFirstName: '',
      signUpLastName: '',
      signUpNewPassword: '',
      signUpConfirmNewPassword: '',
      signUpGender: '',
      signUpBirthDay: '',
      signUpPhoneNumber: ''
    },
      {
        validators: [
          ConfirmPasswordValidator('signUpNewPassword', 'signUpConfirmNewPassword'),
          PasswordCharacterValidator('signUpNewPassword')
        ]
      }
    );
  }


  isShowPassword = false;
  visibilityActive = 'show';
  isShowPasswordVerification = false;
  visibilityActiveVerification = 'show';

  ngOnInit(): void {
  }

  handleSubmit() {
    if (this.forms.valid && this.forms.dirty) {
      this.isSubmitted = true;
      this.setLocalStorage('formData', this.forms.value);
      console.log(this.forms.value)
    }
  }


  showPassword() {
    this.isShowPassword = !this.isShowPassword;
    if (this.isShowPassword) {
      this.visibilityActive = 'hidden';
    } else {
      this.visibilityActive = 'show';
    }
  }

  showPasswordVerification() {
    this.isShowPasswordVerification = !this.isShowPasswordVerification;
    if (this.isShowPasswordVerification) {
      this.visibilityActiveVerification = 'hidden';
    } else {
      this.visibilityActiveVerification = 'show';
    }
  }

  changeInput(event) {
    const val = event.target.value.replace(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.a-zA-Z\s+\/]/g, '');
    const control = this.forms.controls.signUpPhoneNumber;
    this.signUpPhoneNumberValue = val;

    const value = this.signUpPhoneNumberValue;
    if (value.length > 10) {
    }

    this.changeDetection.detectChanges();
  }

  setLocalStorage(key: string, value: any) {
    try {
      const serializeState = JSON.stringify(value);
      return localStorage.setItem(key, serializeState);
    } catch (err) {
      throw new Error(err);
    }
  }
}
