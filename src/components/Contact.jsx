import { Link } from 'react-router-dom';
import "../style/Contact.css";

export default function Contact() {
  return (
    <div>
      <div className="contactHeader">
        <h1>Contact Us</h1>
      </div>
      <div className="contactSection">
      <p>We are excited to hear from you! Whether you're a cooking enthusiast or just curious, we're committed to providing you with the best experience on our site.</p>

      <section>
        <h2>Contact Us by Email:</h2>
        <p><strong>Email:</strong> <a href="mailto:contact@miammiam.com">contact@webimacproject.com</a></p>
        <p>We will reply as soon as possible.</p>
      </section>

      <p>Thank you for visiting our site, and we look forward to assisting you!</p>
      
      <Link to="/">Go to home page</Link>
      </div>
    </div>
  );
}
