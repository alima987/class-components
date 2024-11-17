import { NextResponse } from "next/server";
import { hash} from 'bcrypt';
import {sql} from '@vercel/postgres'

export const POST = async(request: Request) => {
try{
const { email, password } = await request.json();
console.log({ email, password })

const hashesPassword = await hash(password, 10)
const responce = await sql`
INSERT INTO users (email, password)
VALUES (${email}, ${hashesPassword})
`
} catch (e) {
console.log({e})
}
return NextResponse.json({message: 'success'})
}
