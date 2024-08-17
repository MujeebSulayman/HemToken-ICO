import { useStateContext } from '../context/index';

import {
	About,
	ArrowUp,
	Banner,
	Blog,
	Client,
	Contact,
	Footer,
	MobileApp,
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
		<div className='v_dark indexingind'>
			<Header
				address={address}
				setAddress={setAddress}
				connectWallet={connectWallet}
			/>
			<Banner transferNativeToken={transferNativeToken} />
			<Service />
			<About />
			<TokenSale
				buyToken={buyToken}
				tokenSale={tokenSale}
			/>
			<MobileApp />
			<Contact />
			<Footer />
		</div>
	);
};

export default index;
