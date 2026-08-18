import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/layout/Navbar';
import Home from './page/Home';
import AllProjects from './component/layout/AllProjects';

function App() {
  return (
    <div className="bg-[#0b0f2c] min-h-screen text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
    </div>
  );
}

export default App;