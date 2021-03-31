import {
  CloudDownload,
  Code,
  Cog,
  CreditCard,
  Lightning,
  Lock,
  Sparkles,
  User,
} from './icons';

export const benefits = [
  {
    title: 'Build products faster',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A aculis at erat pellentesque adipiscing commodo. Faucibus pulvinar elementum integer enim neque volutpat ac.',
    icon: Lightning,
    image: `${process.env.PUBLIC_URL}/fast.jpg`,
  },
  {
    title: 'Focus on your product',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A aculis at erat pellentesque adipiscing commodo. Faucibus pulvinar elementum integer enim neque volutpat ac.',
    icon: Sparkles,
    image: `${process.env.PUBLIC_URL}/product.jpg`,
  },
];

export const features = [
  {
    title: 'Payments',
    description:
      'Amet facilisis magna etiam tempor orci eu lobortis. Pharetra pharetra massa massa ultricies.',
    icon: CreditCard,
  },
  {
    title: 'Authentication',
    description:
      'Amet facilisis magna etiam tempor orci eu lobortis. Pharetra pharetra massa massa ultricies.',
    icon: User,
  },
  {
    title: 'Role-based access control',
    description:
      'Amet facilisis magna etiam tempor orci eu lobortis. Pharetra pharetra massa massa ultricies.',
    icon: Lock,
  },
  {
    title: 'Powerful API',
    description:
      'Amet facilisis magna etiam tempor orci eu lobortis. Pharetra pharetra massa massa ultricies.',
    icon: Cog,
  },
  {
    title: 'Easy upgrades',
    description:
      'Amet facilisis magna etiam tempor orci eu lobortis. Pharetra pharetra massa massa ultricies.',
    icon: CloudDownload,
  },
  {
    title: 'Fully customizable',
    description:
      'Amet facilisis magna etiam tempor orci eu lobortis. Pharetra pharetra massa massa ultricies.',
    icon: Code,
  },
];

export const blogPosts = [
  {
    title: '5 React Custom Hooks You Should Start Using (Explained)',
    description:
      'Amet facilisis magna etiam tempor orci eu lobortis. Pharetra pharetra massa massa ultricies. Phasellus egestas tellus rutrum tellus pellentesque. Morbi blandit cursus risus at.',
    type: 'article',
    publishedAt: new Date(),
    timeToRead: 6,
    author: {
      displayName: 'Inès Emy',
      picture: `${process.env.PUBLIC_URL}/author-1.jpg`,
    },
    cover: `${process.env.PUBLIC_URL}/blog-post-1.jpg`,
  },
  {
    title: '5 Reasons Why YOU SHOULD LEARN React JS',
    description:
      'Amet facilisis magna etiam tempor orci eu lobortis. Pharetra pharetra massa massa ultricies. Phasellus egestas tellus rutrum tellus pellentesque. Morbi blandit cursus risus at.',
    type: 'video',
    publishedAt: new Date(),
    timeToRead: 8,
    author: {
      displayName: 'Christophe Amédée',
      picture: `${process.env.PUBLIC_URL}/author-2.jpg`,
    },
    cover: `${process.env.PUBLIC_URL}/blog-post-2.jpg`,
  },
  {
    title: '11 Awesome Resources To Bring Your React App To The Next Level',
    description:
      'Amet facilisis magna etiam tempor orci eu lobortis. Pharetra pharetra massa massa ultricies. Phasellus egestas tellus rutrum tellus pellentesque. Morbi blandit cursus risus at.',
    type: 'resource',
    publishedAt: new Date(),
    timeToRead: 11,
    author: {
      displayName: 'Carmen Mar',
      picture: `${process.env.PUBLIC_URL}/author-3.jpg`,
    },
    cover: `${process.env.PUBLIC_URL}/blog-post-3.jpg`,
  },
];

export const including = [
  'Nullam gravida elementum',
  'Mauris mauris neque',
  'Duis auctor tincidunt leo',
];

export const plans = [
  {
    name: 'Hobby',
    price: 79,
    frequency: 'month',
    including,
  },
  {
    name: 'Growth',
    price: 159,
    frequency: 'month',
    including,
    featured: true,
  },
  {
    name: 'Scale',
    price: 399,
    frequency: 'month',
    including,
  },
];

export const faq = [
  {
    question: 'Do you offer student discounts?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Commodo quis imperdiet massa tincidunt nunc pulvinar.',
  },
  {
    question: 'How can I get support?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Commodo quis imperdiet massa tincidunt nunc pulvinar.',
  },
  {
    question: 'Do I get access to the entire codebase?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Commodo quis imperdiet massa tincidunt nunc pulvinar.',
  },
  {
    question: 'Can I get a refund?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Commodo quis imperdiet massa tincidunt nunc pulvinar.',
  },
  {
    question: 'Anything else we can help with?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Commodo quis imperdiet massa tincidunt nunc pulvinar.',
  },
];

export const headerNavList = ['Solutions', 'Support', 'Company', 'Pricing'];

export const footerNavList = [
  {
    label: 'Solutions',
    links: ['Payments', 'Billing', 'Connect', 'Payouts'],
  },
  {
    label: 'Support',
    links: ['Pricing', 'Documentation', 'Guides', 'API status'],
  },
  {
    label: 'Company',
    links: ['About', 'Blog', 'Jobs', 'Press', 'Partners'],
  },
  {
    label: 'Legal',
    links: ['Privacy', 'Terms', 'Cookies'],
  },
];
