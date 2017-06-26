import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

import { SubjectsRoutingModule } from './subjects-routing.module'

import { SubjectsComponent } from './subjects.component'
import { SubjectsListComponent } from './subjects-list.component'
import { SubjectsEmptyComponent } from './subjects-empty.component'

import { SubjectsListService } from './subjects-list.service'

@NgModule ({
    imports: [
        FormsModule,
        CommonModule,
        SubjectsRoutingModule
    ],
    declarations: [
        SubjectsComponent,
        SubjectsListComponent,
        SubjectsEmptyComponent
    ],
    providers: [
        SubjectsListService
    ]
})
export class SubjectsModule {
}
