import React from "react";

const Social = () => {
  const socialIcons = ["fab fa-instagram"];

  return (
    <div className="social-style1">
      {socialIcons.map((iconClass, index) => (
        <a
          key={index}
          target="_blank"
          href="https://www.instagram.com/anastasiab.realestate"
        >
          <i className={iconClass + " list-inline-item"} />
        </a>
      ))}
    </div>
  );
};

export default Social;
