import cors from "cors";
import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import errorMiddleware from "./middlewares/error.middleware";
import Route from "./route";

class App {
  public app: express.Application = express();
  public port: string | number = process.env.PORT || 3002;
  public env: string = process.env.NODE_ENV || "development";

  constructor() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    const route = new Route();
    this.app.use("/", route.router);

    this.initializeSwagger();
    this.app.use(errorMiddleware);

    this.app.listen(this.port, () => {
      console.info(`ENV: ${this.env}`);
      console.info(`App listening on the port ${this.port}`);
    });
  }

  private initializeSwagger(): void {
    const options = {
      swaggerDefinition: {
        info: {
          title: "REST API",
          version: "1.0.0",
          description: "Example docs",
        },
      },
      apis: ["swagger.yaml"],
    };

    const specs = swaggerJSDoc(options);
    this.app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));
  }
}

export default App;
