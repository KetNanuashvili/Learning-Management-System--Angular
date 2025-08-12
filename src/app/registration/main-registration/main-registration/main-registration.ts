import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../../shared/header/header';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-registration',
  standalone: true,
  imports: [Header, CommonModule, ReactiveFormsModule],
  templateUrl: './main-registration.html',
  styleUrls: ['./main-registration.css']
})
export class MainRegistration {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email:    ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      roleId:   [2] // Student fix-ად
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload = {
      fullName: this.form.get('fullName')!.value as string,
      email:    this.form.get('email')!.value as string,
      password: this.form.get('password')!.value as string,
      roleId:   2 as const
    };

    console.log('REGISTER PAYLOAD →', payload);
    // TODO: შენი სერვისი:
    // this.authService.register(payload).subscribe(...)
  }

  hasError(path: string, error: string) {
    const c = this.form.get(path);
    return !!c && c.touched && c.hasError(error);
  }
}
