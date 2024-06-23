let tl = gsap.timeline()

tl.to(".text-loader",{
  opacity:1,
  duration:0.09,
  stagger:{
    each:0.18,
    repeat:1,
    yoyo:true
  }  
})

tl.to("#loader", {
    display: "none"
})



let tl1 = gsap.timeline()

tl.to(".center-p1",{
    onStart: function(){
        $(".center-p1").scramble(2000, 50, "alphabet", true)
    }
})

tl.to(".center-p2",{
    opacity:1,
    delay:1.5,
    duration:1
})

tl.to(".loading-p",{
    duration: 0.3
})

tl.to(".loading-p",{
    display:"none",
    y:"-100%",
    duration:1.2
})