import React, { useState } from 'react';

import { FaEthereum } from 'react-icons/fa';

const TokenSale = ({ buyToken, tokenSale }) => {
	const [nToken, setnToken] = useState(1);
	const persentage = (tokenSale?.tokenSold / tokenSale?.tokenSaleBalance) * 100;
	const showPercentage = persentage.toString();

	return (
		<section
			id='token'
			className='sectiion_token token_sale bg_light_dark token'
			data-z-index='1'
			data-parallax='scroll'
			data-image-src='assets/images/tokne_bg.png'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 offset-lg-3 col-md-12 col-sm-12'>
						<div className='title_default_light title_border text-center'>
							<h4
								className='animation mtkheader'
								data-animation='fadeInUp'
								data-animation-delay='0.2s'>
								MTK Token Sale
							</h4>
							<p
								className='mtkSale animation'
								data-animation='fadeInUp'
								data-animtion-delay='0.2s'>
								Don't miss your chance to be an early adopter of MTK! Secure
								your tokens during our ICO presale at a special discounted rate.
							</p>
						</div>
					</div>
				</div>

				<div className='row align-items-center'>
					<div className='col-lg-3'>
						<div className='pr_box'>
							<h6
								className='animation'
								data-animation='fadeInUp'
								data-animtion-delay='0.2s'>
								Start Time
							</h6>

							<p
								className='animation tokp'
								data-animation='fadeInUp'
								data-animtion-delay='0.2s'>
								August 14 2024
							</p>
						</div>
						<div className='pr_box'>
							<h6
								className='animation'
								data-animation='fadeInUp'
								data-animtion-delay='0.2s'>
								Ending TIme
							</h6>

							<p
								className='animation tokp'
								data-animation='fadeInUp'
								data-animtion-delay='0.2s'>
								February 14 2025
							</p>
						</div>

						<div className='pr_box'>
							<h6
								className='animation'
								data-animation='fadeInUp'
								data-animtion-delay='0.2s'>
								Token Exchange Rate
							</h6>

							<p
								className='animation tokp'
								data-animation='fadeInUp'
								data-animtion-delay='0.2s'>
								0.5 ETH = 1 MTK
							</p>
						</div>
					</div>

					<div className='col-lg-6'>
						<div className='token_sale res_md_mb_40 res_md_mt_40 res_sm_mb_30 res_sm_mt_30'>
							<div
								className='animation tk_countdown text-center token_countdown_bg'
								data-animation='fadeInUp'
								data-animtion-delay='0.1s'>
								<div className='field_form'>
									<div className='row'>
										<div
											className='form-group col-md-12 animation'
											data-animtion='fadeInUp'
											data-animation-delay='1.4s'>
											<input
												type='number'
												required
												placeholder='1'
												id='first-name'
												min={1}
												className='form-control'
												onChange={() => setnToken(e.target.value)}
												name='token'
											/>
										</div>
									</div>
								</div>
								<div className='tk_counter_inner'>
									<div
										className='progress animation'
										data-animation='fadeInUp'
										data-animtion-delay='1.3s'>
										<div
											className='progress-bar progress-bar-striped gradient'
											role='progressbar'
											aria-valuenow={`${persentage}`}
											aria-valuemin={`${'0'}`}
											arial-aria-valuemax={'100'}
											style={{ width: `${persentage}` }}>
											{showPercentage.slice(0, 4)}%
										</div>

										<span className='progress_label bg-white inline_style_1 mtk'>
											<strong> {tokenSale?.tokenSold} MTK </strong>
										</span>
										<span className='progress_label bg-white inline_style_2 mtk'>
											<strong> {tokenSale?.tokenSaleBalance} MTK </strong>
										</span>
										<span className='progress_min_val pro'>
											<strong> {tokenSale?.tokenSold} Sales Raised </strong>
										</span>
										<span className='progress_max_val pro'>
											<strong> {tokenSale?.tokenSold}Soft Caps </strong>
										</span>
									</div>

									<a
										href=''
										className='btn-custom-blue3 animation'
										data-animtion='fadeInUp'
										data-animation-delay='0.1s'>
										<FaEthereum className='new_font_size' />
										Buy Token
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-3'>
						<div className='pr_box'>
							<h6
								className='animation'
								data-animation='fadeInUp'
								data-animtion-delay='0.2s'>
								Low - High 24 hrs
							</h6>

							<p
								className='animation tokp'
								data-animation='fadeInUp'
								data-animtion-delay='0.2s'>
								$2437
							</p>
						</div>
						<div className='pr_box'>
							<h6
								className='animation'
								data-animation='fadeInUp'
								data-animtion-delay='0.2s'>
								Total Token Sold
							</h6>

							<p
								className='animation tokp'
								data-animation='fadeInUp'
								data-animtion-delay='0.2s'>
								{tokenSale?.tokenSold} MTK {showPercentage.slice(0, 4)}%
							</p>
						</div>

						<div className='pr_box'>
							<h6
								className='animation'
								data-animation='fadeInUp'
								data-animtion-delay='0.2s'>
								Acceptable Currency
							</h6>

							<p
								className='animation tokp'
								data-animation='fadeInUp'
								data-animtion-delay='0.2s'>
								ETHEREUM
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TokenSale;
