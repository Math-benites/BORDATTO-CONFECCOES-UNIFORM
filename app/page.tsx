const slides = [
  { image: "/img/Gemini_Generated_Image_1bv3h11bv3h11bv3.png", tag: "Escolar", title: "Uniformes escolares com acabamento premium" },
  { image: "/img/Gemini_Generated_Image_2rcg0o2rcg0o2rcg.png", tag: "Escolar", title: "Modelos escolares para ensino fundamental e medio" },
  { image: "/img/Gemini_Generated_Image_a7olnja7olnja7ol.png", tag: "Escolar", title: "Conforto e resistencia para a rotina escolar" },
  { image: "/img/Gemini_Generated_Image_d8e8y1d8e8y1d8e8.png", tag: "Escolar", title: "Padroes escolares personalizados por instituicao" },
  { image: "/img/Gemini_Generated_Image_dnbfnadnbfnadnbf.png", tag: "Escolar", title: "Colecoes completas para uniformizacao escolar" }
];

const whatsappNumber = "5548991217882";

export default function Home() {
  return (
    <main>
      <header className="top-bar">
        <div className="container top-bar-inner">
          <div className="brand-mini">
            <img src="/img/logo-removebg-preview.png" alt="Logo Bordatto Confeccoes" />
            <strong>Bordatto Confeccoes</strong>
          </div>
          <a className="top-bar-cta" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("api ola")}`} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </header>

      <section className="hero sale-hero">
        <div className="container">
          <p className="eyebrow">UNIFORME ESCOLAR, EMPRESARIAL E ESPORTIVO</p>
          <h1>Bordatto Confeccoes</h1>
          <p className="lead">Venda de uniformes com qualidade, acabamento profissional e entrega para todo o Brasil.</p>
        </div>
      </section>

      <section className="carousel-section">
        <div className="container">
          <h2>Modelos em destaque</h2>
        </div>
        <div className="carousel-bleed">
          <div className="carousel-marquee">
            <div className="carousel-group">
              {slides.map((slide) => (
                <article key={`a-${slide.image}`} className="slide-card">
                  <img src={slide.image} alt={slide.title} className="slide-image" />
                  <div className="slide-overlay">
                    <span>{slide.tag}</span>
                    <h3>{slide.title}</h3>
                  </div>
                </article>
              ))}
            </div>
            <div className="carousel-group" aria-hidden="true">
              {slides.map((slide) => (
                <article key={`b-${slide.image}`} className="slide-card">
                  <img src={slide.image} alt="" className="slide-image" />
                  <div className="slide-overlay">
                    <span>{slide.tag}</span>
                    <h3>{slide.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          <article className="card">
            <h3>Alta durabilidade</h3>
            <p>Tecidos resistentes para uso intenso no dia a dia.</p>
          </article>
          <article className="card">
            <h3>Personalizacao completa</h3>
            <p>Logo, cores e modelagem de acordo com sua necessidade.</p>
          </article>
          <article className="card">
            <h3>Atendimento rapido</h3>
            <p>Orcamento direto no WhatsApp com resposta agil.</p>
          </article>
        </div>
      </section>

      <a className="whats-float" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("api ola")}`} target="_blank" rel="noopener noreferrer" aria-label="Abrir conversa no WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.3A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8 8 0 1 1 12 20Zm4.4-6c-.2-.1-1.4-.7-1.6-.7s-.3-.1-.5.1-.6.7-.7.8-.2.2-.5.1a6.5 6.5 0 0 1-1.9-1.2 7.2 7.2 0 0 1-1.3-1.7c-.1-.3 0-.4.1-.5l.4-.5.2-.4a.4.4 0 0 0 0-.4c0-.1-.5-1.3-.8-1.8-.2-.4-.4-.3-.5-.3h-.5a1 1 0 0 0-.7.3c-.2.2-.9.8-.9 2 0 1.1.9 2.3 1 2.5.2.1 1.7 2.7 4.2 3.7.6.3 1 .4 1.4.5.6.2 1.1.2 1.5.1.5-.1 1.4-.6 1.6-1.2.2-.5.2-1 .1-1.1s-.2-.1-.4-.2Z" />
        </svg>
      </a>
    </main>
  );
}
