"use client";
import React, { useState } from "react";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ic6nnya",
        "template_9jh3w8b",
        e.target,
        "a2t5nO1ZiwZKRfq-0"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className="form-style1" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              First Name
            </label>
            <input
              value={formdata?.firstName}
              type="text"
              className="form-control"
              placeholder="Your First Name"
              required
              name="firstName"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-lg-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Last Name
            </label>
            <input
              value={formdata?.lastName}
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Your Last Name"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-md-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Email</label>
            <input
              value={formdata?.email}
              name="email"
              type="email"
              className="form-control"
              placeholder="Your Email"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-md-12">
          <div className="mb10">
            <label className="heading-color ff-heading fw600 mb10">
              Message
            </label>
            <textarea
              value={formdata?.message}
              name="message"
              cols={30}
              rows={4}
              placeholder="Type your message here..."
              defaultValue={""}
              required
              onChange={handleChange}
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-md-12">
          <div className="d-grid">
            <button type="submit" className="ud-btn btn-thm">
              Submit
              <i className="fal fa-arrow-right-long" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
