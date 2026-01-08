import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/afterLogin-bg.jpg';

// === CẤU HÌNH HỆ THỐNG ===
const USE_MOCK = true; // Chuyển thành false khi có API thật
const API_URL = 'https://your-backend-api.com/api/fees';

const UpdateFeePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    billId: '',
    paidAt: '',
    amount: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    // Validate form
    if (!formData.billId || !formData.paidAt || !formData.amount) {
      setMessage('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    if (USE_MOCK) {
      // Giả lập thời gian xử lý
      setTimeout(() => {
        console.log('Update data:', formData);
        setMessage('Đã cập nhật thông tin thành công!');
        setIsSubmitting(false);
        
        // Reset form sau 1.5s và quay về trang danh sách
        setTimeout(() => {
          navigate('/admin/fee');
        }, 1500);
      }, 800);
    } else {
      try {
        const response = await fetch(`${API_URL}/${formData.billId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            paid_at: formData.paidAt,
            amount: parseFloat(formData.amount)
          })
        });

        if (response.ok) {
          setMessage('Đã cập nhật thông tin thành công!');
          setTimeout(() => {
            navigate('/admin/fee');
          }, 1500);
        } else {
          setMessage('Có lỗi xảy ra. Vui lòng thử lại.');
        }
      } catch (error) {
        console.error('Error:', error);
        setMessage('Không thể kết nối với server. Vui lòng kiểm tra lại.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="update-fee-page">
      <style>{`
        .update-fee-page {
          min-height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          padding: 40px 20px;
          font-family: 'Inter', sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .form-container {
          width: 100%;
          max-width: 700px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .form-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .form-header h1 {
          color: #1e293b;
          font-size: 32px;
          margin-bottom: 10px;
        }

        .form-header p {
          color: #64748b;
          font-size: 14px;
        }

        .form-field {
          margin-bottom: 25px;
        }

        .form-field label {
          display: block;
          color: #1e293b;
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .form-field input {
          width: 100%;
          padding: 14px 18px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          font-size: 16px;
          color: #1e293b;
          transition: all 0.3s;
          background: white;
          box-sizing: border-box;
        }

        .form-field input:focus {
          outline: none;
          border-color: #1e40af;
          box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
        }

        .form-field input::placeholder {
          color: #94a3b8;
        }

        .button-group {
          display: flex;
          gap: 15px;
          margin-top: 35px;
        }

        .btn {
          flex: 1;
          padding: 14px 24px;
          border-radius: 10px;
          border: none;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .btn-submit {
          background: #1e40af;
          color: white;
        }

        .btn-submit:hover:not(:disabled) {
          background: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(30, 64, 175, 0.3);
        }

        .btn-submit:disabled {
          background: #94a3b8;
          cursor: not-allowed;
        }

        .btn-cancel {
          background: #f1f5f9;
          color: #475569;
        }

        .btn-cancel:hover {
          background: #e2e8f0;
        }

        .message {
          margin-top: 20px;
          padding: 14px;
          border-radius: 10px;
          text-align: center;
          font-weight: 500;
          animation: slideIn 0.3s ease;
        }

        .message.success {
          background: #d1fae5;
          color: #065f46;
          border: 1px solid #6ee7b7;
        }

        .message.error {
          background: #fee2e2;
          color: #991b1b;
          border: 1px solid #fca5a5;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .form-container {
            padding: 30px 20px;
          }

          .form-header h1 {
            font-size: 24px;
          }

          .button-group {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="form-container">
        <div className="form-header">
          <h1>Cập nhật khoản thu</h1>
          <p>Nhập thông tin cần cập nhật cho hóa đơn</p>
        </div>

        <div className="form-field">
          <label>Mã hóa đơn</label>
          <input
            type="text"
            name="billId"
            value={formData.billId}
            onChange={handleChange}
            placeholder="Nhập mã hóa đơn (VD: BILL001)"
          />
        </div>

        <div className="form-field">
          <label>Ngày thanh toán</label>
          <input
            type="date"
            name="paidAt"
            value={formData.paidAt}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label>Số tiền (VNĐ)</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Nhập số tiền"
            step="1000"
            min="0"
          />
        </div>

        <div className="button-group">
          <button
            className="btn btn-cancel"
            onClick={() => navigate('/admin/fee')}
          >
            Hủy
          </button>
          <button
            className="btn btn-submit"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Đang xử lý...' : 'Cập nhật'}
          </button>
        </div>

        {message && (
          <div className={`message ${message.includes('thành công') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateFeePage;