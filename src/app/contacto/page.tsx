"use client";

import { useState } from "react";
import InputField from "../../components/InputField";

export default function Contacto() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setTouched((prev) => ({
      ...prev,
      [e.target.name]: true,
    }));
  };

  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

  const hasError = (field: keyof typeof form) => {
    if (!touched[field]) return false;
    if (field === "email") return !emailValidation;
    return !form[field];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!emailValidation) {
      alert("Por favor, ingresa un correo electrónico válido");
      return;
    }

    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      alert("Mensaje enviado correctamente");
      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTouched({
        name: false,
        email: false,
        message: false,
      });
    } else {
      alert("Error al enviar el mensaje");
    }
    setLoading(false);
  };

  return (
    <section className="m-5 sm:m-8 md:m-20 lg:m-36">
      <div className="container px-6 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 md:col-span-8 lg:col-span-12">
            <h1 className="text-3xl font-semibold mb-4 font-logo text-black-Headings tracking-wide text-center">
              Contacto
            </h1>
            <div className="text-center mb-10 text-xl text-body-text font-body">
              <p>
                Haz click aquí para{" "}
                <a
                  href="https://wa.me/3338740409?text=Hola%20Alicia%20quiero%20más%20información%20sobre%20tus%20servicios"
                  target="_blank"
                  className="text-brown-cta font-semibold hover:text-brown-darker transition duration-300 underline">
                  mandarme un whatsApp
                </a>
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="max-w-xl mx-auto flex flex-col gap-6">
              <div className="relative my-6">
                <InputField
                  label="Nombre"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={hasError("name")}
                />
              </div>
              <div className="relative my-6">
                <InputField
                  label="Correo electrónico"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={hasError("email")}
                />
              </div>
              <div className="relative my-6">
                <InputField
                  label="Mensaje"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={hasError("message")}
                  textarea
                />
              </div>
              <button
                disabled={loading}
                className="m-auto w-fit bg-brown-cta rounded hover:bg-brown-darker transition duration-300 text-white py-3 px-10 text-lg"
                type="submit">
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
