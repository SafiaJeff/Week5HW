import { gsap } from "gsap";

export let blastOffTL = gsap.timeline();


blastOffTL
.to("#SpaceshipAlien",{duration:.15, rotation:-2, ease:"none"})
.to("#SpaceshipAlien",{duration:.15, rotation:2, yoyo: true, repeat:10, ease:"none"})
.to("#SpaceshipAlien",{duration:.15, rotation:0, ease:"none"})
;