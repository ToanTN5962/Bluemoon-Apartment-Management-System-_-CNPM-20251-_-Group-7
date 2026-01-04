import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AfterLoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra xem user đã đăng nhập chưa
    const storedUser = localStorage.getItem('user');
    
    if (storedUser) {
      // Nếu đã đăng nhập, chuyển hướng đến UserPage
      navigate('/user', { replace: true });
    } else {
      // Nếu chưa đăng nhập, chuyển về trang login
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  // Hiển thị loading trong khi đang chuyển hướng
  return (
    <div style={{
      background: '#1a2847',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        color: 'white',
        fontSize: '20px',
        fontWeight: '600',
      }}>
        Loading...
      </div>
    </div>
  );
}

export default AfterLoginPage;