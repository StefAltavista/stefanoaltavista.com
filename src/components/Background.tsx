"use client";
import React from "react";
import WaveComplex from "../animations/WaveComplex";
import WaveSimple from "../animations/WaveSimple";
import { ReactP5Wrapper } from "react-p5-wrapper";

export default function Background() {
    return (
        <div
            id="background_animation"
            style={{
                height: "100vh",
                minHeight: "550px",
                position: "fixed",
                top: 0,
                zIndex: -2,
            }}
        >
            {navigator.userAgent.includes("Chrome") ? (
                <ReactP5Wrapper sketch={WaveComplex} id="canvas" />
            ) : (
                <>
                    {navigator.userAgent.includes("iPhone") ||
                    navigator.userAgent.includes("Mozzilla") ? (
                        <ReactP5Wrapper sketch={WaveComplex} id="canvas" />
                    ) : (
                        <>
                            {alert(
                                "Please use a different browser to unlock complex animation"
                            )}
                            <ReactP5Wrapper sketch={WaveSimple} id="canvas" />
                        </>
                    )}
                </>
            )}
        </div>
    );
}
