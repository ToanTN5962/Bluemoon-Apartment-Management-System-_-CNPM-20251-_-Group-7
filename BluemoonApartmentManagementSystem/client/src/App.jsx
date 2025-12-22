import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPasswordEmail from './pages/ForgotPasswordEmail';     
import ForgotPasswordVerify from './pages/ForgotPasswordVerify';   
import ForgotPasswordReset from './pages/ForgotPasswordReset';     

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
      </Routes>
    </Router>
  );
}

export default App;