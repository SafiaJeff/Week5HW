import { gsap } from "gsap";

export let midAppearTL = gsap.timeline();

gsap.set("#Flowers g",{transformOrigin:"center bottom"});
// gsap.set("#CowTail",{transformOrigin:"right top"});

midAppearTL
.from("#Flowers g",{scale:0, duration:2, alpha:0, stagger: .25})
.from("#Cow",{duration:3, scale:3, x:-1000, ease:"steps(8)"}, "-=3.5")
// .to("#CowTail",{duration:2, scaleY: .75, rotate: 20, yoyo:2})
    ;

    

