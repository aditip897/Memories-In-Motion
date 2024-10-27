import './App.css';
import React from 'react';
import Home from './Home'; // Replace with your component
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NewScrapbook from './NewScrapbook';
import Scrapbook from './Scrapbook';


//import Home from './Home'; // Replace with your component
// import NS from './ns'; // Replace with your component

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scrapbook" element={<Scrapbook />} />
        </Routes>
    </Router>
    
);


// import {StyleSheet, Button, View, Text, Alert} from 'react-native';
//import * as React from 'react';

//function App() {
  //const handleClick = () => {
   // const navigate = useNavigate();

  //   const handleClick = () =>{ 
  //     //navigate('/newscrapbook');
  //     console.log("Button")
  //    // history.push(path);
  // };

//   const MyButton = ({ to }) => {

//     const navigate = useNavigate();

//     return (
//         <button className="my-button" onClick={() => 
//             { navigate(`/${to}`) }}>
//             Take me to {to === '' ? "home" : to}
//         </button>
//     )
// }

    // navigate('/  HomeButton.js');  };

  //   <Router>
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/newscrapbook" element={<NewScrapbook />} />
  //   </Routes>
  // </Router>

//     <Router>
//         <Routes>
//             <Route path="/" element={<HomeButton />} />
//             <Route path="/ns" element={<NewScrapbook />} />
//         </Routes>
//     </Router>
  
// }


export default App;