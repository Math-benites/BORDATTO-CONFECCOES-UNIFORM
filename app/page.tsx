"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  { image: "/img_home/Gemini_Generated_Image_10dtlh10dtlh10dt.webp", tag: "Escolar", title: "Linha escolar com design moderno e resistente" },
  { image: "/img_home/Gemini_Generated_Image_1bv3h11bv3h11bv3.webp", tag: "Escolar", title: "Uniformes escolares com acabamento premium" },
  { image: "/img_home/Gemini_Generated_Image_1sopgb1sopgb1sop.webp", tag: "Escolar", title: "Conjunto escolar com identidade visual forte" },
  { image: "/img_home/Gemini_Generated_Image_2rcg0o2rcg0o2rcg.webp", tag: "Escolar", title: "Modelos escolares para ensino fundamental e médio" },
  { image: "/img_home/Gemini_Generated_Image_2x0ymn2x0ymn2x0y.webp", tag: "Escolar", title: "Uniforme com acabamento técnico e conforto diário" },
  { image: "/img_home/Gemini_Generated_Image_9ddz3h9ddz3h9ddz.webp", tag: "Escolar", title: "Conforto e resistência para a rotina escolar" },
  { image: "/img_home/Gemini_Generated_Image_ozao9vozao9vozao.webp", tag: "Escolar", title: "Linha escolar com foco em durabilidade e estilo" },
  { image: "/img_home/Gemini_Generated_Image_q6sw22q6sw22q6sw.webp", tag: "Escolar", title: "Modelagens escolares para diferentes faixas etárias" },
  { image: "/img_home/Gemini_Generated_Image_vs1u9tvs1u9tvs1u.webp", tag: "Escolar", title: "Modelos escolares" }
];

const whatsappNumber = "5592992193704";

function OptimizedImage({
  src,
  alt,
  className,
  loading,
  onClick
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  onClick?: React.MouseEventHandler<HTMLImageElement>;
}) {
  return <img src={src} alt={alt} className={className} loading={loading} decoding="async" onClick={onClick} />;
}

