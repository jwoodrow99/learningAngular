import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Content} from '../content-card/content-card-helper';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

    @Input() startingId; // made it dynamic so it's based on the current length of the band list
    @Output() newEvent = new EventEmitter<Content>();
    newItem: Content;
    currentId: number;

    title: string;
    author: string;
    body: string;
    type: string;
    imgUrl: string;
    tags: string;
    error: string;

  constructor() { }

  ngOnInit(): void {
      this.currentId = this.startingId;
  }

  submit(title:string, author:string, body:string, type:string, imgUrl?:string, tags?:string):void {
      //console.log(`Title: ${title} \n Author: ${author} \n Body: ${body} \n Type: ${type} \n imgUrl: ${imgUrl} \n Tags: ${tags}`);

      const ourPromise = new Promise((success, fail) => {
        this.newItem = {
            id: this.currentId,
            title: title,
            author: author,
            body: body,
            type: type,
            imgUrl: imgUrl,
            tags: tags.split(",")
        };

        if (title && author && body && type) {
              this.currentId++;
              this.newEvent.emit(this.newItem);
              success(`${title} has been added successfully!`);
          } else {
              fail('Content was NOT added successfully!');
          }
      });

    ourPromise.then((successResult) => {
        this.error = '';
        this.title = '';
        this.author = '';
        this.body = '';
        this.type = '';
        this.imgUrl = '';
        this.tags = '';
        return console.log(successResult); })
          .catch(failResult => this.error = failResult);
  }
}
