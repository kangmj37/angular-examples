import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { CoreModule }       from './core/core.module';
import { DataModule }       from './data/data.module';
import { AppRoutingModule } from './app-routing.module'

import { GroupListModule }    from './groups/group-list.module';
import { GroupDetailModule }  from './group-detail/group-detail.module';

import { AppComponent }          from './app.component';
import { SubjectListComponent } from './subjects/subject-list.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { PageNotFoundComponent } from './not-found.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    CoreModule,
    DataModule,
    AppRoutingModule,
    GroupListModule,
    GroupDetailModule,
  ],
  declarations: [
    AppComponent,
    SubjectListComponent,
    SubjectDetailComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
