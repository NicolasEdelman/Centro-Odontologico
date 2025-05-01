"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Especialistas", href: "#especialistas" },
    { name: "Servicios", href: "#servicios" },
    { name: "Convenios", href: "#convenios" },
    { name: "Contacto", href: "#contacto" },
  ];

  const whatsappNumber = "59891234567";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            {isScrolled ? (
              <Image
                src="/images/LogoColor.png"
                alt="Centro Odontológico"
                width={280}
                height={160}
                className="h-12 w-auto"
              />
            ) : (
              <Image
                src="/images/LogoBlanco.png"
                alt="Centro Odontológico"
                width={280}
                height={160}
                className="h-12 w-auto"
              />
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-co-primary-blue ${
                  pathname === link.href
                    ? "text-co-primary-blue"
                    : isScrolled
                    ? "text-gray-800"
                    : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}


            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-medium transition-colors hover:text-co-primary-blue ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              <WhatsAppIcon />
            </a>

            {/* Botón de consulta */}
            <a href="#contacto">
              <Button className="bg-co-primary-blue hover:bg-co-primary-gray text-white">
                Agendar Consulta
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-co-primary-blue ${
                    pathname === link.href
                      ? "text-co-primary-blue"
                      : "text-gray-800"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              {/* WhatsApp link in mobile */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-co-primary-gray transition-colors"
              >
                <WhatsAppIcon className="mr-2" />
                <span className="text-sm">Enviar mensaje por WhatsApp</span>
              </a>

              <a href="#contacto" onClick={() => setIsOpen(false)}>
                <Button className="bg-co-primary-blue hover:bg-co-primary-gray text-white w-full mt-2">
                  Agendar Consulta
                </Button>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
