export type Language = 'bn' | 'en' | 'syl';
export type UserType = 'patient' | 'nurse' | 'doctor';
export type AuthMode = 'login' | 'register';

export interface NavItem {
  name: string;
  path: string;
}

export interface LoginCredentials {
  patientPhone: string;
  patientPassword: string;
  nurseId: string;
  nursePassword: string;
  doctorBmdc: string;
  doctorPassword: string;
}

export interface RegisterCredentials {
  fullName: string;
  regPatientPhone: string;
  regPatientPassword: string;
  confirmPassword: string;
  pregnancyMonth: string;
  facilityName: string;
  hospitalName: string;
  nurseId: string;
  nursePassword: string;
  doctorBmdc: string;
  doctorPassword: string;
}