import React from 'react';

const Footer = () => {
	const footerMenu = ['CryptoCash', 'How it work', 'Token', 'FAQ', 'Contact'];

	return (
		<footer
			className='top_footer bg_light_dark'
			data-z-index='1'
			data-parallax='scroll'
			data-image-src='assets/images/footer_bg.png'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-4 col-md-12'>
						<div
							className='footer_logo mb-3 animation'
							data-animation='fadeInUp'
							data-animation-delay='0.2s'>
							<a
								href='#home_scroll'
								className='page-scroll'>
								<img
									src='assets/images/brainwave.svg'
									alt='logo'
								/>
							</a>
							<div className='footer_desc'>
								<p
									className='animation'
									data-animation='fadeInUp'
									data-animation-delay='0.5s'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Expedita ipsam iste error ad dolore eos eveniet cum enim sed.
									Voluptates praesentium sit quia nulla? Voluptate quia culpa
									officia fuga debitis!
								</p>
							</div>
						</div>
					</div>

					{/* Moving these columns out to be siblings of col-lg-4 */}
					<div className='col-lg-3 col-md-6 res_md_mt_30 res_sm_mt_20'>
						<h4
							className='footer_title border_title animation'
							data-animation='fadeInUp'
							data-animation-delay='0.2s'>
							Quick Links
						</h4>
						<ul className='footer_link'>
							{footerMenu.map((list, i) => (
								<li
									key={i} // Added key prop
									className='animation'
									data-animation='fadeInUp'
									data-animation-delay={`0.${i + 2}s`}>
									<a href='#'>{list}</a>
								</li>
							))}
						</ul>
					</div>

					<div className='col-lg-5 col-md-6 res_md_mt res_sm_mt_20'>
						<div className='newsletter_form'>
							<h4 className='footer_title border_title animation'>
								Newsletter
							</h4>
							<p
								className='animation'
								data-animation='fadeInUp'
								data-animation-delay='0.5s'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Similique, aperiam minima.
							</p>
							<form
								action='#'
								className='subscribe_form animation'
								data-animation='fadeInUp'
								data-animation-delay='0.5s'>
								<input
									type='text'
									required
									placeholder='Email Address'
									className='input-rounded'
								/>
							</form>
						</div>
						<button
							type='submit'
							title='Subscribe'
							className='btn-custom-blue-scrib '
							name='submit'
							value='Submit'>
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
