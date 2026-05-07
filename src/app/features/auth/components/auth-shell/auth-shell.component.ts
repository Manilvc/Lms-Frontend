import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-auth-shell',
  templateUrl: './auth-shell.component.html',
  styleUrl: './auth-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthShellComponent {
  readonly title = input.required<string>();
  readonly subtitle = input.required<string>();
}
