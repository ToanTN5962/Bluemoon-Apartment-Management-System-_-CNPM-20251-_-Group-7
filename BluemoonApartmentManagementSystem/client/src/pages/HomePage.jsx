import Header from '../components/layout/Header';
import homeBg from '../assets/images/home-bg.jpg';

function HomePage() {
  return (
    <div style={{
      backgroundImage: `url(${homeBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header />
      <div style={{
        textAlign: 'center',
        paddingTop: '150px',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <p style={{ fontSize: '18px', background: 'rgba(255,255,255,0.2)', padding: '8px 20px', borderRadius: '30px', display: 'inline-block', marginBottom: '20px' }}>
          ⭐ RATED #1 IN LUXURY MANAGEMENT
        </p>
        <h1 style={{ fontSize: '60px', marginBottom: '20px' }}>
          Elevated Living.<br />
          <span style={{ color: '#5e81ff' }}>Effortlessly Managed.</span>
        </h1>
        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9 }}>
          Experience the pinnacle of apartment living. Smart tools, seamless payments - all in one app.
        </p>
        <button className="btn-primary" style={{ fontSize: '20px', padding: '18px 50px' }}>
          Find Your Home
        </button>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        marginTop: '100px',
        paddingBottom: '80px',
        flexWrap: 'wrap'
      }}>
        <div className="stats-card">
          <h2 style={{ fontSize: '40px' }}>1,500+</h2>
          <p>Premium Units Managed</p>
        </div>
        <div className="stats-card">
          <h2 style={{ fontSize: '40px' }}>98%</h2>
          <p>Resident Satisfaction</p>
        </div>
        <div className="stats-card">
          <h2 style={{ fontSize: '40px' }}>5</h2>
          <p>Major Cities</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;