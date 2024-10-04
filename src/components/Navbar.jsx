/**
 * @copyright 2024 Shubham-Mi
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
    activeBox.current.style.top = `${lastActiveLink.current.offsetTop}px`;
    activeBox.current.style.left = `${lastActiveLink.current.offsetLeft}px`;
    activeBox.current.style.width = `${lastActiveLink.current.offsetWidth}px`;
    activeBox.current.style.height = `${lastActiveLink.current.offsetHeight}px`;
  };

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;
    initActiveBox();
  };

  useEffect(initActiveBox, []);
  window.addEventListener("resize", initActiveBox);

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Skills",
      link: "#skills",
      className: "nav-link",
    },
    {
      label: "Projects",
      link: "#projects",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className={item.className}
          ref={item.ref}
          onClick={activeCurrentLink}
        >
          {item.label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
