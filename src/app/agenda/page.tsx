"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import Image from "next/image";
import Spinner from "@/src/components/Spiner";

const expectations = [
  {
    img: "/images/brain.png",
    title: "Primera sesión",
    text: "Breve conversación para conocer la situación y definir objetivos",
  },
  {
    img: "/images/love.png",
    title: "Acompañamiento personalizado",
    text: "Sesiones adaptadas a la edad y necesidades emocionales",
  },
  {
    img: "/images/self-care.png",
    title: "Proceso gradual",
    text: "Un espacio seguro donde el cambio ocurre paso a paso",
  },
];

export default function Agenda() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.event?.includes("calendly")) {
        setLoading(false);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const scrollToCalendar = () => {
    document.getElementById("calendar")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="m-5 sm:m-8 md:m-20 lg:m-36">
      {/* HERO */}
      <div className="grid justify-center items-center min-h-screen bg-beige-agenda border border-beige-border justify-items-center pt-16">
        <h1 className="font-body font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black-Headings">
          Agenda tu cita
        </h1>
        <p
          className="font-body text-xl sm:text-2xl md:text-3xl lg:text-4xl text-body-shade
          px-6 sm:px-16 md:px-36 lg:px-52 text-center">
          Da el primer paso hacia el bienestar emocional de tu hijo en un
          espacio seguro y profesional.
        </p>
        <button
          onClick={scrollToCalendar}
          className="bg-brown-cta hover:bg-brown-darker transition duration-300 focus:bg-brown-darker rounded font-semibold text-white px-10 py-4 tracking-wide">
          Ver disponibilidad
        </button>
        <span className="block text-center mt-4 text-span-text text:lg md:text-xl lg:text-2xl">
          Sesiones confidenciales &middot; En linea o presencial &middot;
          Atención personalizada.
        </span>
      </div>
      {/* EXPECTATIONS */}
      <section className="grid items-center min-h-screen justify-items-center bg-beige-lighter-agenda border border-beige-border">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black-Headings text-center pb-40">
            ¿Qué puedes esperar?
          </h2>
          <div className="container px-6 m-auto">
            <div className="grid grid-cols-4 gap-4 md:grid-cols-8 lg:grid-cols-12">
              {expectations.map((item, i) => (
                <div
                  key={i}
                  className="grid justify-items-center bg-light-beige col-span-4 py-10 shadow-xl rounded">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={114}
                    height={112}
                    className="w-20 sm:w-24 md:w-32 h-auto pb-5"
                  />

                  <h2 className="text-black-Headings text-xl md:text-2xl font-semibold font-body text-center py-4 px-12">
                    {item.title}
                  </h2>

                  <p className="text-body-text px-12 text-lg md:text-xl text-center">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        id="calendar"
        className="bg-beige-light-calendar border border-beige-border py-16">
        <h2 className="font-body font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center px-8 sm:px-20 md:px-48 lg:px-64 text-black-Headings pt-16">
          Selecciona el dia y el horario que mejor se adapte a tu familia
        </h2>
        <div className="relative flex justify-center mt-10">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Spinner />
            </div>
          )}

          <div
            className={`calendly-inline-widget min-w-80 h-175 transition-opacity duration-500 ${
              loading ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            data-url={
              "https://calendly.com/aliciadelat47/30min?background_color=f9f5f5&text_color=3e3a3d&primary_color=a08a8d"
            }></div>
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
        </div>
      </section>
    </section>
  );
}
