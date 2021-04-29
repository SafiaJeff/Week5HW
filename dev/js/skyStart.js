import { gsap } from "gsap";

export let skyStartTL = gsap.timeline();

gsap.set("#Clouds path",{transformOrigin:"center center"});


skyStartTL
.from("#Clouds path",{scale:0, x: 400, duration: 3, alpha:0, stagger: 1})
.from("#Sun",{duration: 4, y:-200, ease: "elastic.out(1, 0.2)"}, "-=4")
    ;



//Sun body spinning timeline

// onComplete:controlSunRays

// gsap.set("#SunRays",{transformOrigin:"center center"});

// export let sunRaysTL = gsap.timeline({paused:true});

// sunRaysTL.to("#SunRays",{duration:1, yoyo:true, rotate:10, repeat:-1})


// function controlSunRays(){
//     sunRaysTL.play()
// }

//?? Makes timeline 1000 seconds long if have this running? How to make spin before sun lands?