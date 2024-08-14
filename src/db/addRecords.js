const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    // Insert multiple records
    const users = await prisma.projects.createMany({
        data: [
            {
                name: "about",
                title: "About S.A.M. ",
                subtitle: "Full-stack Web Developer",
                url: "./",
                gitHub: "https://github.com/StefAltavista",
                images: ["/images/about/Logo.png"],
                background: "rgb(255, 85, 85,0.5)",
                color: "rgb(0, 0, 0)",
                functionality: "",
                description:
                    "With a background in Electronics and Information Technology Stefano Altavista Mascitti is a Web and App developer with a highly creative and innovative drive. The past studies in Telecommunication Systems and languages such as C, C++, Java and PHP, the recent study of Javascript and many associate libraries and frameworks, joined with his artistic path as Musician and a Graphic designer makes S.A.M by every means a complete full stack web developer.",
                technologies:
                    "Javascript - Typescript - Node.js - Next.js - React - React Native - Vue.js - Tailwind - CSS - HTML - SQL - noSQL - PostgreSQL - MongoDB - Golang - C - Java - Apache - NginX - Linux",
            },
            {
                name: "beingbody",
                title: "Being Body",
                subtitle: "Massage therapist business website",
                url: "https://beingbody.net",
                gitHub: "https://github.com/StefAltavista/beingBody",
                images: [
                    "/images/beingbody/Logo.png",
                    "/images/beingbody/1.png",
                    "/images/beingbody/2.png",
                    "/images/beingbody/3.png",
                ],
                background: "rgb(255, 224, 193)",
                color: "rgb(20, 0, 0)",
                functionality:
                    "Book an appointment with Katia Serena on her massage studio business presentational website ",
                description:
                    "A good business requires a good website! Here K.S. showcases her concept as a massage therapist, and gives various informations regarding their studio, situated in Berlin - Neukölln. \n Contact the studio directly on the website via the Book an Appointment form. Send your information to the therapist before the apointment via the Wellnsess form",
                technologies:
                    "Javascript - React - Express - Node.js - Nodemailer",
            },
            {
                name: "konigrimm",
                title: "Konni Grimm Gallery",
                subtitle: "Artist showcase platform",
                url: "https://konigrimm.com",
                gitHub: "https://github.com/StefAltavista/koni_gallery",
                images: [
                    "/images/konigrimm/Logo.png",
                    "/images/konigrimm/1.png",
                    "/images/konigrimm/2.png",
                    "/images/konigrimm/3.png",
                ],

                background: "rgb(255, 255, 255)",
                color: "rgb(20, 20, 20)",
                functionality: "Showcase website for Koni Grimm",
                description:
                    "Simple and refined just like a modern Berliner gallery. Divided into 3 section each of them with a unique outlook; a book, a collection of drawings and a painting wall.",
                technologies:
                    "Javascript - React - Express - Node.js - Nodemailer",
            },
            {
                name: "wrongimage",
                title: "Wrong Image",
                subtitle: "Image manipulator and NFT minter",
                url: "https://wrongimage.art",
                gitHub: "https://github.com/StefAltavista/Wrong-Image",
                images: [
                    "/images/wrongimage/Logo.png",
                    "/images/wrongimage/1.png",
                    "/images/wrongimage/2.png",
                    "/images/wrongimage/3.png",
                    "/images/wrongimage/4.png",
                    "/images/wrongimage/5.png",
                ],
                background: "rgb(0, 0, 0)",
                color: "rgb(150, 240, 167)",
                functionality:
                    "Access via Metamask personal wallet, create and manipulate images, store on IPFS, mint NFT ",
                description:
                    "Within the realm of Web3: Wrong Image is a Glitch Art Generator and NFT minter based on P5js. There are 7 different algorithms, each of which has their own parameters that allow the user to manipulate and blend pictures of multiple formats. The finalized image can be downloaded or stored on the IPFS (Inter Planetary File System) the industrial standard for NFT storage. Once the picture is saved the user can access his own gallery, and mint each of those immages into the Polygon chain. With the aid of NFTport API, the user can also query The Ethereum and Poligon blockchain to visualize the NFTS that belong to a given wallet address. The user can access the website with his personal crypto wallet through Metamask. The website under construction.",
                technologies:
                    "Javascript - React - Express - Node.js - P5JS - PostgreSQL",
            },

            {
                name: "noises",
                title: "Noises",
                subtitle: "Social Network for promoters & event Calendar",
                url: "/",
                gitHub: "https://github.com/StefAltavista/noises",
                images: [
                    "/images/noises/Logo.png",
                    "/images/noises/2.png",
                    "/images/noises/3.png",
                    "/images/noises/4.png",
                    "/images/noises/5.png",
                    "/images/noises/1.png",
                ],
                background: "rgb(108, 126, 240)",
                color: "rgb(0,0,0)",
                functionality:
                    "Event Calendar, Personal account page, Event creator and manager, with notes archive and other features, also internal messenger and mailing list system - (UNDER PROCESSING)",
                description:
                    "Noises was born as a social network for music labels, event organizers and promoters of the Berlin Noise, underground Techno and Experimental music scene. The aim of the network was to let oganizations comunicate, connect and collaborate more fluently, since this is often a delicate process. Noises is now also an online calendar where users can view published events and organizers profiles without the need of signing in. It's a free Platform that promotes alternative and countercoulture. S.A.M. created this platform to be used for his own Label Autonoma Industrile, as most of the current event promotion platforms are controlled by mediatic and commercial algorythms that do not push for cultural development but instead for the anihilation of individuality and for the subsitence and growth of a manipulated society. Since there is a big social movement in the realm of avantgarde, unconventional and extreme art, Noises wants to give a voice to the underdogs that have always been the foundation of our society and now need to reclaim their space. \n S.A.M has put together a team to further develope this platform, and it will soon be launched.",
                technologies:
                    "Javascript - React - Express - Node.js - PostgreSQL ",
            },

            {
                name: "avaink",
                title: "Ava - Ink",
                subtitle: "Artist Blog and Business website",
                url: "/",
                gitHub: "https://github.com/StefAltavista/avaink",
                images: ["/images/avaink/Logo.png", "/images/avaink/1.png"],
                background: "rgb(200, 100, 50)",
                color: "rgb(0, 0, 0)",
                functionality:
                    "Art, Tattoo designs and News from Ava Ink, book appointment, try her designs over your foto! ",
                description:
                    "Ava Ink is a berlin based tattoo artist, this project consist in a SPA that she can personally update via log in page. Add Posts, designs just like every social network \n a Try out section allows the ser to upload a picture of theirselves and apply a design on top to have an overview of what the artwork will look like on their skin! \n \n website under maintance at the moment ",
                technologies: "Javascript - React - P5.js - AWS",
            },
            {
                name: "ultraviolet",
                title: "Ultraviolet",
                subtitle: "Web Synthesizer",
                url: "https://www.ultraviolet-synth.xyz",
                gitHub: "https://github.com/StefAltavista/ultraviolet",
                images: [
                    "/images/ultraviolet/Logo.png",
                    "/images/ultraviolet/1.png",
                ],
                background: "rgb(200, 100, 100)",
                color: "rgb(0, 0, 0)",
                functionality:
                    "Press play, make a sequence, add effects and start tweeking to generate a various spectrum of sounds",
                description:
                    "One page application Digital Synthesizer. Includes an FM Oscillator connected to an envelope generator and controlled by a step sequencer. Sequencer controls Frequency and triggers the ADSR, with adjustable number of steps. The sound gets routed through an effect rack with several selectable FX. \n Developped with Tone.js and React ",
                technologies: "Javascript - React - Tone.js - AudioContext",
            },
            {
                name: "wrongimageboard",
                title: "Wrong Image-Board",
                subtitle: "Image Gallery",
                url: "./",
                gitHub: "https://github.com/StefAltavista/imageBoard",
                images: [
                    "/images/wrongimageboard/Logo.png",
                    "/images/wrongimageboard/2.png",
                    "/images/wrongimageboard/3.png",
                ],
                background: "rgb(108, 240, 117)",
                color: "rgb(0, 0, 0)",
                functionality:
                    "Upload Picture on a personal wall, Leave comments, infinite scroll",
                description:
                    "Conceptually connected to Wrong Image, this ImageBoard is a simple one page application created in Vue.Js. The user can upload pictures on a personal dashboard, leave comments and delete pictures previously stored on AWS.",
                technologies:
                    "Javascript - VUEJS - Express - Node.js - PostgreSQL - AWS",
            },

            {
                name: "animate",
                title: "Animate",
                subtitle: "User based petition website with animations ",
                url: "./",
                gitHub: "https://github.com/StefAltavista/animate",
                images: [
                    "/images/animate/Logo.png",
                    "/images/animate/1.png",
                    "/images/animate/2.png",
                    "/images/animate/3.png",
                    "/images/animate/4.png",
                    "/images/animate/5.png",
                ],
                background: "rgb(141, 202, 255)",
                color: "rgb(57, 50, 134)",
                functionality:
                    "Create and manage Personal account, digital signature, research filters, animated with only VanillaJS",
                description:
                    "Animate is a studio project where users can create a personal account and access a website of Petitions. In this case there is only one petition to sign: `Animate your Website`. A quite silly theme where the creator suggests that every website should be animated by law. \nThe twist is that the whole website is actually animated. Using only Vanilla Javascript, S.A.M. created a 3D bubbleworld with an aesthetic imprint that aims to convice the user that this is the `Right petition to sign` ! ",
                technologies:
                    "Javascript - Handlebars - Express - Node.js, Canvas, PostgreSQL ",
            },

            {
                name: "mobileapps",
                title: "Mobile Apps",
                subtitle:
                    "Collection of various IOs & Android mobile applications",
                url: "https://github.com/StefAltavista/React_Native",
                gitHub: "https://github.com/StefAltavista/React_Native",
                images: ["/images/mobileapps/logo.png"],
                background: "rgb(240, 196, 108)",
                color: "rgb(0, 0, 0)",
                functionality: "IOs and Android mobile applications",
                description:
                    "A collection of several Mobile applications developped throughout studying React Native at  Udemy. \n A Blog app, a Venue catalog (developped with Yelp API) a Map Tracker (with own server and Google Maps API)\n The source code can be found in GitHub ",
                technologies:
                    "Javascript - React Native - Node.js - Express - MongoDB ",
            },
            {
                name: "this",
                title: "This Website",
                subtitle: "Portfolio page",
                url: "./",
                gitHub: "https://github.com/StefAltavista",
                images: ["/images/this/Logo.png"],
                background: "rgb(193, 255, 127)",
                color: "rgb(0, 0, 0)",
                functionality:
                    "This portfolio website is a one page application created for the purpose of giving an overview of the latest and most valuable projects created by Stefano Altavista Mascitti. Some of these application and projects are still active and in development, some others have been created specifically for practice and demonstrating purpuses.",
                description: "",
                technologies:
                    "Javascript - Node.js - Express - React - P5js - Gsap",
            },
        ],
    });

    console.log("Records inserted successfully:", users);
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
