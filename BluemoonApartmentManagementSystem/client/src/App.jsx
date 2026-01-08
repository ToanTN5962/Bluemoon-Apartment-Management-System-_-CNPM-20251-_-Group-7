import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPasswordEmail from './pages/ForgotPasswordEmail';     
import ForgotPasswordVerify from './pages/ForgotPasswordVerify';   
import ForgotPasswordReset from './pages/ForgotPasswordReset';     
import AfterLoginPage from './pages/AfterLoginPage';
import UserPage from './pages/UserPage';
import UpdateInfoPage from './pages/UpdateInfoPage';
import AdminPage from './pages/AdminPage';
import AccountPage from './pages/AccountPage';
import VerifyUserPage from './pages/VerifyUserPage';
import FeePage from './pages/FeePage';
import CreateFeePage from './pages/CreateFeePage';
import HandleComplaints from './pages/HandleComplaints';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password/email" element={<ForgotPasswordEmail />} />
        <Route path="/forgot-password/verify" element={<ForgotPasswordVerify />} />
        <Route path="/forgot-password/reset" element={<ForgotPasswordReset />} />
        <Route path="/after-login" element={<AfterLoginPage/>} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/update-info" element={<UpdateInfoPage/>}/>
        <Route path="/account" element={<AccountPage/>}/>
        <Route path="/admin/verified-user" element={<VerifyUserPage/>}/>
        <Route path="/admin/fee" element={<FeePage/>}/>
        <Route path="/admin/create-fee" element={<CreateFeePage/>}/>
        <Route path="/admin/complaints" element={<HandleComplaints />} />

      </Routes>
    </Router>
  );
}

export default App;
