import React from 'react';
import { X, User, Users, Stethoscope } from 'lucide-react';
import { UserType, AuthMode } from './types';
import { AUTH_ERRORS } from './constants';
import { validateLogin, validateRegister, getLoginButtonColor, getUserData } from './utils';

interface AuthModalProps {
  showAuthModal: boolean;
  setShowAuthModal: (show: boolean) => void;
  authMode: AuthMode;
  setAuthMode: (mode: AuthMode) => void;
  userType: UserType;
  handleUserTypeChange: (type: UserType) => void;
  loginCredentials: any;
  setLoginCredentials: (credentials: any) => void;
  registerCredentials: any;
  setRegisterCredentials: (credentials: any) => void;
  handleAuth: (mode: AuthMode) => void;
  resetFormFields: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({
  showAuthModal,
  setShowAuthModal,
  authMode,
  setAuthMode,
  userType,
  handleUserTypeChange,
  loginCredentials,
  setLoginCredentials,
  registerCredentials,
  setRegisterCredentials,
  handleAuth,
  resetFormFields
}) => {
  if (!showAuthModal) return null;

  const isLoginDisabled = !validateLogin(userType, loginCredentials);
  const isRegisterDisabled = !validateRegister(userType, registerCredentials);

  const updateLoginField = (field: string, value: string) => {
    setLoginCredentials({ ...loginCredentials, [field]: value });
  };

  const updateRegisterField = (field: string, value: string) => {
    setRegisterCredentials({ ...registerCredentials, [field]: value });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            {authMode === 'login' ? 'Sign In' : 'Register'}
          </h2>
          <button
            onClick={() => setShowAuthModal(false)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Type Selection */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">I am a</h3>
          <div className="grid grid-cols-3 gap-3">
            {['patient', 'nurse', 'doctor'].map((type) => (
              <button
                key={type}
                onClick={() => {
                  handleUserTypeChange(type as UserType);
                  resetFormFields();
                }}
                className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                  userType === type
                    ? type === 'patient'
                      ? 'border-purple-600 bg-purple-50'
                      : type === 'nurse'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-green-600 bg-green-50'
                    : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                <div className={`p-3 rounded-full mb-2 ${
                  type === 'patient' ? 'bg-purple-100' :
                  type === 'nurse' ? 'bg-blue-100' : 'bg-green-100'
                }`}>
                  {type === 'patient' && <User className="w-5 h-5 text-purple-600" />}
                  {type === 'nurse' && <Users className="w-5 h-5 text-blue-600" />}
                  {type === 'doctor' && <Stethoscope className="w-5 h-5 text-green-600" />}
                </div>
                <span className="text-xs font-medium">
                  {type === 'patient' ? 'Pregnant Mother' :
                   type === 'nurse' ? 'Nurse/Health Worker' : 'Doctor'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Login Form */}
        {authMode === 'login' && (
          <LoginForm
            userType={userType}
            credentials={loginCredentials}
            updateField={updateLoginField}
            isDisabled={isLoginDisabled}
            handleLogin={() => handleAuth('login')}
            switchToRegister={() => setAuthMode('register')}
          />
        )}

        {/* Register Form */}
        {authMode === 'register' && (
          <RegisterForm
            userType={userType}
            credentials={registerCredentials}
            updateField={updateRegisterField}
            isDisabled={isRegisterDisabled}
            handleRegister={() => handleAuth('register')}
            switchToLogin={() => setAuthMode('login')}
          />
        )}
      </div>
    </div>
  );
};

// Sub-components for forms
interface LoginFormProps {
  userType: UserType;
  credentials: any;
  updateField: (field: string, value: string) => void;
  isDisabled: boolean;
  handleLogin: () => void;
  switchToRegister: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  userType,
  credentials,
  updateField,
  isDisabled,
  handleLogin,
  switchToRegister
}) => (
  <div className="space-y-4">
    {userType === 'patient' && (
      <>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mobile Number
          </label>
          <input
            type="tel"
            placeholder="01XXXXXXXXX"
            maxLength={11}
            value={credentials.patientPhone}
            onChange={(e) => updateField('patientPhone', e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={credentials.patientPassword}
            onChange={(e) => updateField('patientPassword', e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </>
    )}

    {userType === 'nurse' && (
      <>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Health Worker ID
          </label>
          <input
            type="text"
            placeholder="HWC-XXXXX"
            value={credentials.nurseId}
            onChange={(e) => updateField('nurseId', e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={credentials.nursePassword}
            onChange={(e) => updateField('nursePassword', e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </>
    )}

    {userType === 'doctor' && (
      <>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            BMDC Registration Number
          </label>
          <input
            type="text"
            placeholder="BMDC-XXXXX"
            value={credentials.doctorBmdc}
            onChange={(e) => updateField('doctorBmdc', e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={credentials.doctorPassword}
            onChange={(e) => updateField('doctorPassword', e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </>
    )}

    <button
      onClick={handleLogin}
      disabled={isDisabled}
      className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed ${getLoginButtonColor(userType)}`}
    >
      Sign In
    </button>

    <div className="text-center mt-4">
      <button
        onClick={switchToRegister}
        className="text-sm text-purple-600 hover:text-purple-800"
      >
        Don't have an account? Register now
      </button>
    </div>
  </div>
);

interface RegisterFormProps {
  userType: UserType;
  credentials: any;
  updateField: (field: string, value: string) => void;
  isDisabled: boolean;
  handleRegister: () => void;
  switchToLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  userType,
  credentials,
  updateField,
  isDisabled,
  handleRegister,
  switchToLogin
}) => (
  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Full Name
      </label>
      <input
        type="text"
        placeholder="Enter your full name"
        value={credentials.fullName}
        onChange={(e) => updateField('fullName', e.target.value)}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      />
    </div>

    {/* Render specific fields based on user type */}
    {userType === 'patient' && (
      <PatientRegisterFields credentials={credentials} updateField={updateField} />
    )}

    {userType === 'nurse' && (
      <NurseRegisterFields credentials={credentials} updateField={updateField} />
    )}

    {userType === 'doctor' && (
      <DoctorRegisterFields credentials={credentials} updateField={updateField} />
    )}

    <button
      onClick={handleRegister}
      disabled={isDisabled}
      className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed ${getLoginButtonColor(userType)}`}
    >
      Register
    </button>

    <div className="text-center mt-4">
      <button
        onClick={switchToLogin}
        className="text-sm text-purple-600 hover:text-purple-800"
      >
        Already have an account? Sign in
      </button>
    </div>
  </div>
);

// Form field components for each user type
const PatientRegisterFields: React.FC<any> = ({ credentials, updateField }) => (
  <>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Mobile Number
      </label>
      <input
        type="tel"
        placeholder="01XXXXXXXXX"
        maxLength={11}
        value={credentials.regPatientPhone}
        onChange={(e) => updateField('regPatientPhone', e.target.value)}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Password
      </label>
      <input
        type="password"
        placeholder="Create password"
        value={credentials.regPatientPassword}
        onChange={(e) => updateField('regPatientPassword', e.target.value)}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Confirm Password
      </label>
      <input
        type="password"
        placeholder="Confirm password"
        value={credentials.confirmPassword}
        onChange={(e) => updateField('confirmPassword', e.target.value)}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Pregnancy Month (1-9)
      </label>
      <input
        type="number"
        min="1"
        max="9"
        placeholder="Enter month"
        value={credentials.pregnancyMonth}
        onChange={(e) => updateField('pregnancyMonth', e.target.value)}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      />
    </div>
  </>
);

const NurseRegisterFields: React.FC<any> = ({ credentials, updateField }) => (
  <>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Health Worker ID
      </label>
      <input
        type="text"
        placeholder="HWC-XXXXX"
        value={credentials.nurseId}
        onChange={(e) => updateField('nurseId', e.target.value)}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Password
      </label>
      <input
        type="password"
        placeholder="Create password"
        value={credentials.nursePassword}
        onChange={(e) => updateField('nursePassword', e.target.value)}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Confirm Password
      </label>
      <input
        type="password"
        placeholder="Confirm password"
        value={credentials.confirmPassword}
        onChange={(e) => updateField('confirmPassword', e.target.value)}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Facility/Clinic Name
      </label>
      <input
        type="text"
        placeholder="Enter clinic name"
        value={credentials.facilityName}
        onChange={(e) => updateField('facilityName', e.target.value)}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  </>
);

const DoctorRegisterFields: React.FC<any> = ({ credentials, updateField }) => (
  <>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        BMDC Registration Number
      </label>
      <input
        type="text"
        placeholder="BMDC-XXXXX"
        value={credentials.doctorBmdc}
        onChange={(e) => updateField('doctorBmdc', e.target.value)}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Password
      </label>
      <input
        type="password"
        placeholder="Create password"
        value={credentials.doctorPassword}
        onChange={(e) => updateField('doctorPassword', e.target.value)}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Confirm Password
      </label>
      <input
        type="password"
        placeholder="Confirm password"
        value={credentials.confirmPassword}
        onChange={(e) => updateField('confirmPassword', e.target.value)}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Hospital/Clinic Name
      </label>
      <input
        type="text"
        placeholder="Enter hospital name"
        value={credentials.hospitalName}
        onChange={(e) => updateField('hospitalName', e.target.value)}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
      />
    </div>
  </>
);

export default AuthModal;