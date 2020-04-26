import React from 'react';
import { store } from '../../store';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import Nav from '../Nav';

const One = ({onRouteChange}) => {
    const {name, email, address, phone, education, experience} = store.getState().resume
    let flag = 0
    if(education[0].instituition === '' ||
        education[0].degree === '' ||
        experience[0].company === '' ||
        experience[0].designation === '')
    {
        flag =1
    }
    if(flag)
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
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Instituition</th>
                <th scope="col">Degree</th>
                <th scope="col">Year</th>
                </tr>
            </thead>
            <tbody>
            {education.map((value) => {
                return (<tr>
                    <td>{value.instituition}</td>
                    <td>{value.degree}</td>
                    <td>{value.year}</td>
                </tr>)
            })}
            </tbody>
        </table>
        </div>
        <div>
        <h4>Work Experience</h4>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Company</th>
                <th scope="col">Designation</th>
                <th scope="col">Years</th>
                </tr>
            </thead>
            <tbody>
            {experience.map((value) => {
                return (<tr>
                    <td>{value.company}</td>
                    <td>{value.designation}</td>
                    <td>{value.year}</td>
                </tr>)
            })}
            </tbody>
        </table>
        </div>
    </div>
  );
}

export default One;