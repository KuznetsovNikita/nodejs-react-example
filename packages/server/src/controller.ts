import { CreateMessageDto } from './message.dto';
import { NextFunction, Request, Response } from 'express';
import { Service } from './service';

class IndexController {
  public service = new Service();

  public getChannels = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await this.service.getChannels();
      res.status(200).json({ data, message: 'channels' });
    } catch (error) {
      next(error);
    }
  };

  getMessages = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const channelId = Number(req.params.channelId);
      const data = await this.service.getMessages(channelId);
      res.status(200).json({ data, message: 'messages' });
    } catch (error) {
      next(error);
    }
  };

  createMessage = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const channelId = Number(req.params.channelId);
      const body: CreateMessageDto = req.body;
      const data = await this.service.createMessage(body, channelId);
      res.status(200).json({ data, message: 'createMessage' });
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
