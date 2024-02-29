import React, { useRef, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from "axios";
import emailjs from "@emailjs/browser";

export default function JoinUs() {
  const [messageSent, setMessageSent] = useState(false);

  const toggleOverlay = () => {
    setMessageSent(!messageSent);
  };

  const [join, setJoin] = useState({
    name: "",
    email: "",
    skills: "",
    experience: "",
    coverLetter: "",
  });

  const onChangeHandler = (event) => {
    // console.log("Join state:", join);

    // console.log(event);
    setJoin(() => ({
      ...join,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // console.log("form data:", join);

    setJoin({
      name: "",
      email: "",
      skills: "",
      experience: "",
      coverLetter: "",
    });

    toggleOverlay();

    emailjs
      .sendForm("service_6nig7kc", "template_xoad6zk", form.current, {
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
    //   .post("http://jsonplaceholder.typicode.com/posts", { join })
    //   .then((response) => console.log(response))
    //   .catch((err) => console.log(err));

    // alert("Form submitted");
  };

  const form = useRef();

  return (
    <>
      {messageSent && (
        <div className="modal">
          <div onClick={toggleOverlay} className="overlay"></div>
          <div className="modal-content">
            <h2 className="messageH2">Application sent!</h2>
            <p>
              We have received your application. We will review it and get back
              to you.
            </p>
            <button className="close-modal" onClick={toggleOverlay}>
              <FontAwesomeIcon icon="fa-solid fa-x" />
            </button>
          </div>
        </div>
      )}

      <Header />
      <div className="aboutHero">
        <h1>Join Our Team</h1>
        <p className="aboutTxt">
          We are a growing company and we need talents like you.
        </p>
      </div>
      <div className="heroSection">
        <div className="joinDiv">
          <img
            src={require("../images/joinUs.png")}
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
            value={join.name}
          />

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="formInput"
            onChange={onChangeHandler}
            value={join.email}
          />

          <input
            type="text"
            name="skills"
            id="skills"
            placeholder="Skills"
            required
            className="formInput"
            onChange={onChangeHandler}
            value={join.skills}
          />

          <input
            type="number"
            name="experience"
            id="experience"
            placeholder="Years of Experience"
            required
            className="formInput"
            onChange={onChangeHandler}
            value={join.experience}
          />

          <textarea
            type="text"
            name="coverLetter"
            placeholder="Cover Letter"
            id="coverLetter"
            required
            className="formInput"
            onChange={onChangeHandler}
            value={join.coverLetter}
          />

          <Button
            type="submit"
            className="formBtn"
            onClick={() => console.log(join)}
          >
            Submit
          </Button>
        </form>
      </div>
      <Footer />
    </>
  );
}
