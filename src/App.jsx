import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import './styles/index.scss';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/main-page/men" element={<MainPage />} />  */}
      </Routes>
    </>
  );
}

export default App;
