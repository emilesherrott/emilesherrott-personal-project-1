import React, { useState } from "react";
import axios from "axios";

const MailingList = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const newFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    setFormData(newFormData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      await axios.post(`http://localhost:3002/send/`, formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form id="contact-us" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="form-text default-font"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Your email"
          className="form-text default-font"
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your message"
          className="form-textarea default-font"
          onChange={handleChange}
        ></textarea>
        <input type="submit" className="form-submit title-font" />
      </form>
    </div>
  );
};

export default MailingList;
