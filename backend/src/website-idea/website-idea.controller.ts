import { Controller, Post, Body, Get } from '@nestjs/common';
import { WebsiteIdeaService } from './website-idea.service';

@Controller('website-ideas')
export class WebsiteIdeaController {
  constructor(private readonly websiteIdeaService: WebsiteIdeaService) {}

  @Post()
  async create(@Body('idea') idea: string) {
    return this.websiteIdeaService.create(idea);
  }

  @Get()
  async findAll() {
    return this.websiteIdeaService.findAll();
  }
} 