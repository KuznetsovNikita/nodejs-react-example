export interface Channel {
  channelId: number;
  name: string;
}

export interface Message {
  channelId: number;
  messageId: number;
  text: string;
}
