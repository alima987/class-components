import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import { sql } from '@vercel/postgres';
import { RegisterFormSchema } from "../../../../types/FormSchema";

export const POST = async(request: Request) => {
try{
const { name, email, password, confirmPassword } = await request.json();
const result = RegisterFormSchema.safeParse({name, email, password, confirmPassword})
if(!result.success) {
    const serverErrors = Object.fromEntries(
        result.error?.issues?.map((issue) => [issue.path[0], issue.message]) || []
      );
      return NextResponse.json({ errors: serverErrors }, { status: 400 });
}

const hashedPassword = await hash(password, 10);
const response = await sql`
INSERT INTO users (name, email, password)
VALUES (${name}, ${email}, ${hashedPassword})
`;
console.log('User registered:', response);
} catch (e) {
console.log({e})
}
return NextResponse.json({ message: 'success' });
}
