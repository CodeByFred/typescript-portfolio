import classes from "./ContactSection.module.scss";
import SectionHeading from "../SectionHeading/SectionHeading";

const ContactSection = () => {
  return (
    <section className={classes.contact}>
      <SectionHeading>Get in Touch</SectionHeading>
      <p>I'd love to hear from you. Fill out the form and I'll reply soon!</p>
    </section>
  );
};
export default ContactSection;
