import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './views/Home/Home';
import About from './views/About/About';
import Work from './views/Work/Work';
import Contact from './views/Contact/Contact';


function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/work' element={<Work />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
