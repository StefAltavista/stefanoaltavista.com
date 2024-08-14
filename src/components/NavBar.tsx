"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import type { Projects } from "@prisma/client";
import "./navBar.css";

type NavBarOptions = {
    location: string;
};

export default function NavBar({
    projects,
    options,
}: {
    projects: Projects[];
    options: NavBarOptions;
}) {
    const [bg, setBg] = useState("rgb(0, 0, 0,0)");
    const [co, setCo] = useState("rgb(141, 202, 255)");

    const { location } = options;
    const navBarScroll = useRef<HTMLInputElement>(null);

    const scrollLeft = () => {
        const scrl = window.scrollY;
        if (navBarScroll.current) {
            if (scrl / 10 < 30) {
                navBarScroll.current.style.left = -30 + scrl / 10 + "%";

                let opct = scrl / 100;
                navBarScroll.current.style.opacity = opct.toString();
            } else {
                (navBarScroll.current.style.left = "0%"),
                    (navBarScroll.current.style.opacity = "1");
            }
        }
    };

    useEffect(() => {
        if (projects && location != "/" && location != "/contact") {
            console.log("Projects", projects);
            const currentProj = projects.find(
                (x) => x.name == location.replace("/", "")
            );
            if (currentProj) {
                setBg(currentProj.background);
                setCo(currentProj.color);
            }
        }

        if (location === "/") {
            window.addEventListener("scroll", scrollLeft);
            scrollLeft();
            setBg("rgb(0, 0, 0,0)");
            setCo("rgb(141, 202, 255)");
        }
        return () => window.removeEventListener("scroll", scrollLeft);
    }, [location]);
    return (
        <div
            className={location === "/" ? "offScreenNavBar" : "onScreenNavBar"}
            id={location === "/" ? "navBarScroll" : "navBarFixed"}
            style={{ background: bg, letterSpacing: "2px" }}
            ref={navBarScroll}
        >
            {location == "/" ? (
                <>
                    <p
                        className="agraham mix_blend"
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    >
                        Stefano<br></br>Altavista<br></br>Mascitti<br></br>
                    </p>
                </>
            ) : (
                <>
                    <Link href="/" style={{ color: co }}>
                        <p>Home</p>
                    </Link>
                </>
            )}

            <Link href="/projects" style={{ color: co }}>
                <p>Projects</p>
            </Link>

            <Link href="/about" style={{ color: co }}>
                <p>About </p>{" "}
            </Link>
            <Link href="/contact" style={{ color: co }}>
                <p>Contact</p>{" "}
            </Link>
        </div>
    );
}
