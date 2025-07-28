// Hero

import { div, section } from "framer-motion/client";
import { OurOfferings } from "../Components/HomePageComponents/OurCourses";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer"

export const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/the-study.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "20px",
      }}
      className="w-full py-12 text-white flex justify-center items-center"
    >
      <div className="flex flex-col gap-8  w-10/12 space-y-4 py-32 items-center justify-between">
        <h2 className="font-semibold text-4xl text-white ">About Us</h2>
        <p className="font-medium w-1/2 text-center mx-auto">
          We believe that when you are properly trained, you are able to perform
          diligently. our organization is here to fill that gap
        </p>
      </div>
    </section>
  );
};

export const WhoWeAre = () => {
  return (
    <section className="w-full py-12 ">
      <div className=" flex items-center gap-12 w-10/12 text-white mx-auto ">
        {/* The Left side */}
        <div className="  w-1/2 ">
          <div className="  ">
            <img
              src="/who-we-are.jpg"
              alt="hero-who-we-are.svg"
              className="w-[570] h-[487px] mx-auto rounded-3xl "
            />
          </div>
          <div className="bg-green-700 border-2  rounded-3xl px-10 py-5 w-8/12 mx-auto  -translate-y-1/2 items-center flex">
            <p className="font-medium text-base">
              Here, at citaville we do not only train and coach, we provide
              personalized experience by holding your hands all through the
              process
            </p>
          </div>
        </div>

        {/* The right side */}
        <div className="w-1/2 space-y-12">
          <h2 className="font-extrabold text-3xl ">Who we are</h2>
          <p className="w-4/6">
            At Citaville, we are a forward-thinking tech education hub committed to empowering individuals with industry-relevant digital skills. Through innovative learning experiences and hands-on training, we prepare learners to thrive in today’s fast-evolving digital world
          </p>
          <button className="bg-green-600 hover:bg-green-700 transition px-6 py-2 rounded font-semibold text-white bg-gradient-to-tr from-[#446e40] to-[#83D47B]">
            Register now
          </button>
        </div>
      </div>
    </section>
  );
};

export const Subscribe = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/Frame 1000001375.png')",

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full bg-gray-800 py-20  text-white "
    >
      <div className="w-10/12 mx-auto space-y-8">
        <h2 className="font-extrabold text-3xl w-96 ">
          subscribe to be the first to hear about our juicy offers
        </h2>
        <form className="flex flex-col gap-6 w-96">
          <label htmlFor="mailto:info.laptopcityonline@gmail.com">Email Address</label>
          <input type="email" className="bg-white" />
          <button className="px-6 py-2 rounded bg-gradient-to-tr from-[#446e40] via-[#619b5c] to-[#83D47B] font-extrabold ">
            submit
          </button>
        </form>
      </div>
    </section>
  );
};

export const WhatWeDo = () => {
  return (
    <section className="w-full py-20 bg-[#17120F] text-white">
      <div className="w-10/12 mx-auto flex flex-col md:flex-row gap-12">

      {/* Right Side - Text and Custom Bullet List */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold">What we do in pictures</h1>

          <ul className="space-y-3 list-none">
            {["Training", "Coaching"].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1 w-6 h-6 rounded bg-gradient-to-tr from-[#446e40] to-[#83D47B] shrink-0"></span>
                <span className="text-lg font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <Link to="/courses">
          <button className="self-start mt-4 bg-gradient-to-tr from-[#446e40] to-[#83D47B] px-6 py-2 rounded font-semibold text-white hover:opacity-90 transition">
            See our Courses
          </button>
          </Link>
        </div>

        {/* Left Side - 2x2 Image Grid */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          <img
            src="/what-we-do-01.svg"
            alt="img1"
            className="rounded-2xl w-full h-48 object-cover"
          />
          <img
            src="/what-we-do-02.svg"
            alt="img2"
            className="rounded-2xl w-full h-48 object-cover"
          />
          <img
            src="/what-we-do-03.svg"
            alt="img3"
            className="rounded-2xl w-full h-48 object-cover"
          />
          <img
            src="/what-we-do-04.svg"
            alt="img4"
            className="rounded-2xl w-full h-48 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <main className="bg-gray-800">
      <Hero />
      <WhoWeAre />
      < WhatWeDo />
      <OurOfferings />
      <Subscribe />
      <Footer/>
    </main>
  );
};
