import Links from "../../components/Links/Links";
import "./Contact.scss";
import earth from "../../assets/svgs/earth.svg";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2 className="contact__title">Contact Me</h2>
      <a className="contact__anchor" href="mailto:sammyjacobscontact@gmail.com">
        Get in touch!
      </a>
      <img className="contact__earth" src={earth} alt="" />
      <Links />
    </div>
  );
};

export default Contact;
