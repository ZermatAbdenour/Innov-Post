import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the Product Page */}
        <Route path="/" element={<ProductPage />} />

      </Routes>
    </Router>
  );
};

export default App;
