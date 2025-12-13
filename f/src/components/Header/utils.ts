import { Language, UserType, AuthMode } from './types';

export const scrollToSection = (sectionId: string, pathname: string, navigate: any) => {
  if (pathname !== '/') {
    navigate(`/${sectionId}`);
  } else {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

export const validateLogin = (userType: UserType, credentials: any): boolean => {
  switch (userType) {
    case 'patient':
      return Boolean(credentials.patientPhone && credentials.patientPhone.length === 11 && credentials.patientPassword);
    case 'nurse':
      return Boolean(credentials.nurseId && credentials.nurseId.startsWith('HWC-') && credentials.nursePassword);
    case 'doctor':
      return Boolean(credentials.doctorBmdc && credentials.doctorBmdc.startsWith('BMDC-') && credentials.doctorPassword);
    default:
      return false;
  }
};

export const validateRegister = (userType: UserType, credentials: any): boolean => {
  switch (userType) {
    case 'patient':
      return Boolean(
        credentials.fullName &&
        credentials.regPatientPhone &&
        credentials.regPatientPhone.length === 11 &&
        credentials.regPatientPassword &&
        credentials.confirmPassword &&
        credentials.regPatientPassword === credentials.confirmPassword &&
        credentials.pregnancyMonth &&
        parseInt(credentials.pregnancyMonth) >= 1 &&
        parseInt(credentials.pregnancyMonth) <= 9
      );
    case 'nurse':
      return Boolean(
        credentials.fullName &&
        credentials.nurseId &&
        credentials.nurseId.startsWith('HWC-') &&
        credentials.nursePassword &&
        credentials.confirmPassword &&
        credentials.nursePassword === credentials.confirmPassword &&
        credentials.facilityName
      );
    case 'doctor':
      return Boolean(
        credentials.fullName &&
        credentials.doctorBmdc &&
        credentials.doctorBmdc.startsWith('BMDC-') &&
        credentials.doctorPassword &&
        credentials.confirmPassword &&
        credentials.doctorPassword === credentials.confirmPassword &&
        credentials.hospitalName
      );
    default:
      return false;
  }
};

export const getLoginButtonColor = (userType: UserType): string => {
  switch (userType) {
    case 'patient': return 'bg-purple-600 hover:bg-purple-700';
    case 'nurse': return 'bg-blue-600 hover:bg-blue-700';
    case 'doctor': return 'bg-green-600 hover:bg-green-700';
    default: return 'bg-purple-600 hover:bg-purple-700';
  }
};

export const getUserData = (
  userType: UserType,
  credentials: any,
  authMode: AuthMode
): any => {
  const baseData = {
    patient: {
      name: authMode === 'login' ? 'ফাতিমা বেগম' : credentials.fullName,
      phone: authMode === 'login' ? credentials.patientPhone : credentials.regPatientPhone,
      pregnancyMonth: authMode === 'login' ? 6 : parseInt(credentials.pregnancyMonth),
      location: 'সিলেট'
    },
    nurse: {
      name: credentials.fullName,
      id: credentials.nurseId,
      facility: credentials.facilityName || 'সিলেট কমিউনিটি ক্লিনিক'
    },
    doctor: {
      name: credentials.fullName,
      bmdc: credentials.doctorBmdc,
      hospital: credentials.hospitalName || 'সিলেট মেডিকেল কলেজ হাসপাতাল'
    }
  };

  return baseData[userType];
};

export const resetFormFields = (): any => ({
  patientPhone: '',
  patientPassword: '',
  nurseId: '',
  nursePassword: '',
  doctorBmdc: '',
  doctorPassword: '',
  fullName: '',
  regPatientPhone: '',
  regPatientPassword: '',
  confirmPassword: '',
  pregnancyMonth: '',
  facilityName: '',
  hospitalName: ''
});