import {
    RESUME_NAME,
    RESUME_EMAIL,
    RESUME_ADDRESS,
    RESUME_PHONE,
    RESUME_EDUCATION,
    RESUME_EXPERIENCE,
    RESET_RESUME
   } from '../constants';
  
export const setName = (text) => ({ type: RESUME_NAME, payload: text })
export const setEmail = (text) => ({ type: RESUME_EMAIL, payload: text })
export const setAddress = (text) => ({ type: RESUME_ADDRESS, payload: text })
export const setPhone = (text) => ({ type: RESUME_PHONE, payload: text })
export const setEducation = (text) => ({ type: RESUME_EDUCATION, payload: text })
export const setExperience = (text) => ({ type: RESUME_EXPERIENCE, payload: text })
export const resetResume = (text) => ({ type: RESET_RESUME, payload: text })