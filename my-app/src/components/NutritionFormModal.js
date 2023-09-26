import React, { useState } from 'react';
import "../Form.css";
import axios from 'axios'; // Import Axios
import { Link, useNavigate } from 'react-router-dom';

const NutritionFormModal = ({ onClose }) => {


  const [formData, setFormData] = useState({
    calories: '',
    proteins: '',
    carbohydrates: '',
    fat: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClose = () => {
    onClose(); // Wywołaj funkcję przekazaną przez props onClose, aby zamknąć popup
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('http://localhost:3001/api/nutrition_data', formData) // Wywołanie Axios
      .then((response) => {
        console.log(response.data);
        // Dodaj kod do obsługi sukcesu, np. przekierowanie użytkownika
        // setIsModalOpen(false);
      })
      .catch((error) => {
        console.error(error);
        // Dodaj kod do obsługi błędów
      });
  };

  


  return (


<div className="modal-overlay">
  <div className='modal'>
      <div className="modal-content">
      {/* <span className="close" onClick={() => setIsModalOpen(false)}>X</span> */}
      <span className="close" onClick={handleClose}>X</span>
        <h2>Wprowadź dane</h2>
        <form onSubmit={handleSubmit}>
          <label>Kalorie:</label>
          <input type='number' placeholder='Enter Calories' className='rounded p-1' name='calories' onChange={handleInput} />
          <label>Białko:</label>
          <input type='number' placeholder='Enter Protein' className='rounded p-1' name='proteins' onChange={handleInput} />
          <label>Węglowodany:</label>
          <input type='number' placeholder='Enter carbohydrates' className='rounded p-1' name='carbohydrates' onChange={handleInput} />
          <label>Tłuszcze:</label>
          <input type='number' placeholder='Enter fat' className='rounded p-1' name='fat' onChange={handleInput} />
          


          <button type="submit" className='btn w-[300px] bg-white text-violet-500 px-2 py-1 border-2 border-violet-500 rounded'>
              Save
            </button> 
        </form>
      </div>
    </div>
    </div>
        // </div>
    //   </div>
    // </div>
  );
}

export default NutritionFormModal;
