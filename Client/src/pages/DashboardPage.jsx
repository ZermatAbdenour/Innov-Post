import React, { useEffect, useState } from "react";
import bg from "../assets/RedirectPage.png"; // Background image
import logo from "../assets/logo.svg"; // Logo image
import line from "../assets/line.svg"; // Line image
import filter from "../assets/filter.svg"; // Filter icon
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { localHostUrl } from "../utils";
const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleFilter = () => {
    setIsFiltered(!isFiltered);
    if (!isFiltered) {
      setTransactions((prev) => [...prev].sort((a, b) => a.status.localeCompare(b.status)));
    } else {
      setTransactions((prev) => [...prev].reverse());
    }
  };

  // const filteredTransactions = transactions.filter(
  //   (transaction) =>
  //     transaction.id.includes(searchTerm) ||
  //     transaction.productId.toLowerCase().includes(searchTerm) ||
  //     transaction.activity.toLowerCase().includes(searchTerm)
  // );

  useEffect(() => {
    const fetcAllTransactions = async () => {
      try {
        const response = await axios.get(`${localHostUrl}/transactions/all`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },

        });
        setTransactions(response.data);
      } catch (e) { console.log(e) }
    }
    fetcAllTransactions();
  })

  const handleNavigate = (role, transactionId) => {
    if (role === "buyer") {
      navigate(`/transaction-details/buyer/${transactionId}`)
    } else {
      navigate(`/transaction-details/seller/${transactionId}`)
    }
  }

  return (
    <div
      className="min-h-screen p-4 text-white"
      style={{
        backgroundImage: `url(${bg})`, // Corrected `url` syntax
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto mt-6">
        <h1 className="text-3xl font-semibold mb-4">Transactions Dashboard</h1>

        <img src={line} className="w-48 mb-4" alt="line" />

        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-md p-2 rounded-lg bg-transparent border border-white text-white placeholder-gray-400"
            onChange={handleSearch}
          />
          <button
            onClick={handleFilter}
            className=""
          >
            <img src={filter} alt="Filter" className="w-32 h-32" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table
            className="w-full text-left text-sm bg-transparent rounded-lg overflow-hidden border border-white"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <thead
              className="text-white"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              }}
            >
              <tr>
                <th className="p-3 border border-white">Transaction ID</th>
                <th className="p-3 border border-white">Seller ID</th>
                <th className="p-3 border border-white">Buyer ID</th>
                <th className="p-3 border border-white">Amount</th>
                <th className="p-3 border border-white">Status</th>
              </tr>
            </thead>
            <tbody >
              {transactions.map((transaction, index) => (
                <tr
                  key={index}

                  className="odd:bg-gray-100 even:bg-gray-200"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <td className="p-3 border border-white" onClick={handleNavigate(transaction.role, transaction._id)}>{transaction._id}</td>
                  <td className="p-3 border border-white">{transaction.sellerCardNum}</td>
                  <td className="p-3 border border-white">{transaction.buyerCardNum}</td>
                  <td className="p-3 border border-white">{transaction.price}</td>
                  <td
                    className={`p-3 font-bold border border-white ${transaction.status === "buyerConfirmed"
                      ? "text-green-600"
                      : transaction.status === "hold"
                        ? "text-orange-600"
                        : "text-red-600"
                      }`}
                  >
                    {transaction.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
