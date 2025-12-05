"use client";
import React, { useState, useEffect } from "react";

export default function Page() {
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 12000;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setEarnings(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">

      <header className="sticky top-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">GanaFácil</h1>
          <nav className="hidden md:flex gap-8 text-gray-700">
            <a href="#features" className="hover:text-blue-600">Funciones</a>
            <a href="#plans" className="hover:text-blue-600">Planes</a>
            <a href="#testimonials" className="hover:text-blue-600">Opiniones</a>
          </nav>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
            Ingresar
          </button>
        </div>
      </header>

      <section className="text-center py-24 px-6">
        <h2 className="text-5xl font-extrabold leading-tight mb-6">
          Genera Ingresos Automáticos  
          <span className="text-blue-600"> desde Cualquier Lugar</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Tu negocio digital funcionando 24/7 con ventas automatizadas.
        </p>

        <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl text-xl hover:bg-blue-700 shadow-lg transition">
          Comenzar Ahora
        </button>

        <div className="mt-12 text-3xl font-bold">
          💸 Ganancias generadas por usuarios:  
          <span className="text-green-600"> ${earnings.toLocaleString()}</span>
        </div>
      </section>

      <footer className="py-8 bg-gray-900 text-center text-gray-300">
        © 2025 GanaFácil — Todos los derechos reservados.
      </footer>

    </div>
  );
}
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
            Ingresar
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-24 px-6">
        <h2 className="text-5xl font-extrabold leading-tight mb-6">
          Genera Ingresos Automáticos  
          <span className="text-blue-600"> desde Cualquier Lugar</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Tu negocio digital funcionando 24/7 con ventas automatizadas, landing profesional y estrategias listas para activar.
        </p>

        <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl text-xl hover:bg-blue-700 shadow-lg transition">
          Comenzar Ahora
        </button>

        <div className="mt-12 text-3xl font-bold">
          💸 Ganancias generadas por usuarios:  
          <span className="text-green-600"> ${earnings.toLocaleString()}</span>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          
          <div className="p-8 bg-gray-100 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-bold mb-2">Panel de Control</h3>
            <p className="text-gray-700">Analiza tus ventas, clics y conversiones en tiempo real.</p>
          </div>

          <div className="p-8 bg-gray-100 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-bold mb-2">Sistema de Afiliados</h3>
            <p className="text-gray-700">Recomienda y gana comisiones recurrentes sin esfuerzo.</p>
          </div>

          <div className="p-8 bg-gray-100 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-bold mb-2">Automatización Completa</h3>
            <p className="text-gray-700">Correos, ventas y entrega de productos totalmente automática.</p>
          </div>

        </div>
      </section>

      {/* Video Section (simulada) */}
      <section className="py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-6">Mira cómo funciona</h3>
        <div className="max-w-4xl mx-auto bg-black rounded-2xl h-64 md:h-96 flex items-center justify-center text-white text-xl">
          🎥 Tu video promocional aquí
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="plans" className="bg-gray-100 py-20">
        <h3 className="text-center text-4xl font-bold mb-12">Planes de Monetización</h3>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">

          <div className="p-8 bg-white rounded-2xl shadow">
            <h4 className="text-2xl font-bold mb-4">Básico</h4>
            <p className="text-gray-600 mb-6">Ideal para empezar</p>
            <p className="text-4xl font-extrabold mb-6">$9<span className="text-xl">/mes</span></p>
            <ul className="text-left text-gray-700 mb-6">
              <li>✔ Landing profesional</li>
              <li>✔ Estadísticas básicas</li>
              <li>✔ Soporte estándar</li>
            </ul>
            <button className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
              Elegir Plan
            </button>
          </div>

          <div className="p-8 bg-blue-600 text-white rounded-2xl shadow-lg scale-105">
            <h4 className="text-2xl font-bold mb-4">Pro</h4>
            <p className="mb-6">La opción más elegida</p>
            <p className="text-4xl font-extrabold mb-6">$19<span className="text-xl">/mes</span></p>
            <ul className="text-left mb-6">
              <li>✔ Automación completa</li>
              <li>✔ Afiliados</li>
              <li>✔ Panel avanzado</li>
              <li>✔ Soporte
