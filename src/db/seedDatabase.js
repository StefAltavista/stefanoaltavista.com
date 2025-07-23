const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Insert multiple records
  const users = await prisma.projects.createMany({
    data: [
      {
        name: "ufo-berlin",
        title: "UfO Berlin",
        subtitle: "Union fuer Obdachlosenrechte Berlin",
        url: "https://ufo-berlin.org",
        gitHub: "",
        logo: "/images/ufo-berlin/Logo.png",
        images: [
          "/images/ufo-berlin/1.png",
          "/images/ufo-berlin/2.png",
          "/images/ufo-berlin/3.png",
        ],
        background: "rgb(255, 224, 193)",
        color: "rgb(20, 0, 0)",
        functionality:
          "platform for showcasing the organization's mission and projects, while also providing management tools for internal communication and event coordination.",
        description:
          "Union fuer Obdachlosenrechte Berlin (UfO Berlin) is a union advocating for the rights of homeless people. It provides an in-depth overview of the organization and its impactful projects over the years. It highlights their involvement in initiatives that protect homeless people's rights, offer emergency support, facilitate integration courses, provide psychological assistance, and more. The website features both static pages with detailed information and dynamic article pages. It includes a private area for members to access an internal calendar of private events, such as organizational meetings and training sessions, and to manage content, including articles, mailing lists, and newsletters. Built with Wordpress and Elementor and deployed on Hostinger.com, the project also involved managing the organization's email communication.",
        technologies: "Wordpress - Elementor - PHP - Hostinger",
        type: "Corporate",
      },
      {
        name: "simrent",
        title: "Simrent",
        subtitle:
          "Motorsport and virtual reality simulators renting company based in Switzerland",
        url: "https://simrent.ch",
        gitHub: "",
        logo: "/images/simrent/Logo.png",
        images: [
          "/images/simrent/1.png",
          "/images/simrent/2.png",
          "/images/simrent/3.png",
        ],
        background: "rgb(255, 224, 193)",
        color: "rgb(20, 0, 0)",
        functionality:
          "Showcase, consult prices and book simulators for your event ",
        description:
          "Simrent.ch is a website was developed for a company specializing in motorsport simulator rentals, virtual reality experiences, and LED screen rentals. The site immerses users in the world of virtual reality, allowing them to explore the company's offerings, check prices for simulators and equipment, and easily contact the company for reservations and inquiries. Built with Wordpress and BeTheme and deployed on Metanet, the project included both graphic and web design, as well as managing the mailing system to enhance customer engagement.",
        technologies: "Wordpress - BeTheme - PHP - Web Design",
        type: "Corporate",
      },
      {
        name: "autonoma-industriale",
        title: "Autonoma Industriale",
        subtitle: "Record Label showcase, mailing list and event web app",
        url: "https://autonomaindustriale.com",
        gitHub: "https://github.com/StefAltavista/autonoma-industriale-next",
        logo: "/images/autonoma-industriale/Logo.png",
        images: [
          "/images/autonoma-industriale/1.png",
          "/images/autonoma-industriale/2.png",
          "/images/autonoma-industriale/3.png",
        ],
        background: "rgb(255, 224, 193)",
        color: "rgb(20, 0, 0)",
        functionality:
          "Admin access to add and manage events, music records and mailing list",
        description:
          "Autonoma Industriale is a Berlin-based record label and event organizer, established in 2019, and rooted in the experimental, industrial, punk, and techno music scenes. The website serves as a dynamic platform for managing their renowned event series, featuring live performances from diverse artists across these genres. It includes a private access area for the team to easily add and edit events, upload images, and provide detailed descriptions and links. The site also facilitates the management of their digital and tape music releases and offers a mailing list feature to engage with their audience. Built with modern technologies, the platform is designed to grow with the label's evolving needs.",
        technologies:
          "Typescript - NextJS - Express - Node.js - PostgreSQL - Nodemailer",
        type: "client",
      },
      {
        name: "beingbody",
        title: "Being Body",
        subtitle: "Massage therapist business website",
        url: "https://beingbody.net",
        gitHub: "https://github.com/StefAltavista/beingBody",
        logo: "/images/beingbody/Logo.png",
        images: [
          "/images/beingbody/1.png",
          "/images/beingbody/2.png",
          "/images/beingbody/3.png",
        ],
        background: "rgb(255, 224, 193)",
        color: "rgb(20, 0, 0)",
        functionality:
          "Book an appointment with Katia Serena on her massage studio business presentational website ",
        description:
          "A good business requires a good website! Here K.S. showcases her concept as a massage therapist, and gives various informations regarding their studio, situated in Berlin - Neukölln. \n Contact the studio directly on the website via the Book an Appointment form. Send your information to the therapist before the appointment via the Wellnsess form",
        technologies: "Javascript - React - Express - Node.js - Nodemailer",
        type: "client",
      },
      {
        name: "konigrimm",
        title: "Konni Grimm Gallery",
        subtitle: "Artist showcase platform",
        url: "https://konigrimm.com",
        gitHub: "https://github.com/StefAltavista/koni_gallery",
        logo: "/images/konigrimm/Logo.png",
        images: [
          "/images/konigrimm/1.png",
          "/images/konigrimm/2.png",
          "/images/konigrimm/3.png",
        ],

        background: "rgb(255, 255, 255)",
        color: "rgb(20, 20, 20)",
        functionality: "Showcase website for Koni Grimm",
        description:
          "Simple and refined just like a modern Berliner gallery. Divided into 3 section each of them with a unique outlook; a book, a collection of drawings and a painting wall.",
        technologies: "Javascript - React - Express - Node.js - Nodemailer",
        type: "client",
      },
      {
        name: "wrongimage",
        title: "Wrong Image",
        subtitle: "Image manipulator and NFT minter",
        url: "https://wrong-image.xyz",
        gitHub: "https://github.com/StefAltavista/Wrong-Image",
        logo: "/images/wrongimage/Logo.png",
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
          "Within the realm of Web3: Wrong Image is a Glitch Art Generator and NFT minter based on P5js.\n7 different image manipulation algorithms, each of which has their own parameters that allow the user to glitch and blend pictures of multiple formats. \n\nThe finalized image can be downloaded or stored on the IPFS (Inter Planetary File System) the industrial standard for NFT storage. Once the picture is saved the user can access his own gallery, and mint each of those immages into the Polygon chain. \n\nWith the aid of NFTport API, the user can also query The Ethereum and Polygon blockchain to visualize the NFTS that belong to a given wallet address.\n\nThe user can access the website with his personal crypto wallet through Metamask.",
        technologies:
          "Javascript - React - Express - Node.js - P5JS - PostgreSQL",
        type: "creative",
      },

      {
        name: "noises",
        title: "Noises",
        subtitle: "Social Network for promoters & event Calendar",
        url: "/",
        gitHub: "https://github.com/StefAltavista/noises",
        logo: "/images/noises/Logo.png",
        images: [
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
          "Noises was born as a social network for music labels, event organizers and promoters of the Berlin Noise, underground Techno and Experimental music scene. The aim of the network was to let oganizations communicate, connect and collaborate more fluently, since this is often a delicate process. Noises is now also an online calendar where users can view published events and organizers profiles without the need of signing in. It's a free Platform that promotes alternative and counterculture. S.A.M. created this platform to be used for his own Label Autonoma Industrile, as most of the current event promotion platforms are controlled by mediatic and commercial algorythms that do not push for cultural development but instead for the annihilation of individuality and for the subsistence and growth of a manipulated society. Since there is a big social movement in the realm of avantgarde, unconventional and extreme art, Noises wants to give a voice to the underdogs that have always been the foundation of our society and now need to reclaim their space. \n S.A.M has put together a team to further develope this platform, and it will soon be launched.",
        technologies: "Javascript - React - Express - Node.js - PostgreSQL ",
        type: "creative",
      },

      {
        name: "avaink",
        title: "Ava - Ink",
        subtitle: "Artist Blog and Business website",
        url: "/",
        gitHub: "https://github.com/StefAltavista/avaink",
        logo: "/images/avaink/Logo.png",
        images: ["/images/avaink/1.png"],
        background: "rgb(200, 100, 50)",
        color: "rgb(0, 0, 0)",
        functionality:
          "Art, Tattoo designs and News from Ava Ink, book appointment, try her designs over your foto! ",
        description:
          "Ava Ink is a berlin based tattoo artist, this project consist in a SPA that she can personally update via log in page. Add Posts, designs just like every social network \n a Try out section allows the ser to upload a picture of theirselves and apply a design on top to have an overview of what the artwork will look like on their skin! \n \n website under maintance at the moment ",
        technologies: "Javascript - React - P5.js - AWS",
        type: "client",
      },
      {
        name: "ultraviolet",
        title: "Ultraviolet",
        subtitle: "Web Synthesizer",
        url: "https://www.ultraviolet-synth.xyz",
        gitHub: "https://github.com/StefAltavista/ultraviolet",
        logo: "/images/ultraviolet/Logo.png",
        images: ["/images/ultraviolet/1.png"],
        background: "rgb(200, 100, 100)",
        color: "rgb(0, 0, 0)",
        functionality:
          "Press play, make a sequence, add effects and start tweeking to generate a various spectrum of sounds",
        description:
          "One page application Digital Synthesizer. Includes an FM Oscillator connected to an envelope generator and controlled by a step sequencer. Sequencer controls Frequency and triggers the ADSR, with adjustable number of steps. The sound gets routed through an effect rack with several selectable FX. \n Developped with Tone.js and React ",
        technologies: "Javascript - React - Tone.js - AudioContext",
        type: "creative",
      },
      {
        name: "wrongimageboard",
        title: "Wrong Image-Board",
        subtitle: "Image Gallery",
        url: "./",
        gitHub: "https://github.com/StefAltavista/imageBoard",
        logo: "/images/wrongimageboard/Logo.png",
        images: [
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
        type: "creative",
      },

      {
        name: "animate",
        title: "Animate",
        subtitle: "User based petition website with animations ",
        url: "./",
        gitHub: "https://github.com/StefAltavista/animate",
        logo: "/images/animate/Logo.png",
        images: [
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
        type: "creative",
      },

      {
        name: "mobileapps",
        title: "Mobile Apps",
        subtitle: "Collection of various IOs & Android mobile applications",
        url: "https://github.com/StefAltavista/React_Native",
        gitHub: "https://github.com/StefAltavista/React_Native",
        logo: "/images/mobileapps/Logo.png",
        images: [],
        background: "rgb(240, 196, 108)",
        color: "rgb(0, 0, 0)",
        functionality: "IOs and Android mobile applications",
        description:
          "A collection of several Mobile applications developped throughout studying React Native at  Udemy. \n A Blog app, a Venue catalog (developped with Yelp API) a Map Tracker (with own server and Google Maps API)\n The source code can be found in GitHub ",
        technologies:
          "Javascript - React Native - Node.js - Express - MongoDB ",
        type: "other",
      },
      {
        name: "this",
        title: "This Website",
        subtitle: "Portfolio page",
        url: "./",
        gitHub: "https://github.com/StefAltavista",
        logo: "/images/this/Logo.png",
        images: [],
        background: "rgb(193, 255, 127)",
        color: "rgb(0, 0, 0)",
        functionality:
          "This portfolio website is a one page application created for the purpose of giving an overview of the latest and most valuable projects created by Stefano Altavista Mascitti. Some of these application and projects are still active and in development, some others have been created specifically for practice and demonstrating purpuses.",
        description: "",
        technologies: "Javascript - Node.js - Express - React - P5js - Gsap",
        type: "other",
      },
    ],
  });

  console.log("Records inserted successfully:", users);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
