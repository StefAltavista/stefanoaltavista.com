import "./home.css";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Projects } from "@prisma/client";

import { TW_intro, TW_contact } from "@/animations/Typewriter";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
// import Contact from "./Contact";
import ProjectsPreview from "@/components/ProjectsPreview";

import fetchProjects from "@/db/fetchProjects";

export default async function Home() {
    const projects = await fetchProjects();
    if (!projects) {
        return <></>;
    }
    // const [startTypewriterIntro, setStartTypewriterIntro] = useState(false);
    // const [startTypewriterContact, setStartTypewriterContact] = useState(false);

    // useEffect(() => {
    //     const scrollLeft = () => {
    //         const scrl = window.scrollY;
    //         if (sam.current) {
    //             sam.current.style.left = "-" + scrl + "px";
    //             let opc = 1 - scrl / 800;
    //             sam.current.style.opacity = opc.toString();
    //         }

    //         if (scrl / 10 > 70) {
    //             setStartTypewriterIntro(true);
    //         }

    //         if (scrl / 10 > 140) {
    //             setStartTypewriterContact(true);
    //         }
    //     };

    //     window.addEventListener("scroll", scrollLeft);
    //     return () => window.removeEventListener("scroll", scrollLeft);
    // }, []);

    return (
        <>
            <NavBar projects={projects} options={{ location: "/" }} />
            <Header />
            <div id="homeBody">
                <div className="home_about">
                    <div className="introText">
                        {projects && (
                            <img
                                src={projects[0].logo[0]}
                                id="home_about_img"
                            />
                        )}
                        <div id="typeWriterText_intro" className="typewriter">
                            <TW_intro />
                        </div>
                    </div>
                </div>
                <ProjectsPreview projects={projects} />

                <div className="home_about">
                    <div className="introText">
                        <div id="typeWriterText_contact" className="typewriter">
                            <TW_contact />
                        </div>
                    </div>
                </div>
                {/* <Contact /> */}
            </div>
        </>
    );
}
