const DELIVEROO_URL = "https://deliveroo.fr/fr/menu/paris/courcelles-wagram/cook";
const PHONE = "01 42 67 36 54";
const PHONE_TEL = "+33142673654";
const INSTAGRAM_URL = "https://instagram.com/cook_restaurant_paris";
const ADDRESS = "27 Avenue Niel, 75017 Paris";

const entrees = [
  { name: "Carpaccio de bœuf, émincé de champignons, sauce césar", price: "24€" },
  { name: "Chiffonnade de charcuteries (dinde, saucisson sec, veau pressé)", price: "25€" },
  { name: "Houmous bassar (viande hachée)", price: "18€" },
  { name: "Nuggets de parguit (chapelure milanaise)", price: "20€" },
  { name: "Piments padron", price: "16€" },
  { name: "Carpaccio de tomates de Cynthia, ventrèche de thon, basilic", price: "22€" },
  { name: "Anchois", price: "16€" },
  { name: "Boîte de petites sardines, toasts", price: "16€" },
  { name: "Haricots verts et champignons en salade (huile d'olive, balsamique)", price: "16€" },
  { name: "Mini fricassé, brick ou pizza (l'unité)", price: "3€" },
];

const salades = [
  { name: "Salade césar", desc: "Iceberg, tomates cerise, croûtons, poulet pané ou grillé", price: "28€" },
  { name: "Salade chinoise", desc: "Soja, émincé de carottes et concombre, poulet cuit à la vapeur", price: "28€" },
  { name: "Salade de foies de volaille", desc: "Iceberg, endives, tomates cerise, foies de volaille, œuf poché, balsamique", price: "28€" },
  { name: "Salade paysanne", desc: "Iceberg, tomates cerise, dés de dinde et poitrine de veau, œuf poché, balsamique", price: "28€" },
  { name: "Salade niçoise", desc: "Iceberg, haricots verts, pomme de terre, thon, tomates, œuf dur, concombre, poivrons, endives, olives", price: "28€" },
  { name: "Assiette tunisienne", desc: "Méchouia, pomme de terre, thon, œuf poché, harissa, olives, poivrons, câpres, citron confit, piment doux", price: "28€" },
];

const pates = [
  { name: "Spaghettis merguez", price: "28€" },
  { name: "Spaghettis bolognaise", price: "28€" },
  { name: "Penne au thon et aux olives", price: "24€" },
  { name: "Penne à la tomate", price: "20€" },
];

const petitsPlats = [
  { name: "Cordon bleu", price: "29€" },
  { name: "Croque Jordan « croque-monsieur » (avec ou sans œuf)", price: "26€" },
  { name: "Saucisse, œuf au plat", price: "28€" },
  { name: "Omelette", price: "20€" },
  { name: "Œufs au plat", price: "20€" },
  { name: "Œufs brouillés", price: "20€" },
];

const burgers = [
  { name: "Hamburger", price: "28€" },
  { name: "Cheeseburger", price: "29€" },
  { name: "Chicken burger", price: "28€" },
  { name: "Lippi chicken burger « milanaise » (supp. cheese 1€)", price: "28€" },
  { name: "Fish burger (supp. cheese 1€)", price: "28€" },
];

const viandes = [
  { name: "Escalope milanaise", desc: "Poulet, chapelure maison", price: "28€" },
  { name: "Escalope de poulet 158 (schnitzel)", price: "28€" },
  { name: "Escalope de poulet grillée", price: "28€" },
  { name: "Parguit", price: "30€" },
  { name: "Demi poulet rôti", price: "30€" },
  { name: "Merguez", price: "28€" },
  { name: "Gros steak haché, œuf à cheval ou pas", price: "28€" },
  { name: "Steak tartare", price: "30€" },
  { name: "Entrecôte", price: "40€" },
  { name: "Noix d'entrecôte", price: "44€" },
  { name: "Côte d'agneau (4 pièces)", price: "41€" },
  { name: "Plat du jour", price: "28€" },
];

const poissons = [
  { name: "Tartare de saumon", price: "30€" },
  { name: "Pavé de saumon", price: "36€" },
  { name: "Milanaise de thon, roquette, tomates", price: "40€" },
  { name: "Steak de thon", price: "36€" },
  { name: "Complét poisson", price: "+ 5€" },
];

const garnitures = [
  { name: "Frites", price: "" },
  { name: "Spaghettis sauce tomate", price: "" },
  { name: "Salade verte", price: "" },
  { name: "Endives", price: "" },
  { name: "Haricots verts sautés ou vapeur", price: "" },
  { name: "Riz blanc", price: "" },
];

const supplements = [
  { name: "Bacon", price: "9€" },
  { name: "Garniture", price: "8€" },
  { name: "Steak haché", price: "12€" },
  { name: "Merguez (2 pièces)", price: "12€" },
  { name: "Saucisse (1 pièce)", price: "8€" },
  { name: "Cheese", price: "2€" },
];

