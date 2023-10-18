let Ham = document.querySelector("#hamburger")
let main = document.querySelector(".extras")
let cart = document.querySelector("#menu i")
let menuContainer = document.querySelector("#menu")
let open1 = 0;
let open2 = 0;


Ham.addEventListener("click", function() {
  if (open1 == 0) {
    menuContainer.style.backgroundColor = "black";
    open1 = 1;
    main.innerHTML = `<div class="menu-page">
  <div class="section-container">
  <div class="menu-base">
    <h2>Shop</h2>
  </div>
  <div class="menu-base menu-base-1">
    <h2>Catering</h2>
    <span class="material-symbols-outlined">
      arrow_outward
      </span>
  </div>
  <div class="menu-base">
    <h2>Impact</h2>
  </div>
  <div class="menu-base">
    <h2>Stories</h2>
  </div>
  <div class="menu-base">
    <h2>About</h2>
  </div>
  <div class="menu-base">
    <h2>Contact</h2>
  </div>
  <div class="menu-base">
    <h2>Donate</h2>
  </div>
  <div class="menu-base">
    <h2>Sign In</h2>
  </div>
</div>
<div class="about about-pt2">
  <div class="about-1 about-1-pt2">
    <div class="about-title about-title-pt2"><h3>Connect With<br>Us</h3></div>
    <h3>Facebook</h3>
    <h3>Instagram</h3>
    <h3>Twitter</h3>
    <h3>LinkedIn</h3>
    <h3>YouTube</h3>
  </div>
  <div class="about-1 about-1-pt2">
    <div class="about-title about-title-pt2"><h3>NITTY GRITTIES</h3></div>
    <h3>Good Things</h3>
    <h3>FAQs</h3>
    <h3>Good Food</h3>
    <h3>FAQs</h3>
    <h3>Good Places</h3>
    <h3>Pathways</h3>
    <h3>Careers</h3>
  </div>
</div>
</div>`;
    if (open2 == 1) {
      gsap.from(".menu-page", {
        y: 900,
        duration: 0.3
      })
      open2 = 0;
    } else {
      gsap.from(".menu-page", {
        y: -600,
        duration: 0.4
      })
    }
    gsap.to("#nav #logo h1 , #hamburger , #menu i ,#twogoodlogo ", {
      color: "white"
    })
    gsap.from(".menu-base h2", {
      y: 200,
      opacity: 0,
      stagger: 0.025
    })
    gsap.from(".menu-base-1 span", {
      y: 200
    })
    gsap.from(".menu-page .about-pt2 .about-1-pt2>h3", {
      opacity: 0,
      delay: 0.5,
      duration: 0.8
    })
    gsap.from(".menu-page .about-pt2 .about-1-pt2 .about-title-pt2 h3", {
      y: 40,
      opacity: 0,
      delay: 0.4,
      duration: 0.5
    })
  } else {
    gsap.to(".menu-page", {
      y: -1300,
      duration: 0.45
    })
    menuContainer.style.backgroundColor = "white";
    open1 = 0;
    gsap.to("#nav #logo h1 , #hamburger , #menu i ,#twogoodlogo", {
      color: "black"
    })
    gsap.to(".menu-base h2", {
      y: 200,
      opacity: 0,
      duration: 0.1
    })
    gsap.to(".menu-base-1 span", {
      y: 200,
      opacity: 0,
      duration: 0.1
    })
    gsap.to(".menu-page .about-pt2 .about-1-pt2>h3", {
      opacity: 0,
      duration: 0.1
    })
    gsap.to(".menu-page .about-pt2 .about-1-pt2 .about-title-pt2 h3", {
      opacity: 0,
      duration: 0.1
    })
  }
})

cart.addEventListener("click", function() {
  if (open2 == 0) {
    open2 = 1;
    if (open1 == 1) {
      open1 = 0;
    }
    menuContainer.style.backgroundColor = "black";
    main.innerHTML = `<div class="cart-section">
    <div class="empty">
      <h3>Your cart is empty.</h3>
      <button>See All Good Things</button>   
    </div>
      <div class="scroller">
        <div class="scroller-in">
          <h2>Cart&nbsp;&nbsp;</h2>
          <h2>Cart&nbsp;&nbsp;</h2>
          <h2>Cart&nbsp;&nbsp;</h2>
          <h2>Cart&nbsp;&nbsp;</h2>
          <h2>Cart&nbsp;&nbsp;</h2>
          <h2>Cart&nbsp;&nbsp;</h2>
        </div>
        <div class="scroller-in scroller-in-rev">
          <h2>Empty&nbsp;&nbsp;</h2>
          <h2>Empty&nbsp;&nbsp;</h2>
          <h2>Empty&nbsp;&nbsp;</h2>
          <h2>Empty&nbsp;&nbsp;</h2>
          <h2>Empty&nbsp;&nbsp;</h2>
          <h2>Empty&nbsp;&nbsp;</h2>
        </div>
      </div>
    </div>`;
    gsap.from(".cart-section", {
      y: -900,
      duration: 0.3
    })
    gsap.to("#nav #logo h1 , #hamburger , #menu i ,#twogoodlogo ", {
      color: "white"
    })
    gsap.from(".scroller", {
      opacity: 0,
      delay: 0.18
    })
    gsap.from(".cart-section .empty h3 , .cart-section .empty button", {
      opacity: 0,
      y: -40,
      stagger: 0.15
    })
  } else {
    gsap.to(".cart-section", {
      y: -1300,
      duration: 0.45
    })
    open2 = 0;
    menuContainer.style.backgroundColor = "white";
    gsap.to("#nav #logo h1 , #hamburger , #menu i ,#twogoodlogo", {
      color: "black"
    })
  }
})


