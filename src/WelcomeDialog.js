import React, { useState } from "react"; // Import useState hook
function WelcomeDialog() {
  const [isVisible, setIsVisible] = useState(true); // Initially visible

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div id="welcome-dialog" style={{ display: isVisible ? "block" : "none" }}>
      <h2>Welcome Back!</h2>
      <p>What are you in the mood today?! </p>
      <button type="button" className="close-button" onClick={handleClose}>
        <span>X</span> {/* Wrap the X in a span */}
      </button>
    </div>
  );
}

export default WelcomeDialog;
