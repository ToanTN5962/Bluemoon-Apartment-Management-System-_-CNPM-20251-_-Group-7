import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/Admin-bg.jpg';

function AdminPage() {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="admin-container">
      <style>{`
        .admin-container {
          min-height: 100vh;
          display: flex;
          background: linear-gradient(135deg, #1e3a8a 0%, #283664ff 50%, #162441ff 100%);
          padding: 20px;
          box-sizing: border-box;
          font-family: sans-serif;
        }

        .left-panel {
          width: 45%;
          background-color: white;
          border-radius: 30px 0 0 30px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
          z-index: 2;
        }

        .right-panel {
          width: 55%;
          border-radius: 0 30px 30px 0;
          background-image: url(${backgroundImage});
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
        }

        .menu-buttons {
          display: flex;
          flex-direction: column;
          gap: 15px;
          flex: 1;
        }

        .nav-button {
          padding: 15px 20px;
          font-size: 1.2rem;
          font-weight: 700;
          color: white;
          background-color: #4c7cff;
          border: none;
          border-radius: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(76, 124, 255, 0.3);
        }

        .nav-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(76, 124, 255, 0.4);
        }

        /* Responsive cho máy tính bảng (Tablet) */
        @media (max-width: 1024px) {
          .left-panel { width: 60%; }
          .right-panel { width: 40%; }
        }

        /* Responsive cho điện thoại (Mobile) */
        @media (max-width: 768px) {
          .admin-container { padding: 10px; }
          .left-panel { 
            width: 100%; 
            border-radius: 20px; 
            padding: 30px 20px;
          }
          .right-panel { display: none; } /* Ẩn ảnh nền trên mobile để tập trung vào menu */
          
          h1 { font-size: 32px !important; }
          h2 { font-size: 24px !important; }
          .nav-button { font-size: 1rem; }
        }
      `}</style>

      {/* Left Panel - Menu */}
      <div className="left-panel">
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4c7cff" strokeWidth="2">
            <rect x="4" y="2" width="7" height="20" />
            <rect x="13" y="6" width="7" height="16" />
            <path d="M6 8h2M6 12h2M6 16h2M15 10h2M15 14h2M15 18h2" />
          </svg>
          <h1 style={{ fontSize: '42px', fontWeight: '700', color: '#4c7cff', margin: 0 }}>Bluemoon</h1>
        </div>

        {/* User Info */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
            <div style={{
              width: '60px', height: '60px', borderRadius: '50%', border: '3px solid #4c7cff',
              display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f4ff'
            }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#4c7cff" strokeWidth="2">
                <circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/>
              </svg>
            </div>
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#4c7cff', margin: 0 }}>
                {user?.name || user?.email || 'Admin User'}
              </h2>
              <span style={{ fontSize: '16px', fontWeight: '600', color: '#4c7cff' }}>⭐ Admin</span>
            </div>
          </div>
          <p style={{ fontSize: '20px', fontWeight: '600', color: '#1e3a8a', margin: 0 }}>Welcome back!</p>
        </div>

        {/* Menu Buttons */}
        <div className="menu-buttons">
          <button className="nav-button" onClick={() => navigate('/account')}>Account</button>
          <button className="nav-button" onClick={() => navigate('/admin/verified-user')}>Verified User</button>
          <button className="nav-button" onClick={() => navigate('/admin/find-user')}>Find User</button>
          <button className="nav-button" onClick={() => navigate('/admin/fee')}>Fee</button>
          <button className="nav-button" onClick={() => navigate('/admin/complaints')}>Handle complaints</button>
        </div>

        {/* Logout Button */}
        <button onClick={handleLogout} style={{
          marginTop: '30px', padding: '15px 0', fontSize: '18px', fontWeight: '600',
          color: '#666', backgroundColor: 'transparent', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: '10px'
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Log out
        </button>
      </div>

      {/* Right Panel - Background Image */}
      <div className="right-panel">
        <div style={{
          position: 'absolute', bottom: '40px', right: '40px', width: '60px', height: '60px',
          background: 'linear-gradient(135deg, rgba(76, 124, 255, 0.8) 0%, rgba(30, 58, 138, 0.8) 100%)',
          borderRadius: '50% 0 50% 50%', transform: 'rotate(-45deg)'
        }}></div>
      </div>
    </div>
  );
}

export default AdminPage;