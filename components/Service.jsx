import React from 'react';

const Service = () => {
	const services = [
		{
			title: 'Secure Storage',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus omnis quasi eum aut est atque, consequatur error quisquam beatae aliquam, mollitia veritatis. Fuga sapiente eveniet velit sunt maiores similique minus',
		},
		{
			title: 'Mobile App',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus omnis quasi eum aut est atque, consequatur error quisquam beatae aliquam, mollitia veritatis. Fuga sapiente eveniet velit sunt maiores similique minus',
		},
		{
			title: 'Planning',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus omnis quasi eum aut est atque, consequatur error quisquam beatae aliquam, mollitia veritatis. Fuga sapiente eveniet velit sunt maiores similique minus',
		},
		{
			title: 'Exchange Service',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus omnis quasi eum aut est atque, consequatur error quisquam beatae aliquam, mollitia veritatis. Fuga sapiente eveniet velit sunt maiores similique minus',
		},
		{
			title: 'Investment Project',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus omnis quasi eum aut est atque, consequatur error quisquam beatae aliquam, mollitia veritatis. Fuga sapiente eveniet velit sunt maiores similique minus',
		},
	];
	return (
		<section
			id='section'
			className='small_pb'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-lg-8 offset-lg-2 col-md-12 col-sm-12'>
						<div className='title_default_light title_border text-center'>
							<h4
								className='animation'
								data-animation='fadeInUp'
								data-animation-delay='0.2s'>
								BrainWave benefits
							</h4>
							<p
								className='animation'
								data-animation='fadeInUp'
								data-animation-delay='0.2s'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam hic suscipit incidunt, nobis sapiente debitis officiis.
                </p>
						</div>
					</div>
				</div>

        <div className='row'></div>
			</div>
		</section>
	);
};

export default Service;
