import React, { useRef, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from "axios";
import emailjs from "@emailjs/browser";

export default function Message() {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    requirement: "",
    moreDetails: "",
  });

  const [messageSent, setMessageSent] = useState(false);

  const toggleOverlay = () => {
    setMessageSent(!messageSent);
  };

  const onChangeHandler = (event) => {
    setMessage(() => ({
      ...message,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmitHandler = (event) => {
    // document.getElementById("name").value = "";
    // document.getElementById("email").value = "";
    // document.getElementById("requirement").value = "";
    // document.getElementById("moreDetails").value = "";

    setMessage({
      name: "",
      email: "",
      requirement: "",
      moreDetails: "",
    });

    event.preventDefault();

    toggleOverlay();

    emailjs
      .sendForm("service_c1bs9ip", "template_99x6wwq", form.current, {
        publicKey: "dwbE0hXxfyy2LedKO",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    // axios
    //   .post("http://jsonplaceholder.typicode.com/posts", { message })
    //   .then((response) => console.log(response))
    //   .catch((err) => console.log(err));
  };

  const form = useRef();

  return (
    <>
      {messageSent && (
        <div className="modal">
          <div onClick={toggleOverlay} className="overlay"></div>
          <div className="modal-content">
            <h2 className="messageH2">Message sent!</h2>
            <p>
              We have received your message. Expect an email from us shortly.
            </p>
            <button className="close-modal" onClick={toggleOverlay}>
              <FontAwesomeIcon icon="fa-solid fa-x" />
            </button>
          </div>
        </div>
      )}
      <Header />

      <div className="aboutHero">
        <h1 className="messageH1">Let’s help you realize that dream.</h1>
        <p className="aboutTxt">
          Send a message and we’ll reach out to you shortly.{" "}
        </p>
      </div>
      <div className="heroSection">
        <div className="joinDiv">
          <img
            src={require("../images/message.png")}
            alt=""
            className="joinImg"
          />
        </div>
        <form ref={form} className="form" onSubmit={onSubmitHandler}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            className="formInput"
            onChange={onChangeHandler}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="formInput"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            name="requirement"
            id="requirement"
            placeholder="What do you wish to do?"
            required
            className="formInput"
            onChange={onChangeHandler}
          />

          <textarea
            type="text"
            name="moreDetails"
            placeholder="More details"
            id="moreDetails"
            required
            className="formInput"
            onChange={onChangeHandler}
          />

          <Button type="submit" className="formBtn">
            Submit
          </Button>
        </form>
      </div>
      <Footer />
    </>
  );
}
