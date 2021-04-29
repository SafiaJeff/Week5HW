import { gsap } from "gsap";

export let blastOffTL = gsap.timeline();

gsap.set("#alienEnergy path",{display:"none"});

blastOffTL
.to("#SpaceshipAlien",{duration:.15, rotation:-2, ease:"none"})
.to("#SpaceshipAlien",{duration:.15, rotation:2, yoyo: true, repeat:10, ease:"none"})
.to("#SpaceshipAlien",{duration:.15, rotation:0, ease:"none"})
.to("#SpaceshipAlien",{duration:3.5, y: "-=350", ease: "elastic.out(1, 0.3)"}, "+=.75")
.to("#alienEnergy path",{duration: 3, alpha:1, stagger: 1, display:"block"})

;