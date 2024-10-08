import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Contact = () => {
	return (
		<section
			id='contact'
			className='contact_section small_pt fotter'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-8 col-md-12 offset-lg-2'>
						<div className='title_default_light title_border text-center'>
							<h4
								className='animation'
								data-animation='fadeInUp'
								data-anomation-delay='0.2s'>
								Get In Touch
							</h4>
						</div>
					</div>
				</div>

				<div className='row align-items-center small_space'>
					<div className='col-lg-6 col-md-6 '>
						<div
							className='bg_light_dark contact_box_s2 animation foot'
							data-animation='fadeInUp'
							data-anomation-delay='0.2s'>
							<div className='contact_title'>
								<h5
									className='animation'
									data-animation='fadeInUp'
									data-anomation-delay='0.2s'>
									Contact Us
								</h5>
								<p
									className='animation conp'
									data-animation='fadeInUp'
									data-anomation-delay='0.2s'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
									totam aut nesciunt ipsam, temporibus voluptatum at.
								</p>
							</div>

							<ul className='list_none contact_info mt-margin'>
								<li
									className='animation'
									data-animation='fadeInUp'
									data-anomation-delay='0.2s'>
									<i className='ion-ios-email'></i>
									<div className='contact_detail'>
										<span className='conh4'>Phone Number</span>
										<p
											className='animation conp'
											data-animation='fadeInUp'
											data-anomation-delay='0.2s'>
											+234 705 3250 527
										</p>
									</div>
								</li>
								<li
									className='animation'
									data-animation='fadeInUp'
									data-anomation-delay='0.2s'>
									<i className='ion-ios-email'></i>
									<div className='contact_detail'>
										<span className='conh4'>Email</span>
										<p
											className='animation conp'
											data-animation='fadeInUp'
											data-anomation-delay='0.2s'>
											Sulaymanmujeeb6@gmail.com
										</p>
									</div>
								</li>
							</ul>

							<div className='contact_fellow pt-2 mt-md-4 footsoc'>
								<h5
									className='animation'
									data-animation='fadeInUp'
									data-anomation-delay='0.2s'>
									Follow Us
								</h5>
								<ul className='list_none social_icon '>
									<li
										className='animation'
										data-animation='fadeInUp'
										data-anomation-delay='0.2s'>
										<a
											href='https://www.instagram.com/thehemjay_/'
											className='icon_color'>
											<FaFacebookF className='icon_color' />
										</a>
									</li>

									<li
										className='animation'
										data-animation='fadeInUp'
										data-anomation-delay='0.2s'>
										<a
											href='/'
											className='icon_color'>
											<FaTwitter className='icon_color' />
										</a>
									</li>
									<li
										className='animation'
										data-animation='fadeInUp'
										data-anomation-delay='0.2s'>
										<a
											href='https://github.com/MujeebSulayman'
											className='icon_color'>
											<FaGithub className='icon_color' />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className='col-lg-6 col-md-6'>
						<div
							className='pt-4 pt-md-0 animation'
							data-animation='fadeInUp'
							data-animation-delay='0.2s'>
							<form
								action='#'
								method='post'
								className='field_form'
								name='form'>
								<div
									className='form-group col-md-12 animation'
									data-animation='fadeInUp'
									data-animation-delay='0.3s'>
									<input
										type='text'
										required
										placeholder='Enter Name'
										className='form-control'
										name='name'
									/>
								</div>
								<div
									className='form-group col-md-12 animation'
									data-animation='fadeInUp'
									data-animation-delay='0.3s'>
									<input
										type='email'
										required
										placeholder='Enter Email'
										className='form-control'
										name='email'
									/>
								</div>
								<div
									className='form-group col-md-12 animation'
									data-animation='fadeInUp'
									data-animation-delay='0.3s'>
									<input
										type='text'
										required
										id='subject'
										placeholder='Enter Subject'
										className='form-control'
										name='subject'
									/>
								</div>
								<div
									className='form-group col-md-12 animation'
									data-animation='fadeInUp'
									data-animation-delay='0.3s'>
									<textarea
										type='text'
										required
										id='description'
										placeholder='Message'
										className='form-control'
										name='description'
										role='2'
									/>
								</div>
								<button
									className='btn-custom-blue-sub'
									type='submit'
									id='submitButton'
									name='submit'
									value={'submit'}>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
