const whatsappNumber = "5548991217882";

const atelierImages = [
  {
    src: "/img_sobre/Gemini_Generated_Image_ct92crct92crct92.png",
    alt: "Costureira ajustando roupa em manequim"
  },
  {
    src: "/img_sobre/Gemini_Generated_Image_l5r72ml5r72ml5r7.png",
    alt: "Profissional de confecção em máquina de costura"
  }
];

export default function SobrePage() {
  return (
    <main className="about-page">
      <header className="top-bar">
        <div className="container top-bar-inner">
          <a className="brand-mini" href="/">
            <img src="/img_home/logo-removebg-preview.png" alt="Logo Bordatto Confecções" />
            <strong>Bordatto Confecções</strong>
          </a>
          <nav className="top-nav">
            <a className="top-link" href="/">Início</a>
            <a className="top-link" href="/sobre">Sobre</a>
          </nav>
        </div>
      </header>

      <section className="hero about-hero">
        <div className="container">
          <img className="about-banner" src="/img_sobre/sobre.png" alt="Sobre a Bordatto Confecções" />
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          <article className="card">
            <h3>O canivete suíço da costura</h3>
            <p>
              Desenvolvemos cada projeto do zero: criação, modelagem, corte, ajustes e produção - sob medida
              ou em escala. Trabalhamos com padrão técnico de ateliê, unindo precisão, organização e
              excelência em cada etapa.
            </p>
          </article>
          <article className="card">
            <h3>Do uniforme ao casamento</h3>
            <p>
              Produzimos coleções escolares e empresariais, além de peças especiais para festas, cerimônias e
              casamentos. Versatilidade e cuidado para atender desde demandas corporativas até momentos únicos.
            </p>
          </article>
          <article className="card">
            <h3>Qualidade artesanal</h3>
            <p>
              Nossa equipe combina experiência, seleção criteriosa de materiais e revisão detalhada em todas
              as fases do processo, garantindo acabamento premium em cada peça.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Nosso atelier</h2>
          <div className="atelier-grid">
            {atelierImages.map((image) => (
              <article key={image.src} className="atelier-card">
                <img src={image.src} alt={image.alt} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-cta">
          <h2>Precisa de um projeto de confecção completo?</h2>
          <p>Fale com a Bordatto Confecções e receba atendimento direto para seu tipo de demanda.</p>
          <a className="top-bar-cta" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("api ola")}`} target="_blank" rel="noopener noreferrer">
            Conversar no WhatsApp
          </a>
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
