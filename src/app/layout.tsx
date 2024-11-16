import StoreProvider from './StoreProvider'
import Header from '../components/Header/Header' 
import './styles/global.css'
import Footer from '../components/Footer/Footer'
import React from 'react'
import { getSession } from "../auth"

export default async function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const session = await getSession()
    return (
      <StoreProvider session={session}>
      <html lang="en">
        <body>
          <div id="root">
            <Header />
            <main id='main'>
              {children}
            </main>
            <Footer />
          </div>
        </body>
      </html>
      </StoreProvider>
    )
  }