import React, { useState } from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

function Contact({}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [surname, setSurname] = useState("");
  const [message, setMessage] = useState("");
  const [sendingForm, setSendingForm] = useState(false);
  const [formIsSent, setFormIsSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (true) {
      setError(false);
      setSendingForm(true);
      const url = "https://sendemail-2qkjfrtbsq-uw.a.run.app";
      const data = {
        name,
        email,
        surname,
        message,
      };

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          setName("");
          setEmail("");
          setSurname("");
          setMessage("");
          setSendingForm(false);
          setFormIsSent(true);
        } else {
          throw new Error("Error sending the form.");
        }
      } catch (error) {
        console.error("Error:", error);
        setError(true);
        setSendingForm(false);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-7x px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-[1rem] md:text-4xl font-semibold text-center">
          Feel free to contact me for more information or{" "}
          <span className="underline decoration-[#f7ab0a]/50">
            the full CV.
          </span>
        </h4>
        <div className="space-y-2 md:space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#f7ab0a] w-5 h-5 md:h-7 md:w-7 animate-pulse" />
            <p className="text-[1rem] tracking-widest md:text-2xl">
              +48 722 265 649
            </p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a]  w-5 h-5 md:h-7 md:w-7 animate-pulse" />
            <p className="text-[1rem] tracking-widest md:text-2xl">
              filip.wielechowski@gmail.com
            </p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#f7ab0a]  w-5 h-5 md:h-7 md:w-7 animate-pulse" />
            <p className="text-[1rem] tracking-widest md:text-2xl">
              Gdynia, Trójmiasto
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-2 w-[100%] md:w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              placeholder="Name"
              className="contactInput"
              type="text"
              id="name"
              value={name}
              name="Name"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              placeholder="Email"
              className="contactInput"
              type="email"
              id="email"
              value={email}
              name="email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <input
            placeholder="Subject"
            className="contactInput"
            type="text"
            id="surname"
            value={surname}
            name="Surname"
            onChange={(event) => setSurname(event.target.value)}
          />
          <textarea
            placeholder="Message"
            id="message"
            value={message}
            name="message"
            onChange={(event) => setMessage(event.target.value)}
            className="contactInput resize-none h-[100px] md:h-[150px] scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80"
          />
          <button
            type="submit"
            disabled={sendingForm || formIsSent}
            className={`bg-[#f7ab0a] py-2 md:py-7 px-10 rounded-md text-black font-bold text-base md:text-lg ${
              sendingForm ? "bg-gray-400 cursor-not-allowed" : ""
            } ${error ? "bg-red-700 cursor-not-allowed" : ""} ${
              formIsSent ? "bg-green-400" : ""
            }`}
          >
            {sendingForm
              ? "Sending..."
              : error
              ? "Error"
              : formIsSent
              ? "Sent"
              : "Submit"}
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
