export class SubjectsList {
    constructor(public id: number, public name: string) {}
}

const SUBJECTSLIST: SubjectsList[] = [
    new SubjectsList(1, "WebRTC"),
    new SubjectsList(2, "TypeScript"),
    new SubjectsList(3, "Bash")
]

import { Injectable } from '@angular/core';

@Injectable()
export class SubjectsListService {
    private SubjectsListPromise: Promise<SubjectsList[]>;

    constructor() {
        this.SubjectsListPromise = Promise.resolve(SUBJECTSLIST);
    }

    getSubjectsList() {
        return this.SubjectsListPromise;
    }
}
