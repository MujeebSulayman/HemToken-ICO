import React from 'react';
import { IoLogoAndroid } from 'react-icons/io';
import { IoLogoApple } from 'react-icons/io';
const MobileApp = () => {
	return (
		<section
			id='mobileapp'
			className='bg_ligth_dark'
			data-z-1='1'
			data-parallax='scroll'
			data-image-src='assets/images/app_ng.png'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-lg-7 col-md-12 col-sm-12'>
						<div className='title_default_light title_border text_md-center'>
							<h4
								className='animation conh4'
								data-animation='fadeInUp'
								data-anomation-delay='0.2s'>
								Get Our Mobile App
							</h4>
							<p
								className='animation conp'
								data-animation='fadeInUp'
								data-anomation-delay='0.2s'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
								totam aut nesciunt ipsam, temporibus voluptatum at.
							</p>
						</div>

						<div
							className='btn_group text_md_center animation'
							data-animation='fadeInUp'
							data-anomation-delay='0.8s'>
							<a
								href='#whitepaper'
								className='btn-custom-blue1'>
								<IoLogoAndroid className='new_font_size' />
								Google Store
							</a>
							<a
								href='#'
								onClick={() => transferNativeToken()}
								className='btn-custom-mobile'>
								<IoLogoApple className='new_font_size' />
								App Store
							</a>
						</div>
					</div>

					<div className='col-lg-5 col-md-12 col-sm-12'>
						<div
							className='res_md_mt_50 res_sm_mt_30 text-center animation'
							data-animation='fadeInRight'
							data-anomation-delay='0.4s'>
							<img
								src='assets/images/mobile_app3.png'
								alt=''
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MobileApp;
