import * as yup from 'yup'

export const messageTextSchema = yup.object().shape({
    text: yup.string().required().min(1).max(500)
})