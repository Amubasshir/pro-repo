import { Route, Routes } from 'react-router-dom';
import Footer from '../src/components/Footer';
import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
  return (
    <div className="App bg-slate-900 text-gray-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
