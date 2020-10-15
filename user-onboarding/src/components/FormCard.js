import React from 'react'

const FormCard = ( props ) => {
    const { userList } = props
    
    return userList.map(user =>{
        return (
            <div>
                <h3> {user.name}</h3>
                <h3> {user.email}</h3>
                <h3> {user.password}</h3>
                <h3> {user.terms}</h3>
            </div>
        )
    }) 

}

export default FormCard
