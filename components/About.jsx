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
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
								placeat expedita sed sapiente. Illo ipsum sequi beatae nostrum
								enim officiis dignissimos fuga necessitatibus consequuntur. Quo
								consequuntur quaerat numquam exercitationem fugit.
							</p>
							<p
								className='animation'
								data-animation-delay='0.8s'
								data-animtion='fadeInUp'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
								placeat expedita sed sapiente. Illo ipsum sequi beatae nostrum
								enim officiis dignissimos fuga necessitatibus consequuntur. Quo
								consequuntur quaerat numquam exercitationem fugit.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
