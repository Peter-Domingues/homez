import React from "react";

const ContactMeta = () => {
  const contactInfoList = [
    {
      title: "Phone",
      phone: "+1 786 523 9723",
      phoneLink: "tel:+17865239723", // Changed phoneLink to tel: URI
    },
    {
      title: "Email",
      mail: "anastasia@abrealestatefl.com",
      mailLink: "mailto:anastasia@abrealestatefl.com", // Changed mailLink to direct email address
    },
  ];

  return (
    <div className="column mb-4 mb-lg-5 footer-column" >
      <h6 className="text-white mb20">Contact</h6>
      {contactInfoList.map((contact, index) => (
        <div className="col-auto" key={index}>
          <div className="contact-info">
            <p className="info-title">{contact.title}</p>
            {contact.phone && (
              <h6 className="info-phone">
                <a href={contact.phoneLink}>{contact.phone}</a>
              </h6>
            )}
            {contact.mail && (
              <h6 className="info-mail">
                <a href={contact.mailLink}>{contact.mail}</a>
              </h6>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactMeta;
