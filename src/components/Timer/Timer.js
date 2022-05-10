import React, { useState, useEffect } from 'react';
import './Timer.css'

const Timer = () => {

	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(60);
	const [isActive, setIsActive] = useState(false);

	function toggle()
	{
		setIsActive(!isActive);
	}

	function reset()
	{
		setSeconds(0);
		setMinutes(60);
		setIsActive(false);
	}

	function TrackTime(time){
		
		if(seconds > 0)
		{
			setSeconds(seconds - 1);
		}
		else if(seconds === 0)
		{
			if (minutes === 0)
			{
				clearInterval(time)
			} 
			else
			{
				setMinutes(minutes - 1);
				setSeconds(59);
			}
		}
	}

	function getString(value)
	{
		if(value < 10) return "0" + value;
		else return value;
	}

	useEffect(() => 
	{

		let time = null;
		
		if (isActive) 
		{
			time = setInterval(TrackTime, 1000);
		}
		else if (!isActive && seconds !== 0)
		{
			clearInterval(time);
		}

		return () => clearInterval(time);
	}, [isActive, seconds, minutes]);

	return (
		<div className="timer-container">
			<div className="timer">
				{getString(minutes)}:{getString(seconds)}
			</div>
			<div className="buttons">
				<button className="button" onClick={toggle}>{isActive ? 'Pause' : 'Start'}</button>
				<button className="button" onClick={reset}>Reset</button>
			</div>
		</div>
	);
};

export default Timer;