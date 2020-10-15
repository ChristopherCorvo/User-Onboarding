import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

//import components
import Form from './components/Form'
import FormCard from './components/FormCard'

//import dependencies 
import axios from 'axios';
import * as yup from 'yup'

// import comparison schema
import formSchema from './Validation/formSchema'

//setting initial values for state
const initialUserList = []
const initialFormValue = {
    name: '',
    email: '',
    password: '',
    terms: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: '',
}

const initialDisabled = true

function App() {

  //slices of state
  const [userList, setUserList] = useState(initialUserList) //this will hold our ever growing list of onboarded users
  const [userForm, setUserForm] = useState(initialFormValue) // this will hold a new user form
  const [formErrors, setFormErrors] = useState(initialFormErrors) // this is an obj that holds errors after a comparison with formSchema
  const [disabled, setDisabled] = useState(initialDisabled)

const inputChange = (name, value) => {

  yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setUserForm({...userForm, [name]: value})
      
    })
    .catch(err => {
      setFormErrors({
        ...formErrors, 
        [name]: err.errors[0]
      })
    })

}

const postNewUser = newUser => {
  // this is where I will post a new user to my backend database
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        
        setUserList(userList.concat(res.data))
        console.log(userList)
      })
      .catch(err => {
        
      })
      .finally(() => {
        setUserForm(initialFormValue)
      })  
} 

const formSubmit = () => {
  const newUser ={
    name: userForm.name.trim(),
    email: userForm.email.trim(),
    password: userForm.password.trim(),
    terms: userForm.terms,
  }
  console.log(newUser)
  postNewUser(newUser)

}

// ----
// useEffect(() => {
//   getFriends()
// }, [])

useEffect(() => {
  // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
  formSchema.isValid(userForm)
    .then(valid => {
      setDisabled(!valid);
    })
}, [userForm])

// ------


  return (
    <div className="App">
      <Form
        values = {userForm}
        change = {inputChange}
        submit = {formSubmit}
        disabled = {disabled}
        errors = {formErrors}
      />
      <FormCard userList={userList}/>
    </div>
  );
}

export default App;
