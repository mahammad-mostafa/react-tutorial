import { Route, Routes } from 'react-router-dom';
import Menu from './components/menu';
import List from './components/list';
import Add from './components/add';
import About from './components/about';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add" element={<Add />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
