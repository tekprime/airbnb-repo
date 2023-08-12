import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './components/Navbar'
import Modal from './modals/Modal'
import RegisterModal from './modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser';
import RentModal from './modals/RentModal'
import ClientOnly from './components/ClientOnly'


export const metadata: Metadata = {
  title: 'AirBnB',
  description: 'AirBnB App',
}

const font = Nunito({
  subsets: ["latin"],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
      <ClientOnly>
        <ToasterProvider/>
        <RentModal/>
        <RegisterModal/>
        <LoginModal/>
        <Navbar currentUser={currentUser}/>
        </ClientOnly>
         <div className="pb-20 pt-20">
           {children}
         </div>
        </body>
    </html>
  )
}
