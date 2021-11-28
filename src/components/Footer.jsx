import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p className="footer-links">
        <a
          href=""
          target="_blank"
        >
         Hello Im truong and I love thay bao
        </a>
        <span> / </span>
        
        <span> / </span>
        
        <span> / </span>
        
      </p>
      <p>
        &copy; {currentYear} <strong>TruongNguyen</strong> - TruongNguyen
      </p>
    </footer>
  );
};

export default Footer;
