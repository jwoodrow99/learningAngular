import { Component, OnInit } from '@angular/core';
import { Content } from '../content-card/content-card-helper';
import {ContentService} from '../services/content.service';
import {contentList} from '../contentDb';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

    content: Content[];
    contentList = contentList;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
      this.contentService.getContentObs().subscribe(c => this.content = c);
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
        this.contentService.addContent(newItem).subscribe(content => this.content.push(content));
        //this.contentList.push(newItem);
        const myClonedArray  = Object.assign([], this.contentList);
        this.contentList = myClonedArray;
    }
    
    updateToList(updateContent: Content){
        this.contentService.updateContent(updateContent).subscribe(() => console.log("Content updated"));
    }
}
