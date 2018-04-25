import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import './app.css'

import Header from './presentational-components/Header'
import Footer from './presentational-components/Footer'
import InfoGraphics from './presentational-components/InfoGraphic'
import StoreLocator from './smart-components/StoreLocator'

class App extends Component {
  constructor(props){
    super(props)
      this.state ={

      }
  }

  render () {

    return (
      <div className="app">
      <Header/>
        <section className="content">
          <StoreLocator/>
          <InfoGraphics/>
        </section>

        <Footer/>
      </div>
    )
  }
}

export default hot(module)(App)
