export function panim(anim, a, b, c) {
	anim.push([b, c]);
	anim.push([a[b], a[c]]);
	anim.push([b, c]);
}
export function randomNumber(min = 50, max = 500) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
