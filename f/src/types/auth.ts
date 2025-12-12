export type UserType = 'patient' | 'nurse' | 'doctor';
export type Language = 'bn' | 'en' | 'syl';
export type RiskLevel = 'low' | 'medium' | 'high';

export interface User {
  id: number;
  name: string;
  type: UserType;
  phone?: string;
  idNumber?: string;
  bmdcNumber?: string;
  specialty?: string;
  hospital?: string;
  location?: string;
}

export interface LoginCredentials {
  phone?: string;
  idNumber?: string;
  bmdcNumber?: string;
  password: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface Patient {
  id: number;
  name: string;
  month: number;
  risk: RiskLevel;
  lastCheckup: string;
}

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  hospital: string;
}

export interface Message {
  sender: 'patient' | 'doctor' | 'nurse' | 'system';
  text: string;
}

export interface Appointment {
  time: string;
  patient: string;
  type: string;
  status: string;
}