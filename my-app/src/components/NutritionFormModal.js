import React, { useState } from 'react';
import "../Form.css";

const NutritionFormModal = ({ onClose }) => {
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbohydrates, setCarbohydrates] = useState('');
  const [fat, setFat] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Wyślij dane do serwera Express.js
    fetch('/save-nutrition-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ calories, protein, carbohydrates, fat }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Dane zostały zapisane w bazie danych:', data);
        onClose(); // Zamknij modal po zapisaniu danych
      })
      .catch((error) => {
        console.error('Błąd podczas zapisywania danych:', error);
      });
  };
  

  const handleClose = () => {
    onClose(); // Wywołujemy funkcję przekazaną przez props onClose, aby zamknąć popup
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={handleClose}>X</span> {/* Dodajemy przycisk zamknięcia */}
          <h2>Enter data</h2>
          <form onSubmit={handleSubmit}>
            <label>Calories</label>
            <input type="text" value={calories} onChange={(e) => setCalories(e.target.value)} />
            <label>Protein:</label>
            <input type="text" value={protein} onChange={(e) => setProtein(e.target.value)} />
            <label>Carbohydrates:</label>
            <input type="text" value={carbohydrates} onChange={(e) => setCarbohydrates(e.target.value)} />
            <label>Fat:</label>
            <input type="text" value={fat} onChange={(e) => setFat(e.target.value)} />
            <button type="submit" onClick={handleSubmit}>Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NutritionFormModal;
