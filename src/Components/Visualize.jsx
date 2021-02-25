import React from "react";
import "../bar.css";
import {randomNumber} from "../extra_func"
import {bubble_disp} from "./BubbleVis"
import {insertion_disp} from "./InsertionVis";
import {quick_disp} from "./QuickVis"
import {selection_disp} from "./SelectionVis";

const bar_low=10;
const bar_high=480;

export default class Visualize extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={
			array: [],
			speed: 1000,
			no: 10,
		};
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}

	componentDidMount()
	{
		this.NewArray();
	}

	handleChange(event)
	{
		const value=event.target.value;
		this.setState({
			...this.state,
			[event.target.name]: value
		});
	}

	handleSubmit(event)
	{
		console.log(this.state);
		this.NewArray();
		event.preventDefault();
	}

	NewArray=() =>
	{
		const a=[];
		for(let i=0;i<this.state.no;i++)
		{
			a.push(randomNumber(bar_low,bar_high));
		}
		this.setState({array: a});
	};


	Sort=(cat) =>
	{
		console.log(this.state.array);
		let a=this.state.array.slice();
		let anim,b;
		if(cat===1)
		{
			[anim,b]=bubble_disp(a,this.state.speed);
		}
		else if(cat===2)
		{
			[anim,b]=quick_disp(a,this.state.speed);
		}
		else if(cat===3)
		{
			[anim,b]=insertion_disp(a,this.state.speed);
		}
		else if(cat===4)
		{
			[anim,b]=selection_disp(a,this.state.speed);
		}
		setTimeout(() =>
		{
			this.setState({array: b});
			console.log(this.state.array);
		},this.state.speed*(anim.length+1));
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
					<button onClick={() => this.Sort(3)}>Insertion Sort</button>
					<button onClick={() => this.Sort(4)}>Selection Sort</button>
					<form onSubmit={this.handleSubmit}>
						<label>
							No. of Bars:
							<input type="number" name="no" value={this.state.no} onChange={this.handleChange} />
							MS per frame:
							<input type="number" name="speed" value={this.state.speed} onChange={this.handleChange} />
						</label>
						<input type="submit" value="Submit" />
					</form>
				</div>
			</div>
		);
	}
}
