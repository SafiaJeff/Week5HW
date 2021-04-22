import { gsap } from "gsap";

export let zoomTL = gsap.timeline();

// {paused:true}

gsap.set("#Trees",{transformOrigin:"center center"});
gsap.set("#Flowers",{transformOrigin:"center center"});

zoomTL
.from("#Ground",{scale:20, duration:4, y:3500, ease:"power4.out"})
.from("#Trees",{scale:20, duration:4, y:2500, ease:"power4.out"}, "-=3")
.from("#Flowers",{scale:15, duration:3.5, y:4000, ease:"power4.out"}, "-=3.5")

    ;
