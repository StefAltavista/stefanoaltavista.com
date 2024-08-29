"use client";
import WaveComplex from "../animations/WaveComplex";
import WaveSimple from "../animations/WaveSimple";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

export default function Background() {
    const [popUp, setPopUp] = useState(false);
    useGSAP(() => {
        gsap.from("#background_animation", { opacity: 0, duration: 1 });
    }, []);
    let render;

    if (navigator.userAgent.includes("Chrome")) {
        render = <NextReactP5Wrapper sketch={WaveComplex} id="canvas" />;
    } else if (
        navigator.userAgent.includes("iPhone") ||
        navigator.userAgent.includes("Mozzilla")
    ) {
        render = <NextReactP5Wrapper sketch={WaveComplex} id="canvas" />;
    } else {
        useEffect(() => {
            setPopUp(true);
        }, []);
        render = <NextReactP5Wrapper sketch={WaveSimple} id="canvas" />;
    }

    return (
        <>
            <div
                id="background_animation"
                style={{
                    height: "100vh",
                    minHeight: "550px",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: -1,
                }}
            >
                {render}
            </div>
            {popUp && (
                <div
                    id="popUp"
                    onClick={() => setPopUp(false)}
                    style={{
                        boxSizing: "border-box",
                        zIndex: 5,
                        display: "flex",
                        justifyContent: "space-between",
                        background: "black",
                        padding: "5px",
                        width: "100vw",
                        color: "lime",
                        fontSize: "10px",
                        cursor: "pointer",
                    }}
                >
                    <p>
                        * Please use a different browser to unlock complex
                        animation
                    </p>
                    <p>X</p>
                </div>
            )}
        </>
    );
}
