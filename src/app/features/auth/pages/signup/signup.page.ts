import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthShellComponent } from '../../components/auth-shell/auth-shell.component';

@Component({
  selector: 'app-signup-page',
  imports: [AuthShellComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './signup.page.html',
  styleUrl: './signup.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupPage {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly router = inject(Router);

  readonly form = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
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
    const payload = this.form.getRawValue();
    void Promise.resolve().then(() => {
      this.submitting.set(false);
      console.info('[auth] signup', { ...payload, password: '***' });
      void this.router.navigate(['/login']);
    });
  }
}
