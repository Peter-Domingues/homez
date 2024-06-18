import React from "react";
import Link from "next/link";

const ContactMeta = () => {
  const contactInfoList = [
    {
      title: "Total Free Customer Care",
      phone: "+(0) 123 050 945 02",
      phoneLink: "tel:+012305094502", // Changed phoneLink to tel: URI
    },
    {
      title: "Need Live Support?",
      mail: "hi@homez.com",
      mailLink: "mailto:hi@homez.com", // Changed mailLink to direct email address
    },
  ];

  return (
    <div className="row mb-4 mb-lg-5" style={{ justifyContent: "center" }}>
      {contactInfoList.map((contact, index) => (
        <div className="col-auto" key={index}>
          <div className="contact-info">
            <p className="info-title">{contact.title}</p>
            {contact.phone && (
              <h6 className="info-phone">
                <Link href={contact.phoneLink}>{contact.phone}</Link>
              </h6>
            )}
            {contact.mail && (
              <h6 className="info-mail">
                <Link href={contact.mailLink}>{contact.mail}</Link>
              </h6>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactMeta;
