import { P5CanvasInstance } from "react-p5-wrapper";

var inc = 0.0025;
var start = 0;

let h: number;
let w: number;

export default function WaveSimple(p5: P5CanvasInstance) {
    function getWindowSize() {
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
    getWindowSize();
    p5.setup = () => {
        p5.createCanvas(w, h);
        p5.pixelDensity(1);
        p5.frameRate(30);
    };

    window.onresize = () => {
        getWindowSize();
    };
    p5.draw = () => {
        p5.background(62, 92, 201);

        perlinScope(p5, w, h);
    };
}

function perlinScope(p5: P5CanvasInstance, width: number, heigh: number) {
    p5.beginShape();
    var xoff1 = start;
    for (var x = 0; x < width / 2; x++) {
        p5.stroke(0);
        p5.noFill();
        p5.vertex(x, p5.noise(xoff1) * heigh);
        xoff1 += inc;
    }

    p5.endShape();
    start += inc;
}
