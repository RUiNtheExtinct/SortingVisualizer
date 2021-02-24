import {quick} from "../Algorithms/QuickSort"
import "./bar.css";
import {color1,color2,color3} from "../extra_func"


export function quick_disp(a,ANIMATION_SPEED_MS)
{
	const [anim,b]=quick([],a,0,a.length-1)
	for(let i=0;i<anim.length;i++)
	{
		const arrayBars=document.getElementsByClassName("Bar");
		if(i%3===0)
		{
			const c=anim[i][2];
			setTimeout(() =>
			{
				const [b1id,b2id]=[anim[i][0],anim[i][1]];
				const barOneStyle=arrayBars[b1id].style;
				const barTwoStyle=arrayBars[b2id].style;
				if(c===1||c===2)
				{
					barOneStyle.backgroundColor=color2;
					barTwoStyle.backgroundColor=color2;
				}
				else
				{
					barOneStyle.backgroundColor=color3;
					barTwoStyle.backgroundColor=color3;
				}
			},i*ANIMATION_SPEED_MS);
			if(c===2)
			{
				i+=2;
			}
		}
		else if(i%3===1)
		{
			setTimeout(() =>
			{
				const [b1id,b2id]=[anim[i-1][0],anim[i-1][1]];
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