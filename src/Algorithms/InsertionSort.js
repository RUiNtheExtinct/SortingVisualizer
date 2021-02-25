import { panim } from "../extra_func";

export function insertion(anim, arr) {
	var i, key, j;
	for (i = 1; i < arr.length; i++) {
		panim(anim, arr, i, i, 1);
		key = arr[i];
		j = i - 1;
		while (j >= 0 && arr[j] > key) {
			panim(anim, arr, j, j + 1, 2);
			arr[j + 1] = arr[j];
			j--;
		}
		panim(anim, arr, j + 1, key, 3);
		arr[j + 1] = key;
	}
	return [anim, arr];
}
