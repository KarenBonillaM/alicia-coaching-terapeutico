import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen px-4 sm:px-8 lg:px-24 flex items-center overflow-hidden">
      <div className="mx-auto w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 items-center gap-10 bg-light-beige px-6 py-16 font-body text-black-Headings">
        {/* <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12"> */}
        <div className="order-2 lg:order-1flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          {/* <div className="grid grid-rows-2 content-end col-span-4 md:col-span-8 lg:col-span-12"> */}

          <div className="text-xl text-black-Headings sm:text-2xl lg:text-3xl tracking-wide text-center">
            <p>Un espacio seguro para el</p>
            <p>bienestar de niños y adolescentes</p>
          </div>

          <button className="m-auto bg-brown-cta hover:bg-brown-darker transition duration-300 focus:bg-brown-darker rounded font-semibold text-white px-8 py-4 tracking-wide text-lg sm:text-xl">
            Agenda tú cita
          </button>
        </div>
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end lg:translate-x-16">
          <Image
            src="/images/AliciaHeroPhoto.png"
            alt="Alicia Coaching Terapéutico"
            width={350}
            height={400}
            priority
            loading="eager"
            className="w-55 sm:w-65 md:w-87.5 h-auto border border-lila-hero"
          />
        </div>
      </div>
    </section>
  );
}
