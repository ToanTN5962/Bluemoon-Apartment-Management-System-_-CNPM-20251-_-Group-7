import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bluemoonBg from '../assets/images/afterLogin-bg.jpg';

function AfterLoginPage() {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // Lấy thông tin user từ localStorage (đã lưu khi login)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
    } else {
      // Nếu chưa đăng nhập, chuyển về trang login
      navigate('/login');
    }
    
    return () => window.removeEventListener('resize', handleResize);
  }, [navigate]);

  const isMobile = windowWidth <= 768;

  const handleLogout = () => {
    // Xóa thông tin user từ localStorage và chuyển về trang login
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div style={{
      background: '#1a2847',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '10px' : '20px',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        width: '100%',
        maxWidth: '1300px',
        minHeight: isMobile ? 'auto' : '700px',
        borderRadius: '30px',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
        background: 'white',
      }}>
        
        {/* Panel bên trái - Thông tin user và menu */}
        <div style={{
          flex: isMobile ? 'none' : '0 0 45%',
          background: 'white',
          padding: isMobile ? '40px 30px' : '60px 50px',
          display: 'flex',
          flexDirection: 'column',
        }}>
          
          {/* Logo Bluemoon */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '50px',
          }}>
            {/* Building Icon SVG */}
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4c7cff" strokeWidth="2">
              <rect x="4" y="2" width="7" height="20" />
              <rect x="13" y="6" width="7" height="16" />
              <path d="M6 8h2M6 12h2M6 16h2M15 10h2M15 14h2M15 18h2" />
            </svg>
            <h1 style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#4c7cff',
              margin: 0,
            }}>
              Bluemoon
            </h1>
          </div>

          {/* Thông tin user */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '30px',
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '3px solid #e0e0e0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              {/* User Icon SVG */}
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            
            <div>
              <h2 style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#4c7cff',
                margin: '0 0 8px 0',
              }}>
                {user?.name || user?.email || 'User Name'}
              </h2>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                {/* Check Circle Icon SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#4c7cff" stroke="#4c7cff" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 12l2 2 4-4" stroke="white" fill="none" />
                </svg>
                <span style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#4c7cff',
                }}>
                  Verified
                </span>
              </div>
            </div>
          </div>

          <h3 style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#000',
            margin: '0 0 35px 0',
          }}>
            Welcome back!
          </h3>

          {/* Các nút chức năng */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            flex: 1,
          }}>
            <button
              onClick={() => navigate('/account')}
              style={{
                padding: '20px 30px',
                fontSize: '20px',
                fontWeight: '700',
                background: '#4c7cff',
                color: 'white',
                border: 'none',
                borderRadius: '15px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(76, 124, 255, 0.3)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(76, 124, 255, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(76, 124, 255, 0.3)';
              }}
            >
              Account
            </button>

            <button
              onClick={() => navigate('/update-profile')}
              style={{
                padding: '20px 30px',
                fontSize: '20px',
                fontWeight: '700',
                background: '#4c7cff',
                color: 'white',
                border: 'none',
                borderRadius: '15px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(76, 124, 255, 0.3)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(76, 124, 255, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(76, 124, 255, 0.3)';
              }}
            >
              Update Profile
            </button>

            <button
              onClick={() => navigate('/check-fees')}
              style={{
                padding: '20px 30px',
                fontSize: '20px',
                fontWeight: '700',
                background: '#4c7cff',
                color: 'white',
                border: 'none',
                borderRadius: '15px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(76, 124, 255, 0.3)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(76, 124, 255, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(76, 124, 255, 0.3)';
              }}
            >
              Check Fees
            </button>

            <button
              onClick={() => navigate('/send-feedback')}
              style={{
                padding: '20px 30px',
                fontSize: '20px',
                fontWeight: '700',
                background: '#4c7cff',
                color: 'white',
                border: 'none',
                borderRadius: '15px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(76, 124, 255, 0.3)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(76, 124, 255, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(76, 124, 255, 0.3)';
              }}
            >
              Send Feedback
            </button>
          </div>

          {/* Nút Log out */}
          <button
            onClick={handleLogout}
            style={{
              marginTop: '30px',
              padding: '15px 30px',
              fontSize: '18px',
              fontWeight: '600',
              background: 'transparent',
              color: '#666',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#000';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = '#666';
            }}
          >
            {/* Log out Icon SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Log out
          </button>
        </div>

        {/* Panel bên phải - Hình nền */}
        {!isMobile && (
          <div style={{
            flex: 1,
            backgroundImage: `url(${bluemoonBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
          }}>
            {/* Overlay nhẹ để làm nổi bật hơn */}
            <div style={{
              position: 'absolute',
              bottom: '30px',
              right: '30px',
              width: '60px',
              height: '60px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              backdropFilter: 'blur(10px)',
            }}></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AfterLoginPage;