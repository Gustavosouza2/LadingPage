import React from "react";

//import Copyright Data
import { copyrightData } from "../data";

const Copyright = () => {
  const { text, icon } = copyrightData;

  return (
    <section className="mt-24 pb-12" data-aos="fade-up">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center md:text-left lg:flex-row justify-between gap-y-8">
          {/* Text */}
          <div className="text-sm font-light italica max-w-[360px]">{text}</div>
          {/* Icon */}
          <div className="-order-1 md:order-1">
            <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-accent-primary/20 cursor-pointer group">
              <div className="text-3xl text-accent-primary group-hover:scale-110 transition-all">
                {icon}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Copyright;
