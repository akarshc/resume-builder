
import { store } from '../store'


export const EduData = (e, onEducation, state) => {
    let educ = state.education;
    let id = e.target.id;
    let val = e.target.value;
    let i = id[5];
    switch(id) {
        case `inst_${i}`: {
            educ.length > i
                ? educ[i].instituition = val
                : educ.push({
                    instituition: val,
                    year: '',
                    degree: ''
                })
                break;
        }
        case `eduyr${i}`: {
            educ.length > i
                ? educ[i].year = val
                : educ.push({
                    instituition: '',
                    year: val,
                    degree: ''
                })
                break;
        }
        default: {
            educ.length > i
                ? educ[i].degree = val
                : educ.push({
                    instituition: '',
                    year: '',
                    degree: val
                })
                break;
        }
    }
    onEducation(educ)
}

export const ExpData = (e, onExperience, state) => {
    let expe = state.experience;
    let id = e.target.id;
    let val = e.target.value;
    let i = id[5];
    switch(id) {
        case `comp_${i}`: {
            expe.length > i
                ? expe[i].company = val
                : expe.push({
                    company: val,
                    year: '',
                    designation: ''
                })
                break;
        }
        case `expyr${i}`: {
            if(val.length < 3)
                expe.length > i
                    ? expe[i].year = val
                    : expe.push({
                        company: '',
                        year: val,
                        designation: ''
                    })
                break;
        }
        default: {
            expe.length > i
                ? expe[i].designation = val
                : expe.push({
                    company: '',
                    year: '',
                    designation: val
                })
                break;
        }
    }
    onExperience(expe)
}

export const AData = (e, onName, onEmail, onAddress, onPhone) => {
    let id = e.target.id
    switch(id) {
        case 'name':
            onName(e.target.value)
            break;
        case 'email':
            onEmail(e.target.value)
            break;
        case 'address':
            onAddress(e.target.value)
            break;
        case 'phone': {
            if(e.target.value.length <= 15)
                onPhone(e.target.value)
            break;
        }
        default: return;
    }
}

export const More = (e, ed, ex, add_) => {
    let id = e.target.id;
    let { education, experience } = store.getState().resume
    switch(id) {
        case 'edu_add':
            add_('ed')
            education.push({
                instituition: '',
                year: '',
                degree: ''
            })
            ed(education)
            break;
        default:
            add_('ex')
            experience.push({
                company: '',
                year: '',
                designation: ''
            })
            ex(experience)
            break;
    }
}