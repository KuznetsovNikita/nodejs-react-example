import React from "react";
import { requestCreateMessage, useChannels, useMessages } from "./api-hooks";
import "./app-style.less";
import { Channels } from "./channels/Channels";
import { Form } from "./form/Form";
import { Messages } from "./messages/Messages";
import { Message } from "./models";
import { StateContext } from "./state";

function generateFakeMessage(channelId: number, text: string): Message {
  return {
    channelId,
    text,
  };
}

const StateProvider: React.FC = ({ children }) => {
  const [selectedChannelId, selectChannel] = React.useState<number>();

  const channels = useChannels();
  const [messages, setMessages] = useMessages(selectedChannelId);

  const submitMessage = React.useCallback(
    async (channelId: number, text: string) => {
      setMessages((items) =>
        items.concat(generateFakeMessage(channelId, text))
      );

      const newMessages = await requestCreateMessage(channelId, text);
      if (newMessages) {
        setMessages(newMessages);
      }
    },
    [setMessages]
  );

  return (
    <StateContext.Provider
      value={{
        channels,
        messages,
        selectedChannelId,
        selectChannel,
        submitMessage,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const App: React.FC = () => {
  return (
    <StateProvider>
      <div className="app">
        <Channels />
        <Messages />
        <Form />
      </div>
    </StateProvider>
  );
};
