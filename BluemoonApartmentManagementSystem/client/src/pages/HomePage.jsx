import { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import homeBg from '../assets/images/home-bg.jpg';

function HomePage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  return (
    <div style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${homeBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: isMobile ? 'scroll' : 'fixed',
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      color: 'white',
      overflowX: 'hidden',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    }}>
      <Header />

      <div style={{
        textAlign: 'center',
        paddingTop: isMobile ? '60px' : '100px',
        maxWidth: '1000px',
        margin: '0 auto',
        paddingLeft: '20px',
        paddingRight: '20px',
        flex: 1
      }}>
        <p style={{ 
          fontSize: isMobile ? '12px' : '14px', 
          background: 'rgba(255,255,255,0.15)', 
          padding: '8px 20px', 
          borderRadius: '30px', 
          display: 'inline-block', 
          marginBottom: '20px',
          backdropFilter: 'blur(5px)',
          border: '1px solid rgba(255,255,255,0.3)'
        }}>
          ⭐ RATED #1 IN LUXURY MANAGEMENT
        </p>

        <h1 style={{ 
          fontSize: isMobile ? '36px' : '64px', 
          lineHeight: 1.2,
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
          Elevated Living.<br />
          <span style={{ color: '#5e81ff' }}>Effortlessly Managed.</span>
        </h1>

        <p style={{ 
          fontSize: isMobile ? '16px' : '18px', 
          marginBottom: '30px', 
          opacity: 0.9,
          maxWidth: '600px',
          margin: '0 auto 30px auto'
        }}>
          Experience the pinnacle of apartment living. Smart tools, seamless payments - all in one app.
        </p>

        <button style={{ 
          fontSize: isMobile ? '18px' : '20px', 
          padding: isMobile ? '14px 28px' : '16px 45px',
          backgroundColor: '#5e81ff',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Find Your Home
        </button>
      </div>

      {/* Stats Section */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: isMobile ? '15px' : '30px',
        padding: isMobile ? '40px 15px' : '40px 20px 80px 20px',
        flexWrap: 'wrap',
      }}>
        <StatCard number="1,500+" label="Premium Units" isMobile={isMobile} />
        <StatCard number="98%" label="Satisfaction" isMobile={isMobile} />
        <StatCard number="5" label="Major Cities" isMobile={isMobile} />
      </div>
    </div>
  );
}

function StatCard({ number, label, isMobile }) {
  // Thay aspectRatio bằng cách tính toán height/width thủ công để an toàn hơn
  const cardSize = isMobile ? '140px' : '200px';

  return (
    <div style={{
      textAlign: 'center',
      width: cardSize,
      height: cardSize,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px',
      borderRadius: '25px', // "Viền tròn" cho ô vuông
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)', // Hỗ trợ Safari
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxSizing: 'border-box'
    }}>
      <h2 style={{ 
        fontSize: isMobile ? '26px' : '36px', 
        marginBottom: '5px',
        color: '#5e81ff',
        margin: 0
      }}>{number}</h2>
      <p style={{ 
        fontSize: isMobile ? '12px' : '14px', 
        opacity: 0.8,
        margin: 0
      }}>{label}</p>
    </div>
  );
}

export default HomePage;