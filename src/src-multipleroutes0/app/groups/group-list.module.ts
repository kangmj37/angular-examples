import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GroupListComponent }    from './group-list.component';

const groupListRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '__first__',
        pathMatch: 'full'
      },
      {
        path: ':group',
        component: GroupListComponent,
        children: [
          {
            path: '',
			loadChildren: 'src-multipleroutes0/app/group-detail/group-detail.module#GroupDetailModule'
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(groupListRoutes)
  ],
  declarations: [
    GroupListComponent
  ],
  providers: []
})
export class GroupListModule { }
