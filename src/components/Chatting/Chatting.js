import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import * as style from "./styles";
import NestedList from './NestedList.js';
import Messages from './Messages';
import io from 'socket.io-client';
import { useLocation } from 'react-router-dom';


let socket;

function Chatting() {

  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState([]);
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localhost:5000';
  const location = useLocation().search;

  useEffect(() => {
    const {username, room} = queryString.parse(location);

    socket = io(ENDPOINT);

    setUsername(username);
    setRoom(room);

    socket.emit('join', {username,room}, (error) => {
      // if (error) {
      //   alert(error);
      // }
    });

  },[ENDPOINT,location]);

  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsername(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      console.log(message)
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }
 
  return (
    <>
      <style.WrapColumn style={{justifyContent:'space-between',height: '100%'}}>
        
        {/* List */}
        <NestedList room={room}/>
        <Messages messages={messages} username={username}/>

        {/* SEND */}
        <style.WrapColumn style={{padding: '16px', alignItems:'left', borderTop: '1px solid #E1E5E3', zIndex:'1'}}>
            <style.WrapRow style={{justifyContent:"space-between", width:'250px'}}>
                <style.WrapRow>
                    <style.Span>받는 사람 : </style.Span>
                    <style.SendWho>Everyone</style.SendWho>
                </style.WrapRow>
                <style.SendBtn onClick={(event) => sendMessage(event)}>전송</style.SendBtn>
            </style.WrapRow>
            <style.TextInput 
              placeholder='여기에 메시지를 입력하세요.'
              className="input"
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={({ target: { value } }) => setMessage(value)}
              onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
          />
        </style.WrapColumn>

        </style.WrapColumn>
    </>
  );
}

export default Chatting;