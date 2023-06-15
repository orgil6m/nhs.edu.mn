import React from "react";
import { useRouter } from "next/router";
import { landingLocales } from "../../i18n/locales";

const Landing = () => {
  const router = useRouter();
  const locale = router.locale === "en" ? "1" : "0";
  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden mask-gradient z-20">
      <LandingOrbit />
      <LandingText text={landingLocales[locale].fly.label} />
    </div>
  );
};

export default Landing;

const LandingText = ({ text }) => {
  return (
    <div className="relative w-full flex justify-center items-center z-30">
      <span className="landing-text grad-to-bottom 2xl:translate-y-36 translate-y-24 opacity-10">
        {text}
      </span>
      <span className="landing-text grad-to-bottom 2xl:translate-y-24 translate-y-16 opacity-30">
        {text}
      </span>
      <span className="landing-text grad-to-bottom 2xl:translate-y-12 translate-y-8 opacity-50">
        {text}
      </span>
      <span className="uppercase xl:text-[6rem] text-[3.5rem] font-bold 2xl:text-stroke-white text-stroke-white-sm absolute">
        {text}
      </span>
      <span className="landing-text 2xl:-translate-y-36 -translate-y-24 grad-to-top opacity-10">
        {text}
      </span>
      <span className="landing-text 2xl:-translate-y-24 -translate-y-16 grad-to-top opacity-30">
        {text}
      </span>
      <span className="landing-text 2xl:-translate-y-12 -translate-y-8 grad-to-top opacity-50">
        {text}
      </span>
    </div>
  );
};

const LandingOrbit = () => {
  const classString =
    "hidden from-yellow/60 to-yellow from-green/60 to-green from-blue/60 to-blue from-primary/60 to-primary  -left-[16px] -right-[16px -top-[16px] left-1/2 -bottom-[10px] w-[16px]";
  return (
    <div className="absolute inset-0 w-screen h-screen flex items-center justify-center orbit-animation z-30 ">
      <div className={classString} />
      <div className="xl:h-5/6 h-[49%] aspect-square rounded-full border border-white/10 relative z-30">
        <Planet
          size="16"
          color="green"
          position1="-right-[8px]"
          position2="top-1/2"
        />
        <div className="scale-[120%] h-full aspect-square rounded-full border border-white/10 relative ">
          <Planet
            size="16"
            color="blue"
            position1="-top-[8px]"
            position2="left-1/2"
          />
          <div className="scale-[120%] h-full aspect-square rounded-full border border-white/10  relative ">
            <Planet
              size="16"
              color="primary"
              position1="-bottom-[8px]"
              position2="left-1/2"
            />
            <div className="scale-[120%] h-full aspect-square rounded-full border border-white/10  relative ">
              <Planet
                size="16"
                color="yellow"
                position1="-left-[8px]"
                position2="top-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Planet = ({ size, color, position1, position2 }) => {
  const s1 = parseInt(parseInt(size) / 2);

  return (
    <div
      className={`planet w-[${size}px] glow-shadow-${color} aspect-square rounded-full bg-gradient-to-tr blur-[1px] backdrop-blur-lg shadow-lg planet-animation
       from-${color}/60 to-${color} 
      absolute ${position1} ${position2}`}
    />
  );
};
