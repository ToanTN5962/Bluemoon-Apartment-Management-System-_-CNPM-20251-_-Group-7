import { Link } from 'react-router-dom';
import loginBg from '../assets/images/login-bg.jpg';

function LoginPage() {
  return (
    <div style={{
      background: '#0e1a2b',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div className="auth-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        maxWidth: '1200px',
        borderRadius: '30px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
      }}>
        {/* Form bên trái */}
        <div style={{ padding: '80px', background: 'white', color: '#000', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '10px' }}>Welcome back</h2>
          <p style={{ marginBottom: '40px', opacity: 0.7 }}>Please enter your details.</p>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input type="email" placeholder="Please enter your email" className="input-field" />
            <input type="password" placeholder="••••••••" className="input-field" />
            <a href="#" style={{ alignSelf: 'flex-end', color: '#5e81ff' }}>Forgot password</a>
            <button type="button" className="btn-primary" style={{ marginTop: '20px' }}>Sign in</button>
            <p style={{ textAlign: 'center', marginTop: '20px' }}>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </form>
        </div>

        {/* Hình bên phải */}
        <div style={{
          backgroundImage: `url(${loginBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
      </div>
    </div>
  );
}

export default LoginPage;