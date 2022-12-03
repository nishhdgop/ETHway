import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          What makes
          <br />
          ETHway special
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center text-white">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Quick and easy transactions:"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Make speed your best friend with ETHway! With our lucid and attractive UI, transfer crypto on the go."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Receive timely Notifications:"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="You can now be rest assured that your ethereum has safely reached your beneficiary with our Push Protocol notifications. "
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Security guaranteed. Everytime"
          icon={
            <RiHeart2Fill
              fontSize={21}
              className="text-white text-gradient font-semibold"
            />
          }
          subtitle="Take no chance with your privacy and secure your crypto with our safe payment gateway on WEB 3.0 "
        />
      </div>
    </div>
  </div>
);

export default Services;
