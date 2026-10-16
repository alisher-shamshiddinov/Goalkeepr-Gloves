// GLOVE PRO — Data and Application Logic
// Brands: T1tan, Uhlsport (U sport), KEEPERsport (Keeprs sport), Spire, Nike, Adidas

const GLOVES_DATA = [
  // 1. T1TAN (Germany)
  {
    id: 1,
    brand: "T1TAN",
    name: "T1TAN Beast 3.0 Whiteout",
    price: 890000,
    rating: 4.9,
    reviewsCount: 84,
    cut: "Negative Cut",
    weather: "Barcha ob-havo",
    badge: "Bestseller",
    colors: {
      primary: "#ffffff",
      secondary: "#00ff87",
      accent: "#1e293b",
      palm: "#ffffff",
      details: "#00e5ff"
    },
    latex: {
      name: "4mm German Gecko Grip Latex",
      thickness: "4.0 mm + 3mm Lamination",
      type: "Tabiiy nemis lateksi",
      gripLevel: 10,
      durability: 8.5,
      description: "Germaniyaning eng so'nggi Gecko Grip formulasi. Quruq va nam havoda to'pni kaftga yopishtirib oladi. Ultra yopishqoq (Sticky) professional toifadagi lateks."
    },
    fabric: {
      name: "Mechano 2.0 Breathable Body",
      material: "Mikro-teshikli to'qima mato & Neoprene",
      features: "Havo aylanishini 100% ta'minlaydi, qo'l terlamaydi. Qo'l mushaklariga ikkinchi teri (second skin) kabi yopishadi.",
      punchZone: "3D Silikon zarba elementlari musht bilan koptokni uzoqqa chiqarib yuborish uchun"
    },
    strap: "Elastik ikki marta aylanuvchi tasma (Dual Elastic Strap)",
    availableSizes: [7, 8, 8.5, 9, 9.5, 10, 10.5, 11],
    description: "T1TAN Beast 3.0 — zamonaviy darvozabonlar uchun mukammal qurol. Ichki tikuvli Negative Cut barmog'ingiz atrofini to'liq qamrab oladi."
  },
  {
    id: 2,
    brand: "T1TAN",
    name: "T1TAN Alien Blackout Negative",
    price: 950000,
    rating: 4.8,
    reviewsCount: 62,
    cut: "Negative Cut",
    weather: "Barcha ob-havo",
    badge: "Stealth Edition",
    colors: {
      primary: "#18181b",
      secondary: "#00ff87",
      accent: "#27272a",
      palm: "#09090b",
      details: "#22c55e"
    },
    latex: {
      name: "4mm Black Gorilla Grip Latex",
      thickness: "4.0 mm Nemis lateksi",
      type: "Qora zarrachali kuchaytirilgan lateks",
      gripLevel: 9.8,
      durability: 9.0,
      description: "Qora maxsus lateks — sun'iy maydonlar va chang sharoitida ham tozaligini saqlab, tutilish sifatini yo'qotmaydi."
    },
    fabric: {
      name: "Pro-Flex Neoprene Structure",
      material: "Vulkanizatsiyalangan elastik Neopren",
      features: "Suv o'tkazmaydigan va sovuq havoda ham qo'l haroratini ushlab turuvchi qatlam.",
      punchZone: "Alien Claw agressiv silikon tekstura"
    },
    strap: "Choksiz elastik manjet",
    availableSizes: [8, 8.5, 9, 9.5, 10, 11],
    description: "T1TAN Alien Blackout — tajovuzkor ko'rinish va o'zgarmas nemis sifati. Qattiq zarbalarda ham barmoqlarni ishonchli ushlab turadi."
  },

  // 2. Uhlsport (Germany)
  {
    id: 3,
    brand: "Uhlsport",
    name: "Uhlsport Hyperact Supergrip+ Reflex",
    price: 1350000,
    rating: 5.0,
    reviewsCount: 112,
    cut: "Reflex Cut",
    weather: "Barcha ob-havo",
    badge: "Bundesliga Pro",
    colors: {
      primary: "#0284c7",
      secondary: "#ff5e00",
      accent: "#ffffff",
      palm: "#ffffff",
      details: "#38bdf8"
    },
    latex: {
      name: "4mm Uhlsport Supergrip+ Foam",
      thickness: "4.0 mm + High-Grip Particles",
      type: "High-Grip qora elementli nemis formulasi",
      gripLevel: 10,
      durability: 8.8,
      description: "Uhlsport laboratoriyasining eng qimmat va yuqori darajadagi lateksi. Koptok bilan yuzalanish ishqalanishini 25% ga oshiradi."
    },
    fabric: {
      name: "AIRPRENE Innovatsion Mato",
      material: "Perforatsiyalangan nafas oluvchi Airprene",
      features: "Qo'lqop ichidagi ortiqcha issiqlikni chiqarib yuboradi, eng yuqori darajadagi elastiklik.",
      punchZone: "REBOUND ZONE silikon amortizatori"
    },
    strap: "DUAL FIX SYSTEM — ikki tomonlama innovatsion mahkamlash",
    availableSizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5],
    description: "Uhlsport Hyperact Supergrip+ — Oliver Baumann va Mike Maignan kabi Chempionlar Ligasi darvozabonlari tanlagan professional model."
  },
  {
    id: 4,
    brand: "Uhlsport",
    name: "Uhlsport Absolutgrip Tight HN",
    price: 1050000,
    rating: 4.9,
    reviewsCount: 95,
    cut: "Negative Cut",
    weather: "Quruq / Sun'iy maydon",
    badge: "Uzoq Xizmat Qiluvchi",
    colors: {
      primary: "#eab308",
      secondary: "#0f172a",
      accent: "#f8fafc",
      palm: "#ffffff",
      details: "#ca8a04"
    },
    latex: {
      name: "4mm Patented Absolutgrip",
      thickness: "4.0 mm",
      type: "Patentlangan universal lateks",
      gripLevel: 9.5,
      durability: 9.5,
      description: "Dunyo bo'yicha eng mashhur va uzoq umr ko'ruvchi Absolutgrip lateksi. Hatto 50 dan ortiq o'yindan keyin ham tutilish xususiyatini yo'qotmaydi."
    },
    fabric: {
      name: "Functional Textile Mesh",
      material: "Mustahkam to'qima mato",
      features: "Yirtilishga chidamli, yuvish oson, optimal havo oqimi.",
      punchZone: "3D Embossed EVA zarba zonasi"
    },
    strap: "To'liq lateksli mustahkam tasmali manjet",
    availableSizes: [7, 8, 8.5, 9, 9.5, 10, 11],
    description: "Uhlsport Absolutgrip — sifat va chidamlilikning mukammal uyg'unligi. O'zbekiston sun'iy va tabiiy maydonlari uchun ideal."
  },

  // 3. KEEPERsport (Austria)
  {
    id: 5,
    brand: "KEEPERsport",
    name: "KEEPERsport Varan7 Champ NC",
    price: 1120000,
    rating: 4.9,
    reviewsCount: 78,
    cut: "Negative Cut",
    weather: "Barcha ob-havo",
    badge: "Yangi Avlod",
    colors: {
      primary: "#06b6d4",
      secondary: "#ffffff",
      accent: "#0e7490",
      palm: "#ffffff",
      details: "#22d3ee"
    },
    latex: {
      name: "4mm Super White Claw Latex",
      thickness: "4.0 mm Avstriya lateksi",
      type: "Ultra-adhesive Tabiiy Lateks",
      gripLevel: 9.9,
      durability: 8.7,
      description: "Avstriya darvozabonlik akademiyasida ishlab chiqilgan maxsus formula. Koptokni 'tirnoq kabi' ushlab qoluvchi kuchli adhesiya."
    },
    fabric: {
      name: "Soft Tech Body (STB) Mato",
      material: "Mikrofibra egiluvchan trikotaj",
      features: "O'ta yengil vazn (bor-yo'g'i 160 gramm). Qo'lda deyarli sezilmaydi.",
      punchZone: "Silicone Injection Punching Zone"
    },
    strap: "Elastik integratsiyalashgan qistirgich",
    availableSizes: [8, 8.5, 9, 9.5, 10, 10.5],
    description: "KEEPERsport Varan7 Champ NC — professional darvozabonlar tomonidan yaratilgan. O'zgacha qulaylik va koptok sezuvchanligi."
  },
  {
    id: 6,
    brand: "KEEPERsport",
    name: "KEEPERsport Varan7 Hero Hybrid",
    price: 1180000,
    rating: 4.8,
    reviewsCount: 54,
    cut: "Hybrid Cut",
    weather: "Yomg'irli / Aqua",
    badge: "Aqua & Nam Havoga",
    colors: {
      primary: "#0f172a",
      secondary: "#84cc16",
      accent: "#ef4444",
      palm: "#0284c7",
      details: "#a3e635"
    },
    latex: {
      name: "4mm Aqua Hydro Claw Latex",
      thickness: "4.0 mm Maxsus Suvli Lateks",
      type: "Gidrofil nam havoda faollashuvchi lateks",
      gripLevel: 9.9,
      durability: 8.6,
      description: "Kuchli yomg'ir va suvli maydonda lateks koptokni sirg'alib ketishiga umuman yo'l qo'ymaydi."
    },
    fabric: {
      name: "Aqua-Shield Neoprene",
      material: "Suv shimmas neopren qatlam",
      features: "Namlikni ichkariga o'tkazmaydi, barmoqlar doimo quruq qoladi.",
      punchZone: "3D Textured High Grip Rubber"
    },
    strap: "Kengaytirilgan lateksli bilak himoyasi",
    availableSizes: [8, 8.5, 9, 10, 11],
    description: "KEEPERsport Varan7 Hero — har qanday yomg'irli o'yinda sizning asosiy tayanchingiz. Roll-Negative gibrid kesimi to'p bilan aloqani kengaytiradi."
  },

  // 4. Spire (Pro Goalkeeping)
  {
    id: 7,
    brand: "Spire",
    name: "Spire Apex Contact Grip Pro",
    price: 820000,
    rating: 4.8,
    reviewsCount: 46,
    cut: "Hybrid Cut",
    weather: "Barcha ob-havo",
    badge: "Eng Yaxshi Narx/Sifat",
    colors: {
      primary: "#10b981",
      secondary: "#ffffff",
      accent: "#f59e0b",
      palm: "#ffffff",
      details: "#059669"
    },
    latex: {
      name: "4mm German Contact Latex Pro",
      thickness: "4.0 mm + 4mm Memory Foam",
      type: "Nemis professional Contact lateksi",
      gripLevel: 9.7,
      durability: 8.9,
      description: "Zavoddan maxsus himoya plyonkasi bilan chiqadi. Plyonkani yechgandan keyin ultra yopishqoqlik hissi beradi."
    },
    fabric: {
      name: "Aeroprene UltraFlex",
      material: "Aerodinamik to'qima elastik neopren",
      features: "Qo'lni siqib qo'ymaydi, qon aylanishiga xalaqit bermaydi.",
      punchZone: "Hexagon 3D Punching Pads"
    },
    strap: "Yechiluvchi elastik tasma (Removable Strap)",
    availableSizes: [7, 8, 8.5, 9, 9.5, 10, 11],
    description: "Spire Apex Pro — professional sifatni hamyonbop narxda xohlovchilar uchun eng to'g'ri tanlov. 4mm memory foam qattiq zarbalarni so'rib oladi."
  },
  {
    id: 8,
    brand: "Spire",
    name: "Spire Vortex Aqua Adhesion",
    price: 860000,
    rating: 4.7,
    reviewsCount: 39,
    cut: "Negative Cut",
    weather: "Yomg'irli / Aqua",
    badge: "Suv O'tkazmas",
    colors: {
      primary: "#1e3a8a",
      secondary: "#38bdf8",
      accent: "#ffffff",
      palm: "#60a5fa",
      details: "#93c5fd"
    },
    latex: {
      name: "4mm German Aqua Adhesion Latex",
      thickness: "4.0 mm",
      type: "Aqua Formula",
      gripLevel: 9.8,
      durability: 8.7,
      description: "Namlik bilan reaksiyaga kirishuvchi lateks g'ovaklari suvni chiqarib yuboradi va to'pni ushlab qoladi."
    },
    fabric: {
      name: "ThermoMesh Breathing Fabric",
      material: "Termal to'r va suvga chidamli neopren",
      features: "Yengil va sovuqdan asrovchi ichki astar.",
      punchZone: "Vortex Rubber Injection"
    },
    strap: "Elastik manjet va qulay ilgich",
    availableSizes: [8, 8.5, 9, 9.5, 10],
    description: "Spire Vortex — yomg'irli kuz va erta bahor mavsumlarida kutilmagan sirg'alishlardan 100% himoya qiladi."
  },

  // 5. Nike (USA)
  {
    id: 9,
    brand: "Nike",
    name: "Nike Vapor Grip3 Promo",
    price: 1420000,
    rating: 4.9,
    reviewsCount: 130,
    cut: "Grip3 Cut",
    weather: "Barcha ob-havo",
    badge: "EPL Tanlovi",
    colors: {
      primary: "#dc2626",
      secondary: "#ffffff",
      accent: "#000000",
      palm: "#ffffff",
      details: "#ef4444"
    },
    latex: {
      name: "4mm Nike Contact Plus Foam",
      thickness: "4.0 mm Yangilangan Formula",
      type: "Professional EPL Promo lateksi",
      gripLevel: 9.9,
      durability: 8.4,
      description: "Alisson Becker va Thibaut Courtois kabi dunyo yulduzlari uchun ishlab chiqarilgan yagona darajadagi Contact Plus lateks ko'pigi."
    },
    fabric: {
      name: "Ventilated Engineered Mesh",
      material: "Nike AeroMesh va cho'ziluvchan sintetik mato",
      features: "Barmoqlar orasida havo oqimi o'tuvchi teshiklar, harakat erkinligi.",
      punchZone: "Ergonomik to'qima mato silliq zarbalar uchun"
    },
    strap: "Kengaytirilgan bilak orqasi o'rashi (Wraparound Wristband)",
    availableSizes: [8, 8.5, 9, 9.5, 10, 10.5, 11],
    description: "Nike Vapor Grip3 — patentlangan Grip3 texnologiyasi: bosh barmoq, ko'rsatkich va jimjiloq barmoqlari koptokni 3 tomondan o'rab oladi."
  },
  {
    id: 10,
    brand: "Nike",
    name: "Nike Phantom Shadow Elite",
    price: 1290000,
    rating: 4.8,
    reviewsCount: 88,
    cut: "Negative Cut",
    weather: "Barcha ob-havo",
    badge: "Ultra Fit",
    colors: {
      primary: "#000000",
      secondary: "#00ff87",
      accent: "#18181b",
      palm: "#18181b",
      details: "#22c55e"
    },
    latex: {
      name: "3.5mm All Conditions Control (ACC) Latex",
      thickness: "3.5 mm ACC Premium Foam",
      type: "ACC (Har qanday sharoit nazorati)",
      gripLevel: 9.6,
      durability: 8.8,
      description: "Nike ACC texnologiyasi quyoshda ham, yomg'irda ham bir xil qattiq ishqalanish va koptok nazoratini beradi."
    },
    fabric: {
      name: "Ribbed Engineered Knit",
      material: "3D Qovurg'ali elastik to'qima mato",
      features: "Kaft ustida qovurg'ali tekstura zarbalarni kuchli qaytaradi.",
      punchZone: "Silicone Micro-texture Knuckles"
    },
    strap: "Choksiz elastik paypoqsimon bilak (Strapless Design)",
    availableSizes: [7.5, 8, 8.5, 9, 9.5, 10],
    description: "Nike Phantom Shadow — zamonaviy strapless (tasmasiz) dizayn. Qo'lga qo'lqop emas, ikkinchi teri kiygandek qulaylik baxsh etadi."
  },

  // 6. Adidas (Germany)
  {
    id: 11,
    brand: "Adidas",
    name: "Adidas Predator Pro Fingersave",
    price: 1480000,
    rating: 5.0,
    reviewsCount: 156,
    cut: "Negative Cut",
    weather: "Barcha ob-havo",
    badge: "Himoya Tirgakli (Fingersave)",
    colors: {
      primary: "#ffffff",
      secondary: "#a3e635",
      accent: "#09090b",
      palm: "#ffffff",
      details: "#bef264"
    },
    latex: {
      name: "4mm Adidas URG 2.0 Latex",
      thickness: "4.0 mm Unrivaled Grip Latex",
      type: "Nemis URG 2.0 Formula",
      gripLevel: 9.9,
      durability: 8.8,
      description: "Adidas URG 2.0 — koptok ushlash koeffitsienti eng yuqori bo'lgan lateks. Zarbalarni engillashtiradi va barmoqlarni qayrilib ketishdan saqlaydi."
    },
    fabric: {
      name: "Engineered Primeknit & High Definition Grip",
      material: "Primeknit elastik trikotaj to'qima",
      features: "Tashqi tomonda individual silikon qovurg'alar (High Definition Grip Elements).",
      punchZone: "Individual Rubber Elements for Power Punching"
    },
    strap: "Elastik kompressiyali tasmali manjet",
    availableSizes: [8, 8.5, 9, 9.5, 10, 10.5, 11],
    description: "Adidas Predator Pro — Manuel Neuer va Gianluigi Donnarumma kabi afsonaviy darvozabonlarning afzal ko'rgan modeli. Yechiluvchi Fingersave barmoq himoyasi bilan."
  },
  {
    id: 12,
    brand: "Adidas",
    name: "Adidas Copa Pro Hybrid",
    price: 1320000,
    rating: 4.8,
    reviewsCount: 72,
    cut: "Hybrid Cut",
    weather: "Quruq / Sun'iy maydon",
    badge: "Klassik & Komfort",
    colors: {
      primary: "#ffffff",
      secondary: "#f43f5e",
      accent: "#0f172a",
      palm: "#ffffff",
      details: "#fb7185"
    },
    latex: {
      name: "4mm Adidas URG 1.0 Pro Latex",
      thickness: "4.0 mm Ultra-soft lateks",
      type: "Matchday Only Soft Latex",
      gripLevel: 10,
      durability: 8.0,
      description: "Rasmiy o'yinlar uchun mo'ljallangan nozik va o'ta yopishqoq URG 1.0 lateksi. Koptokni shunchaki magnitlab qo'yadi."
    },
    fabric: {
      name: "Classic Mesh & Soft Mesh Backhand",
      material: "Klassik nafas oluvchi yumshoq to'r",
      features: "Qo'lni juda yumshoq o'raydi, soatlab mashg'ulotda ham qulay.",
      punchZone: "Embossed Latex Punch Zone"
    },
    strap: "To'liq aylana lateks tasma",
    availableSizes: [7.5, 8, 8.5, 9, 9.5, 10, 11],
    description: "Adidas Copa Pro — toza charm tuyg'usini va yumshoqlikni sevuvchi darvozabonlar uchun klassik estetikaga ega zamonaviy gibrid model."
  }
];

