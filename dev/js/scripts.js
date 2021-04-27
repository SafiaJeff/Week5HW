
// GSAP Imports
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
gsap.registerPlugin(GSDevTools);

// My Imports
import { zoomTL } from "./zoomIn";
import { midAppearTL } from "./midAppear";


// Main Timeline
let mainTL = gsap.timeline();

mainTL.add(zoomTL);
mainTL.add(midAppearTL);

// DEV Tools
GSDevTools.create();