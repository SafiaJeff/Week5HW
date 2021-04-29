import { gsap } from "gsap";

export let blastOffTL = gsap.timeline();

blastOffTL
.to("#SpaceshipAlien",{duration:.15, rotation:-10, ease:"none"})
.to("#SpaceshipAlien",{duration:.15, rotation:10, yoyo: true, repeat:10, ease:"none"})
.to("#SpaceshipAlien",{duration:.15, rotation:0, ease:"none"})
.to("#SpaceshipAlien",{duration:1, y: "-=350"}, "+=.75")

;