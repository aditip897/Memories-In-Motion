import React from 'react';
import { useNavigate } from 'react-router-dom';
import TitleForm from './TitleForm'

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/TitleForm');
    };

    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{padding: 10, color: '#123456', textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white'}}>Welcome to Memories in Motion!</h1>
          <h4 style={{padding: 10, width: 1000}}>We encourage patients and caregivers to view, add, and share meaningful moments to help reinforce identity and create a sense of familiarity.</h4>
          <p style={{padding: 10, fontSize:'20px', width: 1000}}> First, create a new memory book. Then, you decide how you want to organize your images among the pages.</p>
          <p style={{fontSize:'20px', width: 1000}}> Recommendation: the images within a page belong to a specific category like sports, cars, makeup, etc.</p>
          <button onClick={handleClick} style={buttonStyle}>
            Create a New Memory Book
          </button>
        </header>
      </div>
    );
};


const buttonStyle = {
    padding: '10px 10px',
    backgroundColor: '#123456',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

export default Home;