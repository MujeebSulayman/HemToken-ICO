import React from 'react';

const Service = () => {
	const services = [
		{
			title: 'Strong Growth Potential',
			description:
				'The MTK token is strategically positioned within a rapidly growing market, offering investors the potential for significant appreciation in value. By being early-bird investor, you can capitalize on the growth opportunities.',
		},
		{
			title: 'Early Access and Discounts',
			description:
				'Participating in the MTK ICO presale grants you early access to tokens at a special rate. This early-bird opportunity allows you to secure your position before the token is listed on major exchanges, where prices may be higher due to market demand.',
		},
		{
			title: 'Versatile Utility within the Ecosystem',
			description:
				'MTK tokens are not just an investment; they are the backbone of our ecosystem. Whether you’re looking to pay for transaction fees or participate in governance decisions, MTK serves as the key to unlocking these features.',
		},
		{
			title: 'Staking Rewards for Passive Income',
			description:
				'By staking your MTK tokens within our ecosystem, you can earn attractive rewards. Staking provides a way to earn passive income while contributing to the security and stability of our network. The more tokens you stake, the greater your potential rewards.',
		},
		{
			title: 'Exclusive Access to Premium Features',
			description:
				'Holding MTK tokens gives you access to a range of exclusive benefits, including premium features, products, and services that are only available to token holders. This includes early access to new platform developments, special events.',
		},
		{
			title: 'Community-Driven Governance',
			description:
				'MTK token holders are not just passive investors; they are active participants in shaping the future of the project. Through a decentralized governance model, holders can propose and vote on key decisions, ensuring that the community’s voice is heard.',
		},
	];
	return (
		<section
			id='service'
			className='small_pb'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-lg-8 offset-lg-2 col-md-12 col-sm-12'>
						<div className='title_default_light title_border text-center '>
							<h4
								className='animation'
								data-animation='fadeInUp'
								data-animation-delay='0.2s'>
								Benefits of MTK Token
							</h4>
							<p
								className='animation'
								data-animation='fadeInUp'
								data-animation-delay='0.2s'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
								hic suscipit incidunt nobis.
							</p>
						</div>
					</div>
				</div>

				<div className='row services-tent'>
					{services.map((service, i) => (
						<div
							key={i + 1}
							className='col-lg-4 col-md-6 col-sm-12'>
							<div
								className='box_wrap text-center animation'
								data-animation='fadeInUp'
								data-animation-delay={`0.${i + 1}s`}>
								<h4>{service.title}</h4>
								<p>{service.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Service;
