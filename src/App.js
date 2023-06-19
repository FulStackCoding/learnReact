import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutNavigate" element={<Navigation />} />
      </Routes>
    </div>
  );
}

export default App;
