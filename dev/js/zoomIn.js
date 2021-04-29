import { gsap } from "gsap";

export let zoomTL = gsap.timeline();

// {paused:true}

gsap.set("#Trees",{transformOrigin:"center center"});

zoomTL
.from("#Ground",{scale:20, duration:4, y:3500, ease:"power4.out"})
.from("#Trees",{scale:20, duration:4, y:2500, ease:"power4.out"}, "-=3")
.from("#SpaceshipAlien",{scale:20, duration:4, y:2500, ease:"power4.out"}, "-=3.5")
.from("#LBush",{duration:3, y:300, ease:"power4.out"},"-=2")
.from("#RBush",{duration:3, y:300, ease:"power4.out"}, "-=3")



    ;


