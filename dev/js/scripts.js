
// GSAP Imports
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
gsap.registerPlugin(GSDevTools);

// My Imports
import { zoomTL } from "./zoomIn";
import { midAppearTL } from "./midAppear";
import { skyStartTL } from "./skyStart";
import { blastOffTL } from "./blastOff";


// Main Timeline
let mainTL = gsap.timeline();

mainTL.add(zoomTL);
mainTL.add(midAppearTL, "-=2.5");
mainTL.add(skyStartTL, "-=3.5");
mainTL.add(blastOffTL, "-=1");


// DEV Tools
GSDevTools.create();