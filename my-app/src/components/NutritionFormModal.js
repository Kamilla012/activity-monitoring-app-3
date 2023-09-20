import React, { useState } from 'react';
import "../Form.css";

const NutritionFormModal = ({ onClose }) => {
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbohydrates, setCarbohydrates] = useState('');
  const [fat, setFat] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj możesz wykonać akcje na podstawie wprowadzonych danych, np. przekazać je do rodzica
    // np. onClose({ calories, protein, carbohydrates, fat });
  };

  const handleClose = () => {
    onClose(); // Wywołujemy funkcję przekazaną przez props onClose, aby zamknąć popup
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={handleClose}>X</span> {/* Dodajemy przycisk zamknięcia */}
          <h2>Wprowadź dane</h2>
          <form onSubmit={handleSubmit}>
            <label>Kalorie:</label>
            <input type="text" value={calories} onChange={(e) => setCalories(e.target.value)} />
            <label>Białko:</label>
            <input type="text" value={protein} onChange={(e) => setProtein(e.target.value)} />
            <label>Węglowodany:</label>
            <input type="text" value={carbohydrates} onChange={(e) => setCarbohydrates(e.target.value)} />
            <label>Tłuszcze:</label>
            <input type="text" value={fat} onChange={(e) => setFat(e.target.value)} />
            <button type="submit">Zapisz</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NutritionFormModal;
