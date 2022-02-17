import React from "react";

const year = new Date().getFullYear();

const Footer = () => (
  <footer>
    <p> Copyright &copy; {year}</p>
  </footer>
);

export default Footer;
