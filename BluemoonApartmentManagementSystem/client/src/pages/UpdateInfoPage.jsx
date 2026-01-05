import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/updateInfo-bg.jpg';
import { household, user } from '../../../server/src/prisma/client';

export default function UpdateInfoPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userId: '',
    fullName: '',
    email: '',
    phoneNum: '',
    identityNumber: '',
    roomNumber: '',
    householdId: '',
    dateOfBirth: '',
    familyRole: 'OWNER',
    status: 'PERMANENT'
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login');
      return;
    }
    try {
      const userData = JSON.parse(storedUser);
      const actualId = userData.user ? userData.user.id : userData.id;
      const actualEmail = userData.user ? userData.user.email : userData.email;
      
      setFormData(prev => ({
        ...prev,
        userId: actualId,  
        email: actualEmail || ''
      }));
    } catch (err) {
      console.error('Error parsing user data from localStorage:', err);
      navigate('/login');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    
    if (!formData.fullName.trim()) {
      return alert('Please enter your full name');
    }
    if (!formData.dateOfBirth) {
      return alert ('Please enter your date of birth');
    }
    if (!formData.identityNumber.trim()) {
      return alert('Please enter your identity number');
    }
    if (!formData.roomNumber.trim()) {
      return alert('Please enter your room number');
    }

    setLoading(true);

    const payload = {
      userID: parseInt(formData.userId),
      fullName: formData.fullName,
      email: formData.email,
      phoneNum: formData.phoneNum,
      identificationNumber: formData.identityNumber,
      roomNumber: formData.roomNumber,
      householdId: parseInt(formData.householdId),
      dateOfBirth: formData.dateOfBirth,
      familyRole: formData.familyRole,
      status: formData.status
    };

    try {
      const response = await fetch('http://localhost:3000/api/user/request-update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert('Request submitted successfully. Please wait for admin approval.');
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
          backdropFilter: 'blur(5px) saturate(150%)',
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
                placeholder="Your email"
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
                name="phoneNum"
                value={formData.phoneNum}
                onChange={handleChange}
                placeholder="************ (Optional)"
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

            {/* Identification Number */}
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
                Identification Number
              </label>
              <input
                type="text"
                name="identificationNumber"
                value={formData.identificationNumber}
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

          {/* status */}
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
                status
              </label>
              <select
                name="statusRole"
                value={formData.statusRole}
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
                <option value="owner">Permanent</option>
                <option value="member">Temporary</option>
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