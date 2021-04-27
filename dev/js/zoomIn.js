import { gsap } from "gsap";

export let zoomTL = gsap.timeline();

// {paused:true}

gsap.set("#Trees",{transformOrigin:"center center"});

zoomTL
.from("#Ground",{scale:20, duration:4, y:3500, ease:"power4.out"})
.from("#Trees",{scale:20, duration:4, y:2500, ease:"power4.out"}, "-=3")
.from("#LBush",{duration:1.5, x:-500},"Bushes", "-=3")
.from("#RBush",{duration:1.5, x:1050}, "Bushes", "-=3")

//how also put early delay on bushes?

    ;
