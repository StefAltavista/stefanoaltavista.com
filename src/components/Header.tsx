"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./header.css";

export default function Header() {
    const nameTitle = useRef<HTMLInputElement>(null);
    const nameSubTitle = useRef<HTMLInputElement>(null);
    const nameDescription = useRef<HTMLInputElement>(null);
    const sam = useRef<HTMLInputElement>(null);

    useGSAP(() => {
        gsap.from(nameTitle.current, { opacity: 0, duration: 4, delay: 2 });
        gsap.from(nameSubTitle.current, { x: "100%", duration: 4, delay: 3 });
        gsap.from(nameDescription.current, {
            y: "1000%",
            duration: 3,
            delay: 3,
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
                                    Full Stack Developer & Web Designer
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
        </>
    );
}
