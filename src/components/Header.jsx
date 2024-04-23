import Typed from 'typed.js';
import "../styles/Container.css";
import "../styles/Header.css";
import { useState, useRef, useEffect } from "react";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

export default function Header() {
  const [isOpen, setOpen] = useState();
  defineElement(lottie.loadAnimation);

  const jsTyped = useRef(null);
  
  useEffect(() => {
      const typed = new Typed(jsTyped.current, {
        strings: ['Front end Developer', 'UX / UI Designer', 'Customer Service Specialist'],
        typeSpeed: 65,
        backSpeed: 25,
        backDelay: 600,
        loop: true
      });
  
      return () => {
        typed.destroy();
      };
    }, []);

  return (
    <header className="header" id="Header">
      <nav className="nav container">
        <a href="#!" className="logo" title="iakhmedov">
          <button className="button" data-text="Awesome">
            <span className="actual-text">&nbsp;iakhmedov&nbsp;</span>
            <span aria-hidden="true" className="hover-text">
              &nbsp;iakhmedov&nbsp;
            </span>
          </button>
        </a>
        <ul className={`nav_list ${isOpen ? "active" : ""}`}>
          <li className="nav_item">
            <a href="#about" className="nav_link" title="About">
              About Me
            </a>
          </li>
          <li className="nav_item">
            <a href="#skills" className="nav_link" title="Skills">
              Skills
            </a>
          </li>
          <li className="nav_item">
            <a href="#projects" className="nav_link" title="See projects">
              Projects
            </a>
          </li>
        </ul>
        <input id="checkbox2" type="checkbox" />
        <label
          onClick={() => setOpen(!isOpen)}
          className="toggle toggle2"
          htmlFor="checkbox2"
        >
          <div id="bar4" className="bars"></div>
          <div id="bar5" className="bars"></div>
          <div id="bar6" className="bars"></div>
        </label>
      </nav>
      <div className="pyramid-loader">
        <div className="wrapper">
          <span className="side side1"></span>
          <span className="side side2"></span>
          <span className="side side3"></span>
          <span className="side side4"></span>
          <span className="shadow"></span>
        </div>
      </div>
      <div className="header_content container">
        <div className="header_info">
          <span ref={jsTyped} className="header_title"></span>
          <h1>
            Islombek Akhmedov
            <lord-icon
              trigger="loop"
              delay="500"
              src="https://cdn.lordicon.com/lzgmgrnn.json"
            ></lord-icon>{" "}
          </h1>
          <p className="header_description"> Let's code together! </p>
          <div className="header_info--btns">
            <a href="https://github.com/iakhmedov-ia" target="_blank">
              <button
                className="view_projects"
                type="button"
                title="View projects"
              >
                View my projects
              </button>
            </a>
            <a href="mailto:islom803@gmail.com" target="_blank">
              <button className="contact_me" type="button" title="Contact">
                Contact with me
              </button>
            </a>
          </div>
        </div>
        <img
          className="hero"
          src="../images/header/hero_header.svg"
          alt="hero"
        />
      </div>
    </header>
  );
}
