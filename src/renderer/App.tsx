import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import * as Home from '../screens/home';
import * as MainMenu from '../screens/main-menu';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home.Page />} />
        <Route path="/main-menu" element={<MainMenu.Page />} />
      </Routes>
    </Router>
  );
}
