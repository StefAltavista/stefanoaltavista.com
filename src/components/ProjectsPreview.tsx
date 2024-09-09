"use client";
import type { Projects } from "@prisma/client";
import Image from "next/image";
import { useState, useRef, createRef } from "react";
import "./projectsPreview.css";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProjectsPreview({
    projects,
}: {
    projects: Projects[];
}) {
    if (!projects) {
        return <p>Error fetching data</p>;
    }

    const homeProjectScope = useRef<HTMLInputElement>(null);
    const projectPreview_card = useRef<HTMLInputElement>(null);
    const [toggle, setToggle] = useState<boolean>(false);
    const [proj, setProj] = useState<Projects | null>(null);
    const latestProj = [projects[0], projects[1], projects[2]];
    const creativeProj = [
        projects[projects.findIndex((x) => x.name == "ultraviolet")],
        projects[projects.findIndex((x) => x.name == "wrongimage")],
        projects[projects.findIndex((x) => x.name == "animate")],
    ];

    const openProjectCard = (p: Projects) => {
        setToggle(true);
        setProj(p);
    };
    const closeProjectCard = () => {
        setProj(null);
        setToggle(false);
    };

    useGSAP(
        () => {
            gsap.registerPlugin(ScrollTrigger);
            gsap.from(".hp_icon_1", {
                scale: 0.5,
                opacity: 0,
                duration: 0.7,
                ease: "bounce.out",
                stagger: { each: 0.5 },
                scrollTrigger: {
                    trigger: ".trigger_1",
                    start: "bottom bottom ",
                },
            });
            gsap.from(".hp_icon_2", {
                scale: 0.5,
                opacity: 0,
                duration: 0.7,
                ease: "bounce.out",
                stagger: { each: 0.5 },
                scrollTrigger: {
                    trigger: ".trigger_2",
                    start: "bottom bottom ",
                },
            });
        },
        { scope: homeProjectScope }
    );
    useGSAP(
        () => {
            if (toggle) {
                gsap.from(".projectCard_homePreview", {
                    background: "rgba(0,0,0,0)",
                    duration: 1,
                });
                gsap.from(projectPreview_card.current, {
                    x: "-200%",
                    duration: 1,
                });
                gsap.from(".projectPreview_description", {
                    x: "200%",
                    duration: 2,
                    ease: "bounce.out",
                    delay: 1,
                });
            }
        },
        { dependencies: [toggle] }
    );

    return (
        <>
            <div id="projectsPreview" ref={homeProjectScope}>
                <div className="home_project_section">
                    <p className="agraham">Latest Projects</p>
                    <div className="home_projects trigger_1">
                        {latestProj.map((x, idx) => (
                            <div
                                key={idx}
                                onClick={() => {
                                    openProjectCard(x);
                                }}
                                className="hp_icon_1"
                            >
                                <Image
                                    src={x.logo}
                                    width={200}
                                    height={200}
                                    alt={x.title + " logo"}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="home_project_section">
                    <p className="agraham ">Creative Ventures</p>
                    <div className="home_projects trigger_2">
                        {creativeProj.map((x, idx) => (
                            <div
                                key={idx}
                                onClick={() => openProjectCard(x)}
                                className="hp_icon_2"
                            >
                                <Image
                                    src={x.logo}
                                    width={200}
                                    height={200}
                                    alt={x.title + " logo"}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {toggle && proj && (
                <div
                    onClick={(e) => {
                        e.stopPropagation();

                        closeProjectCard();
                    }}
                    className="projectCard_homePreview"
                >
                    <div ref={projectPreview_card}>
                        <ProjectCard project={proj} />
                    </div>
                    <div
                        className="projectPreview_description small_courier"
                        style={{
                            color: proj.background,
                            background: proj.color
                                .replace("rgb", "rgba")
                                .replace(")", ",0.8)"),
                        }}
                    >
                        <p>{proj.functionality}</p>
                        <Link href={`/projects/${proj.name}`}>
                            <p>Read More </p>
                        </Link>

                        <Link href={`${proj.url}`} target="blank">
                            <p> Visit Website</p>
                        </Link>
                        <Link href={`${proj.gitHub}`} target="blank">
                            <p>GitHub</p>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}
