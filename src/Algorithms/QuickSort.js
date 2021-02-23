import { panim, randomNumber } from "./extra_func";

function partq(anim, a, low, high) {
	var pvt, index;
	index = low;
	pvt = high;
	for (let i = low; i < high; i++) {
		if (a[i] < a[pvt]) {
			panim(anim, a, i, index);
			let temp = a[index];
			a[index] = a[i];
			a[i] = temp;
			index++;
		}
	}
	panim(anim, a, pvt, index);
	let temp = a[pvt];
	a[pvt] = a[index];
	a[index] = temp;

	return index;
}

function randq(anim, a, low, high) {
	var pvt, n;
	n = randomNumber(50, 500);
	// Randomizing the pivot value in the given subpart of array.
	pvt = low + (n % (high - low + 1));
	panim(anim, a, pvt, high);
	// Swapping pivot value from high, so pivot value will be taken as a pivot while partitioning.
	let temp = a[pvt];
	a[pvt] = a[high];
	a[high] = temp;

	return partq(anim, a, low, high);
}
export function quick(anim, a, low, high) {
	var pi;
	if (low < high) {
		/* panim(anim,a,b,c) */
		pi = randq(anim, a, low, high);
		quick(anim, a, low, pi - 1);
		quick(anim, a, pi + 1, high);
	}
	return anim;
}
