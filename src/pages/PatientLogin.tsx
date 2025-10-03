import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginForm {
  patientId: string;
  phoneNumber: string;
}

function PatientLogin() {
  const [formData, setFormData] = useState<LoginForm>({
    patientId: '',
    phoneNumber: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call - replace with actual authentication
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For demo purposes, accept any non-empty values
      if (formData.patientId.trim() && formData.phoneNumber.trim()) {
        // Store patient info in localStorage for demo
        localStorage.setItem('patientId', formData.patientId);
        localStorage.setItem('phoneNumber', formData.phoneNumber);
        navigate('/patient/dashboard');
      } else {
        setError('Vui lòng nhập đầy đủ thông tin');
      }
    } catch {
      setError('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="patient-login">
      <div className="login-container">
        <div className="login-header">
          <h1>Đăng nhập bệnh nhân</h1>
          <p>Nhập thông tin để xem kết quả xét nghiệm của bạn</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="patientId">Mã bệnh nhân *</label>
            <input
              type="text"
              id="patientId"
              name="patientId"
              value={formData.patientId}
              onChange={handleInputChange}
              placeholder="Nhập mã bệnh nhân"
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Số điện thoại *</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Nhập số điện thoại"
              required
              disabled={isLoading}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
          </button>
        </form>

        <div className="login-help">
          <p>
            <strong>Hướng dẫn:</strong>
            <br />
            • Mã bệnh nhân được cung cấp khi bạn đăng ký khám
            <br />
            • Số điện thoại phải trùng với thông tin đã đăng ký
            <br />• Nếu gặp khó khăn, vui lòng liên hệ: 1900-xxxx
          </p>
        </div>
      </div>
    </div>
  );
}

export default PatientLogin;
