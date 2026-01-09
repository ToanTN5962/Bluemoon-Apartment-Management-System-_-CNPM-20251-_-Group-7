import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import backgroundImage from '../assets/images/afterLogin-bg.jpg';



// === CẤU HÌNH HỆ THỐNG ===
const USE_MOCK = false; // Chuyển thành false khi có API thật
const API_URL = 'http://localhost:3000/api/fees';
const PAYMENT_STATUS_API = 'http://localhost:3000/api/bills/payment-status';// API kiểm tra trạng thái thanh toán

const UpdateFeePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fee = location.state?.fee;

  const selectStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1px solid #E2E8F0',
    fontSize: '16px',
    backgroundColor: 'white',
    appearance: 'none',
    WebkitAppearance: 'none',
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 16px center',
    backgroundSize: '1.2em',
    color: '#1A202C',
    cursor: 'pointer',
    marginTop: '8px'
  };

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    amount: '',
    cycle: ''
  });

  // State cho tìm kiếm trạng thái thanh toán
  const [searchRoomNumber, setSearchRoomNumber] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState('');

  useEffect(() => {
    if (!fee) {
      alert('Không có dữ liệu khoản thu!');
      navigate('/admin/fee');
      return;
    }

    setFormData({
      id: fee.id,
      name: fee.name,
      amount: fee.amount,
      cycle: fee.cycle
    });
  }, [fee, navigate]);


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Hàm xử lý tìm kiếm trạng thái thanh toán
  const handleSearchPaymentStatus = async () => {
    if (!searchRoomNumber.trim()) {
      setSearchError('Vui lòng nhập số phòng!');
      return;
    }

    setIsSearching(true);
    setSearchError('');
    setPaymentStatus(null);

    if (USE_MOCK) {
      // Mock data để test
      setTimeout(() => {
        const mockStatus = Math.random() > 0.5 ? 'PAID' : 'UNPAID';
        setPaymentStatus({
          roomNumber: searchRoomNumber,
          status: mockStatus,
          feeName: formData.name
        });
        setIsSearching(false);
      }, 800);
    } else {
      try {
        const response = await fetch(
          `${PAYMENT_STATUS_API}?roomNumber=${searchRoomNumber}&feeId=${formData.id}`
        );

        if (response.ok) {
          const data = await response.json();
          setPaymentStatus(data);
        } else {
          setSearchError('Không tìm thấy thông tin phòng này!');
        }
      } catch (error) {
        console.error('Error:', error);
        setSearchError('Không thể kết nối với server!');
      } finally {
        setIsSearching(false);
      }
    }
  };

  const handleSubmit = async () => {
    // Validate form
    if (!formData.name || !formData.cycle || !formData.amount) {
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
        console.log("UPDATE ID =", formData.id);

        const response = await fetch(`${API_URL}/${formData.id}`, {
          method: 'PUT',
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
          position: relative;
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

        /* CSS cho phần tìm kiếm trạng thái */
        .search-panel {
          position: fixed;
          top: 40px;
          right: 40px;
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          width: 320px;
          z-index: 1000;
        }

        .search-panel h3 {
          color: #1e293b;
          font-size: 18px;
          margin-bottom: 16px;
          font-weight: 600;
        }

        .search-input-group {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
        }

        .search-input {
          flex: 1;
          padding: 10px 14px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 15px;
        }

        .search-input:focus {
          outline: none;
          border-color: #1e40af;
        }

        .btn-search {
          padding: 10px 20px;
          background: #1e40af;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s;
        }

        .btn-search:hover:not(:disabled) {
          background: #1d4ed8;
        }

        .btn-search:disabled {
          background: #94a3b8;
          cursor: not-allowed;
        }

        .status-result {
          padding: 16px;
          border-radius: 10px;
          text-align: center;
          font-weight: 600;
          font-size: 16px;
          animation: slideIn 0.3s ease;
        }

        .status-result.paid {
          background: #d1fae5;
          color: #065f46;
          border: 2px solid #6ee7b7;
        }

        .status-result.unpaid {
          background: #fee2e2;
          color: #991b1b;
          border: 2px solid #fca5a5;
        }

        .status-result .room-info {
          font-size: 14px;
          margin-top: 8px;
          opacity: 0.8;
        }

        .search-error {
          padding: 12px;
          background: #fef3c7;
          color: #92400e;
          border-radius: 8px;
          font-size: 14px;
          text-align: center;
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

          .search-panel {
            position: static;
            width: 100%;
            margin-bottom: 20px;
          }
        }
      `}</style>

      {/* Panel tìm kiếm trạng thái thanh toán */}
      <div className="search-panel">
        <h3>Kiểm tra thanh toán</h3>
        
        <div className="search-input-group">
          <input
            type="text"
            className="search-input"
            placeholder="Nhập số phòng"
            value={searchRoomNumber}
            onChange={(e) => setSearchRoomNumber(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearchPaymentStatus()}
          />
          <button
            className="btn-search"
            onClick={handleSearchPaymentStatus}
            disabled={isSearching}
          >
            {isSearching ? '...' : 'Tìm'}
          </button>
        </div>

        {paymentStatus && (
          <div className={`status-result ${paymentStatus.status === 'PAID' ? 'paid' : 'unpaid'}`}>
            {paymentStatus.status === 'PAID' ? 'ĐÃ THANH TOÁN' : 'CHƯA THANH TOÁN'}
            <div className="room-info">
              Phòng {paymentStatus.roomNumber}
            </div>
          </div>
        )}

        {searchError && (
          <div className="search-error">
            {searchError}
          </div>
        )}
      </div>

      {/* Form cập nhật khoản thu */}
      <div className="form-container">
        <div className="form-header">
          <h1>Cập nhật khoản thu</h1>
          <p>Nhập thông tin cần cập nhật cho hóa đơn</p>
        </div>

        <div className="form-field">
          <label>Tên hóa đơn</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nhập tên hóa đơn"
          />
        </div>

        <div className="form-field">
          <label>Cycle</label>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <select
              name="cycle"
              value={formData.cycle}
              onChange={handleChange}
              style={selectStyle}
            >
              <option value="" disabled>-- Chọn chu kỳ --</option>
              <option value="DAILY">Hàng ngày (DAILY)</option>
              <option value="MONTHLY">Hàng tháng (MONTHLY)</option>
              <option value="YEARLY">Hàng năm (YEARLY)</option>
            </select>
          </div>
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