import { StateContextProvider } from '../context/index';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<>
			<StateContextProvider>
				<Component {...pageProps} />
			</StateContextProvider>
		</>
	);
}
