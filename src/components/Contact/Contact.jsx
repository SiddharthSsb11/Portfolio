import React, { useRef, useState } from "react";
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
    e.preventDefault(); console.log(form.current.Contact_Name.value, form.current)
    await emailjs
      .sendForm(
        "service_8lszf98",
        "template_zhyv93r",
        e.target,
        "user_iadVTZnwJAu26YqL7E6or"
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
    <React.Fragment>
      {submitSuccess ? (
        <ContactSubmitWrapper>
          <Lottie options={defaultOptions} width={48} height={48} />
        </ContactSubmitWrapper>
      ) : (
        ""
      )}
      <Zoom>
        <ContactWrapper id={props.id}>
          <ContactData style={{padding:"1rem"}}>
            <ContactHeading style={{padding:"1rem", fontSize:"2rem"}}>Get in Touch</ContactHeading>
            <ContactHeading style={{ color: '#64FFDA', textDecoration:"none", fontSize:"24px", border: '4px solid #64FFDA', padding: '10px', borderRadius: "12px", letterSpacing: '1px'}}>📧 Email: siddharthsb101@gmail.com </ContactHeading>
            <ContactHeading style={{ color: '#64FFDA', textDecoration:"none", fontSize:"24px", border: '4px solid #64FFDA', padding: '10px', borderRadius: "12px", marginTop:"1rem", letterSpacing: '1px'}}>📞 Phone: 7742705662  </ContactHeading>
            
            {/* <ContactForm ref={form} onSubmit={sendEmail} action="">
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
            </ContactForm> */}
          </ContactData>
        </ContactWrapper>
      </Zoom>
    </React.Fragment>
  );
};

export default Contact;
