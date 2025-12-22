import { Link, useNavigate } from 'react-router-dom';
import resetPass from '../assets/images/resetPass-bg.jpg'; 
import { useState, useEffect } from 'react';


function ForgotPasswordEmail() {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/forgot-password/verify');
  };

  return (
    <div style={containerStyle}>
      <div style={{ ...gridStyle, flexDirection: isMobile ? 'column' : 'row' }}>
        {/* Form bên trái */}
        <div style={{ ...formSideStyle, padding: isMobile ? '40px 20px' : '80px' }}>
          <h2 style={{ fontSize: isMobile ? '28px' : '36px', marginBottom: '10px' }}>Reset Password</h2>
          <p style={{ marginBottom: '40px', opacity: 0.7 }}>Enter your email to receive verification code.</p>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600' }}>User email:</label>
              <input type="email" required placeholder="example@mail.com" style={inputStyle} />
            </div>
            <button type="submit" style={{ ...btnStyle, background: '#4a9eff' }}>Submit</button>
            <p style={{ textAlign: 'center', marginTop: '10px' }}>
              <Link to="/login" style={linkStyle}>Back to Login</Link>
            </p>
          </form>
        </div>

        {/* Hình bên phải (Ẩn trên mobile) */}
        {!isMobile && <div style={{ ...imageSideStyle, backgroundImage: `url(${resetPass})` }}></div>}
      </div>
    </div>
  );
}

const containerStyle = { background: '#0e1a2b', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' };
const gridStyle = { display: 'flex', width: '100%', maxWidth: '1200px', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', background: 'white' };
const formSideStyle = { flex: 1, background: 'white', color: '#000', display: 'flex', flexDirection: 'column', justifyContent: 'center' };
const imageSideStyle = { flex: 1, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '500px' };
const inputStyle = { width: '100%', padding: '18px 25px', borderRadius: '30px', border: '1px solid #ddd', outline: 'none', fontSize: '16px', boxSizing: 'border-box' };
const btnStyle = { padding: '16px', borderRadius: '30px', border: 'none', color: 'white', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' };
const labelStyle = { display: 'block', marginBottom: '10px', fontWeight: '600' };
const linkStyle = { color: '#5e81ff', textDecoration: 'none', fontWeight: '600' };

export default ForgotPasswordEmail;