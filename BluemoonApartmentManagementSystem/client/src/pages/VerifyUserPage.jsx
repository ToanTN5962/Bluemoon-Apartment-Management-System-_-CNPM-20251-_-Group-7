import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/resetPass-bg.jpg';

function VerifyUserPage() {
  const navigate = useNavigate();
  const [currentAdmin, setCurrentAdmin] = useState(null); // để check auth
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Kiểm tra auth giống AdminPage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setCurrentAdmin(userData);
    } else {
      navigate('/login');
      return;
    }

    const fetchUsersToVerify = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3000/api/users/getupdaterequests', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        console.error('Lỗi fetch:', err);
        setLoading(false);
      }
    };

    fetchUsersToVerify();
  }, [navigate]);

  const handleVerify = (userId, email) => {
    // Gửi request verify tới backend
    fetch('https://your-backend.com/api/verify', {  // <-- sửa URL backend thực tế
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: userId, email })
    })
      .then(res => {
        if (res.ok) {
          // Xóa user khỏi danh sách sau khi verify thành công
          setUsers(prev => prev.filter(u => u.id !== userId));
          alert(`Đã xác minh thành công: ${email}`);
        } else {
          alert('Xác minh thất bại');
        }
      })
      .catch(() => alert('Lỗi kết nối server'));
  };

  const handleBack = () => {
    navigate('/admin'); // hoặc path của AdminPage (thường là '/admin' hoặc '/admin/dashboard')
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  // Nếu bạn có import backgroundImage, dùng biến đó. Nếu không, dùng URL stock tương tự hình bạn upload
  const backgroundStyle = {
    minHeight: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    // backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    padding: '40px 20px',
  };

  const containerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
    gap: '30px',
  };

  const cardStyle = {
    background: 'rgba(20, 30, 50, 0.88)',
    backdropFilter: 'blur(8px)',
    color: 'white',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
    position: 'relative',
    minHeight: '280px',
  };

  const labelStyle = {
    display: 'inline-block',
    width: '140px',
    opacity: 0.9,
    fontWeight: 'normal',
  };

  const verifyBtnStyle = {
    position: 'absolute',
    bottom: '25px',
    right: '25px',
    background: '#2e8b57',
    color: 'white',
    border: 'none',
    padding: '12px 28px',
    borderRadius: '30px',
    fontSize: '16px',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
  };

  return (
    <div style={backgroundStyle}>
      {/* Header với nút Back và Logout */}
      <div style={{ maxWidth: '1400px', margin: '0 auto 40px auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          onClick={handleBack}
          style={{
            padding: '12px 24px',
            fontSize: '18px',
            background: 'rgba(255,255,255,0.2)',
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
          }}
        >
          Back to Dashboard
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ color: 'white', fontSize: '20px' }}>Admin: {currentAdmin?.name || currentAdmin?.email}</span>
          <button onClick={handleLogout} style={{ padding: '10px 20px', background: '#dc2626', color: 'white', border: 'none', borderRadius: '30px', cursor: 'pointer' }}>
            Logout
          </button>
        </div>
      </div>

      <h1 style={{ textAlign: 'center', color: 'white', textShadow: '2px 2px 10px rgba(0,0,0,0.8)', marginBottom: '40px', fontSize: '36px' }}>
        Danh sách người dùng cần xác minh
      </h1>

      {loading ? (
        <p style={{ textAlign: 'center', color: 'white', fontSize: '24px' }}>Đang tải danh sách...</p>
      ) : users.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'white', fontSize: '24px' }}>Không có người dùng nào cần xác minh</p>
      ) : (
        <div style={containerStyle}>
          {users.map(user => (
            <div key={user.id || user.email} style={cardStyle}>
              <p><span style={labelStyle}>Full name:</span> {user.fullName || ''}</p>
              <p><span style={labelStyle}>Date of birth:</span> {user.dob || ''}</p>
              <p><span style={labelStyle}>Sex:</span> {user.sex || ''}</p>
              <p><span style={labelStyle}>Phone:</span> {user.phone || ''}</p>
              <p><span style={labelStyle}>Email:</span> {user.email || ''}</p>
              <button
                style={verifyBtnStyle}
                onMouseOver={e => e.target.style.background = '#236b44'}
                onMouseOut={e => e.target.style.background = '#2e8b57'}
                onClick={() => handleVerify(user.id, user.email)}
              >
                Verify
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default VerifyUserPage;