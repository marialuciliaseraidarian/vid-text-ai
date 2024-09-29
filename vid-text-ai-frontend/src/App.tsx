import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { TranscriptionScreen } from './pages/TranscriptionScreen';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/transcricao" element={<TranscriptionScreen />} />
      </Routes>
    </Router>
  );
}
