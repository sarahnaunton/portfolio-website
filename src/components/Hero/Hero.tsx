import linkedin from "../../assets/images/linked-in.png";
import email from "../../assets/images/email.png";
import github from "../../assets/images/github.png";
import javascript from "../../assets/images/javascript.svg";
import react from "../../assets/images/react.svg";
import node from "../../assets/images/node.svg";
import express from "../../assets/images/express.svg";
import mysql from "../../assets/images/sql.svg";
import knex from "../../assets/images/knex.svg";
import "./Hero.scss";

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__container">
      <div className="hero__links">
        <a href="mailto:sarah@naunton.org">
          <img src={email} alt="Email" className="hero__link" />
        </a>
        <a href="https://github.com/sarahnaunton" target="_blank">
          <img src={github} alt="Git Hub" className="hero__link" />{" "}
        </a>
        <a href="https://www.linkedin.com/in/sarah-naunton/" target="_blank">
          <img src={linkedin} alt="Linked In" className="hero__link" />
        </a>
      </div>
      <h3 className="hero__intro"> Hi, my name is</h3>
      <h1 className="hero__heading"> Sarah Naunton</h1>
      <h2 className="hero__subheading">Full-Stack Software Engineer</h2>
      <div className="hero__logos">
        <img src={javascript} alt="JavaScript" className="hero__logo" />
        <img src={react} alt="React" className="hero__logo" />
        <img src={node} alt="Node" className="hero__logo" />
        <img src={express} alt="Express" className="hero__logo" />
        <img src={mysql} alt="MySQL" className="hero__logo" />
        <img src={knex} alt="Knex" className="hero__logo" />
      </div>
      </div>
    </section>
  );
}
