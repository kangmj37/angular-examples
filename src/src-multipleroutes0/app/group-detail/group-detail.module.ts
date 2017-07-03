import { NgModule }      from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { GroupDetailComponent }    from './group-detail.component';

const groupDetailRoutes: Routes = [
  {
    path: '',
    component: GroupDetailComponent
  }
]

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(groupDetailRoutes)
  ],
  declarations: [
    GroupDetailComponent
  ],
  providers: []
})
export class GroupDetailModule { }
