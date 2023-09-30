// import React, { Component } from 'react';

// class NutritionData extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: null
//     };
//   }

//   componentDidMount() {
//     // Wykonaj zapytanie GET do serwera Node.js
//     fetch('/nutrition-data/first')
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({ data });
//       })
//       .catch((error) => {
//         console.error('Błąd pobierania danych:', error);
//       });
//   }

//   render() {
//     const { data } = this.state;
//     return (
//       <div>
//         {data ? (
//           <pre>{JSON.stringify(data, null, 2)}</pre>
//         ) : (
//           <p>Ładowanie danych...</p>
//         )}
//       </div>
//     );
//   }
// }

// export default NutritionData;
