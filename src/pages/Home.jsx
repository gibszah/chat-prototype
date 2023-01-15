import React, { Fragment, useState } from 'react';

import "./Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Groupsa from '../icon/Groupsa';
import Groupda from '../icon/Groupda';
import IconGr from '../icon/IconGr'
import Favista from '../icon/Favista';
import Diana from '../icon/Diana';
import Inboxsa from './Inboxsa';





const Home = ({onBar}) => {


  const [inboxShown, setInboxShown] = useState(false);

  
  const showInboxHandler = (e) => {
    e.preventDefault();
    setInboxShown(true);
    onBar(false);
  }

  const hideInboxHandler = () => {
    setInboxShown(false)
    onBar(true)
  }

  const [time] = useState(new Date().toLocaleString());

  return (
    <Fragment>
      {inboxShown ? <Inboxsa onClose={hideInboxHandler}/> : (
    <div className="home">
      <div className="container">
      <span><IconGr /></span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className='ctn'>
          <div>
             <a href=' # ' onClick={showInboxHandler} ><Groupsa /></a>
        <p className='nick'>Cameron Philips :</p>
          <p>Please check this out!</p>
          </div>
          <div>
           <p className='time'>{time}</p>
          </div>
          </div>
         
      </div>
      
      <div className="container">
      <span><IconGr /></span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className='ctn'>
          <div>
        <a href=' # ' onClick={showInboxHandler} ><Groupda /></a>
        <p className='nick'>Ellen :</p>
          <p>Hey, please read.</p>
          </div>
            <div>
           <p className='time'>{time}</p>
        </div>
          </div>
         </div>
     
      
      <div className="container">
      <span><IconGr /></span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className='ctn'>
          <div>
        <a href=' # ' onClick={showInboxHandler} ><Diana /></a>
        <p className='nick'>Cameron Philips :</p>
          <p>I understand your initial concerns and thats very valid...</p>
          </div>
            <div>
           <p className='time'>{time}</p>
        </div>
          </div>
      </div>
      
      <div className="container">
      <span><IconGr /></span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className='ctn'>
          <div>
        <a href=' # ' onClick={showInboxHandler} ><Favista /></a>
         <p>Hey there! Welcome to your inbox.</p>
          </div>
            <div>
           <p className='time'>{time}</p>
        </div>
          </div>
         </div>
  
    
    </div>
      )}
    </Fragment>
  )
}

export default Home;