// App State
let activeBrand = "all";
let activeFeaturedGloveId = 1;
let currentModalGlove = GLOVES_DATA[0];
let modalViewMode = "palm"; // 'palm', 'back', 'ball'
let modalPoseMode = "open"; // 'open', 'fist'
let modalSelectedSize = 9;

let sandboxViewMode = "palm";
let sandboxPoseMode = "open";
let sandboxGlove = GLOVES_DATA[0];

let cart = [];

// Initialize application on DOM load
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog(GLOVES_DATA);
  renderHeroGlove();
  renderSandboxGlove();
  updateCartBadge();
  initLucide();
  setupEventListeners();
});

function initLucide() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function setupEventListeners() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      applyFilters();
    });
  }

  const cartBtn = document.getElementById("cartBtn");
  if (cartBtn) {
    cartBtn.addEventListener("click", openCart);
  }

  const sizeGuideBtn = document.getElementById("sizeGuideBtn");
  if (sizeGuideBtn) {
    sizeGuideBtn.addEventListener("click", openSizeGuide);
  }

  const navHandSimBtn = document.getElementById("navHandSimBtn");
  if (navHandSimBtn) {
    navHandSimBtn.addEventListener("click", () => openHandSimulator(activeFeaturedGloveId));
  }
}

// ----------------------------------------------------
// CATALOG RENDERING & FILTERING
// ----------------------------------------------------

