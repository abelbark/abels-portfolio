import React, { useRef, useState } from "react";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);



    if(!form.name || !form.email || !form.message) {
      setLoading(false);
      alert('Please fill out all the fields');
      return;
    }

    emailjs.send(
      'your_code', // they are unique to user
      'template_code', 
      {
        from_name: form.name,
        to_name: 'Abel',
        form_email: form.email,
        to_email: 'email@gmail.com', // my email
        message: form.message,
      },
      'W8D9BjF21kM45fhbb'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as I can');

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong.');
    })

  };

  return (
    <section id="contact" className="c-space my-20">
      <h2 className="c-space head-text">Contact</h2>
      <div className="c-space flex flex-col gap-8 mt-12">
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 bg-black-300 border border-gray-700 p-8 rounded-lg">
          <label className="flex flex-col">
            <span className="text-white mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="py-3 px-4 bg-black-500 text-white rounded-lg"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white mb-2">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="py-3 px-4 bg-black-500 text-white rounded-lg"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white mb-2">Your Message</span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="py-3 px-4 bg-black-500 text-white rounded-lg"
            />
          </label>

          <button
            type="submit"
            className="bg-secondary py-3 px-6 rounded-lg text-gray-700 font-bold"
          >
            {loading ? "Sending..." : "Send"}
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;
