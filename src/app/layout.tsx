import StoreProvider from './StoreProvider'
import Header from '../components/Header/Header' 
import './styles/global.css'
import Footer from '../components/Footer/Footer'

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