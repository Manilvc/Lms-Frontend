import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

import { LmsApiService } from '../../core/services/lms-api.service';

@Component({
  selector: 'app-dashboard-page',
  imports: [DatePipe, RouterLink],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage {
  private readonly api = inject(LmsApiService);

  readonly user = toSignal(this.api.getUserDetails(), { initialValue: undefined });
  readonly stats = toSignal(this.api.getDashboardStats(), { initialValue: undefined });
  readonly recentActivity = toSignal(this.api.getRecentActivity(), { initialValue: undefined });
  readonly upcomingEvents = toSignal(this.api.getUpcomingEventsPreview(), { initialValue: undefined });
}
