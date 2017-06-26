import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubjectsComponent } from './subjects.component';
import { SubjectsListComponent } from './subjects-list.component';
import { SubjectsEmptyComponent } from './subjects-empty.component';

const subjectsRoutes: Routes = [
    {
        path: '',
        component: SubjectsComponent,
        children: [
            {
                path: '',
                component: SubjectsListComponent,
                children: [
                    {
                        path: '',
                        component: SubjectsEmptyComponent    
                    },
                    {
                        path: ':id',
                        loadChildren: 'src-multipleroutes/app/subject-detail/subject-detail.module#SubjectDetailModule'
                    }
                ]
            }
        ] 
    }
]

@NgModule ({
    imports: [
        RouterModule.forChild(subjectsRoutes)
    ],
    exports: [
        RouterModule
    ],
})
export class SubjectsRoutingModule {}
