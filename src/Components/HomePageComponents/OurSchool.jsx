import React from "react";

const OurSchool = () => {
  const schoolItems = [
    {
      id: 1,
      title: "software & cloud engineering",
      description: "Your learning path to endless growth our learning path to endless growth ",
      image: "/our-school-01.svg",
      buttonText: "Learn more",
      path: "",
    },
    {
      id: 2,
      title: "networking hardware",
      description: "Your learning path to endless growth our learning path to endless growth ",
      image: "/our-school-02.svg",
      buttonText: "Learn more",
      path: "",
    },
    {
      id: 3,
      title: "design & digital marketing",
      description: "Your learning path to endless growth our learning path to endless growth ",
      image: "/our-school-03.svg",
      buttonText: "Learn more",
      path: "",
    },
    {
      id: 4,
      title: "data science",
      description: "Your learning path to endless growth our learning path to endless growth ",
      image: "/our-school-04.svg",
      buttonText: "Learn more",
      path: "",
    },
  ];
  return (
    <section className="w-full bg-gray-800 py-12 ">
      <div className="w-10/12 mx-auto space-y-10">
        <h2 className="text-center text-[#39B54A] capitalize font-extrabold text-4xl">our schools</h2>
        <div className="grid grid-cols-4 gap-10 justify-between items-center">
          {schoolItems.map((item) => (
            <div key={item.id} className="space-y-4 text-white w-full">
              <img src={item.image} alt={item.image} className="w-full h-full"/>
              <h3 className="uppercase font-semibold text-3xl">{item.title}</h3>
              <p className="text-justify">{item.description}</p>
              <button className="w-full  bg-gradient-to-tr from-[#446e40] to-[#83D47B] text-white font-semibold px-6 py-2 rounded-xl">{item.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSchool;