function renderCatalog(gloves) {
  const grid = document.getElementById("glovesGrid");
  const emptyState = document.getElementById("emptyState");
  if (!grid) return;

  grid.innerHTML = "";

  if (gloves.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  } else {
    emptyState.classList.add("hidden");
  }

  gloves.forEach((glove) => {
    const card = document.createElement("div");
    card.className = "glove-card bg-pitch-850 rounded-2xl border border-slate-800/90 overflow-hidden flex flex-col justify-between group";
    
    // SVG Mini Glove representation
    const gloveSvg = generateGloveSVG(glove, "palm", "open", 180, 190);

    card.innerHTML = `
      <!-- Card Header -->
      <div class="p-4 bg-gradient-to-b from-pitch-800/50 to-transparent flex items-center justify-between">
        <span class="text-xs font-mono font-bold uppercase tracking-wider text-glow-cyan">${glove.brand}</span>
        <span class="text-[10px] bg-slate-800 text-slate-300 font-semibold px-2 py-0.5 rounded-full border border-slate-700">
          ${glove.badge}
        </span>
      </div>

      <!-- Card Glove Visual Preview -->
      <div class="relative py-4 px-2 flex items-center justify-center cursor-pointer group-hover:scale-105 transition-transform" onclick="openHandSimulator(${glove.id})">
        <div class="w-full h-48 flex items-center justify-center">
          ${gloveSvg}
        </div>
        <div class="absolute bottom-2 right-3 bg-black/70 backdrop-blur text-[10px] font-mono text-glow-neon px-2 py-0.5 rounded border border-glow-neon/30 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <span>🖐️ Qo'lda ko'rish</span>
        </div>
      </div>

      <!-- Card Details -->
      <div class="p-4 space-y-3 bg-pitch-900/60 border-t border-slate-800/80 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="font-display font-bold text-base text-white group-hover:text-glow-neon transition-colors leading-tight">
            ${glove.name}
          </h3>

          <!-- Latex and Fabric Mini Badges -->
          <div class="mt-2.5 space-y-1.5 text-[11px]">
            <div class="flex items-center gap-1.5 text-slate-300">
              <span class="w-1.5 h-1.5 rounded-full bg-glow-neon"></span>
              <strong class="text-slate-400">Lateks:</strong>
              <span class="text-glow-neon truncate">${glove.latex.name.split(" ")[0]} ${glove.latex.name.split(" ")[1]} (${glove.latex.thickness.split("+")[0]})</span>
            </div>

            <div class="flex items-center gap-1.5 text-slate-300">
              <span class="w-1.5 h-1.5 rounded-full bg-glow-cyan"></span>
              <strong class="text-slate-400">Mato:</strong>
              <span class="text-slate-200 truncate">${glove.fabric.name}</span>
            </div>

            <div class="flex items-center justify-between text-[10px] text-slate-400 pt-1">
              <span>Kesim: <strong class="text-white">${glove.cut}</strong></span>
              <span>Grip: <strong class="text-glow-neon">${glove.latex.gripLevel}/10</strong></span>
            </div>
          </div>
        </div>

        <!-- Price & Action Buttons -->
        <div class="pt-3 border-t border-slate-800/80">
          <div class="flex items-baseline justify-between mb-3">
            <span class="text-[11px] text-slate-400">Narxi:</span>
            <span class="font-display font-bold text-lg text-white">${formatPrice(glove.price)} UZS</span>
          </div>

          <div class="grid grid-cols-2 gap-2">
            <button onclick="openHandSimulator(${glove.id})" class="py-2 px-2 rounded-xl bg-pitch-800 hover:bg-pitch-700 border border-slate-700 text-xs font-semibold text-slate-200 flex items-center justify-center gap-1 transition-colors">
              <span>Qo'lda Ko'rish</span>
            </button>

            <button onclick="quickAddToCart(${glove.id})" class="py-2 px-2 rounded-xl bg-glow-neon/20 hover:bg-glow-neon text-glow-neon hover:text-pitch-900 border border-glow-neon/40 hover:border-glow-neon text-xs font-bold flex items-center justify-center gap-1 transition-all">
              <span>+ Savatga</span>
            </button>
          </div>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  initLucide();
}

function filterByBrand(brand) {
  activeBrand = brand;

  // Update pills UI
  const brandButtons = document.querySelectorAll(".filter-btn");
  brandButtons.forEach((btn) => {
    btn.className = "filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white transition-all";
  });

  const activeBtn = document.getElementById(`filter-${brand}`);
  if (activeBtn) {
    activeBtn.className = "filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-glow-neon text-pitch-900 transition-all";
  }

  applyFilters();
}

function applyFilters() {
  const searchTerm = (document.getElementById("searchInput")?.value || "").toLowerCase().trim();
  const cutFilter = document.getElementById("cutFilter")?.value || "all";
  const weatherFilter = document.getElementById("weatherFilter")?.value || "all";

  const filtered = GLOVES_DATA.filter((g) => {
    const matchBrand = activeBrand === "all" || g.brand.toLowerCase() === activeBrand.toLowerCase();
    const matchCut = cutFilter === "all" || g.cut.toLowerCase() === cutFilter.toLowerCase();
    const matchWeather = weatherFilter === "all" || g.weather.toLowerCase().includes(weatherFilter.toLowerCase());
    
    const matchSearch =
      searchTerm === "" ||
      g.name.toLowerCase().includes(searchTerm) ||
      g.brand.toLowerCase().includes(searchTerm) ||
      g.latex.name.toLowerCase().includes(searchTerm) ||
      g.fabric.name.toLowerCase().includes(searchTerm) ||
      g.cut.toLowerCase().includes(searchTerm);

    return matchBrand && matchCut && matchWeather && matchSearch;
  });

  renderCatalog(filtered);
}

// ----------------------------------------------------
// DYNAMIC SVG GLOVE & HAND GENERATOR
// ----------------------------------------------------
// Renders realistic goalkeeper glove hand fit:
// View: 'palm' (latex face), 'back' (backhand fabric & silicone), 'ball' (holding match ball)
// Pose: 'open' (spread fingers), 'fist' (punching flex)

function generateGloveSVG(glove, view = "palm", pose = "open", width = 240, height = 300) {
  const c = glove.colors;
  const isBack = view === "back";
  const isBall = view === "ball";
  const isFist = pose === "fist";

  // Palette selection
  const mainColor = isBack ? c.primary : c.palm;
  const accentColor = isBack ? c.secondary : "#e2e8f0";
  const bodyFabricColor = isBack ? c.accent : "#cbd5e1";
  const punchColor = c.secondary;

  if (isBall) {
    // Hand holding soccer ball graphic
    return `
      <svg viewBox="0 0 260 280" width="${width}" height="${height}" class="hand-svg">
        <defs>
          <radialGradient id="ballGlow-${glove.id}" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="70%" stop-color="#94a3b8"/>
            <stop offset="100%" stop-color="#334155"/>
          </radialGradient>
          <filter id="shadow-${glove.id}" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="rgba(0,0,0,0.5)"/>
          </filter>
        </defs>

        <!-- Soccer Ball in grip -->
        <circle cx="130" cy="120" r="75" fill="url(#ballGlow-${glove.id})" filter="url(#shadow-${glove.id})"/>
        
        <!-- Ball Pentagons -->
        <polygon points="130,95 145,108 139,126 121,126 115,108" fill="#0f172a" opacity="0.85"/>
        <polygon points="100,60 112,70 106,85 92,85 86,70" fill="#0f172a" opacity="0.6"/>
        <polygon points="160,60 174,70 168,85 154,85 148,70" fill="#0f172a" opacity="0.6"/>
        <polygon points="80,130 92,140 86,155 72,155 66,140" fill="#0f172a" opacity="0.6"/>
        <polygon points="180,130 194,140 188,155 174,155 168,140" fill="#0f172a" opacity="0.6"/>

        <!-- Goalkeeper Fingers Clamped on Ball (Contact latex grip) -->
        <!-- Thumb -->
        <path d="M 50,150 C 45,130 65,115 85,125 C 92,130 88,145 70,165 Z" fill="${c.palm}" stroke="${c.secondary}" stroke-width="2.5"/>
        <!-- Index Finger -->
        <path d="M 85,75 C 95,50 125,50 128,75 C 129,90 115,95 105,95 Z" fill="${c.palm}" stroke="${c.secondary}" stroke-width="2.5"/>
        <!-- Middle Finger -->
        <path d="M 125,65 C 138,45 160,50 162,72 C 163,88 150,92 140,92 Z" fill="${c.palm}" stroke="${c.secondary}" stroke-width="2.5"/>
        <!-- Ring Finger -->
        <path d="M 160,75 C 172,60 192,68 190,88 C 188,100 178,105 168,102 Z" fill="${c.palm}" stroke="${c.secondary}" stroke-width="2.5"/>
        <!-- Pinky -->
        <path d="M 188,105 C 205,100 215,118 205,132 C 196,140 185,138 180,125 Z" fill="${c.palm}" stroke="${c.secondary}" stroke-width="2.5"/>

        <!-- Glove Palm Body wrapped around back -->
        <path d="M 55,160 Q 60,220 90,240 L 170,240 Q 200,220 205,155 Q 130,170 55,160 Z" fill="${c.primary}" opacity="0.95" stroke="#334155" stroke-width="2"/>

        <!-- Wrist Strap -->
        <rect x="85" y="235" width="90" height="35" rx="6" fill="#0f172a" stroke="${c.secondary}" stroke-width="2"/>
        <text x="130" y="257" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="Outfit, sans-serif">100% CONTACT GRIP</text>
      </svg>
    `;
  }

  if (isFist) {
    // Fist (Punch Zone) view
    return `
      <svg viewBox="0 0 240 280" width="${width}" height="${height}" class="hand-svg">
        <defs>
          <filter id="gloveShadowFist-${glove.id}">
            <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="rgba(0,0,0,0.6)"/>
          </filter>
        </defs>

        <!-- Fist Main Body Contour -->
        <path d="M 50,110 C 45,70 195,70 190,110 C 195,170 175,200 160,215 L 80,215 C 65,200 45,170 50,110 Z" fill="${bodyFabricColor}" filter="url(#gloveShadowFist-${glove.id})" stroke="#1e293b" stroke-width="2"/>

        <!-- 4 Folded Finger Knuckles (Punch Zone) -->
        <!-- Index Knuckle -->
        <rect x="58" y="78" width="28" height="42" rx="12" fill="${mainColor}" stroke="${punchColor}" stroke-width="2"/>
        <!-- Middle Knuckle -->
        <rect x="89" y="72" width="30" height="48" rx="12" fill="${mainColor}" stroke="${punchColor}" stroke-width="2"/>
        <!-- Ring Knuckle -->
        <rect x="122" y="76" width="29" height="44" rx="12" fill="${mainColor}" stroke="${punchColor}" stroke-width="2"/>
        <!-- Pinky Knuckle -->
        <rect x="154" y="82" width="26" height="38" rx="10" fill="${mainColor}" stroke="${punchColor}" stroke-width="2"/>

        <!-- 3D Silicone Punching Ribs / Spikes on Knuckles -->
        <circle cx="72" cy="92" r="5" fill="${punchColor}"/>
        <circle cx="72" cy="106" r="4" fill="${punchColor}"/>

        <circle cx="104" cy="88" r="6" fill="${punchColor}"/>
        <circle cx="104" cy="104" r="5" fill="${punchColor}"/>

        <circle cx="136" cy="92" r="6" fill="${punchColor}"/>
        <circle cx="136" cy="107" r="5" fill="${punchColor}"/>

        <circle cx="167" cy="96" r="4" fill="${punchColor}"/>
        <circle cx="167" cy="109" r="4" fill="${punchColor}"/>

        <!-- Thumb Clamped in front -->
        <path d="M 45,130 C 45,110 80,120 120,135 C 125,150 115,165 70,165 C 50,165 45,150 45,130 Z" fill="${mainColor}" stroke="${punchColor}" stroke-width="2"/>

        <!-- Backhand Fabric Texture Area -->
        <path d="M 65,160 Q 120,175 175,160 L 165,210 L 75,210 Z" fill="${bodyFabricColor}" opacity="0.8"/>
        <text x="120" y="195" font-size="10" font-weight="900" fill="${punchColor}" text-anchor="middle" font-family="Rajdhani, sans-serif" letter-spacing="1">
          ${glove.brand} PUNCH ZONE
        </text>

        <!-- Wrist Strap -->
        <rect x="70" y="215" width="100" height="42" rx="6" fill="#09090b" stroke="${c.secondary}" stroke-width="2"/>
        <rect x="75" y="222" width="70" height="28" rx="4" fill="#18181b"/>
        <text x="110" y="240" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">AIRPRENE FIT</text>
      </svg>
    `;
  }

  // Standard Open Hand View: 'palm' (Latex) or 'back' (Fabric / Backhand)
  return `
    <svg viewBox="0 0 240 300" width="${width}" height="${height}" class="hand-svg">
      <defs>
        <filter id="gloveShadow-${glove.id}-${view}" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="7" flood-color="rgba(0,0,0,0.6)"/>
        </filter>
        <linearGradient id="latexGrad-${glove.id}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${isBack ? c.primary : c.palm}"/>
          <stop offset="100%" stop-color="${isBack ? c.accent : '#f1f5f9'}"/>
        </linearGradient>
      </defs>

      <!-- Main Glove Base Silhouette -->
      <g filter="url(#gloveShadow-${glove.id}-${view})">
        
        <!-- Thumb -->
        <path d="M 68,145 C 40,130 18,140 22,165 C 26,185 48,198 72,192 Z" 
              fill="url(#latexGrad-${glove.id})" 
              stroke="${accentColor}" 
              stroke-width="${isBack ? 2 : 1.5}"/>

        <!-- Pinky Finger -->
        <path d="M 175,130 C 182,75 204,78 206,128 C 207,150 198,175 185,178 Z" 
              fill="url(#latexGrad-${glove.id})" 
              stroke="${accentColor}" 
              stroke-width="${isBack ? 2 : 1.5}"/>

        <!-- Ring Finger -->
        <path d="M 142,105 C 146,40 172,42 174,105 C 175,135 170,165 155,170 Z" 
              fill="url(#latexGrad-${glove.id})" 
              stroke="${accentColor}" 
              stroke-width="${isBack ? 2 : 1.5}"/>

        <!-- Middle Finger (Tallest) -->
        <path d="M 108,95 C 112,25 140,26 142,95 C 143,130 135,160 125,168 Z" 
              fill="url(#latexGrad-${glove.id})" 
              stroke="${accentColor}" 
              stroke-width="${isBack ? 2 : 1.5}"/>

        <!-- Index Finger -->
        <path d="M 74,115 C 78,50 106,52 108,115 C 109,140 102,170 90,174 Z" 
              fill="url(#latexGrad-${glove.id})" 
              stroke="${accentColor}" 
              stroke-width="${isBack ? 2 : 1.5}"/>

        <!-- Palm / Backhand Center Mass -->
        <path d="M 65,150 Q 120,130 185,150 L 175,235 L 68,235 Z" 
              fill="url(#latexGrad-${glove.id})" 
              stroke="${accentColor}" 
              stroke-width="${isBack ? 2 : 1.5}"/>
      </g>

      ${
        isBack
          ? `
        <!-- BACKHAND SPECIFIC DETAILS: Fabric, Silicone Punch Zone, Brand Logo -->
        <!-- Breathable Fabric Mesh Lines across fingers -->
        <line x1="85" y1="80" x2="98" y2="80" stroke="${c.secondary}" stroke-width="3" stroke-linecap="round"/>
        <line x1="118" y1="65" x2="132" y2="65" stroke="${c.secondary}" stroke-width="3" stroke-linecap="round"/>
        <line x1="152" y1="75" x2="164" y2="75" stroke="${c.secondary}" stroke-width="3" stroke-linecap="round"/>
        <line x1="184" y1="105" x2="198" y2="105" stroke="${c.secondary}" stroke-width="3" stroke-linecap="round"/>

        <!-- 3D Silicone Punching Matrix (Knuckles) -->
        <rect x="76" y="135" width="88" height="28" rx="8" fill="#09090b" opacity="0.85"/>
        <circle cx="88" cy="149" r="4.5" fill="${punchColor}"/>
        <circle cx="104" cy="149" r="5" fill="${punchColor}"/>
        <circle cx="120" cy="149" r="5" fill="${punchColor}"/>
        <circle cx="136" cy="149" r="5" fill="${punchColor}"/>
        <circle cx="152" cy="149" r="4.5" fill="${punchColor}"/>

        <!-- Center Brand Emblem / Graphic -->
        <circle cx="120" cy="195" r="22" fill="#09090b" stroke="${c.secondary}" stroke-width="2"/>
        <text x="120" y="199" font-size="10" font-weight="900" fill="#ffffff" text-anchor="middle" font-family="Rajdhani, sans-serif" letter-spacing="1">
          ${glove.brand.toUpperCase()}
        </text>
        <text x="120" y="210" font-size="7" font-weight="bold" fill="${c.secondary}" text-anchor="middle" font-family="Outfit, sans-serif">
          PRO FIT
        </text>
      `
          : `
        <!-- PALM SPECIFIC DETAILS: 4mm Latex Grip Channels & Thumb Wrap -->
        <!-- Latex Flex Grooves (Anatomical Lines) -->
        <path d="M 50,175 Q 90,185 130,175" stroke="#94a3b8" stroke-width="1.8" fill="none" opacity="0.6"/>
        <path d="M 85,150 Q 120,165 170,155" stroke="#94a3b8" stroke-width="1.8" fill="none" opacity="0.6"/>
        <path d="M 95,200 Q 130,210 165,195" stroke="#94a3b8" stroke-width="1.8" fill="none" opacity="0.6"/>

        <!-- Thumb Wrap Latex Seal -->
        <path d="M 35,155 Q 55,160 68,175" stroke="${c.secondary}" stroke-width="2" fill="none"/>

        <!-- Latex Thickness & Tech Label printed on Palm -->
        <text x="120" y="185" font-size="9" font-weight="900" fill="#0f172a" text-anchor="middle" font-family="Rajdhani, sans-serif" letter-spacing="1" opacity="0.8">
          4MM GERMAN LATEX
        </text>
        <text x="120" y="196" font-size="8" font-weight="bold" fill="#475569" text-anchor="middle" font-family="Outfit, sans-serif" opacity="0.8">
          ${glove.cut.toUpperCase()}
        </text>
      `
      }

      <!-- Extended Wrist Support & Elastic Strap -->
      <rect x="68" y="235" width="107" height="42" rx="7" fill="#09090b" stroke="${c.secondary}" stroke-width="2"/>
      
      <!-- Strap Fastener Details -->
      <rect x="74" y="242" width="75" height="28" rx="4" fill="#1e293b"/>
      <circle cx="84" cy="256" r="3" fill="${c.secondary}"/>
      <text x="116" y="259" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="Outfit, sans-serif">
        ${glove.brand}
      </text>

      <!-- 4mm Latex Edge Indicator (Demonstrating Thickness) -->
      <path d="M 65,225 L 65,235" stroke="${c.secondary}" stroke-width="3"/>
    </svg>
  `;
}

// ----------------------------------------------------
// HERO & SHOWCASE SANDBOX LOGIC
// ----------------------------------------------------

function renderHeroGlove() {
  const container = document.getElementById("heroGloveVisual");
  if (!container) return;
  const glove = GLOVES_DATA[0];
  container.innerHTML = generateGloveSVG(glove, "palm", "open", 220, 270);
}

function renderSandboxGlove() {
  const canvas = document.getElementById("sandboxCanvas");
  const callout = document.getElementById("sandboxCallout");
  const quickName = document.getElementById("quickSelectName");
  if (!canvas || !sandboxGlove) return;

  canvas.innerHTML = generateGloveSVG(sandboxGlove, sandboxViewMode, sandboxPoseMode, 260, 270);

  if (quickName) {
    quickName.textContent = `${sandboxGlove.brand} — ${sandboxGlove.name}`;
  }

  if (callout) {
    if (sandboxViewMode === "palm") {
      callout.innerHTML = `<span class="text-glow-neon font-bold">Lateks:</span> ${sandboxGlove.latex.name} (${sandboxGlove.latex.thickness.split('+')[0]})`;
    } else if (sandboxViewMode === "back") {
      callout.innerHTML = `<span class="text-glow-cyan font-bold">Mato:</span> ${sandboxGlove.fabric.name}`;
    } else {
      callout.innerHTML = `<span class="text-glow-gold font-bold">Grip:</span> Koptokni ushlash burchagi (10/10)`;
    }
  }
}

function setSandboxView(view) {
  sandboxViewMode = view;

  // Update button highlights
  const btnPalm = document.getElementById("btnViewPalm");
  const btnBack = document.getElementById("btnViewBack");
  const btnBall = document.getElementById("btnViewBall");

  [btnPalm, btnBack, btnBall].forEach((b) => {
    if (b) b.className = "px-3 py-1.5 rounded-lg text-slate-300 hover:text-white font-medium transition-all";
  });

  if (view === "palm" && btnPalm) {
    btnPalm.className = "px-3 py-1.5 rounded-lg bg-glow-neon text-pitch-900 font-bold transition-all";
  } else if (view === "back" && btnBack) {
    btnBack.className = "px-3 py-1.5 rounded-lg bg-glow-neon text-pitch-900 font-bold transition-all";
  } else if (view === "ball" && btnBall) {
    btnBall.className = "px-3 py-1.5 rounded-lg bg-glow-neon text-pitch-900 font-bold transition-all";
  }

  renderSandboxGlove();
}

function triggerSandboxPose(pose) {
  sandboxPoseMode = pose;

  const btnOpen = document.getElementById("btnPoseOpen");
  const btnFist = document.getElementById("btnPoseFist");

  if (btnOpen && btnFist) {
    if (pose === "open") {
      btnOpen.className = "px-2.5 py-1 rounded bg-pitch-800/90 border border-glow-neon text-[11px] text-glow-neon font-semibold transition-all";
      btnFist.className = "px-2.5 py-1 rounded bg-pitch-800/90 border border-slate-700 text-[11px] text-slate-300 hover:text-white font-semibold transition-all";
    } else {
      btnFist.className = "px-2.5 py-1 rounded bg-pitch-800/90 border border-glow-neon text-[11px] text-glow-neon font-semibold transition-all";
      btnOpen.className = "px-2.5 py-1 rounded bg-pitch-800/90 border border-slate-700 text-[11px] text-slate-300 hover:text-white font-semibold transition-all";
    }
  }

  renderSandboxGlove();
}

function switchSandboxGlove(id) {
  const glove = GLOVES_DATA.find((g) => g.id === id);
  if (glove) {
    sandboxGlove = glove;
    activeFeaturedGloveId = glove.id;
    renderSandboxGlove();
  }
}

// ----------------------------------------------------
// FULL INTERACTIVE HAND SIMULATOR MODAL
// ----------------------------------------------------

function openHandSimulator(gloveId) {
  const glove = GLOVES_DATA.find((g) => g.id === gloveId) || GLOVES_DATA[0];
  currentModalGlove = glove;
  modalViewMode = "palm";
  modalPoseMode = "open";

  const modal = document.getElementById("handModal");
  if (!modal) return;

  // Fill modal texts
  document.getElementById("modalGloveTitle").textContent = `${glove.brand} ${glove.name}`;
  document.getElementById("modalGloveSubtitle").textContent = `${glove.cut} • ${glove.weather} • ${glove.latex.thickness}`;
  document.getElementById("modalBrandTag").textContent = glove.brand;
  document.getElementById("modalPrice").textContent = `${formatPrice(glove.price)} UZS`;

  document.getElementById("modalLatexDesc").innerHTML = `
    <strong>${glove.latex.name}</strong> (${glove.latex.thickness}) — ${glove.latex.description}
    <div class="mt-1 flex items-center gap-3 text-[11px] text-slate-400">
      <span>Grip darajasi: <strong class="text-glow-neon">${glove.latex.gripLevel}/10</strong></span>
      <span>Chidamlilik: <strong class="text-glow-cyan">${glove.latex.durability}/10</strong></span>
    </div>
  `;

  document.getElementById("modalFabricDesc").innerHTML = `
    <strong>${glove.fabric.name}</strong> — ${glove.fabric.features}. 
    <div class="mt-1 text-[11px] text-slate-400">
      Zarba zonasi: <strong class="text-slate-200">${glove.fabric.punchZone}</strong>
    </div>
  `;

  updateModalViewButtons();
  renderModalSVG();

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  initLucide();
}

function closeHandSimulator() {
  const modal = document.getElementById("handModal");
  if (modal) {
    modal.classList.add("hidden");
  }
  document.body.style.overflow = "auto";
}

function renderModalSVG() {
  const container = document.getElementById("modalSvgContainer");
  const overlay = document.getElementById("modalSpecsOverlay");
  if (!container || !currentModalGlove) return;

  container.innerHTML = generateGloveSVG(currentModalGlove, modalViewMode, modalPoseMode, 240, 280);

  if (overlay) {
    overlay.textContent = `${currentModalGlove.cut} • O'lcham: ${modalSelectedSize} • ${currentModalGlove.latex.thickness.split('+')[0]}`;
  }
}

function setModalView(view) {
  modalViewMode = view;
  updateModalViewButtons();
  renderModalSVG();
}

function updateModalViewButtons() {
  const btnPalm = document.getElementById("modalBtnPalm");
  const btnBack = document.getElementById("modalBtnBack");
  const btnBall = document.getElementById("modalBtnBall");

  [btnPalm, btnBack, btnBall].forEach((b) => {
    if (b) b.className = "px-3.5 py-1.5 rounded-lg text-slate-300 hover:text-white font-medium transition-all";
  });

  if (modalViewMode === "palm" && btnPalm) {
    btnPalm.className = "px-3.5 py-1.5 rounded-lg bg-glow-neon text-pitch-900 font-bold transition-all";
  } else if (modalViewMode === "back" && btnBack) {
    btnBack.className = "px-3.5 py-1.5 rounded-lg bg-glow-neon text-pitch-900 font-bold transition-all";
  } else if (modalViewMode === "ball" && btnBall) {
    btnBall.className = "px-3.5 py-1.5 rounded-lg bg-glow-neon text-pitch-900 font-bold transition-all";
  }
}

function setModalPose(pose) {
  modalPoseMode = pose;
  const pOpen = document.getElementById("modalPoseOpen");
  const pFist = document.getElementById("modalPoseFist");

  if (pOpen && pFist) {
    if (pose === "open") {
      pOpen.className = "px-3 py-1.5 rounded-lg bg-pitch-800 border border-glow-neon text-glow-neon text-xs font-bold transition-all";
      pFist.className = "px-3 py-1.5 rounded-lg bg-pitch-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-all";
    } else {
      pFist.className = "px-3 py-1.5 rounded-lg bg-pitch-800 border border-glow-neon text-glow-neon text-xs font-bold transition-all";
      pOpen.className = "px-3 py-1.5 rounded-lg bg-pitch-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-all";
    }
  }

  renderModalSVG();
}

function selectModalSize(size, widthText) {
  modalSelectedSize = size;
  const txt = document.getElementById("modalSizeWidthText");
  if (txt) {
    txt.textContent = `Kaft eni: ~${widthText}`;
  }

  const buttons = document.querySelectorAll("#modalSizeButtons button");
  buttons.forEach((btn) => {
    if (btn.textContent.trim() == size) {
      btn.className = "size-btn py-2 rounded-xl bg-glow-neon text-pitch-900 font-bold border border-glow-neon";
    } else {
      btn.className = "size-btn py-2 rounded-xl bg-pitch-800 hover:bg-pitch-700 text-xs font-bold border border-slate-700 text-white";
    }
  });

  renderModalSVG();
}

function addModalGloveToCart() {
  if (!currentModalGlove) return;
  addToCart(currentModalGlove, modalSelectedSize);
  closeHandSimulator();
  showToast("Savatga qo'shildi", `${currentModalGlove.name} (O'lcham: ${modalSelectedSize}) savatga muvaffaqiyatli qo'shildi!`);
}

function orderViaTelegramFromModal() {
  if (!currentModalGlove) return;
  const msg = encodeURIComponent(`Salom! Men GLOVE PRO saytidan original darvozabon qo'lqopiga buyurtma bermoqchiman:
Model: ${currentModalGlove.brand} ${currentModalGlove.name}
O'lcham: ${modalSelectedSize}
Lateks: ${currentModalGlove.latex.name}
Narxi: ${formatPrice(currentModalGlove.price)} UZS`);
  window.open(`https://t.me/share/url?url=https://t.me/GlovePro_Darvozabon&text=${msg}`, "_blank");
}

// ----------------------------------------------------
// SHOPPING CART & CHECKOUT
// ----------------------------------------------------

function quickAddToCart(gloveId) {
  const glove = GLOVES_DATA.find((g) => g.id === gloveId);
  if (!glove) return;
  addToCart(glove, 9); // default size 9
  showToast("Savatga qo'shildi", `${glove.name} (O'lcham 9) savatga qo'shildi!`);
}

function addToCart(glove, size = 9) {
  const existingIndex = cart.findIndex((item) => item.id === glove.id && item.size === size);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({
      id: glove.id,
      brand: glove.brand,
      name: glove.name,
      price: glove.price,
      size: size,
      latex: glove.latex.name,
      fabric: glove.fabric.name,
      quantity: 1
    });
  }

  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.getElementById("cartCount");
  if (!badge) return;
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  badge.textContent = totalItems;
}

