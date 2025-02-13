import { getServerSession } from "next-auth"
import Form from "./form"
import React from "react"
import { redirect } from "next/navigation"

const RegisterPage = async() => {
    const  session = await getServerSession()
    if (session) {
        redirect('/')
    }

return (
    <div>
        <Form />
    </div>
)
}
export default RegisterPage