const boissons = [
  { name: "Sodas 33cl", price: "4€" },
  { name: "Eau minérale 50cl", price: "4€" },
  { name: "Eau gazeuse 50cl", price: "4€" },
  { name: "Thé, menthe fraîche", price: "5€" },
  { name: "Expresso", price: "3,50€" },
  { name: "Double expresso", price: "5€" },
  { name: "Bière 33cl", price: "5€" },
];

const platsPhotos = [
  { src: "/dishes/carpaccio.jpg", name: "Carpaccio de bœuf", desc: "Émincé de champignons, sauce césar" },
  { src: "/dishes/salade-nicoise.jpg", name: "Salade niçoise", desc: "Thon, haricots verts, œuf dur, olives" },
  { src: "/dishes/salade-cesar.jpg", name: "Salade césar", desc: "Poulet pané, croûtons, tomates cerise" },
  { src: "/dishes/cordon-bleu.jpg", name: "Cordon bleu", desc: "Spaghettis sauce tomate" },
  { src: "/dishes/penne-thon.jpg", name: "Penne au thon", desc: "Sauce tomate, olives" },
  { src: "/dishes/salade-paysanne.jpg", name: "Salade paysanne", desc: "Dés de dinde, poitrine de veau, œuf poché" },
];

function MenuItem({ name, desc, price }: { name: string; desc?: string; price: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-2.5">
      <div className="min-w-0">
        <span className="text-base text-gray-900">{name}</span>
        {desc && <p className="text-sm text-gray-500 mt-0.5">{desc}</p>}
      </div>
      {price && <span className="shrink-0 font-medium text-gray-900 whitespace-nowrap">{price}</span>}
    </div>
  );
}

function MenuSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1">
      <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-2">{title}</h3>
      {children}
    </div>
  );
}

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
       className="inline-flex items-center justify-center rounded-lg px-7 py-3 text-base font-semibold text-white transition-colors"
       style={{ backgroundColor: '#B85C3C' }}>
      {children}
    </a>
  );
}

