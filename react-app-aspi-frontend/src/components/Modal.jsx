import React, { useState } from 'react';
import './Modal.css';
import defileur from '../assets/gauche-droite.png';

const Modal = (props) => {
    const { show, closeModal } = props;

    let url = show ? 'https://www.hellowork.com/fr-fr/emplois/44709504.html' : '';



    return (
        <div>
            <div className='card-modal-wrapper' style={{
                display: show ? 'block' : 'none',
                opacity: show ? '1' : '0'
            }}>
                <div className='card-modal-margin'>
                    <button className='card-modal-defileur-btn'
                        onClick={closeModal}
                        >
                        <img className='card-modal-defileur-img' src={defileur} alt="Défileur"/>
                    </button>
                </div>
                <div className='card-modal-header'>
                    <h2>Descriptif de l'offre</h2>
                    <span className='card-close-modal-btn' onClick={closeModal}>X</span>
                </div>
                <div className='card-modal-body'>
                    <iframe className='card-offer-description' src={url}
                    title= "Description de l'offre"
                            style={{
                                display: show ? 'block' : 'none',
                                opacity: show ? '1' : '0',
                                overflow: 'auto',
                                border: 'none'
                            }}
          
                    />
                </div>
                <div className='card-modal-footer'>
                    <form action={url} method="get" target="_blank">
                        <button className='card-modal-offer-btn' type="submit">Accéder à l'offre</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Modal;
