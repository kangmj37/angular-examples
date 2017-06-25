import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

import { GroupsRoutingModule } from './groups-routing.module'

import { GroupsComponent } from './groups.component'
import { GroupsListComponent } from './groups-list.component'
import { GroupsEmptyComponent } from './groups-empty.component'

import { GroupsListService } from './groups-list.service'

@NgModule ({
    imports: [
        FormsModule,
        CommonModule,
        GroupsRoutingModule
    ],
    declarations: [
        GroupsComponent,
        GroupsListComponent,
        GroupsEmptyComponent
    ],
    providers: [
        GroupsListService
    ]
})
export class GroupsModule {
}