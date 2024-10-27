// // MyButton.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import HomeButton from './HomeButton';


// const Home = () => {
//      const navigate = useNavigate();

//      const handleClick = () =>{ 
//         navigate('/ns');
//         //console.log("Button")
//        // history.push(path);
//     };
//     // return (
//     //     <button onClick={handleClick}>
//     //         Go to About Page
//     //     </button>
//     // );
    


// return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Welcome to Memories in Motion!</h1>
//         <HomeButton label="Create a New Memory Book" onClick={handleClick} />
//       </header>
//     </div>
//   );

// };
// export default Home;


import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/scrapbook');
    };

    return (
        <div className="App">
       <header className="App-header">
         <h1>Welcome to Memories in Motion!</h1>
         <button onClick={handleClick} style={buttonStyle}>
            Create a New Memory Book
        </button>
       </header>
     </div>
        
    );
};


const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#123456',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

export default Home;
