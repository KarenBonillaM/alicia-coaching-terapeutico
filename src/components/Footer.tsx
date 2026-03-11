export default function Footer() {
  return (
    <footer className="bg-brown-footer border-t border-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
        <p className="font-logo text-lg text-black-Headings font-semibold">
          Alicia De La Torre
        </p>
        <div className="flex justify-center gap-6 text-black-Headings font-body tracking-wide">
          <a href="/agenda" className="hover:text-brown-darker hover:underline">
            Agenda
          </a>
          <a
            href="/contacto"
            className="hover:text-brown-darker hover:underline">
            Contacto
          </a>
          <a href="/acerca" className="hover:text-brown-darker hover:underline">
            Sobre mí
          </a>
        </div>
        <p className="text-sm text-gray-600 font-body">
          © 2026 Alicia De La Torre. Todos los derechos reservados.
        </p>
        <a
          href="https://bonillamoreno.com"
          target="_blank"
          className="text-sm text-gray-600 hover:underline font-body">
          Diseño y desarrollo: Karen Bonilla
        </a>
      </div>
    </footer>
  );
}
