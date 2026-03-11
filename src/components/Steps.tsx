import Image from "next/image";
import Link from "next/link";

export default function Steps() {
  return (
    <section className=" bg-beige-steps grid justify-center pt-10 pb-20">
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 md:justify-items-start grid-rows-3 h-screen py-20">
        <div className="w-3/5 md:w-full flex items-center col-start-2 border-l-3 border-light-beige relative pb-20">
          <div className="absolute -left-10 top-0 bg-light-beige rounded-full py-6 px-8">
            <span className="font-semibold text-xl">1</span>
          </div>
          <div className="justify-items-center pl-20">
            <Image
              src="/images/telephone.png"
              alt="Coaching Terapéutico"
              width={80}
              height={80}
              priority
              className="w-14 sm:w-16 md:w-20 h-auto"
            />
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-nav font-normal pt-5">
              Agenda tú cita
            </p>
          </div>
        </div>
        <div className="w-3/5 md:w-full relative flex items-center row-start-2 col-start-2  md:col-start-1 border-l-3 border-light-beige md:border-0">
          {/* <div className="relative flex flex-row-reverse items-center row-start-2"> */}
          <div className="absolute -left-10 md:left-auto md:-right-10 bg-light-beige rounded-full py-6 px-8">
            <span className="font-semibold text-xl">2</span>
          </div>
          <div className="justify-items-center pl-20 md:pl-0 md:pr-20">
            <Image
              src="/images/high-five.png"
              alt="Coaching Terapéutico"
              width={80}
              height={80}
              priority
              className="w-14 sm:w-16 md:w-20 h-auto"
            />
            <p className="text-lg sm:text-xl md:text-2xl lg:3xl font-nav font-normal pt-5 lg:w-70 text-center w-7/12">
              Encuentrame en línea o en persona
            </p>
          </div>
        </div>
        <div className="border-l-3 border-light-beige md:block hidden">
          <span className="hidden">border</span>
        </div>
        <div className="w-3/5 md:w-full relative flex items-center row-start-3 col-start-2 border-l-3 border-light-beige">
          <div className="absolute -left-10 bottom-0 bg-light-beige rounded-full py-6 px-8">
            <span className="font-semibold text-xl">3</span>
          </div>
          <div className="justify-items-center pl-20 pt-28">
            <Image
              src="/images/play.png"
              alt="Coaching Terapéutico"
              width={80}
              height={80}
              priority
              className="w-14 sm:w-16 md:w-20 h-auto"
            />
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-nav font-normal pt-5 text-text-steps">
              Empieza tú proceso
            </p>
          </div>
        </div>
      </div>
      <div className="m-auto pt-16">
        <Link href="/agenda">
          <button className="bg-brown-cta hover:bg-brown-darker transition duration-300 focus:bg-brown-darker rounded font-semibold text-white px-10 py-5 tracking-wider">
            Comienza hoy
          </button>
        </Link>
      </div>
    </section>
  );
}
