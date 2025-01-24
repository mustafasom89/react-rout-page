import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import About from './About';
import LoginPage from './Login';
import Registration from './registration'



export default function App() {
  return (
    <Router>
      <div>
        <ul className="nav-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/registration">Registrations</a></li>
        </ul>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </Router>
  );
  }