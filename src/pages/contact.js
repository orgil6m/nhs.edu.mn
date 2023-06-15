/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from "react";
import Header from "../components/header";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Footer from "../components/footer";
import cover2 from "../../public/assets/images/cover2.jpg";
import cover3 from "../../public/assets/images/cover3.jpg";
import { useForm } from "react-hook-form";
import MyTitle from "../components/title";
import { contactLocales } from "../i18n/locales";
import { useRouter } from "next/router";
import MetaHead from "../components/metaHead";
const Contact = () => {
  const router = useRouter();
  const locale = router.locale === "en" ? "1" : "0";
  const [count, setCount] = useState(0);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  const inputStyle =
    "bg-white/5 backdrop-blur border border-white/20 text-white/80 rounded w-full p-2.5 outline-none focus:border-primary placeholder:font-light placeholder:text-white/40";
  const images = [cover2.src, cover3.src];

  const inputs = [
    {
      label: contactLocales[locale].name.label,
      type: "text",
      placeholder: contactLocales[locale].name.placeholder,
      options: { required: true },
    },
    {
      label: contactLocales[locale].email.label,
      type: "email",
      placeholder: contactLocales[locale].email.placeholder,
      options: {
        required: true,
        pattern:
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      },
    },
    {
      label: contactLocales[locale].number.label,
      type: "number",
      placeholder: contactLocales[locale].number.placeholder,
      options: { required: true, maxLength: 8 },
    },
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) =>
        prevCount >= images.length - 1 ? 0 : prevCount + 1
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const center = {
    lat: 47.92215495,
    lng: 106.92383855,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  });

  const markers = [
    { lat: 47.9235595, lng: 106.9203655 },
    { lat: 47.9212154, lng: 106.9274709 },
  ];

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      <MetaHead title="Бидэнтэй холбогдох | " />
      <Header />

      <div
        className="w-full md:h-[32rem] h-[14rem] bg-cover bg-center "
        style={{
          backgroundImage: `url(${images[count]})`,
        }}
      ></div>

      <div className="responsive-padding w-full py-20 mb-20 flex flex-col items-center">
        <MyTitle
          row1={contactLocales[locale].labels[0]}
          row2={contactLocales[locale].labels[1]}
          color="primary"
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-1/2 flex flex-col gap-5"
        >
          {inputs.map((row, index) => (
            <div className="flex flex-col gap-1" key={index}>
              <label className="text-lg">{row.label} :</label>
              <input
                className={inputStyle}
                {...register(row.label, row.options)}
                placeholder={row.placeholder}
                type={row.type}
              />
            </div>
          ))}
          <div className="flex flex-col gap-1">
            <label className="text-lg">
              {contactLocales[locale].message.label} :
            </label>
            <textarea
              className={`${inputStyle} h-40 resize-none`}
              placeholder={contactLocales[locale].message.placeholder}
              {...register("Message", { required: true })}
              type="text"
            />
          </div>
          <button
            className="w-full p-2 bg-primary/40 hover-transition hover:bg-primary mt-4 font-bold text-lg"
            type="submit"
            onClick={onSubmit}
          >
            {contactLocales[locale].send}
          </button>
        </form>
      </div>
      {/* {isLoaded ? (
        <GoogleMap
          mapContainerClassName="w-full h-[32rem]"
          center={center}
          onLoad={onLoad}
          onUnmount={onUnmount}
          zoom={16}
        >
          {markers.map((row, index) => (
            <Marker key={index} position={row} />
          ))}
        </GoogleMap>
      ) : (
        <></>
      )} */}
      <Footer />
      <div className="absolute md:w-1/2 w-full md:scale-100 scale-[150%] rounded-full aspect-square md:blur-[20rem] blur-[4rem] bg-gradient-to-b from-primary opacity-[40%] md:-right-1/4 -z-10 md:top-0 top-[18%] -left-1/4"></div>
      <div className="absolute w-full rounded-full aspect-square md:blur-[20rem] blur-[4rem] bg-gradient-to-b from-pink  md:opacity-[30%] opacity-40  md:-right-1/4 md:top-[70%] top-[85%] md:scale-100 scale-[150%] -right-1/2 -z-30"></div>
    </div>
  );
};

export default Contact;
