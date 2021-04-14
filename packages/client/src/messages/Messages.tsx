import React from "react";
import { Message } from "../models";
import { StateContext } from "../state";
import "./messages.less";

export const Messages = () => {
  const { messages } = React.useContext(StateContext);

  return (
    <div className="messages">
      <h3>Messages</h3>
      <MessagesList messages={messages} />
    </div>
  );
};

interface MessagesProps {
  messages: Message[] | undefined;
}

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
