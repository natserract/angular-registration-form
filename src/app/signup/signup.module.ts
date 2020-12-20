import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SignUpRoutingModule } from './signup-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SignupComponent
  ],
  exports: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SignUpRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule.withConfig({
      warnOnNgModelWithFormControl: 'never'
  }),
  ]
})
export class SignupModule { }
