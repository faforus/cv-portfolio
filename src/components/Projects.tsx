import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const myDivRef = useRef<HTMLDivElement | null>(null);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);

  const handleScroll = () => {
    if (myDivRef.current) {
      const currentPosition = myDivRef.current.scrollLeft;
      setScrollPosition(currentPosition);
    }
  };

  useEffect(() => {
    setPageWidth((myDivRef.current?.offsetWidth || 0) * 5);
  }, [pageWidth, scrollPosition]);

  useEffect(() => {
    if (myDivRef.current) {
      myDivRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (myDivRef.current) {
        myDivRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollPosition]);

  function scroll(direction: "left" | "right" | "up" | "down") {
    if (myDivRef.current) {
      switch (direction) {
        case "left":
          myDivRef.current.scrollBy({
            left: -myDivRef.current.clientWidth * 0.3,
            behavior: "smooth",
          });
          break;
        case "right":
          myDivRef.current.scrollBy({
            left: myDivRef.current.clientWidth * 0.3,
            behavior: "smooth",
          });
          break;
        case "up":
          myDivRef.current.scrollBy({
            top: myDivRef.current.clientHeight,
            behavior: "smooth",
          });
          break;
        case "down":
          myDivRef.current.scrollBy({
            top: -myDivRef.current.clientHeight,
            behavior: "smooth",
          });
          break;
        default:
          break;
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="viewportHeight relative flex overflow-hidden flex-col text-left max-w-full justify-evenly mx-auto items-center z-0"
    >
      {scrollPosition >= pageWidth / 5 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="w-8 h-8 z-50 absolute left-2"
          onClick={() => {
            scroll("left");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 md:w-8 md:h-8 md:right-10 cursor-pointer"
            color="#E57C23"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </motion.div>
      )}

      {scrollPosition < pageWidth && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className={`w-8 h-8 z-50 absolute right-2 ${
            scrollPosition === 0 ? "animate-bounce" : ""
          }`}
          onClick={() => {
            scroll("right");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 md:w-8 md:h-8 md:right-10 cursor-pointer z-20"
            color="#E57C23"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </motion.div>
      )}

      <div className="mt-[75px] h-[75px] flex items-center justify-center">
        <h3 className="uppercase tracking-[20px] text-center textTwoColor text-2xl cursor-default">
          Projects
        </h3>
      </div>
      <div
        ref={myDivRef}
        className="flex h-full relative w-full overflow-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#E8AA42]/80"
      >
        <div className="-mt-[95px] w-full flex flex-shrink-0 items-center justify-center snap-center flex-col space-y-5 p-6 md:p-44 h-screen">
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="image/wielechowski.net.jpg"
            alt="Photography Website - I built this website from scratch, and all the photographs used in the project were taken and edited by me"
            className="max-w-[80%] max-h-[30vh] rounded-md md:rounded-xl"
          />
          <div className="space-y-2 md:space-y-2 px-0 md:px-10 max-w6xl">
            <h4 className="text-base md:text-2xl text-center tracking-widest uppercase textThreeColor">
              Project <span className="textOneColor">1</span>
            </h4>
            <h4 className="text-2xl md:text-4xl font-semibold text-center">
              WIELECHOWSKI.NET
            </h4>
            <p className="text-sm md:text-lg text-center tracking-widest textTwoColor">
              My own original photography portfolio website
              <br />
              fully polished and made from scratch!
              <br />
              <br />
              LIVE:{" "}
              <a
                className="textThreeColor hover:text-[#E57C23]"
                href="https://wielechowski.net/"
              >
                www.wielechowski.net
              </a>
              <br />
              <br />
              GitHub:{" "}
              <a
                className="textThreeColor hover:text-[#E57C23]"
                href="https://github.com/faforus/wielechowski.ts"
              >
                faforus/wielechowski.ts
              </a>
            </p>
            <p className="text-sm md:text-lg text-center tracking-widest"></p>
          </div>
        </div>
        <div className="-mt-[95px] w-full flex flex-shrink-0 items-center justify-center snap-center flex-col space-y-5 p-6 md:p-44 h-screen">
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="image/monopoly.jpg"
            alt="This is my original implementation of the classic Monopoly board game. I embarked on this project when I was only one month into learning JavaScript."
            className="max-w-[80%] max-h-[30vh] rounded-md md:rounded-xl"
          />
          <div className="space-y-2 md:space-y-2 px-0 md:px-10 max-w6xl">
            <h4 className="text-base md:text-2xl text-center tracking-widest uppercase textThreeColor">
              Project <span className="textOneColor">2</span>
            </h4>
            <h4 className="text-2xl md:text-4xl font-semibold text-center">
              FIFIPOLY
            </h4>
            <p className="text-sm md:text-lg text-center tracking-widest textTwoColor">
              Monopoly Board Game
              <br />
              <span className="text-[0.85rem]">
                Fully functional Monopoly game. The game is entirely my own
                creation, without any guidance or tutorials on how to structure
                the game and implement logic.
              </span>
              <br />
              <br />
              DEMO:{" "}
              <a
                className="textThreeColor hover:text-[#E57C23]"
                href="https://fifipoly.web.app/"
              >
                fifipoly.web.app
              </a>
              <br />
              <br />
              GitHub:{" "}
              <a
                className="textThreeColor hover:text-[#E57C23]"
                href="https://github.com/faforus/monopoly"
              >
                faforus/monopoly
              </a>
            </p>
            <p className="text-sm md:text-lg text-center tracking-widest"></p>
          </div>
        </div>
        <div className="-mt-[95px] w-full flex flex-shrink-0 items-center justify-center snap-center flex-col space-y-5 p-6 md:p-44 h-screen">
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="image/reactpoly.jpg"
            alt="In development - This is an improved react version of Monopoly"
            className="max-w-[80%] max-h-[30vh] rounded-md md:rounded-xl"
          />
          <div className="space-y-2 md:space-y-2 px-0 md:px-10 max-w6xl">
            <h4 className="text-base md:text-2xl text-center tracking-widest uppercase textThreeColor">
              Project <span className="textOneColor">3</span>
            </h4>
            <h4 className="text-2xl md:text-4xl font-semibold text-center">
              FIFIPOLY v2
            </h4>
            <p className="text-sm md:text-lg text-center tracking-widest textTwoColor">
              React version of monopoly
              <br />
              This project is in the early stages of development and does not
              yet have any logic implementation.
              <br />
              <br />
              LIVE:{" "}
              <a
                className="textThreeColor hover:text-[#E57C23]"
                href="https://reactpoly.web.app/"
              >
                reactpoly.web.app
              </a>
              <br />
              <br />
              GitHub:{" "}
              <a
                className="textThreeColor hover:text-[#E57C23]"
                href="https://github.com/faforus/reactpoly"
              >
                faforus/reactpoly
              </a>
            </p>
            <p className="text-sm md:text-lg text-center tracking-widest"></p>
          </div>
        </div>
        <div className="-mt-[95px] w-full flex flex-shrink-0 items-center justify-center snap-center flex-col space-y-5 p-6 md:p-44 h-screen">
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="image/react meals.jpg"
            alt="React shopping cart using context and HTTP requests"
            className="max-w-[80%] max-h-[30vh] rounded-md md:rounded-xl"
          />
          <div className="space-y-2 md:space-y-2 px-0 md:px-10 max-w6xl">
            <h4 className="text-base md:text-2xl text-center tracking-widest uppercase textThreeColor">
              Project <span className="textOneColor">4</span>
            </h4>
            <h4 className="text-2xl md:text-4xl font-semibold text-center">
              REACT MEALS
            </h4>
            <p className="text-sm md:text-lg text-center tracking-widest textTwoColor">
              React course project
              <br />
              Shopping cart with context and HTTP requests.
              <br />
              <br />
              LIVE:{" "}
              <a
                className="textThreeColor hover:text-[#E57C23]"
                href="https://food-app-with-http-requests.web.app/"
              >
                food-app-with-http-requests.web.app
              </a>
              <br />
              <br />
              GitHub:{" "}
              <a
                className="textThreeColor hover:text-[#E57C23]"
                href="https://github.com/faforus/food-app-cart-with-http"
              >
                faforus/food-app-cart-with-http
              </a>
            </p>
            <p className="text-sm md:text-lg text-center tracking-widest"></p>
          </div>
        </div>
        <div className="-mt-[95px] w-full flex flex-shrink-0 items-center justify-center snap-center flex-col space-y-5 p-6 md:p-44 h-screen">
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="image/meetups.jpg"
            alt="Next.js meetups app using mongodb"
            className="max-w-[80%] max-h-[30vh] rounded-md md:rounded-xl"
          />
          <div className="space-y-2 md:space-y-2 px-0 md:px-10 max-w6xl">
            <h4 className="text-base md:text-2xl text-center tracking-widest uppercase textThreeColor">
              Project <span className="textOneColor">5</span>
            </h4>
            <h4 className="text-2xl md:text-4xl font-semibold text-center">
              NEXT.JS MEETUPS
            </h4>
            <p className="text-sm md:text-lg text-center tracking-widest textTwoColor">
              Next.js course project
              <br />
              Meetups app with MongoDB.
              <br />
              <br />
              LIVE:{" "}
              <a
                className="textThreeColor hover:text-[#E57C23]"
                href="https://next-js-meetup-app-nine.vercel.app/"
              >
                next-js-meetup-app-nine.vercel.app
              </a>
              <br />
              <br />
              GitHub:{" "}
              <a
                className="textThreeColor hover:text-[#E57C23]"
                href="https://github.com/faforus/next-js-meetup-app"
              >
                faforus/next-js-meetup-app
              </a>
            </p>
            <p className="text-sm md:text-lg text-center tracking-widest"></p>
          </div>
        </div>
        <div className="-mt-[95px] w-full flex flex-shrink-0 items-center justify-center snap-center flex-col space-y-5 p-6 md:p-44 h-screen">
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="image/reduxcart.jpg"
            alt="Redux shopping cart with firebase database"
            className="max-w-[80%] max-h-[30vh] rounded-md md:rounded-xl"
          />
          <div className="space-y-2 md:space-y-2 px-0 md:px-10 max-w6xl">
            <h4 className="text-base md:text-2xl text-center tracking-widest uppercase textThreeColor">
              Project <span className="textOneColor">6</span>
            </h4>
            <h4 className="text-2xl md:text-4xl font-semibold text-center">
              REDUX CART
            </h4>
            <p className="text-sm md:text-lg text-center tracking-widest textTwoColor">
              Redux course project
              <br />
              Shopping cart with HTTP requests and Firebase Database.
              <br />
              <br />
              LIVE:{" "}
              <a
                className="textThreeColor hover:text-[#E57C23]"
                href="https://advanced-redux-47538.web.app/"
              >
                advanced-redux-47538.web.app
              </a>
              <br />
              <br />
              GitHub:{" "}
              <a
                className="textThreeColor hover:text-[#E57C23]"
                href="https://github.com/faforus/advanced-redux-food-app"
              >
                faforus/advanced-redux-food-app
              </a>
            </p>
            <p className="text-sm md:text-lg text-center tracking-widest"></p>
          </div>
        </div>
      </div>
      <div className="w-full absolute top-[25%] md:top-[30%] bg-[#E57C23]/10 left-0 h-[300px] md:h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
