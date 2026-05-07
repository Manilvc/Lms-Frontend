import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { LmsApiService } from '../../core/services/lms-api.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses.page.html',
  styleUrl: './courses.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesPage {
  private readonly api = inject(LmsApiService);

  readonly courses = toSignal(this.api.getCourses(), { initialValue: undefined });
}
