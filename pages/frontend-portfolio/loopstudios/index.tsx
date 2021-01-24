import 'tailwindcss/tailwind.css';
import Head from 'next/head'

function LoopStudios(){
    return (
            <div>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" /> {/* <!-- displays site properly based on user's device --></Head> */}
                    <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
                    <meta property="og:title" content="Frontend Mentor | Loopstudios landing page" key="title"></meta>

                </Head>
                <body>
                About
                Careers
                Events
                Products
                Support

                Immersive experiences that deliver

                The leader in interactive VR

                Founded in 2011, Loopstudios has been producing world-class virtual reality 
                projects for some of the best companies around the globe. Our award-winning 
                creations have transformed businesses through digital experiences that bind 
                to their brand.

                Our creations

                See all

                Deep earth
                Night arcade
                Soccer team VR
                The grid
                From up above VR
                Pocket borealis
                The curiosity
                Make it fisheye

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
                </body>
            </div>
    
    );
}

export default LoopStudios