function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
       className="inline-flex items-center justify-center rounded-lg px-7 py-3 text-base font-semibold transition-colors border"
       style={{ backgroundColor: '#F5F0E8', color: '#3D2817', borderColor: '#D4C4B0' }}>
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFAF8', color: '#1A1A1A' }}>
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-gray-200 backdrop-blur-md" style={{ backgroundColor: 'rgba(250,250,248,0.9)' }}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="font-serif text-3xl font-semibold tracking-tight" style={{ color: '#1A1A1A' }}>COOK</a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#menu" className="text-base text-gray-500 hover:text-gray-900 transition-colors">Menu</a>
            <a href="#photos" className="text-base text-gray-500 hover:text-gray-900 transition-colors">Photos</a>
            <a href="#horaires" className="text-base text-gray-500 hover:text-gray-900 transition-colors">Horaires</a>
            <a href="#contact" className="text-base text-gray-500 hover:text-gray-900 transition-colors">Contact</a>
          </div>
          <a href={DELIVEROO_URL} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-colors"
             style={{ backgroundColor: '#B85C3C' }}>
            Commander
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-16 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="grid max-w-2xl gap-6">
            <span className="inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: '#B85C3C' }}>
              Bistrot casher · Paris 17e
            </span>
            <div className="grid gap-4">
              <h1 className="font-serif text-5xl font-semibold sm:text-6xl" style={{ color: '#1A1A1A' }}>
                Cuisine maison<br />au cœur de Paris
              </h1>
              <p className="max-w-xl text-lg text-gray-500">
                Viandes grillées, poissons frais, salades généreuses, pâtes et burgers maison.
                Une table où l'on revient, comme à la maison.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href={DELIVEROO_URL}>Commander sur Deliveroo</PrimaryButton>
              <SecondaryButton href="#menu">Voir la carte</SecondaryButton>
            </div>
          </div>
          <figure className="min-w-0 overflow-hidden rounded-2xl border border-gray-200">
            <img src="/dishes/carpaccio.jpg" alt="Carpaccio de bœuf aux champignons, sauce césar" className="aspect-[4/3] w-full object-cover" />
          </figure>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-y border-gray-200" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-3 lg:px-8">
          <div className="text-center lg:text-left">
            <p className="font-serif text-3xl font-bold">92 j'aime</p>
            <p className="text-sm text-gray-500 mt-1">Sur Instagram — @cook_restaurant_paris</p>
          </div>
          <div className="text-center lg:text-left">
            <p className="font-serif text-3xl font-bold">Cuisine casher</p>
            <p className="text-sm text-gray-500 mt-1">Beth-Din de Paris · Viande française</p>
          </div>
          <div className="text-center lg:text-left">
            <p className="font-serif text-3xl font-bold">27 Av. Niel</p>
            <p className="text-sm text-gray-500 mt-1">Paris 17e · Ternes / Wagram</p>
          </div>
        </div>
      </section>

      {/* PHOTOS */}
      <section id="photos" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-4xl font-bold sm:text-5xl">Nos plats en images</h2>
          <p className="mt-3 text-lg text-gray-500">Une sélection de ce qui vous attend</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {platsPhotos.map((plat) => (
            <figure key={plat.src} className="overflow-hidden rounded-xl border border-gray-200 bg-white">
              <img src={plat.src} alt={plat.name} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <figcaption className="p-4">
                <p className="text-base font-medium text-gray-900">{plat.name}</p>
                <p className="text-sm text-gray-500 mt-0.5">{plat.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="border-y border-gray-200" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-4xl font-bold sm:text-5xl">La carte</h2>
            <p className="mt-3 text-lg text-gray-500">Tous nos plats sont accompagnés d'une garniture au choix</p>
          </div>

          {/* Entrées + Salades */}
          <div className="grid gap-10 lg:grid-cols-2 mb-12">
            <MenuSection title="Entrées">{entrees.map((item) => <MenuItem key={item.name} {...item} />)}</MenuSection>
            <MenuSection title="Salades">{salades.map((item) => <MenuItem key={item.name} {...item} />)}</MenuSection>
          </div>

          {/* Pâtes + Petits plats */}
          <div className="grid gap-10 lg:grid-cols-2 mb-12">
            <MenuSection title="Pâtes">{pates.map((item) => <MenuItem key={item.name} {...item} />)}</MenuSection>
            <MenuSection title="Les petits plats">{petitsPlats.map((item) => <MenuItem key={item.name} {...item} />)}</MenuSection>
          </div>

          {/* Burgers + Viandes */}
          <div className="grid gap-10 lg:grid-cols-2 mb-12">
            <MenuSection title="Les burgers">{burgers.map((item) => <MenuItem key={item.name} {...item} />)}</MenuSection>
            <MenuSection title="Les viandes">{viandes.map((item) => <MenuItem key={item.name} {...item} />)}</MenuSection>
          </div>

          {/* Poissons + Garnitures/Suppléments */}
          <div className="grid gap-10 lg:grid-cols-2 mb-12">
            <MenuSection title="Les poissons">
              {poissons.map((item) => <MenuItem key={item.name} {...item} />)}
            </MenuSection>
            <div className="grid gap-8">
              <MenuSection title="Les garnitures">{garnitures.map((item) => <MenuItem key={item.name} {...item} />)}</MenuSection>
              <MenuSection title="Les suppléments">{supplements.map((item) => <MenuItem key={item.name} {...item} />)}</MenuSection>
            </div>
          </div>

          {/* Boissons */}
          <div className="lg:max-w-md">
            <MenuSection title="Les boissons">{boissons.map((item) => <MenuItem key={item.name} {...item} />)}</MenuSection>
          </div>

          <p className="mt-8 text-sm text-gray-500 italic">Provenance des viandes : France</p>
        </div>
      </section>

      {/* HORAIRES */}
      <section id="horaires" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-serif text-4xl font-bold sm:text-5xl">Horaires & informations</h2>
            <p className="mt-3 text-lg text-gray-500">
              Ouvert tous les jours pour le déjeuner et le dîner. Fermé le samedi (Chabbat). {ADDRESS} — {PHONE}
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-6 bg-white">
            <ul className="grid gap-3">
              <li className="flex justify-between text-base"><span>Dimanche — Jeudi</span><span className="text-gray-500">12h00 – 15h00 · 19h00 – 22h30</span></li>
              <li className="border-t border-gray-100" />
              <li className="flex justify-between text-base"><span>Vendredi</span><span className="text-gray-500">12h00 – 14h30</span></li>
              <li className="border-t border-gray-100" />
              <li className="flex justify-between text-base"><span>Samedi</span><span className="text-gray-500">Fermé</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="commander" className="border-t border-gray-200" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          <h2 className="font-serif text-4xl font-bold sm:text-5xl">Commander en livraison</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500">
            Une envie de cuisine maison ? Commandez directement sur Deliveroo, en livraison ou à emporter.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <PrimaryButton href={DELIVEROO_URL}>Commander sur Deliveroo</PrimaryButton>
            <SecondaryButton href={INSTAGRAM_URL}>Nous suivre sur Instagram</SecondaryButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <p className="font-serif text-2xl font-semibold">COOK</p>
              <p className="mt-2 text-sm text-gray-500">Bistrot casher de quartier — Cuisine maison à Paris</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Contact</p>
              <ul className="mt-2 grid gap-1 text-sm text-gray-500">
                <li>{ADDRESS}</li>
                <li><a href={`tel:${PHONE_TEL}`} className="hover:text-gray-900 transition-colors">{PHONE}</a></li>
                <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">@cook_restaurant_paris</a></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Navigation</p>
              <ul className="mt-2 grid gap-1 text-sm text-gray-500">
                <li><a href="#menu" className="hover:text-gray-900 transition-colors">La carte</a></li>
                <li><a href="#photos" className="hover:text-gray-900 transition-colors">Photos</a></li>
                <li><a href="#horaires" className="hover:text-gray-900 transition-colors">Horaires</a></li>
                <li><a href={DELIVEROO_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">Commander sur Deliveroo</a></li>
              </ul>
            </div>
          </div>
          <div className="my-6 border-t border-gray-100" />
          <p className="text-sm text-gray-500 text-center">© 2025 COOK — Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
}

