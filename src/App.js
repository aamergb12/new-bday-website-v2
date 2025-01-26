import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const App = () => {

const [flipping, setFlipping] = useState(false); // To control animation
const [result, setResult] = useState(""); // Stores heads/tails result
  
const flipCoin = () => {
  if (flipping) return; // Prevent clicking mid-flip
  setFlipping(true);

  // Simulate coin flip
  const outcome = Math.random() > 0.5 ? "Heads" : "Tails";

  // Apply flipping animation
  const coin = document.querySelector(".coin");
  coin.style.transform = "rotateY(1800deg)"; // Spins multiple times

  setTimeout(() => {
    // Set final rotation based on outcome
    if (outcome === "Heads") {
      coin.style.transform = "rotateY(0deg)"; // Show heads side
    } else {
      coin.style.transform = "rotateY(180deg)"; // Show tails side
    }

    setResult(outcome); // Update result
    setFlipping(false); // Stop flipping animation
  }, 1000); // Matches animation duration
};


  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis();
    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // GSAP Animations for Part 1
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".part-1",
        start: "50% 50%",
        end: "250% 50%",
        scrub: true,
        pin: true,
      },
    });

    tl.to(".rotate-div", { rotate: -15, scale: 0.8 }, "a")
      .to("#row-div-2", { marginTop: "5%" }, "a")
      .to("#row-div-3", { marginTop: "-2%" }, "a")
      .to("#row-div-4", { marginTop: "-8%" }, "a")
      .to("#row-div-5", { marginTop: "-10%" }, "a")
      .to(".overlay-div h1", { opacity: "1", delay: 0.2 }, "a")
      .to(".overlay-div", { backgroundColor: "#000000b4" }, "a")
      .to(".scrolling", { width: "100%" }, "a");

    // GSAP Animations for Part 2
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part-2",
        start: "0% 70%",
        end: "50% 50%",
        scrub: true,
      },
    });

    tl2.to(".rounded-div-wrapper", { height: 0, marginTop: 0 });

    // GSAP Animations for Part 3
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".content-2",
        start: "20% 50%",
        end: "100% 50%",
        scrub: 1,
      },
    });

    tl3.to(".content-2 .text-area-hover h1", { width: "100%" })
      .to(".content-2 .text-area-hover h2", { delay: -0.4, width: "100%" });

    // GSAP Animations for Part 4


    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part-4",
        start: "50% 50%",
        end: "200% 50%",
        pin: true,
        markers: false, // Debug with markers
        scrub: 1,
      },
    });
    
    tl4
      .to(".c-one", { marginTop: "-25%", opacity: 1, duration: 1 }, "step-1")
      .to(".c-two", { opacity: 1, duration: 1 }, "step-2")
      .to(".c-one", { marginTop: "-100%", opacity: 0, duration: 1 }, "step-2")
      .to(".c-three", { opacity: 1, duration: 1 }, "step-3")
      .to(".c-two", { opacity: 0, duration: 1 }, "step-3")
      .to(".c-one", { marginTop: "-180%", duration: 1 }, "step-3")
      .to(".c-one", { marginTop: "-230%", duration: 1 }, "step-4")
      .to(".c-three", { opacity: 0, duration: 1 }, "step-4")
      .to(".cir-part-4", { marginLeft: "100%", rotate: 360, duration: 2 }, "step-4");

    // GSAP Animations for Part 5
    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part-5",
        start: "20% 50%",
        end: "60% 60%",
        scrub: 1,
      },
    });

    tl5.to(".part-5 .text-area-hover h1", { width: "100%" })
      .to(".part-5 .text-area-hover h2", { delay: -0.4, width: "100%" });

    // GSAP Animations for Part 6



    // GSAP Animations for Part 7
    const tl7 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part-7",
        start: "50% 50%",
        end: "300% 50%",
        pin: true,
        scrub: 1,
      },
    });

    tl7.to("#demo", { bottom: "7%" })
      .to(".our-work-txt-div", { height: "80vh" }, "height")
      .to(".our-work-txt", { height: "60vh" }, "height")
      .to("#our", { left: "0%" }, "height")
      .to("#work", { right: "0%" }, "height")
      .to(".scroll-img", { marginTop: "-1368%" });

    return () => {
      // Clean up on component unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="main">
      <nav>
        <div className="lft-nav">
          <h1 id="logo">I love you so much</h1>
          <h1>{`    <3`}</h1>
        </div>
        <div className="rght-nav">
          <h2 id="nav-contact">By Aamer Goual Belhamidi</h2>
          <h2>agbelhamidi@gmail.com</h2>
        </div>
      </nav>

      {/* PART 1 */}
      <div className="part-1">
        <div className="content-part-1">
          <div className="rotate-div">
            {[...Array(5)].map((_, idx) => (
              <div key={idx} id={`row-div-${idx + 1}`} className="row-div">
                {[1, 4, 3, 2].map((imgIdx) => (
                  <div key={imgIdx} className="img-div">
                    <img src={`/Assets/Images/${imgIdx}.jpg`} alt={`Gallery Item ${imgIdx}`} />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="overlay-div">
            <h1>HAPPY BIRTHDAY!!!!</h1>
            <div className="scroll-down">
              <h3>SCROLL DOWN</h3>
              <div className="scroll-p">
                <div className="scrolling"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PART 2 */}
      <div className="part-2">
        <div className="rounded-div-wrapper">
          <div className="rounded-div"></div>
        </div>
        <div className="content-2">
          <div className="text-area">
            <h1>big 21 for the strongest</h1>
            <h2>girl i know</h2>
          </div>
          <div className="text-area-hover">
            <h1>big 21 for the strongest</h1>
            <h2>girl i know</h2>
          </div>
        </div>
      </div>

      {/* PART 3 */}
      <div className="part-3">
        <div className="top-part-3">
          <h4>Inshallah you have the best year of your life!</h4>
          <div className="cta">
            <div className="cta-book">
              <div className="cta-txt">
                <h2>Finally</h2>
                <h2>Legal</h2>
              </div>
            </div>
            <div className="cta-book cta-book-2">
              <div className="cta-txt">
                <h2>TWENTY</h2>
                <h2>ONE</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="btm-part-3">
          <img src="/Assets/Images/15.jpg" alt="Apple" />
          <img src="/Assets/Images/16.jpg" alt="Dell" />
          <img src="/Assets/Images/17.jpg" alt="HP" />
          <img src="/Assets/Images/18.jpg" alt="IBM" />
          <img src="/Assets/Images/19.jpg" alt="Orbal" />
        </div>
      </div>

      {/* PART 4 */}
      <div className="part-4">
        <div className="lft-part-4">
          <h1>HIP HIP HOORAY</h1>
          <div className="cir-part-4">
            <img
              src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64b7d30aa9b24259d10be24d_symbol.svg"
              alt="Outcome"
            />
          </div>
        </div>
        <div className="rght-part-4">
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className={`content-rght-part-4 c-${idx + 1}`}>
              <h1>You've changed so MUCH!</h1>
              <p>
              I'm so proud of the person you've become. You've grown so much
              and I'm so grateful to have you in my life. I love you so much
              and I hope you have the best year of your life. I can't wait to
              see what the future holds for you and I made this website to
              show you how much you mean to me. From the long distance
              to the highs and lows I know it was all for a reason and Inshallah
              that will all be clear soon. You work your ass off day to day and 
              that’s so incredibly inspiring to see. It’s also your first year coming 
              into the year as a muslim so congrats ! Let’s crush Ramadan together 
              and run towards to day we get married. I hope you enjoy this little site!
               Happy Birthday!  <br /> <br /> Love, Aamer Goual Belhamidi
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* PART 5 */}
      <div className="part-5">
        <p>In summary..</p>
        <div className="text-area">
          <h1>My favorite person in the </h1>
          <h2>world was born today !</h2>
        </div>
        <div className="text-area-hover">
          <h1>My favorite person in the</h1>
          <h2>world was born today !</h2>
        </div>
      </div>

      {/* PART 6 */}
      
      {/* Heads or Tails Section */}

          <div className="part-coin-flip">
      <h1>Heads or Tails?</h1>
      <div className="coin-container">
        <div
          className={`coin ${flipping ? "flip" : result === "Heads" ? "show-heads" : "show-tails"}`}
          onClick={flipCoin}
        >
          {/* Heads Side */}
          <div className="heads">
            <img src="/Assets/Images/21.jpg" alt="Heads" />
            <div className="label">H</div>
          </div>

          {/* Tails Side */}
          <div className="tails">
            <img src="/Assets/Images/22.jpg" alt="Tails" />
            <div className="label">T</div>
          </div>
        </div>
      </div>
      {!flipping && result && <h2>It's {result}!</h2>}
    </div>


      {/* PART 7 */}
      <div className="part-7">
        <div className="our-work-txt" style={{ height: '80vh' }}>

          <h1 id="our">My</h1>
          <h1 id="work">Baby</h1>
        </div>
        <div className="our-work-txt-div">
          <div className="scroll-work">
            <div className="scroll-img">
              {[1, 2, 5, 6, 7, 8, 10, 11, 12, 13, 14].map((imgIdx) => (
                <img key={imgIdx} src={`/Assets/Images/${imgIdx}.jpg`} alt={`Gallery Items ${imgIdx}`} />
              ))}
            </div>
          </div>
        </div>
        <button id="demo">Have a great year!</button>
      </div>
    </div>
  );
};

export default App;
