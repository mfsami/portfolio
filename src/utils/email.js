// src/email.js
import emailjs from "emailjs-com";

// Initialize EmailJS
const publicKey = "JTGEPIdvqeJtIDW-t";
const serviceID = "service_mds0sdq";
const templateID = "template_uscv1t7";

emailjs.init(publicKey);

export const sendEmail = (name, email, message) => {
  const inputFields = {
    name: name,
    email: email,
    message: message,
  };

  return emailjs.send(serviceID, templateID, inputFields).then(
    (response) => {
      console.log("Email sent successfully", response);
      return "Message Sent!";
    },
    (error) => {
      console.error("Failed to send email", error);
      return "Something went wrong";
    }
  );
};
