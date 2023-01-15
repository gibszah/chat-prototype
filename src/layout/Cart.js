import Modal from '../popup/Modal';
import classes from './Cart.module.css';
import SearchBar from '../popup/searchbar';
import { useEffect, useState } from 'react';
import React from 'react';
import Spinner from 'react-bootstrap/Spinner';


import Home from '../pages/Home';


const Cart = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showSearchBar, setShowSearchBar] = useState(true);
  

  useEffect(() => {
   
    setTimeout(() => {
       
    setIsLoading(false)
  
    }, 1000)
    }, []);
   

  return (
    <Modal onClose={props.onClose}>
      {showSearchBar && <SearchBar />}
     {isLoading ? (
        <div className={classes.loading}>
      <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
        </div>
      ) : (
          <>
            <div>
                 <Home onBar={setShowSearchBar} />
        </div>
            </>
      )}
      
    </Modal>
  );
};

export default Cart;
