import { panim_quick, randomNumber } from "../extra_func";

function partq(anim, a, low, high) {
	var pvt, index;
	index = low;
	pvt = high;
	for (let i = low; i < high; i++) {
		if (a[i] < a[pvt]) {
			panim_quick(anim, a, i, index, 0);
			let temp = a[index];
			a[index] = a[i];
			a[i] = temp;
			index++;
		}
	}
	panim_quick(anim, a, pvt, index, 0);
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
	panim_quick(anim, a, pvt, high, 1);
	let temp = a[pvt];
	a[pvt] = a[high];
	a[high] = temp;
	panim_quick(anim, a, high, high, 2);
	// Swapping pivot value from high, so pivot value will be taken as a pivot while partitioning.

	return partq(anim, a, low, high);
}
export function quick(anim, a, low, high) {
	var pi;
	if (low < high) {
		pi = randq(anim, a, low, high);
		[anim, a] = quick(anim, a, low, pi - 1);
		[anim, a] = quick(anim, a, pi + 1, high);
	}
	return [anim, a];
}
