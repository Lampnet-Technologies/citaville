import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const BackButton = ({ text = "Back", className = "" }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Goes back to the previous page
  };

  return (
    <button
      onClick={handleBack}
      className={`flex items-center gap-2 px-4 py-2 hover:bg-gray-500 text-gray-800 rounded font-semibold transition ${className}`}
    >
      <FiArrowLeft size={18} />
      {text}
    </button>
  );
};

export default BackButton;
