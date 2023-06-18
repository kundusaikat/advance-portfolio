import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Element, scroller } from "react-scroll";
import {
  About,
  Blog,
  Contact,
  Experience,
  HomeBar,
  Introduction,
  Projects,
  Resume,
  Services,
  Skills,
  Technologies,
  Testimonials,
} from "../Homepage";

export const Homepage = () => {
  const location = useLocation();
  const aboutRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);
  const servicesRef = useRef(null);
  const introductionRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const technologiesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const resumeRef = useRef(null);

  useEffect(() => {
    const { pathname } = location;
    if (pathname === "/intro") {
      scroller.scrollTo("introductionSection", {
        smooth: true,
        offset: -50, // Adjust this offset as needed
      });
    } else if (pathname === "/about") {
      scroller.scrollTo("aboutSection", {
        smooth: true,
        offset: -50, // Adjust this offset as needed
      });
    } else if (pathname === "/skills") {
      scroller.scrollTo("skillsSection", {
        smooth: true,
        offset: -50, // Adjust this offset as needed
      });
    } else if (pathname === "/experience") {
      scroller.scrollTo("experienceSection", {
        smooth: true,
        offset: -50, // Adjust this offset as needed
      });
    } else if (pathname === "/projects") {
      scroller.scrollTo("projectsSection", {
        smooth: true,
        offset: -50, // Adjust this offset as needed
      });
    } else if (pathname === "/technologies") {
      scroller.scrollTo("technologiesSection", {
        smooth: true,
        offset: -50, // Adjust this offset as needed
      });
    } else if (pathname === "/services") {
      scroller.scrollTo("servicesSection", {
        smooth: true,
        offset: -50, // Adjust this offset as needed
      });
    } else if (pathname === "/testimonials") {
      scroller.scrollTo("testimonialsSection", {
        smooth: true,
        offset: -50, // Adjust this offset as needed
      });
    } else if (pathname === "/blog") {
      scroller.scrollTo("blogSection", {
        smooth: true,
        offset: -50, // Adjust this offset as needed
      });
    } 
    
    else if (pathname === "/resume") {
      scroller.scrollTo("resumeSection", {
        smooth: true,
        offset: -50, // Adjust this offset as needed
      });
    } else if (pathname === "/contact") {
      scroller.scrollTo("contactSection", {
        smooth: true,
        offset: -50, // Adjust this offset as needed
      });
    }
  }, [location]);

  return (
    <div>
      <HomeBar />
      <Element name="introductionSection" ref={introductionRef}>
        <Introduction />
      </Element>
      <Element name="aboutSection" ref={aboutRef}>
        <About />
      </Element>
      <Element name="skillsSection" ref={skillsRef}>
        <Skills />
      </Element>
      <Element name="experienceSection" ref={experienceRef}>
        <Experience />
      </Element>
      <Element name="projectsSection" ref={projectsRef}>
        <Projects />
      </Element>
      <Element name="technologiesSection" ref={technologiesRef}>
        <Technologies />
      </Element>
      <Element name="servicesSection" ref={servicesRef}>
        <Services />
      </Element>
      <Element name="testimonialsSection" ref={testimonialsRef}>
        <Testimonials />
      </Element>
      <Element name="blogSection" ref={blogRef}>
        <Blog />
      </Element>
      <Element name="resumeSection" ref={resumeRef}>
        <Resume />
      </Element>
      <Element name="contactSection" ref={contactRef}>
        <Contact />
      </Element>
    </div>
  );
};
