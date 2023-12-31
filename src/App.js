import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/menu';
import List from './components/list';
import Add from './components/add';
import About from './components/about';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Menu />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="add" element={<Add />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
