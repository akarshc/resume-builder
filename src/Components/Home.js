import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../Images/bg.jpg'

class Home extends React.Component {
    constructor(props) {
        super()
        this.state = {
           visible:true
        }
     }
    render() {
      return (
        <div className="homepage">
          <div className="bg_home" style={{backgroundImage: 'url(' + bg + ')'}}></div>
          <div className="bg_home_col"></div>
          <div className="in_home">
            <div className="in_home_head mb-4">
              <a className="navbar-brand text-uppercase" href="/">RB</a>
            </div>
            <h1 className="text-white display-4">Your first impression is your resume!</h1>
            <br />
            <Link to={"/build"}><button type="button" className="btn btn-primary btn-lg">Create now</button></Link>
          </div>
        </div>
      );
    }
  }
  
  export default Home;