import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Cms from './Cms';
import Others from './Others';


const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">Here are some of the skills I've honed over the past few years.
            </span> <br />

            <div className="skills__container container grid">

            <Frontend />
            <Backend />
            <Cms />
            <Others />
            </div>
        </section>
    )
}

export default Skills