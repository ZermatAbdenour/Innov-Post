import React, { useState } from 'react';
import bg from "../assets/RedirectPage.png"; // Background image
import line from "../assets/line.svg";
import filter from "../assets/filter.svg"; // Import filter image
import { FaSearch } from 'react-icons/fa'; // Add search icon from react-icons

const Dashboard = () => {
  const [transactions, setTransactions] = useState([
    { id: '54656-xxjgdvwb', productId: 'Dz-ghrt520', activity: '1Qte Meryl Lounge Chair Bought', date: '25/05/2025', status: 'Confirmed' },
    { id: '54656-xxjgdvwb', productId: 'Dz-ghrt520', activity: '1Qte Meryl Lounge Chair Bought', date: '25/05/2025', status: 'On Hold' },
    { id: '54656-xxjgdvwb', productId: 'Dz-ghrt520', activity: '1Qte Meryl Lounge Chair Bought', date: '25/05/2025', status: 'Failed' },
    { id: '54656-xxjgdvwb', productId: 'Dz-ghrt520', activity: '1Qte Meryl Lounge Chair Bought', date: '25/05/2025', status: 'Confirmed' },
    { id: '54656-xxjgdvwb', productId: 'Dz-ghrt520', activity: '1Qte Meryl Lounge Chair Bought', date: '25/05/2025', status: 'On Hold' },
    { id: '54656-xxjgdvwb', productId: 'Dz-ghrt520', activity: '1Qte Meryl Lounge Chair Bought', date: '25/05/2025', status: 'Failed' },
    { id: '54656-xxjgdvwb', productId: 'Dz-ghrt520', activity: '1Qte Meryl Lounge Chair Bought', date: '25/05/2025', status: 'Confirmed' },
    { id: '54656-xxjgdvwb', productId: 'Dz-ghrt520', activity: '1Qte Meryl Lounge Chair Bought', date: '25/05/2025', status: 'On Hold' },
    { id: '54656-xxjgdvwb', productId: 'Dz-ghrt520', activity: '1Qte Meryl Lounge Chair Bought', date: '25/05/2025', status: 'Failed' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
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

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.id.toLowerCase().includes(searchTerm) ||
      transaction.productId.toLowerCase().includes(searchTerm) ||
      transaction.activity.toLowerCase().includes(searchTerm)
  );

  return (
    <div
      className="min-h-screen p-4 text-white"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="max-w-7xl mx-auto mt-6">
        <h1 className="text-3xl font-semibold mb-4">Transactions Dashboard</h1>

        <img src={line} className="w-48" alt="line" />
        <br />
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 pl-10 rounded-lg bg-transparent border border-white text-white placeholder-gray-400"
              onChange={handleSearch}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
          </div>
          <div className="flex gap-4">
            <button onClick={handleFilter}>
              <img src={filter} alt="Filter" className="w-32 h-32" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table
            className="w-full text-left text-sm bg-transparent rounded-lg overflow-hidden border border-white"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Fond transparent avec une opacité légère
            }}
          >
            <thead
              className="text-white"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)", // Fond transparent pour l'en-tête
              }}
            >
              <tr>
                <th className="p-3 border border-white">Transaction ID</th>
                <th className="p-3 border border-white">Product ID</th>
                <th className="p-3 border border-white">Activity</th>
                <th className="p-3 border border-white">Confirmation Date</th>
                <th className="p-3 border border-white">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction, index) => (
                <tr
                  key={index}
                  className="odd:bg-gray-100 even:bg-gray-200"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)", // Fond des lignes légèrement transparent
                  }}
                >
                  <td className="p-3 border border-white">{transaction.id}</td>
                  <td className="p-3 border border-white">{transaction.productId}</td>
                  <td className="p-3 border border-white">{transaction.activity}</td>
                  <td className="p-3 border border-white">{transaction.date}</td>
                  <td
                    className={`p-3 font-bold border border-white ${
                      transaction.status === "Confirmed"
                        ? "text-green-600"
                        : transaction.status === "On Hold"
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
