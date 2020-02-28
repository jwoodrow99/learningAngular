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
              id: 0,
              author: "Author1",
              type: "news",
              title: "title1",
              body: "body1",
              tags: ["tag1", "tag2", "tag3"]
          },
          {
              id: 1,
              author: "Author2",
              imgUrl: "",
              type: "story",
              title: "title2",
              body: "body2",
              tags: ["tag1", "tag2", "tag3"]
          },
          {
              id: 2,
              author: "Author3",
              imgUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_138950.png&f=1&nofb=1",
              type: "news",
              title: "title3",
              body: "body3",
              tags: ["tag1", "tag2", "tag3"]
          },
          {
              id: 3,
              author: "Author4",
              imgUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_138950.png&f=1&nofb=1",
              type: "story",
              title: "title4",
              body: "body4"
          },
          {
              id: 4,
              author: "Author5",
              imgUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_138950.png&f=1&nofb=1",
              type: "news",
              title: "title5",
              body: "body5",
              tags: ["tag1", "tag2", "tag3"]
          }
      ];

  constructor() {
      
  }

  ngOnInit() {
  }

    findItem(title:string):void{

        let outputField = <HTMLElement> document.querySelector(".findItem > #output");
        let found:boolean = false;

        this.contentList.forEach(i => {
            if (i.title == title){
                found = true;
            }
        });

        if (found) {
            outputField.innerHTML = `"${title}" was found on our list!`;
            outputField.style.color = "green";
        } else {
            outputField.innerHTML = `"${title}" was NOT found on our list!`;
            outputField.style.color = "red";
        }
    }

    addToList(newItem: Content) {
        this.contentList.push(newItem);
        const myClonedArray  = Object.assign([], this.contentList);
        this.contentList = myClonedArray;
    }
}
