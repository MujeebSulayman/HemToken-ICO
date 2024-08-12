import React from 'react';
import { BsCurrencyBitcoin, BsArrowRight } from 'react-icons/bs';

import { FaEthereum } from 'react-icons/fa';
import { AIOutlineCloudDownload } from 'react-icons/ai';

const Banner = ({ transferNativeToken }) => {
	return (
		<section className='hero-section'>
			<div className='hero-content'>
				<h1
					className='animation HemToken'
					data-animation='fadeInUp'
					data-animation-delay='1.1s'>
					<strong>HemToken</strong> is a peer to peer innovative Network
				</h1>
				<p
					className='animation presale-txt text-white ani'
					data-animation='fadeInUp'
					data-animation-delay='1.1s'>
					HemToken Presale is <strong>Live</strong>
				</p>
				<div
					className='btn_group pt-2 pb-3 animation'
					data-animation='fadeInUp'
					data-animation-delay='1.3s'>
					<a
						href='#whitepaper'
						className='btn-custom-blue1'>
						Whitepaper
					</a>
					<a
						href='#whitepaper'
						className='btn-custom-blue2'>
						Transfer Token
					</a>
				</div>
			</div>
			<div className='hero-image'>
				<img
					src='assets/images/service-1.png'
					height={400}
					width={400}
					alt='HemToken'
				/>
			</div>
		</section>
	);
};

export default Banner;
