import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Blog from './components/Blog';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Topbar from './components/TopBar/topbar';
import './styles/index.scss';

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
