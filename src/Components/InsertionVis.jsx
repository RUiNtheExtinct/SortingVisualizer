import {insertion} from "../Algorithms/InsertionSort"
import {color1,color2,color3} from "../extra_func"
import "../bar.css";


export function insertion_disp(a,ANIMATION_SPEED_MS)
{
	const [anim,b]=insertion([],a)
	for(let i=0;i<anim.length;i++)
	{
		const arrayBars=document.getElementsByClassName("Bar");
		const arrayNums=document.getElementsByClassName("Num");

		if(i%3===0)
		{
			setTimeout(() =>
			{
				const [b1id,b2id,c]=anim[i];
				if(c===1)
				{
					const barOneStyle=arrayBars[b1id].style;
					const barTwoStyle=arrayBars[b2id].style;
					barOneStyle.backgroundColor=color2;
					barTwoStyle.backgroundColor=color2;
				}
				else if(c===2)
				{
					const barOneStyle=arrayBars[b1id].style;
					const barTwoStyle=arrayBars[b2id].style;
					barOneStyle.backgroundColor=color3;
					barTwoStyle.backgroundColor=color3;
				}
				else
				{
					const barOneStyle=arrayBars[b1id].style;
					barOneStyle.backgroundColor=color2;
				}
			},i*ANIMATION_SPEED_MS);
		}
		else if(i%3===1)
		{
			setTimeout(() =>
			{
				const [b1id,b2id,c]=anim[i-1];
				const [b1,b2]=anim[i];
				if(c===1)
				{
					const barOneStyle=arrayBars[b1id].style;
					const barTwoStyle=arrayBars[b2id].style;
					barOneStyle.height=`${ b1 }px`;
					barTwoStyle.height=`${ b2 }px`;
					arrayNums[b1id].innerHTML=b1;
					arrayNums[b2id].innerHTML=b2;
				} else if(c===2)
				{
					const barOneStyle=arrayBars[b1id].style;
					const barTwoStyle=arrayBars[b2id].style;
					barOneStyle.height=`${ b2 }px`;
					barTwoStyle.height=`${ b2 }px`;
					arrayNums[b1id].innerHTML=b2;
					arrayNums[b2id].innerHTML=b2;
				} else
				{
					const barOneStyle=arrayBars[b1id].style;
					barOneStyle.height=`${ b2id }px`;
					arrayNums[b1id].innerHTML=b2id;
				}
			},i*ANIMATION_SPEED_MS);
		}
		else
		{
			setTimeout(() =>
			{
				const [b1id,b2id,c]=anim[i-2];
				if(c===1||c===2)
				{
					const barOneStyle=arrayBars[b1id].style;
					const barTwoStyle=arrayBars[b2id].style;
					barOneStyle.backgroundColor=color1;
					barTwoStyle.backgroundColor=color1;
				} else
				{
					const barOneStyle=arrayBars[b1id].style;
					barOneStyle.backgroundColor=color1;
				}
			},i*ANIMATION_SPEED_MS);
		}
	}
	return [anim,b];

}