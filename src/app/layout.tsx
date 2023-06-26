import Cateogaries from './components/Cateogaries'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dribble Clone',
  description: 'Showcase your remarkable projects and take inspirations from others',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Cateogaries />
          {children}
        <Footer />
        </body>
    </html>
  )
}
