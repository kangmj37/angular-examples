export function trace(enable: boolean, prefix: string = '') {
	console.log();
	console.log(`Trace call enable:${enable} - prefix:${prefix}`);
	
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		const originMethod = descriptor.value;
		descriptor.value = function(...args) {
			if (enable) console.log(`${prefix}>>> ENTER HM::${propertyKey}`);
			// How ???
			// originMethod(args);
			console.log('METHOD call');
			if (enable) console.log(`${prefix}<<< EXIT HM::${propertyKey}`);

		}

		console.log(`Trace function call ${prefix} - ${propertyKey}`);

		return descriptor;
	}
}
