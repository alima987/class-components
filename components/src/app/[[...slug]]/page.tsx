import '../../index.css'
import { ClientOnly } from './client'
export function generateStaticParams() {
  return [
    { slug: [''] },
    { slug: ['tv'] },
    { slug: ['search'] }, 
    { slug: ['favicon.ico'] }
  ];
}


export default function Page() {
  return <ClientOnly />
}   