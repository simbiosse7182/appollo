import validationErrorFormatter from "../utils/validationErrorFormatter";
import {registrationSchema} from "./registration";
import {messageTextSchema} from "./messageTextSchema";

export const registrationValidationSchema = validationErrorFormatter(registrationSchema)
export const messageTextValidationSchema = validationErrorFormatter(messageTextSchema)