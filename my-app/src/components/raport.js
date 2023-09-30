// import React, { useEffect, useState } from 'react';

// const Raport = () => {
//   const [raportData, setRaportData] = useState({});

//   useEffect(() => {
//     // Wyślij zapytanie do API na serwerze
//     fetch('/api/raport')
//       .then((response) => response.json())
//       .then((data) => setRaportData(data))
//       .catch((error) => console.error('Błąd pobierania danych:', error));
//   }, []);

//   return (
//     <div>
//       <h1>Dzienny Raport</h1>
//       {/* {/* <p>Kalorie: {raportData.total_calories}</p> */}
//       <p>Białko: {raportData.total_proteins} g</p>
//       <p>Węglowodany: {raportData.total_carbohydrates} g</p>
//       <p>Tłuszcze: {raportData.total_fat} g</p>
//       <p>Woda: {raportData.total_water} ml</p> */}
//     </div>
//   );
// };

// export default Raport;
