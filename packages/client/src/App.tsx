import React from "react";
import {
  generateFaceMessage,
  requestCreateMessage,
  useChannels,
  useMessages,
} from "./api-hooks";
import "./app-style.less";
import { Channels } from "./channels/Channels";
import { Form } from "./form/Form";
import { Messages } from "./messages/Messages";

export const App: React.FC = () => {
  const [selectedChannelId, selectChannel] = React.useState<number>();

  const channels = useChannels();
  const [messages, setMessages] = useMessages(selectedChannelId);

  const submitMessage = React.useCallback(
    async (channelId: number, text: string) => {
      setMessages((item) => item.concat(generateFaceMessage(channelId, text)));

      const newMessages = await requestCreateMessage(channelId, text);
      if (newMessages) {
        setMessages(newMessages);
      }
    },
    [setMessages]
  );

  return (
    <div className="app">
      <Channels
        channels={channels}
        selectedChannelId={selectedChannelId}
        selectChannel={selectChannel}
      />
      <Messages messages={messages} />
      <Form
        selectedChannelId={selectedChannelId}
        submitMessage={submitMessage}
      />
    </div>
  );
};
