import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router'

import { SubjectDetailService, SubjectDetail } from './subject-detail.service'

@Component({
    template: `
    <ul>
        <li *ngFor="let subject of subjectDetail | async">
            <h4>개요</h4>
			{{subject.summary}}
            <h4>상세 설명</h4>
			{{subject.desc}}
        </li>
    </ul>
    `
})
export class SubjectDetailComponent implements OnInit {
    private subjectDetail: Observable<SubjectDetail[]>;
    
    constructor(
        private route: ActivatedRoute,
        private service: SubjectDetailService 
        ) {}

    ngOnInit() {
        this.subjectDetail = this.route.params.switchMap(
            (params: Params) => {
                return this.service.getSubjectDetail(params['id']);
            }
        )
    }
}
