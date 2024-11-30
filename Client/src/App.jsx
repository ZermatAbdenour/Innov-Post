import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import RedirectPage from "./pages/RedirectPage";
import Auth from "./pages/Authentication"

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the Product Page */}
        <Route path="/" element={<ProductPage />} />
        <Route path="/RedirectPage" element={<RedirectPage />} />
        <Route path="/Auth" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default App;
