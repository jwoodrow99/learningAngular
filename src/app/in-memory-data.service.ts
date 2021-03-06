import { Injectable } from '@angular/core';
import { Content } from './content-card/content-card-helper'
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {contentList} from './contentDb';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    const content = contentList;
    return {content};
  }

  genId(content: Content[]): number {
    return content.length > 0 ? Math.max(...content.map(content=> content.id)) + 1 : 2000;
    }
}
