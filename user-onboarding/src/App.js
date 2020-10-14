import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

//import components
import Form from './components/Form'
import axios from 'axios';

//setting initial values for state
const initialUserList = []
const initialFormValue = {
    name: '',
    email: '',
    password: '',
    terms: false,
}


function App() {

  //slices of state
  const [userList, setUserList] = useState(initialUserList) //this will hold our ever growing list of onboarded users
  const [newUserForm, setNewUserForm] = useState(initialFormValue) // this will hold a new user form


const inputChange = (name, value) => {
    setNewUserForm({...newUserForm, [name]: value})
    console.log(newUserForm)

}

const postNewUser = newUser => {
  // this is where I will post a new user to my backend database
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUserList(userList.concat(res.data))
      })
      .catch(err => {
        console.log(err)
      })
      .setNewUserForm(initialFormValue)
} 





  return (
    <div className="App">
      <Form
        values = {newUserForm}
        change = {inputChange}
      />
    </div>
  );
}

export default App;
