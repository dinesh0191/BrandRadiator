import React, { useState } from "react";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";

import "../styles/contact.scss";

const Contact = () => {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = contactDetails;

  const onChangeInputFields = (event) => {
    const { name, value } = event.target;
    setContactDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === "" || message === "" || email === "") {
      alert("Please fill the details");
    } else {
      try {
        await addDoc(collection(db, "contact"), { name, email, message });
        alert("Form submitted successfully");
        setContactDetails({
          name: "",
          email: "",
          message: "",
        });
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <section className="contact">
      <div className="contact-content">
        <h3>Contact us</h3>
        <p className="sub-title">Please fill the form</p>

        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => onChangeInputFields(e)}
              name="name"
            />
          </label>

          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => onChangeInputFields(e)}
              name="email"
            />
          </label>

          <label>Message</label>
          <textarea
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => onChangeInputFields(e)}
            name="message"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
