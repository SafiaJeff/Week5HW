import { gsap } from "gsap";

export let moonFaceTL = gsap.timeline();

gsap.set(".moon-things",{transformOrigin:"center center"});

moonFaceTL.fromTo(".moon-things",{duration:1, display:"block", scale:0},{scale:1, duration: 1.5, ease: "elastic.out(1, 0.3)"})
moonFaceTL.to("#left-eye", {scaleY:.15, duration:.18})
moonFaceTL.to("#left-eye", {scaleY:1, duration:.18})
moonFaceTL.to("#moon", {rotate:50, duration:.5}, "byemoon")
moonFaceTL.to("#moon", {x:"+=1000", duration:1, ease: "power3.in"}, "byemoon")

