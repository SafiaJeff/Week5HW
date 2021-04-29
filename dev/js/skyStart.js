import { gsap } from "gsap";

export let skyStartTL = gsap.timeline();

gsap.set("#Clouds path",{transformOrigin:"center center"});

skyStartTL
.from("#Clouds path",{scale:0, x: 400, duration:4, alpha:0, stagger: 1})

    ;