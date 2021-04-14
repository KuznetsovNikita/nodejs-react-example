import { Channel, Message } from './models';
import { CreateMessageDto } from './message.dto';

export class Service {
  private channels: Channel[] = [
    {
      channelId: 1,
      name: 'Channel 1',
    },
    {
      channelId: 2,
      name: 'Channel 2',
    },
    {
      channelId: 3,
      name: 'Channel 3',
    },
  ];

  private index = 0;
  private messages: Message[] = [
    {
      messageId: ++this.index,
      channelId: 1,
      text: 'Init message for channel 1',
    },
    {
      messageId: ++this.index,
      channelId: 2,
      text: 'Init message for channel 2',
    },
    {
      messageId: ++this.index,
      channelId: 3,
      text: 'Init message for channel 2',
    },
  ];

  public async getChannels(): Promise<Channel[]> {
    return this.channels;
  }

  public async getMessages(channelId: number): Promise<Message[]> {
    return this.messages.filter(item => item.channelId === channelId);
  }

  public async createMessage({ text }: CreateMessageDto, channelId: number): Promise<Message[]> {
    const message = {
      messageId: ++this.index,
      channelId,
      text,
    };

    this.messages.push(message);

    return this.getMessages(channelId);
  }
}
