import { z, ZodType } from 'zod'
import { FormData, AuthFormData } from './types'
export const AuthFormSchema: ZodType<AuthFormData> = z.object({
    email: z.string().email({message: 'Enter your email'}),
    password: z.string().min(8, {message: 'Passwords must be at least 8 characters.'}).max(20, {message: 'Passwords must be less than 20 characters.'} ),
});


export const RegisterFormSchema: ZodType<FormData> = z.object({
    email: z.string().email({message: 'Enter your email'}),
    name: z.string().min(1, {message: 'Enter your name'}),
    password: z.string().min(8, {message: 'Passwords must be at least 8 characters.'}).max(20, {message: 'Passwords must be less than 20 characters.'} ),
    confirmPassword: z.string({message: 'Type your password again'}),
}).refine((data) => data.password === data.confirmPassword, {
    message: `Passwords don't match`,
    path: ['confirmPassword']
});
