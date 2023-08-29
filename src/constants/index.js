import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  brain,
  deeplearning,
  mysql,
  java,
  python,
  vision,
  pandas,
  numpy,
  opencv,
  keras,
  pytorch,
  sklearn,
  mongodb,
  django,
  flask,
  
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'work',
    title: 'Experiences',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'Machine Learning',
    icon: brain,
  },
  {
    name: 'Deep Learning',
    icon: deeplearning,
  },
  {
    name: 'Computer Vision',
    icon: vision,
  },
  {
    name: 'Pandas',
    icon: pandas,
  },
  {
    name: 'Numpy',
    icon: numpy,
  },
  {
    name: 'OpenCV',
    icon: opencv,
  },
  {
    name: 'Keras',
    icon: keras,
  },
  {
    name: 'PyTorch',
    icon: pytorch,
  },
  {
    name: 'scikit-learn',
    icon: sklearn,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'HTML',
    icon: html,
  },
  {
    name: 'CSS',
    icon: css,
  },
  {
    name: 'Java Script',
    icon: javascript,
  },
  {
    name: 'Django',
    icon: django,
  },
  {
    name: 'Flask',
    icon: flask,
  },
];

const experiences = [
  {
    title: 'Machine Learning Co-op',
    company_name: 'Rochester Institute of Technology',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'May 2023 - Present',
  },
  {
    title: 'Associate Software Engineer (AI & ML)',
    company_name: 'GlobalVox',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Jul 2020 - Jun 2022',
  },
  {
    title: 'Internship',
    company_name: 'GlobalVox',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Jan 2020 - Jun 2020',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Person Re-Identification',
    description: 'System labels the person who enters the building and tracks that person in different rooms and cameras.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Ripening  Classification',
    description:
      'The process of detecting a banana within an image and classifying it as either naturally or artificially ripened, utilizing data gathered from markets and farms.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Research Work',
    description: 'The research aimed at creating an algorithm for initializing the initial cluster centers and automatically calculating the number of clusters to form for K-Means algorithm.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Prosecutors Portal',
    description: `A website for public prosecutors to register and manage their cases, calendar, case studies, and notifications. An election module is also included for prosecutors to hold positions. An admin portal is available to manage the website's functionality. The website also has a forum to ask and answer questions about cases.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Souvenir',
    description:
      'An application similar to Google Keep which uses a MySQL database to store and retrieve notes, reminders, doodles. This application allows users to share notes with other users and set reminders to be sent via email. It also includes a feature of doodling and adding images to the notes. This application provides a convenient way to organize and share notes, reminders and doodles with others.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
  {
    id: 'project-6',
    name: 'Teen Patti',
    description:
      '',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
  {
    id: 'project-7',
    name: 'Teen Patti',
    description:
      '',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
