import "./Formstyle.css";
import emailjs from "emailjs-com";

import React from "react";

const Form = () => {
  function sendEmail(e) {
    e.preventDefault();

    if (document.getElementById("t1").value === "") {
      alert("Please Enter Your Name");
      return false;
    }
    if (document.getElementById("t3").value === "") {
      alert("Please Enter Your Mobile No.");
      return false;
    }
    emailjs

      .sendForm(
        "service_rw74nti",
        "template_a1u138a",
        e.target,
        "8vzpb7YugqeE4zrYq"
      )

      .then((res) => {
        console.log(res);
        return false;
      })
      .catch((err) => console.log(err));

    var press = document.getElementById("press");

    if (press.clicked === true) {
      alert("msg sent");
    }

    // If (press.clicked == true) {
    //   alert("Form has been submitted succesfully!!");
    // }
  }

  return (
    <div className="form">
      <form onSubmit={sendEmail}>
        <label>Your Name</label>
        <input name="Your Name" type="text" id="t1" />
        <label>E-Mail</label>
        <input name="user_email" type="email" id="t2" />
        <label>Contact No-</label>
        <input name="Contact" type="Number" id="t3" />
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Type Your Message Here..."
          rows="6"
        ></textarea>

        <button type="Submit" value="send" className="btnF" id="press">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
