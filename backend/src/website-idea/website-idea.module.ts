import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WebsiteIdea, WebsiteIdeaSchema } from './website-idea.schema';
import { WebsiteIdeaService } from './website-idea.service';
import { WebsiteIdeaController } from './website-idea.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: WebsiteIdea.name, schema: WebsiteIdeaSchema }]),
  ],
  controllers: [WebsiteIdeaController],
  providers: [WebsiteIdeaService],
  exports: [MongooseModule],
})
export class WebsiteIdeaModule {} 