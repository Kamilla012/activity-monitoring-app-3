import React, { useState } from 'react';
import "../Form.css";
import axios from 'axios'; // Import Axios
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const WaterFormModal = ({ onClose }) => {


  const [formData, setFormData] = useState({
    water: ''
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
  
    const formDataToSend = {
      water: formData.water,
      date: selectedDate.toISOString().slice(0, 10), // Format daty YYYY-MM-DD
    };
  
    axios.post('http://localhost:3001/api/water_data', formDataToSend)
      .then((response) => {
        console.log(response.data);
        // Dodaj kod do obsługi sukcesu, np. przekierowanie użytkownika
        // setIsModalOpen(false);
      })
      .catch((error) => {
        console.error(error);
        // Dodaj kod do obsługi błędów
      });

      handleClose();
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


 return (

<div className="modal-overlay">
  <div className='modal'>
      <div className="modal-content">
      {/* <span className="close" onClick={() => setIsModalOpen(false)}>X</span> */}
      <span className="close" onClick={handleClose}>X</span>
        <h2>Wprowadź dane</h2>



        <form onSubmit={handleSubmit}>
          <label>Water:</label>
          <input type='number' placeholder='Enter Water' className='rounded p-1' name='water' onChange={handleInput} />


          
          <h1>Select date:</h1>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        
        dateFormat="dd/MM/yyyy"
      />
    
          


          <button type="submit" className='btn w-[300px] bg-white text-violet-500 px-2 py-1 border-2 border-violet-500 rounded'>
              Save
            </button> 
        </form>
      </div>
    </div>
    </div>
  );
}

export default WaterFormModal;
