import React from 'react';
import Section from './Section';
import { smallSphere, stars } from '../assets';
import Heading from './Heading';
import PricingList from './PricingList'
import {LeftLine, RightLine} from './design/Pricing'

const Pricing = () => {
	return (
		<Section
			className='overflow-hidden'
			id='pricing'>
			<div className='container relative z-2'>
				<div className='hidden relative justify-center mb-[6.5rem] lg:flex'>
					<img
						src={smallSphere}
						alt=''
						className='relative z-1'
                        height={255}
                        width={255}
					/>
                    <div className='absolute top-1/2 left-1/2'>
                        <img src={stars} className='w-full ' width={950} height={400} alt="" />
                    </div>
				</div>
                <Heading
                tag='Get Started With Brain3'
                title='NFT DEPO'
                />
                <div className="relative">
                    <PricingList/>
                    <LeftLine/>
                    <RightLine />
                </div>
			</div>
		</Section>
	);
};

export default Pricing;
