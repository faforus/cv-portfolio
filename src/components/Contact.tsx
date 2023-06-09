import React, { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import isEmail from "validator/lib/isEmail";
import { scroll } from "@/helpers/scroll";

type Props = {};

function Contact({}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [surname, setSurname] = useState("");
  const [message, setMessage] = useState("");
  const [sendingForm, setSendingForm] = useState(false);
  const [formIsSent, setFormIsSent] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateForm()) {
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

  const validateForm = () => {
    if (name.trim().length < 3) {
      setErrorMessage("The name needs to be at least 3 characters long.");
      return false;
    }
    if (!isEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }
    if (surname.trim().length < 5) {
      setErrorMessage("The subject needs to be at least 5 characters long.");
      return false;
    }
    if (message.trim().length < 8) {
      setErrorMessage("The message needs to be at least 8 characters long.");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  return (
    <div className="viewportHeight relative min-h-[632px] md:min-h-[800px] flex flex-col px-6">
      <div className="mt-[75px] h-[75px] flex items-center justify-center">
        <h3 className="uppercase tracking-[20px] text-center textTwoColor text-2xl cursor-default -mr-[20px]">
          Contact
        </h3>
      </div>
      <div className="flex h-full flex-row items-center justify-center">
        <div className="flex flex-col space-y-5 md:space-y-10 textThreeColor">
          <h4 className="text-[1rem] md:text-3xl font-semibold text-center text-[#F8F1F1]">
            Feel free to contact me
            <br />
            for more information or{" "}
            <span className="text-[#E57C23]">the full CV.</span>
          </h4>
          <div className="space-y-2 md:space-y-5">
            <div className="flex items-center space-x-5 justify-center">
              <PhoneIcon className="text-[#E57C23] w-5 h-5 md:h-7 md:w-7" />
              <a
                className="text-[1rem] tracking-widest md:text-[1.3rem] hover:text-[#E57C23]"
                href="tel:+48722265649"
              >
                +48 722 265 649
              </a>
            </div>

            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-[#E57C23]  w-5 h-5 md:h-7 md:w-7" />
              <a
                className="text-[1rem] tracking-widest md:text-[1.3rem] hover:text-[#E57C23]"
                href="mailto:filip.wielechowski@gmail.com"
              >
                filip.wielechowski@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-5 justify-center">
              <MapPinIcon className="text-[#E57C23] w-5 h-5 md:h-7 md:w-7" />
              <p className="text-[1rem] tracking-widest md:text-[1.3rem]">
                Gdynia, Trójmiasto
              </p>
            </div>
          </div>
          <motion.form
            initial={{
              y: 100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex flex-col space-y-2 w-[100%] md:w-fit mx-auto"
          >
            {formIsSent ? (
              ""
            ) : (
              <Fragment>
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
                  className="contactInput resize-none h-[100px] md:h-[150px] scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#E57C23]/80"
                />
              </Fragment>
            )}
            {errorMessage !== "" ? <p>{errorMessage}</p> : ""}
            <button
              type="submit"
              disabled={sendingForm || formIsSent}
              className={`bg-[#E57C23] hover:bg-[#E8AA42] py-2 md:py-5 px-10 rounded-md textTwoColor font-bold text-base md:text-md ${
                sendingForm ? "bg-gray-400 cursor-not-allowed" : ""
              } ${error ? "bg-red-700 cursor-not-allowed" : ""} ${
                formIsSent ? "bg-green-600" : ""
              } ${formIsSent ? "hover:bg-green-600" : ""}`}
            >
              {sendingForm
                ? "Sending..."
                : error
                ? "Error"
                : formIsSent
                ? "Sent"
                : "Submit"}
            </button>
          </motion.form>
        </div>
      </div>
      <button
        onClick={() => {
          scroll("hero");
        }}
        className="absolute bottom-0 right-0 mb-2 mr-2 md:mb-10 md:mr-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 md:w-8 md:h-8 md:right-10 cursor-pointer z-20 -rotate-90"
          color="#E57C23"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default Contact;
