"use client";
import React from "react";
import WaveComplex from "../animations/WaveComplex";
import WaveSimple from "../animations/WaveSimple";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function Background() {
    useGSAP(() => {
        gsap.from("#background_animation", { opacity: 0, duration: 2 });
    });
    let render;
    if (navigator.userAgent.includes("Chrome")) {
        render = <NextReactP5Wrapper sketch={WaveComplex} id="canvas" />;
    } else if (
        navigator.userAgent.includes("iPhone") ||
        navigator.userAgent.includes("Mozzilla")
    ) {
        render = <NextReactP5Wrapper sketch={WaveComplex} id="canvas" />;
    } else {
        alert(
            "Welcome to StefanoAltavita.com - Please use a different browser to unlock complex animation"
        );
        render = <NextReactP5Wrapper sketch={WaveSimple} id="canvas" />;
    }
    return (
        <div
            id="background_animation"
            style={{
                height: "100vh",
                minHeight: "550px",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: -2,
            }}
        >
            {render}
        </div>
    );
}
