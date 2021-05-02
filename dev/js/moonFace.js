import { gsap } from "gsap";

export let moonFaceTL = gsap.timeline();

moonFaceTL.fromTo(".moon-things",{duration:2.5, display:"block", scale:0},{scale:1, duration: 1})
