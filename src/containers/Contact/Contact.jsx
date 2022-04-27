import Links from "../../components/Links/Links";
import "./Contact.scss";
import earth from "../../assets/svgs/earth.svg";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2 className="contact__title">Contact Me</h2>
      <p>sammyjacobscontact@gmail.com</p>
      <a className="contact__anchor" href="mailto:sammyjacobscontact@gmail.com">
        Get in touch!
      </a>
      <p>or</p>
      <p>
        {"Connect with me on "}
        <a
          href="https://www.linkedin.com/in/samuel-j-66a84ba2/"
          target="_blank"
          rel="noreferrer"
          className="contact__link"
        >
          LinkedIn!
        </a>
      </p>

      <img className="contact__earth" src={earth} alt="" />
      <Links />
    </div>
  );
};

export default Contact;
