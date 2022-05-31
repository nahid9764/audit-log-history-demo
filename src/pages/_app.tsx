import { wrapper } from '@store';
import type { AppProps } from 'next/app';
import '../../public/scss/app.scss';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);

