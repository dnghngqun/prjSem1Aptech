import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Footer from "../Footer";
import Navbar from "../navbar/navbar";
import "./Feedback.css";
const FeedbackForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("male");
  const [content, setContent] = useState("");

  const [emailIconClass, setEmailIconClass] = useState("uil-envelope");
  const [emailIconColor, setEmailIconColor] = useState("#b4b4b4");
  const [firstNameIconClass, setFirstNameIconClass] = useState("uil-user");
  const [firstNameIconColor, setFirstNameIconColor] = useState("#b4b4b4");
  const [lastNameIconClass, setLastNameIconClass] = useState("uil-user");
  const [lastNameIconColor, setLastNameIconColor] = useState("#b4b4b4");
  const [contentBorderColor, setContentBorderColor] = useState("#b4b4b4");

  const validateEmail = () => {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
      setEmailIconClass("uil-envelope");
      setEmailIconColor("#b4b4b4");
      document.getElementById("error-notification").innerHTML =
        "Please fill in all required fields correctly!";
    } else if (email.match(pattern)) {
      setEmailIconClass("uil-check-circle");
      setEmailIconColor("#4bb543");
      document.getElementById("error-notification").innerHTML = "";
    } else {
      setEmailIconClass("uil-envelope");
      setEmailIconColor("#de0611");
      document.getElementById("error-notification").innerHTML =
        "Please fill in all required fields correctly!";
    }
  };
  const validateContent = (input, setContentBorderColor) => {
    if (input === "") {
      setContentBorderColor("#b4b4b4");
      document.getElementById("error-notification").innerHTML =
        "Please fill in all required fields correctly!";
    } else {
      setContentBorderColor("#4bb543");
      document.getElementById("error-notification").innerHTML = "";
    }
  };
  const validateNameInput = (input, setIconClass, setIconColor) => {
    let pattern = /^[A-Za-z ]+$/;

    if (input === "") {
      setIconClass("uil-user");
      setIconColor("#b4b4b4");
      document.getElementById("error-notification").innerHTML =
        "Please fill in all required fields correctly!";
    } else if (input.match(pattern)) {
      setIconClass("uil-check-circle");
      setIconColor("#4bb543");
      document.getElementById("error-notification").innerHTML = "";
    } else {
      setIconClass("uil-user");
      setIconColor("#de0611");
      document.getElementById("error-notification").innerHTML =
        "Please fill in all required fields correctly!";
    }
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    validateNameInput(
      e.target.value,
      setFirstNameIconClass,
      setFirstNameIconColor
    );
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    validateNameInput(
      e.target.value,
      setLastNameIconClass,
      setLastNameIconColor
    );
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail();
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
    validateContent(e.target.value, setContentBorderColor);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Validate if fields are empty
    validateNameInput(firstName, setFirstNameIconClass, setFirstNameIconColor);
    validateNameInput(lastName, setLastNameIconClass, setLastNameIconColor);
    validateEmail();
    // Check if any validation errors exist
    if (
      emailIconClass === "uil-check-circle" &&
      firstNameIconClass === "uil-check-circle" &&
      lastNameIconClass === "uil-check-circle"
    ) {
      const formData = {
        firstName,
        lastName,
        email,
        birthday,
        gender,
        content,
      };

      try {
        // Send the form data to JSON Server
        await axios.post("http://localhost:8080/feedbackData", formData);

        window.location.href = "/feedback/thanks";
      } catch (error) {
        console.error("Error saving feedback:", error);
      }
    } else {
      console.log("Form submission blocked due to validation errors.");
      return false;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container container-setting">
        <div className="row">
          <div className="col-md-7">
            <div className="box">
              <div className="title">
                <h2>Session Feedback Form</h2>
                <h6>
                  Thank you for taking the time to provide your honest feedback!
                  We're always looking to improve, and your comments will help
                  us do that.
                </h6>
                <div id="error-notification" style={{ color: "red" }}></div>
              </div>
              <br />
              <form
                onSubmit={handleFormSubmit}
                action="#"
                method="post"
                id="feedback-form">
                <label htmlFor="name">
                  Name <span style={{ color: "red" }}>*</span>
                </label>{" "}
                <input
                  type="text"
                  id="firstName"
                  placeholder="First name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  pattern="[A-Za-z ]+"
                  title="Name should only contain letters and spaces"
                  className={`input-field ${firstNameIconClass}`}
                  style={{ borderColor: firstNameIconColor }}
                />
                <i
                  className={`uil uil-user firstName-icon ${firstNameIconClass}`}
                  style={{ color: firstNameIconColor }}></i>
                <br></br>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last name"
                  value={lastName}
                  onChange={handleLastNameChange}
                  pattern="[A-Za-z ]+"
                  title="Name should only contain letters and spaces"
                  className={`input-field ${lastNameIconClass}`}
                  style={{ borderColor: lastNameIconColor }}
                />
                <i
                  className={`uil uil-user lastName-icon ${lastNameIconClass}`}
                  style={{ color: lastNameIconColor }}></i>
                <div className="email">
                  <label htmlFor="email">
                    Email <span style={{ color: "red" }}>*</span>
                  </label>{" "}
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="example@gmail.com"
                    pattern="^[^ ]+@[^ ]+\.[a-z]{2,3}"
                    title="Please enter a valid email address"
                    spellCheck="false"
                    className={`input-field ${emailIconClass}`}
                    style={{ borderColor: emailIconColor }}
                  />
                  <i
                    className={`uil uil-envelope email-icon ${emailIconClass}`}
                    style={{ color: emailIconColor }}></i>
                </div>
                <div className="date">
                  <label htmlFor="birthday">Birthday (Optional)</label>
                  <input
                    type="date"
                    id="birthday"
                    name="birthday"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </div>
                <div className="gender">
                  <label htmlFor="gender">Gender</label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={() => setGender("male")}
                  />
                  Male
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={() => setGender("female")}
                  />{" "}
                  Female
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={gender === "other"}
                    onChange={() => setGender("other")}
                  />{" "}
                  Other
                </div>
                <div className="content">
                  <label htmlFor="content">
                    Content <span style={{ color: "red" }}>*</span>
                  </label>{" "}
                  <textarea
                    id="content"
                    name="content"
                    onChange={handleContentChange}
                    style={{ borderColor: contentBorderColor }}
                    className={`input-field `}></textarea>
                </div>
                <div className="term">
                  <p>
                    By click send means accept to DNBC{" "}
                    <a href="#">terms of use</a>
                  </p>
                </div>
                <div className="submit">
                  <button
                    type="submit"
                    onClick={handleLinkClick}
                    value="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-5">
            <div className="box-right container">
              <b className="title-heading-right">About Us</b>
              <div className="content-aboutus">
                <div>
                  <span>
                    <b>Date of establishment:</b>February 20, 2011
                  </span>{" "}
                  <br />
                  <span>
                    <b>Editor-in-chief:</b>Dang Quan
                  </span>{" "}
                  <br />
                  <span>
                    <b>The editorial office:</b>1 Raffles Place, #40-02, One
                    Raffles Place, Office Tower, 1, Singapore
                  </span>
                  <br />
                  <span>
                    <b>Hotline:</b>(+65) 202 861 0737
                  </span>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.818203969154!2d103.84881237448505!3d1.2829076987048977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da194f4d47047d%3A0x22885ec1c78915a8!2sDNBC%20Financial%20Group!5e0!3m2!1svi!2s!4v1705506806288!5m2!1svi!2s"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <hr />
                <div>
                  <span className="inVietNam">
                    <b>DNBC representative office in VietNam</b>
                  </span>
                  <br />
                  <span>
                    8A Ton That Thuyet, My Dinh 2 Ward, Nam Tu Liem District,
                    Hanoi
                  </span>{" "}
                  <br />
                  <span>
                    <b>Hotline:</b>(+84) 383 240 511
                  </span>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.0483045273522!2d105.78100923850062!3d21.028820095155115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab00954decbf%3A0xdb4ee23b49ad50c8!2zRlBUIEFwdGVjaCBIw6AgTuG7mWkgLSBI4buHIHRo4buRbmcgxJHDoG8gdOG6oW8gbOG6rXAgdHLDrG5oIHZpw6puIHF14buRYyB04bq_!5e0!3m2!1svi!2s!4v1705506551853!5m2!1svi!2s"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeedbackForm;
const handleLinkClick = () => {
  window.scrollTo(0, 0);
};
