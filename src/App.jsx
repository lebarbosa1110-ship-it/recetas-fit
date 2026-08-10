import { useEffect, useRef, useState } from "react";
import {
  UtensilsCrossed,
  Clock,
  ListChecks,
  Zap,
  Candy,
  Salad,
  Moon,
  Brain,
  Wind,
  Check,
  X,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Checkout (Hotmart)
// ---------------------------------------------------------------------------
const HOTMART_URL = "https://pay.hotmart.com/K107068380B";

function buildCheckoutUrl(sck) {
  const separator = HOTMART_URL.includes("?") ? "&" : "?";
  return `${HOTMART_URL}${separator}sck=${sck}`;
}

// ---------------------------------------------------------------------------
// Textos das seções (edite aqui, sem mexer no layout)
// ---------------------------------------------------------------------------
const HERO = {
  badge: "Recetario en español",
  title: "160 recetas fit para comer rico sin dejar la dieta",
  subtitle:
    "Recetas bajas en carbohidratos, fáciles y rápidas. Con tiempo de preparación, porciones e información nutricional en cada una.",
  pills: ["160 recetas", "97 páginas", "Descarga inmediata"],
  ctaLabel: "Quiero el recetario — $9,90",
  ctaNote: "Pago único. Sin suscripciones. Garantía de 7 días.",
  imageAlt: "Portada del recetario 160 Recetas Fit",
};

const PROBLEM = {
  title: "¿Por qué siempre terminas abandonando la dieta?",
  cards: [
    {
      icon: UtensilsCrossed,
      title: "Todo sabe igual",
      text: "Pollo, arroz y brócoli durante tres semanas. Nadie sostiene eso, y no es culpa de tu fuerza de voluntad.",
    },
    {
      icon: Clock,
      title: "No tienes dos horas",
      text: "Las recetas saludables suelen asumir que tienes toda la tarde libre para cocinar. La realidad es otra.",
    },
    {
      icon: ListChecks,
      title: "Ingredientes imposibles",
      text: "Harinas raras, superalimentos caros y técnicas de chef. Si no lo consigues en tu supermercado, no lo vas a hacer.",
    },
  ],
  closing: "El problema nunca fue tu disciplina. Fue no tener recetas que valga la pena repetir.",
};

const BENEFITS = {
  title: "Lo que cambia cuando comes bien",
  subtitle: "No se trata de sufrir menos. Se trata de sentirte distinto todos los días.",
  items: [
    {
      icon: Zap,
      title: "Energía más estable",
      text: "Sin el bajón de media tarde que llega después de una comida cargada de harinas.",
    },
    {
      icon: Candy,
      title: "Menos antojos de azúcar",
      text: "Cuando el cuerpo recibe grasa y proteína suficientes, el antojo constante baja solo.",
    },
    {
      icon: Salad,
      title: "Mejor digestión",
      text: "Comidas más simples, menos ultraprocesados y menos pesadez después de comer.",
    },
    {
      icon: Moon,
      title: "Sueño más profundo",
      text: "Lo que cenas afecta directamente cómo duermes y cómo amaneces al día siguiente.",
    },
    {
      icon: Brain,
      title: "Más concentración",
      text: "Menos picos de glucosa significa menos altibajos de atención durante el día.",
    },
    {
      icon: Wind,
      title: "Menos hinchazón",
      text: "Reducir harinas refinadas y azúcar suele notarse en el abdomen antes que en la balanza.",
    },
  ],
  note: "Los beneficios varían de una persona a otra. Este material es informativo y no sustituye la orientación de un profesional de la salud.",
};

const INCLUDES = {
  title: "160 recetas organizadas en 8 categorías",
  categories: [
    { number: 25, title: "Desayunos", text: "Muchos listos en menos de 10 minutos" },
    { number: 40, title: "Almuerzos y cenas", text: "Con proteína completa y saciante" },
    { number: 20, title: "Snacks", text: "Para ese momento entre comidas" },
    { number: 20, title: "Opciones vegetarianas", text: "Sin carne y sin depender de harinas" },
    { number: 10, title: "Sopas", text: "Fáciles de preparar en cantidad" },
    { number: 10, title: "Ensaladas", text: "Que funcionan como comida principal" },
    { number: 20, title: "Postres", text: "Sin azúcar ni harinas refinadas" },
    { number: 15, title: "Bebidas y batidos", text: "Para reemplazar los refrescos" },
  ],
};

const PREVIEW = {
  eyebrow: "Vista previa",
  title: "Mira por dentro antes de comprar",
  subtitle: "Estas son páginas reales del recetario.",
  items: [
    {
      src: "/preview-indice.png",
      caption: "Índice completo",
      alt: "Página del índice del recetario con las recetas numeradas",
    },
    {
      src: "/preview-recetas.png",
      caption: "Página de recetas",
      alt: "Página con dos recetas, sus ingredientes y su información nutricional",
    },
    {
      src: "/preview-capitulo.png",
      caption: "Apertura de capítulo",
      alt: "Página de apertura del capítulo de desayunos",
    },
  ],
};

const RECIPE_ANATOMY = {
  title: "Así es cada una de las 160 recetas",
  example: {
    number: 1,
    title: "Huevos revueltos cremosos con aguacate",
    time: "8 min",
    servings: "1 porción",
    ingredients: [
      "3 huevos",
      "1 cucharada de mantequilla",
      "2 cucharadas de crema de leche",
      "½ aguacate en cubos",
      "Sal y pimienta al gusto",
    ],
    steps: [
      "Bate los huevos con la crema de leche y una pizca de sal.",
      "Derrite la mantequilla en una sartén a fuego bajo.",
      "Vierte los huevos y revuelve suave y constante.",
      "Retira del fuego antes de que se vean listos y sirve con el aguacate.",
    ],
    nutrition: [
      { value: "480 kcal", label: "Calorías" },
      { value: "21 g", label: "Proteína" },
      { value: "42 g", label: "Grasa" },
      { value: "3 g", label: "C netos" },
    ],
    tip: "El secreto de los huevos cremosos es el fuego bajo y retirarlos antes de que se vean listos.",
  },
  points: [
    { title: "Tiempo real de preparación", text: "Sin sorpresas: lo que dice es lo que tarda." },
    { title: "Rendimiento en porciones", text: "Para que sepas exactamente cuánto rinde." },
    { title: "Ingredientes con medidas claras", text: "Nada de \"un poco de\" ni \"al ojo\"." },
    {
      title: "Información nutricional estimada",
      text: "Calorías, proteína, grasa y carbohidratos netos.",
    },
    {
      title: "Un consejo práctico",
      text: "El detalle que separa un plato correcto de uno que da ganas de repetir.",
    },
  ],
};

const WHO = {
  title: "¿Es para ti?",
  yes: {
    title: "Sí, si...",
    items: [
      "Quieres comer mejor sin pasar horas en la cocina",
      "Ya intentaste otras dietas y las abandonaste por aburrimiento",
      "Buscas ideas concretas, no teoría sobre nutrición",
      "Cocinas para ti o para tu familia y necesitas variedad",
      "Quieres saber los macros de lo que comes sin calcularlos tú mismo",
    ],
  },
  no: {
    title: "No, si...",
    items: [
      "Buscas una dieta milagrosa con resultados en una semana",
      "Esperas un plan de comidas día por día con lista de compras",
      "Necesitas un tratamiento para una condición médica específica",
      "No estás dispuesto a cocinar nada, ni siquiera 10 minutos",
    ],
  },
};

const OFFER = {
  title: "Todo el recetario por menos de lo que cuesta un almuerzo",
  productName: "160 Recetas Fit",
  price: "$9,90",
  currency: "USD",
  features: [
    "160 recetas en PDF",
    "97 páginas con índice",
    "Información nutricional en cada receta",
    "Acceso inmediato después del pago",
    "Léelo en el celular, la tablet o la computadora",
    "Es tuyo para siempre, sin suscripción",
  ],
  ctaLabel: "Comprar ahora — $9,90",
  guarantee:
    "Garantía de 7 días. Si no es lo que esperabas, escríbenos y te devolvemos el 100% de tu dinero. Sin preguntas.",
};

const FAQ = {
  title: "Preguntas frecuentes",
  items: [
    {
      q: "¿Cómo recibo el recetario?",
      a: "Inmediatamente después del pago recibes un correo con tu acceso. Descargas el PDF y es tuyo para siempre: lo guardas en tu celular o computadora y lo abres cuando quieras.",
    },
    {
      q: "¿Necesito ingredientes especiales o difíciles de conseguir?",
      a: "No. Todas las recetas usan ingredientes de supermercado común. Algunas incluyen harina de almendras o de coco, que hoy se consiguen en casi cualquier lado.",
    },
    {
      q: "No sé cocinar. ¿Me va a servir?",
      a: "Sí. Ninguna receta exige técnicas avanzadas y la mayoría se resuelve en menos de 30 minutos. Cada una tiene el paso a paso y un consejo práctico.",
    },
    {
      q: "¿Sirve para dieta keto?",
      a: "Todas las recetas son bajas en carbohidratos y cada una indica sus carbohidratos netos, así que puedes elegir las que encajen en tu límite diario.",
    },
    {
      q: "¿Hay opciones para vegetarianos?",
      a: "Sí, hay un capítulo completo con 20 recetas vegetarianas, además de varias más repartidas en otras categorías.",
    },
    {
      q: "¿Puedo leerlo en el celular?",
      a: "Sí. Es un PDF: se abre en cualquier celular, tablet o computadora, y funciona sin conexión una vez descargado.",
    },
    {
      q: "¿Y si no me gusta?",
      a: "Tienes 7 días para pedir la devolución completa. Escríbenos y te devolvemos tu dinero.",
    },
    {
      q: "Tengo una condición de salud. ¿Puedo usarlo?",
      a: "Este material es informativo y no sustituye la orientación médica. Si tienes alguna condición de salud, estás embarazada o tomas medicamentos, consulta con tu médico o nutricionista antes de cambiar tu alimentación.",
    },
  ],
};

const FINAL_CTA = {
  title: "Empieza por una receta. Después por otra.",
  text: "La mejor dieta no es la más estricta: es la que puedes sostener el mes que viene y el siguiente.",
  ctaLabel: "Quiero el recetario — $9,90",
};

const FOOTER = {
  brand: "160 Recetas Fit",
  tagline: "Recetario digital en español",
  links: [
    { label: "Política de reembolso", href: "#" },
    { label: "Contacto", href: "#" },
    { label: "Términos de uso", href: "#" },
  ],
  copyright: "© 2026. Todos los derechos reservados.",
  legalNotice:
    "Este material tiene fines exclusivamente informativos y educativos. No constituye asesoría médica ni nutricional y no sustituye la consulta con un profesional de la salud. Los valores nutricionales son estimaciones.",
};

const MOBILE_BAR = {
  price: "$9,90",
  ctaLabel: "Comprar ahora",
};

// ---------------------------------------------------------------------------
// Componentes utilitários
// ---------------------------------------------------------------------------
function CheckoutLink({ sck, className, children }) {
  return (
    <a
      href={buildCheckoutUrl(sck)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className} ${visible ? "fade-in" : "opacity-0"}`}>
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-12`}>
      {eyebrow && (
        <p className="text-teal font-semibold text-sm tracking-wide uppercase mb-3">{eyebrow}</p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink">{title}</h2>
      {subtitle && <p className="text-ink-soft text-lg mt-4">{subtitle}</p>}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Seções
// ---------------------------------------------------------------------------
function Hero() {
  return (
    <section className="bg-white pt-16 pb-16 md:py-20">
      <div className="max-w-content mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-teal-tint text-teal text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            {HERO.badge}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink leading-tight">
            {HERO.title}
          </h1>
          <p className="text-ink-soft text-lg mt-6 max-w-xl">{HERO.subtitle}</p>

          <div className="flex flex-wrap gap-3 mt-6">
            {HERO.pills.map((pill) => (
              <span
                key={pill}
                className="text-sm font-medium text-ink bg-surface border border-border rounded-full px-4 py-1.5"
              >
                {pill}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <CheckoutLink
              sck="hero"
              className="inline-block bg-orange hover:bg-orange-hover text-white font-semibold text-lg px-8 py-4 rounded-card transition-colors"
            >
              {HERO.ctaLabel}
            </CheckoutLink>
            <p className="text-ink-soft text-sm mt-3">{HERO.ctaNote}</p>
          </div>
        </div>

        <div className="w-full">
          <img
            src="/portada.png"
            alt={HERO.imageAlt}
            className="aspect-square w-full max-w-sm mx-auto object-cover rounded-card border border-border"
          />
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="max-w-content mx-auto px-6">
        <Reveal>
          <SectionHeading title={PROBLEM.title} />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {PROBLEM.cards.map((card) => (
            <Reveal key={card.title}>
              <div className="bg-white border border-border rounded-card shadow-sm p-8 h-full">
                <card.icon className="text-teal mb-4" size={28} strokeWidth={1.5} />
                <h3 className="font-serif text-xl font-semibold text-ink mb-2">{card.title}</h3>
                <p className="text-ink-soft">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="text-center font-serif text-xl text-ink mt-12 max-w-2xl mx-auto">
          {PROBLEM.closing}
        </p>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-content mx-auto px-6">
        <Reveal>
          <SectionHeading title={BENEFITS.title} subtitle={BENEFITS.subtitle} />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {BENEFITS.items.map((item) => (
            <Reveal key={item.title}>
              <div className="p-6 h-full">
                <item.icon className="text-teal mb-4" size={28} strokeWidth={1.5} />
                <h3 className="font-serif text-lg font-semibold text-ink mb-2">{item.title}</h3>
                <p className="text-ink-soft">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="text-center text-ink-soft text-sm mt-8 max-w-xl mx-auto">{BENEFITS.note}</p>
      </div>
    </section>
  );
}

function Includes() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="max-w-content mx-auto px-6">
        <Reveal>
          <SectionHeading title={INCLUDES.title} />
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {INCLUDES.categories.map((cat) => (
            <Reveal key={cat.title}>
              <div className="bg-white border border-border rounded-card shadow-sm p-6 h-full">
                <p className="font-serif text-3xl font-semibold text-teal mb-1">{cat.number}</p>
                <h3 className="font-semibold text-ink mb-1">{cat.title}</h3>
                <p className="text-ink-soft text-sm">{cat.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Preview() {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (openIndex === null) return;
    function handleKeyDown(e) {
      if (e.key === "Escape") setOpenIndex(null);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openIndex]);

  return (
    <section className="bg-white py-[60px] md:py-[88px]">
      <div className="max-w-content mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-teal-light font-semibold text-xs uppercase tracking-[0.18em] mb-3">
              {PREVIEW.eyebrow}
            </p>
            <h2 className="font-serif text-[40px] leading-tight font-semibold text-ink">
              {PREVIEW.title}
            </h2>
            <p className="text-ink-soft text-[19px] mt-4">{PREVIEW.subtitle}</p>
          </div>
        </Reveal>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 min-[900px]:grid min-[900px]:grid-cols-3 min-[900px]:overflow-visible min-[900px]:snap-none">
          {PREVIEW.items.map((item, i) => (
            <Reveal
              key={item.caption}
              className="shrink-0 w-[80%] snap-center min-[900px]:w-auto"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="block w-full text-left bg-white border border-border rounded-card p-3 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.14)] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 rounded-card"
              >
                <img src={item.src} alt={item.alt} className="w-full h-auto rounded-[6px]" />
                <p className="text-center text-ink-soft text-[13.5px] mt-3">{item.caption}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={PREVIEW.items[openIndex].caption}
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 z-[60] bg-ink/80 flex items-center justify-center p-6"
        >
          <img
            src={PREVIEW.items[openIndex].src}
            alt={PREVIEW.items[openIndex].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-auto rounded-card"
          />
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Cerrar"
            className="absolute top-6 right-6 text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full p-2"
          >
            <X size={28} />
          </button>
        </div>
      )}
    </section>
  );
}

function RecipeCard({ recipe }) {
  return (
    <div className="bg-white border border-border rounded-card shadow-sm p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center justify-center w-9 h-9 rounded-full bg-teal text-white font-serif font-semibold shrink-0">
          {recipe.number}
        </span>
        <h3 className="font-serif text-lg md:text-xl font-semibold text-ink">{recipe.title}</h3>
      </div>

      <div className="flex gap-2 mb-6">
        <span className="text-sm text-ink-soft bg-surface border border-border rounded-full px-3 py-1">
          {recipe.time}
        </span>
        <span className="text-sm text-ink-soft bg-surface border border-border rounded-full px-3 py-1">
          {recipe.servings}
        </span>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-xs font-semibold tracking-wide uppercase text-teal mb-3">
            Ingredientes
          </p>
          <ul className="space-y-1.5 text-ink-soft text-sm">
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-wide uppercase text-teal mb-3">
            Preparación
          </p>
          <ol className="space-y-2 text-ink-soft text-sm list-decimal list-inside">
            {recipe.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 bg-surface rounded-card p-4 mb-6">
        {recipe.nutrition.map((n) => (
          <div key={n.label} className="text-center">
            <p className="font-serif font-semibold text-ink">{n.value}</p>
            <p className="text-xs text-ink-soft">{n.label}</p>
          </div>
        ))}
      </div>

      <div className="border-l-2 border-teal bg-teal-tint rounded-r-card px-4 py-3 text-sm text-ink">
        {recipe.tip}
      </div>
    </div>
  );
}

function RecipeAnatomy() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="max-w-content mx-auto px-6">
        <Reveal>
          <SectionHeading title={RECIPE_ANATOMY.title} />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <Reveal>
            <RecipeCard recipe={RECIPE_ANATOMY.example} />
          </Reveal>

          <Reveal>
            <ul className="space-y-6">
              {RECIPE_ANATOMY.points.map((point, i) => (
                <li key={point.title} className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-border text-teal font-serif font-semibold shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink mb-1">{point.title}</h3>
                    <p className="text-ink-soft text-sm">{point.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhoIsItFor() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-content mx-auto px-6">
        <Reveal>
          <SectionHeading title={WHO.title} />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Reveal>
            <div>
              <h3 className="font-serif text-xl font-semibold text-ink mb-4">{WHO.yes.title}</h3>
              <ul className="space-y-3">
                {WHO.yes.items.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-teal-tint text-teal shrink-0 mt-0.5">
                      <Check size={14} strokeWidth={2.5} />
                    </span>
                    <span className="text-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="font-serif text-xl font-semibold text-ink mb-4">{WHO.no.title}</h3>
              <ul className="space-y-3">
                {WHO.no.items.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-surface text-ink-soft shrink-0 mt-0.5">
                      <X size={14} strokeWidth={2.5} />
                    </span>
                    <span className="text-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section id="oferta" className="bg-white py-16 md:py-20">
      <div className="max-w-content mx-auto px-6">
        <Reveal>
          <SectionHeading title={OFFER.title} />
        </Reveal>

        <Reveal className="max-w-[520px] mx-auto">
          <div className="border-2 border-teal rounded-card p-8">
            <h3 className="font-serif text-xl font-semibold text-ink mb-2">
              {OFFER.productName}
            </h3>
            <p className="mb-6">
              <span className="font-serif text-4xl font-semibold text-ink">{OFFER.price}</span>{" "}
              <span className="text-ink-soft text-sm">{OFFER.currency}</span>
            </p>

            <ul className="space-y-3 mb-8">
              {OFFER.features.map((feature) => (
                <li key={feature} className="flex gap-3 items-start">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-teal-tint text-teal shrink-0 mt-0.5">
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  <span className="text-ink-soft">{feature}</span>
                </li>
              ))}
            </ul>

            <CheckoutLink
              sck="oferta"
              className="block w-full text-center bg-orange hover:bg-orange-hover text-white font-semibold text-lg px-8 py-4 rounded-card transition-colors"
            >
              {OFFER.ctaLabel}
            </CheckoutLink>

            <div className="flex gap-3 items-start mt-6 bg-surface rounded-card p-4">
              <ShieldCheck className="text-teal shrink-0" size={22} strokeWidth={1.5} />
              <p className="text-ink-soft text-sm">{OFFER.guarantee}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-ink">{item.q}</span>
        <ChevronDown
          className={`text-teal shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
          size={20}
        />
      </button>
      {isOpen && <p className="text-ink-soft pb-5 pr-8">{item.a}</p>}
    </div>
  );
}

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="max-w-content mx-auto px-6">
        <Reveal>
          <SectionHeading title={FAQ.title} />
        </Reveal>

        <Reveal className="max-w-[760px] mx-auto">
          <div>
            {FAQ.items.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-teal py-16 md:py-20">
      <div className="max-w-content mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white">
          {FINAL_CTA.title}
        </h2>
        <p className="text-white/90 text-lg mt-4 max-w-xl mx-auto">{FINAL_CTA.text}</p>
        <CheckoutLink
          sck="final"
          className="inline-block bg-orange hover:bg-orange-hover text-white font-semibold text-lg px-8 py-4 rounded-card transition-colors mt-8"
        >
          {FINAL_CTA.ctaLabel}
        </CheckoutLink>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-white/70 py-12">
      <div className="max-w-content mx-auto px-6 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <p className="text-white font-serif font-semibold text-base">{FOOTER.brand}</p>
          <p className="mt-1">{FOOTER.tagline}</p>
        </div>

        <div className="flex flex-col gap-2 md:items-center">
          {FOOTER.links.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="md:text-right">
          <p>{FOOTER.copyright}</p>
        </div>
      </div>

      <p className="max-w-content mx-auto px-6 text-center text-xs text-white/50 mt-10">
        {FOOTER.legalNotice}
      </p>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 bg-white border-t border-border px-4 py-3 flex items-center justify-between gap-4 z-50">
      <span className="font-serif text-lg font-semibold text-ink">{MOBILE_BAR.price}</span>
      <CheckoutLink
        sck="barra-movil"
        className="flex-1 text-center bg-orange hover:bg-orange-hover text-white font-semibold px-6 py-3 rounded-card transition-colors"
      >
        {MOBILE_BAR.ctaLabel}
      </CheckoutLink>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Página
// ---------------------------------------------------------------------------
export default function App() {
  return (
    <div>
      <Hero />
      <Problem />
      <Benefits />
      <Includes />
      <Preview />
      <RecipeAnatomy />
      <WhoIsItFor />
      <Offer />
      <Faq />
      <FinalCta />
      <Footer />
      <div className="h-20 md:hidden" aria-hidden="true" />
      <MobileBar />
    </div>
  );
}
