import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router'

import {GroupDetailService, GroupDetail } from './group-detail.service'

@Component({
    template: `
    <ul class="items">
        <table *ngFor="let detail of groupDetail | async">
            <tr *ngFor="let member of detail.members">
                <td>{{member}}</td>
            </tr>
        </table>
    </ul>
    `
})
export class GroupDetailComponent implements OnInit {
    private groupDetail: Observable<GroupDetail[]>;
    
    constructor(
        private route: ActivatedRoute,
        private service: GroupDetailService 
        ) {}

    ngOnInit() {
        this.groupDetail = this.route.params.switchMap(
            (params: Params) => {
                return this.service.getGroupDetail(params['id']);
            }
        )
    }
}