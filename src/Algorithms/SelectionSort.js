import { panim } from "../extra_func";
export function selection(anim, a) {
	var i, j, min_idx;
	for (i = 0; i < a.length - 1; i++) {
		min_idx = i;
		for (j = i + 1; j < a.length; j++) {
			if (a[j] < a[min_idx]) {
				panim(anim, a, j, min_idx, 0);
				let temp = a[min_idx];
				a[min_idx] = a[j];
				a[j] = temp;
			}
		}
	}
	return [anim, a];
}
