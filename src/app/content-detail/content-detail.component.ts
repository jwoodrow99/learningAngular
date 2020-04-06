import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContentService} from '../services/content.service';
import {Content} from '../content-card/content-card-helper';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

    id: number;
    content: Content;

    constructor(private route: ActivatedRoute, private contentService: ContentService) { 
        this.content = {
            title: '',
            author: '',
            body: '',
            type: '',
            imgUrl: '',
            tags: []
        };
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.id = +params.get('id');
            this.contentService.getContentItem(this.id).subscribe(c => {
                this.content = c;
                console.log(this.content);
            });
        });
    }

}
