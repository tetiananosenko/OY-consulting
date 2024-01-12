import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Blog from './components/Blog';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import './styles/index.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path='*' element={<NotFound />}/> */}
      </Routes>
    </>
  );
}

export default App;
