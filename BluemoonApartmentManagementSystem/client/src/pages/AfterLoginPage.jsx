import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bluemoonBg from '../assets/images/afterLogin-bg.jpg';

function AfterLoginPage() {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  return (
    <div style={{
      background: '#0e1a2b',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1300px',
      }}>
        <img
          src={bluemoonBg}
          alt="Bluemoon Dashboard"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '30px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            display: 'block',
          }}
        />

        {/* Overlay 2 nút bấm */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '30px' : '50px',
          alignItems: 'center',
        }}>
          <button
            style={{
              padding: isMobile ? '18px 50px' : '25px 70px',
              fontSize: isMobile ? '22px' : '30px',
              fontWeight: '600',
              background: 'transparent',
              border: '3px solid rgba(255, 255, 255, 0.9)',
              color: 'white',
              borderRadius: '50px',
              cursor: 'pointer',
              minWidth: '280px',
              transition: 'all 0.3s ease',
              textShadow: '0 2px 10px rgba(0,0,0,0.6)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            onClick={() => navigate('/revenues')}
          >
            Các khoản thu
          </button>

          <button
            style={{
              padding: isMobile ? '18px 50px' : '25px 70px',
              fontSize: isMobile ? '22px' : '30px',
              fontWeight: '600',
              background: 'transparent',
              border: '3px solid rgba(255, 255, 255, 0.9)',
              color: 'white',
              borderRadius: '50px',
              cursor: 'pointer',
              minWidth: '280px',
              transition: 'all 0.3s ease',
              textShadow: '0 2px 10px rgba(0,0,0,0.6)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            onClick={() => navigate('/household-info')}
          >
            Thông tin hộ gia đình
          </button>
        </div>
      </div>
    </div>
  );
}

export default AfterLoginPage;