import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from '../src/components/Footer';
import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home';
import { useAuthContext } from './hooks/useAuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
  const { user } = useAuthContext();

  return (
    <div className="App bg-slate-900 text-gray-200">
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
