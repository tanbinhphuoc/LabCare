import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface TestResult {
  id: string;
  testName: string;
  testDate: string;
  status: 'completed' | 'pending' | 'processing';
  doctorName: string;
  department: string;
  hasReport: boolean;
}

function PatientDashboard() {
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [patientInfo, setPatientInfo] = useState<{
    id: string;
    phone: string;
  } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if patient is logged in
    const patientId = localStorage.getItem('patientId');
    const phoneNumber = localStorage.getItem('phoneNumber');

    if (!patientId || !phoneNumber) {
      navigate('/patient/login');
      return;
    }

    setPatientInfo({ id: patientId, phone: phoneNumber });
    loadTestResults();
  }, [navigate]);

  const loadTestResults = async () => {
    setIsLoading(true);
    try {
      // Simulate API call - replace with actual data fetching
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock data for demonstration
      const mockResults: TestResult[] = [
        {
          id: '1',
          testName: 'Xét nghiệm máu tổng quát',
          testDate: '2024-01-15',
          status: 'completed',
          doctorName: 'BS. Nguyễn Văn A',
          department: 'Khoa Xét nghiệm',
          hasReport: true,
        },
        {
          id: '2',
          testName: 'Xét nghiệm nước tiểu',
          testDate: '2024-01-15',
          status: 'completed',
          doctorName: 'BS. Trần Thị B',
          department: 'Khoa Xét nghiệm',
          hasReport: true,
        },
        {
          id: '3',
          testName: 'Siêu âm tim',
          testDate: '2024-01-20',
          status: 'processing',
          doctorName: 'BS. Lê Văn C',
          department: 'Khoa Tim mạch',
          hasReport: false,
        },
        {
          id: '4',
          testName: 'Xét nghiệm COVID-19',
          testDate: '2024-01-22',
          status: 'pending',
          doctorName: 'BS. Phạm Thị D',
          department: 'Khoa Truyền nhiễm',
          hasReport: false,
        },
      ];

      setTestResults(mockResults);
    } catch (error) {
      console.error('Error loading test results:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('patientId');
    localStorage.removeItem('phoneNumber');
    navigate('/patient/login');
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Hoàn thành';
      case 'pending':
        return 'Chờ xử lý';
      case 'processing':
        return 'Đang xử lý';
      default:
        return status;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'completed':
        return 'status-completed';
      case 'pending':
        return 'status-pending';
      case 'processing':
        return 'status-processing';
      default:
        return '';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN');
  };

  if (isLoading) {
    return (
      <div className="patient-dashboard">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="patient-dashboard">
      <header className="dashboard-header">
        <div className="container">
          <div className="header-content">
            <div className="patient-info">
              <h1>Kết quả xét nghiệm</h1>
              <p>Mã bệnh nhân: {patientInfo?.id}</p>
            </div>
            <button onClick={handleLogout} className="logout-button">
              Đăng xuất
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="container">
          <div className="results-summary">
            <div className="summary-card">
              <h3>Tổng số xét nghiệm</h3>
              <span className="summary-number">{testResults.length}</span>
            </div>
            <div className="summary-card">
              <h3>Đã hoàn thành</h3>
              <span className="summary-number">
                {testResults.filter((r) => r.status === 'completed').length}
              </span>
            </div>
            <div className="summary-card">
              <h3>Đang xử lý</h3>
              <span className="summary-number">
                {testResults.filter((r) => r.status === 'processing').length}
              </span>
            </div>
          </div>

          <div className="results-list">
            <h2>Danh sách kết quả xét nghiệm</h2>

            {testResults.length === 0 ? (
              <div className="no-results">
                <p>Bạn chưa có kết quả xét nghiệm nào.</p>
              </div>
            ) : (
              <div className="results-grid">
                {testResults.map((result) => (
                  <div key={result.id} className="result-card">
                    <div className="result-header">
                      <h3>{result.testName}</h3>
                      <span
                        className={`status-badge ${getStatusClass(result.status)}`}
                      >
                        {getStatusText(result.status)}
                      </span>
                    </div>

                    <div className="result-details">
                      <div className="detail-item">
                        <strong>Ngày xét nghiệm:</strong>
                        <span>{formatDate(result.testDate)}</span>
                      </div>
                      <div className="detail-item">
                        <strong>Bác sĩ:</strong>
                        <span>{result.doctorName}</span>
                      </div>
                      <div className="detail-item">
                        <strong>Khoa:</strong>
                        <span>{result.department}</span>
                      </div>
                    </div>

                    <div className="result-actions">
                      {result.status === 'completed' && result.hasReport ? (
                        <button
                          onClick={() =>
                            navigate(`/patient/result/${result.id}`)
                          }
                          className="view-result-button"
                        >
                          Xem kết quả
                        </button>
                      ) : (
                        <button
                          disabled
                          className="view-result-button disabled"
                        >
                          {result.status === 'completed'
                            ? 'Chưa có báo cáo'
                            : 'Chưa hoàn thành'}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default PatientDashboard;
