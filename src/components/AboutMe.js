import React from "react";
import "../styles/aboutme.css";
import aboutPhoto from "../icons/about.png";

export default function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="contentAboutMe">
        <div className="headingSection">
          <h1>About me</h1>
          <p>Why choose me ?</p>
        </div>
        <div className="card">
          <div className="photoAbout">
            <img src={aboutPhoto} alt="Skander Lassoued" />
          </div>
          <div className="contentDescription">
            <div className="detailsMe">
              <p>
                Hello there, I'm a software engineer .I write this summary full
                of pride because I finally achieved one of my dreams.Since my
                childhood, I was passionate about technologies. I've been always
                asking how things work behind the scenes especially when I used
                to play some of my favorite games such as Super Mario and Tank
                on ATARI .I've always been intrigued by the way the characters
                in these video games interacted with my actions .It was in that
                period when i first heard about the concept of programming and I
                really found it interesting to pursue my career in that domain .
                I've always been eager to enter university to deepen my passion
                and develop my skills . First ,I started learning programming by
                myself until reaching advanced concepts . At the present time,
                becoming able to build small programs as a junior software
                engineer like Tic Tac Toe, quiz game and some simple web
                applications allowed me to further my dedication to learn more .
                We always have something new to learn ,right!
              </p>
            </div>
            <div className="skillsList">
              <p>Here are a few highlights : </p>
              <ul>
                <li>Front-End - Angular | ReactJs Developer 💻 </li>
                <li>Back-End - NodeJs | Express | SpringBoot Developer 📡 </li>
                <li>Mobile - Android Java 📱 </li>
                <li>Database - MongoDB | Firebase | PostgreSQL 🎟 </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
