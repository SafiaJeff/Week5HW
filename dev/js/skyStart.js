import { gsap } from "gsap";

export let skyStartTL = gsap.timeline();

gsap.set("#Clouds path",{transformOrigin:"center center"});

skyStartTL
.from("#Clouds path",{scale:0, x: 400, duration:3.5, alpha:0, stagger: 1})
.from("#Sun",{duration: 4, y:-200, ease: "elastic.out(1, 0.2)"}, "-=4")
    ;