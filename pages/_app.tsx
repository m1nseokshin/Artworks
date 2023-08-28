import '@/styles/globals.css'
import Navbar from "./navbar"
import Footerbar from './footerbar';
import { AppProps } from 'next/app'; // Import AppProps from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <Navbar />
      <Component {...pageProps}/>
      <Footerbar/>
    </>
  )
}
