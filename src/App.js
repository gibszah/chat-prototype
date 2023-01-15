
  import { Fragment, useState } from "react";
  import Header from "./layout/Header";
  import Cart from "./layout/Cart";
  import React from "react";

 


  // import Pilihan from './list/pilihan';
  // import List from "./newList/newList";
  // import { useState } from "react";
  // import UseNewMessage from "./newList/newMessage";


  function App() {

    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
      setCartIsShown(true)
    }

    const hideCartHandler = () => {
      setCartIsShown(false)
    }

    return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />} 
        <Header onShowCart={showCartHandler} />
    </Fragment>
    )
  }

  export default App;

