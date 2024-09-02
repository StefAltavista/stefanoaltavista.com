import "./home.css";
import Acii_avatar from "@/components/Ascii_avatar";
import Image from "next/image";
import { TW_intro, TW_contact } from "@/animations/Typewriters";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import ProjectsPreview from "@/components/ProjectsPreview";
import { fetchAllProjects } from "@/db/fetchProjects";
import ContactForm from "@/components/ContactForm";
import services_data from "./services_data";
import Link from "next/link";
import TechStack from "@/components/techStack";

export default async function Home() {
    const projects = await fetchAllProjects();
    if (!projects) {
        return <></>;
    }

    return (
        <div id="home">
            <NavBar
                options={{
                    location: "/",
                    color: "rgb(141, 202, 255)",
                    background: "rgb(0, 0, 0,0)",
                }}
            />
            <div className="home_section">
                <Header />
            </div>
            <div id="homeBody">
                <div className="home_section home_about">
                    <div className="introText">
                        <div id="typeWriterText_intro" className="typewriter">
                            <TW_intro />
                        </div>
                        <Acii_avatar />
                    </div>
                </div>

                <div className="home_section ">
                    <h2 className="agraham">
                        I offer various tailored solutions
                    </h2>
                    <div className="home_services">
                        {services_data.map((x, idx) => (
                            <div className="home_service_div" key={idx}>
                                <Link href={`/services?s=${idx + 1}`}>
                                    <Image
                                        src={x.icon}
                                        width={100}
                                        height={100}
                                        alt={x.title}
                                        className="service_icon"
                                    />{" "}
                                </Link>
                                <h2>{x.title}</h2>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="home_section">
                    <p className="agraham">
                        With an evergreen technology stack
                    </p>
                    <TechStack />
                </div>
                <div className="home_section">
                    <h2 className="agraham">Some of my works</h2>
                    <ProjectsPreview projects={projects} />
                </div>
                <div className="home_section home_about">
                    <div className="introText">
                        <div id="typeWriterText_contact" className="typewriter">
                            <TW_contact />
                        </div>
                    </div>
                </div>
                <div className="home_section">
                    <h3 className="agraham">Just drop me a message</h3>
                    <ContactForm />
                    <div className="vertical_spacer"></div>
                </div>
            </div>
        </div>
    );
}
