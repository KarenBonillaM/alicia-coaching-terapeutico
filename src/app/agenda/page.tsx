import Script from "next/script";
import Image from "next/image";

export default function Agenda() {
  return (
    <section className="m-36">
      <div className="grid items-center h-screen bg-beige-agenda border border-beige-border justify-items-center pt-16">
        <h1 className="font-body font-semibold text-5xl text-black-Headings">
          Agenda tu cita
        </h1>
        <p
          className="font-body text-4xl text-body-shade
         px-52 text-center">
          Da el primer paso hacia el bienestar emocional de tu hijo en un
          espacio seguro y profesional.
        </p>
        <button className="button-agenda bg-brown-cta hover:bg-brown-darker transition duration-300 focus:bg-brown-darker rounded font-semibold text-white px-10 py-4 tracking-wide">
          Ver disponibilidad
        </button>
        <span className="block mt-4 text-span-text text-2xl">
          Sesiones confidenciales &middot; En linea o presencial &middot;
          Atención personalizada.
        </span>
      </div>
      <section className="grid items-center h-screen justify-items-center bg-beige-lighter-agenda border border-beige-border">
        <div>
          <h2 className="text-4xl text-black-Headings text-center pb-40">
            ¿Qué puedes esperar?
          </h2>
          <div className="container px-6 m-auto">
            <div className="grid grid-cols-4 gap-4 md:grid-cols-8 lg:grid-cols-12">
              <div className="grid justify-items-center bg-light-beige col-span-4 py-10 shadow-xl rounded">
                <div>
                  <Image
                    src="/images/brain.png"
                    alt="Coaching Terapéutico"
                    width={114}
                    height={112}
                    priority
                    className="w-auto h-auto pb-5"
                  />
                </div>
                <div>
                  <h2 className="text-black-Headings text-2xl font-semibold font-body text-center py-4 px-12">
                    Primera sesión
                  </h2>
                  <p className="text-body-text px-12 text-xl">
                    Breve conversación para conocer la situación y definir
                    objetivos
                  </p>
                </div>
              </div>
              <div className="grid justify-items-center bg-light-beige col-span-4 py-10 rounded shadow-xl">
                <div>
                  <Image
                    src="/images/love.png"
                    alt="Coaching Terapéutico"
                    width={114}
                    height={112}
                    priority
                    loading="eager"
                    className="w-auto h-auto pb-5"
                  />
                </div>
                <div>
                  <h2 className="text-black-Headings text-2xl font-semibold font-body text-center py-4 px-12">
                    Acompañamiento personalizado
                  </h2>
                  <p className="text-body-text px-12 text-xl">
                    Sesiones adaptadas a la edad y necesidades emocionales
                  </p>
                </div>
              </div>
              <div className="grid justify-items-center bg-light-beige col-span-4 py-10 rounded shadow-xl">
                <div>
                  <Image
                    src="/images/self-care.png"
                    alt="Coaching Terapéutico"
                    width={114}
                    height={112}
                    priority
                    loading="eager"
                    className="w-auto h-auto pb-5"
                  />
                </div>
                <div>
                  <h2 className="text-black-Headings text-2xl font-semibold font-body text-center py-4 px-12">
                    Proceso gradual
                  </h2>
                  <p className="text-body-text px-12 text-xl">
                    Un espacio seguro donde el cambio ocurre paso a paso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="calendar"
        className="bg-beige-light-calendar border border-beige-border py-16">
        <h2 className="font-body font-semibold text-4xl text-center px-64 text-black-Headings pt-16">
          Selecciona el dia y el horario que mejor se adapte a tu familia
        </h2>
        <div>
          <div
            className="calendly-inline-widget min-w-80 h-175"
            data-url="https://calendly.com/aliciadelat47/30min?background_color=f9f5f5&text_color=3e3a3d&primary_color=a08a8d"></div>
          <Script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
            async
          />
        </div>
      </section>
    </section>
  );
}
