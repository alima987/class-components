'use client'
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import React from "react"
import styles from './form.module.css'
import { useForm } from "react-hook-form"
import type { FormData } from "../../types/types"
import FormField from "../../components/FormField/FormField"
import { zodResolver } from "@hookform/resolvers/zod"
import { AuthFormSchema } from "../../types/FormSchema"

const Form = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm<FormData>({resolver: zodResolver(AuthFormSchema)})
    const [loading, setLoading] = React.useState(false);
    const router = useRouter()
     const onSubmit = async(data: FormData) => {
        setLoading(true);
        const responce = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: false
        })
        console.log({responce})
         setLoading(false);
        if(!responce?.error) {
            router.push('/')
            router.refresh()
        }
       }
       const handleProviderSignIn = (provider: string) => {
        signIn(provider, { callbackUrl: "/" });
      };
      const handleLinkToRegister = () => {
        router.push('/register')
      }
   
   return (
    <div className={styles.formContainer}>
    <form onSubmit={handleSubmit(onSubmit)}>
    <h2 className={styles.formTitle}>Sign in</h2>
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
    <button 
    className={styles.submitButton} 
    type="submit" 
    disabled={loading}>
    {loading ? 'Logging in...' : 'Login'}
    </button>
</form>
      <button 
      className={`${styles.providerButton} ${styles.githubButton}`} 
      type="submit" onClick={() => 
      handleProviderSignIn("google")}>
        Sign in with Google
      </button>
      <button 
      className={styles.providerButton}
      onClick={() => handleProviderSignIn("github")}>
        Sign in with GitHub
      </button>
      <button 
      className={styles.redirectButton} 
      type="submit"
      onClick={() => handleLinkToRegister()}>
        Create a New Account
      </button>
</div>
   )
}
export default Form