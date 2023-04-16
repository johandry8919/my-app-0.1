import {  Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/about';
import Nav from './component/layout/Nav';
import './App.css'


function App() {
  return (
      <div className='App'>
       <Nav/>
         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
     
      
      </div>

  );
}

export default App
