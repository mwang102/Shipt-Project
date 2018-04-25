import React from 'react'

export default class Header extends React.Component{
	render(){
		return (
			  <header>
			    	<div className="discount-banner"> GET $50 OFF + $ 15 CREDIT * </div>
			    	<div className="header-logo"> 
			    		<img src={require('../images/shipt-logo.svg')} alt="shipt-logo"/>
			    		<button className="main-button header-button"> SIGN UP </button>
			    	</div>
			  </header>
		)
	}
}