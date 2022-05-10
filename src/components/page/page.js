import React from 'react'
import Board from '../board/board.js'
import UserForm from '../UserForm/UserForm.js'
import Timer from '../Timer/Timer'
import './page.css'
import DoughnutChart from '../my_charts/my_charts'

function Page(){
	return(
		<div>
			<div className="flex-container">
				<Board />
				<UserForm />
			</div>
			<div className="flex-container">
				<Timer />
			</div>
			<div className="flex-container">
    			<DoughnutChart /> 
      		</div>
		</div>
	)
}

export default Page;