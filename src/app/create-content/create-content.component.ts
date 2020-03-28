import { Component, OnInit, Input, Output, EventEmitter, Inject} from '@angular/core';
import {Content} from '../content-card/content-card-helper';
import {ContentService} from '../services/content.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
    newContentItem: Content;
}

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

    // title: string;
    // author: string;
    // body: string;
    // type: string;
    // imgUrl: string;
    // tags: string;
    // error: string;

  constructor(public dialog: MatDialog) {
      this.resetNewContentItem();
  }

  ngOnInit(): void {
      this.currentId = this.startingId;
  }

      resetNewContentItem() {
        this.newItem = {
            title: '',
            author: '',
            body: '',
            type: '',
            imgUrl: '',
            tags: []
        };
      }

    addContent(): void {
        this.newEvent.emit(this.newItem);
        this.resetNewContentItem();
    }

    openDialog() {
        const dialogRef = this.dialog.open(CreateContentDialogComponent, {
            width: '350px',
            data: {newContentItem: this.newItem}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
            this.newItem = result;
            this.addContent();
        });
    }
}

@Component({
    selector: 'create-content-dialog',
    templateUrl: './create-content-dialog.component.html',
})

export class CreateContentDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<CreateContentDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}
