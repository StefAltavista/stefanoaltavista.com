import ContactForm from "@/components/ContactForm";
import NavBar from "@/components/NavBar";
import "./contact.css";
import Link from "next/link";
import Image from "next/image";
export default function Contact() {
    const socialMediaLogos = [
        "/images/socialMediaLogos/1.svg",
        "/images/socialMediaLogos/2.svg",
        "/images/socialMediaLogos/3.svg",
    ];
    return (
        <div id="contact">
            <NavBar
                options={{
                    location: "/contact",
                    color: "rgb(141, 202, 255)",
                    background: "rgb(0, 0, 0,0)",
                }}
            />
            <div id="contact_body">
                <div id="contact_text">
                    <p className="small_courier">
                        Whether you are looking to collaborate on an exciting
                        project, need assistance with a web development task, or
                        want to explore new opportunities:
                    </p>

                    <p className="agraham">I would love to hear from you. </p>
                    <br></br>
                    <p className="small_courier">
                        As a freelance web developer with a passion for tackling
                        new challenges, I am always open to discussing how I can
                        help bring your ideas to life. <br></br>
                        <br></br>Feel free to reach out for any inquiries,
                        service requests, or potential job opportunities.{" "}
                    </p>
                    <p className="agraham">{`Let&aposs develop`}</p>
                </div>
                <div className="contact_form">
                    <h2 className="agraham">Contact</h2>

                    <ContactForm />
                    <div className="social_links">
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
                    </div>
                </div>
            </div>
        </div>
    );
}
