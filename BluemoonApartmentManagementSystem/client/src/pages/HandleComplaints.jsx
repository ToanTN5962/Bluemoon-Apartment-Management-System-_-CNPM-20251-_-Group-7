import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/login-bg.jpg';

function HandleComplaints() {
  const navigate = useNavigate();
  const [currentAdmin, setCurrentAdmin] = useState(null);
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    // Check auth
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login');
      return;
    }
    setCurrentAdmin(JSON.parse(storedUser));

    const getComplaints = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/complaints/getall');
        if (!response.ok) throw new Error('Failed to fetch complaints');
        const data = await response.json();
        setComplaints(data);
      } catch (err) {
        console.error('Fetch complaints error:', err);
      } finally {
        setLoading(false);
      }
    };

    getComplaints();
  }, [navigate]);

  // Đóng dropdown khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(null);
    if (openDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [openDropdown]);

  const handleRemove = async (id) => {
    try {
      const storedUser = JSON.parse(localStorage.getItem('user'));

      const response = await fetch(
        `http://localhost:3000/api/complaints/${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${storedUser.token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Delete failed');
      }

      // Xoá khỏi UI sau khi backend xoá thành công
      setComplaints(prev => prev.filter(c => c.id !== id));
    } catch (err) {
      console.error('Delete complaint error:', err);
      alert('Xoá khiếu nại thất bại');
    }
  };


  const handleStatusChange = async (id, newStatus) => {
    try {
      // Gọi API để cập nhật trạng thái (nếu có)
      // await fetch(`http://localhost:3000/api/complaints/${id}`, {
      //   method: 'PATCH',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ status: newStatus })
      // });

      // Cập nhật local state
      setComplaints(prev => prev.map(c =>
        c.id === id ? { ...c, status: newStatus } : c
      ));
      setOpenDropdown(null);
    } catch (err) {
      console.error('Update status error:', err);
    }
  };

  const handleBack = () => navigate('/admin');
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  /* ================== STYLES ================== */

  const backgroundStyle = {
    minHeight: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    padding: '40px 20px',
  };

  const headerStyle = {
    maxWidth: '1400px',
    margin: '0 auto 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const backBtnStyle = {
    padding: '12px 26px',
    fontSize: '18px',
    background: 'rgba(255,255,255,0.25)',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    backdropFilter: 'blur(10px)',
  };

  const titleStyle = {
    textAlign: 'center',
    color: 'white',
    fontSize: '36px',
    marginBottom: '40px',
    textShadow: '2px 2px 10px rgba(0,0,0,0.8)',
  };

  const listStyle = {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  };

  const cardStyle = {
    position: 'relative',
    background: 'rgba(15, 40, 120, 0.9)',
    color: 'white',
    padding: '26px 60px 26px 26px',
    borderRadius: '16px',
    boxShadow: '0 12px 35px rgba(0,0,0,0.45)',
    backdropFilter: 'blur(6px)',
  };

  const actionContainerStyle = {
    position: 'absolute',
    top: '16px',
    right: '16px',
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  };

  const removeBtnStyle = {
    padding: '8px 16px',
    borderRadius: '8px',
    border: 'none',
    background: '#ef4444',
    color: 'white',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'all 0.2s',
  };

  const dropdownContainerStyle = {
    position: 'relative',
  };

  const statusBtnStyle = (status) => ({
    padding: '8px 16px',
    borderRadius: '8px',
    border: 'none',
    background: status === 'SOLVED' ? '#10b981' : '#f59e0b',
    color: 'white',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  });

  const dropdownMenuStyle = {
    position: 'absolute',
    top: '100%',
    right: '0',
    marginTop: '8px',
    background: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    overflow: 'hidden',
    minWidth: '140px',
    zIndex: 10,
  };

  const dropdownItemStyle = {
    padding: '10px 16px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    border: 'none',
    width: '100%',
    textAlign: 'left',
    transition: 'all 0.2s',
  };

  return (
    <div style={backgroundStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <button onClick={handleBack} style={backBtnStyle}>
          Back to dashboard
        </button>
      </div>

      <h1 style={titleStyle}>Danh sách phản ánh / khiếu nại</h1>

      {loading ? (
        <p style={{ textAlign: 'center', color: 'white', fontSize: '24px' }}>
          Đang tải dữ liệu...
        </p>
      ) : complaints.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'white', fontSize: '24px' }}>
          Không có khiếu nại nào
        </p>
      ) : (
        <div style={listStyle}>
          {complaints.map(item => (
            <div key={item.id} style={cardStyle}>
              <div style={actionContainerStyle}>
                {/* Remove Button */}
                <button
                  style={removeBtnStyle}
                  onClick={() => handleRemove(item.id)}
                  onMouseEnter={(e) => e.target.style.background = '#dc2626'}
                  onMouseLeave={(e) => e.target.style.background = '#ef4444'}
                >
                  Remove
                </button>

                {/* Status Dropdown */}
                <div style={dropdownContainerStyle}>
                  <button
                    style={statusBtnStyle(item.status)}
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenDropdown(openDropdown === item.id ? null : item.id);
                    }}
                  >
                    {item.status || 'UNSOLVED'}
                    <span style={{ fontSize: '12px' }}>▼</span>
                  </button>

                  {openDropdown === item.id && (
                    <div style={dropdownMenuStyle}>
                      <button
                        style={{
                          ...dropdownItemStyle,
                          background: 'transparent',
                          color: '#f59e0b',
                        }}
                        onClick={() => handleStatusChange(item.id, 'UNSOLVED')}
                        onMouseEnter={(e) => e.target.style.background = '#fef3c7'}
                        onMouseLeave={(e) => e.target.style.background = 'transparent'}
                      >
                        UNSOLVED
                      </button>
                      <button
                        style={{
                          ...dropdownItemStyle,
                          background: 'transparent',
                          color: '#10b981',
                        }}
                        onClick={() => handleStatusChange(item.id, 'SOLVED')}
                        onMouseEnter={(e) => e.target.style.background = '#d1fae5'}
                        onMouseLeave={(e) => e.target.style.background = 'transparent'}
                      >
                        SOLVED
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {item.title && (
                <h3 style={{ marginBottom: '10px', fontSize: '18px' }}>
                  {item.title}
                </h3>
              )}
              {item.content && (
                <p style={{ lineHeight: 1.6, opacity: 0.95 }}>
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HandleComplaints;