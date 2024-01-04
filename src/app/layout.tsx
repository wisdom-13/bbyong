import AuthContext from '@/context/AuthContext'
import './globals.css'
import './style.css'
import type { Metadata } from 'next'
import SWRConfigContext from '@/context/SWRConfigContext'

export const metadata: Metadata = {
  title: '두더지집',
  description: '뿅',
  icons: {
    icon: '/main_mole.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <div id='wrap' className='w-full max-w-[430px] m-auto h-screen border border-gray-100 bg-bgColor'>
            <SWRConfigContext>{children}</SWRConfigContext>
          </div>
        </AuthContext>
      </body>
    </html>
  )
}
