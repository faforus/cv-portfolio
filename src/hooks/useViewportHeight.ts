import { useEffect } from "react";

const useViewportHeight = (): void => {
  useEffect(() => {
    const setVh = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Set the initial value
    setVh();

    // Update the value whenever the window is resized
    window.addEventListener("resize", setVh);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("resize", setVh);
  }, []);
};

export default useViewportHeight;
