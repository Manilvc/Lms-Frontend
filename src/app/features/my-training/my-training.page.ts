import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { LmsApiService } from '../../core/services/lms-api.service';

@Component({
  selector: 'app-my-training-page',
  templateUrl: './my-training.page.html',
  styleUrl: './my-training.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyTrainingPage {
  private readonly api = inject(LmsApiService);

  readonly items = toSignal(this.api.getMyTraining(), { initialValue: undefined });
  readonly activeTab = signal<'registrations' | 'completions' | 'certificates'>('registrations');

  readonly registrations = computed(() =>
    (this.items() ?? []).filter((item) => item.status !== 'completed'),
  );

  readonly completions = computed(() =>
    (this.items() ?? []).filter((item) => item.status === 'completed'),
  );

  readonly certificates = computed(() => [] as string[]);

  readonly activeCount = computed(() => {
    switch (this.activeTab()) {
      case 'completions':
        return this.completions().length;
      case 'certificates':
        return this.certificates().length;
      default:
        return this.registrations().length;
    }
  });

  readonly emptyMessage = computed(() => {
    switch (this.activeTab()) {
      case 'completions':
        return "You haven't completed any courses yet.";
      case 'certificates':
        return "You don't have any certificates yet.";
      default:
        return "You haven't registered for any events yet.";
    }
  });

  setTab(tab: 'registrations' | 'completions' | 'certificates'): void {
    this.activeTab.set(tab);
  }
}
