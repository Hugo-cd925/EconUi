import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../homepage/Homepage';
import Header from '../homepage/header/Header';
import NotFound from './NotFound';
/*Isaiah's Code*/
import NavBar from './components/NavBar';
import Home from './components/pages/Home';

/**
 * @name App
 * @returns component
 */

const App = () => {
  return (
    <BrowserRouter>
    <Header>
    <Routes>
      <Route exact path="/"   element={<HomePage /> } />
       <Route path="*" element={<NotFound />} />
   
    </Routes>
    </Header>
    </BrowserRouter>
    
  );
}

export default App;
