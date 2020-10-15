import React from 'react'




const Form = (props) => {

    const { 
        change,
        values,
        submit,
        disabled,
        errors,
     } = props

    const onChange = evt => {
        const {name, value, checked, type} = evt.target
        console.log(name)
        console.log(value)
        console.log(type)
        console.log(checked)
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse) // when I type in an input field the onChange listener records
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <div>

        <form onSubmit={onSubmit}>

            {/* Render the validation errors */}
                <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div id='cypress'>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>

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
                        type='checkbox'
                        checked = {values.terms}
                        onChange = {onChange} 
                        
                    />
            </label>

            <button disabled = {disabled}>Submit</button>
        </form>

        </div>
    )


}

export default Form