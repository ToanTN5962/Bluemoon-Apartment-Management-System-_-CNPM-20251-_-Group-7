import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/afterLogin-bg.jpg';

// === CẤU HÌNH HỆ THỐNG ===
const USE_MOCK = true; 
const API_URL = 'http://localhost:3001/fees';

export default function CreateFeePage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    billId: '',
    paidAt: '',
    amount: '',
    method: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

    const handleSubmit = async () => {
  if (!formData.billId || !formData.paidAt || !formData.amount || !formData.method) {
    alert('Vui lòng điền đầy đủ thông tin!');
    return;
  }

  setIsSubmitting(true);

  try {
    const response = await fetch('http://localhost:3001/fees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
  bill_id: formData.billId,
  paid_at: new Date(formData.paidAt).toISOString(),
  amount: Number(formData.amount),
  method: formData.method
})
    });
    

    if (!response.ok) throw new Error();

    alert('Tạo khoản thu thành công!');
    navigate('/admin/fee');
  } catch (err) {
    alert('Không thể tạo khoản thu!');
  } finally {
    setIsSubmitting(false);
  }
};

  const handleCancel = () => {
    navigate('/admin/fee'); // Quay về trang danh sách
  };

  return (
    <div className="create-fee-page">
      <style>{`
        .create-fee-page {
          min-height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          font-family: 'Inter', sans-serif;
        }

        .form-container {
          width: 100%;
          max-width: 1000px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }

        .form-title {
          text-align: center;
          font-size: 28px;
          font-weight: bold;
          color: #1e293b;
          margin-bottom: 30px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: 20px;
          margin-bottom: 20px;
          align-items: center;
        }

        .form-label {
          background: #e2e8f0;
          padding: 14px 20px;
          border-radius: 8px;
          font-weight: 600;
          color: #334155;
          font-size: 16px;
        }

        .form-input {
          padding: 14px 20px;
          border: 2px solid #cbd5e1;
          border-radius: 8px;
          font-size: 16px;
          transition: 0.3s;
          background: white;
        }

        .form-input:focus {
          outline: none;
          border-color: #1e40af;
          box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
        }

        .form-input::placeholder {
          color: #94a3b8;
        }

        .button-group {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 35px;
        }

        .btn {
          padding: 12px 40px;
          border-radius: 8px;
          border: none;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
          font-size: 16px;
        }

        .btn-submit {
          background: #1e40af;
          color: white;
        }

        .btn-submit:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
        }

        .btn-submit:disabled {
          background: #94a3b8;
          cursor: not-allowed;
          transform: none;
        }

        .btn-cancel {
          background: #64748b;
          color: white;
        }

        .btn-cancel:hover {
          background: #475569;
        }

        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          
          .form-container {
            padding: 25px;
          }

          .button-group {
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>

      <div className="form-container">
        <h1 className="form-title">Tạo khoản thu mới</h1>

        <div>
          <div className="form-row">
            <div className="form-label">Bill ID</div>
            <input
              type="text"
              name="billId"
              value={formData.billId}
              onChange={handleChange}
              className="form-input"
              placeholder="Nhập mã hóa đơn"
            />
          </div>

          <div className="form-row">
            <div className="form-label">Paid at</div>
            <input
              type="datetime-local"
              name="paidAt"
              value={formData.paidAt}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-row">
            <div className="form-label">Amount</div>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="form-input"
              placeholder="Nhập số tiền (VND)"
            />
          </div>

          <div className="form-row">
            <div className="form-label">Method</div>
            <input
              type="text"
              name="method"
              value={formData.method}
              onChange={handleChange}
              className="form-input"
              placeholder="Chuyển khoản/Tiền mặt"
            />
          </div>

          <div className="button-group">
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="btn btn-submit"
            >
              {isSubmitting ? 'Đang xử lý...' : 'Submit'}
            </button>
            <button
              onClick={handleCancel}
              className="btn btn-cancel"
              disabled={isSubmitting}
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
