import { useRef } from "react";
import './contact.css';
import FacebookIcon from '../../assets/assets/facebook-icon.png';
import InstagramIcon from '../../assets/assets/instagram.png';
import youtubeIcon from '../../assets/assets/youtube.png';
import TwitterIcon from '../../assets/assets/twitter.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_tcim2v9",
          "template_54d0t0q", 
          form.current,
          "Ua_UmoRhv04ays9YL" 
        )

        .then(
          (result) => {
            console.log("Email sent successfully!", result.text);
            alert("Email sent successfully!");
            form.current.reset(); 
          },
          (error) => {
            console.error("Failed to send email:", error);
            alert("Failed to send email. Please try again.");
          }
        );
    };
  return (
    <section className="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities{" "}
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name " placeholder="Your Name "  name="from_name"/>
          <input type="email" className="email" placeholder="Your Email" name="from_email" />
          <textarea
            className="msg"
            name="message"
            rows="6"
            placeholder="Your Message "
          ></textarea>
          <button type="Submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={FacebookIcon} alt="Facebook" className="link" />
            <img src={InstagramIcon} alt="Instagram" className="link" />
            <img src={youtubeIcon} alt="Youtube" className="link" />
            <img src={TwitterIcon} alt="Twitter" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact