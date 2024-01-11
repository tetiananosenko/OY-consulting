import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Blog from './components/Blog';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import './styles/index.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
