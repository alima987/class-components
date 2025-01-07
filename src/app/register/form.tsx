'use client'
import React from "react"
import styles from './form.module.css'
import { useForm } from "react-hook-form"
import type { FormData, ValidFieldNames } from "../../types/types"
import FormField from "../../components/FormField/FormField"
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormSchema } from "../../types/FormSchema"
import Link from "next/link"
import { signIn } from "next-auth/react"

const Form = () => {
    const { register, handleSubmit, formState: { errors }, setError, } = useForm<FormData>({resolver: zodResolver(RegisterFormSchema)})
    const onSubmit = async(data: FormData) => {
        try{
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
             'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                password: data.password,
                confirmPassword: data.confirmPassword
            })
         })
        const result = await response.json();
        if(result) {
            await signIn('credentials', {
              name:data.name,
              email: data.email,
              password: data.password,
              redirect: true,
              callbackUrl: "/",
            })
        }
        console.log(result);
        const { errors = {} } = result; 
        const fieldErrorMapping: Record<string, ValidFieldNames> = {
            name: 'name',
            email: "email",
            password: "password",
            confirmPassword: "confirmPassword",
          };
        const fieldError = Object.keys(fieldErrorMapping).find((field) => errors[field])
        if (fieldError) {
            setError(fieldErrorMapping[fieldError], {
              type: "server",
              message: errors[fieldError],
            });
       } 
    } catch (error) {
        alert("Submitting form failed!");
      }
    }
   
   return (
    <div>
       <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
               <h2 className={styles.formTitle}>Create account</h2>
                  <FormField
                   name="name"
                   type="name"
                   placeholder="Name" 
                   register={register}
                   error={errors.name}
                   />
                   <FormField 
                   name="email"
                   type="email"
                   placeholder="Email" 
                   register={register}
                   error={errors.email}
                   />
                   <FormField 
                   name="password"
                   type="password"
                   placeholder="Password" 
                   register={register}
                   error={errors.password}
                   />
                    <FormField 
                   name="confirmPassword"
                   type="password"
                   placeholder="Re-enter password" 
                   register={register}
                   error={errors.confirmPassword}
                   />
               <button className={styles.button} type="submit">Register</button>
               <div>
                 <p className={styles.text}>Already have an account?</p>
                 <Link href='/login'>Sign In</Link>
               </div>
       </form>
    </div>
   )
}
export default Form