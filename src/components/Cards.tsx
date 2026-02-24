import Image from "next/image";

export default function Cards() {
  return (
    <section className="h-screen">
      <div className="container px-6 m-auto">
        <div className="grid grid-cols-4 gap-15 md:grid-cols-8 lg:grid-cols-12">
          <div className="grid justify-items-center bg-light-beige col-span-4 py-10 border border-border-cards rounded-xl border-opacity-25 shadow-xl">
            <div>
              <Image
                src="/images/meditation.png"
                alt="Coaching Terapéutico"
                width={200}
                height={250}
                priority
                loading="eager"
              />
            </div>
            <div>
              <h2 className="text-black-Headings text-4xl font-semibold font-body text-center py-4">
                Balance Emocional
              </h2>
              <p className="text-body-text">
                Aprende a gestionar emociones con seguridad
              </p>
            </div>
          </div>
          <div className="grid justify-items-center bg-light-beige col-span-4 py-10 rounded-xl border border-border-cards border-opacity-25 shadow-xl">
            <div>
              <Image
                src="/images/love.png"
                alt="Coaching Terapéutico"
                width={200}
                height={250}
                priority
                loading="eager"
              />
            </div>
            <div>
              <h2 className="text-black-Headings text-4xl font-semibold font-body text-center py-4">
                Autoestima
              </h2>
              <p className="text-body-text">
                Fortalecer la confianza y el amor propio
              </p>
            </div>
          </div>
          <div className="grid justify-items-center bg-light-beige col-span-4 py-10 rounded-xl border border-border-cards border-opacity-25 shadow-xl">
            <div>
              <Image
                src="/images/self-care.png"
                alt="Coaching Terapéutico"
                width={200}
                height={250}
                priority
                loading="eager"
              />
            </div>
            <div>
              <h2 className="text-black-Headings text-4xl font-semibold font-body text-center py-4">
                Crecimiento Personal
              </h2>
              <p className="text-body-text">
                Desarrollar habilidades emocionales para la vida
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
