import { useNavigate } from "react-router-dom"; 
import { useRegistration2Logic } from "../utils/Registration2PageLogic";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import UsernameInput from "../components/UsernameInput";
import PasswordInput from "../components/PasswordInput";
import ActionButton from "../components/ActionButton";
import Message from "../components/Message";
import Popup from "../components/Popup";

const Registration2Page = () => {
  const navigate = useNavigate(); // React Router navigation

  // Hooks for logic
  const {
    username,
    setUsername,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    errorMessage,
    handleSave,
    isPasswordVisible,
    togglePasswordVisibility,
    isConfirmPasswordVisible,
    toggleConfirmPasswordVisibility,
    isOpen,
    showSuccess,
    popupMessage,
    openPopup,
    closePopup,
    confirmPopup,
  } = useRegistration2Logic();

  // Handle Save Click
  const handleSaveClick = () => {
    const isValid = handleSave(); // Validate inputs
    if (isValid) openPopup(); // Open popup only if no errors
  };

  // Handle Popup Confirm
  const handlePopupConfirm = () => {
    confirmPopup(); // Show success message
  };

  // Clear localStorage and navigate to home
  const handleBackToHome = () => {
    localStorage.removeItem("registrationData"); // Clear stored data
    navigate("/"); // Navigate to home page
  };

  const handlePopupClose = () => {
    if (showSuccess) {
      handleBackToHome(); // Use the same logic for closing popup and navigating home
    } else {
      closePopup(); // Close popup without navigating
    }
  };

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white transition-all duration-300 min-h-screen">
      {/* Main Content */}
      <div className="flex flex-col items-center min-h-screen space-y-8 p-6">
        {/* Title */}
        <Title text="Please Enter your user information" />

        {/* Subtitle */}
        <Subtitle text="This lets you login and start your training." />

        {/* Form Fields */}
        <div className="w-full max-w-md space-y-6">
          {/* Username */}
          <UsernameInput
            label="Username"
            placeholder="Enter your username (max 15 characters, no spaces)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* Password */}
          <PasswordInput
            label="Password"
            placeholder="Enter your password (max 15 characters, no spaces)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            toggleVisibility={togglePasswordVisibility} // Toggle visibility
            isPasswordVisible={isPasswordVisible}
          />

          {/* Confirm Password */}
          <PasswordInput
            label="Confirm Password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            toggleVisibility={toggleConfirmPasswordVisibility} // Toggle visibility
            isPasswordVisible={isConfirmPasswordVisible}
          />
        </div>

        {/* Error Message */}
        <Message message={errorMessage} />

        {/* Save Button */}
        <ActionButton
          label="Save"
          iconClass="fas fa-save"
          onClick={handleSaveClick}
          className={`px-6 py-2 ${
            errorMessage
              ? "bg-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-300"
              : "bg-green-400 hover:bg-green-500 text-white"
          }`}
          disabled={!!errorMessage}
        />
      </div>

      {/* Popup Component */}
      <Popup
        isOpen={isOpen}
        onClose={handlePopupClose}
        onConfirm={handlePopupConfirm}
        message={popupMessage}
        showSuccess={showSuccess}
        backToHome={handleBackToHome}
      />
    </div>
  );
};

export default Registration2Page;
