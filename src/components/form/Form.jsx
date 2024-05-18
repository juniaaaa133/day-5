import React, { useState } from 'react'
import './index.css'

const Form = ({createUser,setErrorUi}) => {

let [info,setInfo] = useState({
    name : '',
    location : '',
    email : ''
})

let logUser = (e) => {
e.preventDefault();

if(
    info.name.trim() == 0 ||
    info.location.trim() == 0 ||
    info.email.trim() == 0
){
 window.confirm('Please fill the valid input field!')
    return;
}
createUser(info)
setInfo({
    name : '',
    location : '',
    email : ''
})
}

let handleInput = (e) => {
 let char = e.target.value;
 let id = e.target.id;

 switch (id) {
    case 'name':
        setInfo({
            ...info,
            name : char
        })
        break;

    case 'email' :
        setInfo({
            ...info,
            email : char
        })
        break;

    default:
        setInfo({
            ...info,
            location : char
        })
        break;
 }

}

  return (
    <form className="form">
        <input value={info.name} type="text" id='name' placeholder='Name' className="input" onChange={(e) => handleInput(e)}/>
        <input value={info.location} type="text" id='location' placeholder='Location' className="input" onChange={(e) => handleInput(e)}/>
        <input value={info.email} type="email" id='email' placeholder='Email address' className="input" onChange={(e) => handleInput(e)}/>
    <button className="btn main-f" onClick={(e) => logUser(e)}>Submit</button>
    </form>
    
  )
}

export default Form