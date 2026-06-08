export interface Treatment {
  number: string;
  title: string;
  icon: string;
  description: string;
}

export const treatments: Treatment[] = [
  {
    number: "01",
    title: "Acne & Acne Scars",
    icon: "Droplets",
    description:
      "Active acne, hormonal breakouts, post-acne marks, and deep ice-pick scars — treated with a combination of clinical peels, topical protocols, and laser when needed.",
  },
  {
    number: "02",
    title: "Pigmentation & Melasma",
    icon: "Sun",
    description:
      "Uneven skin tone, dark patches, sun damage, and melasma addressed with targeted treatments that respect your natural complexion.",
  },
  {
    number: "03",
    title: "Anti-Ageing & Rejuvenation",
    icon: "Sparkles",
    description:
      "Fine lines, sagging skin, loss of volume, and dull texture — approached with non-surgical precision and long-term thinking.",
  },
  {
    number: "04",
    title: "Chemical Peels",
    icon: "Layers",
    description:
      "Medical-grade peels customised to your skin type — for texture, tone, acne, or general skin health. Not a one-size-fits-all approach.",
  },
  {
    number: "05",
    title: "Laser Treatments",
    icon: "Zap",
    description:
      "From hair reduction to pigmentation correction — our laser protocols are calibrated per skin tone and concern, not applied universally.",
  },
  {
    number: "06",
    title: "Hair Loss (Alopecia)",
    icon: "Wind",
    description:
      "PRP therapy, scalp analysis, and evidence-based hair restoration for both men and women. We address cause, not just symptom.",
  },
  {
    number: "07",
    title: "Under-Eye Treatment",
    icon: "Eye",
    description:
      "Dark circles, hollowness, puffiness — assessed individually. Not every under-eye concern has the same cause, and not every cause has the same fix.",
  },
  {
    number: "08",
    title: "Skin Hydration & Glow",
    icon: "Droplet",
    description:
      "Hydrafacials, mesotherapy, and IV skin boosters for those who want their skin to simply look healthy, rested, and alive.",
  },
  {
    number: "09",
    title: "Mole & Skin Tag Removal",
    icon: "Circle",
    description:
      "Safe, precise removal of benign moles, skin tags, and DPN — with proper assessment before every procedure.",
  },
  {
    number: "10",
    title: "Scar Revision",
    icon: "Activity",
    description:
      "Whether surgical, acne-related, or from injury — scar revision at Nirva Skin uses microneedling, fractional laser, and subcision.",
  },
  {
    number: "11",
    title: "Bridal Skin Packages",
    icon: "Calendar",
    description:
      "A structured 3–6 month pre-wedding skin programme designed around your wedding date, not a menu of random treatments.",
  },
  {
    number: "12",
    title: "Men's Dermatology",
    icon: "User",
    description:
      "Acne, pigmentation, hair loss, anti-ageing — the same science, designed for how men's skin works and how men want to be spoken to.",
  },
];
