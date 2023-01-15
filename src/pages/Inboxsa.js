
import "./Inboxsa.css"
import React, { Fragment, useEffect, useRef, useState } from 'react';
import NameGr from "../icon/namegrp";
import { Navbar, Container, Nav} from "react-bootstrap"
import Arrow from "../icon/arrow"
import PerfectScrollbar from "perfect-scrollbar";




const Inboxsa = (props) => {


  const [time] = useState(new Date().toLocaleTimeString());

  const isiChatRef = useRef(null);
  let ps;

  useEffect(() => {
    let ps = new PerfectScrollbar(isiChatRef.current, {
      wheelSpeed: 0.5,
      wheelPropagation: false,
      minScrollbarLength: 150,
      suppressScrollY: false,
      suppressScrollX: false,
      useBothWheelAxes: true,
    });
    return () => {
      ps.destroy();
    }
  },[])

  const [messages, setMessages] = useState([
    { id: 1, text: "No worries, It will be completed ASAP. I've asked him yesterday.", isYou: true, time },
    { id: 2, text: "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks",isYou: false, time },
    { id: 1, text: 'Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary', isYou: true, time },
    { id: 2, text: 'Sure thing, Claren', isYou: false, time },
    { id: 3, text: "Morning, I'll try to do them Thanks", isYou: false, time },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const messagesEndRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, { id: messages.length + 1, text: newMessage, isYou: true }]);
    messagesEndRef.current.scrollIntoView({ behavior: "instant" })
    const element = document.getElementsByClassName("isiChat");
    element.scrollTop = element.scrollHeight;
    setNewMessage('');
    ps.update();
  };


  return (
    <Fragment>
      <Navbar>
        <Nav.Link href=" # " onClick={props.onClose} ><Arrow  /> </Nav.Link>
        <Container>
          
          <Navbar.Brand><NameGr /></Navbar.Brand>
          <Nav>
      <Nav.Link href=' # ' className="close" onClick={props.onClose}>
        X
            </Nav.Link>
            </Nav>
          </Container>
    </Navbar>
      <div ref={isiChatRef} className="isiChat">
        
      <div>
          {messages.map((message) => (
            <Fragment>
              <div key={message.id}>
            {message.isYou && <p className="you">You</p>}
              </div>
              <div key={message.id}>
                {message.id === 2 && <p className="mary">Mary Hilda</p>}
              </div>
              <div key={message.id}>
                {message.id === 3 && <p className="oba">Obaidullah Amarkhil</p>}
                </div>
              <div ref={messagesEndRef} />
              <div className={`message ${(message.isYou) ? 'message-right' : 'message-left'}`} key={message.id}>{message.text}
                <br />
                <p className="waktu">{time}</p>
              </div>
              </Fragment>
        ))}
        </div>
        
  
      </div>
      <div className="input">
        <form onSubmit={handleSubmit}>
        <input required className="inpt"
          type="text"
          value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a new message "
          />
         
          <button
            className="btn btn-primary"
            type="submit">Send</button>
      </form>
      </div>
      
      
    </Fragment>
  
  );
};

export default Inboxsa;
