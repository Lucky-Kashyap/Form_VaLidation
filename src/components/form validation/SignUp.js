import React from "react";
import {Formik,Form} from 'formik';
import {TextFeild} from './TextFeild';
import * as Yup from 'yup';
import { logRoles } from "@testing-library/react";

export const SignUp = () =>{

    const validate = Yup.object({
        firstName:Yup.string()
        .max(15,"Must be 15 characters or less")
        .required("Required"),
        lastName:Yup.string()
        .max(20,"Must be 20 characters or less")
        .required('Required'),
        email:Yup.string()
        .email("Email is invalid")
        .required("Email is required"),
        password:Yup.string()
        .min(6,"password must be at least 6 characters")
        .required('Password is required'),
        confirmPassword:Yup.string()
        .oneOf([Yup.ref('password'),null],'Password must be matched')
        .required('Confirm password is required'),
    })

    return (
        <Formik 
        initialValues={{
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            confirmPassword:''
        }}

        validationSchema = {validate}
        onSubmit={values =>{
            console.log(values)
        }}
        >

        {
            formik =>(
                <div>
                    <h1 className="my-4 font-weight-bold .display-4">SignUp</h1>
                    <Form>
                        <TextFeild label="First Name" name="firstName" type="text"></TextFeild>
                        <TextFeild label="last Name" name="lastName" type="text"></TextFeild>
                        <TextFeild label="Email" name="email" type="email"></TextFeild>
                        <TextFeild label="password" name="password" type="password"></TextFeild>
                        <TextFeild label="Confirm Password" name="confirmPassword"></TextFeild>
                        <button className="btn btn-dark mt-3" type="submit">Register</button>
                        <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                    </Form>
                </div>
            )
        }

        </Formik>
    )
}