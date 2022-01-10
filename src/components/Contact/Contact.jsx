import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  ContactForm,
  ContactData,
  ContactHeading,
  ContactInput,
  ContactInputMessage,
  ContactSubmitWrapper,
  ContactSubmit,
  ContactWrapper,
} from "./ContactElements";
import Lottie from "react-lottie";
import animationData from "./lf30_editor_lrfkphqf.json";
import Zoom from "react-reveal/Zoom";

const defaultOptions = {
  loop: true,
  autoplay: true,
  name: "Loading Animation",
  render: "svg",
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Contact = (props) => {
  const form = useRef();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const sendEmail = async (e) => {
    e.preventDefault();
    await emailjs
      .sendForm(
        "service_hc3wdkt",
        "template_66befo6",
        form.current,
        "user_GRukHJlWrzoahMmlJBL3e"
      )
      .then(
        (result) => {
          form.current.Contact_Name.value = "";
          form.current.Contact_Email.value = "";
          form.current.Contact_Subject.value = "";
          form.current.Contact_Message.value = "";
          setSubmitSuccess(!submitSuccess);
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 1750);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
      {submitSuccess ? (
        <ContactSubmitWrapper>
          <Lottie options={defaultOptions} width={48} height={48} />
        </ContactSubmitWrapper>
      ) : (
        ""
      )}
      <Zoom>
        <ContactWrapper id={props.id}>
          <ContactData>
            <ContactHeading>Get in Touch</ContactHeading>
            <ContactForm ref={form} onSubmit={sendEmail} action="">
              <ContactInput
                name="Contact_Name"
                height="2.5rem"
                type="text"
                width="25rem"
                autoComplete="off"
                placeholder="Name..."
                required
              />
              <ContactInput
                name="Contact_Email"
                height="2.5rem"
                type="email"
                width="25rem"
                autoComplete="off"
                placeholder="Email..."
                required
              />
              <ContactInput
                name="Contact_Subject"
                height="2.5rem"
                type="text"
                width="25rem"
                autoComplete="off"
                placeholder="Subject..."
                required
              />
              <ContactInputMessage
                name="Contact_Message"
                height="8rem"
                type="text"
                width="25rem"
                autoComplete="off"
                placeholder="Message..."
                required
              />
              <ContactSubmit type="submit" width="15rem" height="2.75rem">
                Submit
              </ContactSubmit>
            </ContactForm>
          </ContactData>
        </ContactWrapper>
      </Zoom>
    </>
  );
};

export default Contact;
