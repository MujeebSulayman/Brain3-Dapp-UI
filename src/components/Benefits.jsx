import Section from './Section';
import Heading from './Heading';
import { benefits } from '../constants';
import Arrow from '../assets/svg/Arrow';
import ClipPath from '../assets/svg/ClipPath';
import { GradientLight } from './design/Benefits';

const Benefits = () => {
	return (
		<Section id='features'>
			<div className='container relative z-2'>
				<Heading
					className='md:max-w-md lg:max-w-2xl'
					title='NFT Token, Mint faster with Brain3'
				/>
				<div className='flex flex-wrap gap-10 mb-10'>
					{benefits.map((item) => (
						<div
							key={item.id}
							className='block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]'
							style={{ backgroundImage: `url(${item.backgroundUrl})` }}>
							<div className='relative z-2 flex flex-col min-h-[22rem] p-[2rem] pointer-events-none'>
								<h5 className='h5 mb-5'>{item.title}</h5>
								<p className='body-2 mt-6 text-n-3'>{item.text}</p>
								<div className='flex mt-auto items-center'>
									<img
										src={item.iconUrl}
										width={48}
										height={48}
										alt={item.title}
									/>
									<p className='ml-auto uppercase text-n-1 tracking-wider text-xs font-code'>
										Explore More
									</p>
									<Arrow />
								</div>
							</div>
							{item.light && <GradientLight />}
							<div
								className='inset-0.5 absolute bg-n-8 '
								style={{ clipPath: 'url(#benefits)' }}>
								<div className='transition-opacity hover:opacity-10 absolute inset-0 opacity-0'>
									{item.imageUrl && (
										<img
											src={item.imageUrl}
											alt={item.title}
											height={362}
											width={380}
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

export default Benefits;
