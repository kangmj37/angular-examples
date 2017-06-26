export class SubjectDetail {
    constructor(public id: number, public summary: string, public desc: string) {}
}

const SUBJECTDETAIL: SubjectDetail[][] = [
    [ 
		new SubjectDetail(
			1,
			"브라우저에서의 API, 동작 방식 및 프로토콜을 이해한다.",
			"최근에 사파리 브라우저에서도 WebRTC를 지원한다는 공식 발표가 있었습니다."
		)
	],
    [ 
		new SubjectDetail(
			2, 
			"TypeScript를 배워봅시다.",
			"TypeScript를 배워봅시다."
		)
	],
    [ 
		new SubjectDetail(
			3,
			"Bash를 배워봅시다.",
			"Bash를 배워봅시다"
		)
	]
]

import { Injectable } from '@angular/core';

@Injectable()
export class SubjectDetailService {
    private SubjectDetailPromise: Promise<SubjectDetail[]>[];

    constructor() {
        this.SubjectDetailPromise = new Array();
        SUBJECTDETAIL.forEach((subject: SubjectDetail[], index: number) => {
            this.SubjectDetailPromise[index] = Promise.resolve(subject); 
        });
    }

    getSubjectDetail(id: number) {
        return this.SubjectDetailPromise[id - 1];
    }
}
