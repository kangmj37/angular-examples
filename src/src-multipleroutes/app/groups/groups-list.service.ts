export class GroupsList {
    constructor(public id: number, public name: string) {}
}

const GROUPSLIST: GroupsList[] = [
    new GroupsList(1, "최신 웹 개발"),
    new GroupsList(2, "리눅스 네트워크"),
    new GroupsList(3, "CSS의 이해")
]

import { Injectable } from '@angular/core';

@Injectable()
export class GroupsListService {
    private GroupsListPromise: Promise<GroupsList[]>;

    constructor() {
        this.GroupsListPromise = Promise.resolve(GROUPSLIST);
    }

    getGroupsList() {
        return this.GroupsListPromise;
    }
}