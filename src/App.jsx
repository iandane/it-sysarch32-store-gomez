// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import ProductsList from "./Components/ProductsList";


function App() {
  const [cartItems, setCartItems] = useState(0); // State to track cart items count

  return (
    <>
    <Router>
      <div className="container">
        {/* Pass cartItems count as prop */}
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route
            path="/"
            element={<ProductsList setCartItems={setCartItems} />}
          />
          {/* Pass cartItems count and setter function as props */}
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} // Pass cartItems count and setter function as props
          />
        </Routes>
      </div>
    </Router>
    
    <Footer/>
   
   </>
  );
}

export default App;