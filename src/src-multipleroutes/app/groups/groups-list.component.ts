import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { GroupsList, GroupsListService } from './groups-list.service';

@Component({
    template: `
    <ul class="items">
        <li *ngFor="let group of groupsList | async"
            (click)="onGroupSelect(group)"
            [class.selected]="isGroupSelected(group)">
            <span class="id">{{group.id}}</span>
            {{group.name}}
        </li>
    </ul>

    <router-outlet></router-outlet>
    `
})
export class GroupsListComponent implements OnInit { 
    groupsList: Observable<GroupsList[]>;
    selectedGroupId: number;

    constructor(
        private service: GroupsListService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        // Not use params ... ?
        this.groupsList = this.route.params.switchMap(
            (params: Params) => {
                this.selectedGroupId = +params['id'];
                return this.service.getGroupsList(); 
            }
        )
//      this.groupsList = this.service.getGroupsList();
    }

    onGroupSelect(group: GroupsList) {
        this.selectedGroupId = group.id;

        // { relativeTo: thos.route } what mean ???
        this.router.navigate([group.id], {relativeTo: this.route});
    }

    isGroupSelected(group: GroupsList) {
        return this.selectedGroupId === group.id;
    }
}