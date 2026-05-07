import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthShellComponent } from '../../components/auth-shell/auth-shell.component';

@Component({
  selector: 'app-login-page',
  imports: [AuthShellComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly router = inject(Router);

  readonly form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  readonly submitting = signal(false);

  submit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid || this.submitting()) {
      return;
    }
    this.submitting.set(true);
    const { email, password } = this.form.getRawValue();
    // Replace with HttpClient call to your LMS API.
    void Promise.resolve().then(() => {
      this.submitting.set(false);
      console.info('[auth] login', { email, password: '***' });
      void this.router.navigate(['/dashboard']);
    });
  }
}
