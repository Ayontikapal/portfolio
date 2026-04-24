"use client";
import { useState } from "react";

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
    <section id="contact">
      <div className="max-w-[98vw] m-auto px-5 text-center">
        <h2 className="text-5xl font-bold text-accent mb-7">Contact me</h2>

        <form
          className="flex justify-evenly text-left flex-wrap gap-8 max-lg:justify-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2.5 w-full max-w-102.5">
            <div className="text-text after">
              Name:
            </div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input"
              value={form.name}
              onChange={handleChange}
              required
            />
            <div className="text-text after">
              Email:
            </div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input"
              value={form.email}
              onChange={handleChange}
              required
            />
            <div className="text-text after">
              Enter your Message:
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              className="input h-32.5 mb-4"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="p-3 bg-bg ring ring-accent text-lg text-text rounded-md 
              cursor-pointer hover:bg-accent hover:text-white"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
          <div className="w-full max-w-102.5 mt-5">
            <p className="text-text-secondary text-lg ring ring-accent p-5 rounded-3xl">
              Greetings to all the recruiters and potential collaborators out
              there! 👋
              <br></br>
              <br></br>
              I'm always open to new opportunities and collaborations. Whether
              you have a question, want to discuss a project, or just want to
              say hi, feel free to reach out!
            </p>
            <div className="w-full max-w-102.5 mt-5 flex flex-col ring ring-accent items-center justify-center pt-4 gap-5 rounded-3xl">
              <div className="flex items-end gap-2">
                <i className="fas fa-envelope"></i>
                <a
                  className="no-underline text-text-secondary"
                  href="mailto:ayontikapal@gmail.com"
                  target="_blank"
                >
                  ayontikapal@gmail.com
                </a>
              </div>
              <div className="text-text">My Socials:</div>
              <div className="flex mb-2">
                <a
                  href="https://www.linkedin.com/in/ayontikapal/"
                  target="_blank"
                >
                  <img
                    src="https://www.svgrepo.com/show/157006/linkedin.svg"
                    alt="LinkedIn"
                    className="h-6.25 w-6.25 m-2.5 icon"
                  />
                </a>
                <a href="https://github.com/Ayontikapal" target="_blank">
                  <img
                    src="https://www.svgrepo.com/show/449764/github.svg"
                    alt="GitHub"
                    className="h-6.25 w-6.25 m-2.5 icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </form>
        {status && (
          <p className="fixed top-5 left-[50%] -translate-x-[50%] z-20 text-sm text-white bg-accent py-3 px-5 rounded-lg shadow-lg">
            {status}
          </p>
        )}
      </div>
    </section>
  );
}
