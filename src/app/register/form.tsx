'use client'
import React from "react"
import { FormEvent } from "react"
import styles from './form.module.css'

const Form = () => {
    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const responce = await fetch('/api/auth/register', {
           method: 'POST',
           body: JSON.stringify({
               email: formData.get('email'),
               password: formData.get('password')
           })
        })
        console.log(responce)
       }
   
   return (
       <form className={styles.form} onSubmit={handleSubmit}>
               <h2 className={styles.formTitle}>Create account</h2>
                  <input 
                   className={styles.input}
                   name="name"
                   type="name"
                   placeholder="Name" 
                   />
                   <input 
                   className={styles.input}
                   name="email"
                   type="email"
                   placeholder="Email" 
                   />
                   <input 
                   className={styles.input}
                   name="password"
                   type="password"
                   placeholder="Password" 
                   />
                    <input 
                   className={styles.input}
                   name="passwordConfirm"
                   type="passwordConfirm"
                   placeholder="Re-enter password" 
                   />
               <button className={styles.button} type="submit">Register</button>
       </form>
   )
}
export default Form