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
import SendFeedback from './pages/SendFeedback'
import CheckFee from './pages/CheckFee';
import UpdateFeePage from './pages/UpdateFeePage';
import AfterFeePage from './pages/AfterFeePage';
import FindUserPage from './pages/FindUserPage';

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
        <Route path="/send-feedback" element={<SendFeedback />} />
        <Route path="/check-fees" element={<CheckFee />} />
        <Route path="/admin/update-fee" element={<UpdateFeePage/>} />
        <Route path="/admin/check-fee" element={<AfterFeePage/>} />
        <Route path="/admin/find-user" element={<FindUserPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
