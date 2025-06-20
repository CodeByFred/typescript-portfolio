import classes from "./ContactSection.module.scss";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const ContactSection = () => {
  return (
    <section className={classes.contact} id="contact">
      <SectionHeading>Get in Touch</SectionHeading>
      <p>I'd love to hear from you. Fill out the form and I'll reply soon!</p>
    </section>
  );
};
export default ContactSection;