function HomepageAnimation() {
  gsap.from("#nav , #menu span , #menu i", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.1
  })

  gsap.from(".title-p1 h1", {
    y: 50,
    duration: 0.3,
    delay: 0.2,
    stagger: 0.2
  })

  gsap.from("#video img", {
    opacity: 0,
    duration: 0.5,
    delay: 1,
  })
  gsap.from("#video h2", {
    y: 100,
    opacity: 0,
    duration: 0.3,
    delay: 0.7,
  })

}

function ImgsAnimation() {
  gsap.from(".img", {
    opacity: 0,
    scale: 1.4,
    duration: 0.4,
    scrollTrigger: {
      start: "top -13%",
      end: "top -100%"
    }
  })

  gsap.from(".img1", {
    scale: 1,
    scrollTrigger: {
      start: "top -15%",
      end: "top -400%",
      scrub: true
    }
  })
  gsap.from(".img2", {
    scale: 1,
    scrollTrigger: {
      start: "top -70%",
      end: "top -400%",
      scrub: true
    }
  })
  gsap.from(".img3", {
    scale: 1,
    scrollTrigger: {
      start: "top -110%",
      end: "top -400%",
      scrub: true
    }
  })

  gsap.from(".info", {
    opacity: 0,
    duration: 0.4,
    scrollTrigger: {
      start: "top -13%",
      end: "top -100%"
    }
  })

  gsap.to(".info-1", {
    y: 315,
    scrollTrigger: {
      start: "top 3%",
      end: "top -300%",
      scrub: true
    }
  })

  gsap.to(".info-2", {
    y: 315,
    scrollTrigger: {
      start: "top -60%",
      end: "top -300%",
      scrub: true
    }
  })

  gsap.to(".info-3", {
    y: 415,
    scrollTrigger: {
      start: "top -110%",
      end: "top -600%",
      scrub: true
    }
  })
}

function LogoAnimation() {
  gsap.to("#logo h1 , #logo svg", {
    y: -68,
    duration: 0.1,
    scrollTrigger: {
      trigger: "#logo h1",
      scroller: "body",
      start: "top -8%",
      end: "top -30%",
      // scrub:true,
    }
  })

  gsap.from("#end #End-logo", {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#end",
      scroller: "body"
    }
  })
}

function BuyingSectionAnimation() {
  gsap.from("#buying-section .product", {
    y: 60,
    opacity: 0,
    duration: 0.4,
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#buying-section .product",
      scroller: "body"
    }
  })
}

function BottomDescription() {
  gsap.from(".bottom-title-1 h1 , .bottom-title-1 button , .bottom-title-1 p ", {
    y: 80,
    opacity: 0,
    duration: 0.4,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".bottom-title-1",
      scroller: "body",
    }
  })

  gsap.from(".bottom-title-2 h1 , .bottom-title-2 p", {
    y: 70,
    opacity: 0,
    duration: 0.4,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".bottom-title-2",
      scroller: "body"
    }
  })
}

function PersonAnimation() {
  gsap.from("#small-imgs .person img", {
    y: -120,
    scrollTrigger: {
      trigger: "#small-imgs .person",
      scroller: "body",
      start: "top 100%",
      end: "bottom -30%",
      scrub: 1
    }
  })
}

function EmailAnimation() {
  gsap.from("#details #details-1 , #details .line-4", {
    y: 70,
    opacity: 0,
    duration: 0.4,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#details",
      scroller: "body"
    }
  })
}

function OurHandels() {
  gsap.from(".about .about-1 .about-title h3 , .about .about-1 h3", {
    y: 40,
    opacity: 0,
    duration: 0.3,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".about",
      scroller: "body"
    }
  })
}

function ParagraphAnimation() {
  gsap.from("#para-section #para-title , #para-section #para", {
    y: 70,
    opacity: 0,
    duration: 0.4,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#para-section",
      scroller: "body"
    }
  })
}

HomepageAnimation();
ImgsAnimation();
LogoAnimation();
BuyingSectionAnimation();
BottomDescription();
PersonAnimation();
EmailAnimation();
OurHandels();
ParagraphAnimation();
