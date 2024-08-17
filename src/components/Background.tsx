"use client";
import React from "react";
import WaveComplex from "../animations/WaveComplex";
import WaveSimple from "../animations/WaveSimple";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

export default function Background() {
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
            {navigator.userAgent.includes("Chrome") ? (
                <NextReactP5Wrapper sketch={WaveComplex} id="canvas" />
            ) : (
                <>
                    {navigator.userAgent.includes("iPhone") ||
                    navigator.userAgent.includes("Mozzilla") ? (
                        <NextReactP5Wrapper sketch={WaveComplex} id="canvas" />
                    ) : (
                        <>
                            {alert(
                                "Please use a different browser to unlock complex animation"
                            )}
                            <NextReactP5Wrapper
                                sketch={WaveSimple}
                                id="canvas"
                            />
                        </>
                    )}
                </>
            )}
        </div>
    );
}
