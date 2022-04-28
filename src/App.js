
import './App.css';
import { BrowserRouter, Routes, Link,Route, Router } from 'react-router-dom';
import Auth from './components/Auth'
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Protected from './components/Protected';
import Listing from './components/Lisiting'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Auth/>}></Route>
     <Route path="/home" element={<Protected cmp={Home}/>}></Route>
     <Route path="/about" element={<Protected cmp={About}/>} ></Route>
     <Route path="/listing" element={<Protected cmp={Listing}/>} ></Route>
    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
