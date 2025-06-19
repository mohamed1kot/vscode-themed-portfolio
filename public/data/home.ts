import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

export const homeData = {
  // To use your own photo, just place it in /public/assets and write the link as I did: eg: /assets/my_image.jpg
  // Of course it's best to convert your image file type to webp for better performance on the web!
  // The links are optional
  myImage: "/assets/my_image.webp",
  contactInfo: [
    {
      Icon: IoMdMail,
      Label: "mohamedamgedkhotaby@gmail.com",
      Link: "/contact", // This refers to the Contact page in the website, you can change it to whatever you like
    },
    {
      Icon: FaLocationDot,
      Label: "Al-Qalubia, Egypt",
      Link: "https://maps.app.goo.gl/s8PQ8JpbVc8vDwv1A", // This is just a simple location of my city
    },
    {
      Icon: FaPhoneAlt,
      Label: "+20 100 829 8332",
      Link: "tel:+201008298332", 
    },
  ],
  education: [
    {
      Icon: FaUniversity,
      Label: "Al-Azhar University",
      Link: "https://www.linkedin.com/company/alazharuniversity/",
    },
    {
      Icon: FaGraduationCap,
      Label: "Bachelor's Degree in Computer Science and Mathematics",
      Link: "https://www.linkedin.com/company/alazharuniversity/",
    },
  ],
  social: [
    {
      Icon: FaGithub,
      Label: "GitHub",
      Link: "https://github.com/mohamed1kot",
    },
    {
      Icon: FaLinkedin,
      Label: "LinkedIn",
      Link: "https://www.linkedin.com/in/mohamed-amged-24a959245/",
    }
  ],
};
