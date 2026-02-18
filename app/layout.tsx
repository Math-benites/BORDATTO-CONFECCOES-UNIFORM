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
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        {children}
        <footer className="site-footer">
          <div className="container site-footer-inner">
            <div className="footer-brand">
              <strong>Bordatto Confecções</strong>
              <p>
                <i aria-hidden="true" className="fa-regular fa-file-lines icon-fa" />
                CNPJ: 61.957.123/0001-001
              </p>
              <p>
                <i aria-hidden="true" className="fa-regular fa-clock icon-fa" />
                Bordatto Confecções - Todos os direitos reservados.
              </p>
            </div>
            <div className="footer-links">
              <a href="https://www.instagram.com/bordatto.confeccoes/" target="_blank" rel="noopener noreferrer">
                <i aria-hidden="true" className="fa-brands fa-instagram icon-fa" />
                Instagram
              </a>
              <a href="https://wa.me/5548991217882?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer">
                <i aria-hidden="true" className="fa-brands fa-whatsapp icon-fa" />
                WhatsApp
              </a>
              <a href="/sobre">
                <i aria-hidden="true" className="fa-regular fa-building icon-fa" />
                Sobre a empresa
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
