export class GroupDetail {
    constructor(public id: number, public members: string[]) {}
}

const GROUPDETAIL: GroupDetail[][] = [
    [ new GroupDetail(1, ["강현아","지종현","조재영","최가희","박진아","김미소","강명진"]) ],
    [ new GroupDetail(2, ["김XX","이XX","최XX"]) ],
    [ new GroupDetail(3, ["김YY","이YY","최YY"]) ]
]

import { Injectable } from '@angular/core';

@Injectable()
export class GroupDetailService {
    private GroupDetailPromise: Promise<GroupDetail[]>[];

    constructor() {
        this.GroupDetailPromise = new Array();
        GROUPDETAIL.forEach((group: GroupDetail[], index: number) => {
            this.GroupDetailPromise[index] = Promise.resolve(group); 
        });
    }

    getGroupDetail(id: number) {
        return this.GroupDetailPromise[id - 1];
    }
}