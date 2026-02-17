import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen">
        <div className="w-9/12 relative my-20 h-4/6 flex bg-lila-hero container px-6 m-auto font-body text-black-Headings">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="grid grid-rows-2 justify-self-center content-center col-span-4 md:col-span-8 lg:col-span-12 w-5/6">
            <div className="self-center text-2xl text-center text-black-Headings md:text-lg lg:text-2xl">
              <p >
                Un espacio seguro para el 
              </p>
              <p>
                bienestar de niños y adolescentes
              </p>
            </div>
              
              <div className="justify-self-center">
                <button className="bg-brown-cta font-semibold text-white px-10 py-5">Agenda tú cita</button>
              </div>
            </div>
          </div>
          <div className="absolute -right-20 py-6 grid items-center">
            <Image src="/images/AliciaHeroPhotoLight.png" alt="Alicia Coaching Terapéutico" width={380}
              height={380}
            priority
            loading="eager"/>
          </div>
        </div>
        
      </section>
  );
}