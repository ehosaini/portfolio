import 'tailwindcss/tailwind.css';
import Head from 'next/head'
import Image from 'next/image';


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

    // Todos
    // - cleanup inline styles 

    return (
            <div>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" /> {/* <!-- displays site properly based on user's device -->*/}
                    <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
                    <meta property="og:title" content="Frontend Mentor | Loopstudios landing page" key="title"></meta>

                </Head>
                <body>
                    <div className={'container sm:mx-auto bg-no-repeat bg-cover'} 
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

                    <div className={'container sm:mx-auto mt-16 relative z-0'}
                        style={{height: '100vh'}}>
                        <div className={'mx-auto max-w-xs lg:max-w-sm lg:max-h-64 lg:max-w-2xl lg:ml-24'}>
                            <Image 
                                src={`${interativeMobileImg}`}
                                alt='Picture of the author'
                                width={'750'}
                                height={'500'}
                                layout={'responsive'}
                                objectFit={'contain'}
                            />
                        </div>
                        <div className={'mx-auto mt-8 p-14 bg-white relative z-10 lg:-mt-3 lg:mr-80 lg:max-w-xl'}>
                            <div className={'text-4xl uppercase mb-8 text-center max-w-sm lg:text-left'}>
                                <h2>The leader in interactive VR</h2>
                            </div>
                            
                            <div className={'text-center max-w-md lg:text-left'}>
                                <p> 
                                    Founded in 2011, Loopstudios has been producing world-class virtual reality 
                                    projects for some of the best companies around the globe. Our award-winning 
                                    creations have transformed businesses through digital experiences that bind 
                                    to their brand.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={'container mx-auto flex flex-col'}>
                        <div className={"flex flex-row justify-center md:justify-between"}>
                        {/* <h2 className={'uppercase text-3xl tracking-wider font-light'}>Our creations</h2> */}
                            <h2 className={'uppercase text-3xl tracking-wider font-light'}>Our creations</h2>

                            <button className={'hidden md:inline-block'}>
                                See all
                            </button>
                        </div>

                        <div className={'flex flex-col md:flex-row'}>
                            <div className={"px-7 mt-7"}>
                                <div className={'bg-no-repeat bg-cover'}
                                    style={{backgroundImage: `url(${deepEarthMobileImg})`, 
                                    backgroundPosition: 'center',
                                    height: '20vh'}}>
                                    Deep earth
                                </div>
                            </div>
                            
                            <div className={"px-7 mt-7"}>
                                <div className={'bg-no-repeat bg-cover'} 
                                    style={{backgroundImage: `url(${nightArcadeMobileImg})`, 
                                    backgroundPosition: 'center',
                                    height: '20vh'}}>
                                    Night arcade
                                </div>
                            </div>

                            <div className={"px-7 mt-7"}>
                                <div className={'bg-no-repeat bg-cover'}  
                                    style={{backgroundImage: `url(${soccerTeamVrMobileImg})`, 
                                    backgroundPosition: 'center',
                                    height: '20vh'}}>
                                    Soccer team VR
                                </div> 
                            </div> 
                            
                            <div className={"px-7 mt-7"}>
                                <div className={'bg-no-repeat bg-cover'}  
                                    style={{backgroundImage: `url(${theGridMobileImg})`, 
                                    backgroundPosition: 'center',
                                    height: '20vh'}}>
                                    The grid
                                </div> 
                            </div>
 
                            <div className={"px-7 mt-7"}>
                                <div className={'bg-no-repeat bg-cover'} 
                                    style={{backgroundImage: `url(${fromUpAboveVrMobileImg})`, 
                                    backgroundPosition: 'center',
                                    height: '20vh'}}>
                                    From up above VR
                                </div>
                            </div>
                            
                            <div className={"px-7 mt-7"}>
                                <div className={'bg-no-repeat bg-cover'}  
                                    style={{backgroundImage: `url(${pocketBorealisMobileImg})`, 
                                    backgroundPosition: 'center',
                                    height: '20vh'}}>
                                    Pocket borealis
                                </div>  
                            </div>
                          
                            <div className={"px-7 mt-7"}>
                                <div className={'bg-no-repeat bg-cover'}  
                                    style={{backgroundImage: `url(${theCuriosityMobileImg})`, 
                                    backgroundPosition: 'center',
                                    height: '20vh'}}>
                                    The curiosity
                                </div>
                            </div>
  
                            <div className={"px-7 mt-7"}>
                                <div className={'bg-no-repeat bg-cover'}  
                                    style={{backgroundImage: `url(${makeItFisheyeMobileImg})`, 
                                    backgroundPosition: 'center',
                                    height: '20vh'}}>
                                    Make it fisheye    
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
                        <div className={'container sm:mx-auto'}>
                            <div>
                                Loopstudios
                                About
                                Careers
                                Events
                                Products
                                Support

                                © 2021 Loopstudios. All rights reserved.
                            </div>
                    
                            <div className={'attribution'}>
                                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                                Coded by <a href="#">Your Name Here</a>.
                            </div>
                        </div>
                    </footer>
                </body>
            </div>
    );
}

export default LoopStudios