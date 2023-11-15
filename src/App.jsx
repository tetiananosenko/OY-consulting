import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import './styles/index.scss';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
