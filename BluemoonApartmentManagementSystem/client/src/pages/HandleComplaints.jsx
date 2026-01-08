import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/login-bg.jpg';

function HandleComplaints() {
  const navigate = useNavigate();
  const [currentAdmin, setCurrentAdmin] = useState(null);
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login');
      return;
    }
    setCurrentAdmin(JSON.parse(storedUser));

    fetch('https://your-backend.com/api/complaints')
      .then(res => res.json())
      .then(data => {
        setComplaints(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Fetch complaints error:', err);
        // Fallback data giống hình bạn gửi
        setComplaints([
          {
            id: 1,
            title: 'Phòng 303 quá ồn ào trong khung giờ nghỉ ngơi hằng ngày',
            content: '',
          },
          {
            id: 2,
            title: '',
            content:
              'Hôm trước tôi đi làm về. Thấy ở trước khu toà nhà có một người đi vệ sinh bên sát đường đi, khiến cho xung quanh đây bốc mùi mà bác bảo vệ với các bác an ninh không làm gì cả. Chỗ vui chơi của bọn trẻ con không được dọn dẹp vệ sinh thường xuyên',
          },
          {
            id: 3,
            title: '',
            content:
              'Nếu ở khu căn hộ này thì có được giảm giá gì khi đăng ký thẻ thành viên ở phòng gym của khu không',
          },
        ]);
        setLoading(false);
      });
  }, [navigate]);

  const handleRemove = (id) => {
    // Có thể call API xoá ở đây
    setComplaints(prev => prev.filter(c => c.id !== id));
  };

  const handleBack = () => navigate('/admin');
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  /* ================== STYLES ================== */

 const backgroundStyle = {
    minHeight: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    padding: '40px 20px',
  };

  const headerStyle = {
    maxWidth: '1400px',
    margin: '0 auto 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const backBtnStyle = {
    padding: '12px 26px',
    fontSize: '18px',
    background: 'rgba(255,255,255,0.25)',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    backdropFilter: 'blur(10px)',
  };

  const titleStyle = {
    textAlign: 'center',
    color: 'white',
    fontSize: '36px',
    marginBottom: '40px',
    textShadow: '2px 2px 10px rgba(0,0,0,0.8)',
  };

  const listStyle = {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  };

  const cardStyle = {
    position: 'relative',
    background: 'rgba(15, 40, 120, 0.9)',
    color: 'white',
    padding: '26px 60px 26px 26px',
    borderRadius: '16px',
    boxShadow: '0 12px 35px rgba(0,0,0,0.45)',
    backdropFilter: 'blur(6px)',
  };

  const closeBtnStyle = {
    position: 'absolute',
    top: '16px',
    right: '16px',
    width: '28px',
    height: '28px',
    borderRadius: '8px',
    border: 'none',
    background: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  return (
    <div style={backgroundStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <button onClick={handleBack} style={backBtnStyle}>
          Back to dashboard
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ color: 'white', fontSize: '18px' }}>
            Admin: {currentAdmin?.name || currentAdmin?.email}
          </span>
          <button
            onClick={handleLogout}
            style={{
              padding: '10px 22px',
              background: '#dc2626',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <h1 style={titleStyle}>Danh sách phản ánh / khiếu nại</h1>

      {loading ? (
        <p style={{ textAlign: 'center', color: 'white', fontSize: '24px' }}>
          Đang tải dữ liệu...
        </p>
      ) : complaints.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'white', fontSize: '24px' }}>
          Không có khiếu nại nào
        </p>
      ) : (
        <div style={listStyle}>
          {complaints.map(item => (
            <div key={item.id} style={cardStyle}>
              <button
                style={closeBtnStyle}
                onClick={() => handleRemove(item.id)}
              >
                ×
              </button>

              {item.title && (
                <h3 style={{ marginBottom: '10px', fontSize: '18px' }}>
                  {item.title}
                </h3>
              )}
              {item.content && (
                <p style={{ lineHeight: 1.6, opacity: 0.95 }}>
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HandleComplaints;
