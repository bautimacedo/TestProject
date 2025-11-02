import { useEffect, useState } from 'react';
import { menuSections } from './data/menu.js';
import './App.css';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#historia', label: 'Nuestra historia' },
  { href: '#carta', label: 'Carta' },
  { href: '#galeria', label: 'Galería' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' }
];

const heroImage =
  'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=1600&q=80';

const featuredProducts = [
  {
    name: 'Latte de Amapola',
    description: 'Blend exclusivo con notas florales y leche texturizada.',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Torta “Matilda”',
    description: 'Capas húmedas de chocolate con dulce de leche artesanal.',
    image: 'https://images.unsplash.com/photo-1505253216365-81ff0d4b93ef?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Roll de canela',
    description: 'Glaseado de naranja y especias suaves, horneado cada mañana.',
    image: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=900&q=80'
  }
];

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Interior luminoso de Amapola Bakery & Coffee'
  },
  {
    src: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=80',
    alt: 'Detalle de café de especialidad servido en taza de cerámica'
  },
  {
    src: 'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1200&q=80',
    alt: 'Barra de pastelería artesanal con luz natural'
  },
  {
    src: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Fachada cálida y minimalista'
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Clientes disfrutando en un ambiente tranquilo'
  },
  {
    src: 'https://images.unsplash.com/photo-1533777845196-1b012dc38ac9?auto=format&fit=crop&w=1200&q=80',
    alt: 'Mesa con desayuno completo y flores frescas'
  }
];

const testimonials = [
  {
    quote: '“Excelente café de especialidad y baristas que aman lo que hacen.”',
    author: 'Rocío, reseña en Google'
  },
  {
    quote: '“Ambiente hermoso y tranquilo, ideal para desconectar en la ciudad.”',
    author: 'Martín, reseña en Google'
  },
  {
    quote: '“Pastelería artesanal deliciosa, siempre con opciones nuevas.”',
    author: 'Elena, reseña en Google'
  }
];

const blogPosts = [
  {
    title: 'Taller de pastelería de invierno',
    description:
      'Un encuentro íntimo para descubrir técnicas de laminados y glaseados naturales. Cupos limitados.',
    date: 'Julio 2025'
  },
  {
    title: 'Nueva cosecha de nuestro tostador aliado',
    description:
      'Recibimos microlotes de café colombiano con notas frutales y florales. Vení a conocerlos en barra.',
    date: 'Junio 2025'
  },
  {
    title: 'Brunch de domingo con música en vivo',
    description:
      'Todos los domingos por la tarde, sets acústicos y menú especial para compartir.',
    date: 'Domingo 15:00 – 21:00'
  }
];

