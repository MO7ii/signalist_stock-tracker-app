"use client"

import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import InputsField from "@/components/forms/InputsField";
import SelectField from "@/components/forms/SelectField";
import {INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS} from "@/lib/constants";
import {CountrySelectField} from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        control,
        formState:{errors , isSubmitting},
    } = useForm<SignUpFormData>(
        {
            defaultValues: {
                fullName: "",
                email: "",
                password: "",
                country: "Alg",
                investmentGoals: "Growth",
                riskTolerance: "Medium",
                preferredIndustry: "Technology",
            }, mode: 'onBlur'
        }
    );
    const onSubmit = async (data:SignUpFormData) => {
        try {
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    }
    return (
        <>
            <h1 className="form-title">Sign Up && Personalize </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                <InputsField
                    name="fullName"
                    label="Full Name"
                    placeholder="Jhon Doe"
                    error={errors.fullName}
                    register={register}
                    validation={{required: "Full name is required" , minLength:2}}
                />
                <InputsField
                    name="email"
                    label="Email"
                    placeholder="contact@gmail.com"
                    error={errors.email}
                    register={register}
                    validation={{required: "Full email name is required" , pattern:/^\w+@\w+$/ , message:'Email address is required'}}
                />
                <InputsField
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Enter strong password"
                    error={errors.password}
                    register={register}
                    validation={{required: "Password is required" , minLength: 8}}
                />

                <CountrySelectField
                    name='country'
                    label='Country'
                    control={control}
                    error={errors.country}
                    required
                />

                <SelectField
                    name="investmentGoal"
                    label="Investment goals"
                    placeholder="Select Your Investment goal"
                    options={INVESTMENT_GOALS}
                    control={control}
                    error={errors.investmentGoals}
                    required
                />
                <SelectField
                    name="riskTolerance"
                    label="Risk tolerance"
                    placeholder="Select Your risk level"
                    options={RISK_TOLERANCE_OPTIONS}
                    control={control}
                    error={errors.riskTolerance}
                    required
                />
                <SelectField
                    name="preferredIndustry"
                    label="Preferred Industry"
                    placeholder="Select Your Preferred Industry"
                    options={PREFERRED_INDUSTRIES}
                    control={control}
                    error={errors.preferredIndustry}
                    required
                />

                <Button disabled={isSubmitting} className="yellow-btn w-full mtt-5">
                    {isSubmitting ? "Creating Account" : "Start You Investing Journey"}
                </Button>

                <FooterLink text="Already have an account" linkText="Sign in" href="/sign-in"/>
            </form>
        </>
    )
}
export default SignUp
