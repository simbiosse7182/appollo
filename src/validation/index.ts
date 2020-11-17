import validationErrorFormatter from "../utils/validationErrorFormatter";
import {registrationSchema} from "./registration";

export const registrationValidationSchema =  validationErrorFormatter(registrationSchema)