'use client'
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import React from "react"
import { FormEvent } from "react"
import styles from './form.module.css'

const Form = () => {
    const [loading, setLoading] = React.useState(false);
    const router = useRouter()
     const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true);
        const formData = new FormData(e.currentTarget)
        const responce = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
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
    <form onSubmit={handleSubmit}>
    <h2 className={styles.formTitle}>Sign in</h2>
        <input 
        className={styles.inputField}
        name="email"
        type="email"
        placeholder="Email" 
        />
        <input 
        className={styles.inputField}
        name="password"
        type="password"
        placeholder="Password" 
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