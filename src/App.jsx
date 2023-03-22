import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Footer from '../src/components/Footer';
import Navbar from '../src/components/Navbar';
function App() {
  return (
    <div className="App bg-slate-900 text-gray-200 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
