"use client";
import { useState } from "react";
import styles from "./contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setStatus("");

      const res = await fetch("/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(form),
});

const data = await res.json();

if (!res.ok) {
  console.log("Backend error:", data);
  throw new Error(data.error || "Failed to send message");
}

      setStatus("Message sent successfully ✅");
      setTimeout(() => {
            setStatus("");
        }, 3000);

      // reset form
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact me</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formContent}>
            <div className="formTitles">Name:</div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={styles.input}
              value={form.name}
              onChange={handleChange}
              required
            />
            <div className="formTitles">Email:</div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className={styles.input}
              value={form.email}
              onChange={handleChange}
              required
            />
            <div className="formTitles">Enter your Message:</div>
            <textarea
              name="message"
              placeholder="Your Message"
              className={styles.textarea}
              value={form.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className={styles.button}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
          <div className={styles.contactBox}>
            <p className={styles.contactText}>
              Greetings to all the recruiters and potential collaborators out
              there! 👋
              <br></br>
              <br></br>
              I'm always open to new opportunities and collaborations. Whether
              you have a question, want to discuss a project, or just want to
              say hi, feel free to reach out!
            </p>
            <div className={styles.contactIcons}>
                <div className={styles.contactMail}> 
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:ayontikapal@gmail.com" target="_blank">
                  <p className={styles.contactMailText}>ayontikapal@gmail.com</p>
                </a>
                </div>
              <div className={styles.contactIconsText}>My Socials:</div>
              <div className={styles.iconsContainer}>
                <a
                  href="https://www.linkedin.com/in/ayontikapal/"
                  target="_blank"
                >
                  <img
                    src="https://www.svgrepo.com/show/157006/linkedin.svg"
                    alt="LinkedIn"
                    className={styles.icons}
                  />
                </a>
                <a href="https://github.com/Ayontikapal" target="_blank">
                  <img
                    src="https://www.svgrepo.com/show/449764/github.svg"
                    alt="GitHub"
                    className={styles.icons}
                  />
                </a>
                <a href="https://www.instagram.com/a_pal07" target="_blank">
                  <img
                    src="https://www.svgrepo.com/show/452229/instagram-1.svg"
                    alt="Instagram"
                    className={styles.icons}
                  />
                </a>
              </div>
            </div>
          </div>
        </form>
        {status && <p className={styles.status}>{status}</p>}
      </div>
    </section>
  );
}
