import React from 'react';
import { BsCurrencyBitcoin, BsArrowRight } from 'react-icons/bs';

import { FaEthereum } from 'react-icons/fa';
import { AIOutlineCloudDownload } from 'react-icons/ai';

const Banner = ({ transferNativeToken }) => {
	return (
		<div className=''>
			<section
				id='home_section'
				className=''
				data-zindex='1'
				data-parallax='scroll'>
				<div className='banner_effect'>
					<div className='container'>
						<div className='row align-items-center'>
							<div className='col-lg-6 col-md-12 col-sm-12 order-lg-first flxing'>
								<div className='banner_text_s2 text_md_center'>
									<h1
										className='animation HemToken'
										data-animation='fadeInUp'
										data-animation-delay='1.1s'>
										<strong>HemToken</strong> is a peer to peer innovative
										Network
									</h1>

									<h5
										className='animation presale-txt text-white ani'
										data-animation='fadeInUp'
										data-animation-delay='1.1s'>
										HemToken Presale is <strong>Live</strong>
									</h5>

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
							</div>
							<div className='col-12 col-sm-10 col-md-8 col-lg-6 mx-auto'>
								<img
									src='assets/images/robot.jpg'
									className='rounded mx-auto d-block custom-image'
									height={500}
									width={400}
									alt=''
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<p className='ppp'></p>
		</div>
	);
};

export default Banner;
