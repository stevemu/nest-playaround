import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod
} from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CatsController } from "./cats/cats.controller";
import { CatsService } from "./cats/cats.service";
import { CatsModule } from "./cats/cats.module";
import { LoggerMiddleware } from "./logger.middleware";

@Module({
  imports: [CatsModule]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: "cats", method: RequestMethod.GET });
  }
}
