
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import { useAuth } from './helpers/AuthContext';
import Navbar from './components/Navbar';

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <Router>
      {isLoggedIn ? <Navbar /> : null}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
