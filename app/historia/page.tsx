"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function HistoriaPage() {
  const audioRefs = [
    useRef<HTMLAudioElement | null>(null),
    useRef<HTMLAudioElement | null>(null),
    useRef<HTMLAudioElement | null>(null),
    useRef<HTMLAudioElement | null>(null),
    useRef<HTMLAudioElement | null>(null),
    useRef<HTMLAudioElement | null>(null),
  ];

  const handleEnded = (index: number) => {
    const next = audioRefs[index + 1];
    if (next?.current) {
      next.current.play();
    }
  };
  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
      <section className="bg-co-primary-blue py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-left my-6">
            <Link
              href="/#mision-vision"
              className="inline-flex items-center text-white hover:text-[#5d7a99]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>
          </div>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestra Historia
            </h1>
            <p className="text-xl text-white">
              Conocé nuestra historia y cómo surgió nuestro consultorio de más
              de 15 años.
            </p>
          </div>
        </div>
      </section>

      {/* CUERPO TESTIMONIAL */}
      <div className="container mx-auto px-4 py-20 space-y-20 max-w-6xl">
        {/* Testimonio 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <Image
              src="/images/1Marron.png"
              alt="Nadia"
              width={400}
              height={400}
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
          <div className="w-full md:w-2/3">
            <p className="italic text-lg bg-white/80 p-4 rounded-xl">
              <strong>
                "Todo surgió un año antes de recibirnos, en el año 2009.
                Habíamos estado toda la tarde estudiando para un examen.
              </strong>{" "}
              Esperábamos el ómnibus que llevaba a Fabi a su casa en El Prado,
              nuestro barrio, cuando comenzamos a conversar sobre qué cosas nos
              parecían importantes a la hora de atender pacientes y gestionar un
              consultorio. <br />
              <strong>
                Estábamos totalmente de acuerdo en muchas cosas. Yo ese día
                supe, que era con ella con quien quería concretar mis proyectos.
              </strong>
              "
            </p>
            <div className="flex flex-row items-center justify-between">
              <audio
                ref={audioRefs[0]}
                controls
                onEnded={() => handleEnded(0)}
                className="mt-4 w-1/2 h-10"
                src="https://centro-odontologico.s3.us-east-2.amazonaws.com/Audios+Nuestra+Historia/Historia1.mp3"
              >
                Tu navegador no soporta el elemento de audio.
              </audio>

              <p className="font-semibold text-co-secondary-beige text-right text-lg">
                — Nadia
              </p>
            </div>
            {/* Reproductor de audio */}
          </div>
        </div>

        {/* Testimonio 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="w-full md:w-1/3">
            <Image
              src="/images/2Marron.png"
              alt="Fabiana"
              width={400}
              height={400}
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
          <div className="w-full md:w-2/3">
            <p className="italic text-lg bg-white/80 p-4 rounded-xl">
              <strong>
                "Hicimos casi toda la carrera juntas. Estudiábamos con amigas...
                pasábamos muchas horas en la Facultad,
              </strong>{" "}
              tanto en clase como en las esperas para entrar a la siguiente...
              hacíamos comidas con los compañeros de generación...{" "}
              <strong>conocimos nuestras familias...</strong>{" "}
              compartimos cumpleaños... salidas... el viaje de egresados... mi
              casamiento... y cuando nació mi primer hijo.{" "}
              <strong>
                Nos fuimos descubriendo en muchos aspectos, así como integrando
                en nuestro día a día.
              </strong>
              "
            </p>
            <div className="flex flex-row items-center justify-between">
              <audio
                ref={audioRefs[1]}
                onEnded={() => handleEnded(1)}
                controls
                className="mt-4 w-1/2 h-10"
                src="https://centro-odontologico.s3.us-east-2.amazonaws.com/Audios+Nuestra+Historia/Historia2.mp3"
              >
                Tu navegador no soporta el elemento de audio.
              </audio>

              <p className="font-semibold text-co-secondary-beige text-right text-lg">
                — Fabiana
              </p>
            </div>
          </div>
        </div>

        {/* Testimonio 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <Image
              src="/images/anillo1.png"
              alt="Anillo 1"
              width={400}
              height={400}
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
          <div className="w-full md:w-2/3">
            <p className="italic text-lg bg-white/80 p-4 rounded-xl">
              <strong>
                "En el 2010 obtuvimos nuestros Títulos de Doctoras en
                Odontología.
              </strong>{" "}
              Nuestro primer consultorio se encontraba en 18 de Julio y
              Alejandro Beisso, en la zona de Tres Cruces. Compartimos 2 años
              muy intensos, de trabajo y crecimiento.{" "}
              <strong>
                Fabi me regaló para uno de mis cumpleaños un anillo que tiene
                grabado en su interior: S.A.H 'Socias. Amigas. Hermanas'
              </strong>{" "}
              que hace alusión al lugar que tiene nuestra relación en orden
              creciente de importancia. En el 2012 viajé a España a estudiar.
              Fabi me apoyó en mi emprendimiento y se quedó a cargo de todo."
            </p>
            <div className="flex flex-row items-center justify-between">
              <audio
                ref={audioRefs[2]}
                onEnded={() => handleEnded(2)}
                controls
                className="mt-4 w-1/2 h-10"
                src="https://centro-odontologico.s3.us-east-2.amazonaws.com/Audios+Nuestra+Historia/Historia3.mp3"
              >
                Tu navegador no soporta el elemento de audio.
              </audio>

              <p className="font-semibold text-co-secondary-beige text-right text-lg">
                — Nadia
              </p>
            </div>
          </div>
        </div>

        {/* Testimonio 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="w-full md:w-1/3">
            <Image
              src="/images/2Marron.png"
              alt="Mudanza"
              width={400}
              height={400}
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
          <div className="w-full md:w-2/3">
            <p className="italic text-lg bg-white/80 p-4 rounded-xl">
              "Cuando Nadia volvió en el 2014, debíamos mudar el consultorio a
              otro apartamento. En ese momento alquilábamos. Fue así que
              <strong> {" "}
                buscando el lugar para nuestro próximo consultorio surgió la
                oportunidad de comprar en la Torre de los Profesionales. Esto
                significó dar un paso más en nuestro crecimiento como equipo y
                compromiso con los proyectos.
              </strong>{" "}
              Doblar la apuesta. Recuerdo esos días de la mudanza con mucho
              cariño. Nuestras familias nos ayudaron muchísimo, contamos con un
              gran apoyo."
            </p>
            <div className="flex flex-row items-center justify-between">
              <audio
                ref={audioRefs[3]}
                onEnded={() => handleEnded(3)}
                controls
                className="mt-4 w-1/2 h-10"
                src="https://centro-odontologico.s3.us-east-2.amazonaws.com/Audios+Nuestra+Historia/Historia4.mp3"
              >
                Tu navegador no soporta el elemento de audio.
              </audio>

              <p className="font-semibold text-co-secondary-beige text-right text-lg">
                — Fabiana
              </p>
            </div>
          </div>
        </div>

        {/* Testimonio 5 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <Image
              src="/images/1Marron.png"
              alt="Nadia"
              width={400}
              height={400}
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
          <div className="w-full md:w-2/3">
            <p className="italic text-lg bg-white/80 p-4 rounded-xl">
              <strong>
                "Puedo decir, que con Fabi he aprendido y aprendo día a día, que
                no hay nada que no pueda plantear o soñar con ella, que me
                impulsa a ser mejor persona y mejor profesional.
              </strong>{" "}
              Que me escucha, me entiende, me acepta tal como soy. Y que por
              sobre todo me divierte y disfruto cada día."
            </p>
            <div className="flex flex-row items-center justify-between">
              <audio
                ref={audioRefs[4]}
                onEnded={() => handleEnded(4)}
                controls
                className="mt-4 w-1/2 h-10"
                src="https://centro-odontologico.s3.us-east-2.amazonaws.com/Audios+Nuestra+Historia/Historia5.mp3"
              >
                Tu navegador no soporta el elemento de audio.
              </audio>

              <p className="font-semibold text-co-secondary-beige text-right text-lg">
                — Nadia
              </p>
            </div>
          </div>
        </div>

        {/* Testimonio 6 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="w-full md:w-2/5">
            <Image
              src="/images/anillo2.png"
              alt="Anillo 2"
              width={400}
              height={400}
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
          <div className="w-full md:w-3/5">
            <p className="italic text-lg bg-white/80 p-4 rounded-xl">
              "En mi opinión no siempre es fácil encontrar en tu camino de vida
              una persona que te entienda y que tenga tus mismos sueños, que se
              comprometa con vos y mantenga siempre ese compromiso. Nosotras con
              tan sólo mirarnos sabíamos que podíamos transitarlo de a dos.
              <strong> {" "}
                Somos 'Socias' desde el momento en el que pensamos el nombre de
                nuestro Centro. 'Amigas' por entendernos y apoyarnos en todo,
                tanto en lo personal como en lo laboral. 'Hermanas' porque
                aunque coincidimos en muchas cosas también tenemos discrepancias
                pero que se solucionan con el amor de siempre. Yo recibí un
                anillo también
              </strong>{" "}
              para mi cumpleaños, cuando Nadia se encontraba aún en España. Me
              lo envió el año antes de volver y{" "}
              <strong>lo llevo puesto desde entonces.</strong>"
            </p>
            <div className="flex flex-row items-center justify-between">
              <audio
                ref={audioRefs[5]}
                onEnded={() => handleEnded(5)}
                controls
                className="mt-4 w-1/2 h-10"
                src="https://centro-odontologico.s3.us-east-2.amazonaws.com/Audios+Nuestra+Historia/Historia6.mp3"
              >
                Tu navegador no soporta el elemento de audio.
              </audio>

              <p className="font-semibold text-co-secondary-beige text-right text-lg">
                — Fabiana
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA FINAL */}
      <section className="py-16 bg-co-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Qué esperás para modelar tu sonrisa?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactanos y un asesor te brindará todos los detalles para elegir
            el plan que mejor se adapte a tus necesidades.
          </p>
          <Link href="/#contacto">
            <Button
              className="bg-white text-co-primary-blue hover:bg-gray-100"
              size="lg"
            >
              Contactarnos
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
