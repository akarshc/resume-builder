import {
    RESUME_NAME,
    RESUME_EMAIL,
    RESUME_ADDRESS,
    RESUME_PHONE,
    RESUME_EDUCATION,
    RESUME_EXPERIENCE,
    RESET_RESUME
   } from '../constants';
  
const initialStateResume = {
    name: '',
    email: '',
    address: '',
    phone: '',
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

export const resume = (state=initialStateResume, action={}) => {
    switch (action.type) {
        case RESUME_NAME:
        return Object.assign({}, state, {name: action.payload})
        case RESUME_EMAIL:
        return Object.assign({}, state, {email: action.payload})
        case RESUME_ADDRESS:
        return Object.assign({}, state, {address: action.payload})
        case RESUME_PHONE:
        return Object.assign({}, state, {phone: action.payload})
        case RESUME_EDUCATION:
        return Object.assign({}, state, {education: action.payload})
        case RESUME_EXPERIENCE:
        return Object.assign({}, state, {experience: action.payload})
        case RESET_RESUME:
        return Object.assign({}, state, initialStateResume)
        default:
        return state
    }
}