import Image from "next/image";

export default function Acerca() {
  return (
    <section>
      <div className="container px-6 m-auto py-16">
        <div className="grid grid-cols-4 justify-items-center gap-6 md:grid-cols-8">
          <div className="col-span-4 lg:col-span-6 pt-16">
            <Image
              src="/images/aliciaAcerca.png"
              alt="Alicia Coaching Terapéutico"
              width={600}
              height={700}
              priority
              loading="eager"
              className="w-9/12 h-auto border border-lila-hero"
            />
          </div>
          <div className="col-span-4 lg:col-span-6">
            <h1 className="text-3xl font-semibold mb-4 font-logo text-black-Headings tracking-wide">
              Hola, soy Alicia
            </h1>{" "}
            <div className="text-black-Headings font-body ">
              <p className="text-lg mb-4">
                Soy Alicia de la Torre Guerrero, acompañante emocional y
                psicoeducativa de adolescentes y jóvenes, con más de un año de
                experiencia en procesos de acompañamiento, contención y
                orientación emocional. Mi trabajo se centra en ofrecer un
                espacio seguro, humano y sin juicios, donde cada persona pueda
                sentirse escuchada, comprendida y respetada tal como es.
              </p>
              <p className="text-lg mb-4">
                Creo profundamente que las y los jóvenes no necesitan ser
                corregidos, sino acompañados. Mi prioridad es que puedan
                sentirse bien consigo mismos, fortalecer su autoestima,
                reconocer sus capacidades, talentos y fortalezas, así como
                identificar sus áreas de oportunidad, para generar un
                autoconocimiento integral. Me enfoco en que aprendan a
                relacionarse con su entorno de una manera más sana y amorosa.
              </p>
              <p className="text-lg mb-4">
                A través de un acompañamiento cercano y empático, les ayudo a
                desarrollar herramientas prácticas para el día a día, que les
                permitan afrontar la escuela, la familia, los cambios, los
                conflictos, la presión social y los retos propios de esta etapa
                de la vida. Estas herramientas, una vez aprendidas e integradas,
                pueden acompañarlos a lo largo de su desarrollo personal y en su
                vida adulta.
              </p>
              <p>
                Mi forma de trabajo es un acompañamiento emocional y
                psicoeducativo enfocado en el bienestar, el crecimiento personal
                y la adaptación saludable a su contexto. Busco caminar junto a
                cada adolescente en su proceso, respetando su ritmo, su historia
                y su forma única de ver el mundo.
              </p>
              <p>
                Cuento con un diplomado en Tanatología, lo que me permite
                brindar un acompañamiento especialmente sensible en procesos de
                pérdida, distintos tipos de duelo, cambios importantes y
                momentos de crisis emocional, siempre desde una mirada humana,
                cálida y respetuosa.
              </p>
              <p>
                Mi mayor compromiso es que cada joven que llegue a este espacio
                pueda sentirse acompañado, escuchado, validado y con mayor
                confianza en sí mismo para enfrentar su vida cotidiana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
