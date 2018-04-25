import React from 'react'
import axios from 'axios'
import StoreDisplay from '../presentational-components/StoreDisplay'
import locationNeutral from '../images/location-neutral.svg'
import locationError from '../images/location-error.svg'
import locationFocus from '../images/location-focus.svg'
import exclamationError from '../images/alert.svg'

export default class StoreLocator extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			data: [],
			zipCode: '',
			showError:false,
			iconColor: 'locationNeutral'
		}

		this.handleStoreData = this.handleStoreData.bind(this)
		this.handleZipCode = this.handleZipCode.bind(this)
		this.handleFocus = this.handleFocus.bind(this)

	}

	handleStoreData(event){
		let url = 'https://cors-anywhere.herokuapp.com/https://shipt-zip-code-test-api.herokuapp.com/api/zip_codes/' + this.state.zipCode
		
	    axios.get(url)
	    .then((response) => {
		    this.setState({
		    	data:response.data.stores,
		    	showError:false,
		    	iconColor: 'locationFocus'
		    })
	    }).catch((err) => {

	       this.setState({
	       	showError:true,
	       	data: [],
	       	iconColor: 'locationError'
	       })
	    })

	}

	handleZipCode(event){
		this.setState({zipCode: event.target.value});
	}


	handleFocus(){
		this.setState({
			iconColor:'locationFocus',
			showError:false
		})
	}

	render(){
		let costString = `$49 membership (reg. $99) + $15 credit \n with qualifying purchase.*`,
			disclaimerString = `*Membership offer valid for new members only. Target order of $100 or more must be placed to qualify for\n $15 credit, which expires 30 days after qualifying order is placed and can be applied to any order from \n Shipt`,
			errorMessage = this.state.showError == true ? "THIS ZIPCODE IS INVALID! PLEASE TRY AGAIN" : ''

		let locationIconStatus = this.state.iconColor == 'locationNeutral' ? locationNeutral : this.state.iconColor == 'locationError' ? locationError : locationFocus,
			locationSearchColor = this.state.showError == true ? '#EF7C42' : '#414042'
			


	

		let searchBarStyle ={
			backgroundImage: `url(${locationIconStatus})`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: '10px 50%',
			color: locationSearchColor
		}

		return (
			  <div>
			  	<div className="hero-banner"> 
			  		<div className="display-linebreak hero-large-text"> Target exclusive offer. </div>
			  		<div className="display-linebreak hero-medium-text"> {costString} </div>
			  		<div className="searchBar">

			  			<input style={searchBarStyle} className="search-input" id="search-input" type="text" placeholder="Enter ZIP code" value={this.state.zipCode} onClick={this.handleFocus} onChange={this.handleZipCode}></input>
			  			{this.state.showError == true && <img className="exclamationError" src={require('../images/alert.svg')} alt="person holding phone"/> }
			  			
			  			<button className="main-button hero-button" onClick={this.handleStoreData} > GET STARTED </button>
	
         			</div>
         			<div className="error-message">
         				{errorMessage}
         			</div>
         			<div className="display-linebreak hero-small-text"> {disclaimerString} </div>
         
			  	</div>
			  	{this.state.data.length > 0 && <StoreDisplay data={this.state.data}/>}
			  </div>
		)
	}
}