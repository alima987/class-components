import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import { sql } from '@vercel/postgres';

export const POST = async(request: Request) => {
try{
const { email, password } = await request.json();

const hashedPassword = await hash(password, 10);
const response = await sql`
INSERT INTO users (email, password)
VALUES (${email}, ${hashedPassword})
`;
console.log('User registered:', response);
} catch (e) {
console.log({e})
}
return NextResponse.json({ message: 'success' });
}
