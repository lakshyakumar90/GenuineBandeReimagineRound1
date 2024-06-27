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

loco();
loader();
home();
page3();
magnet(
  ".slide1-img, .img1, .img2, .img3, .s3img1, .s3img2, .s3img3, .s4img1, .s4img2, .s4img3"
);
