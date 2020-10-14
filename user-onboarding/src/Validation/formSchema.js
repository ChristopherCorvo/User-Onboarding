import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required'),
    email: yup   
        .string()
        .email('Must be a valid email address') 
        .required('Must include email address.'),
    password: yup
        .string()
        .min(3, 'Your Password needs to have atleast 3 characters')
        .required('You must include a password'),
    terms: yup
        .boolean()
        .oneOf([true], 'You must accept terms of conditions '),
})




export default formSchema;