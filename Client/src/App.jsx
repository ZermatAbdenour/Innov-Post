import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import RedirectPage from "./pages/RedirectPage";
import Dashboard from "./pages/DashboardPage";
import AuthenticationPage from "./pages/Authentication";
import TransactionDetailsBuyer from "./pages/TransactionDetailsBuyer";
import TransactionDetailsSeller from "./pages/TransactionDetailsSeller";
import ReportPage from "./pages/ReportPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the Product Page */}
        <Route path="/" element={<ProductPage />} />

        {/* Route for the Redirect Page */}
        <Route path="/redirect" element={<RedirectPage />} />

        {/* Route for the Dashboard Page */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Route for the Authentication Page */}
        <Route path="/auth" element={<AuthenticationPage />} />

        {/* Route for Transaction Details for Buyer */}
        <Route path="/transaction-details/buyer/:transactionId" element={<TransactionDetailsBuyer />} />

        {/* Route for Transaction Details for Seller */}
        <Route path="/transaction-details/seller/:transactionId" element={<TransactionDetailsSeller />} />
        <Route path="/ReportPage" element={<ReportPage />} />


      </Routes>
    </Router>
  );
};

export default App;
