"use client";
import Image from "next/image";
import "./home.css";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TW_intro, TW_contact } from "@/animations/Typewriter";
// import Contact from "./Contact";
// import Home_projects from "./Home_projects.js";

export default function Home() {
    const [startTypewriterIntro, setStartTypewriterIntro] = useState(false);
    const [startTypewriterContact, setStartTypewriterContact] = useState(false);
    const nameTitle = useRef<HTMLInputElement>(null);
    const nameSubTitle = useRef<HTMLInputElement>(null);
    const nameDescription = useRef<HTMLInputElement>(null);
    const sam = useRef<HTMLInputElement>(null);

    useGSAP(() => {
        gsap.from(nameTitle.current, { opacity: 0, duration: 4, delay: 0 });
        gsap.from(nameSubTitle.current, { x: "100%", duration: 4, delay: 0 });
        gsap.from(nameDescription.current, {
            y: "1000%",
            duration: 4,
            delay: 0,
        });
    }, []);
    useEffect(() => {
        const scrollLeft = () => {
            const scrl = window.scrollY;
            if (sam.current) {
                sam.current.style.left = "-" + scrl + "px";
                let opc = 1 - scrl / 800;
                sam.current.style.opacity = opc.toString();
            }

            if (scrl / 10 > 70) {
                setStartTypewriterIntro(true);
            }

            if (scrl / 10 > 140) {
                setStartTypewriterContact(true);
            }
        };

        window.addEventListener("scroll", scrollLeft);
        return () => window.removeEventListener("scroll", scrollLeft);
    }, []);

    return (
        <>
            <div id="header">
                <div id="sam" ref={sam}>
                    <div id="nameTitle">
                        <Link href={`./about`}>
                            <div ref={nameTitle} id="nameTitleInline">
                                <h3 className="agraham">S . A . M .</h3>
                                <p ref={nameSubTitle} className="small_courier">
                                    Full Stack Developer & I.T. Specialist
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div id="nameSubTitle">
                        <p ref={nameDescription} className="agraham">
                            Crafting dynamic experiences for web and mobile
                            <br></br>
                            Blending creative insight with technical proficiency
                        </p>
                    </div>
                </div>
            </div>
            <div id="homeBody">
                <div className="home_about">
                    <div className="introText">
                        {/* {projects && (
                            <img
                                src={projects[0].logo[0]}
                                id="home_about_img"
                            />
                        )} */}
                        <div id="typeWriterText_intro" className="typewriter">
                            {startTypewriterIntro && <TW_intro />}
                        </div>
                    </div>
                </div>
                {/* <Home_projects projects={projects} /> */}

                <div className="home_about">
                    <div className="introText">
                        <div id="typeWriterText_contact" className="typewriter">
                            {startTypewriterContact && <TW_contact />}
                        </div>
                    </div>
                </div>
                {/* <Contact /> */}
            </div>
        </>
    );
}
