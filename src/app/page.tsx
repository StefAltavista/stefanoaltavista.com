import "./home.css";

import Image from "next/image";
import { TW_intro, TW_contact } from "@/animations/Typewriters";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import ProjectsPreview from "@/components/ProjectsPreview";
import { fetchAllProjects } from "@/db/fetchProjects";
import ContactForm from "@/components/ContactForm";

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
                        <Image
                            src="/image/about/logo"
                            width={200}
                            height={200}
                            alt="S.A.M."
                        />
                        <div id="typeWriterText_intro" className="typewriter">
                            <TW_intro />
                        </div>
                    </div>
                </div>
                <div className="home_section">
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
                    <p className="agraham">Send me a message</p>
                    <ContactForm />
                    <div className="vertical_spacer"></div>
                </div>
            </div>
        </div>
    );
}
