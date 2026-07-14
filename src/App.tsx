/* ---------- Menu data (aligned with Deliveroo) ---------- */

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

const DELIVEROO_URL = "https://deliveroo.fr/fr/menu/paris/courcelles-wagram/cook";
const PHONE = "01 42 67 36 54";
const PHONE_TEL = "+33142673654";
const INSTAGRAM_URL = "https://instagram.com/cook_restaurant_paris";
const ADDRESS = "27 Avenue Niel, 75017 Paris";

/* ---------- Helpers ---------- */

function MenuItem({ name, desc, price }: { name: string; desc?: string; price: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-2.5">
      <div className="min-w-0">
        <span className="text-base text-gray-900">{name}</span>
        {desc && <p className="text-sm text-gray-500 mt-0.5">{desc}</p>}
      </div>
      {price && <span className="shrink-0 text-base font-medium text-gray-900 whitespace-nowrap">{price}</span>}
    </div>
  );
}

function MenuSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1">
      <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-2">{title}</h3>
      {children}
    </div>
  );
}

/* ---------- Page ---------- */

export default function App() {
  return (
    <div className="min-h-dvh bg-white text-gray-900">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 tablet:px-6 desktop:px-8">
          <a href="#" className="text-xl font-semibold tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.75rem", fontWeight: 600 }}>
            COOK
          </a>
          <div className="hidden items-center gap-8 tablet:flex">
            <a href="#menu" className="text-base text-gray-500 hover:text-gray-900 transition-colors">Menu</a>
            <a href="#photos" className="text-base text-gray-500 hover:text-gray-900 transition-colors">Photos</a>
            <a href="#horaires" className="text-base text-gray-500 hover:text-gray-900 transition-colors">Horaires</a>
            <a href="#contact" className="text-base text-gray-500 hover:text-gray-900 transition-colors">Contact</a>
          </div>
          <a href={DELIVEROO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors" style={{ backgroundColor: '#B85C3C', color: '#FFFFFF' }}>
            Commander
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-10 tablet:px-6 tablet:pb-24 tablet:pt-16 desktop:grid-cols-[minmax(0,0.92fr)_minmax(420px,1.08fr)] desktop:items-center desktop:px-8">
          <div className="grid max-w-2xl gap-6">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: '#B85C3C', color: '#FFFFFF' }}>Bistrot casher · Paris 17e</span>
            <div className="grid gap-4">
              <h1 className="text-4xl font-bold tablet:text-5xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Cuisine maison<br />au cœur de Paris
              </h1>
              <p className="max-w-xl text-lg text-gray-500">
                Viandes grillées, poissons frais, salades généreuses, pâtes et burgers maison.
                Une table où l'on revient, comme à la maison.
              </p>
            </div>
            <div className="flex flex-col gap-3 tablet:flex-row">
              <a href={DELIVEROO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg px-7 py-3 text-base font-semibold transition-colors" style={{ backgroundColor: '#B85C3C', color: '#FFFFFF' }}>
                Commander sur Deliveroo
              </a>
              <a href="#menu" className="inline-flex items-center justify-center rounded-lg px-7 py-3 text-base font-semibold transition-colors border" style={{ backgroundColor: '#F5F0E8', color: '#3D2817', borderColor: '#D4C4B0' }}>
                Voir la carte
              </a>
            </div>
          </div>

          <figure className="min-w-0 overflow-hidden rounded-2xl border border-gray-200">
            <img
              src="/dishes/carpaccio.jpg"
              alt="Carpaccio de bœuf aux champignons, sauce césar"
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 tablet:px-6 tablet:py-12 desktop:grid-cols-3 desktop:px-8">
          <div className="text-center desktop:text-left">
            <p className="text-3xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>4.7/5</p>
            <p className="text-sm text-gray-500 mt-1">Excellent sur Deliveroo (500+ avis)</p>
          </div>
          <div className="text-center desktop:text-left">
            <p className="text-3xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Cuisine casher</p>
            <p className="text-sm text-gray-500 mt-1">Beth-Din de Paris · Viande française</p>
          </div>
          <div className="text-center desktop:text-left">
            <p className="text-3xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>27 Av. Niel</p>
            <p className="text-sm text-gray-500 mt-1">Paris 17e · Ternes / Wagram</p>
          </div>
        </div>
      </section>

      {/* PHOTOS */}
      <section id="photos" className="mx-auto max-w-7xl px-4 py-16 tablet:px-6 tablet:py-20 desktop:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tablet:text-4xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Nos plats en images
          </h2>
          <p className="mt-3 text-lg text-gray-500">Une sélection de ce qui vous attend</p>
        </div>
        <div className="grid gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
          {platsPhotos.map((plat) => (
            <figure key={plat.src} className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
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
      <section id="menu" className="bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-16 tablet:px-6 tablet:py-20 desktop:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tablet:text-4xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
              La carte
            </h2>
            <p className="mt-3 text-lg text-gray-500">Prix de livraison Deliveroo</p>
          </div>

          {/* Entrées + Salades */}
          <div className="grid gap-10 desktop:grid-cols-2 mb-12">
            <MenuSection title="Entrées">
              {entrees.map((item) => <MenuItem key={item.name} name={item.name} price={item.price} />)}
            </MenuSection>
            <MenuSection title="Salades">
              {salades.map((item) => <MenuItem key={item.name} name={item.name} desc={item.desc} price={item.price} />)}
            </MenuSection>
          </div>

          {/* Pâtes + Petites faim */}
          <div className="grid gap-10 desktop:grid-cols-2 mb-12">
            <MenuSection title="Pâtes">
              {pates.map((item) => <MenuItem key={item.name} name={item.name} price={item.price} />)}
            </MenuSection>
            <MenuSection title="Petites faim">
              {petitsPlats.map((item) => <MenuItem key={item.name} name={item.name} price={item.price} />)}
            </MenuSection>
          </div>

          {/* Burgers + Viandes */}
          <div className="grid gap-10 desktop:grid-cols-2 mb-12">
            <MenuSection title="Les burgers">
              {burgers.map((item) => <MenuItem key={item.name} name={item.name} price={item.price} />)}
            </MenuSection>
            <MenuSection title="Les viandes">
              {viandes.map((item) => <MenuItem key={item.name} name={item.name} desc={item.desc} price={item.price} />)}
            </MenuSection>
          </div>

          {/* Poissons + Garnitures/Suppléments */}
          <div className="grid gap-10 desktop:grid-cols-2 mb-12">
            <MenuSection title="Les poissons">
              {poissons.map((item) => <MenuItem key={item.name} name={item.name} price={item.price} />)}
            </MenuSection>
            <div className="grid gap-8">
              <MenuSection title="Les garnitures">
                {garnitures.map((item) => <MenuItem key={item.name} name={item.name} price={item.price} />)}
              </MenuSection>
              <MenuSection title="Les suppléments">
                {supplements.map((item) => <MenuItem key={item.name} name={item.name} price={item.price} />)}
              </MenuSection>
            </div>
          </div>

          {/* Boissons */}
          <div className="desktop:max-w-md">
            <MenuSection title="Les boissons">
              {boissons.map((item) => <MenuItem key={item.name} name={item.name} price={item.price} />)}
            </MenuSection>
          </div>

          <p className="mt-8 text-sm text-gray-500 italic">Provenance des viandes : France</p>
        </div>
      </section>

      {/* HORAIRES */}
      <section id="horaires" className="mx-auto max-w-7xl px-4 py-16 tablet:px-6 tablet:py-20 desktop:px-8">
        <div className="grid gap-10 desktop:grid-cols-2 desktop:items-center">
          <div>
            <h2 className="text-3xl font-bold tablet:text-4xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
              Horaires & informations
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Ouvert tous les jours pour le déjeuner et le dîner. Fermé le samedi (Chabbat).
              {ADDRESS} — {PHONE}
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <ul className="grid gap-3">
              <li className="flex justify-between text-base">
                <span>Dimanche — Jeudi</span>
                <span className="text-gray-500">12h00 – 15h00 · 19h00 – 22h30</span>
              </li>
              <hr className="border-gray-100" />
              <li className="flex justify-between text-base">
                <span>Vendredi</span>
                <span className="text-gray-500">12h00 – 14h30</span>
              </li>
              <hr className="border-gray-100" />
              <li className="flex justify-between text-base">
                <span>Samedi</span>
                <span className="text-gray-500">Fermé</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA — DELIVEROO */}
      <section id="commander" className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center tablet:px-6 tablet:py-24 desktop:px-8">
          <h2 className="text-4xl font-bold tablet:text-5xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Commander en livraison
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500">
            Une envie de cuisine maison ? Commandez directement sur Deliveroo, en livraison ou à emporter.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 tablet:flex-row tablet:justify-center">
            <a href={DELIVEROO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg px-7 py-3 text-base font-semibold transition-colors" style={{ backgroundColor: '#B85C3C', color: '#FFFFFF' }}>
              Commander sur Deliveroo
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg px-7 py-3 text-base font-semibold transition-colors border" style={{ backgroundColor: '#F5F0E8', color: '#3D2817', borderColor: '#D4C4B0' }}>
              Nous suivre sur Instagram
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 tablet:px-6 desktop:px-8">
          <div className="grid gap-8 desktop:grid-cols-3">
            <div>
              <p className="text-xl font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 600 }}>COOK</p>
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
          <hr className="my-6 border-gray-100" />
          <p className="text-sm text-gray-500 text-center">© 2025 COOK — Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
}






