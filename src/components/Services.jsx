import React from 'react';
import Section from './Section';
import Heading from './Heading';
import { service1, service2, service3, check } from '../assets';
import { brainwaveServices, brainwaveServicesIcons } from '../constants';
import Generating from './Generating';
import {
	PhotoChatMessage,
	Gradient,
	VideoChatMessage,
	VideoBar,
} from './design/Services';

const Services = () => {
	return (
		<Section id='how-to-use'>
			<div className='container'>
				<Heading
					title='Formative NFT made for our users'
					text='Brain3 unlocks the power of NFT'
				/>
				<div className='z-1 flex relative h-[29rem] border border-n-1/10 overflow-hidden items-center mb-5 p-0 rounded-3xl lg:p-20 xl:h-[46rem]'>
					<div className='absolute w-full h-full pointer-events-none md:w-3/5 xl:w-auto'>
						<img
							src={service1}
							className='w-full h-full object-cover md:object-right lg:opacity-65 opacity-50'
							width={800}
							height={730}
							alt='NFT'
						/>
					</div>
					<div className='relative z-1 max-w-[17rem] lg:ml-auto ml-[90px]'>
						<h4 className='h4 mb-4'>Smart Contract</h4>
						<p className='body-2 mb-[2rem] text-n-3'>
							Brain3 Unlocks the power of NFT-powered applications
						</p>
						<ul className='body-2'>
							{brainwaveServices.map((item, index) => (
								<li
									key={index}
									className='flex items-start border-t py-4 border-n-7'>
									<img
										src={check}
										alt='check'
										width={24}
										height={24}
									/>
									<p className='ml-3'>{item}</p>
								</li>
							))}
						</ul>
					</div>
					<Generating className='absolute lg:left-1/2 lg-right-auto lg:bottom-8 mt-10 lg:-translate-x-1/2 left-4 right-4 bottom-4 border border-n-1/10' />
				</div>

				<div className='relative grid z-1 gap-5 lg:grid-cols-2'>
					<div className='relative min-h-[39rem] border-n-1/10 rounded-3xl overflow-hidden'>
						<div className='absolute inset-0 '>
							<img
								src={service2}
								alt='robot'
								className='h-full origin-center w-full object-cover'
								height={750}
								width={630}
							/>
						</div>

						<div className='absolute justify-end inset-0 flex flex-col p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 '>
							<h4 className='h4 mb-4'>NFT Minting</h4>
							<p className='body-2 mb-[3rem] text-n-3'>
								Brain3 Automatically enhance your NFT token. Check it out!
							</p>
						</div>
						<PhotoChatMessage />
					</div>
					<div className='p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]'>
						<div className='py-12 px-4 xl:px-8'>
							<h4 className='h4 mb-4'>Tokenization</h4>
							<p className='body-2 mb-[2rem]'>
								Brain3 Unlocks the power of NFT-powered application. What would
								you tokenize?
							</p>
							<ul className='flex items-center justify-between'>
								{brainwaveServicesIcons.map((item, index) => (
									<li
										key={index}
										className={`items-center rounded-2xl flex justify-center ${
											index === 1
												? 'w-[3rem] h-[3rem] p-[0.8px] bg-conic-gradient md:w-[3.5rem] md:h-[3.5rem]'
												: 'flex w-10 h-10 bg-n-6 md:w-15 md:h-15'
										}`}>
										<div
											className={
												index === 1
													? 'flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]'
													: ''
											}>
											<img
												src={item}
												alt={item}
												height={24}
												width={24}
											/>
										</div>
									</li>
								))}
							</ul>
						</div>
						<div className='relative h-[30rem] w-full bg-n-8 rounded-xl overflow-hidden md:[25rem] transition-opacity hover:opacity-100 inset-0 opacity-60'>
							<img
								src={service3}
								height={400}
								width={520}
								className='w-full h-full object-cover'
								alt='3rd service'
							/>
							<VideoChatMessage />
							<VideoBar />
						</div>
					</div>
				</div>
				<Gradient />
			</div>
		</Section>
	);
};

export default Services;
