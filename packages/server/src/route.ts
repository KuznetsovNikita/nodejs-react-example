import { Router } from "express";
import { CreateMessageDto } from "./message.dto";
import validationMiddleware from "./middlewares/validation.middleware";
import IndexController from "./controller";

class Route {
  public path = "/";
  public router = Router();
  public indexController = new IndexController();

  constructor() {
    this.router.get(`/channels`, this.indexController.getChannels);
    this.router.get(
      `/messages/:channelId(\\d+)`,
      this.indexController.getMessages
    );
    this.router.post(
      `/:channelId(\\d+)`,
      validationMiddleware(CreateMessageDto, "body"),
      this.indexController.createMessage
    );
  }
}

export default Route;
