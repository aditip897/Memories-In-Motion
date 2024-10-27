import './App.css';
import React from 'react';
import Home from './Home';
import TitleForm from './TitleForm'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Scrapbook from './Scrapbook';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scrapbook" element={<Scrapbook />} />
            <Route path="/titleform" element={<TitleForm />} />
        </Routes>
    </Router>
    
);

export default App;