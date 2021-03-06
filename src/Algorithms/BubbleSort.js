import { panim } from "../extra_func";
export function bubble(anim, a) {
	for (let i = 0; i < a.length - 1; i++) {
		for (let j = 0; j < a.length - i - 1; j++) {
			if (a[j] > a[j + 1]) {
				let temp = a[j + 1];
				a[j + 1] = a[j];
				a[j] = temp;
				panim(anim, a, j, j + 1, 0);
			}
		}
	}
	return [anim, a];
}
