export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  role: string;
  initials: string;
  email: string;
  avatarUrl?: string;
}

export interface DashboardStats {
  availableCourses: number;
  upcomingEvents: number;
  completions: number;
  registrations: number;
}

export interface ActivityItem {
  id: string;
  title: string;
  occurredAt: string;
  type: 'course' | 'event' | 'completion' | 'registration';
}

export interface TrainingEvent {
  id: string;
  title: string;
  courseName: string;
  startsAt: string;
  location: string;
  seatsAvailable: number;
  status: 'scheduled' | 'completed' | 'cancelled';
  isRegistered: boolean;
}

export interface CourseSummary {
  id: string;
  title: string;
  description: string;
  durationMinutes: number;
  deliveryMode: 'eLearning' | 'Instructor-Led' | 'Blended';
}

export interface MyTrainingItem {
  id: string;
  title: string;
  status: 'not_started' | 'in_progress' | 'completed';
  progressPercent: number;
  dueDate?: string;
}
