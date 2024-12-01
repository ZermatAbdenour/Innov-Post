import React from "react";
import bg from "../assets/RedirectPage.png"; // Main background image
import bgcc from "../assets/bgcc.svg"; // Form background image

const ReportPage = () => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`, // Main background
      }}
    >
      <div
        className="w-[400px] md:w-[500px] lg:w-[600px] bg-cover bg-center rounded-lg shadow-lg p-6"
        style={{
          backgroundImage: `url(${bgcc})`, // Form-specific background
        }}
      >
        <h1 className="text-white text-2xl font-bold mb-4">
          Report uncomplete transactions
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
                className="flex-1 px-4 py-2 rounded-md bg-gradient-to-r from-blue-700/90 to-blue-700/30 text-white border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue="54656-xxjygdvvbtdt"
              />
              <button
                type="button"
                className="p-2 bg-blue-600 rounded-md text-white hover:bg-blue-500"
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
              Upload supporting documents (optional)
            </label>
            <div className="flex items-center space-x-2">
              <input type="file" id="upload-file" className="hidden" />
              <label
                htmlFor="upload-file"
                className="flex-1 px-4 py-2 text-gray-300 bg-gradient-to-r from-blue-700/90 to-blue-700/30 rounded-md border border-blue-600 cursor-pointer hover:bg-blue-600"
              >
                Choose File
              </label>
              <button
                type="button"
                className="p-2 bg-blue-600 rounded-md text-white hover:bg-blue-500"
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
              Problem description *
            </label>
            <textarea
              id="problem-description"
              className="w-full px-4 py-2 rounded-md bg-gradient-to-r from-blue-700/90 to-blue-700/30 text-white border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Write your report here..."
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400"
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
