import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'; 
import Homepage from './components/Homepage/';
// import Footer from './components/Footer/';
import Footer from './components/Footer/';


function App () {
  return (
    <div class="App">
      <NavBar />
      <Homepage />
      <Footer/>
    </div>
  );
};

export default App;

