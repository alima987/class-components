import type { Metadata } from 'next'
import StoreProvider from './StoreProvider'
 
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
          <div id="root">{children}</div>
        </body>
      </html>
      </StoreProvider>
    )
  }