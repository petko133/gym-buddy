import { useState } from 'react';
import './App.css';
import Navigation from './components/UI/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import data from './assets/data/data';
import Footer from './components/UI/Footer';
import Gallery from './pages/Gallery';
import Schedule from './pages/Schedule';

function App() {
  const [classesData, setData] = useState(data);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home classes={classesData} />}></Route>
        <Route exact path="/gallery" element={<Gallery />}></Route>
        <Route exact path="/schedule" element={<Schedule />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
