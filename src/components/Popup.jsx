import { useNavigate } from "react-router-dom";

const Popup = ({ isOpen, onClose, onConfirm, message, showSuccess, backToHome }) => {
  if (!isOpen) return null; // Don't render if popup is closed

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96 transition-all">
        {/* Message */}
        <p className="text-lg text-center text-black dark:text-white mb-4">
          {message}
        </p>

        {/* Buttons */}
        {!showSuccess ? (
          <div className="flex justify-center space-x-4">
            {/* Confirm Button - Dark Green */}
            <button
              onClick={onConfirm} // Confirm action
              className="px-4 py-2 text-white rounded-lg hover:bg-green-600
                         bg-green-500 dark:bg-green-900 dark:hover:bg-green-950 transition-all"
            >
              Yes
            </button>

            {/* Cancel Button - Unchanged */}
            <button
              onClick={onClose} // Close popup
              className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500
                         dark:bg-gray-600 dark:hover:bg-gray-700 transition-all"
            >
              No
            </button>
          </div>
        ) : (
          <div className="flex justify-center">
            {/* Back to Home Button - Dark Green */}
            <button
              onClick={backToHome} // Use backToHome function passed from parent
              className="px-6 py-2 text-white rounded-lg hover:bg-green-600
                         bg-green-500 dark:bg-green-900 dark:hover:bg-green-950 transition-all"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
