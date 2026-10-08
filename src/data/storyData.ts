export interface Milestone {
  number: string;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
}

export const storyData = {
  sectionTag: "THE HERITAGE",
  headline: "THE AVANI STORY",
  lead: "What began as a quiet passion for authentic textiles and genuine customer care has blossomed over decades into a celebrated multi-branch fashion house.",
  paragraphs: [
    "Built step by step with tireless dedication, our journey started with a simple promise: to bring women clothing that honors both timeless craftsmanship and individual grace.",
    "Through decades of hands-on experience, we deepened our knowledge of weaves, fits, celebratory traditions, and evolving modern silhouettes. Rather than following transient fads, we listened closely to what women truly cherish for their weddings, milestones, everyday comfort, and motherhood.",
    "Today, AVANI stands as a premier multi-branch destination, guided by 100+ passionate team members and 10+ leadership stewards — serving generations of families who trust our quality, authenticity, and heartfelt care.",
  ],
  milestones: [
    {
      number: "01",
      phase: "THE FOUNDATION",
      title: "Humble Beginnings",
      subtitle: "A Passion for Authentic Textiles",
      description:
        "Started with a modest retail curation focused on handpicked fabrics, direct weaver connections, and building enduring relationships with local families.",
      badge: "ROOTS",
    },
    {
      number: "02",
      phase: "MASTERY & CRAFT",
      title: "Decades of Experience",
      subtitle: "Mastering Weaves, Fits & Nuances",
      description:
        "Years spent refining fabric selection — from pure bridal silks and hand-embroidered ethnic pieces to effortless western cuts and breathable maternity designs.",
      badge: "EXPERTISE",
    },
    {
      number: "03",
      phase: "RELATIONSHIPS",
      title: "Growing with Generations",
      subtitle: "Families Return for Every Milestone",
      description:
        "Grandmothers, mothers, and daughters choosing AVANI for their most cherished wedding celebrations, festival rituals, and everyday confidence.",
      badge: "TRUST",
    },
    {
      number: "04",
      phase: "THE PRESENT",
      title: "AVANI Today",
      subtitle: "A Multi-Branch Fashion Landmark",
      description:
        "An expansive multi-floor showcase with specialized wings, 100+ dedicated fashion consultants, and thousands of curated designs under one roof.",
      badge: "FLAGSHIP",
    },
  ] as Milestone[],
  trustKeywords: [
    { label: "QUALITY", desc: "Pure handlooms, verified zari, and uncompromised fabric standards" },
    { label: "DESIGN", desc: "Curated bridge between royal Indian heritage and crisp modern silhouettes" },
    { label: "VALUE", desc: "Honest, direct curation that respects customer confidence" },
    { label: "TRUST", desc: "Generations of families choosing us for their life's biggest celebrations" },
    { label: "EXPERIENCE", desc: "Decades of apparel expertise, personalized fittings, and warmth" },
  ],
  stats: [
    { value: "Decades", label: "Apparel Heritage", sublabel: "Continuous hands-on expertise" },
    { value: "100+", label: "Dedicated Staff", sublabel: "Passionate fashion stylists" },
    { value: "10+", label: "Store Leadership", sublabel: "Guiding customer excellence" },
    { value: "Multi-Branch", label: "Showroom Presence", sublabel: "Specialized fashion wings" },
  ],
};
