import React from 'react'

export default class StoreInfo extends React.Component{

	render(){

		return (
			 <div>
			 	<div className="infographic-large-text"> {this.props.store} </div>
			 	<div className="infographic-small-text"> {this.props.availability} </div>
			 </div>
		)
	}
}