import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginBg from '../assets/images/login-bg.jpg';

function LoginPage() {
  const navigate = useNavigate();
  // 1. Tạo state để theo dõi độ rộng màn hình
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Them state luu du lieu nguoi dung nhap
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 2. Định nghĩa các biến điều kiện
  const isMobile = windowWidth <= 768;

  // dependency login function
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if(!email.includes('@')) {
      setError('Please enter a valid email.');
      return;
    } 
    if(password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 401 || response.status === 400 || response.status === 404) {
          setError('Invalid email or password.');
          return;
        } else {
          setError(data.message || 'Login failed. Please try again.');
        }
      } else {
        console.log('Login successful:', data);
        localStorage.setItem('user', JSON.stringify(data));
        // Chuyển hướng sau khi đăng nhập thành công
        navigate('/after-login');
      }
    } catch (err) {
      setError('Cannot connect to server. Please check your connection.');
      console.error('Login error:', err);
    }   
  };

  return (
    <div style={{
      background: '#0e1a2b',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '10px' : '20px' // Padding nhỏ hơn trên mobile
    }}>
      <div className="auth-grid" style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row', // Chuyển từ cột thành hàng dọc trên mobile
        width: '100%',
        maxWidth: '1100px',
        minHeight: isMobile ? 'auto' : '600px',
        borderRadius: '30px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        background: 'white'
      }}>

        {/* Form bên trái (hoặc bên trên nếu là mobile) */}
        <div style={{
          flex: 1,
          padding: isMobile ? '40px 20px' : '80px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <h2 style={{ fontSize: isMobile ? '28px' : '36px', marginBottom: '10px', color: '#000' }}>Welcome back</h2>
          <p style={{ marginBottom: '40px', opacity: 0.7, color: '#000' }}>Please enter your details.</p>

          {error && (
            <div style={{ 
              color: 'red', 
              marginBottom: '20px' 
            }}>
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input
              type="email"
              placeholder="Please enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none' }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a style={{ alignSelf: 'flex-end', color: '#5e81ff', cursor: 'pointer' }}>
              <Link to="/forgot-password/email" style={{ color: '#5e81ff', textDecoration: 'none' }}>
                Forgot password
              </Link>
            </a>

            <button
            type="submit"
            style={{
              marginTop: '20px',
              padding: '15px',
              borderRadius: '8px',
              border: 'none',
              background: '#5e81ff',
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Sign in
          </button>

            <p style={{ textAlign: 'center', marginTop: '20px', color: '#000' }}>
              Don't have an account? <Link to="/signup" style={{ color: '#5e81ff', fontWeight: '600' }}>Sign up</Link>
            </p>
          </form>
        </div>

        {/* Hình bên phải (Ẩn đi nếu màn hình quá nhỏ để tiết kiệm không gian) */}
        {!isMobile && (
          <div style={{
            flex: 1,
            backgroundImage: `url(${loginBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;