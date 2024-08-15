import React from 'react';

const About = () => {
	return (
		<section
			id='about'
			className='small_pt'>
			<div className='container aboutContainer'>
				<div className='row align-items-center'>
					<div className='col-lg-6 col-md-12 col-sm-12'>
						<div className='text_md_center'>
							<img
								src='assets/images/robot.jpg'
								alt='robot'
								className='animation custom-image2'
								data-animation='zoomIn'
								data-animaton-delay='0.2s'
							/>
						</div>
					</div>

					<div className='col-lg-6 col-md-12 col-sm-12 res_md_mt_30 res_sm_mt_20 '>
						<div className='title_default_light abouth4'>
							<h4
								className='animation '
								data-animation-delay='0.2s'
								data-animtion='fadeInUp'>
								About BrainWave
							</h4>
							<p
								className='animation'
								data-animation-delay='0.4s'
								data-animtion='fadeInUp'>
								MTK is a revolutionary digital asset designed to empower the
								next generation of decentralized applications and services.
								Built on a robust and scalable blockchain platform, MTK aims to
								become the cornerstone of a thriving ecosystem that fosters
								innovation, security, and user engagement. Whether you're an
								individual looking to access cutting-edge technology or a
								business seeking to leverage blockchain's transformative
								potential, MTK offers a versatile and powerful solution.
							</p>
							<p
								className='animation'
								data-animation-delay='0.8s'
								data-animtion='fadeInUp'>
								At the core of MTK is a commitment to driving the adoption of
								blockchain technology. Our
								mission is to create a seamless and user-friendly experience
								that bridges the gap between traditional systems and
								decentralized solutions. We envision a future where MTK is not
								just a token, but a catalyst for change, enabling new business
								models, enhancing transparency, and delivering real-world value
								to users around the globe.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
