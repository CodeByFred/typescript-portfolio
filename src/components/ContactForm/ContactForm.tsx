import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./ContactForm.module.scss";
import {
  faCommentDots,
  faEnvelope,
  faPaperPlane,
  faPenToSquare,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import { useForm } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("https://formspree.io/f/xvgkyqov");

  if (state.succeeded) {
    return <div>Thank you for contacting me!</div>;
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit} method="POST">
      <fieldset className={classes.field}>
        <label htmlFor="name">
          <FontAwesomeIcon icon={faUser} /> Name
        </label>
        <input type="text" id="name" name="name" required autoComplete="off" />

        <label htmlFor="email">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </label>
        <input type="email" id="email" name="email" required autoComplete="off" />

        <label htmlFor="subject">
          <FontAwesomeIcon icon={faPenToSquare} /> Subject
        </label>
        <input type="text" id="subject" name="subject" required autoComplete="off" />

        <label htmlFor="msg">
          <FontAwesomeIcon icon={faCommentDots} /> Message
        </label>
        <textarea id="msg" name="message" rows={8} required autoComplete="off" />

        <Button variant="fill" type="submit" disabled={state.submitting}>
          <FontAwesomeIcon icon={faPaperPlane} />
          <span>Send Message</span>
        </Button>
      </fieldset>
    </form>
  );
};

export default ContactForm;
