import React from 'react'




const Form = (props) => {

    const { 
        change,
        values,
     } = props

    const onChange = evt => {
        const {name, value} = evt.target
        console.log(name)
        console.log(value)
        change(name, value) // when I type in an input field the onChange listener records
        
    }

    return (
        <div>

        <form>
            <label> Name:
                <input
                    name='name'
                    value= {values.name}
                    onChange = {onChange} 
                    type='text'
                />
            </label>
            
            <label> Email:
                <input
                        type='email'
                        value= {values.email}
                        onChange = {onChange} 
                        name='email'
                    />
            </label>

            <label> Password:
                <input
                        name='password'
                        value= {values.password}
                        onChange = {onChange} 
                        type='text'
                    />
            </label>

            <label> Terms of Service:
                <input
                        name='terms'
                        checked = {!true}
                        onChange = {onChange} 
                        type='checkbox'
                    />
            </label>

            <button>Submit</button>
        </form>

        </div>
    )


}

export default Form