import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface TestResultDetail {
  id: string;
  testName: string;
  testDate: string;
  doctorName: string;
  department: string;
  patientName: string;
  patientId: string;
  results: {
    parameter: string;
    value: string;
    unit: string;
    referenceRange: string;
    status: 'normal' | 'high' | 'low' | 'critical';
  }[];
  conclusion: string;
  recommendations: string[];
  reportDate: string;
  hasPdf: boolean;
}

function TestResultDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [result, setResult] = useState<TestResultDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    // Check if patient is logged in
    const patientId = localStorage.getItem('patientId');
    if (!patientId) {
      navigate('/patient/login');
      return;
    }

    loadTestResult();
  }, [id, navigate, loadTestResult]);

  const loadTestResult = useCallback(async () => {
    setIsLoading(true);
    try {
      // Simulate API call - replace with actual data fetching
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock data for demonstration
      const mockResult: TestResultDetail = {
        id: id || '1',
        testName: 'Xét nghiệm máu tổng quát',
        testDate: '2024-01-15',
        doctorName: 'BS. Nguyễn Văn A',
        department: 'Khoa Xét nghiệm',
        patientName: 'Nguyễn Văn Bệnh nhân',
        patientId: localStorage.getItem('patientId') || '',
        results: [
          {
            parameter: 'Hemoglobin (Hb)',
            value: '14.2',
            unit: 'g/dL',
            referenceRange: '12.0 - 16.0',
            status: 'normal',
          },
          {
            parameter: 'Hematocrit (Hct)',
            value: '42.5',
            unit: '%',
            referenceRange: '36.0 - 46.0',
            status: 'normal',
          },
          {
            parameter: 'White Blood Cell (WBC)',
            value: '8.5',
            unit: '10³/μL',
            referenceRange: '4.0 - 10.0',
            status: 'normal',
          },
          {
            parameter: 'Platelet Count',
            value: '350',
            unit: '10³/μL',
            referenceRange: '150 - 450',
            status: 'normal',
          },
          {
            parameter: 'Glucose',
            value: '95',
            unit: 'mg/dL',
            referenceRange: '70 - 100',
            status: 'normal',
          },
          {
            parameter: 'Total Cholesterol',
            value: '220',
            unit: 'mg/dL',
            referenceRange: '< 200',
            status: 'high',
          },
        ],
        conclusion:
          'Kết quả xét nghiệm máu tổng quát cho thấy hầu hết các chỉ số trong giới hạn bình thường. Tuy nhiên, cholesterol toàn phần hơi cao, cần theo dõi và điều chỉnh chế độ ăn uống.',
        recommendations: [
          'Duy trì chế độ ăn uống lành mạnh, giảm chất béo',
          'Tăng cường vận động thể dục thể thao',
          'Tái khám sau 3 tháng để kiểm tra lại cholesterol',
          'Tham khảo ý kiến bác sĩ về chế độ ăn uống phù hợp',
        ],
        reportDate: '2024-01-16',
        hasPdf: true,
      };

      setResult(mockResult);
    } catch {
      console.error('Error loading test result');
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  const handleDownloadPdf = async () => {
    setIsDownloading(true);
    try {
      // Simulate PDF download
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // In a real application, this would download the actual PDF
      alert('Tệp PDF đã được tải xuống thành công!');
    } catch {
      alert('Có lỗi xảy ra khi tải xuống PDF. Vui lòng thử lại.');
    } finally {
      setIsDownloading(false);
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'normal':
        return 'status-normal';
      case 'high':
        return 'status-high';
      case 'low':
        return 'status-low';
      case 'critical':
        return 'status-critical';
      default:
        return '';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'normal':
        return 'Bình thường';
      case 'high':
        return 'Cao';
      case 'low':
        return 'Thấp';
      case 'critical':
        return 'Nguy hiểm';
      default:
        return status;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN');
  };

  if (isLoading) {
    return (
      <div className="test-result-detail">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Đang tải kết quả xét nghiệm...</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="test-result-detail">
        <div className="error-container">
          <h2>Không tìm thấy kết quả xét nghiệm</h2>
          <button
            onClick={() => navigate('/patient/dashboard')}
            className="back-button"
          >
            Quay lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="test-result-detail">
      <header className="result-header">
        <div className="container">
          <div className="header-content">
            <button
              onClick={() => navigate('/patient/dashboard')}
              className="back-button"
            >
              ← Quay lại
            </button>
            <div className="header-actions">
              {result.hasPdf && (
                <button
                  onClick={handleDownloadPdf}
                  disabled={isDownloading}
                  className="download-button"
                >
                  {isDownloading ? 'Đang tải...' : 'Tải PDF'}
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="result-main">
        <div className="container">
          <div className="result-report">
            <div className="report-header">
              <h1>{result.testName}</h1>
              <div className="report-meta">
                <div className="meta-item">
                  <strong>Bệnh nhân:</strong> {result.patientName}
                </div>
                <div className="meta-item">
                  <strong>Mã bệnh nhân:</strong> {result.patientId}
                </div>
                <div className="meta-item">
                  <strong>Ngày xét nghiệm:</strong>{' '}
                  {formatDate(result.testDate)}
                </div>
                <div className="meta-item">
                  <strong>Ngày báo cáo:</strong> {formatDate(result.reportDate)}
                </div>
                <div className="meta-item">
                  <strong>Bác sĩ:</strong> {result.doctorName}
                </div>
                <div className="meta-item">
                  <strong>Khoa:</strong> {result.department}
                </div>
              </div>
            </div>

            <div className="results-table">
              <h2>Kết quả xét nghiệm</h2>
              <table>
                <thead>
                  <tr>
                    <th>Chỉ số</th>
                    <th>Kết quả</th>
                    <th>Đơn vị</th>
                    <th>Giá trị bình thường</th>
                    <th>Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  {result.results.map((item, index) => (
                    <tr key={index}>
                      <td>{item.parameter}</td>
                      <td className="result-value">{item.value}</td>
                      <td>{item.unit}</td>
                      <td>{item.referenceRange}</td>
                      <td>
                        <span
                          className={`status-badge ${getStatusClass(item.status)}`}
                        >
                          {getStatusText(item.status)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="conclusion-section">
              <h2>Kết luận</h2>
              <p>{result.conclusion}</p>
            </div>

            <div className="recommendations-section">
              <h2>Khuyến nghị</h2>
              <ul>
                {result.recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>

            <div className="disclaimer">
              <p>
                <strong>Lưu ý:</strong> Kết quả xét nghiệm này chỉ mang tính
                chất tham khảo. Vui lòng tham khảo ý kiến bác sĩ để được tư vấn
                chính xác về tình trạng sức khỏe của bạn.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TestResultDetail;
