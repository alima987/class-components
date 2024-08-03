import React from 'react'
import type { Metadata } from 'next'
import StoreProvider from './StoreProvider'
import Header from '../components/Header/Header' 
import './styles/global.css'

export const metadata: Metadata = {
  title: 'Movie & TV app',
  description: 'My App is a...',
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <StoreProvider>
      <html lang="en">
        <body>
          <div id="root">
            <Header />
            {children}
          </div>
        </body>
      </html>
      </StoreProvider>
    )
  }