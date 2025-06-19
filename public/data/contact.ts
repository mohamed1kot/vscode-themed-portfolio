import {
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export const receiver_email = "mohamedamgedkhotaby@gmail.com"; // Your email for recieving emails using the email service.
// The emails are sent using a personally developed email api: https://github.com/KareemEhab/email-sender
// Feel free to clone the email service as well and deploy your own, you'll find all the steps in the README there.
// Make sure to update /src/utils/sendEmail.ts with your own deployed link.

export const contactInfo = [
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: "+20 100 829 8332",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+20 100 829 8332",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/mohamed1kot",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mohamed-amged-24a959245",
  },
];
