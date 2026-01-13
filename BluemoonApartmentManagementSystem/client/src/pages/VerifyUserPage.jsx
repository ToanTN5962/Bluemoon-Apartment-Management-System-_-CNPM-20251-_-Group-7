import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/resetPass-bg.jpg';

function VerifyUserPage() {
  const navigate = useNavigate();
  const [currentAdmin, setCurrentAdmin] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Format date of birth
  const formatDate = (dateString) => {
    if (!dateString) return '—';
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN'); // Định dạng ngày Việt Nam: DD/MM/YYYY
  };

  // Sex mapping (giả sử backend trả "MALE"/"FEMALE" từ enum Sex)
  const formatSex = (sex) => {
    if (!sex) return '—';
    return sex === 'MALE' ? 'Nam' : 'Nữ';
  };

  useEffect(() => {
    // Kiểm tra authentication
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (!storedUser || !token) {
      navigate('/login');
      return;
    }
    const userData = JSON.parse(storedUser);
    setCurrentAdmin(userData);

    const fetchPendingUsers = async () => {
      try {
        setLoading(true);
        setError('');
        const response = await fetch('/api/users/', {  // Sử dụng getAll để lấy tất cả users
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) throw new Error('Không thể tải danh sách người dùng');

        const data = await response.json();

        // Lọc chỉ những user có isActive = false (chờ xác minh)
        const pendingUsers = data
          .filter(user => user.isActive === false)
          .map(user => ({
            id: user.id,
            fullName: user.fullName || '—',
            dateOfBirth: user.dateOfBirth,
            sex: user.sex,
            phoneNum: user.phoneNum || '—',
            email: user.email || '—'
          }));

        setUsers(pendingUsers);
      } catch (err) {
        console.error('Lỗi fetch:', err);
        setError('Lỗi tải dữ liệu. Vui lòng thử lại.');
        // Fallback dữ liệu mẫu (giữ nguyên để test khi backend lỗi)
        setUsers([
          { id: 1, fullName: "Nguyễn Văn A", dateOfBirth: "1990-03-15", sex: "MALE", phoneNum: "0123456789", email: "nguyenvana@example.com" },
          { id: 2, fullName: "Trần Thị B", dateOfBirth: "1995-07-22", sex: "FEMALE", phoneNum: "0987654321", email: "tranthib@example.com" },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPendingUsers();
  }, [navigate]);

  const handleVerify = async (userId) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`/api/users/activate/${userId}`, {  // Giả định endpoint activate (bạn cần tạo ở backend)
        method: 'PATCH', // hoặc POST nếu backend dùng POST
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        // body: JSON.stringify({ isActive: true }) // nếu endpoint cần body
      });

      if (response.ok) {
        // Xóa user khỏi danh sách sau khi verify thành công
        setUsers(prev => prev.filter(u => u.id !== userId));
        alert('Xác minh thành công! Tài khoản đã được kích hoạt.');
      } else {
        const errData = await response.json();
        alert(`Xác minh thất bại: ${errData.message || 'Lỗi server'}`);
      }
    } catch (err) {
      alert('Lỗi kết nối server');
    }
  };

  const handleBack = () => {
    navigate('/admin');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/');
  };

  const backgroundStyle = {
    minHeight: '100vh',
    backgroundImage: `url(${backgroundImage})`,
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
    minHeight: '300px',
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
    transition: 'background 0.3s',
  };

  return (
    <div style={backgroundStyle}>
      {/* Header */}
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
          <span style={{ color: 'white', fontSize: '20px' }}>Admin: {currentAdmin?.fullName || currentAdmin?.email || 'Admin'}</span>
          <button onClick={handleLogout} style={{ padding: '10px 20px', background: '#dc2626', color: 'white', border: 'none', borderRadius: '30px', cursor: 'pointer' }}>
            Logout
          </button>
        </div>
      </div>

      <h1 style={{ textAlign: 'center', color: 'white', textShadow: '2px 2px 10px rgba(0,0,0,0.8)', marginBottom: '40px', fontSize: '36px' }}>
        Danh sách người dùng chờ xác minh
      </h1>

      {loading ? (
        <p style={{ textAlign: 'center', color: 'white', fontSize: '24px' }}>Đang tải danh sách...</p>
      ) : error ? (
        <p style={{ textAlign: 'center', color: '#ff6b6b', fontSize: '24px' }}>{error}</p>
      ) : users.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'white', fontSize: '24px' }}>Không có người dùng nào chờ xác minh</p>
      ) : (
        <div style={containerStyle}>
          {users.map(user => (
            <div key={user.id} style={cardStyle}>
              <p><span style={labelStyle}>Họ tên:</span> {user.fullName}</p>
              <p><span style={labelStyle}>Ngày sinh:</span> {formatDate(user.dateOfBirth)}</p>
              <p><span style={labelStyle}>Giới tính:</span> {formatSex(user.sex)}</p>
              <p><span style={labelStyle}>Điện thoại:</span> {user.phoneNum}</p>
              <p><span style={labelStyle}>Email:</span> {user.email}</p>
              <button
                style={verifyBtnStyle}
                onMouseOver={e => e.target.style.background = '#236b44'}
                onMouseOut={e => e.target.style.background = '#2e8b57'}
                onClick={() => handleVerify(user.id)}
              >
                Verify & Activate
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default VerifyUserPage;