import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import resetPass from '../assets/images/resetPass-bg.jpg';

function ForgotPasswordReset() {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // 1. State lưu giá trị
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // 2. State lưu thông báo lỗi
  const [error, setError] = useState('');

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Kiểm tra khớp mật khẩu
    if (password !== confirmPassword) {
      setError('Mật khẩu xác nhận không khớp!'); // Hiển thị lỗi
      return;
    }

    // Kiểm tra độ dài tối thiểu (Ví dụ: ít nhất 6 ký tự)
    if (password.length < 6) {
      setError('Mật khẩu phải có ít nhất 6 ký tự!');
      return;
    }

    setError(''); // Xóa lỗi nếu mọi thứ ổn
    alert('Password changed successfully!');
    navigate('/login');
  };

  return (
    <div style={containerStyle}>
      <div style={{ ...gridStyle, flexDirection: isMobile ? 'column' : 'row' }}>
        <div style={{ ...formSideStyle, padding: isMobile ? '40px 20px' : '80px' }}>
          <h2 style={{ fontSize: isMobile ? '28px' : '36px', marginBottom: '10px' }}>New Password</h2>
          <p style={{ marginBottom: '40px', opacity: 0.7 }}>Enter your new password below.</p>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={labelStyle}>New password</label>
              <input 
                type="password" 
                required 
                style={inputStyle} 
                placeholder="••••••••"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError(''); // Xóa lỗi khi người dùng gõ lại
                }}
              />
            </div>

            <div>
              <label style={labelStyle}>Validate password</label>
              <input 
                type="password" 
                required 
                style={inputStyle} 
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    if (error) setError(''); // Xóa lỗi khi người dùng gõ lại
                }}
              />
            </div>

            {/* Hiển thị dòng thông báo lỗi */}
            {error && (
              <p style={{ color: '#ff4d4d', fontSize: '14px', margin: '-10px 0 0 10px', fontWeight: '500' }}>
                ⚠️ {error}
              </p>
            )}

            <button type="submit" style={{ ...btnStyle, background: '#2e8b57', marginTop: '10px' }}>
              Submit
            </button>

            <p style={{ textAlign: 'center', marginTop: '10px' }}>
              <Link to="/login" style={linkStyle}>Back to Login</Link>
            </p>
          </form>
        </div>
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

export default ForgotPasswordReset;