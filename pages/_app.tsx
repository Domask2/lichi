import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { ProductsProvider } from '@/contex/ProductsContex';

const App = ({ Component, pageProps }: AppProps) => (
    <ProductsProvider>
        <Component {...pageProps} />
    </ProductsProvider>
);

export default App;
