import React from "react";
import { Channel, Message } from "./models";

interface State {
  channels: Channel[];
  messages: Message[] | undefined;
  selectedChannelId: number | undefined;
  selectChannel: (id: number) => void;
  submitMessage: (id: number, text: string) => void;
}

const initState: State = {
  channels: [],
  messages: undefined,
  selectedChannelId: undefined,
  selectChannel: () => null,
  submitMessage: () => null,
};

export const StateContext = React.createContext<State>(initState);
