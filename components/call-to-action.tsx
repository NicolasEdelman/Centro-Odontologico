import { Button } from "@/components/ui/button";
import Link from "next/link";
export const CTA = () => {
  return (
    <section className="w-full py-8 md:py-16 bg-gradient-to-r from-co-secondary-lightblue to-co-primary-blue">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
          ¿Listo para verte como deseas?
        </h2>
        <p className="text-white text-md md:text-lg mb-8 max-w-2xl mx-auto">
          Agenda tu consulta hoy y comienza tu camino para hacerlo realidad.
        </p>
        <Link href="/#contacto">
          <Button
            size="lg"
            className="bg-white text-co-primary-blue hover:bg-gray-100"
          >
            Agendar Consulta
          </Button>
        </Link>
      </div>
    </section>
  );
};
