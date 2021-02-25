export const color1 = "turquoise";
export const color2 = "#ff0000";
export const color3 = "#41ff00";

export function panim(anim, a, b, c, d) {
	anim.push([b, c, d]);
	if (d === 3) {
		anim.push([b, c]);
	} else {
		anim.push([a[c], a[b]]);
	}
	anim.push([b, c]);
}
export function randomNumber(min = 50, max = 500) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
