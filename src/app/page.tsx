import "./home.css";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
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
                <ContactForm />
            </div>
        </div>
    );
}
