import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroupsComponent } from './groups.component';
import { GroupsListComponent } from './groups-list.component';
import { GroupsEmptyComponent } from './groups-empty.component';

const groupsRoutes: Routes = [
    {
        path: '',
        component: GroupsComponent,
        children: [
            {
                path: '',
                component: GroupsListComponent,
                children: [
                    {
                        path: '',
                        component: GroupsEmptyComponent    
                    },
                    {
                        path: ':id',
                        loadChildren: 'src-multipleroutes/app/group-detail/group-detail.module#GroupDetailModule'
                    }
                ]
            }
        ] 
    }
]

@NgModule ({
    imports: [
        RouterModule.forChild(groupsRoutes)
    ],
    exports: [
        RouterModule
    ],
})
export class GroupsRoutingModule {}