import { Link } from 'react-router-dom';
import signupBg from '../assets/images/signup-bg.jpg';

function SignupPage() {
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
        {/* Hình bên trái */}
        <div style={{
          backgroundImage: `url(${signupBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>

        {/* Form bên phải */}
        <div style={{ padding: '80px', background: 'white', color: '#000' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '10px' }}>Get started now</h2>
          <p style={{ marginBottom: '40px', opacity: 0.7 }}>Please enter your details.</p>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input type="text" placeholder="Please enter your name" className="input-field" />
            <input type="email" placeholder="Please enter your email" className="input-field" />
            <input type="password" placeholder="••••••••" className="input-field" />
            <input type="password" placeholder="••••••••" className="input-field" />
            <input type="tel" placeholder="Phone number" className="input-field" />
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input type="checkbox" required />
              <span>I agree to the Term & Privacy</span>
            </label>
            <button type="button" className="btn-primary" style={{ marginTop: '20px' }}>Sign up</button>
            <p style={{ textAlign: 'center', marginTop: '20px' }}>
              Have an account? <Link to="/login">Log in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;