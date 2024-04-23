// import logo from './logo.svg';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import './App.css';
import Home from "../src/components/Home/home.js";

function App() {
  return (
    <div className="App">
        <Router>
            {/* <NavBar /> */}
            <Routes>
              <Route exact={true} path='/' element={<Home />} />
            </Routes>
            {/* <Footer /> */}
          </Router>
    </div>
  );
}

export default App;
