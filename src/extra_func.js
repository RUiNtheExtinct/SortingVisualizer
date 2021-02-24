export const color1 = "turquoise";
export const color2 = "#ff0000";
export const color3 = "#41ff00";

export function panim_bubble(anim, a, b, c) {
	anim.push([b, c]);
	anim.push([a[b], a[c]]);
	anim.push([b, c]);
}
export function panim_quick(anim, a, b, c, d) {
	anim.push([b, c, d]);
	anim.push([a[c], a[b]]);
	anim.push([b, c]);
}
export function randomNumber(min = 50, max = 500) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
