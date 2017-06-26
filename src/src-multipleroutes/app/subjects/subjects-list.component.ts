import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { SubjectsList, SubjectsListService } from './subjects-list.service';

@Component({
    template: `
    <table>
        <tr>
            <td>
                <ul class="items">
                    <li *ngFor="let subject of subjectsList | async"
                      (click)="onSubjectSelect(subject)"
                       [class.selected]="isSubjectSelected(subject)">
                        <span class="id">{{subject.id}}</span>
                         {{subject.name}}
                    </li>
                </ul>
            </td>
            <td>
                <router-outlet></router-outlet>
            </td>
        </tr>
    </table>
    `
})
export class SubjectsListComponent implements OnInit { 
    subjectsList: Observable<SubjectsList[]>;
    selectedSubjectId: number;

    constructor(
        private service: SubjectsListService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        // Not use params ... ?
        this.subjectsList = this.route.params.switchMap(
            (params: Params) => {
                this.selectedSubjectId = +params['id'];
                return this.service.getSubjectsList(); 
            }
        )
//      this.subjectsList = this.service.getSubjectsList();
    }

    onSubjectSelect(subject: SubjectsList) {
        this.selectedSubjectId = subject.id;

        // { relativeTo: thos.route } what mean ???
        this.router.navigate([subject.id], {relativeTo: this.route});
    }

    isSubjectSelected(subject: SubjectsList) {
        return this.selectedSubjectId === subject.id;
    }
}
