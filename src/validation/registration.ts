import * as yup from 'yup'

export const registrationSchema = yup.object().shape({
    name: yup.string().required().min(3),
    login: yup.string().required().min(8),
    password: yup.string().required().min(8),
})