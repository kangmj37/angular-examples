import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'

import { GroupDetailComponent } from './group-detail.component'

import { GroupDetailService } from './group-detail.service'

const groupDetailRoute: Routes = [
    {
        path: '',
        component: GroupDetailComponent
    },
]

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(groupDetailRoute)
    ],
    declarations: [
        GroupDetailComponent
    ],
    providers: [
        GroupDetailService
    ],
})
export class GroupDetailModule {
}