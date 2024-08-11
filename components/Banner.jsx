import React from 'react';
import { BsCurrencyBitcoin, BsArrowRight } from 'react-icons/bs';

import { FaEthereum } from 'react-icons/fa';
import { AIOutlineCloudDownload } from 'react-icons/ai';

const Banner = ({ transferNativeToken }) => {
	return (
		<div className='padding-up'>
			<section
				id='home_section '
				className='section_banner bg_black_dark'
				data-z-index='1'
				data-parallax='scroll'
				data-image-src='assets/images/banner_bg2.png'>
				<div className='banner_effect'>
					<div className='container'>
						<div className='row align-items-center'>
							<div className='col-lg-6 col-md-12 col-sm-12 order-lg-first'>
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
											className='btn-custom-blue1'
											id='whitepaper'>
											Whitepaper
										</a>
										<a
											href='#whitepaper'
											className='btn-custom-blue2'
											id='whitepaper'>
											Transfer Token
										</a>
									</div>
								</div>
							</div>

                <div className='col-lg-6 col-md-12 col-sm-12 order-first'>
                  <img src="assets/images/banner_img2.png" alt="" />
                </div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Banner;
