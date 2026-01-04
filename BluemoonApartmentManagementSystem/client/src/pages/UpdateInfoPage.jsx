import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/updateInfo-bg.jpg';

export default function UpdateInfoPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber1: '',
    identityNumber: '',
    phoneNumber2: '',
    roomNumber: '',
    DOB: '',
    familyRole: 'owner'
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login');
      return;
    }

    const userData = JSON.parse(storedUser);
    setFormData(prev => ({
      ...prev,
      email: userData.email || ''
    }));
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.fullName.trim()) {
      alert('Please enter your full name');
      return;
    }
    if (!formData.dateOfBirth.trim()) {
      alert('Please enter your date of birth');
      return;
    }
    if (!formData.phoneNumber1.trim()) {
      alert('Please enter your phone number');
      return;
    }
    if (!formData.identityNumber.trim()) {
      alert('Please enter your identity number');
      return;
    }
    if (!formData.roomNumber.trim()) {
      alert('Please enter your room number');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/user/update-info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert('Information updated successfully!');
        navigate('/user');
      } else {
        alert(data.message || 'Update failed. Please try again.');
      }
    } catch (err) {
      console.error('Update error:', err);
      alert('Cannot connect to server. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'linear-gradient(135deg, #1e3a8a 0%, #283664ff 50%, #162441ff 100%)'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          borderRadius: '30px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(142, 139, 139, 0.3)',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        {/* Overlay với backdrop blur */}
        <div style={{
          backdropFilter: 'blur(1px) saturate(150%)',
          backgroundColor: 'rgba(255, 255, 255, 0)',
          padding: '60px 80px',
          minHeight: '700px'
        }}>

          {/* Logo Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '40px'
          }}>
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#4c7cff" strokeWidth="2">
              <rect x="4" y="2" width="7" height="20" />
              <rect x="13" y="6" width="7" height="16" />
              <path d="M6 8h2M6 12h2M6 16h2M15 10h2M15 14h2M15 18h2" />
            </svg>
            <h1 style={{
              fontSize: '42px',
              fontWeight: '700',
              color: '#4c7cff',
              margin: 0
            }}>
              Bluemoon
            </h1>
          </div>

          {/* Title */}
          <h2 style={{
            fontSize: '48px',
            fontWeight: '700',
            color: '#4c7cff',
            textAlign: 'center',
            marginBottom: '50px',
            lineHeight: '1.2'
          }}>
            Information Update Form
          </h2>

          {/* Form Container */}
          <div style={{
            maxWidth: '700px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '25px'
          }}>

            {/* Full Name */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '30px'
            }}>
              <label style={{
                width: '180px',
                fontSize: '18px',
                fontWeight: '600',
                color: '#1e3a8a',
                textAlign: 'left'
              }}>
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Please enter your name"
                style={{
                  flex: 1,
                  padding: '18px 24px',
                  fontSize: '16px',
                  border: '2px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                  outline: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0)',
                  color: '#1e3a8a',
                  fontWeight: '500',
                  backdropFilter: 'blur(5px)'
                }}
              />
            </div>

            {/* Email */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '30px'
            }}>
              <label style={{
                width: '180px',
                fontSize: '18px',
                fontWeight: '600',
                color: '#1e3a8a',
                textAlign: 'left'
              }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Please enter your email"
                //disabled
                style={{
                  flex: 1,
                  padding: '18px 24px',
                  fontSize: '16px',
                  border: '2px solid rgba(255, 255, 255, 0.4)',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(240, 240, 240, 0)',
                  outline: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  color: '#1e3a8a',
                  fontWeight: '500',
                  backdropFilter: 'blur(5px)',
                  //cursor: 'not-allowed'
                }}
              />
            </div>

            {/* Date of Birth */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '30px'
            }}>
              <label style={{
                width: '180px',
                fontSize: '18px',
                fontWeight: '600',
                color: '#1e3a8a',
                textAlign: 'left'
              }}>
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                style={{
                  flex: 1,
                  padding: '18px 24px',
                  fontSize: '16px',
                  border: '2px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                  outline: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0)',
                  color: '#1e3a8a',
                  fontWeight: '500',
                  backdropFilter: 'blur(5px)',
                  cursor: 'pointer'
                }}
              />
            </div>
            {/* Phone Number */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '30px'
            }}>
              <label style={{
                width: '180px',
                fontSize: '18px',
                fontWeight: '600',
                color: '#1e3a8a',
                textAlign: 'left'
              }}>
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber1"
                value={formData.phoneNumber1}
                onChange={handleChange}
                placeholder="************"
                style={{
                  flex: 1,
                  padding: '18px 24px',
                  fontSize: '16px',
                  border: '2px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                  outline: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  color: '#1e3a8a'
                }}
              />
            </div>

            {/* Identity Number */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '30px'
            }}>
              <label style={{
                width: '180px',
                fontSize: '18px',
                fontWeight: '600',
                color: '#1e3a8a',
                textAlign: 'left'
              }}>
                Identity Number
              </label>
              <input
                type="text"
                name="identityNumber"
                value={formData.identityNumber}
                onChange={handleChange}
                placeholder="************"
                style={{
                  flex: 1,
                  padding: '18px 24px',
                  fontSize: '16px',
                  border: '2px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                  outline: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  color: '#1e3a8a'
                }}
              />
            </div>

            {/* Phone Number 2 */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '30px'
            }}>
              <label style={{
                width: '180px',
                fontSize: '18px',
                fontWeight: '600',
                color: '#1e3a8a',
                textAlign: 'left'
              }}>
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber2"
                value={formData.phoneNumber2}
                onChange={handleChange}
                placeholder="************"
                style={{
                  flex: 1,
                  padding: '18px 24px',
                  fontSize: '16px',
                  border: '2px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                  outline: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  color: '#1e3a8a'
                }}
              />
            </div>

            {/* Room Number */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '30px'
            }}>
              <label style={{
                width: '180px',
                fontSize: '18px',
                fontWeight: '600',
                color: '#1e3a8a',
                textAlign: 'left'
              }}>
                Room Number
              </label>
              <input
                type="text"
                name="roomNumber"
                value={formData.roomNumber}
                onChange={handleChange}
                placeholder="************"
                style={{
                  flex: 1,
                  padding: '18px 24px',
                  fontSize: '16px',
                  border: '2px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                  outline: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  color: '#1e3a8a'
                }}
              />
            </div>

            {/* Family Role */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '30px'
            }}>
              <label style={{
                width: '180px',
                fontSize: '18px',
                fontWeight: '600',
                color: '#1e3a8a',
                textAlign: 'left'
              }}>
                Family Role
              </label>
              <select
                name="familyRole"
                value={formData.familyRole}
                onChange={handleChange}
                style={{
                  flex: 1,
                  padding: '18px 24px',
                  fontSize: '16px',
                  border: '2px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                  outline: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0)',
                  color: '#1e3a8a',
                  fontWeight: '500',
                  backdropFilter: 'blur(5px)',
                  cursor: 'pointer'
                }}
              >
                <option value="owner">Owner</option>
                <option value="member">Member</option>
              </select>
            </div>

            {/* Submit Button */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '30px'
            }}>
              <button
                onClick={handleSubmit}
                disabled={loading}
                style={{
                  padding: '20px 80px',
                  fontSize: '22px',
                  fontWeight: '700',
                  color: 'white',
                  backgroundColor: '#4c7cff',
                  border: 'none',
                  borderRadius: '15px',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  boxShadow: '0 8px 20px rgba(76, 124, 255, 0.4)',
                  transition: 'all 0.3s ease',
                  opacity: loading ? 0.7 : 1
                }}
                onMouseOver={(e) => {
                  if (!loading) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(76, 124, 255, 0.5)';
                  }
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(76, 124, 255, 0.4)';
                }}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}