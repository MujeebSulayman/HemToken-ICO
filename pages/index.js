import { useStateContext } from '../context/index';

import {
	About,
	ArrowUp,
	Banner,
	Blog,
	Client,
	Contact,
	Distribution,
	Faq,
	Footer,
	MobileApp,
	Team,
	TokenSale,
	TimeLine,
	Service,
	Loader,
	Header,
} from '../components/index';

const index = () => {
	const {
		TOKEN_ICO,
		transferNativeToken,
		currentHolder,
		tokenSale,
		tokenHolders,
		nativeToken,
		balance,
		address,
		buyToken,
		connectWallet,
		setAddress,
	} = useStateContext();

	return (
		<div className='v_dark'>
			<Header
				address={address}
				setAddress={setAddress}
				connectWallet={connectWallet}
			/>
			<Banner transferNativeToken={transferNativeToken} />
			<TokenSale
				buyToken={buyToken}
				tokenSale={tokenSale}
			/>
			<Distribution />
			<MobileApp />
			<Team />
			<Faq />
			<Contact />
			<Footer />

			<button onClick={() => transferNativeToken()}>Transfer</button>
		</div>
	);
};

export default index;
