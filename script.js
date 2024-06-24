function loco(){
    gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

function loader() {
  let tl = gsap.timeline();

document.body.style.overflow = "hidden"

  tl.to(".text-loader", {
    opacity: 1,
    duration: 0.06,
    stagger: {
      each: 0.12,
      repeat: 1,
      yoyo: true,
    },
  });

  tl.to("#loader-texts", {
    display: "none",
  });

  tl.to(".loading-p",{
      opacity: 1,
    },"a");

  tl.to(".center-p1",{
      onStart: function () {
        $(".center-p1").scramble(2000, 20, "alphabet", true);
      },
    },"a");

  tl.to(".center-p2", {
    opacity: 1,
    delay: 2,
    duration: 1,
  });

  tl.to("#loader", {
    duration: 1.5,
    delay: 0.1,
    ease: "power5",
    opacity: 0,
    display:"none"
  },'b');

  tl.from("#main", {
    y: 1600,
    opacity: 0,
    duration: 1.5,
  },'b');

  tl.to("body",{
    overflow: "visible",
  })

}

function home(){
  let tl =  gsap.timeline()

  tl.to(".video-div",{
    scrollTrigger:{
      trigger:"#home",
      scroller:"#main",
      start: "top top",
      end: "bottom top",
      pin:true,
      scrub:2
    },
    "--clip": "0%",
    ease: Power2,
    duration:5
  })

}




loader()
loco()  
home()