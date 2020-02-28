import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
      this.currentId = this.startingId;
  }

  submit(title:string, author:string, body:string, type:string, imgUrl:string, tags:string){
      //console.log(`Title: ${title} \n Author: ${author} \n Body: ${body} \n Type: ${type} \n imgUrl: ${imgUrl} \n Tags: ${tags}`);

      this.newItem = {
      id: this.currentId,
      title: title,
      author: author,
      body: body,
      type: type,
      imgUrl: imgUrl,
      tags: [tags]
    };

    this.currentId++;
    this.newEvent.emit(this.newItem);

    console.log(this.newItem);
  }
  

}
