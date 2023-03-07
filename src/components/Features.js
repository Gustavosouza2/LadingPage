import React from "react";

//import feature Data
import { featuresData } from "../data";

//import icons
import { BsArrowRight } from "react-icons/bs";

const Features = () => {
  const { title, subtitle, list } = featuresData;

  return (
    <section className="my-[70px] xl:my-[150px]">
      <div className="container mx-auto">
        {/* Text */}
        <div className="text-center">
          <h2
            className="h2 mb-6 xl:mb-12"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            {title}
          </h2>
          <p
            className="lead max-w-[585] mx-auto mb-16 xl:mb-24"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            {subtitle}
          </p>
        </div>
        {/* feature list */}
        <div className="grid grid-cols-1 gap-[50px] xl:grid-cols-2">
          {list.map((feature, index) => {
            // Features Structrure
            const { image, bgImage, title, description, linkText, delay } =
              feature;
            return (
              <div
                className="w-full max-w-[530px] h-[360px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto"
                key={index}
                data-aos="zoom-in"
                data-aos-offset="100"
                data-aos-delay={delay}
              >
                {/* Background Images */}
                <div className="xl:flex absolute top-0 right-0 -z-100">
                  <img src={bgImage} alt="" />
                </div>
                {/* Image Icons */}
                <div
                  className="max-w-[120px] xl:mr-7 xl:max-w-[230px]"
                  data-aos="zoom-in-right"
                  data-aos-delay={delay}
                >
                  <img src={image} alt="" />
                </div>
                {/* Text */}
                <div className="max-w-[220px]">
                  <h3 className="h3 mb-4">{title}</h3>
                  <p className="font-light italic gap-x-2 group">
                    {description}
                  </p>
                  <div className="flex items-center gap-x-2 group mt-2">
                    <a className="text-primary font-bold" href="">
                      {linkText}
                    </a>
                    <BsArrowRight className="text-xl text-accent-primary group-hover:ml-[5px] transition-all" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