function openCart() {
  const modal = document.getElementById("cartModal");
  if (!modal) return;
  renderCartItems();
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  initLucide();
}

function closeCart() {
  const modal = document.getElementById("cartModal");
  if (modal) {
    modal.classList.add("hidden");
  }
  document.body.style.overflow = "auto";
}

function renderCartItems() {
  const container = document.getElementById("cartItemsContainer");
  const totalDisplay = document.getElementById("cartTotalPrice");
  if (!container) return;

  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 space-y-3">
        <i data-lucide="shopping-bag" class="w-12 h-12 text-slate-600 mx-auto"></i>
        <p class="text-sm text-slate-400">Savatingiz hozircha bo'sh</p>
        <button onclick="closeCart()" class="text-xs text-glow-neon font-bold hover:underline">Katalogni ko'rish</button>
      </div>
    `;
    if (totalDisplay) totalDisplay.textContent = "0 UZS";
    initLucide();
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    const row = document.createElement("div");
    row.className = "bg-pitch-800 p-3.5 rounded-xl border border-slate-700/80 flex items-center justify-between gap-3";
    row.innerHTML = `
      <div class="flex-1">
        <div class="flex items-center gap-2">
          <span class="text-[10px] bg-slate-900 text-glow-neon px-1.5 py-0.5 rounded font-mono font-bold">${item.brand}</span>
          <h4 class="text-xs font-bold text-white truncate max-w-[180px]">${item.name}</h4>
        </div>
        <div class="text-[11px] text-slate-400 mt-1">
          O'lcham: <strong class="text-white">${item.size}</strong> • ${formatPrice(item.price)} UZS
        </div>
      </div>

      <!-- Quantity controls -->
      <div class="flex items-center gap-2">
        <div class="flex items-center bg-pitch-900 rounded-lg border border-slate-700 text-xs">
          <button onclick="changeCartQty(${index}, -1)" class="px-2 py-1 text-slate-400 hover:text-white">-</button>
          <span class="px-2 font-bold text-white">${item.quantity}</span>
          <button onclick="changeCartQty(${index}, 1)" class="px-2 py-1 text-slate-400 hover:text-white">+</button>
        </div>
        <button onclick="removeCartItem(${index})" class="text-rose-400 hover:text-rose-300 p-1">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    `;
    container.appendChild(row);
  });

  if (totalDisplay) {
    totalDisplay.textContent = `${formatPrice(total)} UZS`;
  }

  initLucide();
}

function changeCartQty(index, delta) {
  if (!cart[index]) return;
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  updateCartBadge();
  renderCartItems();
}

function removeCartItem(index) {
  cart.splice(index, 1);
  updateCartBadge();
  renderCartItems();
}

function submitOrder() {
  if (cart.length === 0) {
    alert("Iltimos, avval savatga biror qo'lqop qo'shing!");
    return;
  }

  const name = document.getElementById("orderName")?.value.trim();
  const phone = document.getElementById("orderPhone")?.value.trim();
  const city = document.getElementById("orderCity")?.value.trim();

  if (!name || !phone) {
    alert("Iltimos, ismingiz va telefon raqamingizni kiriting!");
    return;
  }

  // Success simulation
  const itemsList = cart.map((i) => `• ${i.brand} ${i.name} (O'lcham: ${i.size}) x${i.quantity}`).join("\n");
  const total = cart.reduce((acc, i) => acc + i.price * i.quantity, 0);

  alert(`Rahmat, ${name}! Buyurtmangiz qabul qilindi.\n\nTanlangan modellar:\n${itemsList}\nJami: ${formatPrice(total)} UZS\n\nTez orada mutaxassisimiz ${phone} raqamiga qo'ng'iroq qilib, o'lcham va yetkazib berish manzilini tasdiqlaydi!`);

  cart = [];
  updateCartBadge();
  closeCart();
  showToast("Buyurtma qabul qilindi", "Mutaxassisimiz tez orada siz bilan bog'lanadi!");
}

// ----------------------------------------------------
// SIZE GUIDE MODAL
// ----------------------------------------------------

function openSizeGuide() {
  const modal = document.getElementById("sizeGuideModal");
  if (modal) {
    modal.classList.remove("hidden");
    initLucide();
  }
}

function closeSizeGuide() {
  const modal = document.getElementById("sizeGuideModal");
  if (modal) {
    modal.classList.add("hidden");
  }
}

// ----------------------------------------------------
// UTILITIES & TOAST
// ----------------------------------------------------

function formatPrice(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function showToast(title, msg) {
  const toast = document.getElementById("toast");
  const tTitle = document.getElementById("toastTitle");
  const tMsg = document.getElementById("toastMessage");

  if (!toast || !tTitle || !tMsg) return;

  tTitle.textContent = title;
  tMsg.textContent = msg;

  toast.classList.remove("hidden");
  toast.classList.add("flex");

  setTimeout(() => {
    toast.classList.add("hidden");
    toast.classList.remove("flex");
  }, 4000);
}
