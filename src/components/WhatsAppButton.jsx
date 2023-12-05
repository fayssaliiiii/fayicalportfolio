import React, { useState } from 'react';

const WhatsAppButton = () => {
  const [message, setMessage] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('+212650769535'); // Default phone number
  const defaultMessage = 'Hello, I want to place an order.';

  const handleInputChange = (e) => {
    setMessage(e.target.value);

    // Check if the message starts with a plus sign and is followed by numbers
    const match = e.target.value.match(/^\+(\d+)/);
    if (match) {
      const extractedPhoneNumber = `+${match[1]}`; // Extracted phone number
      setPhoneNumber(extractedPhoneNumber);
    } else {
      // If the message doesn't match the pattern, set the default phone number
      setPhoneNumber('+212650769535');
    }
  };

  const handleSendClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message || defaultMessage)}`;
    window.open(url, '_blank');
    // Reset message and hide input after sending
    setMessage('');
    setShowInput(false);
  };

  const handleWhatsAppButtonClick = () => {
    setShowInput(true);
  };

  const handleCloseClick = () => {
    setShowInput(false);
  };

  return (
    <div className="whatsapp-container text-white font-black md:text-[60px] text-center">
      <img src="/wtsp.jpg" alt="WhatsApp Icon" className="whatsapp-icon rounded-full" />
      {showInput ? (
        <div className="whatsapp-column">
          <input
            type="text"
            placeholder="Enter a message..."
            value={message}
            onChange={handleInputChange}
            className="whatsapp-input-sm rounded-sm mb-2"
          />
          <button
            onClick={handleSendClick}
            className="whatsapp-button-full-width text-sm text-[#68bc53] bg-transparent border-2 border-[#4bd741] rounded-full px-6 py-2 mt-2 mb-2"
          >
            Send
          </button>
          <button
            onClick={handleCloseClick}
            className="whatsapp-button-full-width  text-sm text-red-500 bg-transparent border-2 border-red-500 rounded-full px-6 py-2 mb-2"
          >
            Close
          </button>
        </div>
      ) : (
        <button
          onClick={handleWhatsAppButtonClick}
          className="whatsapp-button text-sm text-[#68bc53] bg-transparent border-2 border-[#4bd741] rounded-full px-6 py-2 transition-all duration-300 hover:bg-[#41d514] hover:text-white"
        >
          Order now!
        </button>
      )}
    </div>
  );
};

export default WhatsAppButton;
