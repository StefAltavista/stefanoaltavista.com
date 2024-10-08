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

    //Safari PopUp Warning temporary removed
    // useEffect(() => {
    //     if (
    //         !navigator.userAgent.includes("Chrome") &&
    //         (!navigator.userAgent.includes("iPhone") ||
    //             !navigator.userAgent.includes("Mozzilla"))
    //     ) {
    //         setPopUp(true);
    //     }
    // }, []);

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
                    maxWidth: "100vw",
                    overflow: "hidden",
                }}
            >
                {navigator.userAgent.includes("Chrome") ? (
                    <NextReactP5Wrapper sketch={WaveComplex} id="canvas" />
                ) : navigator.userAgent.includes("iPhone") ||
                  navigator.userAgent.includes("Mozzilla") ? (
                    <NextReactP5Wrapper sketch={WaveComplex} id="canvas" />
                ) : (
                    <NextReactP5Wrapper sketch={WaveSimple} id="canvas" />
                )}
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
