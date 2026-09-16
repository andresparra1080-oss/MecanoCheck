"use client";

import { useState } from "react";
import {
  ArrowRight,
  CalendarCheck2,
  CarFront,
  CheckCircle2,
  Clock3,
  FileText,
  Gauge,
  MapPin,
  Menu,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  X,
} from "lucide-react";

const whatsappNumber = "573172933591";
const whatsappMessage = encodeURIComponent(
  "Hola, quiero agendar un peritaje a domicilio en Bogotá con MecanoCheck."
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const stats = [
  { value: "5+", label: "años de experiencia" },
  { value: "100%", label: "a domicilio" },
  { value: "OBD2", label: "diagnóstico técnico" },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Diagnóstico real, no superficial",
    text: "A diferencia de la mayoría de las empresas de peritajes tradicionales, revisamos cada vehículo con criterio técnico real y sin improvisar. No entregamos un diagnóstico vacío: analizamos lo que realmente afecta la compra, la venta o el uso del auto.",
  },
  {
    icon: CarFront,
    title: "Más de 5 años en mecánica",
    text: "Contamos con más de 5 años de experiencia en mecánica, trabajando con toda gama de vehículos, marcas y años de fabricación con un enfoque práctico y técnico sobre cada falla detectada.",
  },
  {
    icon: Gauge,
    title: "Explicación clara al cliente",
    text: "Te explicamos exactamente qué fallas tiene el carro, qué intervenciones requiere de inmediato o a futuro y qué impacto tienen en su valor, seguridad y funcionamiento. Así tomas decisiones con información útil.",
  },
  {
    icon: Clock3,
    title: "Atención cercana y responsable",
    text: "Somos un equipo pequeño, serio. Nos desplazamos a Bogotá con puntualidad, rigor y mucha responsabilidad para proteger tu inversión y la seguridad del vehículo.",
  },
];

const serviceDetails = [
  {
    title: "Revisión estructural y legal",
    items: [
      "Revisión estructural, chasis y medición de pintura (carrocería).",
      "Chequeo de suspensión y partes bajas.",
      "Verificación legal de papeles: RUNT, antecedentes y comparendos.",
      "Estado de interiores, equipamiento y condiciones generales del vehículo.",
    ],
  },
  {
    title: "Diagnóstico técnico de motor y mecánica",
    items: [
      "Medición de compresión de cilindros.",
      "Inspección visual detallada de cilindros con endoscopio.",
      "Detección de fugas de cualquier líquido.",
      "Estado de correas de accesorios, pachas y cables eléctricos.",
      "Evaluación de caja manual o automática.",
      "Escáner electrónico OBD2 y diagnóstico de módulos.",
      "Gráficas de motor en tiempo real.",
      "Prueba de ruta y revisión funcional del vehículo.",
    ],
  },
];

const differentiators = [
  {
    title: "Revisión técnica profunda",
    text: "Miramos más allá de lo visible: motor, suspensión, estructura, líquidos, caja y sistema eléctrico para detectar fallas reales, sabemos cuánto es el valor aproximado de arreglarlo y las fallas comunes de varios modelos.",
  },
  {
    title: "Explicación honesta al cliente",
    text: "Te explicamos en lenguaje claro a cualquier persona qué significa cada hallazgo, qué riesgo representa y qué decisión te conviene tomar.",
  },
  {
    title: "Criterio mecánico real",
    text: "No trabajamos con reportes genéricos o complejos para confundir al comprador. Cada vehículo se analiza con experiencia práctica y técnica.",
  },
];

const plans = [
  {
    name: "Básico",
    price: "$140.000",
    description: "Ideal para revisión general antes de comprar o vender un vehículo.",
    featured: false,
    includes: [
      "Revisión visual exterior e interior",
      "Estado de estructura, pintura y chasis",
      "Inspección de suspensión y frenos",
      "Revisión documental básica",
    ],
  },
  {
    name: "Completo",
    price: "$180.000",
    description: "La opción más recomendada para compradores exigentes y ventas seguras.",
    featured: true,
    includes: [
      "Todo lo del plan Básico",
      "Diagnóstico mecánico general",
      "Escaneo electrónico OBD2",
      "Detección de fugas y fallas eléctricas",
      "Informe profesional con recomendaciones",
    ],
  },
  {
    name: "Premium",
    price: "$240.000",
    description: "Evaluación integral con mayor profundidad y soporte técnico especializado.",
    featured: false,
    includes: [
      "Todo lo del plan Completo",
      "Inspección con endoscopio a cámaras de combustión",
      "Gráficas de motor en tiempo real",
      "Prueba de ruta",
      "Prioridad de agendamiento",
    ],
  },
];

const deliverables = [
  {
    icon: FileText,
    title: "Informe físico",
    text: "Documento con diagnóstico visual de estructura, pintura, suspensión, motor y condiciones generales del vehículo.",
    bullets: [
      "Estado de la estructura, chasis, pintura y lámina.",
      "Revisamos compresión de motor, fugas, frenos, batería, luces y fluidos.",
    ],
  },
  {
    icon: Sparkles,
    title: "Informe digital",
    text: "Escaneo electrónico OBD2 de módulos del vehículo, con lectura de fallas, códigos y análisis de funcionamiento.",
    bullets: [
      "Estado de sensores de todo el vehículo.",
      "Estado de la caja automática si aplica.",
      "Kilometraje real.",
    ],
  },
];

