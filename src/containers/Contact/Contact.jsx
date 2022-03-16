import "./Contact.scss";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2 className="page-title">Contact Me</h2>
      <form className="contact-form">
        <fieldset className="contact-form__field">
          <legend className="contact-form__input-name">First name</legend>
          <input
            className="contact-form__input"
            type="text"
            placeholder="John"
            required
          />
        </fieldset>
        <fieldset className="contact-form__field">
          <legend className="contact-form__input-name">Last name</legend>
          <input
            className="contact-form__input"
            type="text"
            placeholder="Doe"
            required
          />
        </fieldset>
        <fieldset className="contact-form__field">
          <legend className="contact-form__input-name">Email</legend>
          <input
            className="contact-form__input"
            type="email"
            placeholder="johndoe@gmail.com"
            required
          />
        </fieldset>
        <fieldset className="contact-form__field">
          <legend className="contact-form__input-name">Message</legend>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="contact-form__textarea"
            placeholder="Write your message here..."
            required
          ></textarea>
        </fieldset>
        <input type="submit" className="contact-form__submit" />
      </form>
    </div>
  );
};

export default Contact;
