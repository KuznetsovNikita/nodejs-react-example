import React from "react";
import { Message } from "../models";
import "./messages.less";

interface MessagesProps {
  messages: Message[] | undefined;
}

export const Messages: React.FC<MessagesProps> = React.memo((props) => {
  return (
    <div className="messages">
      <h3>Messages</h3>
      <MessagesList {...props} />
    </div>
  );
});

const MessagesList: React.FC<MessagesProps> = React.memo(({ messages }) => {
  if (messages == null) return <span>Please select a channel</span>;

  if (messages.length === 0) return <span>Loading...</span>;

  return (
    <>
      {messages.map((message) => {
        return (
          <div className="message" key={message.messageId || "unsaved-message"}>
            {message.text}
          </div>
        );
      })}
    </>
  );
});
