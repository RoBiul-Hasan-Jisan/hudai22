import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import "@/styles/globals.css";

// Add custom styles for smooth scrolling
const addCustomStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    .scroll-mt-24 {
      scroll-margin-top: 6rem;
    }
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .animate-spin-slow {
      animation: spin-slow 20s linear infinite;
    }
  `;
  document.head.appendChild(style);
};

function App() {
  // Add custom styles on mount
  addCustomStyles();

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;