const coverage = ["Bogotá D.C."];

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "¿Por qué elegirnos?", href: "#porque" },
    { label: "Diferencia", href: "#diferencia" },
    { label: "Planes", href: "#planes" },
    { label: "¿Qué incluye?", href: "#incluye" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <main className="text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 text-lg font-black text-slate-950 shadow-lg shadow-orange-500/20">
              M
            </div>
            <div>
              <p className="text-lg font-black tracking-tight text-white">MecanoCheck</p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Bogotá • A domicilio
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-orange-300">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-400 md:inline-flex"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar cita
            </a>

            <button
              type="button"
              aria-label="Abrir menú"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 text-slate-100 md:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="border-t border-slate-800 bg-slate-950/95 md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-sm text-slate-200 sm:px-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2 transition hover:border-orange-500/40 hover:text-orange-300"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-4 py-2.5 font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                Agendar cita
              </a>
            </nav>
          </div>
        ) : null}
      </header>

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-300">
              <Star className="h-4 w-4 fill-current" />
              Mecánico experto • +5 años
            </span>

            <h1 className="mt-6 max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Inspección Técnica Profesional a Domicilio en Bogotá
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Evaluación técnica de vehículos usados. Analizamos la estructura y chasis, el estado
              de la pintura, la compresión de motor, la presencia de fugas, el estado de
              cableado y pachas, suspensión, frenos y escáner. Todo con criterio técnico real para
              que tomes la mejor decisión.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-orange-300/70 bg-orange-500 px-6 py-3.5 text-base font-semibold text-white shadow-[0_0_0_3px_rgba(251,146,60,0.18),0_18px_40px_rgba(249,115,22,0.35)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-orange-400"
              >
                Agendar por WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="tel:+573172933591"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-6 py-3.5 text-base font-semibold text-slate-100 shadow-[0_0_0_1px_rgba(51,65,85,0.3)] transition hover:border-slate-500 hover:bg-slate-800"
              >
                <PhoneCall className="h-4 w-4" />
                Llamar ahora
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1.5 text-orange-200">
                100% Cobertura a Domicilio
              </span>
              <span className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5">
                Diagnóstico Multimarca
              </span>
              <span className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5">
                Dictamen Claro e Inmediato
              </span>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-[0_20px_40px_rgba(2,6,23,0.3)]"
                >
                  <p className="text-2xl font-black text-orange-300">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up">
            <div className="absolute -left-8 top-8 h-32 w-32 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="absolute -right-8 bottom-10 h-28 w-28 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900/80 p-5 shadow-[0_30px_60px_rgba(15,23,42,0.55)]">
              <div className="mb-5 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/60 p-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Servicio</p>
                  <p className="mt-1 text-lg font-bold text-white">Inspección vehicular</p>
                </div>
                <div className="rounded-xl bg-emerald-500/15 p-2 text-emerald-300">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-5">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-300">
                      <CarFront className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Vehículo</p>
                      <p className="font-semibold text-white">Inspección completa</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-orange-400/30 bg-orange-500/10 px-2 py-1 text-xs font-semibold text-orange-300">
                    MecanoCheck
                  </span>
                </div>

                <div className="space-y-4">
                  {[
                    "Estructura y pintura",
                    "Suspensión y frenos",
                    "Motor y transmisión",
                    "Diagnóstico OBD2",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-900/70 px-3 py-2"
                    >
                      <span className="text-sm text-slate-200">{item}</span>
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Desde</p>
                  <p className="text-xl font-black text-orange-300">$140.000</p>
                </div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Agenda hoy
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="porque" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
            ¿Por qué elegirnos?
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Experiencia superior a 5 años en revisión y diagnóstico automotriz
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-[0_25px_50px_rgba(2,6,23,0.25)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-orange-500/30 hover:shadow-[0_30px_60px_rgba(249,115,22,0.12)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="diferencia" className="bg-slate-950/70 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
              ¿Qué nos diferencia?
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Te explicamos con total claridad el estado real del vehículo
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-slate-800 bg-slate-900/60 p-7 shadow-[0_25px_60px_rgba(2,6,23,0.3)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_30px_70px_rgba(249,115,22,0.08)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-300">
                  <Wrench className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
            Servicios técnicos
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Entregables del peritaje: informes claros, técnicos y útiles
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {serviceDetails.map((group) => (
            <div
              key={group.title}
              className="rounded-[28px] border border-slate-800 bg-slate-900/70 p-7 shadow-[0_25px_60px_rgba(2,6,23,0.3)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-300">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">{group.title}</h3>
              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-200">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-orange-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="planes" className="bg-slate-950/80 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
              Planes y precios
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Elige el nivel que necesitas
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={[
                  "rounded-[28px] border p-6 shadow-[0_25px_60px_rgba(2,6,23,0.3)]",
                  plan.featured
                    ? "border-orange-400/60 bg-gradient-to-b from-orange-500/10 to-slate-900 ring-1 ring-orange-500/30"
                    : "border-slate-800 bg-slate-900/60",
                ].join(" ")}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black text-white">{plan.name}</h3>
                  {plan.featured ? (
                    <span className="rounded-full bg-orange-500 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white">
                      Popular
                    </span>
                  ) : null}
                </div>

                <div className="mt-5 flex items-end gap-2">
                  <span className="text-4xl font-black text-orange-300">{plan.price}</span>
                  <span className="pb-1 text-sm text-slate-400">COP</span>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-300">{plan.description}</p>

                <ul className="mt-6 space-y-3">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-200">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className={[
                    "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all shadow-sm",
                    plan.featured
                      ? "border border-orange-300/80 bg-orange-500 text-white shadow-[0_0_0_3px_rgba(251,146,60,0.18),0_18px_30px_rgba(249,115,22,0.28)] hover:bg-orange-400"
                      : "border border-slate-700 bg-slate-950 text-slate-100 hover:border-slate-500 hover:bg-slate-800",
                  ].join(" ")}
                >
                  Agendar {plan.name}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="incluye" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
            ¿Qué incluye el peritaje?
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Entregables claros y útiles para tu decisión
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {deliverables.map(({ icon: Icon, title, text, bullets }) => (
            <div
              key={title}
              className="rounded-[28px] border border-slate-800 bg-slate-900/60 p-7 shadow-[0_25px_60px_rgba(15,23,42,0.3)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_30px_70px_rgba(249,115,22,0.08)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-300">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-300">{text}</p>

              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[24px] border border-orange-400/30 bg-gradient-to-r from-orange-500/10 to-slate-900/60 p-6 shadow-[0_20px_50px_rgba(249,115,22,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-300">
            Verificación del kilometraje
          </p>
          <p className="mt-3 text-base leading-7 text-slate-200">
            Revisamos que el kilometraje del vehículo sea real o si presenta alteración. Comparamos
            el estado mecánico, desgaste de piezas, desgaste de volante, pedales y otros indicadores
            para detectar inconsistencias antes de cualquier compra o negociación.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-r from-orange-500/10 via-slate-900 to-blue-500/10 py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
            Agenda tu cita
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Haz la revisión antes de comprar o vender
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            WhatsApp directo para agendar tu peritaje a domicilio en Bogotá. Atención ágil, asesoría
            clara y reportes profesionales.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-orange-300/70 bg-orange-500 px-7 py-3.5 text-base font-semibold text-white shadow-[0_0_0_3px_rgba(251,146,60,0.18),0_18px_40px_rgba(249,115,22,0.35)] transition hover:-translate-y-0.5 hover:bg-orange-400"
            >
              <CalendarCheck2 className="h-5 w-5" />
              Agendar por WhatsApp
            </a>
            <a
              href="tel:+573172933591"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-7 py-3.5 text-base font-semibold text-slate-100 shadow-[0_0_0_1px_rgba(51,65,85,0.3)] transition hover:border-slate-500 hover:bg-slate-800"
            >
              <PhoneCall className="h-5 w-5" />
              Llamar
            </a>
          </div>
        </div>
      </section>

      <footer id="contacto" className="border-t border-slate-800 bg-slate-950/90">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 text-lg font-black text-slate-950">
                M
              </div>
              <div>
                <p className="text-lg font-black text-white">MecanoCheck</p>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Bogotá • A domicilio</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
              Servicio automotriz con criterio mecánico real, claridad en el diagnóstico y respaldo
              para decisiones de compra, venta y revisión de vehículos en Bogotá. Además, contamos
              con soporte por WhatsApp para verificar documentación y papeles del vehículo.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-300">
              Cobertura
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {coverage.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200"
                >
                  <MapPin className="h-3.5 w-3.5 text-orange-300" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-300">
              Contacto
            </p>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <a href="tel:+573172933591" className="flex items-center gap-2 transition hover:text-orange-300">
                <PhoneCall className="h-4 w-4 text-orange-300" />
                +57 317 293 3591
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-orange-300"
              >
                <MessageCircle className="h-4 w-4 text-orange-300" />
                WhatsApp directo
              </a>
              <span className="flex items-center gap-2 text-slate-300">
                <Wrench className="h-4 w-4 text-orange-300" />
                Bogotá D.C.
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-slate-400 sm:px-6 lg:flex-row lg:px-8">
            <p>© {new Date().getFullYear()} MecanoCheck. Todos los derechos reservados.</p>
            <p>Andrés Felipe Parra Martín • Peritajes a domicilio • Informes físicos y digitales</p>
          </div>
        </div>
      </footer>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-[#1fa455]/80 bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-[0_0_0_3px_rgba(37,211,102,0.18),0_18px_40px_rgba(37,211,102,0.45)] transition hover:scale-[1.02]"
      >
        <MessageCircle className="h-5 w-5" />
        Agendar por WhatsApp
      </a>
    </main>
  );
}