export default function Home() {
  const [selectedSlide, setSelectedSlide] = useState<{ image: string; title: string } | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next");
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goToNextSlide = () => {
    setSlideDirection("next");
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setSlideDirection("prev");
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!selectedSlide) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedSlide(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedSlide]);

  useEffect(() => {
    if (selectedSlide) return;

    const timer = setInterval(() => {
      goToNextSlide();
    }, 4500);

    return () => clearInterval(timer);
  }, [selectedSlide]);

  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (event) => {
    touchStartX.current = event.changedTouches[0].clientX;
    touchEndX.current = null;
  };

  const onTouchMove: React.TouchEventHandler<HTMLDivElement> = (event) => {
    touchEndX.current = event.changedTouches[0].clientX;
  };

  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = () => {
    if (touchStartX.current === null) return;
    const end = touchEndX.current ?? touchStartX.current;
    const delta = touchStartX.current - end;
    const threshold = 45;

    if (Math.abs(delta) >= threshold) {
      if (delta > 0) goToNextSlide();
      else goToPrevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <main className="home-page">
      <header className="top-bar">
        <div className="container top-bar-inner">
          <a className="brand-mini" href="/">
            <OptimizedImage src="/img_home/logo-removebg-preview.webp" alt="Logo Bordatto Confecções" />
            <strong>Bordatto Confecções</strong>
          </a>
          <nav className="top-nav">
            <a className="top-link" href="/">Início</a>
            <a className="top-link" href="/sobre">Orçamento</a>
          </nav>
        </div>
      </header>

      <section className="hero sale-hero">
        <div className="hero-image-wrap">
          <picture>
            <source media="(max-width: 680px)" srcSet="/img_home/mobile.webp" />
            <img src="/img_home/desktop.webp" alt="Uniformes escolares Bordatto Confecções" className="hero-image" />
          </picture>
        </div>
      </section>

      <section className="carousel-section">
        <div className="container">
          <h2>Modelos em destaque</h2>
        </div>
        <div className="carousel-shell">
          <div className="carousel-viewport" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <div key={currentSlide} className={`carousel-track ${slideDirection === "next" ? "track-next" : "track-prev"}`}>
              {[-1, 0, 1].map((offset) => {
                const index = (currentSlide + offset + slides.length) % slides.length;
                const slide = slides[index];
                const isActive = offset === 0;

                return (
                  <div key={`${offset}-${slide.image}`} className={`carousel-slide ${isActive ? "is-active" : "is-side"}`}>
                    <button
                      type="button"
                      className="slide-card slide-trigger"
                      onClick={() => setSelectedSlide(slide)}
                    >
                      <OptimizedImage src={slide.image} alt={slide.title} className="slide-image" loading="lazy" />
                      <div className="slide-overlay">
                        <span>{slide.tag}</span>
                        <h3>{slide.title}</h3>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="carousel-dots" aria-label="Navegação do carrossel">
            {slides.map((slide, index) => (
              <button
                key={`dot-${slide.image}`}
                type="button"
                className={`carousel-dot ${currentSlide === index ? "active" : ""}`}
                aria-label={`Ir para imagem ${index + 1}`}
                aria-current={currentSlide === index ? "true" : "false"}
                onClick={() => {
                  setSlideDirection(index >= currentSlide ? "next" : "prev");
                  setCurrentSlide(index);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          <article className="card card-durabilidade">
            <div className="card-icon" aria-hidden="true">🛡️</div>
            <h3>Alta durabilidade</h3>
            <p>Tecidos resistentes para uso intenso no dia a dia.</p>
            <div className="card-badges">
              <span>Reforçado</span>
              <span>Uso intenso</span>
              <span>Premium</span>
            </div>
          </article>
          <article className="card card-durabilidade">
            <div className="card-icon" aria-hidden="true">🎨</div>
            <h3>Personalização completa</h3>
            <p>Logo, cores e modelagem de acordo com sua necessidade.</p>
            <div className="card-badges">
              <span>Sob medida</span>
              <span>Sua marca</span>
              <span>Identidade</span>
            </div>
          </article>
          <article className="card card-durabilidade">
            <div className="card-icon" aria-hidden="true">🎯</div>
            <h3>Precisão técnica</h3>
            <p>Padrão rigoroso com controle de medidas, processos e acabamento para garantir alta consistência e excelência em cada peça.</p>
            <div className="card-badges">
              <span>Controle dimensional</span>
              <span>Processo padronizado</span>
              <span>Alta repetibilidade</span>
            </div>
          </article>
        </div>
      </section>

      <a className="whats-float" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá, gostaria de fazer um orçamento.")}`} target="_blank" rel="noopener noreferrer" aria-label="Abrir conversa no WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.3A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8 8 0 1 1 12 20Zm4.4-6c-.2-.1-1.4-.7-1.6-.7s-.3-.1-.5.1-.6.7-.7.8-.2.2-.5.1a6.5 6.5 0 0 1-1.9-1.2 7.2 7.2 0 0 1-1.3-1.7c-.1-.3 0-.4.1-.5l.4-.5.2-.4a.4.4 0 0 0 0-.4c0-.1-.5-1.3-.8-1.8-.2-.4-.4-.3-.5-.3h-.5a1 1 0 0 0-.7.3c-.2.2-.9.8-.9 2 0 1.1.9 2.3 1 2.5.2.1 1.7 2.7 4.2 3.7.6.3 1 .4 1.4.5.6.2 1.1.2 1.5.1.5-.1 1.4-.6 1.6-1.2.2-.5.2-1 .1-1.1s-.2-.1-.4-.2Z" />
        </svg>
      </a>

      {selectedSlide && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={selectedSlide.title} onClick={() => setSelectedSlide(null)}>
          <button type="button" className="lightbox-close" onClick={() => setSelectedSlide(null)} aria-label="Fechar imagem">
            ×
          </button>
          <OptimizedImage
            src={selectedSlide.image}
            alt={selectedSlide.title}
            className="lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
