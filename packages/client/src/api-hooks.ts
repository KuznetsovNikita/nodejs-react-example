import React from "react";
import { Channel, Message } from "./models";

const baseUrl = "http://localhost:3002";

interface Response<P> {
  data: P;
}

export const useChannels = () => {
  const [channels, setChannels] = React.useState<Channel[]>([]);

  React.useEffect(() => {
    fetch(`${baseUrl}/channels`)
      .then((result) => result.json())
      .then((result: Response<Channel[]>) => setChannels(result.data))
      .catch((e) => console.error(e));
  }, []);

  return channels;
};

export const useMessages = (channelId: number | undefined) => {
  const [messages, setMessages] = React.useState<Message[] | undefined>();

  React.useEffect(() => {
    if (channelId != null) {
      setMessages([]);
      fetch(`${baseUrl}/messages/${channelId}`)
        .then((result) => result.json())
        .then((result: Response<Message[]>) => setMessages(result.data))
        .catch((e) => console.error(e));
    } else {
      setMessages(undefined);
    }
  }, [channelId]);

  return [messages, setMessages] as [
    Message[],
    React.Dispatch<React.SetStateAction<Message[]>>
  ];
};

export function generateFaceMessage(channelId: number, text: string): Message {
  return {
    channelId,
    text,
  };
}

export function requestCreateMessage(channelId: number, text: string) {
  return fetch(`${baseUrl}/${channelId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  })
    .then((result) => result.json())
    .then((result: Response<Message[]>) => result.data)
    .catch((e) => console.error(e));
}
