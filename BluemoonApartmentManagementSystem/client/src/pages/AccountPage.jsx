import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/updateInfo-bg.jpg';

export default function AccountPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const getInfo = async () => {
      try {
        setLoading(true); 
        const token = localStorage.getItem('token');
        
        if (!token) {
          setError('No token found. Please login again.');
          setLoading(false);
          return;
        }

        console.log('Sending request with token:', token);
        
        const response = await fetch('http://localhost:3000/api/auth/getinfo', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        console.log('Response status:', response.status); 

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Received data:', data); 
        
        setFormData(data);
        setError('');
      } catch(err) {
        console.error("Error fetching user info:", err);
        setError('Failed to load user information. Please try again.');
      } finally {
        setLoading(false); 
      }
    };

    getInfo();
  }, []);

  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        background: 'linear-gradient(135deg, #1e3a8a 0%, #283664ff 50%, #162441ff 100%)' 
      }}>
        <div style={{ 
          textAlign: 'center', 
          color: 'white', 
          fontSize: '24px', 
          fontWeight: '600' 
        }}>
          <div style={{ marginBottom: '20px' }}>Đang tải thông tin...</div>
          <div style={{ 
            width: '50px', 
            height: '50px', 
            border: '5px solid rgba(255,255,255,0.3)', 
            borderTop: '5px solid white', 
            borderRadius: '50%', 
            animation: 'spin 1s linear infinite',
            margin: '0 auto'
          }}></div>
        </div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        background: 'linear-gradient(135deg, #1e3a8a 0%, #283664ff 50%, #162441ff 100%)' 
      }}>
        <div style={{ 
          textAlign: 'center', 
          color: 'white', 
          maxWidth: '500px',
          padding: '40px',
          backgroundColor: 'rgba(220, 38, 38, 0.2)',
          borderRadius: '20px',
          border: '2px solid rgba(220, 38, 38, 0.5)'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>⚠️</div>
          <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px' }}>{error}</div>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '12px 40px',
              fontSize: '16px',
              fontWeight: '600',
              color: 'white',
              backgroundColor: '#4c7cff',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              marginTop: '20px'
            }}
          >
            Thử lại
          </button>
        </div>
      </div>
    );
  }

  if (!formData) {
    return <div style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>No data available</div>;
  }

  const readOnlyInputStyle = {
    flex: 1,
    padding: '18px 24px',
    fontSize: '16px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    outline: 'none',
    color: '#1e3a8a',
    fontWeight: '300',
    backdropFilter: 'blur(5px)',
    cursor: 'not-allowed'
  };

  const labelStyle = {
    width: '180px',
    fontSize: '18px',
    fontWeight: '600',
    color: '#1e3a8a',
    textAlign: 'left'
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #283664ff 50%, #162441ff 100%)' }}>
      <div style={{ width: '100%', maxWidth: '1200px', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ backdropFilter: 'blur(8px) saturate(150%)', backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '60px 80px' }}>
          
          <h2 style={{ fontSize: '42px', fontWeight: '700', color: '#4c7cff', textAlign: 'center', marginBottom: '50px' }}>
            Information
          </h2>

          <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              <label style={labelStyle}>Full Name</label>
              <input type="text" value={formData.user.fullName || formData.name || ''} readOnly style={readOnlyInputStyle} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              <label style={labelStyle}>Email</label>
              <input type="email" value={formData.user.email || ''} readOnly style={readOnlyInputStyle} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              <label style={labelStyle}>Date of Birth</label>
              <input type="date" value={formData.user.dateOfBirth || ''} readOnly style={readOnlyInputStyle} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              <label style={labelStyle}>Phone Number</label>
              <input type="text" value={formData.user.phoneNum || formData.user.phone || ''} readOnly style={readOnlyInputStyle} />
            </div>

            {formData.user.role !== 'ADMIN' && (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                  <label style={labelStyle}>Identity No.</label>
                  <input type="text" value={formData.resident.identificationNumber || ''} readOnly style={readOnlyInputStyle} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                  <label style={labelStyle}>Room Number</label>
                  <input type="text" value={formData.household.roomNumber || ''} readOnly style={readOnlyInputStyle} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                  <label style={labelStyle}>Family Role</label>
                  <input type="text" value={(formData.household.owner == formData.user.fullName) ? 'Owner' : 'Family Member'} readOnly style={readOnlyInputStyle} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                  <label style={labelStyle}>Status</label>
                  <input type="text" value={formData.resident.status ? formData.resident.status.toUpperCase() : (formData.isActive ? 'ACTIVE' : 'INACTIVE')} readOnly style={readOnlyInputStyle} />
                </div>
              </>
            )}

            

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
              <button 
                onClick={() => navigate(-1)}
                style={{
                  padding: '15px 60px',
                  fontSize: '18px',
                  fontWeight: '700',
                  color: 'white',
                  backgroundColor: '#4c7cff',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#3d5fd1'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#4c7cff'}
              >
                Back to dashboard
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}