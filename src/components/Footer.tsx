export default function Footer() {
  return (
    <footer className="bg-light-gray py-6 mt-16">
      <div className="container px-6 m-auto text-center">
        <p className="text-body-text text-sm">
          &copy; {new Date().getFullYear()} Alicia Coaching Terapéutico. Todos
          los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
