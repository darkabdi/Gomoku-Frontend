import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import Gomoku from './components/Gomoku';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to our game</h1>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/gomoku" element={<Gomoku />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