const whatsappLink = 'https://wa.me/5493517887931';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setMenuOpen(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <div className={`app-shell ${menuOpen ? 'menu-open' : ''}`}>
      <a className="skip-link" href="#inicio">
        Saltar al contenido
      </a>
      <header className="site-header">
        <div className="container nav-container">
          <a className="brand" href="#inicio">
            <span className="brand-mark">Amapola</span>
            <span className="brand-subtitle">Bakery & Coffee</span>
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="cta-link"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Reservar
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero-content">
            <div className="hero-copy">
              <p className="eyebrow">Córdoba · Argentina</p>
              <h1>Un rincón de calma en el corazón de la ciudad.</h1>
              <p>
                Café de especialidad, pastelería artesanal y momentos tranquilos en un espacio íntimo,
                cálido y luminoso.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="#carta">
                  Ver carta
                </a>
                <a className="btn ghost" href={whatsappLink} target="_blank" rel="noreferrer">
                  Pedidos por WhatsApp
                </a>
              </div>
            </div>
            <div className="hero-media">
              <img src={heroImage} alt="Interior de la cafetería Amapola" />
            </div>
          </div>
        </section>

        <section className="intro" aria-labelledby="intro-heading">
          <div className="container intro-grid">
            <div>
              <h2 id="intro-heading">Amapola Bakery & Coffee</h2>
              <p>
                Nacimos en la galería Casa Tomada, en barrio Güemes, y hoy florecemos en Nueva Córdoba.
                Somos un refugio urbano donde cada taza y cada bocado se prepara con dedicación, materia
                prima local y el deseo de regalar una pausa.
              </p>
            </div>
            <div className="stat-grid" role="list">
              <div className="stat-card" role="listitem">
                <span className="stat-number">+20</span>
                <span className="stat-label">Etiquetas de café invitados al año</span>
              </div>
              <div className="stat-card" role="listitem">
                <span className="stat-number">100%</span>
                <span className="stat-label">Pastelería artesanal hecha en casa</span>
              </div>
              <div className="stat-card" role="listitem">
                <span className="stat-number">200 m²</span>
                <span className="stat-label">De luz natural para respirar calma</span>
              </div>
            </div>
          </div>
        </section>

        <section className="featured" aria-labelledby="featured-heading">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Recomendados de la casa</p>
              <h2 id="featured-heading">Sabores que nos representan</h2>
            </div>
            <div className="card-grid">
              {featuredProducts.map((product) => (
                <article key={product.name} className="card">
                  <div className="card-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="card-body">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="story" id="historia" aria-labelledby="story-heading">
          <div className="container story-grid">
            <div>
              <p className="eyebrow">Nuestra Historia</p>
              <h2 id="story-heading">Un rincón escondido, creado para ser hallado</h2>
              <p>
                Amapola nació del amor por la pastelería artesanal y el café de especialidad. Comenzó en la
                histórica galería Casa Tomada, en barrio Güemes, y gracias al apoyo de sus clientes creció y se
                trasladó a Nueva Córdoba. Amapola es un rincón escondido, creado para ser hallado y disfrutar un
                momento de calma en el constante movimiento de la ciudad.
              </p>
              <a className="btn secondary" href={whatsappLink} target="_blank" rel="noreferrer">
                Reservar una mesa
              </a>
            </div>
            <div className="story-gallery">
              <img
                src="https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=900&q=80"
                alt="Equipo de Amapola preparando café"
              />
              <img
                src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&w=900&q=80"
                alt="Detalle de torta artesanal con flores"
              />
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80"
                alt="Clientes disfrutando de una tarde tranquila"
              />
            </div>
          </div>
        </section>

        <section className="menu" id="carta" aria-labelledby="menu-heading">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Carta</p>
              <h2 id="menu-heading">Elegí tu momento favorito</h2>
            </div>
            <div className="menu-collection">
              {menuSections.map((section) => (
                <article key={section.id} className="menu-section" id={section.id}>
                  <div className="menu-media">
                    <img src={section.image} alt={section.title} />
                  </div>
                  <div className="menu-body">
                    <h3>{section.title}</h3>
                    <p className="menu-tagline">{section.tagline}</p>
                    <ul>
                      {section.items.map((item) => (
                        <li key={item.name}>
                          <h4>{item.name}</h4>
                          <p>{item.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="banner">
          <div className="container banner-content">
            <div>
              <h2>¿Reservamos tu mesa?</h2>
              <p>Escribinos por WhatsApp y coordinemos tu próxima pausa en Amapola.</p>
            </div>
            <a className="btn primary" href={whatsappLink} target="_blank" rel="noreferrer">
              Abrir WhatsApp
            </a>
          </div>
        </section>

        <section className="gallery" id="galeria" aria-labelledby="gallery-heading">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Galería</p>
              <h2 id="gallery-heading">Instantes que inspiran calma</h2>
            </div>
            <div className="gallery-grid">
              {galleryImages.map((image) => (
                <figure key={image.src} className="gallery-item">
                  <img src={image.src} alt={image.alt} />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials" id="testimonios" aria-labelledby="testimonials-heading">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Testimonios</p>
              <h2 id="testimonials-heading">Lo que dicen quienes nos visitan</h2>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.author} className="testimonial-card">
                  <p>{testimonial.quote}</p>
                  <cite>{testimonial.author}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="blog" id="novedades" aria-labelledby="blog-heading">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Novedades</p>
              <h2 id="blog-heading">Actividades y sabores de temporada</h2>
            </div>
            <div className="blog-grid">
              {blogPosts.map((post) => (
                <article key={post.title} className="blog-card">
                  <p className="blog-date">{post.date}</p>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <a className="blog-link" href={whatsappLink} target="_blank" rel="noreferrer">
                    Consultar disponibilidad
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contacto" aria-labelledby="contact-heading">
          <div className="container contact-grid">
            <div>
              <div className="section-heading">
                <p className="eyebrow">Contacto</p>
                <h2 id="contact-heading">Estamos en Nueva Córdoba</h2>
              </div>
              <ul className="contact-list">
                <li>
                  <strong>Dirección:</strong> Independencia 1039, Nueva Córdoba, Córdoba, Argentina
                </li>
                <li>
                  <strong>Horarios:</strong> Lunes a sábado 09:00 – 21:00 | Domingo 15:00 – 21:00
                </li>
                <li>
                  <strong>Teléfono / WhatsApp:</strong>{' '}
                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    +54 9 351 788 7931
                  </a>
                </li>
                <li>
                  <strong>Redes:</strong>{' '}
                  <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    Instagram
                  </a>{' '}
                  ·{' '}
                  <a href="https://maps.app.goo.gl/" target="_blank" rel="noreferrer">
                    Google Maps
                  </a>{' '}
                  ·{' '}
                  <a href="https://linktr.ee" target="_blank" rel="noreferrer">
                    Linktree
                  </a>
                </li>
              </ul>
              <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
                <h3>Escribinos</h3>
                <label>
                  Nombre
                  <input type="text" name="name" placeholder="Tu nombre" required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" placeholder="tu@email.com" required />
                </label>
                <label>
                  Mensaje
                  <textarea name="message" rows="4" placeholder="Contanos en qué podemos ayudarte" />
                </label>
                <button className="btn primary" type="submit">Enviar mensaje</button>
              </form>
            </div>
            <div className="map-wrapper">
              <iframe
                title="Mapa de Amapola Bakery & Coffee"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1097.3656586955876!2d-64.18943384188493!3d-31.424719156966968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d5762d782d0e9%3A0xdee280c89eacdd5!2sIndependencia%201039%2C%20X5000%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1708888888888!5m2!1ses-419!2sar"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <p className="footer-brand">Amapola Bakery & Coffee</p>
            <p>© 2025 Amapola Bakery & Coffee. Todos los derechos reservados.</p>
          </div>
          <div className="footer-links">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://maps.app.goo.gl/" target="_blank" rel="noreferrer">
              Google Maps
            </a>
            <a href="https://linktr.ee" target="_blank" rel="noreferrer">
              Linktree
            </a>
          </div>
        </div>
      </footer>

      <a className="whatsapp-float" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp">
        <span>WhatsApp</span>
      </a>
    </div>
  );
}

export default App;
