import React from "react";
import Typical from "react-typical";
import "../styles/home.css";
import facebook from "../icons/facebook.png";
import instagram from "../icons/instagram.png";
import linkedin from "../icons/linkedin.png";
import github from "../icons/github.png";
import twitter from "../icons/twitter.png";
import whatsapp from "../icons/whatsapp.png";
import google from "../icons/google.png";
import me from "../icons/me.png";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="home">
      <section className="content" id="home">
        <div className="description">
          <div className="details">
            <h1>Hello there,</h1>
            <h2>I'm Skander Lassoued</h2>
            <Typical
              loop={Infinity}
              wrapper="h3"
              steps={[
                "Software engineer",
                2000,
                "Full stack JavaScript Dev",
                2000,
                "Hungry for knowledge",
                2000,
              ]}
            />
            <p>
              I am a methodical, serious, motivated and especially determined to
              learn in order to reach the skill levelfor which I am set
            </p>
          </div>
          <div className="socialMedia">
            <ul>
              <li>
                <a href="https://www.facebook.com/skander.lassoued09">
                  <img src={facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/skanderlassoued/">
                  <img src={instagram} alt="instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/skanderlassoued/">
                  <img src={linkedin} alt="linkedin" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/SkanderLassoue1">
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
              <li>
                <a href="https://github.com/SkanderLassoued09">
                  <img src={github} alt="github" />
                </a>
              </li>
            </ul>
          </div>
          <div className="requiredInfo">
            <ul>
              <li>
                <span>
                  <img src={google} alt="google" />
                  <h4>Lassoued.skanderr@gmail.com</h4>
                </span>
              </li>
              <li>
                <span>
                  <img src={whatsapp} alt="whatsapp" />
                  <h4>+216 58 835 747</h4>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="photo">
          <div className="photoContainer">
            <img src={me} alt="Skander Lassoued" />
          </div>
        </div>
      </section>
      <section className="aboutMeParent" id="aboutMe">
        <AboutMe />
      </section>
      <section className="projectsParent" id="projects">
        <Projects />
      </section>
      <section className="contactParent" id="contact">
        <Contact />
      </section>
    </div>
  );
}
