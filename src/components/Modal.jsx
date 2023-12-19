import React, { useEffect } from 'react';

const Modal = ({ largeImageURL, onClose }) => {
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

   useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="Overlay" onClick={handleClick}>
      <div className="Modal" >
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};


export default Modal;