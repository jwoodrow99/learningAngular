import { Component, OnInit } from '@angular/core';
import { Content } from '../content-card/content-card-helper';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

    contentList: Content[] = [
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
          },
          {
              id: 4,
              author: "Author4",
              imgUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_138950.png&f=1&nofb=1",
              type: "type4",
              title: "title4",
              body: "body4"
          },
          {
              id: 5,
              author: "Author5",
              imgUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_138950.png&f=1&nofb=1",
              type: "type5",
              title: "title5",
              body: "body5",
              tags: ["tag1", "tag2", "tag3"]
          }
      ];

  constructor() {
      
  }

  ngOnInit() {
  }

}
