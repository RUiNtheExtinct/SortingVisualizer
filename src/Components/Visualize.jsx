import React from "react";
import "./bar.css";
import {randomNumber} from "../Algorithms/extra_func"
import {bubble_disp} from "./BubbleVis"
import {quick_disp} from "./QuickVis"

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS=55;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS=20;


export default class Visualize extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={
			array: [],
		};
	}

	componentDidMount()
	{
		this.NewArray();
	}

	NewArray=() =>
	{
		const a=[];
		for(let i=0;i<NUMBER_OF_ARRAY_BARS;i++)
		{
			a.push(randomNumber(10,500));
		}
		this.setState({array: a});
	};


	Sort=(cat) =>
	{
		console.log(this.state.array);
		var a=this.state.array.slice();
		let anim,b;
		if(cat===1)
		{
			[anim,b]=bubble_disp(a);
		}
		else if(cat===2)
		{
			[anim,b]=quick_disp(a);
		}
		setTimeout(() =>
		{
			this.setState({array: b});
			console.log(this.state.array);
		},ANIMATION_SPEED_MS*(anim.length+1));
	};

	render()
	{
		const {array}=this.state;
		return (
			<div className="Container">
				{array.map((Value,index) => (
					<div
						className="Bar"
						key={index}
						style={{
							height: `${ Value }px`,
						}}
					></div>
				))}
				<div>
					<button onClick={this.NewArray}>Generate New Array</button>
					<button onClick={() => this.Sort(1)}>Bubble Sort</button>
					<button onClick={() => this.Sort(2)}>Quick Sort</button>
				</div>
			</div>
		);
	}
}
