import React from 'react'
import StoreInfo from './StoreInfo'

export default class StoreDisplay extends React.Component{


	render(){
		let today = new Date()

		let LaunchDates = this.props.data.sort((a, b) => a.name.localeCompare(b.name))
						  .map((product,index)=>{
								let indexT = product.launch_date.indexOf('T'),
									date = product.launch_date.split('').slice(0,indexT).join(''),
									launchDate = new Date(date),
									openStatus = launchDate > today ? date : 'Now Available'

								return(<StoreInfo store={product.name} availability={openStatus} key={index}/>)
							})


		return (
			 <div className="store-display">
			 	<div> DELIVERING FROM: </div>
				<div className="store-availability"> {LaunchDates} </div>
			 	<button className="main-button store-display-button"> GET STARTED </button>
			 </div>
		)
	}
}