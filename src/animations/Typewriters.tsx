"use client";

import Typewriter from "typewriter-effect/dist/core";
import { useEffect } from "react";
import "./typewriters.css";
let typewriter_intro: typeof Typewriter;
let typewriter_contact: typeof Typewriter;

const scrollLeft = () => {
    const scrl = window.scrollY;

    if (scrl / 10 > 70) {
        typewriter_intro.start();
    } else typewriter_intro.stop();

    if (scrl / 10 > 140) {
        typewriter_contact.start();
    } else typewriter_contact.stop();
};

export function TW_intro() {
    useEffect(() => {
        typewriter_intro = new Typewriter(".typewriterIntro", {
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
            .typeString(`<br/><br/> Welcome to my website!`);
        // .typeString(`    <br/> Here, you can explore a curated selection of my <p class="agraham">projects</p>.`);

        window.addEventListener("scroll", scrollLeft);
        return () => window.removeEventListener("scroll", scrollLeft);
    }, []);

    return <div className="typewriterIntro"></div>;
}

export function TW_contact() {
    useEffect(() => {
        typewriter_contact = new Typewriter(".typewriterContact", {
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
        window.addEventListener("scroll", scrollLeft);
        return () => window.removeEventListener("scroll", scrollLeft);
    }, []);

    return <div className="typewriterContact"></div>;
}
