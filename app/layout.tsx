import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bordatto Confeccoes",
  description: "Site oficial da Bordatto Confeccoes"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

