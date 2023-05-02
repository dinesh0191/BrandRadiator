import React, { useEffect, useState } from "react";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";
import "../styles/admin.scss";

const Admin = () => {
  const [contactsData, setContactsData] = useState([]);

  const fetchContacts = async () => {
    const data = [];
    const contactsCollection = await getDocs(collection(db, "contact"));
    contactsCollection.forEach((doc) => {
      data.push(doc.data());
    });

    setContactsData(data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <section className="contact-info">
      {contactsData.length > 0 ? (
        contactsData.map((item) => (
          <div className="contact-info-card" key={item.message}>
            <p>
              <b>Name</b> - {item.name}
            </p>
            <p>
              <b>Email</b> - {item.email}
            </p>
            <p>
              <b> Message </b> - {item.message}
            </p>
          </div>
        ))
      ) : (
        <div className="loading">
          <h2>Loading. . .</h2>
        </div>
      )}
    </section>
  );
};

export default Admin;
