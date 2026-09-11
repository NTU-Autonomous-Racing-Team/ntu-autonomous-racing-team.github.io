export interface PitNote {
  tag: string;
  /** Short date shown on the Home preview cards. */
  date: string;
  year: string;
  title: string;
  blurb: string;
  href: string;
  /** Card thumbnail shown on the Pit notes index (16:9 crop). */
  thumb: string;
  /** Set for cut-out thumbs, which must sit whole in the slot rather than fill it. */
  thumbContain?: boolean;
  featured?: boolean;
}

/** Newest first. Add new write-ups here and create a page under pit-notes/. */
export const pitNotes: PitNote[] = [
  {
    tag: "Recruitment",
    date: "Sep 11",
    year: "2026",
    title: "Build, learn, race: join NTU DeepSpeed",
    blurb:
      "Our Recruitment & Hackathon Info Talk is on 17 Sep 2026, 5–6 PM at TCT LT — come find out what it takes to put a 1/10 scale autonomous race car on track.",
    href: "/pit-notes/2026-recruitment/",
    thumb: "/assets/pit-notes/2026-recruitment/thumb.jpg",
    featured: true,
  },
  {
    tag: "Race report",
    date: "Sep 11",
    year: "2026",
    title: "Into the knockouts at IFAC 2026",
    blurb:
      "15th of 55 international teams and our first two head-to-head knockout wins — four days in Busan at the 29th RoboRacer competition, on a rebuilt car.",
    href: "/pit-notes/2026-ifac/",
    thumb: "/assets/pit-notes/2026-ifac/team-with-cars.jpg",
  },
  {
    tag: "Explainer",
    date: "Aug 27",
    year: "2026",
    title: "F1TENTH 101: a beginner's guide to autonomous racing",
    blurb:
      "What the 1/10-scale platform is, what's bolted to the car, and how a LiDAR scan turns into a steering angle — the short version, for anyone starting out.",
    href: "/pit-notes/f1tenth-101/",
    thumb: "/assets/car.webp",
    thumbContain: true,
  },
  {
    tag: "Race report",
    date: "Jul 23",
    year: "2026",
    title: "Racing the full stack at ICRA 2026",
    blurb:
      "6th of 78 in sim qualifying, top-10 on the physical track, and our complete autonomy pipeline's first race — five days at the 27th RoboRacer competition in Vienna.",
    href: "/pit-notes/2026-icra/",
    thumb: "/assets/pit-notes/2026-icra/team-with-car.jpg",
  },
];
