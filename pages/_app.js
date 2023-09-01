import store from '@/redux';
import '@/styles/globals.css'
 import { QueryClientProvider ,QueryClient } from 'react-query'
 import { Provider } from 'react-redux';
 


const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return <QueryClientProvider client={queryClient}> 
 <Provider store={store}>
 <Component {...pageProps} /> 
 </Provider>
  </QueryClientProvider>
}