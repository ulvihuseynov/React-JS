
import * as yup from "yup"
export const RegisterFormSchemas=yup.object().shape({
    email:yup.string().email("Email format please").required("don't empty"),

    age:yup.number().positive("Positive number").integer('write integer').required("don't empty"),

    password:yup.string().required("don't empty"),

    confirmPassword:yup.string().required("don't empty").oneOf([yup.ref("password", yup.password)],"don't same password"),
    
    term:yup.boolean().required('checked')
})
