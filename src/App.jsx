
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SinglePage from './pages/SinglePage';
import Navbar from './componants/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"





function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <div style={{marginBottom:"70px"}}>
     <Navbar/>
     </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="single" element={<SinglePage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
