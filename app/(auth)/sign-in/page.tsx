"use client";

import React from 'react'
import {useForm} from "react-hook-form";

import InputsField from "@/components/forms/InputsField";
import FooterLink from "@/components/forms/FooterLink";


const SignIn = () => {

    const {
        register,
        handleSubmit,
        formState: {errors , isSubmitting},
    } = useForm<SignInFormData>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur',
    })
    const onSubmit = async (data: SignInFormData)=> {
        try {
            console.log('SignIn', data);
        } catch(e) {
            console.error(e);

        }
    }
    return (
        <>
            <h1 className="form-title">Welcome Back</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="spacey-5">
                <InputsField
                    name="email"
                    label="Email"
                    placeholder="Enter Your Email Address"
                    error={errors.email}
                    register={register}
                    validation={{required: "Email is required" , pattern: /^\w+@\w+\.\w+$/ }}
                />
                <InputsField
                    name="password"
                    label="Password"
                    placeholder="Enter Your Password"
                    error={errors.password}
                    register={register}
                    validation={{required: "Password is required" , minLength: 8}}
                />

                <button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? 'Signing In' : 'Login'}
                </button>
                
                
                <FooterLink text="Dont have an account ?" linkText="Create an account" href="/sign-up" />

            </form>
        </>
    )
}
export default SignIn
