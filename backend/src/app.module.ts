import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WebsiteIdeaModule } from './website-idea/website-idea.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/website_ideas'),
    WebsiteIdeaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
