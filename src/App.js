import './App.css';
import Dashboard from './Components/Dashbaord';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import ChatBot from './Components/ChatBot';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Floating chatbot visible on all pages */}
      <ChatBot />
    </div>
  );
}

export default App;
