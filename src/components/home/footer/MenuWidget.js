import React from "react";

const MenuWidget = () => {
  const menuSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Featured Properties", href: "#featured" },
        { label: "Pre-construction", href: "#new" },
        { label: "Advanced Serch", href: "/listing" },
        { label: "About me", href: "/about" },
      ],
    },
  ];

  return (
    <div className="footer-column">
      {menuSections.map((section, index) => (
        <div className="col-auto" key={index}>
          <div className="link-style1 mb-3">
            <h6 className="text-white mb25">{section.title}</h6>
            <ul className="ps-0">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuWidget;
