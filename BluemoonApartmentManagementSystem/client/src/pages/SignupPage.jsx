import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import signupBg from '../assets/images/signup-bg.jpg';

function SignupPage() {
  // Theo dõi chiều rộng màn hình để xử lý Responsive
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  const handleSignup = async(e) => {
    e.preventDefault();

    // Gửi yêu cầu đăng ký đến backend
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({fullName: username, email, password, phoneNum}),
      });

      const data = await response.json();
      
      if(!response.ok){
        alert(data.message || "Signup failed");
        return;
      }
      else {
        alert("Signup successful! Please log in.");
      }

    } catch (error) {
      console.error("Error during signup:", error);
    }
  }

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  return (
    <div style={{
      background: '#0e1a2b',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '10px' : '20px'
    }}>
      <div className="auth-grid" style={{
        display: 'flex',
        flexDirection: isMobile ? 'column-reverse' : 'row', // Đưa Form lên trên ảnh khi ở mobile
        width: '100%',
        maxWidth: '1200px',
        borderRadius: '30px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        background: 'white'
      }}>
        
        {/* Hình bên trái (Ẩn trên mobile để form không bị đẩy xuống quá sâu) */}
        {!isMobile && (
          <div style={{
            flex: 1,
            backgroundImage: `url(${signupBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '600px'
          }}></div>
        )}

        {/* Form bên phải */}
        <div style={{ 
          flex: 1, 
          padding: isMobile ? '40px 20px' : '60px 80px', 
          background: 'white', 
          color: '#000',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <h2 style={{ fontSize: isMobile ? '28px' : '36px', marginBottom: '10px' }}>Get started now</h2>
          <p style={{ marginBottom: '30px', opacity: 0.7 }}>Please enter your details.</p>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }} onSubmit={handleSignup}>
            <input type="text" placeholder="Please enter your name" style={inputStyle} value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="Please enter your email" style={inputStyle} value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" style={inputStyle} value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Confirm Password" style={inputStyle} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <input type="tel" placeholder="Phone number" style={inputStyle} value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} />
            
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', cursor: 'pointer' }}>
              <input type="checkbox" required style={{ width: '18px', height: '18px' }} />
              <span>I agree to the Term & Privacy</span>
            </label>
            
            <button 
              type="submit" 
              style={{ 
                marginTop: '10px', 
                padding: '15px', 
                borderRadius: '12px', 
                border: 'none', 
                background: '#000', 
                color: 'white', 
                fontWeight: 'bold', 
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Sign up
            </button>
            
            <p style={{ textAlign: 'center', marginTop: '20px' }}>
              Have an account? <Link to="/login" style={{ color: '#5e81ff', fontWeight: 'bold', textDecoration: 'none' }}>Log in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

// Style chung cho các ô input để code gọn hơn
const inputStyle = {
  padding: '15px',
  borderRadius: '10px',
  border: '1px solid #eee',
  background: '#f8f9fa',
  outline: 'none',
  fontSize: '14px'
};

export default SignupPage;