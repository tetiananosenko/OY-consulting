import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Blog from './pages/Blog';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import CustomSwiper from './components/CustomSwiper';
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
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/swiper' element={<CustomSwiper />}/>
      </Routes>
    </>
  );
}

export default App;
