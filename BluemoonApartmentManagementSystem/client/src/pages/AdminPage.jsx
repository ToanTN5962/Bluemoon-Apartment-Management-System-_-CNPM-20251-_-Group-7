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
    <div 
      style={{
        minHeight: '100vh',
        display: 'flex',
        background: 'linear-gradient(135deg, #1e3a8a 0%, #283664ff 50%, #162441ff 100%)',
        padding: '20px'
      }}
    >
      {/* Left Panel - Menu */}
      <div 
        style={{
          width: '45%',
          backgroundColor: 'white',
          borderRadius: '30px 0 0 30px',
          padding: '60px 50px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)'
        }}
      >
        {/* Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '50px'
        }}>
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#4c7cff" strokeWidth="2">
            <rect x="4" y="2" width="7" height="20" />
            <rect x="13" y="6" width="7" height="16" />
            <path d="M6 8h2M6 12h2M6 16h2M15 10h2M15 14h2M15 18h2" />
          </svg>
          <h1 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: '#4c7cff',
            margin: 0
          }}>
            Bluemoon
          </h1>
        </div>

        {/* User Info */}
        <div style={{
          marginBottom: '50px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '15px'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '3px solid #4c7cff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f0f4ff'
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4c7cff" strokeWidth="2">
                <circle cx="12" cy="8" r="5"/>
                <path d="M20 21a8 8 0 1 0-16 0"/>
              </svg>
            </div>
            <div>
              <h2 style={{
                fontSize: '32px',
                fontWeight: '700',
                color: '#4c7cff',
                margin: 0,
                marginBottom: '5px'
              }}>
                {user?.name || user?.email || 'Admin User'}
              </h2>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#4c7cff">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
                <span style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#4c7cff'
                }}>
                  Admin
                </span>
              </div>
            </div>
          </div>
          <p style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#1e3a8a',
            margin: 0
          }}>
            Welcome back!
          </p>
        </div>

        {/* Menu Buttons */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          flex: 1
        }}>
          <button
            onClick={() => navigate('/account')}
            style={{
              padding: '20px 40px',
              fontSize: '24px',
              fontWeight: '700',
              color: 'white',
              backgroundColor: '#4c7cff',
              border: 'none',
              borderRadius: '15px',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(76, 124, 255, 0.3)',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(76, 124, 255, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(76, 124, 255, 0.3)';
            }}
          >
            Account
          </button>

          <button
            onClick={() => navigate('/admin/verified-user')}
            style={{
              padding: '20px 40px',
              fontSize: '24px',
              fontWeight: '700',
              color: 'white',
              backgroundColor: '#4c7cff',
              border: 'none',
              borderRadius: '15px',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(76, 124, 255, 0.3)',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(76, 124, 255, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(76, 124, 255, 0.3)';
            }}
          >
            Verified User
          </button>

          <button
            onClick={() => navigate('/admin/find-user')}
            style={{
              padding: '20px 40px',
              fontSize: '24px',
              fontWeight: '700',
              color: 'white',
              backgroundColor: '#4c7cff',
              border: 'none',
              borderRadius: '15px',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(76, 124, 255, 0.3)',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(76, 124, 255, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(76, 124, 255, 0.3)';
            }}
          >
            Find User
          </button>

          <button
            onClick={() => navigate('/admin/create-fee')}
            style={{
              padding: '20px 40px',
              fontSize: '24px',
              fontWeight: '700',
              color: 'white',
              backgroundColor: '#4c7cff',
              border: 'none',
              borderRadius: '15px',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(76, 124, 255, 0.3)',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(76, 124, 255, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(76, 124, 255, 0.3)';
            }}
          >
            Create Fee
          </button>

          <button
            onClick={() => navigate('/admin/complaints')}
            style={{
              padding: '20px 40px',
              fontSize: '24px',
              fontWeight: '700',
              color: 'white',
              backgroundColor: '#4c7cff',
              border: 'none',
              borderRadius: '15px',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(76, 124, 255, 0.3)',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(76, 124, 255, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(76, 124, 255, 0.3)';
            }}
          >
            Handle complaints
          </button>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          style={{
            marginTop: '30px',
            padding: '15px 30px',
            fontSize: '18px',
            fontWeight: '600',
            color: '#666',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'color 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#1e3a8a';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = '#666';
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Log out
        </button>
      </div>

      {/* Right Panel - Background Image */}
      <div 
        style={{
          width: '55%',
          borderRadius: '0 30px 30px 0',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{
          position: 'absolute',
          bottom: '40px',
          right: '40px',
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, rgba(76, 124, 255, 0.9) 0%, rgba(30, 58, 138, 0.9) 100%)',
          borderRadius: '50% 0 50% 50%',
          transform: 'rotate(-45deg)'
        }}></div>
      </div>
    </div>
  );
}

export default AdminPage;