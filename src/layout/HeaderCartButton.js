import { Fragment } from 'react';
import CartIcon from './CartIcon';
import classes from './HeaderCartButton.module.css';
import ButtonS from './Button2';


const HeaderCartButton = (props) => {
  return (
    <Fragment>
      <span className={classes.shadow}></span>
      
    <button className={classes.button} onClick={props.onClick}>
    <span className={classes.icon}>
        <CartIcon />
     </span>
        </button>
      
      <button className={classes.button2}>
        <span className={classes.icon2}>
        <ButtonS />
        </span>
    
      </button>
      
      </Fragment>
  );
};

export default HeaderCartButton;
