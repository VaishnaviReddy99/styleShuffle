import Navbar from "./Navbar";
import { useState } from "react";
import "./Contact.css";
import Faq from "react-faq-component";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const data = {
    title: "FAQ (How it works)",
    rows: [
      {
        title: "How does StyleShuffle work?",
        content: `StyleShuffle.com utilizes advanced algorithms to match users with clothing items based on their unique style preferences and color choices. Users provide input, and the system processes this data to generate tailored fashion recommendations, simplifying the process of discovering clothing that resonates with individual tastes.`,
      },
      {
        title: "How to create a new account?",
        content: `Creating an Account: Begin your journey by creating a personalized account. Click on the "Sign Up" button located at Home page and follow the prompts to input your information.
        Logging In: Already have an account? Simply click on the "Log In" button at the top right corner of the homepage and enter your credentials`,
      },
      {
        title: "How to add clothes to the digital wardrobe?",
        content:
          "User can add clothes either using upload button or can directly use web urls",
      },
    ],
  };

  const styles = {
    // bgColor: 'white',
    // titleTextColor: "blue",
    // rowTitleColor: "blue",
    rowContentColor: "grey",
    // arrowColor: "red",
    titleTextSize: "30px",
    rowContentTextSize: "16px",
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("Form Submitted:", formData); // Simulate form submission (replace with actual submission logic)
    setFormData({ name: "", email: "", message: "" }); // Clear form data after submission
  };
  return (
    <div className="App">
      <Navbar />
      <div className="contact-form">
        <Faq data={data} styles={styles} config={config} />
        <h2>Still Having questions? Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
