import Image from "next/image";

export default function Cards() {
  return (
    <section className="min-h-screen mt-28 mb-20 lg:mb-0 md:mb-10 px-4 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3">
          <div className="grid justify-items-center bg-light-beige py-10 px-6 border border-border-cards rounded-xl border-opacity-25 shadow-xl">
            <div>
              <Image
                src="/images/meditation.png"
                alt="Balance Emocional"
                width={200}
                height={250}
                priority
                className="w-30 sm:w-37.5 md:w-45 h-auto"
              />
            </div>
            <div>
              <h2 className="text-black-Headings text-2xl sm:text-3xl font-semibold font-body text-center py-4">
                Balance Emocional
              </h2>
              <p className="text-body-text text-base sm:text-lg">
                Aprende a gestionar emociones con seguridad
              </p>
            </div>
          </div>
          <div className="grid justify-items-center bg-light-beige py-10 px-6 rounded-xl border border-border-cards border-opacity-25 shadow-xl">
            <div>
              <Image
                src="/images/love.png"
                alt="Autoestima"
                width={200}
                height={250}
                priority
                className="w-30 sm:w-37.5 md:w-45 h-auto"
              />
            </div>
            <div>
              <h2 className="text-black-Headings text-3xl font-semibold font-body text-center py-4">
                Autoestima
              </h2>
              <p className="text-body-text text-base sm:text-lg">
                Fortalecer la confianza y el amor propio
              </p>
            </div>
          </div>
          <div className="grid justify-items-center bg-light-beige py-10 px-6 rounded-xl border border-border-cards border-opacity-25 shadow-xl">
            <div>
              <Image
                src="/images/self-care.png"
                alt="Coaching Terapéutico"
                width={200}
                height={250}
                priority
                className="w-30 sm:w-37.5 md:w-45 h-auto"
              />
            </div>
            <div>
              <h2 className="text-black-Headings text-2xl sm:text-3xl font-semibold font-body text-center py-4">
                Crecimiento Personal
              </h2>
              <p className="text-body-text text-base sm:text-lg">
                Desarrollar habilidades emocionales para la vida
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
