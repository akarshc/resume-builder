import React from 'react';
import { store } from '../../store';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import Nav from '../Nav';

const Two = ({onRouteChange}) => {
    const {name, email, address, phone, education, experience} = store.getState().resume
    let error = education[0].instituition === '' ||
    education[0].degree === '' ||
    experience[0].company === '' ||
    experience[0].designation === '';
    if(error)
    return (
        <div className="container">
            <span>Add instituition and experience to view your resume</span>
            <br />
            <Link to={"/build"}><button>Edit</button></Link>
        </div>
    )
    else
    return (
    <div className="container">
        <Helmet>
            <title>{name}'s Resume</title>
        </Helmet>
        <Nav />
        <Link to={"/build"}><button className="btn btn-btn btn-outline-primary float-right">Edit</button></Link>
        <button className="btn btn-btn btn-light mr-2 float-right" onClick={()=> {onRouteChange('')}}>Change template</button>
        <div>
            <h2>{name}</h2><br />
            <span><b>Email:</b> {email}</span><br />
            <span><b>Address:</b> {address}</span><br />
            <span><b>Phone:</b> {phone}</span>
        </div>
        <br />
        <div>
        <h4>Education Qualifications</h4>
            <ul>
            {education.map((value) => {
                return (<li>
                    <span>{value.instituition} &#8212; </span>
                    <span>{value.degree} &#8212; </span>
                    <span>{value.year}</span>
                </li>)
            })}
            </ul>
        </div>
        <div>
        <h4>Work Experience</h4>
            <ul>
            {experience.map((value) => {
                return (<li>
                    <span>{value.company} &#8212; </span>
                    <span>{value.designation} &#8212; </span>
                    <span>{value.year}</span>
                </li>)
            })}
            </ul>
        </div>
    </div>
  );
}

export default Two;