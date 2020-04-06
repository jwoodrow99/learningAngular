import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FilterTagsPipe } from './filter-tags.pipe';
import { UnderlineDirective } from './underline.directive';
import { TextDecorationDirective } from './text-decoration.directive';
import { CreateContentComponent, CreateContentDialogComponent } from './create-content/create-content.component';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';

// Assignment 7
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService} from './in-memory-data.service';

// Assignment 8
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatRippleModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    FilterTagsPipe,
    UnderlineDirective,
    TextDecorationDirective,
    CreateContentComponent,
    MessagesComponent,
    CreateContentDialogComponent,
    ContentDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatDialogModule,
    MatRippleModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false, delay: 1000 }),
    RouterModule.forRoot([
        { path: 'content', component: ContentListComponent },
        { path: 'content/:id', component: ContentDetailComponent },
        { path: '', component: ContentListComponent },
        { path: '**', component: NotFoundComponent }
    ])
  ],
  entryComponents: [
      CreateContentDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
