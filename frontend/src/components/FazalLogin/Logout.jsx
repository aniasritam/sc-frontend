import React from "react";

// Updated Signout component to directly handle logout
const Signout = ({ onLogout }) => {
  // Directly call onLogout when clicked
  return (
    <div onClick={onLogout} style={{ cursor: "pointer" }}>
      Signout
    </div>
  );
};

export default Signout;
