import { Component, OnInit } from '@angular/core';

export interface Content{
    id: number;
    author: string;
    imgUrl?: string;
    type?: string;
    title: string;
    body: string;
    tags?: string[];
}

class ContentList {
    private _types: Content[];

    constructor() {
        this._types = [];
    }

    get types(): Content[] {
        return this._types;
    }

    addContent(i: Content){
        this._types.push(i);
    }

    get length(): number {
        return this._types.length;
    }

    contentHtml(i: number) {
        const siteContent = this._types[i];
        const outputContent = ` ID: ${siteContent.id}
                                Author: ${siteContent.author}
                                imgUrl: ${siteContent.imgUrl}
                                type: ${siteContent.type}
                                title: ${siteContent.title}
                                body: ${siteContent.body}
                                tags: ${siteContent.tags}`
        
        return outputContent;
    }
}

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

    content: Content[];
    contentList: ContentList;

  constructor() { 
      this.content = [
          {
              id: 1,
              author: "Author1",
              imgUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_138950.png&f=1&nofb=1",
              type: "type1",
              title: "title1",
              body: "body1",
              tags: ["tag1", "tag2", "tag3"]
          },
          {
              id: 2,
              author: "Author2",
              imgUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_138950.png&f=1&nofb=1",
              type: "type2",
              title: "title2",
              body: "body2",
              tags: ["tag1", "tag2", "tag3"]
          },
          {
              id: 3,
              author: "Author3",
              imgUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_138950.png&f=1&nofb=1",
              type: "type3",
              title: "title3",
              body: "body3",
              tags: ["tag1", "tag2", "tag3"]
          }
      ];

      this.contentList = new ContentList();

      this.content.forEach(i => {
          this.contentList.addContent(i);
      });
  }

  ngOnInit():void {
      this.contentList.contentHtml(0);
      this.processContent(this.content[0]);
  }

  processContent(i: Content):void{
      console.log(i);
      
  }

}
