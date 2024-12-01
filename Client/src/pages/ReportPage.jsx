import React from "react";
import bg from "../assets/RedirectPage.png"; // Main background image

const ReportPage = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen p-4 text-white"
      style={{
        backgroundImage: `url(${bg})`, // Main background
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="w-[400px] md:w-[500px] lg:w-[600px] bg-transparent rounded-lg shadow-lg p-6 border border-white"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent form background
        }}
      >
        <h1 className="text-white text-2xl font-bold mb-4">
          Report Uncomplete Transactions
        </h1>
        <p className="text-gray-300 mb-6 text-sm">
          Use this form to report delays or suspicious behavior from the buyer
          during the transaction.
        </p>
        <form className="space-y-4">
          {/* Transaction ID */}
          <div>
            <label
              className="block text-white font-medium mb-2"
              htmlFor="transaction-id"
            >
              Transaction ID *
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                id="transaction-id"
                className="flex-1 px-4 py-2 rounded-lg bg-transparent border border-white placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue="54656-xxjygdvvbtdt"
              />
              <button
                type="button"
                className="p-2 bg-white/10 border border-white rounded-lg hover:bg-white/20"
              >
                📋
              </button>
            </div>
          </div>

          {/* Upload Supporting Documents */}
          <div>
            <label
              className="block text-white font-medium mb-2"
              htmlFor="upload-file"
            >
              Upload Supporting Documents (Optional)
            </label>
            <div className="flex items-center space-x-2">
              <input type="file" id="upload-file" className="hidden" />
              <label
                htmlFor="upload-file"
                className="flex-1 px-4 py-2 text-gray-300 bg-transparent border border-white rounded-lg cursor-pointer hover:bg-white/10"
              >
                Choose File
              </label>
              <button
                type="button"
                className="p-2 bg-white/10 border border-white rounded-lg hover:bg-white/20"
              >
                🔗
              </button>
            </div>
          </div>

          {/* Problem Description */}
          <div>
            <label
              className="block text-white font-medium mb-2"
              htmlFor="problem-description"
            >
              Problem Description *
            </label>
            <textarea
              id="problem-description"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-white placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Write your report here..."
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 bg-white/10 border border-white text-white rounded-lg hover:bg-white/20"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportPage;
