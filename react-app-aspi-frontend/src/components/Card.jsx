import React from 'react';
import close from '../assets/fermer.png';
import wttj from '../assets/welcome-to-the-jungle-squarelogo.png'
import unlike from '../assets/contour-en-forme-de-coeur.png'
import liked from '../assets/silhouette-de-forme-simple-de-coeur.png'
import push from'../assets/verifier-push.png'
import jobteaser from '../assets/verifier-jobteaser.png'
import diplome from '../assets/diplome.png'
import horloge from '../assets/horloge.png'
import lieu from '../assets/lieu.png'
import './Card.css'

function Card({ openModal }) {

  return (
    <div className='card' onClick={openModal}>
      <div className='card-contener'></div>
      <div className='card-header'>
        <button className='btn-close'>
          <img className='btn-close-img' src={close} alt="Close" />
        </button>
      </div>
      <div className='card-contain'>
        <div className='card-presentation'>
          <div className='card-jobtitle'>
            <h1>Data Analyst - en alternance (F/H)</h1>
          </div>
          <div className='card-companie-logo'>
            <img className='card-companie-logo-img' src={wttj}/>
          </div>
        </div>
        <div className='card-body'>
          <div className='card-companie'>CARREFOUR</div>
          <div className='card-infos'>
            <div>
            <img className='card-location-img'src={lieu}></img>
            <a className='card-location'><img />Paris</a>
            </div>
            <div>
            <img className='card-date-img'src={horloge}></img>
            <a className='card-date'><img  />Il y a 2 jours</a>
            </div>
            <div>
            <img className='card-contract-type-img'src={diplome}></img>
            <a className='card-contract-type'><img  /> Alternance </a>
            </div>
          </div>
        </div>

      </div>
      <div className='card-margin'>
          <button className='btn-card-like'>
            <img className='card-like-img'src={unlike}></img>
          </button>
          <img className='card-push-img'src={push}></img>
          <img className='card-jobteaser-img'src={jobteaser}></img>
        </div>
    </div>
  );
}

export default Card;
