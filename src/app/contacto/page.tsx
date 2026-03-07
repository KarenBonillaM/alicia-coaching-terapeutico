"use client";

import { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Formulario enviado:", form);

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
    } else {
      alert("Error al enviar el mensaje");
    }
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
                  href="https://wa.me/4464776355"
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
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="your name"
                  required
                  className="peer relative h-10 w-full border-b border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="name"
                  className="absolute left-2 -top-2 z-1 px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                  Nombre
                </label>
                <small className="absolute flex w-full cursor-text justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500 peer-focus:cursor-default">
                  <span>Text field with helper text</span>
                  <span className="text-slate-500">1/10</span>
                </small>
              </div>
              <div className="relative my-6">
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your email"
                  required
                  className="peer relative h-10 w-full border-b border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="email"
                  className="absolute left-2 -top-2 z-1 px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                  Correo electrónico
                </label>
                <small className="absolute flex w-full cursor-text justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500 peer-focus:cursor-default">
                  <span>Text field with helper text</span>
                  <span className="text-slate-500">1/10</span>
                </small>
              </div>
              <div className="relative my-6">
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="your name"
                  required
                  rows={5}
                  className="peer relative h-10 w-full border-b border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="message"
                  className="absolute left-2 -top-2 z-1 px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                  Mensaje
                </label>
                <small className="absolute flex w-full cursor-text justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500 peer-focus:cursor-default">
                  <span>Text field with helper text</span>
                  <span className="text-slate-500">1/10</span>
                </small>
              </div>

              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
