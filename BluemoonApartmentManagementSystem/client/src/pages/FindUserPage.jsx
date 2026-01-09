import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/resetPass-bg.jpg'; // Thay đường dẫn/tên file nếu khác (ví dụ: Admin-bg.jpg nếu muốn dùng chung)

const FindUserPage = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        if (!searchQuery.trim()) {
            setUsers([]);
            return;
        }

        setLoading(true);
        setError('');
        try {
            // Thay đổi URL này thành API thực tế của backend
            const response = await fetch(`/api/users/search?q=${encodeURIComponent(searchQuery.trim())}`);
            if (!response.ok) throw new Error('Không tìm thấy dữ liệu');
            const data = await response.json();
            // Giả sử backend trả về mảng [{ fullName, phone, email }]
            setUsers(Array.isArray(data) ? data : [data]);
        } catch (err) {
            setError('Lỗi khi tìm kiếm. Vui lòng thử lại.');
            setUsers([]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundImage: `url(${backgroundImage})`, // Sử dụng ảnh import từ file local
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                position: 'relative',
                padding: '40px 20px',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Header: Back button và ô tìm kiếm */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '60px',
                    flexWrap: 'wrap',
                    gap: '20px',
                    maxWidth: '1400px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                {/* Nút Back to dashboard - style nhất quán với AdminPage */}
                <button
                    onClick={() => navigate(-1)} // Quay lại AdminPage
                    style={{
                        background: 'rgba(255, 255, 255, 0.92)',
                        border: 'none',
                        padding: '14px 32px',
                        borderRadius: '30px',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        boxShadow: '0 8px 20px rgba(76, 124, 255, 0.3)',
                        color: '#68696cff',
                        transition: 'all 0.3s ease',
                        backdropFilter: 'blur(6px)',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                    Back to dashboard
                </button>

                {/* Ô tìm kiếm - style nhất quán hơn */}
                <div
                    style={{
                        background: 'rgba(255, 255, 255, 0.92)',
                        padding: '14px 28px',
                        borderRadius: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        minWidth: '380px',
                        boxShadow: '0 8px 20px rgba(76, 124, 255, 0.3)',
                        backdropFilter: 'blur(6px)',
                    }}
                >
                    <span style={{ marginRight: '12px', fontWeight: 'bold', color: '#333' }}>Search:</span>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="Email or Phone"
                        style={{
                            border: 'none',
                            outline: 'none',
                            background: 'transparent',
                            fontSize: '16px',
                            width: '100%',
                            color: '#333',
                        }}
                    />
                    <button
                        onClick={handleSearch}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '22px',
                            marginLeft: '12px',
                            color: '#4c7cff',
                        }}
                    >
                    </button>
                </div>
            </div>

            {/* Thông báo trạng thái */}
            {loading && <p style={{ textAlign: 'center', color: 'white', fontSize: '20px', textShadow: '0 2px 8px rgba(0,0,0,0.6)', fontWeight: '600' }}>Đang tìm kiếm...</p>}
            {error && <p style={{ textAlign: 'center', color: '#ff6b6b', fontSize: '20px', textShadow: '0 2px 8px rgba(0,0,0,0.6)', fontWeight: '600' }}>{error}</p>}

            {/* Kết quả tìm kiếm - Masonry layout */}
            {/* Kết quả tìm kiếm - Grid layout thay cho Masonry */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', // Tự động chia cột đều nhau
                    gap: '30px',
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: '0 20px',
                    width: '100%', // Đảm bảo chiếm hết chiều ngang
                }}
            >
                {users.map((user) => (
                    <div
                        key={user.id}
                        style={{
                            background: 'rgba(0, 0, 128, 0.9)', // Thêm chút trong suốt cho đẹp
                            color: 'white',
                            padding: '32px',
                            borderRadius: '20px',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                            // Loại bỏ breakInside và display: inline-block cũ
                        }}
                    >
                        <p style={{ margin: '14px 0', fontSize: '19px' }}>
                            <strong>Full name:</strong> {user.fullName || '—'}
                        </p>

                        <p style={{ margin: '14px 0', fontSize: '19px' }}>
                            <strong>Email:</strong> {user.email || '—'}
                        </p>

                        <p style={{ margin: '14px 0', fontSize: '19px' }}>
                            <strong>Phone:</strong> {user.phoneNum || '—'}
                        </p>
                    </div>
                ))}
            </div>

            {/* Thông báo khi chưa tìm kiếm */}
            {!loading && users.length === 0 && !error && searchQuery === '' && (
                <p style={{ textAlign: 'center', color: 'white', fontSize: '24px', marginTop: '140px', textShadow: '0 2px 8px rgba(0,0,0,0.6)', fontWeight: '600' }}>
                    Nhập email hoặc số điện thoại để tìm kiếm người dùng
                </p>
            )}

            {/* Thông báo khi không có kết quả */}
            {!loading && users.length === 0 && !error && searchQuery !== '' && (
                <p style={{ textAlign: 'center', color: 'white', fontSize: '24px', marginTop: '140px', textShadow: '0 2px 8px rgba(0,0,0,0.6)', fontWeight: '600' }}>
                    Không tìm thấy người dùng nào
                </p>
            )}
        </div>
    );
};

export default FindUserPage;