import AuthContext from '@/context/AuthContext'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SWRConfigContext from '@/context/SWRConfigContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '두더지집',
  description: '뿅',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <div className='w-[390px] m-auto h-screen border border-gray-100'>
            <SWRConfigContext>{children}</SWRConfigContext>
          </div>
        </AuthContext>
      </body>
    </html>
  )
}
