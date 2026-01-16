import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/resetPass-bg.jpg';

const FindUserPage = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchUsers = async (query = '') => {
        const trimmedQuery = query.trim();
        setLoading(true);
        setError('');

        try {
            let data;
            if (trimmedQuery === '') {
                // Lấy tất cả users từ endpoint getAll
                const response = await fetch('/api/users/');
                if (!response.ok) throw new Error('Không tải được danh sách người dùng');
                data = await response.json();
            } else {
                // Tìm kiếm với query
                const response = await fetch(`/api/users/search?q=${encodeURIComponent(trimmedQuery)}`);
                if (!response.ok) {
                    if (response.status === 400) {
                        // Nếu backend báo missing query (tránh trường hợp q= rỗng)
                        throw new Error('Vui lòng nhập từ khóa tìm kiếm');
                    }
                    throw new Error('Không tìm thấy dữ liệu');
                }
                data = await response.json();
            }

            // Normalize dữ liệu về cùng format
            const normalizedUsers = Array.isArray(data) ? data.map(user => ({
                id: user.id,
                fullName: user.fullName || '—',
                email: user.email || '—',
                phoneNum: user.phoneNum || user.phone || '—',
                isActive: user.isActive, // chỉ có khi từ getAll
                role: user.role
            })) : [];

            // Filter chỉ user active (chỉ áp dụng được cho getAll vì search chưa trả isActive)
            const activeUsers = normalizedUsers.filter(user => 
                (user.isActive === undefined || user.isActive === true) &&
                (user.role === undefined || user.role === "USER")
            );

            setUsers(activeUsers);
        } catch (err) {
            setError(err.message || 'Lỗi khi tải dữ liệu. Vui lòng thử lại.');
            setUsers([]);
        } finally {
            setLoading(false);
        }
    };

    // Load tất cả users khi mở trang
    useEffect(() => {
        fetchUsers();
    }, []);

    const handleSearch = () => {
        fetchUsers(searchQuery);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const isSearching = searchQuery.trim() !== '';

    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                position: 'relative',
                padding: '40px 20px',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Header */}
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
                <button
                    onClick={() => navigate(-1)}
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
                            fontSize: '24px',
                            marginLeft: '12px',
                            color: '#4c7cff',
                        }}
                    >
                    </button>
                </div>
            </div>

            {/* Trạng thái */}
            {loading && <p style={{ textAlign: 'center', color: 'white', fontSize: '20px', textShadow: '0 2px 8px rgba(0,0,0,0.6)', fontWeight: '600' }}>Đang tải...</p>}
            {error && <p style={{ textAlign: 'center', color: '#ff6b6b', fontSize: '20px', textShadow: '0 2px 8px rgba(0,0,0,0.6)', fontWeight: '600' }}>{error}</p>}

            {/* Danh sách users */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '30px',
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: '0 20px',
                    width: '100%',
                }}
            >
                {users.map((user) => (
                    <div
                        key={user.id}
                        style={{
                            background: 'rgba(0, 0, 128, 0.9)',
                            color: 'white',
                            padding: '32px',
                            borderRadius: '20px',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                        }}
                    >
                        <p style={{ margin: '14px 0', fontSize: '19px' }}>
                            <strong>Full name:</strong> {user.fullName}
                        </p>
                        <p style={{ margin: '14px 0', fontSize: '19px' }}>
                            <strong>Email:</strong> {user.email}
                        </p>
                        <p style={{ margin: '14px 0', fontSize: '19px' }}>
                            <strong>Phone:</strong> {user.phoneNum}
                        </p>
                    </div>
                ))}
            </div>

            {/* Thông báo không có kết quả */}
            {!loading && !error && users.length === 0 && (
                <p style={{ textAlign: 'center', color: 'white', fontSize: '24px', marginTop: '140px', textShadow: '0 2px 8px rgba(0,0,0,0.6)', fontWeight: '600' }}>
                    {isSearching ? 'Không tìm thấy người dùng nào' : 'Hệ thống chưa có người dùng active nào'}
                </p>
            )}
        </div>
    );
};

export default FindUserPage;