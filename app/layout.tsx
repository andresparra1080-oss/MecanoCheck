import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MecanoCheck | Peritajes a Domicilio en Bogotá",
  description:
    "MecanoCheck ofrece peritajes automotrices a domicilio en Bogotá con diagnóstico técnico serio, claro y profesional para compra y venta de vehículos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
