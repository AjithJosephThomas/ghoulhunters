import type { UserProfile } from '../types';

export type RootStackParamList = {
  Register: { existingUser?: UserProfile } | undefined;
  Report: undefined;
  ThankYou: { reportId: string };
};
