import "./home.css";
import Acii_avatar from "@/components/Ascii_avatar";
import Image from "next/image";
import { TW_intro, TW_contact } from "@/animations/Typewriters";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import ProjectsPreview from "@/components/ProjectsPreview";
import { fetchAllProjects } from "@/db/fetchProjects";
import services_data from "./services_data";
import Link from "next/link";
import TechStack from "@/components/TechStack";

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
                        <Acii_avatar control={true} size={0.8} />
                        <p className="small_courier">Welcome to my Website!</p>
                    </div>
                </div>

                <div className="home_section ">
                    <h2 className="agraham">
                        I offer various tailored solutions
                    </h2>
                    <div className="home_services">
                        {services_data.map((x, idx) => (
                            <Link href={`/services?s=${idx + 1}`}>
                                <div className="home_service_div" key={idx}>
                                    <Image
                                        src={x.icon}
                                        width={100}
                                        height={100}
                                        alt={x.title}
                                        className="service_icon"
                                    />
                                    <h2>{x.title}</h2>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="home_section">
                    <h4 className="agraham">
                        With a constant expanding technology stack
                    </h4>
                    <TechStack />
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
            </div>
        </div>
    );
}
