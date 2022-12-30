import './App.css';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Header from './containers/components/Header';
import ProductList from './containers/components/ProductList';
import ProductDetail from './containers/components/ProductDetail';
import Cart from './containers/components/Cart';
import NotFound from './containers/components/NotFound';
import Home from './containers/components/Home';
import CheckOut from './containers/components/CheckOut';
import About from './containers/components/About';
import Contact from './containers/components/Contact';

function App() {
  return (
    <div className="App">
      

      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
