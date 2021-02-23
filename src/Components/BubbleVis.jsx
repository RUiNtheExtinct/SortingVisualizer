import {bubble} from "../Algorithms/BubbleSort"
import "./bar.css";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS=55;

// This is the main color of the array bars.
const PRIMARY_COLOR="turquoise";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR="red";


export function bubble_disp(a)
{
	const [anim,b]=bubble([],a)
	for(let i=0;i<anim.length;i++)
	{
		const arrayBars=document.getElementsByClassName("Bar");
		if(i%3===0)
		{
			setTimeout(() =>
			{
				const [b1id,b2id]=anim[i];
				const barOneStyle=arrayBars[b1id].style;
				const barTwoStyle=arrayBars[b2id].style;
				barOneStyle.backgroundColor=SECONDARY_COLOR;
				barTwoStyle.backgroundColor=SECONDARY_COLOR;
			},i*ANIMATION_SPEED_MS);
		}
		else if(i%3===1)
		{
			setTimeout(() =>
			{
				const [b1id,b2id]=anim[i-1];
				const barOneStyle=arrayBars[b1id].style;
				const barTwoStyle=arrayBars[b2id].style;
				const [b1,b2]=anim[i];
				barOneStyle.height=`${ b1 }px`;
				barTwoStyle.height=`${ b2 }px`;
			},i*ANIMATION_SPEED_MS);
		}
		else
		{
			setTimeout(() =>
			{
				const [b1id,b2id]=anim[i];
				const barOneStyle=arrayBars[b1id].style;
				const barTwoStyle=arrayBars[b2id].style;
				barOneStyle.backgroundColor=PRIMARY_COLOR;
				barTwoStyle.backgroundColor=PRIMARY_COLOR;
			},i*ANIMATION_SPEED_MS);
		}
	}
	return [anim,b];

}