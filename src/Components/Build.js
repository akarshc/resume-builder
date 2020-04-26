import React from 'react';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { store } from '../store';
import Nav from './Nav';
import { setName, setEmail, setAddress, setPhone, setEducation, setExperience, resetResume } from '../actions/resume-action';
import { AData, EduData, ExpData, More } from '../util/form';

// Template for create page
//
// Name
// Email
// Address
// Phone

// ---

// Education *
// 	- instituition
// 	- year
// 	- degree
// --- +

// Experience *
// 	- company
// 	- years
// 	- designation

// --- +

const mapStateToProps = (state) => {
    let resume = state.resume
    return {
        resume: resume,
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        onName: (x) => dispatch(setName(x)),
        onEmail: (x) => dispatch(setEmail(x)),
        onAddress: (x) => dispatch(setAddress(x)),
        onPhone: (x) => dispatch(setPhone(x)),
        onEducation: (x) => dispatch(setEducation(x)),
        onExperience: (x) => dispatch(setExperience(x)),
        onReset: () => dispatch(resetResume())
    }
}

const initialState = {
    error: false,
    edu: store.getState().resume.education.length - 1,
    exp: store.getState().resume.experience.length - 1,
    education: [{
        instituition: '',
        year: '',
        degree: ''
    }],
    experience: [{
        company: '',
        year: '',
        designation: ''
    }]
}

class Build extends React.Component {
    constructor(props) {
        super()
        this.state = initialState;
    }

    add_ = (x) => {
        if(x === 'ed') {
            this.setState({
                edu: this.state.edu + 1
            })
            return;
        }
        else {
            this.setState({
                exp: this.state.exp + 1
            })
            return;
        }
    }

    addData = e => {
        let {onName, onEmail, onAddress, onPhone} = this.props
        return AData(e, onName, onEmail, onAddress, onPhone)
    }

    addEduData = e => {
        return EduData(e, this.props.onEducation, this.state)
    }

    addExpData = e => {
        return ExpData(e, this.props.onExperience, this.state)
    }

    addmore = (e) => {
        let {onEducation, onExperience} = this.props
        return More(e, onEducation, onExperience, this.add_)
    }

    removemore = (e) => {
        let id = e.target.id
        let i = id[6];
        let { edu, exp } = this.state
        let {education, experience} = store.getState().resume
        let {onEducation, onExperience} = this.props
        switch(id) {
            case `rem_ed`+i: {
                if(edu > 0) {
                    education.pop();
                    onEducation(education);
                    this.setState({
                        edu: this.state.edu - 1
                    })
                }
                break;
            }
            case `rem_ex`+i: {
                if(exp > 0) {
                    experience.pop();
                    onExperience(experience)
                    this.setState({
                        exp: this.state.exp - 1
                    })
                }
                break;
            }
            default:
                return;
        }
    }

    returnYear = () => {
        let years = [];
        for(let i=1980;i<2020;i++) {
            years.push(<option>{i}</option>)
        }
        return years;
    }
    
    eduField = (id) => {
        let {education, edu} = this.state
        let cls = id === edu && id>0
            if(store.getState().resume.education) 
                education = store.getState().resume.education
            return(
                <div id={`in_`+id} className={
                    id === edu
                    ? 'form-group row pb-5 mb-3 fade-in'
                    : 'form-group row pb-5 mb-3'
                }>
                { cls
                    ? <div className="align-self-center p-3"><button className="close btn align-middle" aria-label="Close" id={`rem_ed`+id} onClick={this.removemore}>&times;</button></div>
                    : null
                }
                    <div className="col-lg-4">
                        <label key={`l_inst_`+id}>Instituition</label>
                        <input type="text" value={education[id].instituition} className="form-control" id={`inst_`+id} onChange={this.addEduData} placeholder="Oxford, IIT..." />
                    </div>
                    <div className="col-lg-2">
                        <label key={`l_edu_yr`+id}>Year</label>
                        {/* <input type="number" className="form-control" /> */}
                        <select class="form-control" id={`eduyr`+id} value={education[id].year} onChange={this.addEduData}>
                            <this.returnYear />
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label key={`l_degr`+id}>Degree</label>
                        <input type="text" value={education[id].degree} className="form-control" id={`degr_`+id} onChange={this.addEduData} placeholder="B.Tech, MBA..." />
                    </div>
                    <hr />
                </div>
            );
    }

