import 'tailwindcss/tailwind.css';
import Head from 'next/head'
import Image from 'next/image';
import FacebookIcon from '../../../public/images/loopstudios/icon-facebook.svg';
import FaviconImg from  '../../../public/images/loopstudios/favicon-32x32.png';
import CloseIcon from  '../../../public/images/loopstudios/icon-close.svg';
import HumbergerIcon from  '../../../public/images/loopstudios/icon-humberger.svg';
import InstagramIcon from  '../../../public/images/loopstudios/icon-instagram.svg';
import PinterestIcon from  '../../../public/images/loopstudios/icon-pinterest.svg';
import TwitterIcon from  '../../../public/images/loopstudios/icon-twitter.svg';
import LogoImg from  '../../../public/images/loopstudios/logo.svg';

function LoopStudios(){
    const bgHeroMobileImg = '/images/loopstudios/mobile/image-hero.jpg';
    const interativeMobileImg = '/images/loopstudios/mobile/image-interactive.jpg';
    const nightArcadeMobileImg = '/images/loopstudios/mobile/image-night-arcade.jpg';
    const soccerTeamVrMobileImg = '/images/loopstudios/mobile/image-soccer-team.jpg';
    const theGridMobileImg = '/images/loopstudios/mobile/image-grid.jpg';
    const fromUpAboveVrMobileImg = '/images/loopstudios/mobile/image-from-above.jpg';
    const deepEarthMobileImg = '/images/loopstudios/mobile/image-deep-earth.jpg';
    const pocketBorealisMobileImg = '/images/loopstudios/mobile/image-pocket-borealis.jpg';
    const theCuriosityMobileImg = '/images/loopstudios/mobile/image-curiosity.jpg';
    const makeItFisheyeMobileImg = '/images/loopstudios/mobile/image-fisheye.jpg';

    return (
            <div>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" /> {/* <!-- displays site properly based on user's device -->*/}
                    <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
                    <meta property="og:title" content="Frontend Mentor | Loopstudios landing page" key="title"></meta>

                </Head>
                <body>
                    <div className={'container mx-auto max-w-full bg-no-repeat bg-cover'} 
                        style={{backgroundImage: `url(${bgHeroMobileImg})`, 
                        backgroundPosition: 'center',
                        height: '100vh'}}>
                        
                        <div>
                            About
                            Careers
                            Events
                            Products
                            Support
                        </div>
                        <div>
                            Immersive experiences that deliver
                        </div>
                    </div>

                    <div className={'container mx-auto mt-16 max-w-7xl relative z-0'}
                        style={{height: '100vh'}}>
                        <div className={'mx-auto p-7 lg:max-w-2xl lg:max-h-64 lg:ml-0'}>
                            <Image 
                                src={`${interativeMobileImg}`}
                                alt='Picture of the author'
                                width={750}
                                height={500}
                                layout={'responsive'}
                                objectFit={'contain'}
                            />
                        </div>
                        <div className={'mx-auto mt-8 p-14 bg-white relative z-10 lg:-mt-3 lg:mr-40 lg:max-w-xl'}>
                            <div className={'text-4xl uppercase  text-center max-w-sm mx-auto lg:text-left'}>
                                <h2>The leader in interactive VR</h2>
                            </div>
                            
                            <div className={'text-center max-w-md mt-8 mx-auto lg:text-left'}>
                                <p> 
                                    Founded in 2011, Loopstudios has been producing world-class virtual reality 
                                    projects for some of the best companies around the globe. Our award-winning 
                                    creations have transformed businesses through digital experiences that bind 
                                    to their brand.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={'container mx-auto flex flex-col max-w-7xl lg:px-8'}>
                        <div className={"flex flex-row justify-center md:justify-between"}>
                            <h2 className={'uppercase text-3xl tracking-wider font-light'}>Our creations</h2>

                            <button className={'hidden md:inline-block'}>
                                See all
                            </button>
                        </div>

                        <div className={'flex flex-col'}>
                            {/* top row */}
                            {/* TODO: add lg: 76 with 17 or 16.5 rem*/}
                            <div className={"flex flex-col md:flex-row justify-between"}>
                                <div className={"px-7 mt-7 lg:w-72 lg:px-0"}>
                                    <div className={'bg-no-repeat bg-cover'}
                                        style={{backgroundImage: `url(${deepEarthMobileImg})`, 
                                        backgroundPosition: 'center',
                                        height: "40vh"}}>
                                        Deep earth
                                    </div>
                                </div>
                                
                                <div className={"px-7 mt-7 lg:w-72 lg:px-0"}>
                                    <div className={'bg-no-repeat bg-cover'} 
                                        style={{backgroundImage: `url(${nightArcadeMobileImg})`, 
                                        backgroundPosition: 'center',
                                        height: "40vh",}}>
                                        Night arcade
                                    </div>
                                </div>

                                <div className={"px-7 mt-7 lg:w-72 lg:px-0"}>
                                    <div className={'bg-no-repeat bg-cover bg-soccer-team-mobile '}  
                                        style={{backgroundImage: `url(${soccerTeamVrMobileImg})`, 
                                        backgroundPosition: 'center',
                                        height: "40vh",}}>
                                        Soccer team VR
                                    </div> 
                                </div> 
                                
                                <div className={"px-7 mt-7 lg:w-72 lg:px-0"}>
                                    <div className={'bg-no-repeat bg-cover'}  
                                        style={{backgroundImage: `url(${theGridMobileImg})`, 
                                        backgroundPosition: 'center',
                                        height: "40vh",}}>
                                        The grid
                                    </div> 
                                </div>
                            </div>

                            {/* bottom row */}
                            <div className={"flex flex-col md:flex-row justify-between"}>
                                <div className={"px-7 mt-7 lg:w-72 lg:px-0"}>
                                    <div className={'bg-no-repeat bg-cover'} 
                                        style={{backgroundImage: `url(${fromUpAboveVrMobileImg})`, 
                                        backgroundPosition: 'center',
                                        height: "40vh",}}>
                                        From up above VR
                                    </div>
                                </div>
                                
                                <div className={"px-7 mt-7 lg:w-72 lg:px-0"}>
                                    <div className={'bg-no-repeat bg-cover'}  
                                        style={{backgroundImage: `url(${pocketBorealisMobileImg})`, 
                                        backgroundPosition: 'center',
                                        height: "40vh",}}>
                                        Pocket borealis
                                    </div>  
                                </div>
                            
                                <div className={"px-7 mt-7 lg:w-72 lg:px-0"}>
                                    <div className={'bg-no-repeat bg-cover'}  
                                        style={{backgroundImage: `url(${theCuriosityMobileImg})`, 
                                        backgroundPosition: 'center',
                                        height: "40vh",}}>
                                        The curiosity
                                    </div>
                                </div>
    
                                <div className={"px-7 mt-7 lg:w-72 lg:px-0"}>
                                    <div className={'bg-no-repeat bg-cover'}  
                                        style={{backgroundImage: `url(${makeItFisheyeMobileImg})`, 
                                        backgroundPosition: 'center',
                                        height: "40vh",}}>
                                        Make it fisheye    
                                    </div>
                                </div>
                            </div>

                            <div className={'px-7 mt-7 text-center md:hidden'}>
                                <button >
                                    See all
                                </button>
                            </div>
                        </div>

                    </div>
                    <footer className={'bg-black text-white mt-20'}>
                        <div className={'container mx-auto py-6 px-18'}>
                            <div className={"flex flex-col text-center lg:flex-row lg:justify-between"}>
                                <div className="space-y-4">
                                    <p className={"lg:text-left"}>Loopstudios</p>
                                    <ul className={"flex flex-col space-y-4 lg:flex-row lg:space-x-5 lg:space-y-0"}>
                                        <li>About</li>
                                        <li>Careers</li>
                                        <li>Events</li>
                                        <li>Products</li>
                                        <li>Support</li>
                                    </ul>
                                </div>

                                <div className={"flex flex-col mt-12 lg:mt-0"}>
                                    <ul className={"flex space-x-3 justify-center lg:justify-end"}>
                                        <li className={""}><FacebookIcon /></li>
                                        <li className={""}><TwitterIcon /></li>
                                        <li className={""}><PinterestIcon /></li>
                                        <li className={""}><InstagramIcon /></li>
                                    </ul>
                                    <p className={"mt-4 lg:text-right"}>© 2021 Loopstudios. All rights reserved.</p>
                                                        
                                    <p className={'text-xs text-center lg:text-right'}>
                                        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                                        Coded by <a href="#">Ehsan Hosaini</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </body>
            </div>
    );
}

export default LoopStudios