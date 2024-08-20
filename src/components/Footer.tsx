import Link from "next/link";
import "./footer.css";
import Image from "next/image";
import { fetchAllProjects } from "@/db/fetchProjects";
export default async function Footer() {
    const projects = await fetchAllProjects();

    const socialMediaLogos = [
        "/images/socialMediaLogos/1.svg",
        "/images/socialMediaLogos/2.svg",
        "/images/socialMediaLogos/3.svg",
    ];
    return (
        <div id="footer">
            <div id="footer_contact" className="footer_section">
                <Link
                    href={`http://linkedin.com/in/stefano-altavista/`}
                    target="blank"
                >
                    <div className="socialMediaLink">
                        <Image
                            src={socialMediaLogos[0]}
                            width={80}
                            height={80}
                            alt="S.A.M. social media logo"
                        />
                        <p>LinkedIn</p>
                    </div>
                </Link>
                <Link href={`http://github.com/stefAltavista`}>
                    <div className="socialMediaLink">
                        <Image
                            src={socialMediaLogos[1]}
                            width={80}
                            height={80}
                            alt="S.A.M. social media logo"
                        />
                        <p>GitHub</p>
                    </div>
                </Link>{" "}
                <Link href={`mailto:altavista.stef@gmail.com`} target="blank">
                    <div className="socialMediaLink">
                        <Image
                            src={socialMediaLogos[2]}
                            width={80}
                            height={80}
                            alt="S.A.M. social media logo"
                        />
                        <p>E-Mail</p>
                    </div>
                </Link>
            </div>
            <div id="footer_info" className="footer_section">
                <p>
                    Build with: Next.js 14, Node.js, PostgreSQL, Prisma, P5.js
                    and a lot of Passion for coding!
                </p>
                <p>
                    {" "}
                    © Copiright 2022 stefanoaltavista.com - All Rights Reserved.
                </p>
            </div>
            <div id="footer_disclaimer" className="footer_section">
                <p>
                    *This website does not collect any data and does not utilize
                    any cookie, your privacy is safe in here!
                </p>
            </div>
        </div>
    );
}
