import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
/*--*/
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
/*---*/
window.addEventListener("DOMContentLoaded", (e) => {
    gsap.registerPlugin(ScrollTrigger);
    const header = $(`header`);
    const noise = document.createElement(`div`);
    const turbulences=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);
    const sea=document.createElement(`div`);
    const lh=document.createElement(`div`);
    const lhReflect=document.createElement(`div`);
    turbulences.innerHTML=`
    <filter id="turbulence" x="0" y="0" width="100%" height="100%">
      <feTurbulence id="sea-filter" numOctaves="3" seed="2" baseFrequency="0.002 0.005"></feTurbulence>
      <feDisplacementMap scale="20" in="SourceGraphic"></feDisplacementMap>
      <animate xlink:href="#sea-filter" attributeName="baseFrequency" dur="300s" 
      keyTimes="0;0.5;1" values="0.002 0.006;0.004 0.08;0.002 0.006" repeatCount="indefinite"/>    
    </filter>`;
    sea.classList.add(`sea`);    
    lh.classList.add(`lh`);    
    lhReflect.classList.add(`lightHouseReflection`);
    lh.append(lhReflect);
    header.append(sea,lh,turbulences);




    gsap.registerPlugin(ScrollTrigger);
  
   
    // gsap.to(".cloud1", {
    //     scrollTrigger: {
    //         trigger: "header",
    //         markers: true,
    //         scrub: .5,
    //         start: "top top",
    //         end: "bottom center",
    //         toggleActions: "play none none none",
    //     },

    //     rotationX: -90,
    //     z: 300,
    //     y: -600,
    //     //   scale:1.5,
    //     //    skewX:-50,

    // });
    // gsap.to(".cloud2", {
    //     scrollTrigger: {
    //         trigger: "header",
    //         markers: true,
    //         scrub: 1,
    //         start:"top top",
    //         end:"bottom center",
    //         toggleActions: "play none none none",
    //     },

    //     rotationX:-90,
    //     y:-600,
    //      z:200,

    // });
    // gsap.to(".cloud3", {
    //     scrollTrigger: {
    //         trigger: "header",
    //         markers: true,
    //         scrub: 2,
    //         start:"top top",
    //         end:"bottom center",
    //         toggleActions: "play none none none",
    //     },

    //     rotationX:-90,
    //     y:-600,
    //      z:200,

    // });
});
