import React from 'react';
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import Collaboration from '../components/Collaboration';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Roadmap from '../components/Roadmap';
import Header from '../components/Header'
import ButtonGradient from '../img_assets/svg/ButtonGradient'

import { useStateContext } from '../Context/index';

const index = () => {
	const { TOKEN_ICO, transferNativeToken } = useStateContext();

	return (
		<>
			<div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
				<Header />
				<Hero />
				<Benefits />
				<Collaboration />
				<Services />
				<Pricing />
				<Roadmap />
			</div>
			<ButtonGradient />
			<div>{TOKEN_ICO}</div>
			<button onClick={() => transferNativeToken()}> Transfer </button>
		</>
	);
};

export default index;
 