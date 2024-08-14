"use client";

import Typewriter from "typewriter-effect/dist/core";

import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

export function TW_intro() {
    const [ref, inView, entry] = useInView({ threshold: 0.5 });

    useEffect(() => {
        let typewriter_intro = new Typewriter(".typewriterIntro", {
            delay: 40,
            deleteSpeed: 20,
            wrapperClassName: "small_courier",
            cursor: "",
        });
        typewriter_intro
            .typeString("Hi, ")
            .pauseFor(300)
            .pauseFor(200)
            .typeString(`I'm <p class="agraham">Stefano Altavista Mascitti</p>`)
            .pauseFor(800)
            .typeString(" a Web Developer based in Berlin (DE).")
            .pauseFor(800)
            .typeString(
                `<br/><br/> Welcome to my portfolio page! <br/> Here, you can explore a curated selection of my <p class="agraham">projects</p>.`
            );

        if (inView) typewriter_intro.start();
    }, [inView]);

    return <div ref={ref} className="typewriterIntro"></div>;
}

export function TW_contact() {
    const [ref, inView, entry] = useInView({ threshold: 1 });

    useEffect(() => {
        let typewriter_contact = new Typewriter(".typewriterContact", {
            delay: 40,
            deleteSpeed: 20,
            wrapperClassName: "small_courier",
            cursor: "",
        });
        typewriter_contact
            .typeString(
                `If you're interested in my <p class="agraham">services</p>, ranging from <p class="agraham"> Web </p>Design to Full Stack  <p class="agraham">development </p>`
            )
            .pauseFor(200)
            .typeString(
                `or if you would like to discuss potential collaborations `
            )
            .typeString(
                `please don't hesitate to  <a href="/contact" > <p class="agraham">contact me </p> </a> <br/>`
            )
            .typeString(
                `Companies seeking to hire can also <p class="agraham">request my CV</p> for further details.`
            );

        if (inView) typewriter_contact.start();
    }, [inView]);

    return <div ref={ref} className="typewriterContact"></div>;
}
