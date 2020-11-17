import {ObjectSchema} from 'yup'

const validationErrorFormatter = (validationSchema: ObjectSchema) => {
    return (obj) => {
        return validationSchema.validate(obj, {abortEarly: false})
            .catch(e => {
                const errors = {}
                e.inner.forEach(el => {
                    errors[el.path] = el.errors
                })
                throw {message:'validation error', errors}
            })
    }
}

export default validationErrorFormatter