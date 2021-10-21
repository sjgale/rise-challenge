import Head from '../components/Head'
import '../styles/global.css'
import '../styles/fonts.css'

export default function MyApp({ Component, pageProps }) {
  return <>
    <Head />
    <Component {...pageProps} />
  </>
}
