function loco() {
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

  document.body.style.overflow = "hidden";

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

  tl.to(
    ".loading-p",
    {
      opacity: 1,
    },
    "a"
  );

  tl.to(
    ".center-p1",
    {
      onStart: function () {
        $(".center-p1").scramble(1500, 40, "alphabet", true);
      },
    },
    "a"
  );

  tl.to(".center-p2", {
    opacity: 1,
    delay: 0.9,
    duration: 1,
  });

  tl.to(
    "#loader",
    {
      duration: 1.5,
      delay: 0.1,
      ease: "power5",
      opacity: 0,
      display: "none",
    },
    "b"
  );

  tl.from(
    "#main",
    {
      y: 1600,
      opacity: 0,
      duration: 1.5,
    },
    "b"
  );

  tl.to("body", {
    overflow: "visible",
  });
}

function home() {
  gsap.set(".marquee", {
    scale: 5,
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#home",
      scroller: "#main",
      start: "top top",
      end: "+=1300",
      pin: true,
      scrub: 2,
    },
  });

  tl.to(
    ".video-div",
    {
      "--clip": "0%",
      ease: Power2,
    },
    "a"
  )

    .to(
      ".marquee",
      {
        scale: 1,
        ease: Power2,
      },
      "a"
    )

    .to(
      ".left",
      {
        xPercent: -10,
        ease: Power4,
        stagger: 0.04,
      },
      "b"
    )

    .to(
      "#nav",
      {
        backgroundColor: "black",
        ease: Power2,
      },
      "b"
    )

    .to(
      ".right",
      {
        xPercent: 10,
        ease: Power4,
        stagger: 0.04,
      },
      "b"
    );
}

function page3() {
  let tl = gsap.timeline();

  tl.to(".slide", {
    scrollTrigger: {
      trigger: ".page3-scroll",
      scroller: "#main",
      start: "top top",
      end: "+=1000",
      pin: true,
      scrub: 2,
    },
    transform: "translateX(-300%)",
  });
}

function magnet(string) {
  var hoverMouse = function ($el) {
    $el.each(function () {
      var $self = $(this);
      var hover = false;
      var offsetHoverMax = $self.attr("offset-hover-max") || 0.7;
      var offsetHoverMin = $self.attr("offset-hover-min") || 0.5;

      var attachEventsListener = function () {
        $(window).on("mousemove", function (e) {
          var hoverArea = hover ? offsetHoverMax : offsetHoverMin;

          var cursor = {
            x: e.clientX,
            y: e.clientY - $(window).scrollTop(),
          };

          var width = $self.outerWidth();
          var height = $self.outerHeight();

          var offset = $self.offset();
          var elPos = {
            x: offset.left + width / 2,
            y: offset.top + height / 2,
          };

          var x = cursor.x - elPos.x;
          var y = cursor.y - elPos.y;

          var dist = Math.sqrt(x * x + y * y);

          var mutHover = false;

          if (dist < width * hoverArea) {
            mutHover = true;
            if (!hover) {
              hover = true;
            }
            onHover(x, y);
          }

          if (!mutHover && hover) {
            onLeave();
            hover = false;
          }
        });
      };

      var onHover = function (x, y) {
        console.log("onHover", x, y); // Debugging log
        TweenMax.to($self, 0.4, {
          x: x * 0.8,
          y: y * 0.8,
          rotation: x * 0.05,
          ease: Power2.easeOut,
        });
      };

      var onLeave = function () {
        console.log("onLeave"); // Debugging log
        TweenMax.to($self, 0.7, {
          x: 0,
          y: 0,
          scale: 1,
          rotation: 0,
          ease: Elastic.easeOut.config(1.2, 0.4),
        });
      };

      attachEventsListener();
    });
  };

  hoverMouse($(string));
}

function page4() {
  if (window.innerWidth > 768) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#launches",
        scroller: "#main",
        pin: true,
        start: "top 70px",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1,
      },
    });

    tl.to(
      ".lleftelm",
      {
        yPercent: -500,
        ease: Power1,
      },
      "a"
    );

    let sections = document.querySelectorAll(".lleftelm");
    Shery.imageEffect(".limg", {
      style: 3,
      config: {
        resolutionXY: { value: 100 },
        distortion: { value: true },
        mode: { value: -3 },
        mousemove: { value: 2 },
        modeA: { value: 1 },
        modeN: { value: 0 },
        speed: { value: -0.64, range: [-500, 500], rangep: [-10, 10] },
        frequency: { value: 50, range: [-800, 800], rangep: [-50, 50] },
        angle: { value: 0.5, range: [0, 3.141592653589793] },
        waveFactor: { value: 1.4, range: [-3, 3] },
        color: { value: 10212607 },
        pixelStrength: { value: 3, range: [-20, 100], rangep: [-20, 20] },
        quality: { value: 5, range: [0, 10] },
        contrast: { value: 1, range: [-25, 25] },
        brightness: { value: 1, range: [-1, 25] },
        colorExposer: { value: 0.18, range: [-5, 5] },
        strength: { value: 0.2, range: [-40, 40], rangep: [-5, 5] },
        exposer: { value: 8, range: [-100, 100] },
        zindex: { value: "999", range: [-9999999, 9999999] },
        aspect: { value: 0.7782667085750207 },
        ignoreShapeAspect: { value: true },
        shapePosition: { value: { x: 0, y: 0 } },
        shapeScale: { value: { x: 0.5, y: 0.5 } },
        shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
        shapeRadius: { value: 0, range: [0, 2] },
        currentScroll: { value: 0 },
        scrollLerp: { value: 0.07 },
        gooey: { value: false },
        infiniteGooey: { value: false },
        growSize: { value: 4, range: [1, 15] },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1.5, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: false },
        maskVal: { value: 1, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: true },
        onMouse: { value: 1 },
        noise_speed: { value: 0.2, range: [0, 10] },
        metaball: { value: 0.2, range: [0, 2] },
        discard_threshold: { value: 0.5, range: [0, 1] },
        antialias_threshold: { value: 0.002, range: [0, 0.1] },
        noise_height: { value: 0.5, range: [0, 2] },
        noise_scale: { value: 10, range: [0, 100] },
      },
      slideStyle: (setScroll) => {
        sections.forEach(function (section, index) {
          ScrollTrigger.create({
            trigger: section,
            scroller: "#main",
            start: "top top",
            scrub: 1,
            onUpdate: function (prog) {
              setScroll(prog.progress + index);
            },
          });
        });
      },
    });
  }
}

function page6() {
  if ($(window).width() > 768) {
    document.querySelectorAll(".executive").forEach(function (elem) {
      let rotate = 0;
      let rotDiff = 0;

      elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector(".exe-img"), {
          opacity: 0,
          ease: Power3,
          duration: 0.5,
        });
      });

      elem.addEventListener("mousemove", function (dets) {
        let diff = dets.clientY - elem.getBoundingClientRect().top;
        rotDiff = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector(".exe-img"), {
          opacity: 1,
          ease: Power3,
          top: diff,
          left: dets.clientX,
          rotate: gsap.utils.clamp(-20, 20, rotDiff * 0.2),
        });
      });
    });
  }
}

loco();
if(window.innerWidth > 768){
  loader();
}
home();
page3();
magnet(
  ".slide1-img, .img1, .img2, .img3, .s3img1, .s3img2, .s3img3, .s4img1, .s4img2, .s4img3"
);
page4();
page6();
