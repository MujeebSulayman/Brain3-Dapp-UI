import { brainwaveSymbol, check } from '../assets';
import { benefits, collabApps, collabContent, collabText } from '../constants';
import Button from '../constants/Button';
import Section from '../components/Section';
import { Gradient } from '../components/design/Services';
import Heading from '../components/Heading';
import Arrow from '../assets/svg/Arrow';
import ClipPath from '../assets/svg/ClipPath';
import { GradientLight } from '../components/design/Benefits';

const Features = () => {
	return (
		<Section
			id='features'
			crosses>
			<div className='container lg:flex'>
				<div className='max-w-[35rem]'>
					

					<h2 className='h2 mb-4 md:mb-8'>
						Web3 Chat with Effortless Integration
					</h2>

					<ul className='max-w-[26rem] mb-10 md:mb-14'>
						{collabContent.map((item) => (
							<li
								className='mb-3 py-3'
								key={item.id}>
								<div className='flex items-center'>
									<img
										src={check}
										width={24}
										height={24}
										alt='check'
									/>
									<h6 className='body-2 mt-2 ml-5'>{item.title}</h6>
								</div>
								{item.text && (
									<p className='body-2 mt-3 ml-11 text-n-4'>{item.text}</p>
								)}
							</li>
						))}
					</ul>
					<Button>Try it now</Button>
				</div>
				<div className='lg:ml-auto xl:w-[38rem] mt-4'>
					<p className='body-2 mb-20 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto'>
						{collabText}
					</p>

					<div className='relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100'>
						<div className='flex w-60 aspect-square m-auto border border-n-6 rounded-full'>
							<div className='w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full'>
								<div className='flex items-center justify-center w-full h-full bg-n-8 rounded-full'>
									<img
										src={brainwaveSymbol}
										width={48}
										height={48}
										alt='brainwave'
									/>
								</div>
							</div>
						</div>

						<ul>
							{collabApps.map((app, index) => (
								<li
									key={app.id}
									className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
										index * 45
									}`}>
									<div
										className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
											index * 45
										}`}>
										<img
											className='m-auto'
											width={app.width}
											height={app.height}
											alt={app.title}
											src={app.icon}
										/>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>

			<div className='container pt-[14rem] relative z-2'>
				<Heading
					className='md:max-w-md lg:max-w-2xl'
					title='Real-time Chatting, Connect easily with Brain3'
				/>

				<div className='flex flex-wrap gap-10 mb-10'>
					{benefits.map((item) => (
						<div
							className='block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]'
							style={{
								backgroundImage: `url(${item.backgroundUrl})`,
							}}
							key={item.id}>
							<div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none'>
								<h5 className='h5 mb-5'>{item.title}</h5>
								<p className='body-2 mb-6 text-n-3'>{item.text}</p>
								<div className='flex items-center mt-auto'>
									<img
										src={item.iconUrl}
										width={48}
										height={48}
										alt={item.title}
									/>
									<p className='ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider'>
										Explore more
									</p>
									<Arrow />
								</div>
							</div>

							{item.light && <GradientLight />}

							<div
								className='absolute inset-0.5 bg-n-8'
								style={{ clipPath: 'url(#benefits)' }}>
								<div className='absolute inset-0 opacity-0 transition-opacity hover:opacity-10'>
									{item.imageUrl && (
										<img
											src={item.imageUrl}
											width={380}
											height={362}
											alt={item.title}
											className='w-full h-full object-cover'
										/>
									)}
								</div>
							</div>

							<ClipPath />
						</div>
					))}
				</div>
			</div>
		</Section>
	);
};

export default Features;