    education = () => {
        let ed = [];
        for(let i=0;i<=this.state.edu;i++)
        {
            ed.push(this.eduField(i))
        }
        return ed;
    }

    
    expField = (id) => {
        let {experience, exp} = this.state
        let cls = id === exp && id>0
        if(store.getState().resume.experience) 
            experience = store.getState().resume.experience
        return(
            <div id={`co_`+id} className={
                id === exp
                ? 'form-group row pb-5 mb-3 fade-in'
                : 'form-group row pb-5 mb-3'
            }>
            { cls
                ? <div className="align-self-center p-3"><button className="close btn align-middle" aria-label="Close" id={`rem_ex`+id} onClick={this.removemore}>&times;</button></div>
                : null
            }
                <div className="col-lg-4">
                    <label key={`l_comp_`+id}>Company</label>
                    <input type="text" value={experience[id].company} className="form-control" onChange={this.addExpData} id={`comp_`+id} placeholder="Google, HP..." />
                </div>
                <div className="col-lg-2">
                    <label key={`l_exp_yr`+id}>Years</label>
                    <input type="number" value={experience[id].year} placeholder="4" className="form-control" onChange={this.addExpData} id={`expyr`+id} min="0" max="50"/>
                </div>
                <div className="col-lg-4">
                    <label key={`l_desg`+id}>Designation</label>
                    <input type="text" value={experience[id].designation} className="form-control" onChange={this.addExpData} id={`desg_`+id} placeholder="Software Engineer, HR..." />
                </div>
                <hr />
            </div>
        );
    }

    experience = () => {
        let ex = [];
        for(let i=0;i<=this.state.exp;i++)
        {
            ex.push(this.expField(i))
        }
        return ex;
    }
    resetAll = () => {
        this.setState(initialState);
        localStorage.clear();
        window.location.reload();
    }

    onSubmit = () => {
        let {education, experience, name} = store.getState().resume;
        let err = education[0].instituition === '' ||
            education[0].degree === '' ||
            experience[0].company === '' ||
            experience[0].designation === '' ||
            name === '';
        if(err) {
            this.setState({
                error: true
            })
        }
    }

    removeError = () => {
        this.setState({
            error: false
        })
    }

    render() {
        console.log(this.state)
        let {name, email, address, phone, education, experience} = store.getState().resume;
        let err = education[0].instituition === '' ||
        education[0].degree === '' ||
        experience[0].company === '' ||
        experience[0].designation === '' ||
        name === '';
      return (
        <div className="container">
            <Helmet>
                <title>Build Resume</title>
            </Helmet>
            <Nav />
            <h1>Build your resume</h1>
            <button id="reset" className="btn btn-link" onClick={this.resetAll}>Reset</button>
            <div id="p_info">
                <div className="form-group" key="_name">
                    <label>Name</label>
                    <input type="text" value={name} className="form-control col-lg-4" id="name" onChange={this.addData} placeholder="Steve Jobs" />
                </div>
                <div className="form-group" key="_email">
                    <label>Email address</label>
                    <input type="email" value={email} className="form-control col-lg-4" id="email" onChange={this.addData}  aria-describedby="emailHelp" placeholder="steve@jobs.com" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group" key="_address">
                    <label>Address</label>
                    <input type="text" value={address} placeholder="2330 House, Opp. Church" className="form-control col-lg-4" id="address" onChange={this.addData}  />
                </div>
                <div className="form-group" key="_phone">
                    <label>Phone no.</label>
                    <input type="number" value={phone} className="form-control col-lg-4" id="phone" onChange={this.addData} placeholder="8390 212 342" />
                </div>
            </div> 
            <div id="edu_info" className="p-4">
                <h2>Instituitions *</h2>
                <this.education />
                <button id="edu_add" className="btn btn-outline-success mr-2" onClick={this.addmore}>Add more</button>
            </div>
            <br />
            <div id="exp_info" className="p-4">
                <h2>Experience *</h2>
                <this.experience />
                <button id="exp_add" className="btn btn-outline-warning mr-2" onClick={this.addmore}>Add more</button>
            </div>
            <br />
            {
                err
                    ? <button id="submit" className="btn btn-primary" onClick={this.onSubmit}>Create</button>
                    : <Link to={"/view"}><button id="submit" className="btn btn-primary" onClick={this.onSubmit}>Create</button></Link>
            }
            <br />
            <br />
            {
                this.state.error
                    ? <div class="alert alert-danger col-lg-6" role="alert">
                            Add your Name, instituition and work experience to continue <button type="button" class="close" aria-label="Close" onClick={this.removeError}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                      </div>
                    : <div />
            }
        </div>
      );
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Build);