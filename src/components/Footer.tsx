"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import "./footer.css";
import Image from "next/image";
import ContactForm from "./ContactForm";
export default async function Footer() {
    const pathName = usePathname();
    const socialMediaLogos = [
        "/images/socialMediaLogos/1.svg",
        "/images/socialMediaLogos/2.svg",
        "/images/socialMediaLogos/3.svg",
    ];
    return (
        <div id="footer">
            <div id="footer_contact" className="footer_section">
                {pathName != "/contact" && (
                    <>
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
                        <Link
                            href={`mailto:altavista.stef@gmail.com`}
                            target="blank"
                        >
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
                    </>
                )}
                <div id="footer_disclaimer" className="footer_section">
                    <p
                        style={{
                            fontSize: "12px",
                        }}
                    >
                        *This website does not use cookies, web beacons, or
                        other tracking technologies. <br></br>
                        <br></br>Built with: Next.js - Node.js - PostgreSQL -
                        Prisma - P5.js- GSAP
                        <br></br>
                        and a lot of passion for coding!
                    </p>
                    <Link href="/privacy" target="blank">
                        <p
                            style={{
                                fontSize: "12px",
                                textDecoration: "underline",
                            }}
                        >
                            View Privacy Policy
                        </p>
                    </Link>

                    <p
                        style={{
                            fontSize: "12px",
                        }}
                    >
                        © Copiright 2022 stefanoaltavista.com <br></br>All
                        Rights Reserved.
                    </p>
                </div>
            </div>
            {pathName != "/contact" && (
                <div id="footer_info" className="footer_section">
                    <p>Get in touch</p>
                    <ContactForm />
                </div>
            )}
        </div>
    );
}
