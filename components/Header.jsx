import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';

const Header = ({ address, setAddress, connectWallet }) => {
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);

	const menuList = [
		{ menu: 'Home', link: '#' },
		{ menu: 'Service', link: '#service' },
		{ menu: 'About', link: '#about' },
		{ menu: 'Token', link: '#token' },
		{ menu: 'Team', link: '#team' },
		{ menu: 'FAQ', link: '#faq' },
		{ menu: 'Contact', link: '#contact' },
	];

	const handleConnectWallet = () => {
		connectWallet();
	};

	// Toggle body scroll
	const toggleNavbar = () => {
		setIsNavbarOpen(!isNavbarOpen);
		if (!isNavbarOpen) {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
		}
	};

	return (
		<div className='header_wrap fixed-top'>
			<div className='container-fluid'>
				<nav className='navbar navbar-expand-lg'>
					<a
						href='#home_section'
						data-animation='fadeInDown'
						data-animation-delay='1s'
						className='navbar-brand page-scroll animation'>
						<img
							src='assets/images/brainwave.svg'
							alt='Logo'
							className='logo_light'
						/>
					</a>

					<button
						className='navbar-toggler animation'
						type='button'
						data-toggle='collapse'
						data-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded={isNavbarOpen}
						aria-label='Toggle navigation'
						data-animation='fadeInDown'
						data-animation-delay='1.1s'
						onClick={toggleNavbar}>
						<BiMenu />
					</button>

					<div
						className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`}
						id='navbarSupportedContent'>
						<ul className='navbar-nav m-auto'>
							{menuList.map((menu, i) => (
								<li
									key={i + 1}
									className='animation'
									data-animation='fadeInDown'
									data-animation-delay={`1.${i + 1}s`}>
									<a
										href={menu.link}
										className='nav-link navtest'>
										{menu.menu}
									</a>
								</li>
							))}
						</ul>

						<ul className='navbar-nav nav_btn align-items-center mobile_wallet_btn'>
							<li
								className='animation'
								data-animation='fadeInDown'
								data-animation-delay='2s'>
								{address ? (
									<button className='btn-custom-blue nav_item'>
										{address.slice(0, 15)}...
									</button>
								) : (
									<button
										onClick={handleConnectWallet}
										className='btn-custom-blue nav_item'>
										Connect Wallet
									</button>
								)}
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Header;
