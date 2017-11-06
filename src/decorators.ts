export function trace(enable: boolean, prefix: string = '') {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		const originMethod = descriptor.value;
		descriptor.value = function(...args) {
			console.log(`${prefix}>>> ENTER HM::${propertyKey}`);
			//originMethod(args);
			console.log('METHOD call');
			console.log(`${prefix}<<< EXIT HM::${propertyKey}`);

		}

		console.log(`Trace call ${prefix} - ${propertyKey}`);

		return descriptor;
	}
}
