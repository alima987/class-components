'use client'
import React from "react"
import styles from './form.module.css'
import { useForm } from "react-hook-form"
import type { FormData } from "../../types/types"
import FormField from "../../components/FormField/FormField"

const Form = () => {
    const { register, handleSubmit, formState: { errors }, setError, } = useForm<FormData>()
    const onSubmit = async(data: FormData) => {
        const responce = await fetch('/api/auth/register', {
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
        console.log(await responce.json())
       }
   
   return (
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
       </form>
   )
}
export default Form