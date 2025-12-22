import {Link, useNavigate } from 'react-router-dom';
import resetPass from '../assets/images/resetPass-bg.jpg';

function ForgotPasswordReset() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Gọi API update password
    alert('Password changed successfully!');
    navigate('/login');
  };

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
        <div style={{ padding: '80px', background: 'white', color: '#000', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '10px' }}>New Password</h2>
          <p style={{ marginBottom: '40px', opacity: 0.7 }}>Enter your new password.</p>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600' }}>New password</label>
              <input type="password" required className="input-field" style={{ padding: '20px', borderRadius: '30px' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600' }}>Validate password</label>
              <input type="password" required className="input-field" style={{ padding: '20px', borderRadius: '30px' }} />
            </div>
            <button type="submit" className="btn-primary" style={{ background: '#2e8b57', padding: '16px' }}>
              Submit
            </button>
            <p style={{ textAlign: 'center' }}>
              <Link to="/login">Back to Login</Link>
            </p>
          </form>
        </div>

        <div style={{
          backgroundImage: `url(${resetPass})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
      </div>
    </div>
  );
}

export default ForgotPasswordReset;