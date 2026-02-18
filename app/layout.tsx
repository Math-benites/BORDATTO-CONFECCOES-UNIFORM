import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bordatto Confecções",
  description: "Site oficial da Bordatto Confecções"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}


