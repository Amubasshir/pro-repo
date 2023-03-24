import { Route, Routes } from 'react-router-dom';
import Footer from '../src/components/Footer';
import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home';
function App() {
  return (
    <div className="App  bg-slate-900 text-gray-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
