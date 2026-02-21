import Image from "next/image";

export default function Steps() {
  return (
    <section className=" bg-beige-steps  grid justify-center py-20">
      <div className="grid grid-cols-2 grid-rows-3 h-screen py-20">
        <div className="flex items-center col-start-2     border-l-3   border-light-beige">
          <div className="bg-light-beige rounded-full py-2 px-4">
            <span>1</span>
          </div>
          <div className="justify-items-center">
            <Image
              src="/images/telephone.png"
              alt="Coaching Terapéutico"
              width={80}
              height={80}
              priority
              loading="eager"
            />
            <p>Agenda tú cita</p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center row-start-2 border-r-3 border-light-beige">
          <div className="bg-light-beige rounded-full py-2 px-4">
            <span>2</span>
          </div>
          <div className="justify-items-center">
            <Image
              src="/images/high-five.png"
              alt="Coaching Terapéutico"
              width={80}
              height={80}
              priority
              loading="eager"
            />
            <p>Encuentrame en línea o en persona</p>
          </div>
        </div>
        <div className="flex items-center row-start-3 col-start-2 border-l-3 border-light-beige">
          <div className="bg-light-beige rounded-full py-2 px-4">
            <span>3</span>
          </div>
          <div className="justify-items-center">
            <Image
              src="/images/play.png"
              alt="Coaching Terapéutico"
              width={80}
              height={80}
              priority
              loading="eager"
            />
            <p>Empieza tú proceso </p>
          </div>
        </div>
      </div>
      <div className="m-auto">
        <button className="bg-brown-cta hover:bg-brown-darker transition duration-300 focus:bg-brown-darker rounded font-semibold text-white px-10 py-5">
          Agenda tú cita
        </button>
      </div>
    </section>
  );
}
