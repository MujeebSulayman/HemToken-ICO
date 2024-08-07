import { StateContextProvider } from '../context/index';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<>
			<StateContextProvider>
				<Component {...pageProps} />
			</StateContextProvider>

			<script src='assets/js/jquery-1.12.4.min.js'></script>
			<script src='assets/js/jquery.countdown.min.js'></script>
			<script src='assets/js/jquery.counterup.min.js'></script>
			<script src='assets/js/jquery.dd.min.js'></script>
			<script src='assets/js/magnific-popup.min.js'></script>
			{/* <script src='assets/js/notification.js'></script> */}
			<script src='assets/js/parallax.js'></script>
			<script src='assets/particles.min.js'></script>
			<script src='assets/scripts.js'></script>
			<script src='assets/spop.min.js'></script>
			<script src='assets/waypoints.min.js'></script>
			<script src='assets/owlcarousel/js/owl.carousel.min.js'></script>
			<script src='assets/bootstrap/js/bootstrap.min.js'></script>
			<script src='index.js'></script>
		</>
	);
}
