const skillsData = [
  {
    id: 1,
    name: "Hind Kick",
    tier: 1,
    value: 4350,
    image:
      "https://grumpygreen.cricket/old-site/images/horse-skill-hind-kick.png",
  },
  {
    id: 2,
    name: "Fore Chop",
    tier: 1,
    value: 4350,
    image:
      "https://grumpygreen.cricket/old-site/images/horse-skill-fore-chop.png",
  },
  {
    id: 3,
    name: "Drift",
    tier: 1,
    value: 2320500,
    image: "https://grumpygreen.cricket/old-site/images/horse-skill-drift.png",
  },
  {
    id: 4,
    name: "Sprint",
    tier: 1,
    value: 3315000,
    image: "https://grumpygreen.cricket/old-site/images/horse-skill-sprint.png",
  },
  {
    id: 5,
    name: "Start Accel",
    tier: 1,
    value: 4350,
    image:
      "https://grumpygreen.cricket/old-site/images/horse-skill-start-accel.png",
  },
  {
    id: 6,
    name: "High Jump",
    tier: 1,
    value: 86400,
    image:
      "https://grumpygreen.cricket/old-site/images/horse-skill-high-jump.png",
  },
  {
    id: 7,
    name: "Quick Stop",
    tier: 1,
    value: 105600,
    image:
      "https://grumpygreen.cricket/old-site/images/horse-skill-quick-stop.png",
  },
  {
    id: 8,
    name: "Instant Accel",
    tier: 1,
    value: 2320500,
    image:
      "https://grumpygreen.cricket/old-site/images/horse-skill-instant-accel.png",
  },
  {
    id: 9,
    name: "Charge",
    tier: 1,
    value: 1530000,
    image: "https://grumpygreen.cricket/old-site/images/horse-skill-charge.png",
  },
  {
    id: 10,
    name: "Sideways",
    tier: 5,
    value: 3836250,
    image:
      "https://grumpygreen.cricket/old-site/images/horse-skill-sideways.png",
  },
  {
    id: 11,
    name: "Quick Back",
    tier: 1,
    value: 79200,
    image:
      "https://grumpygreen.cricket/old-site/images/horse-skill-quick-back.png",
  },
  {
    id: 12,
    name: "Streak Leap",
    tier: 1,
    value: 144000,
    image:
      "https://grumpygreen.cricket/old-site/images/horse-skill-streak-leap.png",
  },
  {
    id: 13,
    name: "Roar",
    tier: 1,
    value: 264000,
    image: "https://grumpygreen.cricket/old-site/images/horse-skill-roar.png",
  },
  {
    id: 14,
    name: "Caution",
    tier: 1,
    value: 4350,
    image:
      "https://grumpygreen.cricket/old-site/images/horse-skill-caution.png",
  },
  {
    id: 15,
    name: "Quick Ride",
    tier: 1,
    value: 86625,
    image:
      "https://grumpygreen.cricket/old-site/images/horse-skill-quick-ride.png",
  },
  {
    id: 16,
    name: "S: Hind Kick",
    tier: 8,
    value: 226800,
    image:
      "https://grumpygreen.cricket/old-site/images/horse-skill-s-hind-kick.png",
  },
  {
    id: 17,
    name: "S: Fore Chop",
    tier: 8,
    value: 226800,
    image:
      "https://grumpygreen.cricket/old-site/images/horse-skill-s-fore-chop.png",
  },
  {
    id: 18,
    name: "S: Instant Accel",
    tier: 8,
    value: 10687500,
    image:
      "https://grumpygreen.cricket/old-site/images/horse-skill-s-instant-accel.png",
  },
  {
    id: 19,
    name: "S: Sideways",
    tier: 8,
    value: 10687500,
    image:
      "https://grumpygreen.cricket/old-site/images/horse-skill-s-sideways.png",
  },
  {
    id: 20,
    name: "Two-Seater",
    tier: 6,
    value: 4972500,
    image:
      "https://grumpygreen.cricket/old-site/images/horse-skill-two-seater.png",
  },
  {
    id: 21,
    name: "Courser's Sprint",
    tier: 9,
    value: 9562500,
    image:
      "https://grumpygreen.cricket/old-site/images/horse-skill-coursers-spirit.png",
  },
  {
    id: 22,
    name: "Double Jump",
    tier: 9,
    value: 13162500,
    image:
      "https://grumpygreen.cricket/old-site/images/horse-skill-double-jump.png",
  },
  {
    id: 23,
    name: "S: Charge",
    tier: 9,
    value: 12150000,
    image:
      "https://grumpygreen.cricket/old-site/images/horse-skill-s-charge.png",
  },
  {
    id: 24,
    name: "Earth of Life",
    tier: 9,
    value: 21375000,
    image:
      "https://grumpygreen.cricket/old-site/images/horse-skill-earth-of-life.png",
  },
  {
    id: 25,
    name: "Earth of Protection",
    tier: 9,
    value: 21937500,
    image:
      "https://grumpygreen.cricket/old-site/images/horse-skill-earth-of-protection.png",
  },
  {
    id: 26,
    name: "Wings of Wind",
    tier: 9,
    value: 21375000,
    image:
      "https://grumpygreen.cricket/old-site/images/horse-skill-wings-of-wind.png",
  },
  {
    id: 27,
    name: "Wings of Freedom",
    tier: 9,
    value: 21937500,
    image:
      "https://grumpygreen.cricket/old-site/images/horse-skill-wings-of-freedom.png",
  },
  {
    id: 28,
    name: "Dark Flame Steps",
    tier: 9,
    value: 21375000,
    image:
      "https://grumpygreen.cricket/old-site/images/horse-skill-dark-flame-steps.png",
  },
  {
    id: 29,
    name: "Dark Sprint",
    tier: 9,
    value: 21937500,
    image: "https://grumpygreen.cricket/old-site/images/dark-sprint.png",
  },
];

export default skillsData;
