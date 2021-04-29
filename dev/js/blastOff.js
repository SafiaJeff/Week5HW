import { gsap } from "gsap";

export let blastOffTL = gsap.timeline();

gsap.set("#SpaceshipAlien",{transformOrigin:"center center"});

blastOffTL
.to("#SpaceshipAlien",{duration:.15, rotation:-10, ease:"none"})
.to("#SpaceshipAlien",{duration:.15, rotation:10, yoyo: true, repeat:10, ease:"none"})
.to("#SpaceshipAlien",{duration:.15, rotation:0, ease:"none"})

;