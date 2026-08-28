export const profile = {
  name: 'Simon Xiang',
  location: 'Seattle',
  email: 'simonzx.xiang@proton.me',
  github: 'https://github.com/simonxiang1',
  strava: 'https://www.strava.com/athletes/93955086',
} as const;

export const projects = [
  {
    name: 'inference-bench',
    href: 'https://github.com/simonxiang1/inference-bench',
    status: 'in progress',
    year: '2026',
    description: 'Learning how to serve and benchmark local LLMs (WIP).',
  },
  {
    name: 'KKLC Lookup',
    href: 'https://kanji.simonxiang.xyz',
    status: 'live',
    year: '2025',
    description:
      'A quick kanji lookup tool for the Kodansha Kanji Learner’s Course (KKLC), featuring OCR-powered mnemonics and smart search.',
  },
  {
    name: 'math notes',
    href: 'https://github.com/simonxiang1/math_notes',
    status: 'archive',
    year: '2020–23',
    description:
      'A collection of live-TeXed notes I took as an undergrad, spanning topics from algebraic topology to TQFTs.',
  },
  {
    name: 'dotfiles',
    href: 'https://github.com/simonxiang1/dotfiles',
    status: 'archive',
    year: '2021–23',
    description:
      'Configuration files for my Arch Linux setup. Although I daily drive MacOS now, some dotfiles are still in usage.',
  },
] as const;

export const recentReading = [
  { title: 'The Three-Body Problem trilogy', author: 'Cixin Liu' },
  { title: 'Norwegian Wood', author: 'Haruki Murakami' },
  { title: 'Never Let Me Go', author: 'Kazuo Ishiguro' },
  {
    title: 'Norwegian Singles Method (running)',
    author: 'James Copeland',
  },
  { title: 'The Death of Ivan Ilyich', author: 'Leo Tolstoy' },
  { title: 'The Stranger', author: 'Albert Camus' },
  { title: 'The Odyssey', author: 'Homer' },
] as const;

export const sesamePhotos = [
  {
    src: '/images/sesame-carousel/sesame-01.jpg',
    alt: 'Sesame curled inside a round cardboard scratcher beside the couch, looking at the camera',
    caption: '',
    width: 997,
    height: 949,
  },
  {
    src: '/images/sesame-carousel/sesame-02.jpg',
    alt: 'Sesame sitting in a laundry basket beside a pile of white clothes',
    caption: '',
    width: 1054,
    height: 1400,
  },
  {
    src: '/images/sesame-carousel/sesame-03.jpg',
    alt: 'Sesame lying between two couch cushions with his front paws stretched forward',
    caption: '',
    width: 1054,
    height: 1400,
  },
  {
    src: '/images/sesame-carousel/sesame-04.jpg',
    alt: 'Sesame curled asleep on a beige blanket with his paws tucked over his face',
    caption: '',
    width: 1200,
    height: 903,
  },
  {
    src: '/images/sesame-carousel/sesame-05.jpg',
    alt: 'Sesame wearing a teal harness while sitting upright at the top of his cat tree',
    caption: 'indoor summit, full equipment',
    width: 1054,
    height: 1400,
  },
  {
    src: '/images/sesame-carousel/sesame-06.jpg',
    alt: 'Sesame peeking over the back of a couch with only his eyes and ears visible',
    caption: 'stalker kitty',
    width: 788,
    height: 1400,
  },
] as const;
