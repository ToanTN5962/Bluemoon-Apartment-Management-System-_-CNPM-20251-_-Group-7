import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'absolute', 
      top: 0,               
      left: 0,              
      right: 0,            
      zIndex: 10            
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <h1 style={{ fontSize: '32px', color: '#5e81ff', fontWeight: '700' }}>Bluemoon</h1>
      </div>

      <nav style={{ display: 'flex', gap: '40px', fontSize: '18px' }}>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Properties</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Residents</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>About us</a>
      </nav>

      <div style={{ display: 'flex', gap: '15px' }}>
        <Link to="/login">
          <button className="btn-outline">Log in</button>
        </Link>
        <Link to="/signup">
          <button className="btn-primary">Sign up</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;