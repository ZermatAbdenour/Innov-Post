import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import TransactionDetailsBuyer from "./pages/TransactionDetailsBuyer";
import TransactionDetailsSeller from "./pages/TransactionDetailsSeller";
import ReportTransaction from "./pages/ReportTransaction";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the Product Page */}
        <Route path="/" element={<ProductPage />} />
        <Route path="/transaction-buyer" element={<TransactionDetailsBuyer />} />
        <Route path="/transaction-seller" element={<TransactionDetailsSeller />} />
        <Route path="/report-transaction" element={<ReportTransaction />} />
      </Routes>
    </Router>
  );
};

export default App;
