import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/updateInfo-bg.jpg';

export default function AccountPage() {
  const navigate = useNavigate();

  // Dữ liệu mẫu hiển thị cố định. Trong tương lai nếu fetch với backend thì sẽ thay đổi đoạn này
  const [formData] = useState({
    fullName: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    phoneNumber1: '0901234567',
    identityNumber: '123456789',
    phoneNumber2: '0907654321',
    roomNumber: 'A-1205',
    dateOfBirth: '1995-05-20',
    familyRole: 'owner',
    status: 'permanent'
  });

  // Style chung cho các ô chỉ xem (Read-only)
  const readOnlyInputStyle = {
    flex: 1,
    padding: '18px 24px',
    fontSize: '16px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Làm mờ nhẹ nền để báo hiệu không thể sửa
    outline: 'none',
    color: '#1e3a8a',
    fontWeight: '300',
    backdropFilter: 'blur(5px)',
    cursor: 'not-allowed' // Đổi con trỏ chuột thành biểu tượng cấm
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #283664ff 50%, #162441ff 100%)' }}>
      <div style={{ width: '100%', maxWidth: '1200px', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ backdropFilter: 'blur(8px) saturate(150%)', backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '60px 80px' }}>
          
          <h2 style={{ fontSize: '42px', fontWeight: '700', color: '#4c7cff', textAlign: 'center', marginBottom: '50px' }}>
            Information
          </h2>

          <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Full Name */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              <label style={labelStyle}>Full Name</label>
              <input type="text" value={formData.fullName} readOnly style={readOnlyInputStyle} />
            </div>

            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              <label style={labelStyle}>Email</label>
              <input type="email" value={formData.email} readOnly style={readOnlyInputStyle} />
            </div>

            {/* Date of Birth */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              <label style={labelStyle}>Date of Birth</label>
              <input type="date" value={formData.dateOfBirth} readOnly style={readOnlyInputStyle} />
            </div>

            {/* Phone Numbers */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              <label style={labelStyle}>Phone Number</label>
              <input type="text" value={formData.phoneNumber1} readOnly style={readOnlyInputStyle} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              <label style={labelStyle}>Identity No.</label>
              <input type="text" value={formData.identityNumber} readOnly style={readOnlyInputStyle} />
            </div>

            {/* Room Info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              <label style={labelStyle}>Room Number</label>
              <input type="text" value={formData.roomNumber} readOnly style={readOnlyInputStyle} />
            </div>

            {/* Role & Status (Chuyển sang input text để hiển thị đẹp hơn select khi read-only) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              <label style={labelStyle}>Family Role</label>
              <input type="text" value={formData.familyRole.toUpperCase()} readOnly style={readOnlyInputStyle} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              <label style={labelStyle}>Status</label>
              <input type="text" value={formData.status.toUpperCase()} readOnly style={readOnlyInputStyle} />
            </div>

            {/* Nút quay lại thay vì nút Submit */}
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
                  cursor: 'pointer'
                }}
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

const labelStyle = {
  width: '180px',
  fontSize: '18px',
  fontWeight: '600',
  color: '#1e3a8a',
  textAlign: 'left'
};