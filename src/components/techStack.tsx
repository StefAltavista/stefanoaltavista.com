const techLogos = [
    "/images/techLogos/1.svg",
    // "/images/techLogos/2.svg",
    "/images/techLogos/3.svg",
    "/images/techLogos/4.svg",
    "/images/techLogos/5.png",
    "/images/techLogos/6.svg",
    "/images/techLogos/7.svg",
    "/images/techLogos/8.svg",
    "/images/techLogos/9.svg",
    "/images/techLogos/10.svg",
    "/images/techLogos/11.webp",
    "/images/techLogos/12.svg",
    "/images/techLogos/13.svg",
    "/images/techLogos/14.svg",
    "/images/techLogos/15.svg",
    "/images/techLogos/16.svg",
    "/images/techLogos/17.svg",
    "/images/techLogos/18.svg",
    "/images/techLogos/19.svg",
    "/images/techLogos/20.svg",
    "/images/techLogos/21.webp",
    "/images/techLogos/22.jpg",
    "/images/techLogos/23.svg",
    "/images/techLogos/24.svg",
    "/images/techLogos/25.png",
    "/images/techLogos/26.svg",
];

export default function TechStack() {
    return (
        <div id="technologies">
            <div>
                {techLogos.map((x, idx) => (
                    <img
                        src={x}
                        key={idx}
                        alt="Stefano Altavista Web Developer"
                    />
                ))}
            </div>
        </div>
    );
}
