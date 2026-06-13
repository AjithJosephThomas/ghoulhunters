export type ReportTag = 'asian_gold_clam' | 'others';

export interface UserProfile {
  userId: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  email: string;
  registeredAt: string;
}

export interface ReportPayload {
  userId: string;
  tag: ReportTag;
  remarks?: string;
  latitude?: number | null;
  longitude?: number | null;
  locationSource: 'gps' | 'manual';
  timestamp: string;
  imageBase64: string;
}

export interface SubmitReportResponse {
  success: boolean;
  reportId: string;
}
