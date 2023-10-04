var a=document.querySelector(".bgmove");
var b=document.querySelector(".bgclick");
b.addEventListener("mouseover", function(){
    a.style.left="0%";
})
b.addEventListener("mouseleave",function(){
    a.style.left="-100%";
})
var a1=document.querySelector(".bgmove1");
var b1=document.querySelector("#p104");
b1.addEventListener("mouseover", function(){
    a1.style.left="0%";
})
b1.addEventListener("mouseleave",function(){
    a1.style.left="-100%";
})

var a2=document.querySelector(".bgmove2");
var b2=document.querySelector("#p204");
b2.addEventListener("mouseover", function(){
    a2.style.left="0%";
})
b2.addEventListener("mouseleave",function(){
    a2.style.left="-100%";
})


/* starting gsap now :-)*/
// gsap.from("#image1",{
//     duration:2,
//     opacity:0,
//     y:50,
// })

gsap.from("#image102",{
    duration:2,
    opacity:0,
    x:50,
})
gsap.from("#image3",{
    duration:2,
    opacity:0,
    x:-50
})
gsap.from(".p10>p",{
    duration:1,
    stagger:0.5,
    opacity:0
    
})


gsap.registerPlugin(ScrollTrigger);
gsap.from("#p20",{
    y:50,
    opacity:0,
    scrollTrigger:{
        start:"top 80%",
        end: "top 50%",
        scroller:"body",
        trigger:"#p201",
        //markers:true,
        scrub:true,

    }    
})

gsap.from("#pro2",{
    x:70,
    // opacity:0,
    // stagger:1,
    scrollTrigger:{
        start:"top 90%",
        end: "top 60%",
        scroller:"body",
        trigger:"#pro2",
        // markers:true,
        scrub:true,

    }    
})
gsap.from("#pro3",{
    x:-70,
    // opacity:0,
    // stagger:1,
    scrollTrigger:{
        start:"top 90%",
        end: "top 60%",
        scroller:"body",
        trigger:"#pro3",
        //markers:true,
        scrub:true,

    }    
})

gsap.from("#nav102>a",{
    duration :1,
    stagger : 0.3,
    opacity:0

    });


 
gsap.from("#p610",{
    y:50,
    opacity:0,
    scrollTrigger:{
        start:"top 70%",
        end: "top 40%",
        scroller:"body",
        trigger:"#p610",
       // markers:true,
        scrub:true,

    }    
})



gsap.from("#p6201",{
    x:50,
    opacity:0,
    stagger:1,
    scrollTrigger:{
        start:"top 70%",
        end: "top 40%",
        scroller:"body",
        trigger:"#p6201",
        //markers:true,
        scrub:true,

    }    
})
gsap.from("#p6205",{
    x:50,
    opacity:0,
    scrollTrigger:{
        start:"top 70%",
        end: "top 40%",
        scroller:"body",
        trigger:"#p6205",
        //markers:true,
        scrub:true,

    }    
})
gsap.from("#p6204",{
    x:-50,
    opacity:0,
    scrollTrigger:{
        start:"top 70%",
        end: "top 40%",
        scroller:"body",
        trigger:"#p6204",
        //markers:true,
        scrub:true,

    }    
})

