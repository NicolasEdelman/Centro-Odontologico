import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image src="/images/logo.png" alt="Centro Odontológico" width={180} height={60} className="h-12 w-auto" />
            </Link>
            <p className="text-co-primary-gray mb-6">
              Cuidamos tu sonrisa con profesionalismo y dedicación. Más de 15 años de experiencia nos respaldan.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/centroodontologico.uy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-co-primary-gray hover:text-white transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://facebook.com/centroodontologico.uy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-co-primary-gray hover:text-white transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://twitter.com/centroodonto_uy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-co-primary-gray hover:text-white transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-co-primary-gray hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#especialistas" className="text-co-primary-gray hover:text-white transition-colors">
                  Especialistas
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-co-primary-gray hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#convenios" className="text-co-primary-gray hover:text-white transition-colors">
                  Convenios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-co-primary-gray hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Servicios</h3>
            <ul className="space-y-3">

              <li>
                <Link href="/servicios/estetica-facial" className="text-co-primary-gray hover:text-white transition-colors">
                  Estética Facial
                </Link>
              </li>
              <li>
                <Link href="/servicios/implantologia" className="text-co-primary-gray hover:text-white transition-colors">
                  Implantes
                </Link>
              </li>
              <li>
                <Link href="/servicios/ortodoncia" className="text-co-primary-gray hover:text-white transition-colors">
                  Ortodoncia
                </Link>
              </li>
              <li>
                <Link href="/servicios/rehabilitacion" className="text-co-primary-gray hover:text-white transition-colors">
                  Rehabilitación
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-brand-blue-light mr-3 flex-shrink-0 mt-1" />
                <span className="text-co-primary-gray">Av. Principal 1234, Montevideo, Uruguay</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-brand-blue-light mr-3 flex-shrink-0 mt-1" />
                <span className="text-co-primary-gray">+598 2345 6789</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="text-brand-blue-light mr-3 flex-shrink-0 mt-1" />
                <span className="text-co-primary-gray">info@centroodontologico.uy</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-co-primary-gray text-sm">
          <p>&copy; {new Date().getFullYear()} Centro Odontológico. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

