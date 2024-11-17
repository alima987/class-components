'use client'
import { FormEvent } from "react"

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
       <form onSubmit={handleSubmit}>
           <fieldset>
               <h2>Create account</h2>
               <div>
                   <label>
                       First Name <sup>*</sup>
                   </label>
                   <input 
                   value='firstName'
                   placeholder="First name" 
                   />
               </div>
               <div>
                   <label>
                       Second Name <sup>*</sup>
                   </label>
                   <input 
                   placeholder="Second name" 
                   />
               </div>
               <div>
                   <label>
                   Email <sup>*</sup>
                   </label>
                   <input 
                   name="email"
                   type="email"
                   placeholder="Email" 
                   />
               </div>
               <div>
                   <label>
                   Password <sup>*</sup>
                   </label>
                   <input 
                   name="password"
                   type="password"
                   placeholder="Password" 
                   />
               </div>
               <button type="submit">Submit</button>
           </fieldset>
       </form>
   )
}
export default Form