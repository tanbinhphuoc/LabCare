import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const patientId = localStorage.getItem('patientId');
  const phoneNumber = localStorage.getItem('phoneNumber');

  if (!patientId || !phoneNumber) {
    return <Navigate to="/patient/login" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
