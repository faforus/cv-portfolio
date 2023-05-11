import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg  items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <motion.img
        initial={{
          y: "-100",
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/image/fifi.jpg"
        alt="fifi"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">CEO of Wielechowski Fotografia</h4>
        <p className="font-bold text-center text-2xl mt-1">WIELECHOWSKI.NET</p>
        <div className="flex justify-center space-x-2 my-2">
          <img
            src="/image/fifi.jpg"
            className="h-10 w-10 rounded-full"
            alt="fifi"
          />
          <img
            src="/image/fifi.jpg"
            className="h-10 w-10 rounded-full"
            alt="fifi"
          />
          <img
            src="/image/fifi.jpg"
            className="h-10 w-10 rounded-full"
            alt="fifi"
          />
          <img
            src="/image/fifi.jpg"
            className="h-10 w-10 rounded-full"
            alt="fifi"
          />
        </div>
      </div>
      <p className="uppercase py-5 text-gray-300">Started: xxxx Ended: xxxx</p>
      <ul className="list-none space-y-4 ml-5 text-lg tracking-widest">
        <li>
          Lorem fifi Filip fifi Filip fifi Filip fifi Filip fifi Filip fifi
          Filip ipsum fifi Filip fifi Filip fifi Filip fifi Filip fifi Filip
          fifi Filip dolor fifi Filip fifi Filip fifi Filip fifi Filip sit fifi
          Filip fifi Filip fifi Filip fifi Filip fifi Filip fifi Filip amet
        </li>
        <li>
          Lorem fifi Filip fifi Filip fifi Filip fifi Filip fifi Filip fifi
          Filip ipsum fifi Filip fifi Filip fifi Filip fifi Filip fifi Filip
          fifi Filip dolor fifi Filip fifi Filip fifi Filip fifi Filip sit fifi
          Filip fifi Filip fifi Filip fifi Filip fifi Filip fifi Filip amet
        </li>
      </ul>
    </article>
  );
}

export default ExperienceCard;
