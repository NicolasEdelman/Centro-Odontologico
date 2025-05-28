import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  const whatsappNumber = "59892632263";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  return (
    <footer className="bg-brand-dark">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-2 md:mb-6">
              <Image
                src="/images/logo.png"
                alt="Centro Odontológico"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-co-primary-gray mb-2 md:mb-6 text-sm md:text-base">
              Cuidamos tu sonrisa con profesionalismo y dedicación. Más de 15
              años de experiencia nos respaldan.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/centroodontologico.uy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-co-primary-gray hover:text-co-primary-blue transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://facebook.com/centroodontologico.uy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-co-primary-gray hover:text-co-primary-blue transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-co-primary-gray hover:text-co-primary-blue transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5 mb-1" />
                <span className="sr-only">Whatsapp</span>
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <h3 className="text-lg font-bold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-co-primary-gray hover:text-co-primary-blue transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#equipo"
                  className="text-co-primary-gray hover:text-co-primary-blue transition-colors"
                >
                  Equipo
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-co-primary-gray hover:text-co-primary-blue transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="/#planes"
                  className="text-co-primary-gray hover:text-co-primary-blue transition-colors"
                >
                  Planes
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-co-primary-gray hover:text-co-primary-blue transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="text-lg font-bold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/servicios/estetica-facial"
                  className="text-co-primary-gray hover:text-co-primary-blue transition-colors"
                >
                  Estética Facial
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/implantologia"
                  className="text-co-primary-gray hover:text-co-primary-blue transition-colors"
                >
                  Implantes
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/ortodoncia"
                  className="text-co-primary-gray hover:text-co-primary-blue transition-colors"
                >
                  Ortodoncia
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/rehabilitacion"
                  className="text-co-primary-gray hover:text-co-primary-blue transition-colors"
                >
                  Rehabilitación
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="text-lg font-bold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="text-brand-blue-light mr-3 flex-shrink-0 mt-1"
                />
                <span className="text-co-primary-gray">
                  Yaguarón 1407 of 803, Torre de los Profesionales, Montevideo,
                  Uruguay
                </span>
              </li>
              <li className="flex items-start">
                <Phone
                  size={20}
                  className="text-brand-blue-light mr-3 flex-shrink-0 mt-1"
                />
                <span className="text-co-primary-gray">(+598) 2904 5880</span>
              </li>
              <li className="flex items-start">
                <Mail
                  size={20}
                  className="text-brand-blue-light mr-3 flex-shrink-0 mt-1"
                />
                <span className="text-co-primary-gray">
                  centroodontologicouy@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-co-primary-gray text-sm">
          <p>
            &copy; {new Date().getFullYear()} Centro Odontológico. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
