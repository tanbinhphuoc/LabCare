import { useState } from 'react';
import { supabase } from '../lib/supabase';

interface Patient {
  id: string;
  patient_code: string;
  full_name: string;
  date_of_birth: string;
  phone: string;
  email: string;
}

interface TestResult {
  id: string;
  test_date: string;
  result_value: string;
  status: string;
  notes: string;
  reviewed_by: string;
  lab_tests: {
    test_name: string;
    category: string;
    description: string;
  };
}

interface MedicalExam {
  id: string;
  exam_date: string;
  diagnosis: string;
  symptoms: string;
  prescription: string;
  doctor_name: string;
  notes: string;
}

function ResultsLookup() {
  const [patientCode, setPatientCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [patient, setPatient] = useState<Patient | null>(null);
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [medicalExams, setMedicalExams] = useState<MedicalExam[]>([]);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setPatient(null);
    setTestResults([]);
    setMedicalExams([]);

    try {
      const { data: patientData, error: patientError } = await supabase
        .from('patients')
        .select('*')
        .eq('patient_code', patientCode)
        .maybeSingle();

      if (patientError) throw patientError;

      if (!patientData) {
        setError('Không tìm thấy mã bệnh nhân. Vui lòng kiểm tra lại.');
        return;
      }

      setPatient(patientData);

      const { data: resultsData, error: resultsError } = await supabase
        .from('test_results')
        .select(
          `
          *,
          lab_tests (
            test_name,
            category,
            description
          )
        `,
        )
        .eq('patient_id', patientData.id)
        .order('test_date', { ascending: false });

      if (resultsError) throw resultsError;
      setTestResults(resultsData || []);

      const { data: examsData, error: examsError } = await supabase
        .from('medical_exams')
        .select('*')
        .eq('patient_id', patientData.id)
        .order('exam_date', { ascending: false });

      if (examsError) throw examsError;
      setMedicalExams(examsData || []);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Đã xảy ra lỗi khi tra cứu thông tin. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section className="results-lookup">
      <div className="container">
        <div className="results-header">
          <h2 className="results-title">Tra cứu kết quả xét nghiệm</h2>
          <p className="results-subtitle">
            Nhập mã bệnh nhân của bạn để xem kết quả xét nghiệm và khám bệnh
          </p>
        </div>

        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            className="search-input"
            placeholder="Nhập mã bệnh nhân (vd: PT001)"
            value={patientCode}
            onChange={(e) => setPatientCode(e.target.value)}
            required
          />
          <button type="submit" className="btn btn--cyan" disabled={loading}>
            {loading ? 'Đang tra cứu...' : 'Tra cứu'}
          </button>
        </form>

        {error && <div className="alert alert--error">{error}</div>}

        {patient && (
          <div className="results-content">
            <div className="patient-info">
              <h3 className="section-title">Thông tin bệnh nhân</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Mã bệnh nhân:</span>
                  <span className="info-value">{patient.patient_code}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Họ tên:</span>
                  <span className="info-value">{patient.full_name}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Ngày sinh:</span>
                  <span className="info-value">
                    {formatDate(patient.date_of_birth)}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Điện thoại:</span>
                  <span className="info-value">{patient.phone}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email:</span>
                  <span className="info-value">{patient.email}</span>
                </div>
              </div>
            </div>

            <div className="test-results-section">
              <h3 className="section-title">Kết quả xét nghiệm</h3>
              {testResults.length > 0 ? (
                <div className="results-grid">
                  {testResults.map((result) => (
                    <div key={result.id} className="result-card">
                      <div className="result-header">
                        <h4 className="result-test-name">
                          {result.lab_tests.test_name}
                        </h4>
                        <span
                          className={`result-status status--${result.status}`}
                        >
                          {result.status === 'completed'
                            ? 'Hoàn thành'
                            : result.status === 'pending'
                              ? 'Đang xử lý'
                              : 'Đã xem xét'}
                        </span>
                      </div>
                      <p className="result-date">
                        Ngày xét nghiệm: {formatDate(result.test_date)}
                      </p>
                      <div className="result-value">
                        <strong>Kết quả:</strong>
                        <p>{result.result_value}</p>
                      </div>
                      {result.notes && (
                        <div className="result-notes">
                          <strong>Ghi chú:</strong>
                          <p>{result.notes}</p>
                        </div>
                      )}
                      {result.reviewed_by && (
                        <p className="result-reviewer">
                          Người xem xét: {result.reviewed_by}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="no-data">Chưa có kết quả xét nghiệm nào.</p>
              )}
            </div>

            <div className="medical-exams-section">
              <h3 className="section-title">Lịch sử khám bệnh</h3>
              {medicalExams.length > 0 ? (
                <div className="exams-list">
                  {medicalExams.map((exam) => (
                    <div key={exam.id} className="exam-card">
                      <div className="exam-header">
                        <h4 className="exam-date">
                          Khám ngày: {formatDate(exam.exam_date)}
                        </h4>
                        <span className="exam-doctor">
                          BS: {exam.doctor_name}
                        </span>
                      </div>
                      <div className="exam-content">
                        <div className="exam-row">
                          <strong>Triệu chứng:</strong>
                          <p>{exam.symptoms}</p>
                        </div>
                        <div className="exam-row">
                          <strong>Chẩn đoán:</strong>
                          <p>{exam.diagnosis}</p>
                        </div>
                        <div className="exam-row">
                          <strong>Đơn thuốc:</strong>
                          <p>{exam.prescription}</p>
                        </div>
                        {exam.notes && (
                          <div className="exam-row">
                            <strong>Ghi chú:</strong>
                            <p>{exam.notes}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="no-data">Chưa có lịch sử khám bệnh nào.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ResultsLookup;
