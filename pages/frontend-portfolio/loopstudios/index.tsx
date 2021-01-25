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
                    <div className={"container sm:mx-auto"} style={{backgroundImage: `url(${bgHeroMobileImg})`, height: '60vh'}}>
                        About
                        Careers
                        Events
                        Products
                        Support

                        Immersive experiences that deliver
                    </div>


                    <div className={"container sm:mx-auto"}>
                        <Image 
                            src={`${interativeMobileImg}`}
                            alt="Picture of the author"
                            width={300}
                            height={300}
                        />
                        The leader in interactive VR

                        Founded in 2011, Loopstudios has been producing world-class virtual reality 
                        projects for some of the best companies around the globe. Our award-winning 
                        creations have transformed businesses through digital experiences that bind 
                        to their brand.
                    </div>
                    <div className={"container sm:mx-auto"}>
                        Our creations

                        See all

                        <div style={{backgroundImage: `url(${deepEarthMobileImg})`, height: '20vh'}}>
                            Deep earth
                        </div>    
                        
                        <div style={{backgroundImage: `url(${nightArcadeMobileImg})`, height: '20vh'}}>
                            Night arcade
                        </div>  
                        
                        <div style={{backgroundImage: `url(${soccerTeamVrMobileImg})`, height: '20vh'}}>
                            Soccer team VR
                        </div>  
                        
                        <div style={{backgroundImage: `url(${theGridMobileImg})`, height: '20vh'}}>
                            The grid
                        </div>  
                        
                        <div style={{backgroundImage: `url(${fromUpAboveVrMobileImg})`, height: '20vh'}}>
                            From up above VR
                        </div>  
                        
                        <div style={{backgroundImage: `url(${pocketBorealisMobileImg})`, height: '20vh'}}>
                            Pocket borealis
                        </div>  
                        
                        <div style={{backgroundImage: `url(${theCuriosityMobileImg})`, height: '20vh'}}>
                            The curiosity
                        </div>  
                        
                        <div style={{backgroundImage: `url(${makeItFisheyeMobileImg})`, height: '20vh'}}>
                            Make it fisheye    
                        </div>  
                    </div>
                    <footer className={"container sm:mx-auto"}>
                        <div className={"container sm:mx-auto"}>
                            Loopstudios
                            About
                            Careers
                            Events
                            Products
                            Support

                            © 2021 Loopstudios. All rights reserved.
                    
                        <div className={"attribution"}>
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