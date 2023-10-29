import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Noto_Sans_KR } from 'next/font/google';
import { QueryClient, QueryClientProvider } from 'react-query';

const noto = Noto_Sans_KR({
  subsets: ['latin'], // 또는 preload: false
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={noto.className}>
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
}
