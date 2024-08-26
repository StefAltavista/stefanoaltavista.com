export type Service = {
    title: string;
    icon: string;
    description: string;
    specific: { name: string; details: string }[];
};
const services_data: Service[] = [
    {
        title: "Full Stack Development",
        icon: "/icons/fullstack_icon.svg",
        description:
            "I offer end-to-end web development services to build robust and scalable web applications tailored to your needs.",
        specific: [
            {
                name: "Frontend Development",
                details:
                    "Building responsive, interactive use interfaces with React and Next.js. I also utilize Tailwind CSS and Material-UI (MUI) to create sleek, modern designs. I have experience in creating custom animations and visualizations using P5.js.",
            },
            {
                name: "Backend Development",
                details:
                    "Developing robust and scalable backends with Node.js and Express.js, managing databases with PostgreSQL and MongoDB, and employing Prisma for efficient data handling.",
            },
            {
                name: "Deployment & Server Management",
                details:
                    "deploying applications on servers using SSH, with a solid understanding of Linux environments, Docker, PM2, and Nginx for maintaining and optimizing server performance.",
            },
        ],
    },

    {
        title: "Web Design",
        icon: "/icons/web_design_icon.svg",
        description:
            "I offer comprehensive web design services that combine aesthetics with functionality",
        specific: [
            {
                name: "Graphic Design",
                details:
                    "Beyond web design, I offer elaborate graphic design services to create custom visuals that enhance your brand’s presence. Whether you need intricate illustrations, detailed infographics, or compelling marketing materials, I use a variety of tools and techniques to bring your ideas to life in a visually impactful way.",
            },
            {
                name: "Web Design",
                details:
                    "Crafting user-friendly websites that align perfectly with your brand identity, focusing on both visual appeal and performance. My design approach ensures a seamless user experience, utilizing tools like GIMP and Photoshop to create optimized images, and Inkscape to develop scalable vector graphics (SVGs) for crisp, high-quality visuals.",
            },
        ],
    },
    {
        title: "Wordpress Development",
        icon: "/icons/wordpress_icon.svg",
        description:
            "I specialize in building and customizing WordPress websites to provide flexible and easy-to-manage solutions.",
        specific: [
            {
                name: "Custom WordPress Sites",
                details:
                    "Tailoring WordPress websites using the Elementor plugin, integrating all necessary features to meet your business needs. This includes setting up company email addresses and integrating mailing list services for effective communication. Ensuring websites are SEO-friendly, fast-loading, and easy to navigate.",
            },
            {
                name: "Maintenance and Support",
                details:
                    "Providing ongoing support, updates, and maintenance to keep your website secure and up-to-date. Optimizing website performance and implementing best practices for enhanced user experience.",
            },
        ],
    },
    {
        title: "Consulting",
        icon: "/icons/consulting_icon.svg",
        description:
            "I offer consulting services for businesses and individuals looking to enhance their web presence or streamline their development processes:",
        specific: [
            {
                name: "Consulting",
                details:
                    "Providing expert advice on web development strategies, technology stack selection, and performance optimization. Whether you're planning a new project or looking to improve an existing one, I can guide you through the best practices and help you make informed decisions.",
            },
        ],
    },
];

export default services_data;
