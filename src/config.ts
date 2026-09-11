/** Site-wide configuration. */
export const SITE = {
  name: "NTU DeepSpeed",
  tagline: "NTU DeepSpeed · RoboRacer · Singapore",
  /** Shows the pulsing "Live" chip in the header on every page (race days). */
  showLiveChip: false,
  links: {
    github: "https://github.com/NTUDeepSpeed",
    instagram: "https://www.instagram.com/ntu_deepspeed/",
    linkedin: "https://www.linkedin.com/company/ntudeepspeed/",
    email: "mailto:ntu-deepspeed@e.ntu.edu.sg",
  },
  contact: {
    email: "ntu-deepspeed@e.ntu.edu.sg",
    instagramHandle: "@ntu_deepspeed",
    linkedinName: "NTU DeepSpeed",
    githubName: "NTUDeepSpeed",
    address: [
      "Hardware and Embedded Systems Lab (HESL)",
      "College of Computing and Data Science",
      "Nanyang Technological University",
      "50 Nanyang Avenue, Singapore 639798",
    ],
  },
} as const;

/**
 * Recruitment drive. Set `open: false` when the cycle closes — the Home "Join the team"
 * section falls back to its "follow us for the next round" state.
 */
export const RECRUITMENT = {
  open: true,
  registerUrl:
    "https://forms.cloud.microsoft/pages/responsepage.aspx?id=SJPOFSq-K0aPwOF2WpsgSukf7rRe1gBGr3DNE6jFH_hUNzlNT1VUTk5FWE5NRUdLV0c2VUszVjMzNiQlQCN0PWcu&route=shorturl",
  infoTalk: {
    date: "17 Sep 2026",
    time: "5:00 – 6:00 PM",
    venue: "TCT LT",
    /** The pit note carrying the poster and the full run-down. */
    href: "/pit-notes/2026-recruitment/",
  },
} as const;

export type PageId = "home" | "achievements" | "pit-notes" | "members" | "contact";

export const NAV_ITEMS: ReadonlyArray<{ id: PageId; label: string; href: string }> = [
  { id: "home", label: "Home", href: "/" },
  { id: "achievements", label: "Achievements", href: "/achievements/" },
  { id: "pit-notes", label: "Pit notes", href: "/pit-notes/" },
  { id: "members", label: "Members", href: "/members/" },
  { id: "contact", label: "Contact us", href: "/contact/" },
];
