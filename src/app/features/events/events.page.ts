import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { LmsApiService } from '../../core/services/lms-api.service';

@Component({
  selector: 'app-events-page',
  imports: [DatePipe],
  templateUrl: './events.page.html',
  styleUrl: './events.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsPage {
  private readonly api = inject(LmsApiService);

  readonly events = toSignal(this.api.getEvents(), { initialValue: undefined });

  readonly statusLabel: Record<string, string> = {
    scheduled: 'scheduled',
    completed: 'completed',
    cancelled: 'cancelled',
  };
}
