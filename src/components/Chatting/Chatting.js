import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import * as MdIcon from "react-icons/md";
import queryString from "query-string";
import * as style from "./styles";
import NestedList from "./NestedList.js";
import Messages from "./Messages";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";
import AuthContext from "../../store";
import interviewAPI from "../../api/interviewAPI";

let socket;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "280px",
    fontSize: "18px",
    color: "rgb(122, 122, 122)",
    borderBottom: "1px solid rgb(225, 229, 227)",
  },
  nested: {
    paddingLeft: theme.spacing(3),
  },
}));

function Chatting() {
  const classes = useStyles();
  const [state, actions] = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState([]);
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "35.174.145.15:5000";
  const location = useLocation().search;

  useEffect(() => {
    const { username, room } = queryString.parse(location);

    socket = io(ENDPOINT);

    setUsername(username);
    setRoom(room);

    socket.emit("join", { username, room }, (error) => {
      // if (error) {
      //   alert(error);
      // }
    });
  }, [ENDPOINT, location]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsername(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      console.log(message);
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  // 참여자 정보 가져오기
  useEffect(() => {
    getParticipant();
  }, [room]);
  const [participant, setParticipant] = useState([]);
  const getParticipant = async () => {
    await interviewAPI
      .participant(room)
      .then((result) => {
        setParticipant(result.data.data);
        console.log("participant result", result.data);
      })
      .catch((err) => console.log("participant error", err));
  };

  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <style.WrapColumn
        style={{
          justifyContent: "space-between",
          height: "100%",
          width: "320px",
        }}
      >
        {/* List */}
        <ListItem className={classes.root} button onClick={handleClick}>
          <ListItemText primary={room} />
          {open ? <MdIcon.MdExpandLess /> : <MdIcon.MdExpandMore />}
        </ListItem>
        {participant.map((e, idx) => (
          <NestedList open={open} room={room} participant={e} />
        ))}
        <Messages messages={messages} username={username} />

        {/* SEND */}
        <style.WrapColumn
          style={{
            padding: "16px",
            alignItems: "left",
            borderTop: "1px solid #E1E5E3",
            zIndex: "1",
          }}
        >
          <style.WrapRow
            style={{ justifyContent: "space-between", width: "250px" }}
          >
            <style.WrapRow>
              <style.Span>받는 사람 : </style.Span>
              <style.SendWho>Everyone</style.SendWho>
            </style.WrapRow>
            <style.SendBtn onClick={(event) => sendMessage(event)}>
              전송
            </style.SendBtn>
          </style.WrapRow>
          <style.TextInput
            placeholder="여기에 메시지를 입력하세요."
            className="input"
            type="text"
            // placeholder="Type a message..."
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={(event) =>
              event.key === "Enter" ? sendMessage(event) : null
            }
          />
        </style.WrapColumn>
      </style.WrapColumn>
    </>
  );
}

export default Chatting;
