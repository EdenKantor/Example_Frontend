import { useState } from "preact/hooks";

export const useRegistration2Logic = () => {
  // States
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Popup states
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [popupMessage, setPopupMessage] = useState(
    "Are you sure you want to submit your information?"
  );

  // Character limit
  const MAX_LENGTH = 15;

  // Sanitize input to remove spaces and enforce max length
  const sanitizeInput = (value) => value.replace(/\s/g, "").slice(0, MAX_LENGTH);

  // Validation function
  const validateInputs = () => {
    if (!username) return "Username is required.";
    if (username.length > MAX_LENGTH) return "Username exceeds 15 characters.";
    if (!password) return "Password is required.";
    if (password.length > MAX_LENGTH) return "Password exceeds 15 characters.";
    if (password !== confirmPassword) return "Passwords do not match.";
    return ""; // No errors
  };

  const handleSave = () => {
    const error = validateInputs(); // Validate inputs
    setErrorMessage(error); // Update error message
    return !error; // Return true if no error
  };

  // Popup controls
  const openPopup = () => setIsOpen(true);
  const closePopup = () => {
    setIsOpen(false);
    setShowSuccess(false);
    setPopupMessage("Are you sure you want to submit your information?");
  };

  const confirmPopup = () => {
    setShowSuccess(true);
    setPopupMessage("You have registered successfully!");
  };

  return {
    username,
    setUsername: (val) => setUsername(sanitizeInput(val)), // Apply sanitization
    password,
    setPassword: (val) => setPassword(sanitizeInput(val)), // Apply sanitization
    confirmPassword,
    setConfirmPassword: (val) =>
      setConfirmPassword(sanitizeInput(val)), // Apply sanitization
    errorMessage,
    handleSave,
    isOpen,
    showSuccess,
    popupMessage,
    openPopup,
    closePopup,
    confirmPopup,
  };
};
