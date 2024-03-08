import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import Card from './components/Card.jsx';
import Modal from './components/Modal.jsx'; 

function App() {
  const [show, setShow] = useState(false);
  const [cardInfos, setCardInfos] = useState([]);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  useEffect(() => {
  
    axios.get('http://localhost:5209/')
      .then(response => {
        
        setCardInfos(response.data);
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de la récupération des données :', error);
      });
  }, []); 

  return (
    <div className={`App ${show ? 'modal-open' : ''}`}>
    <div className="card-grid">
      <Card openModal={openModal}/>
      <Card openModal={openModal}/>
      <Card openModal={openModal}/>
      <Card openModal={openModal}/>
    </div>
    <div className="card-grid">
      <Card openModal={openModal}/>
      <Card openModal={openModal}/>
      <Card openModal={openModal}/>
      <Card openModal={openModal}/>
    </div>

    <Modal show={show} closeModal={closeModal} />
  </div>
);
}

export default App;
