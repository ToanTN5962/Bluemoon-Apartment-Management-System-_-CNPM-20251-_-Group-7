import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/afterLogin-bg.jpg';

// === CẤU HÌNH HỆ THỐNG ===
const USE_MOCK = false; // Chuyển thành false khi có API thật
const API_URL = 'http://localhost:3000/api/fees';

export default function CreateFeePage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    cycle: ''
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
    // Validate form
    if (!formData.name || !formData.cycle || !formData.amount) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    setIsSubmitting(true);

    if (USE_MOCK) {
      // Giả lập thời gian chờ của server
      setTimeout(() => {
        console.log('Dữ liệu đã gửi thành công (Mock):', formData);
        alert('Tạo khoản thu thành công!');
        setIsSubmitting(false);
        navigate('/admin/fee'); // Quay về trang danh sách
      }, 800);
    } else {  //----------------- đoạn này để fetch api, endpoint
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            cycle: formData.cycle,
            amount: parseInt(formData.amount)
          })
        });

        if (response.ok) {
          console.log('Dữ liệu đã gửi thành công:', formData);
          alert('Tạo khoản thu thành công!');
          navigate('/admin/fee'); // Quay về trang danh sách
        } else {
          alert('Tạo khoản thu thất bại!');
        }
      } catch (error) {
        console.error('Lỗi:', error);
        alert('Lỗi kết nối khi tạo khoản thu!');
      } finally {
        setIsSubmitting(false);
      }
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
            <div className="form-label">name</div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              placeholder="Nhập tên khoản thu"
            />
          </div>

          <div className="form-row">
            <div className="form-label">Cycle</div>
            <input
              type="text"
              name="cycle"
              value={formData.cycle}
              onChange={handleChange}
              className="form-input"
              placeholder="DAILY"
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