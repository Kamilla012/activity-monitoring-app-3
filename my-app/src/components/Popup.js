import React, { useState, useEffect } from 'react';

function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true); // Otwórz popup zaraz po zamontowaniu komponentu
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'popup-overlay') {
      closePopup();
    }
};

  return (
    <div>
      {isOpen && (
        <div className="popup-overlay" onClick={handleOverlayClick}>
          <div className="popup">
            <div className="popup-content">
              <h2 className='text-center text-[30px]'>User Login</h2>
              <div id='signInDiv'></div>
              
              <button onClick={closePopup}>Zamknij</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
