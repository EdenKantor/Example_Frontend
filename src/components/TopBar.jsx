import { toggleTheme } from '../utils/ThemeLogic';
import { useNavigate, useLocation } from 'react-router-dom';

const TopBar = () => {
  const navigate = useNavigate(); 
  const location = useLocation(); 

  // Dynamic settings based on the route
  let showBackButton = true; // Default is to show the back button
  let buttonText = "Back"; // Default button text
  let buttonIcon = "fas fa-arrow-left"; // Default icon
  let backPath = "/"; // Default path
  let resetStorage = false; // Default storage behavior

  // Customize settings for specific pages
  switch (location.pathname) {
    case "/":
      showBackButton = false; 
      break;
    case "/user-home":
      buttonText = "Logout";
      buttonIcon = "fas fa-sign-out-alt"; 
      backPath = "/login";
      resetStorage = true;
      break;
    case "/discover1":
      backPath = "/user-home";
      break;
    case "/register1":
      backPath = "/";
      resetStorage = true;
      break;
    case "/register2":
      backPath = "/register1";
      break;
    default:
      break;
  }

  // Handle Back Button Click
  const handleBackClick = () => {
    if (resetStorage) {
      localStorage.removeItem("registrationData"); // Clear stored data
    }
    navigate(backPath); // Navigate to the assigned path
  };

  return (
    <div className="flex items-center p-4 border-b border-gray-200 
                    dark:border-gray-700 bg-green-400 dark:bg-green-800 transition-all">
      {/* Back Button */}
      {showBackButton && (
        <button
          onClick={handleBackClick}
          className="text-lg bg-green-500 dark:bg-green-900 text-white 
                     rounded-lg hover:bg-green-600 dark:hover:bg-green-950 
                     flex items-center space-x-2 transition-transform duration-200 
                     hover:scale-105 shadow-md hover:shadow-lg" // Added Scale-Up Hover
        >
          <i className={buttonIcon}></i>
          <span>{buttonText}</span>
        </button>
      )}

      {/* Theme Toggle Button */}
      <div className="ml-auto">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-green-500 dark:bg-green-900 text-white 
                     rounded-lg hover:bg-green-600 dark:hover:bg-green-950 
                     transition-transform duration-200 hover:scale-105 
                     shadow-md hover:shadow-lg" // Added Scale-Up Hover
        >
          <i className="fas fa-paint-brush mr-2"></i>Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default TopBar;
