export interface ProcessArticleData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  answerBlock: string;
  image?: string;
  imageAlt?: string;
  sections: {
    heading: string;
    content: string[];
    list?: string[];
    proTip?: string;
  }[];
  faq: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const pillarMeta = {
  slug: 'saree-box-manufacturing',
  title: 'Saree Box Manufacturing Process – Complete Guide from Our Factory',
  metaTitle: 'Saree Box Manufacturing Process | Step-by-Step Factory Guide',
  metaDescription:
    'Complete guide to saree box manufacturing from our Sivakasi factory. Learn paperboard selection, lamination types, die preparing, scoring and material choices used in premium saree packaging.',
  metaKeywords:
    'saree box manufacturing process, saree box making, saree packing box manufacturing, paperboard selection, lamination for saree box, die cutting saree box, scoring process, saree box materials',
};

export const clusterArticles: ProcessArticleData[] = [
  {
    slug: 'paperboard-selection',
    title: 'Paperboard Selection for Saree Box Manufacturing',
    metaTitle: 'Paperboard Selection for Saree Box | Size Calculation Guide',
    metaDescription:
      'Learn how we select the right paperboard for saree boxes. Includes size calculation for book fold saree packing box (8x13x1.5), standard sheet matching, and GSM selection from our Sivakasi factory.',
    metaKeywords:
      'paperboard selection saree box, saree box size calculation, book fold saree box size, paperboard sheet size, saree packing box paperboard',
    answerBlock:
      'Paperboard selection is the first step in saree box manufacturing. For a standard book fold saree packing box sized 8×13×1.5 inches, we calculate the unwrapped size (20.25×15.5 inches) and match it to the nearest standard paperboard sheet (22×32 inches), allowing two top lids per sheet for cost efficiency.',
    image: '/process/boxsize.png',
    imageAlt: 'Saree box dimensions diagram showing 13 x 8 x 1.5 inch measurements',
    sections: [
      {
        heading: 'How We Start: Understanding the Customer Requirement',
        content: [
          'Saree boxes are usually made up of sturdy cardboard or paperboard. Customers come with different size and different GSM requirements based on their saree folding types.',
          'The two most common saree folding types we encounter at our factory are Book Fold and Visiri Fold. Each requires a differently sized box.',
        ],
        list: ['Book Fold — the most common, rectangular flat box', 'Visiri Fold — fan-style fold requiring a wider, shallower box'],
      },
      {
        heading: 'Size Calculation: Book Fold Saree Box Example',
        content: [
          'For this explanation, we take the example of manufacturing a standard saree packing box, also called a Book Fold saree packing box. The finished size (Top Lid) is 8 × 13 × 1.5 inches (Width × Height × Thickness).',
          'The size 8×13×1.5 is the size after folding. In its unwrapped state, the total size of the box is larger. To find the unwrapped size we calculate:',
        ],
        list: [
          'Height: left side 3.625 + Centre 13 + right side 3.625 = 20.25 inches',
          'Width: Top 3.75 + Centre 8 + Bottom 3.75 = 15.5 inches',
          'Total unwrapped size: 20.25 × 15.5 inches (H × W)',
        ],
        proTip:
          'Always add 0.125 inch tolerance on each flap side. This prevents the lid from being too tight on the bottom tray — a mistake we see beginners make frequently.',
      },
      {
        heading: 'Matching to Standard Paperboard Sheet Sizes',
        content: [
          'Once we know the unwrapped size, we try to match it to a nearby standard paperboard sheet. Paperboard comes in standard sizes from mills.',
          'For our 20.25 × 15.5 inch unwrapped box, the nearest standard paperboard size is 22 × 32 inches (H × W). This means we can cut two top lids from a single sheet — this is how paperboard size is selected, and the same process applies for all custom saree box sizes.',
        ],
        proTip:
          'Getting two lids from one sheet instead of one halves your material cost per box. We always plan sheet utilization before confirming pricing to our clients.',
      },
    ],
    faq: [
      {
        question: 'What is the standard size of a saree packing box?',
        answer:
          'The most common standard size for a book fold saree packing box is 8 × 13 × 1.5 inches (Width × Height × Thickness). However, sizes vary based on the saree folding type and customer requirements.',
      },
      {
        question: 'How do you calculate the unwrapped paperboard size for a saree box?',
        answer:
          'We add the flap dimensions to the centre panel on each side. For an 8×13×1.5 box: Height = 3.625 + 13 + 3.625 = 20.25 inches, Width = 3.75 + 8 + 3.75 = 15.5 inches.',
      },
      {
        question: 'What GSM paperboard is used for saree boxes?',
        answer:
          'Typically 300–400 GSM duplex or triplex board is used. The exact GSM depends on the box stiffness required and whether the customer wants a premium or economy finish.',
      },
    ],
    relatedSlugs: ['saree-box-materials', 'thermal-lamination', 'bopp-lamination', 'die-preparing'],
  },
  {
    slug: 'thermal-lamination',
    title: 'Thermal Lamination (Dry Lamination) for Saree Boxes',
    metaTitle: 'Thermal Lamination for Saree Boxes | Dry Lamination Process',
    metaDescription:
      'Learn how thermal (dry) lamination works in saree box manufacturing. We explain the heat-activated bonding process, BOPP film usage, and why we prefer this method at our Sivakasi factory.',
    metaKeywords:
      'thermal lamination saree box, dry lamination packaging, BOPP thermal lamination, saree box lamination process',
    answerBlock:
      'Thermal lamination (also called dry lamination) bonds a thin BOPP film to paperboard using heat and pressure, with no wet adhesive. It gives saree boxes waterproofing, durability, anti-cracking properties, colour retention, and a luxury finish. This is the most widely used lamination in our factory.',
    sections: [
      {
        heading: 'What is Thermal Lamination?',
        content: [
          'Thermal lamination uses heat-activated adhesive pre-coated on a BOPP (Biaxially Oriented Polypropylene) film. When the film passes through heated rollers along with the printed paperboard, the adhesive melts and bonds the film permanently to the surface.',
          'Unlike wet lamination, there is no liquid glue involved — which is why it is also called "dry lamination". The result is a clean, bubble-free, consistent finish.',
        ],
      },
      {
        heading: 'Why We Use Thermal Lamination at Our Factory',
        content: [
          'At our Sivakasi factory, thermal lamination with BOPP film is our default choice for saree boxes. The reasons are practical:',
        ],
        list: [
          'Clear, strong surface that does not yellow over time',
          'Excellent moisture barrier — critical for protecting silk sarees',
          'Consistent finish across large production runs',
          'Fast processing speed — we can laminate thousands of sheets per hour',
          'No drying time required, unlike wet lamination',
        ],
        proTip:
          'We always run a small test batch first when switching to a new paperboard supplier. Different boards absorb heat differently, and getting the roller temperature wrong can cause bubbling or peeling.',
      },
      {
        heading: 'Thermal Lamination vs Other Methods',
        content: [
          'Thermal lamination provides the best balance of cost, speed, and quality for saree box manufacturing. Wet lamination gives a slightly different feel but requires drying time. For special finishes like soft-touch or metallic, we use velvet lamination or met-pet lamination respectively — but those are premium add-ons.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is thermal lamination waterproof?',
        answer:
          'Yes. The BOPP film creates a moisture barrier that protects the saree box from water damage, humidity, and minor spills. This is especially important for silk saree packaging.',
      },
      {
        question: 'What is the difference between thermal and wet lamination?',
        answer:
          'Thermal lamination uses heat to activate pre-coated adhesive on the film (no liquid glue). Wet lamination applies liquid adhesive during the process and requires drying time. Thermal is faster and more consistent for large runs.',
      },
    ],
    relatedSlugs: ['bopp-lamination', 'wet-lamination', 'gloss-lamination', 'matte-lamination', 'paperboard-selection'],
  },
  {
    slug: 'wet-lamination',
    title: 'Wet Lamination Process for Saree Packaging Boxes',
    metaTitle: 'Wet Lamination for Saree Boxes | Liquid Adhesive Lamination',
    metaDescription:
      'Detailed guide on wet lamination for saree packaging boxes. Learn when liquid adhesive lamination is preferred over thermal methods, from our manufacturing experience in Sivakasi.',
    metaKeywords:
      'wet lamination saree box, liquid adhesive lamination, wet lamination packaging, saree box coating',
    answerBlock:
      'Wet lamination uses liquid adhesive applied between the film and paperboard, then dried under pressure. It offers strong bonding on textured or uncoated surfaces where thermal lamination may not adhere well. We use it selectively for specialty saree box finishes at our factory.',
    sections: [
      {
        heading: 'How Wet Lamination Works',
        content: [
          'In wet lamination, a water-based or solvent-based adhesive is applied to the paperboard surface. A film (usually BOPP or polyester) is then pressed onto the wet adhesive layer, and the assembly passes through drying rollers or a curing tunnel.',
          'The drying step is what distinguishes wet lamination from thermal — it requires time for the adhesive to cure fully before the laminated sheet can be handled.',
        ],
      },
      {
        heading: 'When We Choose Wet Lamination',
        content: [
          'At our factory, wet lamination is not our default — thermal BOPP is. But we use wet lamination in specific situations:',
        ],
        list: [
          'When the paperboard surface is heavily textured or uncoated, making heat bonding unreliable',
          'For certain specialty films that do not have pre-coated thermal adhesive',
          'When the client specifically requests wet lamination for a particular tactile finish',
        ],
        proTip:
          'The biggest risk with wet lamination is incomplete drying. If sheets are stacked before the adhesive fully cures, they stick together and the entire batch is wasted. We always allow a minimum 4-hour drying window before moving to the next stage.',
      },
    ],
    faq: [
      {
        question: 'Is wet lamination more durable than thermal lamination?',
        answer:
          'Bond strength is comparable when done correctly. The main difference is process speed — wet lamination requires drying time, making it slower for large production runs. For saree boxes, thermal lamination is usually sufficient and more efficient.',
      },
      {
        question: 'Does wet lamination cost more than thermal?',
        answer:
          'Generally yes, due to the additional drying time and adhesive material cost. For standard saree box production, thermal lamination is more cost-effective.',
      },
    ],
    relatedSlugs: ['thermal-lamination', 'bopp-lamination', 'gloss-lamination', 'paperboard-selection'],
  },
  {
    slug: 'bopp-lamination',
    title: 'BOPP Lamination for Saree Boxes – Our Preferred Method',
    metaTitle: 'BOPP Lamination for Saree Boxes | Biaxially Oriented Polypropylene Film',
    metaDescription:
      'BOPP (Biaxially Oriented Polypropylene) lamination is the most widely used method for saree box finishing. Learn why our Sivakasi factory prefers BOPP and how it protects premium saree packaging.',
    metaKeywords:
      'BOPP lamination saree box, biaxially oriented polypropylene, BOPP film packaging, saree box BOPP finish',
    answerBlock:
      'BOPP (Biaxially Oriented Polypropylene) lamination is our most-used finishing method for saree boxes. The BOPP film is clear, strong, and provides excellent surface finishing with waterproofing, anti-cracking, colour retention, and a luxury feel — all critical for premium saree packaging.',
    sections: [
      {
        heading: 'What is BOPP Film?',
        content: [
          'BOPP stands for Biaxially Oriented Polypropylene — a plastic film that has been stretched in both directions (machine direction and cross direction) during manufacturing. This stretching makes it exceptionally strong, clear, and dimensionally stable.',
          'In saree box manufacturing, BOPP film is applied over the printed paperboard to create a protective, glossy or matte outer layer.',
        ],
      },
      {
        heading: 'Why BOPP is Our Default Choice',
        content: [
          'We use BOPP thermal lamination as our standard process because it delivers the best combination of qualities for saree packaging:',
        ],
        list: [
          'Crystal clear transparency — printed colours and logos show through without distortion',
          'High tensile strength — resists tearing during box folding and handling',
          'Moisture barrier — protects silk and cotton sarees from humidity during storage and shipping',
          'Colour retention — prevents printed inks from fading or rubbing off',
          'Available in gloss, matte, and soft-touch variants for different premium finishes',
        ],
        proTip:
          'BOPP film thickness matters. For saree boxes, we use 12–15 micron film. Thinner film (under 12 micron) can wrinkle during lamination, and thicker film (above 18 micron) makes the box feel stiff and plasticky — not the premium feel our clients want.',
      },
      {
        heading: 'BOPP Gloss vs BOPP Matte',
        content: [
          'BOPP film comes in gloss and matte variants. Gloss BOPP gives a shiny, reflective surface that makes colours pop — ideal for vibrant printed saree boxes. Matte BOPP gives a smooth, non-reflective finish that feels more premium and understated.',
          'At our factory, roughly 70% of saree box orders use gloss BOPP, and 30% use matte. Wedding saree boxes tend to prefer gloss, while boutique/designer brands often choose matte.',
        ],
      },
    ],
    faq: [
      {
        question: 'What does BOPP stand for in packaging?',
        answer:
          'BOPP stands for Biaxially Oriented Polypropylene. It is a plastic film stretched in two directions for strength and clarity, widely used for laminating printed packaging including saree boxes.',
      },
      {
        question: 'Is BOPP lamination food-safe?',
        answer:
          'Yes, BOPP is generally considered food-safe and is used across food packaging. For saree boxes, the key benefit is moisture protection and durability rather than food safety.',
      },
    ],
    relatedSlugs: ['thermal-lamination', 'gloss-lamination', 'matte-lamination', 'velvet-soft-touch-lamination'],
  },
  {
    slug: 'gloss-lamination',
    title: 'Gloss Lamination for Saree Packaging Boxes',
    metaTitle: 'Gloss Lamination for Saree Boxes | Shiny Finish Packaging',
    metaDescription:
      'Gloss lamination gives saree boxes a high-shine, reflective finish that enhances printed colours. Learn how we apply gloss BOPP film at our factory for premium saree packaging.',
    metaKeywords:
      'gloss lamination saree box, glossy finish packaging, gloss BOPP lamination, shiny saree box',
    answerBlock:
      'Gloss lamination applies a high-shine BOPP film to saree box paperboard, creating a reflective surface that makes printed colours appear more vibrant and saturated. It is our most popular finish, used in about 70% of saree box orders, especially for wedding and retail packaging.',
    sections: [
      {
        heading: 'What Gloss Lamination Looks and Feels Like',
        content: [
          'Gloss lamination gives a smooth, shiny, mirror-like surface to the saree box. When you hold a gloss-laminated box under light, it reflects clearly. Printed logos, patterns, and colours appear deeper and more vivid than on unlaminated board.',
          'For wedding saree boxes and retail display packaging, gloss lamination is the go-to choice because it communicates "premium" at first glance.',
        ],
      },
      {
        heading: 'How We Apply Gloss Lamination',
        content: [
          'The process is straightforward — we use gloss BOPP film on our thermal lamination machine. The printed paperboard passes through heated rollers alongside the gloss film, and the heat-activated adhesive bonds them permanently.',
        ],
        list: [
          'Film thickness: 12–15 micron gloss BOPP',
          'Roller temperature: 95–110°C depending on board type',
          'Speed: up to 60 meters per minute on our production line',
        ],
        proTip:
          'Gloss lamination shows fingerprints and surface scratches more easily than matte. For boxes that will be handled frequently in retail displays, we sometimes recommend matte or soft-touch instead, even though gloss looks more striking initially.',
      },
    ],
    faq: [
      {
        question: 'Does gloss lamination make saree boxes waterproof?',
        answer:
          'Yes. The BOPP film layer provides a moisture barrier that protects the box and contents from water and humidity. This is important for saree storage and shipping.',
      },
      {
        question: 'Can I print on top of gloss lamination?',
        answer:
          'Standard inks do not adhere well to gloss-laminated surfaces. If you need printing after lamination, we recommend spot UV or foil stamping, which bond to the laminated surface.',
      },
    ],
    relatedSlugs: ['matte-lamination', 'bopp-lamination', 'velvet-soft-touch-lamination', 'thermal-lamination'],
  },
  {
    slug: 'matte-lamination',
    title: 'Matte Lamination for Premium Saree Boxes',
    metaTitle: 'Matte Lamination for Saree Boxes | Smooth Non-Reflective Finish',
    metaDescription:
      'Matte lamination gives saree boxes a smooth, non-reflective, elegant finish preferred by designer brands. Learn about matte BOPP film application from our Sivakasi manufacturing unit.',
    metaKeywords:
      'matte lamination saree box, matte finish packaging, matte BOPP film, premium saree box finish',
    answerBlock:
      'Matte lamination uses a non-reflective BOPP film to create a smooth, elegant finish on saree boxes. It resists fingerprints better than gloss, feels softer to the touch, and is preferred by boutique and designer saree brands for its understated premium appearance.',
    sections: [
      {
        heading: 'Why Designers Prefer Matte',
        content: [
          'Matte-laminated saree boxes have a distinctive smooth, non-shiny surface that diffuses light instead of reflecting it. This gives the box a sophisticated, understated look that many premium brands prefer over the flashiness of gloss.',
          'At our factory, we have seen a growing trend — especially from South Indian silk saree brands — moving toward matte finishes for their packaging. It pairs particularly well with gold foil stamping for logos.',
        ],
      },
      {
        heading: 'Matte vs Gloss: Practical Differences',
        content: [
          'Beyond aesthetics, matte has practical advantages:',
        ],
        list: [
          'Fingerprint resistant — boxes stay clean on retail shelves',
          'Scratch resistant — harder to mark than gloss surface',
          'Better for text-heavy designs — text is easier to read on matte',
          'Slightly higher cost than gloss due to film pricing',
        ],
        proTip:
          'If a client wants "premium but not shiny", matte is our recommendation. But we always send both gloss and matte samples first — the perception of "premium" varies by brand and region.',
      },
    ],
    faq: [
      {
        question: 'Is matte lamination more expensive than gloss?',
        answer:
          'Slightly, yes. Matte BOPP film costs marginally more than gloss. For bulk saree box orders (500+ pieces), the price difference per box is minimal.',
      },
      {
        question: 'Can matte lamination be combined with spot UV?',
        answer:
          'Yes — this is actually one of the most popular premium finishes. Matte lamination with spot UV on the logo creates a striking contrast between the dull background and glossy highlighted areas.',
      },
    ],
    relatedSlugs: ['gloss-lamination', 'velvet-soft-touch-lamination', 'bopp-lamination', 'met-pet-metallic-lamination'],
  },
  {
    slug: 'velvet-soft-touch-lamination',
    title: 'Velvet / Soft Touch Lamination for Luxury Saree Boxes',
    metaTitle: 'Velvet Soft Touch Lamination for Saree Boxes | Luxury Packaging Finish',
    metaDescription:
      'Velvet (soft touch) lamination gives saree boxes a velvety, tactile surface that feels like suede. Learn about this premium finish used for luxury and wedding saree packaging.',
    metaKeywords:
      'velvet lamination saree box, soft touch lamination, luxury saree packaging, velvet finish box, premium saree box coating',
    answerBlock:
      'Velvet or soft-touch lamination creates a suede-like, velvety surface on saree boxes that feels premium to the touch. It is our most luxurious lamination option, used for high-end wedding saree packaging and designer brand boxes where the unboxing experience matters.',
    sections: [
      {
        heading: 'What Soft-Touch Lamination Feels Like',
        content: [
          'Pick up a velvet-laminated box and the first thing you notice is the texture — it feels like touching soft fabric, almost like suede. The surface is completely matte with a very fine micro-texture that gives it that distinctive velvety feel.',
          'For luxury saree packaging, especially wedding collections, this finish transforms a simple paperboard box into a gift-worthy experience.',
        ],
      },
      {
        heading: 'When We Recommend Velvet Lamination',
        content: [
          'Velvet lamination costs significantly more than standard gloss or matte. We recommend it for:',
        ],
        list: [
          'Wedding saree gift boxes where the unboxing is part of the experience',
          'Designer/boutique brands that sell sarees above ₹5,000',
          'Corporate gifting packaging',
          'Limited edition or festive collection boxes',
        ],
        proTip:
          'Velvet lamination marks very easily — even light pressure from fingernails leaves visible impressions. We always advise clients to use tissue paper wrapping over velvet-laminated boxes during shipping. Without this precaution, boxes can arrive looking handled even when they are brand new.',
      },
    ],
    faq: [
      {
        question: 'How much more does velvet lamination cost compared to gloss?',
        answer:
          'Velvet lamination typically costs 2–3 times more than standard gloss BOPP lamination. The exact price depends on order volume and film sourcing. For orders above 1,000 pieces, we can negotiate better rates with our film supplier.',
      },
      {
        question: 'Can you print on velvet lamination?',
        answer:
          'Direct printing on velvet-laminated surfaces is not recommended. Instead, we use foil stamping (gold, silver, or custom colours) which bonds well to the velvet surface and creates a beautiful contrast.',
      },
    ],
    relatedSlugs: ['matte-lamination', 'met-pet-metallic-lamination', 'gloss-lamination', 'bopp-lamination'],
  },
  {
    slug: 'met-pet-metallic-lamination',
    title: 'Met PET (Metallic) Lamination for Saree Boxes',
    metaTitle: 'Met PET Metallic Lamination for Saree Boxes | Mirror Finish Packaging',
    metaDescription:
      'Met PET (metallized polyester) lamination gives saree boxes a striking metallic, mirror-like finish. Learn about this eye-catching premium option for festive and wedding saree packaging.',
    metaKeywords:
      'met pet lamination saree box, metallic lamination packaging, metallized polyester saree box, mirror finish saree box',
    answerBlock:
      'Met PET (metallized polyester) lamination bonds a thin metallic film to saree box paperboard, creating a mirror-like, highly reflective surface. Available in gold, silver, and holographic variants, it is used for festive, wedding, and ultra-premium saree packaging where visual impact is the priority.',
    sections: [
      {
        heading: 'What is Met PET Lamination?',
        content: [
          'Met PET stands for Metallized Polyester — a polyester film that has been vacuum-coated with a microscopically thin layer of aluminium. This gives it a bright, metallic, mirror-like appearance while remaining lightweight and flexible.',
          'When laminated onto a saree box, it creates a striking, eye-catching finish that stands out in retail displays and as gift packaging.',
        ],
      },
      {
        heading: 'Available Metallic Finishes',
        content: [
          'At our factory, we offer met PET lamination in several finishes:',
        ],
        list: [
          'Silver metallic — bright chrome-like mirror finish',
          'Gold metallic — warm gold reflective surface, very popular for wedding saree boxes',
          'Holographic — rainbow/prismatic effect that shifts with viewing angle',
          'Tinted metallic — coloured metallic effects (blue, red, green) for special editions',
        ],
        proTip:
          'Metallic lamination works best with minimalist printing. If the entire box surface is covered with heavy printing, the metallic effect is hidden. We advise clients to leave large unprinted areas so the metallic finish can shine through — literally.',
      },
    ],
    faq: [
      {
        question: 'Is metallic lamination suitable for all saree box types?',
        answer:
          'Metallic lamination works on all saree box types but is most commonly used for gift boxes and wedding packaging. For everyday wholesale saree packaging, the cost may not be justified.',
      },
      {
        question: 'Does metallic lamination affect recyclability?',
        answer:
          'Met PET lamination does make the box slightly harder to recycle compared to standard BOPP. For eco-conscious brands, we recommend gloss or matte lamination with metallic foil stamping only on the logo area as an alternative.',
      },
    ],
    relatedSlugs: ['velvet-soft-touch-lamination', 'gloss-lamination', 'matte-lamination', 'bopp-lamination'],
  },
  {
    slug: 'die-preparing',
    title: 'Die Preparing for Saree Box Manufacturing',
    metaTitle: 'Die Preparing for Saree Boxes | Custom Die Board Guide',
    metaDescription:
      'Learn how dies are prepared for saree box manufacturing. A die is a custom-shaped metal tool on a wooden board used to cut and crease paperboard into box shapes. Explained from our Sivakasi factory.',
    metaKeywords:
      'die preparing saree box, die cutting tool, saree box die board, cutting blades die, crease rules die',
    answerBlock:
      'A die is a custom-shaped metal tool used to cut and crease paperboard into saree box shapes. It consists of a flat wooden board with sharp cutting blades (to cut the outer shape) and crease rules (to press fold lines without cutting). Each saree box size requires its own unique die.',
    image: '/process/die-board.jpg',
    imageAlt: 'Real die board from our factory showing cutting blades and crease rules for saree box',
    sections: [
      {
        heading: 'What is a Die?',
        content: [
          'A die is a flat wooden board (usually plywood) that has metal blades sticking out of it. Think of it as a heavy-duty custom stamp — but instead of ink, it cuts and creases paper.',
          'The die is custom-made for each box size. When the laminated paperboard is pressed against the die, it gets cut into the exact shape needed and scored along the fold lines.',
        ],
      },
      {
        heading: 'Parts of a Die Board',
        content: [
          'A die board has two types of metal strips embedded in it:',
        ],
        list: [
          'Cutting blades — these are sharp metal strips that cut the outer excess shape of the paperboard, removing waste material',
          'Crease rules — these are blunt metal strips that do NOT cut the paperboard. Instead, they press into the board to create fold lines, so we can fold the box shape easily and cleanly',
        ],
        proTip:
          'The quality of the die directly affects the quality of every box produced from it. We get our dies made by specialized die makers and inspect every new die with test cuts before starting production. A poorly made die can cause uneven cuts, torn edges, or weak fold lines across the entire batch.',
      },
      {
        heading: 'Die Making Process',
        content: [
          'The die maker starts with the die line — a technical drawing showing the exact cutting and creasing pattern. Using this blueprint, sharp steel rules (for cutting) and dull steel rules (for creasing) are bent to shape and embedded into a plywood base.',
          'The rubber padding around the blades helps eject the paperboard after each cut. The entire die is precision-made to match the required box dimensions within 0.5mm tolerance.',
        ],
      },
    ],
    faq: [
      {
        question: 'How much does a die cost for saree box manufacturing?',
        answer:
          'A standard die for a saree box costs between ₹800 and ₹2,500 depending on size and complexity. It is a one-time cost — the same die can be used for thousands of boxes.',
      },
      {
        question: 'How long does a die last?',
        answer:
          'A well-made die can last for 50,000 to 100,000 impressions before the cutting blades need sharpening or replacement. For most saree box orders, a single die lasts several production runs.',
      },
    ],
    relatedSlugs: ['scoring-die-cutting', 'paperboard-selection', 'saree-box-materials'],
  },
  {
    slug: 'scoring-die-cutting',
    title: 'Scoring & Die Cutting Process in Saree Box Manufacturing',
    metaTitle: 'Scoring & Die Cutting for Saree Boxes | Production Process Guide',
    metaDescription:
      'Scoring is where the die meets the laminated paperboard. Learn how our workers operate the die-cutting machine to punch saree box shapes at our Sivakasi factory.',
    metaKeywords:
      'scoring saree box, die cutting process, saree box die cutting machine, scoring process packaging',
    answerBlock:
      'Scoring is the process where the prepared die is fixed to a die-cutting machine, and laminated paperboard sheets are fed through it. The machine punches the die onto each sheet at regular frequency, cutting the outer shape and pressing fold lines simultaneously. This process is repeated for both top lid and bottom lid.',
    image: '/process/scoring-setup.png',
    imageAlt: 'Worker placing laminated paperboard sheet on die-cutting machine for scoring',
    sections: [
      {
        heading: 'How Scoring Works on the Factory Floor',
        content: [
          'Once the die is prepared, it is fixed to the die-cutting machine. Our worker takes a laminated paperboard sheet, places it on top of the machine, and the die-cut punches it at regular frequency.',
          'The worker feeds laminated sheets in a steady rhythm — placement, punch, remove, stack. This cycle repeats continuously. An experienced worker can process hundreds of sheets per hour.',
        ],
      },
      {
        heading: 'What Happens During Each Punch',
        content: [
          'In a single punch, two things happen simultaneously:',
        ],
        list: [
          'The cutting blades slice through the paperboard, cutting the outer shape',
          'The crease rules press into the board without cutting, creating fold lines',
        ],
        proTip:
          'Machine pressure calibration is critical. Too much pressure and the crease rules cut through instead of just creasing. Too little and the fold lines are weak, making box assembly difficult. We check pressure settings at the start of every new die setup and after every 500 sheets.',
      },
      {
        heading: 'Top Lid and Bottom Lid',
        content: [
          'The same scoring process is followed for the bottom lid, but the die dimensions are slightly reduced so the bottom fits properly inside the top lid. The typical size reduction is 1–2mm on each side.',
          'After scoring, the excess paperboard around the cut shape (called "waste" or "skeleton") is removed, and the flat box blanks are stacked for the next stage — folding and gluing.',
        ],
      },
    ],
    faq: [
      {
        question: 'How fast is the die-cutting/scoring process?',
        answer:
          'On our machines, we can process 800–1,200 sheets per hour depending on box size and paperboard thickness. Larger boxes require more careful placement and slightly slower speed.',
      },
      {
        question: 'Why is the bottom lid slightly smaller than the top?',
        answer:
          'The bottom lid must fit inside the top lid when the box is closed. If both lids were the same size, the box would not close properly. We reduce the bottom die by 1–2mm on each side for a snug fit.',
      },
    ],
    relatedSlugs: ['die-preparing', 'paperboard-selection', 'thermal-lamination', 'saree-box-materials'],
  },
  {
    slug: 'saree-box-materials',
    title: 'Saree Box Materials: Paper Board Types & Selection Guide',
    metaTitle: 'Saree Box Materials | Paperboard Types, Backing, Coating & Weight Guide',
    metaDescription:
      'Complete guide to saree box materials. Learn about Grey Back vs White Back, Coated vs Uncoated, HWC vs LWC paperboard types used in saree box manufacturing from our Sivakasi factory.',
    metaKeywords:
      'saree box materials, paperboard types saree box, grey back white back, coated uncoated paperboard, HWC LWC packaging',
    answerBlock:
      'Saree boxes use paperboard classified by three attributes: backing type (Grey Back for economy, White Back for premium), coating type (Coated for vibrant printing, Uncoated for natural finish), and weight (HWC for sturdy boxes, LWC for lighter packaging). Your choice depends on budget, print quality needs, and box stiffness requirements.',
    sections: [
      {
        heading: 'Classification by Backing Type',
        content: [
          'The backing (inner layer) of the paperboard is the first decision point:',
        ],
        list: [
          'Grey Back (Recycled grey inner) — Uses recycled grey pulp for the inner layer. Cost-effective solution, used for general saree packaging where the inside of the box is not prominently visible',
          'White Back (Each side appears white) — White smooth inner layer providing a clean look. Used for premium packaging where both sides of the paperboard need to look bright and finished',
        ],
        proTip:
          'For saree boxes where the customer will open the box and see the inside (gift boxes, wedding boxes), always recommend White Back. For wholesale packaging where sarees are wrapped in tissue inside the box, Grey Back saves cost without visible compromise.',
      },
      {
        heading: 'Classification by Coating Type',
        content: [
          'The coating on the print side determines print quality:',
        ],
        list: [
          'Coated (Glossy for vibrant prints) — Has a chemical coating on one side creating a glossy, smooth surface for high-quality, vibrant printing. This is what you want for boxes with detailed logos, photographs, or multi-colour designs',
          'Uncoated (Natural finish) — No coating applied. Offers a natural, matte finish. Mostly used for less demanding general packaging where print quality is not the priority',
        ],
      },
      {
        heading: 'Classification by Weight / Finish',
        content: [
          'The weight class affects box stiffness and durability:',
        ],
        list: [
          'High Weight Coated (HWC) — Heavier and more robust. Good for sturdy boxes that need to hold their shape during shipping and stacking. Recommended for wholesale and export saree packaging',
          'Light Weight Coated (LWC) — Lighter, used for lighter packaging needs. Suitable for economy saree boxes or inner trays where maximum stiffness is not required',
        ],
        proTip:
          'We always ask clients about their distribution method before recommending material weight. If boxes are shipped via courier (Bluedart, Delhivery, etc.), we recommend HWC for better crush resistance. For local distribution where boxes are hand-delivered, LWC can save 15–20% on material cost.',
      },
    ],
    faq: [
      {
        question: 'Which paperboard type is best for premium saree boxes?',
        answer:
          'For premium saree boxes, we recommend White Back + Coated + HWC. This gives you a clean interior, vibrant print quality on the exterior, and sturdy construction that holds up during shipping and retail display.',
      },
      {
        question: 'What is the cheapest option for bulk saree box orders?',
        answer:
          'Grey Back + Coated + LWC is the most economical combination. You still get good print quality on the outside, but save on both the inner layer and material weight. Suitable for high-volume wholesale packaging.',
      },
    ],
    relatedSlugs: ['paperboard-selection', 'thermal-lamination', 'die-preparing', 'scoring-die-cutting'],
  },
];
