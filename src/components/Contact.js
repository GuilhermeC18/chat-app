import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <div className="Contact">
        <img
          className="avatar"
          src="https://randomuser.me/api/portraits/men/38.jpg"
        ></img>
        <h1 className="name">Jar Prescott</h1>
        <div className="status">
          <div className="status-online"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
