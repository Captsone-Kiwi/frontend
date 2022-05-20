import React from "react";
import { css } from "@emotion/css";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message.js";

const ROOT_CSS = css({
  height: "100%",
  width: "300px",
  overflow: "auto",
  margin: "0 10px",
  // paddingLeft : '20px',
});

const Messages = ({ messages, username }) => (
  <>
    <ScrollToBottom className={ROOT_CSS}>
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} username={username} />
        </div>
      ))}
    </ScrollToBottom>
  </>
);

export default Messages;
