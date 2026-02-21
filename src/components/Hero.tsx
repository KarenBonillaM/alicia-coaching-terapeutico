import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen ml-52 mr-80">
      <div className="m-auto relative my-20 h-4/6 flex bg-lila-hero container px-6 font-body text-black-Headings">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="grid grid-rows-2 content-end col-span-4 md:col-span-8 lg:col-span-12">
            <div className="self-center text-2xl font-normal text-center text-black-Headings md:text-lg lg:text-2xl ">
              <p>Un espacio seguro para el</p>
              <p>bienestar de niños y adolescentes</p>
            </div>

            <div className="justify-self-center">
              <button className="bg-brown-cta hover:bg-brown-darker transition duration-300 focus:bg-brown-darker rounded font-semibold text-white px-10 py-4 tracking-wide">
                Agenda tú cita
              </button>
            </div>
          </div>
        </div>
        <div className="absolute -right-20 py-6 grid items-center">
          <Image
            src="/images/AliciaHeroPhotoLight.png"
            alt="Alicia Coaching Terapéutico"
            width={350}
            height={400}
            priority
            loading="eager"
            className="w-auto h-auto border border-lila-darker"
          />
        </div>
      </div>
    </section>
  );
}
