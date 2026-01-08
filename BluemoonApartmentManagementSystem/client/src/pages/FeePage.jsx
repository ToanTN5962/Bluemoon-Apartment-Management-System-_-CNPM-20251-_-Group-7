import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/afterLogin-bg.jpg';

// ================== CẤU HÌNH ==================
const USE_MOCK = false;
const API_URL = 'http://localhost:3001/fees';

const FeePage = () => {
  const [fees, setFees] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // ================== FETCH DATA ==================
  useEffect(() => {
    const fetchFees = async () => {
      try {
        if (USE_MOCK) {
          setFees([]);
        } else {
          const res = await fetch(API_URL);
          if (!res.ok) throw new Error('Fetch failed');
          const data = await res.json();
          setFees(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        alert('Không thể tải danh sách khoản thu');
        setFees([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFees();
  }, []);

  // ================== DELETE ==================
  const handleDelete = async (id) => {
    if (!window.confirm('Xác nhận xóa khoản thu này?')) return;

    try {
      if (!USE_MOCK) {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      }
      setFees(prev => prev.filter(f => f.id !== id));
    } catch {
      alert('Xóa thất bại');
    }
  };

  // ================== RENDER ==================
  return (
    <div className="fee-page">
      <style>{`
        .fee-page {
          min-height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
            url(${backgroundImage});
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

        .back-btn {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(8px);
          border: none;
          padding: 10px 18px;
          border-radius: 999px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
          margin-bottom: 25px;
        }

        .back-btn:hover {
          background: rgba(255, 255, 255, 0.4);
        }

        .page-title {
          color: white;
          text-align: center;
          font-size: 30px;
          margin-bottom: 25px;
        }

        .btn {
          padding: 10px 20px;
          border-radius: 8px;
          border: none;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        .btn-primary {
          background: #1e40af;
          color: white;
        }

        .btn-primary:hover {
          background: #1d4ed8;
        }

        .fee-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .fee-card {
          background: white;
          border-radius: 12px;
          padding: 20px 25px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          border-left: 5px solid #1e40af;
        }

        .fee-details {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          flex-grow: 1;
        }

        .detail-item label {
          font-size: 11px;
          text-transform: uppercase;
          color: #64748b;
          font-weight: 700;
        }

        .detail-item span {
          font-size: 16px;
          font-weight: 600;
          color: #1e293b;
        }

        .amount {
          color: #059669;
          font-size: 18px;
        }

        .delete-icon {
          background: #fef2f2;
          color: #dc2626;
          border: none;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 20px;
        }

        .delete-icon:hover {
          background: #dc2626;
          color: white;
        }

        @media (max-width: 768px) {
          .fee-details {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        {/* BACK */}
        <button className="back-btn" onClick={() => navigate('/admin')}>
          ← Back to dashboard
        </button>

        {/* TITLE */}
        <h1 className="page-title">Danh sách khoản thu</h1>

        {/* CREATE */}
        <div style={{ textAlign: 'right', marginBottom: '20px' }}>
          <button
            className="btn btn-primary"
            onClick={() => navigate('/admin/create-fee')}
          >
            + Tạo mới
          </button>
        </div>

        {/* LIST */}
        <main className="fee-list">
          {loading ? (
            <div style={{ color: 'white', textAlign: 'center' }}>
              Đang tải dữ liệu...
            </div>
          ) : fees.length === 0 ? (
            <div style={{ color: 'white', textAlign: 'center' }}>
              Chưa có khoản thu nào
            </div>
          ) : (
            fees.map(fee => (
              <div key={fee.id} className="fee-card">
                <div className="fee-details">
                  <div className="detail-item">
                    <label>Mã hóa đơn</label>
                    <span>{fee.bill_id || '—'}</span>
                  </div>

                  <div className="detail-item">
                    <label>Ngày thanh toán</label>
                    <span>
                      {fee.paid_at && !isNaN(new Date(fee.paid_at))
                        ? new Date(fee.paid_at).toLocaleDateString('vi-VN')
                        : '—'}
                    </span>
                  </div>

                  <div className="detail-item">
                    <label>Số tiền</label>
                    <span className="amount">
                      {typeof fee.amount === 'number'
                        ? new Intl.NumberFormat('vi-VN', {
                            style: 'currency',
                            currency: 'VND'
                          }).format(fee.amount)
                        : '—'}
                    </span>
                  </div>
                </div>

                <button
                  className="delete-icon"
                  onClick={() => handleDelete(fee.id)}
                >
                  ×
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
