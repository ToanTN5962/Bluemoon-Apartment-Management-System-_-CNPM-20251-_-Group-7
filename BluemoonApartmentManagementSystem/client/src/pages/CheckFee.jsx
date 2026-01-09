import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/afterLogin-bg.jpg';

const API_URL = 'http://localhost:3001/fees';

export default function CheckFee() {
  const navigate = useNavigate();
  const [fees, setFees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setFees(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        setFees([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="check-fee-page">
      <style>{`
        .check-fee-page {
          min-height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
            url(${backgroundImage});
          background-size: cover;
          background-position: center;
          padding: 40px 20px;
          font-family: 'Inter', sans-serif;
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
        }

        .back-btn {
          background: rgba(255,255,255,0.2);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 20px;
          font-size: 16px;
          cursor: pointer;
          margin-bottom: 20px;
        }

        h1 {
          color:white ;
          text-align: center;
          margin-bottom: 30px;
        }

        .fee-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .fee-card {
          background: white;
           color: #0f172a;
          border-radius: 12px;
          padding: 20px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 15px;
          font-weight: 600;
        }

        .label {
          font-size: 12px;
          color: #64748b;
        }

        .empty {
          color: white;
          text-align: center;
          margin-top: 40px;
        }

        @media (max-width: 768px) {
          .fee-card {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        <button className="back-btn" onClick={() => navigate('/user')}>
          ← Back to Dashboard
        </button>

        <h1>Khoản thu của tôi</h1>

        {loading ? (
          <div className="empty">Đang tải dữ liệu...</div>
        ) : fees.length === 0 ? (
          <div className="empty">Chưa có khoản thu nào</div>
        ) : (
          <div className="fee-list">
            {fees.map(fee => (
  <div key={fee.id} className="fee-card">
    <div>
      <div className="label">Mã hóa đơn</div>
      <div>{fee.bill_id || '—'}</div>
    </div>

    <div>
      <div className="label">Ngày thanh toán</div>
      <div>
        {fee.paid_at
          ? new Date(fee.paid_at).toLocaleDateString('vi-VN')
          : '—'}
      </div>
    </div>

    <div>
      <div className="label">Số tiền</div>
      <div>
        {typeof fee.amount === 'number'
          ? new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND'
            }).format(fee.amount)
          : '—'}
      </div>
    </div>
  </div>
))
}
          </div>
        )}
      </div>
    </div>
  );
}
