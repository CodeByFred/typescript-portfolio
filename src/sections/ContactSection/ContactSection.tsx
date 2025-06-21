import classes from "./ContactSection.module.scss";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import ContactForm from "../../components/ContactForm/ContactForm";

const ContactSection = () => {
  return (
    <section className={classes.contact} id="contact">
      <SectionHeading>Get in Touch</SectionHeading>
      <div className={classes.container}>
        <p className={classes.text}>
          I'd love to hear from you. Fill out the form and I'll reply soon!
        </p>
        <ContactForm />
      </div>
    </section>
  );
};
export default ContactSection;
