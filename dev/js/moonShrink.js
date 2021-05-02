import { gsap } from "gsap";

export let moonShrinkTL = gsap.timeline();

moonShrinkTL.to("#moon",{duration:2.5, scale:5, y:"-=900", x:"-=100"}, "shrink")
moonShrinkTL.to("#space-ship",{duration:2.5, scale:0, y:"-=500", x:"-=300"}, "shrink")
