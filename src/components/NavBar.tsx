"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

import "./navBar.css";

type NavBarOptions = {
    location: string;
    background: string;
    color: string;
};

export default function NavBar({ options }: { options: NavBarOptions }) {
    const bg = options.background;
    const co = options.color;

    const { location } = options;
    const navBarScroll = useRef<HTMLInputElement>(null);

    const scrollLeft = () => {
        const scrl = window.scrollY;
        if (navBarScroll.current) {
            if (scrl > window.innerHeight - 200) {
                navBarScroll.current.style.opacity = "1";
            } else {
                navBarScroll.current.style.opacity = "0";
            }
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        if (location === "/") {
            window.addEventListener("scroll", scrollLeft);
            scrollLeft();

            return () => window.removeEventListener("scroll", scrollLeft);
        }
    }, []);
    return (
        <div
            className={location === "/" ? "navBarScroll" : "navBarFixed"}
            id="navBar"
            style={{ background: bg, letterSpacing: "2px" }}
            ref={navBarScroll}
        >
            {location === "/" ? (
                <div className="navBar_title">
                    <p
                        className="agraham mix_blend"
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    >
                        Stefano<br></br>Altavista<br></br>Mascitti<br></br>
                    </p>
                </div>
            ) : (
                <div className="navBar_title">
                    <Link href="/">
                        <p className="agraham " style={{ color: co }}>
                            Stefano Altavista Mascitti
                        </p>
                    </Link>
                </div>
            )}
            <div className="navBar_links">
                <Link href="/projects" style={{ color: co }}>
                    <p>Projects</p>
                </Link>

                <Link href="/about" style={{ color: co }}>
                    <p>About</p>
                </Link>
                <Link href="/contact" style={{ color: co }}>
                    <p>Contact</p>
                </Link>
            </div>
        </div>
    );
}
