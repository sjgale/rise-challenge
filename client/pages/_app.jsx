import 'whatwg-fetch'
import Head from '../components/Head'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import '../styles/global.css'
import '../styles/fonts.css'

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }) {
    return (
        <QueryClientProvider client={queryClient}>
            <Head />
            <Component {...pageProps} />
        </QueryClientProvider>
    )
}
