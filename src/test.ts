import { trace } from './decorators'

class ParentClass {
	p1 = 42;

	iMethod0(arg1:number) {
		console.log(`DO something in iMethod0(${arg1}). p1 = ${this.p1}`);
		return arg1;
	}

	@trace(true)
	iMethod1(arg1:number) {
		console.log(`DO something in iMethod1(${arg1}). p1 = ${this.p1}`);
		return arg1;
	}

	@trace(true, 'IMPORTANT! ')
	iMethod2(arg1:number) {
		console.log(`DO something in iMethod2(${arg1}). p1 = ${this.p1}`);
		return arg1;
	}

	@trace(false)
	iMethod3(arg1:number) {
		console.log(`DO something in iMethod3(${arg1}). p1 = ${this.p1}`);
		return arg1;
	}
}

class ChildClass extends ParentClass {
	p1 = 100;
}

export function test1() {
	let parent = new ParentClass();
	parent.iMethod0(10);
	let ret1 = parent.iMethod1(10);
	console.log(`return = ${ret1}`);
	parent.iMethod2(20);
	parent.iMethod3(30);

	console.log('------------');

	let child = new ChildClass();
	child.iMethod0(10);
	let ret2 = child.iMethod1(10);
	console.log(`return = ${ret2}`);
	child.iMethod2(20);
	child.iMethod3(30);
}

test1();
