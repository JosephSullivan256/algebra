
export class Group<T>{
	constructor(
		readonly e: T,
		readonly multiply: (x: T, y:T) => T,
		readonly invert: (x: T) => T
	) {}
}

export function groupDirectProduct<T1,T2>(gp1 : Group<T1>, gp2 : Group<T2>) : Group<[T1,T2]>{
	return new Group<[T1,T2]>(
		[gp1.e, gp2.e],
		([x1, x2], [y1, y2]) => [gp1.multiply(x1,y1), gp2.multiply(x2,y2)],
		([x1, x2]) => [gp1.invert(x1), gp2.invert(x2)]
	)
}

export let integers = new Group<number>(
	0,
	(x, y) => x+y,
	(x) => -x
);
