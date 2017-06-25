import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'groups',
        pathMatch: 'full'   
    },
    {
        path: '.html',
        redirectTo: 'groups',
        pathMatch: 'full'
    },
    {
        path: 'groups',
        // How to 'Path base setting' ??? 
        loadChildren: 'src-multipleroutes/app/groups/groups.module#GroupsModule'
    },
    {
        path: 'subjects',
        loadChildren: 'src-multipleroutes/app/subjects/subjects.module#SubjectsModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }