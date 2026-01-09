import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import backgroundImage from '../assets/images/login-bg.jpg';

const USE_MOCK = true;
const API_URL = 'http://localhost:3000/api/bills/payment-status';


const AfterFeePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fee = location.state?.fee; // Lấy thông tin fee được truyền từ FeePage

  const [searchTerm, setSearchTerm] = useState('');
  const [roomPayments, setRoomPayments] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch dữ liệu chi tiết thanh toán của các phòng cho bill_id này
  useEffect(() => {
    const fetchRoomPayments = async () => {
      if (USE_MOCK) {
        setTimeout(() => {
          // Dữ liệu mẫu: các phòng và trạng thái thanh toán
          const mockData = [
            { room_id: 'P101', status: 'paid', paid_at: '2025-12-10' },
            { room_id: 'P102', status: 'unpaid', paid_at: null },
            { room_id: 'P103', status: 'paid', paid_at: '2025-12-12' },
            { room_id: 'P201', status: 'paid', paid_at: '2025-12-08' },
            { room_id: 'P202', status: 'unpaid', paid_at: null },
            { room_id: 'P303', status: 'paid', paid_at: '2025-12-15' },
            { room_id: 'P304', status: 'unpaid', paid_at: null },
            { room_id: 'P305', status: 'paid', paid_at: '2025-12-14' },
          ];
          setRoomPayments(mockData);
          setFilteredRooms(mockData);
          setLoading(false);
        }, 500);
      } else {
        try {
          const response = await fetch(`${API_URL}/${fee?.bill_id}`);
          if (!response.ok) throw new Error('Lỗi server');
          const data = await response.json();
          setRoomPayments(data);
          setFilteredRooms(data);
        } catch (err) {
          console.error('Fetch error:', err);
          alert('Không thể tải dữ liệu chi tiết!');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchRoomPayments();
  }, [fee]);

  // Xử lý tìm kiếm
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredRooms(roomPayments);
    } else {
      const filtered = roomPayments.filter(room =>
        room.room_id.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRooms(filtered);
    }
  }, [searchTerm, roomPayments]);

  return (
    <div className="after-fee-page">
      <style>{`
        .after-fee-page {
          min-height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage});
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

        /* Back Button */
        .back-button {
          background: rgba(255, 255, 255, 0.9);
          color: #64748b;
          padding: 12px 30px;
          border-radius: 50px;
          border: none;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
          margin-bottom: 30px;
          display: inline-block;
        }
        .back-button:hover {
          background: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        /* Fee ID Card */
        .fee-id-card {
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
          color: white;
          padding: 30px;
          border-radius: 20px;
          text-align: center;
          margin-bottom: 30px;
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.3);
        }
        .fee-id-card h1 {
          margin: 0;
          font-size: 32px;
          font-weight: 700;
        }

        /* Search Box */
        .search-container {
          background: rgba(255, 255, 255, 0.95);
          padding: 20px;
          border-radius: 20px;
          margin-bottom: 30px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }
        .search-box {
          width: 100%;
          padding: 18px 25px;
          font-size: 18px;
          border: 2px solid #e2e8f0;
          border-radius: 15px;
          outline: none;
          transition: 0.3s;
          color: #1e293b;
          box-sizing: border-box;
        }
        .search-box:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }
        .search-box::placeholder {
          color: #cbd5e1;
        }

        /* Results Container */
        .results-container {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        /* Room Card */
        .room-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          padding: 25px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: 0.3s;
          border-left: 5px solid;
        }
        .room-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }

        .room-card.paid {
          border-left-color: #10b981;
        }
        .room-card.unpaid {
          border-left-color: #ef4444;
        }

        .room-info {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .room-id {
          font-size: 24px;
          font-weight: 700;
          color: #1e293b;
        }

        .status-badge {
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .status-badge.paid {
          background: #d1fae5;
          color: #065f46;
        }

        .status-badge.unpaid {
          background: #fee2e2;
          color: #991b1b;
        }

        .paid-date {
          font-size: 14px;
          color: #64748b;
          font-weight: 500;
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 60px 20px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 20px;
          color: #64748b;
        }
        .empty-state-icon {
          font-size: 64px;
          margin-bottom: 20px;
        }
        .empty-state h3 {
          font-size: 24px;
          color: #475569;
          margin: 0 0 10px 0;
        }

        /* Loading */
        .loading {
          text-align: center;
          padding: 60px 20px;
          color: white;
          font-size: 20px;
          font-weight: 600;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .room-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }
          .room-info {
            width: 100%;
            justify-content: space-between;
          }
          .fee-id-card h1 {
            font-size: 24px;
          }
        }
      `}</style>

      <div className="container">
        {/* Back Button */}
        <button className="back-button" onClick={() => navigate('/admin')}>
          Back to dashboard
        </button>

        {/* Fee ID Card */}
        <div className="fee-id-card">
          <h1>Tên khoản thu: {fee?.name || 'N/A'}</h1>
        </div>

        {/* Search Box */}
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            placeholder="Tìm kiếm: P303"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Results */}
        {loading ? (
          <div className="loading">Đang tải dữ liệu...</div>
        ) : (
          <div className="results-container">
            {filteredRooms.length === 0 ? (
              <div className="empty-state">
                <div className="empty-state-icon">🔍</div>
                <h3>Không tìm thấy kết quả</h3>
                <p>Không có phòng nào khớp với tìm kiếm "{searchTerm}"</p>
              </div>
            ) : (
              filteredRooms.map((room, index) => (
                <div key={index} className={`room-card ${room.status}`}>
                  <div className="room-info">
                    <span className="room-id">{room.room_id}</span>
                    <span className={`status-badge ${room.status}`}>
                      {room.status === 'paid' ? 'Đã đóng' : 'Chưa đóng'}
                    </span>
                  </div>
                  {room.status === 'paid' && room.paid_at && (
                    <div className="paid-date">
                      Đã thanh toán: {new Date(room.paid_at).toLocaleDateString('vi-VN')}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AfterFeePage;