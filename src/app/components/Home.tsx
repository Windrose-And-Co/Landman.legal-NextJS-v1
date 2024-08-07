import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import CustomButton from './CustomButton';
import { Compass, Anchor } from 'lucide-react';

export const metadata = {
    title: 'Landman Legal | Navigate Business Growth',
    description: 'Empowering startups and solopreneurs with expert business consultancy. Navigate to richer waters with Landman Legal.',
};

const Home: React.FC = () => (
    <>
        <Head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
        </Head>
        <div className="relative min-h-screen flex flex-col">
            <div className="absolute inset-0">
                <Image 
                    src="/assets/img/header.jpg" 
                    alt="Landman Legal Logo" 
                    layout="fill" 
                    objectFit="cover" 
                    quality={100} 
                    priority
                />
            </div>
            <div className="relative z-10 flex flex-col justify-center items-center min-h-screen bg-dark-blue bg-opacity-70">
                <div className="text-center px-4">
                    <h1 className="text-white font-saira font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 bg-dark-blue bg-opacity-50 p-4 rounded-lg text-shadow-lg">
                        Handling complicated tax situations isn't stressful.
                    </h1>
                    <h1 className="text-white font-hind text-xl md:text-2xl mb-12 bg-dark-blue bg-opacity-50 p-4 rounded-lg">
                        Handling it alone is.
                    </h1>
                    <p className="text-white font-hind text-lg font-light mb-8 bg-dark-blue bg-opacity-50 p-4 rounded-lg">
                        US Tax Law is complicated and boring.
                        <br />
                        Thankfully, Nathaniel Landman loves it... so that you don't have to.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <CustomButton
                            text="Discover Our Services"
                            url="/what-we-do"
                            buttonStyle="bg-light-blue hover:bg-light-blue-light"
                            className="text-white font-saira font-bold text-lg px-8 py-3 rounded-full w-full sm:w-auto transition duration-300 ease-in-out"
                        >
                            <Compass className="w-6 h-6 mr-2" />
                        </CustomButton>
                        <CustomButton
                            text="Start Your Journey"
                            url="/contact"
                            buttonStyle="bg-earth-yellow hover:bg-palatinate hover:text-white"
                            className="text-dark-blue font-saira font-bold text-lg px-8 py-3 rounded-full w-full sm:w-auto transition duration-300 ease-in-out"
                        >
                            <Anchor className="w-6 h-6 mr-2" />
                        </CustomButton>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Home;
