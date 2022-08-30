import Head from 'next/head';
import '../styles/index.css';
import Layout from 'src/components/layout/Layout';
import { Provider } from 'react-redux';
import { store } from '@services/redux/store/store';
import { ThemeProvider } from 'next-themes';
import { LocomotiveScrollProvider as RLSProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useRef } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();
  const containerRef = useRef(null);
  return (
    <Provider store={store}>
      <Head>
        <title>Blossom House</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ThemeProvider defaultTheme='light' attribute='class'>
        <Layout>
          <RLSProvider
            options={{
              smooth: true,
              smartphone: {
                smooth: true,
              },
              tablet: {
                smooth: true,
              },
              // ... all available Locomotive Scroll instance options
            }}
            watch={
              [
                //..all the dependencies you want to watch to update the scroll.
                //  Basicaly, you would want to watch page/location changes
                //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
              ]
            }
            location={asPath}
            onLocationChange={(scroll: any) =>
              scroll.scrollTo(0, { duration: 0, disableLerp: true })
            }
            containerRef={containerRef}
          >
            <div data-scroll-container ref={containerRef}>
              <Component {...pageProps} />
            </div>
          </RLSProvider>
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
