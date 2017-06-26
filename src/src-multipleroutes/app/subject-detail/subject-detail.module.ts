import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'

import { SubjectDetailComponent } from './subject-detail.component'

import { SubjectDetailService } from './subject-detail.service'

const subjectDetailRoute: Routes = [
    {
        path: '',
        component: SubjectDetailComponent
    },
]

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(subjectDetailRoute)
    ],
    declarations: [
        SubjectDetailComponent
    ],
    providers: [
        SubjectDetailService
    ],
})
export class SubjectDetailModule {
}
