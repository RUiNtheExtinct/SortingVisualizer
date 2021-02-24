import {bubble} from "../Algorithms/BubbleSort"
import {color1,color2} from "../extra_func"
import "./bar.css";


export function bubble_disp(a,ANIMATION_SPEED_MS)
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
				barOneStyle.backgroundColor=color2;
				barTwoStyle.backgroundColor=color2;
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
				barOneStyle.backgroundColor=color1;
				barTwoStyle.backgroundColor=color1;
			},i*ANIMATION_SPEED_MS);
		}
	}
	return [anim,b];

}