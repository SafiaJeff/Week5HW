import { gsap } from "gsap";

export let zoomTL = gsap.timeline();

// {paused:true}

gsap.set("#Trees",{transformOrigin:"center center"});
gsap.set("#Flowers",{transformOrigin:"center center"});

zoomTL
.from("#Ground",{scale:20, duration:4, y:3500, ease:"power4.out"})
.from("#Trees",{scale:20, duration:4, y:2500, ease:"power4.out"}, "-=3")
.from("#Flowers",{scale:15, duration:3.5, y:4000, ease:"power4.out"}, "-=3.5")
.from("#Cow",{duration:3, scale:3, x:-1000, ease:"steps(8)"}, "-=1.5")
.from("#LBush",{duration:3, x:-500},"Bushes")
.from("#RBush",{duration:3, x:1050}, "Bushes")

//how also put early delay on bushes?

    ;
