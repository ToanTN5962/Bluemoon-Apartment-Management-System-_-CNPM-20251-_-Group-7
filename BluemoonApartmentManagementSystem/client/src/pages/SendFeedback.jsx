import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/login-bg.jpg';

function SendFeedback() {
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Quay về trang sau login
  const handleBack = () => {
    navigate('/after-login');
  };

  // Gửi phản ánh
  const handleSubmit = async () => {
    if (!content.trim()) {
      alert('Vui lòng nhập nội dung phản ánh');
      return;
    }

    setSubmitting(true);

    try{
      const token = localStorage.getItem('token');
      if (!token){
        alert('Bạn cần đăng nhập để gửi phản ánh.');
        navigate('/login');
        return;
      }

      const decoded = JSON.parse(atob(token.split('.')[1]));
      console.log('Decoded token:', decoded);

      const response = await fetch('http://localhost:3000/api/complaints/createcomplaint', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          userId: decoded.id,
          description: content,
        })
      });


      console.log('Response status:', response.status);

      if (!response.ok) {
        throw new Error('Submit failed');
      }

      const data = await response.json();
      console.log('Response data:', data);

      alert('Gửi phản ánh thành công!');
      setContent('');
      navigate('/after-login');
    } catch (err){
      console.error('Error submitting complaint:', err);
      alert('Không thể gửi phản ánh. Vui lòng thử lại.');
    } finally {
      setSubmitting(false);
    }
    

    // fetch('http://localhost:3000/api/complaints/createcomplaint', {
    //   method: 'POST',
    //   headers: { 
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${localStorage.getItem('token')}`
    //   },
    //   body: JSON.stringify({
    //     userId: JSON.parse(atob(localStorage.getItem('token').split('.')[1])).id,
    //     description: content,
    //     createdAt: new Date().toISOString(),
    //   }),
    // })
    
    //   .then(res => {
    //     if (!res.ok) throw new Error('Submit failed');
    //     alert('Gửi phản ánh thành công!');
    //     setContent('');
    //     navigate('/after-login');
    //   })
    //   .catch(() => {
    //     alert('Không thể gửi phản ánh. Vui lòng thử lại.');
    //   })
    //   .finally(() => setSubmitting(false));
  };

  /* ================= STYLES ================= */

  const pageStyle = {
    minHeight: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '40px',
  };

  const backBtnStyle = {
    background: 'rgba(255,255,255,0.85)',
    border: 'none',
    padding: '10px 22px',
    borderRadius: '30px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const boxStyle = {
    maxWidth: '1100px',
    margin: '80px auto 0',
    background: 'rgba(255,255,255,0.95)',
    borderRadius: '18px',
    padding: '30px',
    boxShadow: '0 12px 35px rgba(0,0,0,0.35)',
  };

  const textareaStyle = {
    width: '100%',
    minHeight: '280px',
    resize: 'vertical',      // kéo thả
    padding: '18px',
    fontSize: '16px',
    borderRadius: '14px',
    border: '1px solid #ccc',
    outline: 'none',
    lineHeight: '1.6',
  };

  const submitBtnStyle = {
    marginTop: '30px',
    background: '#2f855a',
    color: 'white',
    border: 'none',
    padding: '14px 46px',
    borderRadius: '30px',
    fontSize: '18px',
    cursor: submitting ? 'not-allowed' : 'pointer',
    opacity: submitting ? 0.6 : 1,
  };

  return (
    <div style={pageStyle}>
      <button onClick={handleBack} style={backBtnStyle}>
        Back to dashboard
      </button>

      <div style={boxStyle}>
        <textarea
          style={textareaStyle}
          placeholder="Type your complaint here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div style={{ textAlign: 'center' }}>
          <button onClick={handleSubmit} style={submitBtnStyle}>
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SendFeedback;
