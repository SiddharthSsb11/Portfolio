import styled from "styled-components";
import { primary, secondary, backgroundDark } from "../Shared/colorScheme";

export const ContactWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  z-index: 5;

  @media (max-width: 768px) {
    width: 100vw;
    overflow-x: hidden;
  }
`;
export const ContactData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${secondary};
  position: absolute;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${secondary};
  }

  &::before,
  &::after {
    content: "";
    width: 107%;
    height: 107%;
    position: absolute;
    z-index: 0;
    border: 2px solid ${primary};
    transition: 0.375s all ease-in-out;
  }

  &::before {
    transform: translate(7px, 7px);
    border: 2px solid ${secondary};
    z-index: 0;
  }

  &::after {
    background: ${backgroundDark};
  }

  &:hover::before,
  &:focus::before {
    transform: translate(0px, 0px);
  }
`;
export const ContactHeading = styled.h1`
  font-family: Sora-SemiBold;
  color: ${secondary};
  text-align: center;
  letter-spacing: 0.05mm;
  z-index: 1;
  padding: 0.5rem 0 1rem 0;
`;
export const ContactForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  z-index: 1;
`;
export const ContactInput = styled.input`
  padding: 0.5rem;
  border: 2px solid ${primary};
  outline: none;
  background: transparent;
  font-size: 1rem;
  font-family: Sora-SemiBold;
  color: ${secondary};
  vertical-align: top;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  z-index: 1;
  transition: 0.375s all ease-in-out;

  &:hover,
  &:focus {
    border: 2px solid ${secondary};
  }

  @media (max-width: 768px) {
    width: 75vw;
  }
`;

export const ContactInputMessage = styled.textarea`
  padding: 0.5rem;
  border: 2px solid ${primary};
  outline: none;
  background: transparent;
  font-size: 1rem;
  font-family: Sora-SemiBold;
  color: ${secondary};
  vertical-align: top;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  z-index: 1;
  resize: none;
  transition: 0.375s all ease-in-out;

  &:hover,
  &:focus {
    border: 2px solid ${secondary};
  }

  @media (max-width: 768px) {
    width: 75vw;
  }
`;
export const ContactSubmitWrapper = styled.div`
  display: block;
  position: fixed;
  top: 5%;
  left: 50%;
  margin-left: -24px;
  z-index: 20;

  @media (max-width: 768px) {
    top: 10%;
  }
`;
export const ContactSubmit = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: transparent;
  border: 2px solid ${primary};
  outline: none;
  color: ${secondary};
  font-family: Sora-SemiBold;
  font-size: 1.15rem;
  cursor: pointer;
  z-index: 1;
  transition: 0.375s all ease-in-out;

  &:hover,
  &:focus {
    border: 2px solid ${secondary};
  }

  @media (max-width: 768px) {
    width: 75vw;
  }
`;
