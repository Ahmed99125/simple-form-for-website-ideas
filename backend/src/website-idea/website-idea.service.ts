import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WebsiteIdea, WebsiteIdeaDocument } from './website-idea.schema';

@Injectable()
export class WebsiteIdeaService {
  constructor(
    @InjectModel(WebsiteIdea.name)
    private websiteIdeaModel: Model<WebsiteIdeaDocument>,
  ) {}

  async create(idea: string): Promise<WebsiteIdea> {
    const sections = ['Hero', 'About', 'Contact'];
    const created = new this.websiteIdeaModel({ idea, sections });
    return created.save();
  }

  async findAll(): Promise<WebsiteIdea[]> {
    return this.websiteIdeaModel.find().sort({ createdAt: -1 }).exec();
  }
} 