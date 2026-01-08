import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/afterLogin-bg.jpg';

// === CẤU HÌNH HỆ THỐNG ===
const USE_MOCK = false; // Chuyển thành false khi có API thật
const API_URL = 'http://localhost:3000/api/fees';

const FeePage = () => {
  const [fees, setFees] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 1. useEffect: Xử lý lấy dữ liệu khi load trang
  useEffect(() => {
    const fetchFees = async () => {
      if (USE_MOCK) {
        // Giả lập thời gian chờ của server
        setTimeout(() => {
          setFees([
            { id: '1', bill_id: 'BILL001', paid_at: '2025-12-15', amount: 2500000 },
            { id: '2', bill_id: 'BILL002', paid_at: '2026-01-02', amount: 1800000 },
            { id: '3', bill_id: 'BILL003', paid_at: '2026-01-05', amount: 3200000 },
            { id: '4', bill_id: 'BILL004', paid_at: '2025-11-20', amount: 900000 },
            { id: '5', bill_id: 'BILL004', paid_at: '2025-11-20', amount: 900000 },
            { id: '6', bill_id: 'BILL004', paid_at: '2025-11-20', amount: 900000 },
            { id: '7', bill_id: 'BILL004', paid_at: '2025-11-20', amount: 900000 },
            { id: '8', bill_id: 'BILL004', paid_at: '2025-11-20', amount: 900000 },
          ]);
          setLoading(false);
        }, 800);
      } else {
        try {
          const response = await fetch(`${API_URL}/showfees`);
          if (!response.ok) throw new Error('Lỗi server');
          const data = await response.json();
          setFees(data);
        } catch (err) {
          console.error("Fetch error:", err);
          alert("Không thể tải dữ liệu từ Backend!");
        } finally {
          setLoading(false);
        }
      }
    };
    fetchFees();
  }, []);

  // 2. Hàm xử lý Xóa (Kết nối endpoint DELETE)
  const handleDelete = async (id) => {
    if (!window.confirm("Xác nhận xóa khoản phí này?")) return;

    if (USE_MOCK) {
      setFees(prev => prev.filter(f => f.id !== id));
    } else {
      try {
        const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        if (response.ok) {
          setFees(prev => prev.filter(f => f.id !== id));
        } else {
          alert("Xóa thất bại!");
        }
      } catch (err) {
        alert("Lỗi kết nối khi xóa!");
      }
    }
  };

  return (
    <div className="fee-page">
      <style>{`
        .fee-page {
          min-height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          padding: 40px 20px;
          font-family: 'Inter', sans-serif;
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
        }

        /* Header Section */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          flex-wrap: wrap;
          gap: 15px;
        }
        .header h1 { color: white; margin: 0; font-size: 28px; }
        .btn-group { display: flex; gap: 10px; }
        
        .btn {
          padding: 10px 20px;
          border-radius: 8px;
          border: none;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }
        .btn-primary { background: #1e40af; color: white; }
        .btn-primary:hover { background: #1d4ed8; }

        /* Fee List Section */
        .fee-list { display: flex; flex-direction: column; gap: 15px; }
        
        .fee-card {
          background: white;
          border-radius: 12px;
          padding: 20px 25px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          transition: 0.2s;
          border-left: 5px solid #1e40af;
        }
        .fee-card:hover { transform: translateY(-3px); }

        .fee-details {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          flex-grow: 1;
          gap: 20px;
        }

        .detail-item label {
          display: block;
          font-size: 11px;
          text-transform: uppercase;
          color: #64748b;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .detail-item span {
          font-size: 16px;
          color: #1e293b;
          font-weight: 600;
        }

        .amount { color: #059669 !react-important; font-size: 18px !important; }

        .delete-icon {
          background: #fef2f2;
          color: #dc2626;
          border: none;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 20px;
          margin-left: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .delete-icon:hover { background: #dc2626; color: white; }

        /* Responsive */
        @media (max-width: 768px) {
          .fee-details { grid-template-columns: 1fr; gap: 10px; }
          .fee-card { padding: 15px; }
          .header { justify-content: center; text-align: center; }
        }
      `}</style>

      <div className="container">
        <header className="header">
          <h1>Danh sách khoản thu</h1>
          <div className="btn-group">
            <button className="btn btn-primary" onClick={() => navigate('/admin/create-fee')}>Tạo mới</button>
            <button className="btn btn-primary" onClick={() => navigate('/admin/update-fee')}>Cập nhật</button>
          </div>
        </header>

        <main className="fee-list">
          {loading ? (
            <div style={{color: 'white', textAlign: 'center'}}>Đang tải dữ liệu...</div>
          ) : fees.length === 0 ? (
            <div style={{color: 'white', textAlign: 'center'}}>Trống dữ liệu</div>
          ) : (
            fees.map(fee => (
              <div key={fee.id} className="fee-card" onClick={() => navigate('/admin/check-fee', { state: { fee } })}>
                <div className="fee-details">
                  <div className="detail-item">
                    <label>Tên hóa đơn</label>
                    <span>{fee.name}</span>
                  </div>
                  <div className="detail-item">
                    <label>Chu kỳ</label>
                    <span>{fee.cycle}</span>
                  </div>
                  <div className="detail-item">
                    <label>Số tiền</label>
                    <span className="amount">
                      {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(fee.amount)}
                    </span>
                  </div>
                </div>
                
                <button className="delete-icon" onClick={(e) => {
                  e.stopPropagation(); // Ngăn việc nhảy trang khi bấm nút xóa
                  handleDelete(fee.id);
                }}>
                  &times;
                </button>
              </div>
            ))
          )}
        </main>
      </div>
    </div>
  );
};

export default FeePage;