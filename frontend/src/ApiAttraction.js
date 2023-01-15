// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // function ApiAttraction() {
// //   const [data, setData] = useState([]);
  
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get('http://127.0.0.1:8000/attraction/${title}/');
// //         setData(response.data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };
// //     fetchData();
// //   }, []);

// //   return (
// //     <div>
// //       {data.map(item => (
// //         <p key={item.id}>{item.name}</p>
// //       ))}
// //     </div>
// //   );
// // }

// // export default ApiAttraction;
// import React, { useState, useEffect } from 'react';

// function DataFetchingPage() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch('http://localhost:8000/api/endpoint');
//       const json = await response.json();
//       setData(json);
//     }
//     fetchData();
//   }, []);

//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   return <AnotherPage data={data} />;
// }

// function AnotherPage(props) {
//   return (
//     <div>
//       <h1>Data from API</h1>
//       <p>{JSON.stringify(props.data)}</p>
//     </div>
//   );
// }

// export default DataFetchingPage;
