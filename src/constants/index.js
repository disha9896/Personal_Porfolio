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
  banana,
  person,
  prosecutors,
  research,
  notes,
  poker,
  reid_pdf,
  banana_pdf,
  research_pdf,
  lawyer_pdf,
  notes_pdf,

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
    title: 'Data Science',
    icon: frontend,
  },
  {
    title: 'Deep Learning',
    icon: backend,
  },
  {
    title: 'Computer Vision',
    icon: ux,
  },
  {
    title: 'Software Engineering',
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
    image: person,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: reid_pdf,
  },
  {
    id: 'project-2',
    name: 'Ripening  Classification',
    description:
      'The process of detecting a banana within an image and classifying it as either naturally or artificially ripened.',
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
    image: banana,
    repo: 'https://github.com/disha9896/Banana_classification',
    demo: banana_pdf,
  },
  {
    id: 'project-3',
    name: 'Research Work',
    description: 
    'Created an algorithm to automatically calculate number of clusters for K-Means algorithm and initializing initial clusters',
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
    image: research,
    repo: 'https://github.com/disha9896/Initial_centroid_kmeans-clusters-',
    demo: research_pdf,
  },
  {
    id: 'project-4',
    name: 'Prosecutors Portal',
    description: `A website for public prosecutors to register and manage their cases, calendar, case studies, and notifications.`,
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
    image: prosecutors,
    repo: 'https://github.com/disha9896/prosecutor-portal',
    demo: lawyer_pdf,
  },
  {
    id: 'project-5',
    name: 'Souvenir',
    description:
      'Java based web application similar to google keep. It can store notes, doodle, set email alerts and much more',
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
    image: notes,
    repo: 'https://github.com/disha9896/Notes_Management',
    demo: notes_pdf,
  },
  {
    id: 'project-6',
    name: 'Teen Patti',
    description:
      'Indian poker game web application which is very challanging but yet fun application.',
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
    image: poker,
    repo: 'https://github.com/disha9896/teenpatti/tree/main',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  }
];

export { services, technologies, experiences, projects };
