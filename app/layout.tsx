import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bordatto Confecções",
  description: "Site oficial da Bordatto Confecções",
  icons: {
    icon: "/img_home/logo-removebg-preview.png",
    shortcut: "/img_home/logo-removebg-preview.png",
    apple: "/img_home/logo-removebg-preview.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
