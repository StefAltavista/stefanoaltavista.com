"use client";
import { P5CanvasInstance } from "react-p5-wrapper";

var inc = 0.0025;
var start = 0;

let h: number;
let w: number;

export default function WaveComplex(p5: P5CanvasInstance) {
    getWindowSize(p5);
    p5.setup = () => {
        p5.createCanvas(w, h);
        p5.pixelDensity(1);
        p5.frameRate(22);
    };

    window.onresize = () => {
        getWindowSize(p5);
    };
    p5.draw = () => {
        // GET SNAPSHOT?
        // p5.mousePressed = () => {
        //     p5.noLoop();
        // };
        perlinScope(p5, w, h);
    };
}

// Black Wave (Applied Graph)
function perlinScope(p5: P5CanvasInstance, width: number, height: number) {
    p5.beginShape();
    var xoff1 = start;
    for (var x = 0; x < width; x++) {
        p5.background(
            p5.noise(xoff1) * 250,
            p5.noise(xoff1 + 1000) * 250,
            p5.noise(xoff1 + 150) * 250
        );
        p5.stroke(0);

        p5.noFill();
        p5.vertex(x, p5.noise(xoff1) * height);
        p5.vertex(x / 2, p5.noise(xoff1) * height);
        xoff1 += inc;
    }

    p5.endShape();

    start += inc;
}

function getWindowSize(p5: P5CanvasInstance) {
    if (window.innerHeight) {
        h = window.innerHeight;
    } else if (document.documentElement.clientHeight) {
        h = document.documentElement.clientHeight;
    } else if (document.body.clientHeight) {
        h = document.body.clientHeight;
    }

    if (window.innerWidth) {
        w = window.innerWidth;
    } else if (document.documentElement.clientWidth) {
        w = document.documentElement.clientWidth;
    } else if (document.body.clientHeight) {
        w = document.body.clientWidth;
    }
    p5.resizeCanvas(w, h);
}
