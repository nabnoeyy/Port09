import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ContactBox from "./component/ContactBox";
import AboutBox from "./component/AboutBox";
import FeaturedBox from "./component/FeatureBox";
import Project from "./component/Project";
import Typed from "typed.js";
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function App() {
  useEffect(() => {
    /** ScrollReveal */
    const sections = document.querySelectorAll("section[id]");

    function scrollActive() {
      const scrollY = window.scrollY;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav-menu a [href*=" + sectionId + "]")
            .classList.add("active-link");
          // console.log("inside" + sectionId);
        } else {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
        }
      });
    }
    window.addEventListener("scroll", scrollActive);
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    //feature box
    sr.reveal(".featured-text-card", {});
    sr.reveal(".featured-name", { delay: 100 });
    sr.reveal(".featured-text-info", { delay: 200 });
    sr.reveal(".featured-text-btn", { delay: 200 });
    sr.reveal(".social_icons", { delay: 100 });
    sr.reveal(".featured-image", { delay: 200 });

    //project box
    sr.reveal(".project-box", { interval: 200 });

    //heading
    sr.reveal(".top-header", {});

    //Left-right Animation
    const srLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srLeft.reveal(".about-info", { delay: 200 });
    srLeft.reveal(".contact-info", { delay: 100 });

    const srRight = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    srRight.reveal(".skills-box", { delay: 100 });
    srRight.reveal(".form-control", { delay: 100 });

    window.addEventListener("scroll", scrollActive);
    /**Type Effect */
    const typingEffect = new Typed(".typedText", {
      strings: ["Lecturer", "Developer", "Researcher"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    });
    return () => {
      typingEffect.destroy();
    };
  }, []);
  return (
    <>
      <div className="App">
        <Header />
        <main className="wrapper">
          <FeaturedBox />
          <AboutBox />
          <Project />
          <ContactBox />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
