import React from 'react';
import One from './Templates/One'
import Two from './Templates/Two'
import Nav from './Nav';
import {Helmet} from "react-helmet";

class View extends React.Component {
    constructor(props) {
        super()
        this.state = {
           route: ''
        }
        this.onRouteChange = this.onRouteChange.bind(this)
    }
    onRouteChange = (route) => {
        this.setState({
            route: route
        })
    }
    render() {
        switch(this.state.route) {
            case 'one': {
                return <One onRouteChange={this.onRouteChange} />
            }
            case 'two': {
                return <Two onRouteChange={this.onRouteChange} />
            }
            default: {
                return (
                    <div className="container">
                    <Helmet>
                        <title>Select Template</title>
                    </Helmet>
                    <Nav />
                    <h1>Select your resume template</h1>
                    <div className="card-columns">
                        <div id="one" className="border-0 p-5 card btn btn-btn btn-outline-primary" 
                        onClick={() => this.onRouteChange('one')}>
                            <div className="card-body text-center">
                            <p>Template 1</p>
                            </div>
                        </div>
                        <br />
                        <div id="two" className="border-0 p-5 card btn btn-btn btn-outline-primary" 
                        onClick={() => this.onRouteChange('two')}>
                            <div className="card-body text-center">
                            <p>Template 2</p>
                            </div>
                        </div>
                    </div>
                    </div>
                );
            }
        }
    }
  }
  
  export default View;