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
					Welcome to the Future of Web3 with MTK Token.
				</h1>
				<h5
					className='animation presale-txt text-white ani'
					data-animation='fadeInUp'
					data-animation-delay='1.1s'>
					Presale is live
				</h5>
				<div
					className='btn_group pt-2 pb-3 animation butgrp'
					data-animation='fadeInUp'
					data-animation-delay='1.3s'>
					<a
						href='#whitepaper'
						className='btn-custom-blue1'>
						Whitepaper
					</a>
					<a
						href='#'
						onClick={() => transferNativeToken()}
						className='btn-custom-blue2'>
						Buy Token
					</a>
				</div>
			</div>
			<div className='hero-image'>
				<img
					src='assets/images/service-1.png'
					height={600}
					className='custom-image animation'
					data-animation='fadeInUp'
					data-animation-delay='1.1s'
					width={500}
					alt='HemToken'
				/>
			</div>
		</section>
	);
};

export default Banner;
