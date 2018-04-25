import React from 'react'

export default class InfoGraphic extends React.Component{
	render(){

		return (
			  <div className="infographic">
			  		<div className="infographic-intro">
			    		<div className="display-linebreak infographic-large-text"> {`Everything you love about \n Target at your fingertips`}</div>
			    	</div>

				    <div className="infographic-columns">
				    	<div className="infograph">
				    		<img src={require('../images/left-image.png')} alt="person holding phone"/>
				    		<div className="display-linebreak infographic-medium-text"> {`Scroll through \n the aisles.`} </div>
				    		<div className="display-linebreak infographic-small-text"> {`Create an order from your local store \n in our app or on our website`}</div>
				    	</div>
				    	<div className="infograph">
				    		<img src={require('../images/center-image.png')} alt="woman holding eggs"/>
				    		<div className="display-linebreak infographic-medium-text"> {`Our shoppers work their \n magic.`} </div>
				    		<div className="display-linebreak infographic-small-text"> {`Connect with your shopper and get \n live updates from the aisles`} </div>
				    	</div>
				    	<div className="infograph">
				    		<img src={require('../images/right-image.png')} alt="two women"/>
				    		<div className="display-linebreak infographic-medium-text"> {`We deliver \n your groceries`}</div>
				    		<div className="display-linebreak infographic-small-text"> {`Schedule a delivery, and your order \n will arrive in as soon as 1 hour. `}</div>
				    	</div>
				    </div>
				    <div className="infographic-container">
			    		<button className="main-button infographic-button"> GET STARTED </button>
			    	</div>
			  </div>
		)
	}

}