"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

import "./navBar.css";

type NavBarOptions = {
    location: string;
    background: string;
    color: string;
};

export default function NavBar({ options }: { options: NavBarOptions }) {
    const [bg, setBg] = useState(options.background);
    const [co, setCo] = useState(options.color);

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
        if (location === "/") {
            window.addEventListener("scroll", scrollLeft);
            scrollLeft();
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
