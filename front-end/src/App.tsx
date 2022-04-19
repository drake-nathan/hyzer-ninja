import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';

const App = () => (
  <Routes>
    <Route path="/" element={<NavBar />} />
  </Routes>
);

export default App;
