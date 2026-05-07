import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import type {
  ActivityItem,
  CourseSummary,
  DashboardStats,
  MyTrainingItem,
  TrainingEvent,
  UserProfile,
} from '../models/lms.models';

/** Simulated network latency (ms). Replace with HttpClient calls to your backend. */
const MOCK_LATENCY_MS = 350;

@Injectable({ providedIn: 'root' })
export class LmsApiService {
  /**
   * User profile endpoint. Replace this mock with `GET /users/me`.
   */
  getUserDetails(): Observable<UserProfile> {
    return of({
      id: 'u-1001',
      firstName: 'Manil',
      lastName: 'Jayswal',
      fullName: 'Manil Jayswal',
      role: 'Training Coordinator',
      initials: 'MJ',
      email: 'manil.jayswal@nddes.gov',
    }).pipe(delay(MOCK_LATENCY_MS));
  }

  getCurrentUser(): Observable<UserProfile> {
    return this.getUserDetails();
  }

  getDashboardStats(): Observable<DashboardStats> {
    return of({
      availableCourses: 4,
      upcomingEvents: 3,
      completions: 0,
      registrations: 0,
    }).pipe(delay(MOCK_LATENCY_MS));
  }

  /** Empty list matches dashboard placeholder; swap API URL when backend is ready. */
  getRecentActivity(): Observable<ActivityItem[]> {
    return of([]).pipe(delay(MOCK_LATENCY_MS));
  }

  getUpcomingEventsPreview(): Observable<TrainingEvent[]> {
    return of([]).pipe(delay(MOCK_LATENCY_MS));
  }

  getCourses(): Observable<CourseSummary[]> {
    const items: CourseSummary[] = [
      {
        id: 'c1',
        title: 'ICS-100: Introduction to Incident Command System',
        description:
          'Basic introduction to ICS, including the history, features and principles, and organizational structure.',
        durationMinutes: 180,
        deliveryMode: 'eLearning',
      },
      {
        id: 'c2',
        title: 'Hazardous Materials Awareness',
        description: 'First responder operations level training for hazmat incidents.',
        durationMinutes: 480,
        deliveryMode: 'Instructor-Led',
      },
      {
        id: 'c3',
        title: 'CPR/AED Recertification',
        description: 'Annual CPR and AED recertification course for all personnel.',
        durationMinutes: 240,
        deliveryMode: 'Blended',
      },
      {
        id: 'c4',
        title: 'Emergency Vehicle Operations',
        description: 'Safe driving techniques for emergency response vehicles.',
        durationMinutes: 360,
        deliveryMode: 'Instructor-Led',
      },
    ];
    return of(items).pipe(delay(MOCK_LATENCY_MS));
  }

  getEvents(): Observable<TrainingEvent[]> {
    const year = new Date().getFullYear();
    const items: TrainingEvent[] = [
      {
        id: 'e1',
        title: 'EVOC Spring Training',
        courseName: 'Emergency Vehicle Operations',
        startsAt: new Date(year, 4, 20, 12, 30).toISOString(),
        location: 'NDSU Parking Lot C, Fargo',
        seatsAvailable: 15,
        status: 'scheduled',
        isRegistered: true,
      },
      {
        id: 'e2',
        title: 'Hazmat Awareness - June Session',
        courseName: 'Hazardous Materials Awareness',
        startsAt: new Date(year, 5, 15, 13, 30).toISOString(),
        location: 'Cass County Fire Station #2, Fargo',
        seatsAvailable: 25,
        status: 'scheduled',
        isRegistered: false,
      },
      {
        id: 'e3',
        title: 'CPR/AED Recert - July',
        courseName: 'CPR/AED Recertification',
        startsAt: new Date(year, 6, 10, 14, 30).toISOString(),
        location: 'Cass County EMS Training Center',
        seatsAvailable: 20,
        status: 'scheduled',
        isRegistered: false,
      },
    ];
    return of(items).pipe(delay(MOCK_LATENCY_MS));
  }

  getMyTraining(): Observable<MyTrainingItem[]> {
    const items: MyTrainingItem[] = [];
    return of(items).pipe(delay(MOCK_LATENCY_MS));
  }
}
