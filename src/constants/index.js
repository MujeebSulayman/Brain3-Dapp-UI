import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
	{
		id: '0',
		title: 'About',
		url: '/About',
	},
	{
		id: '1',
		title: 'Features',
		url: '/Features',
	},
	{
		id: '2',
		title: 'How to use',
		url: '/Use',
	},
	{
		id: '3',
		title: 'Roadmap',
		url: '/Roadmap',
	},
	{
		id: '4',
		title: 'Whitepaper',
		url: '/Whitepaper',
	},
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
	'Advanced Security for Your Chat',
	'Cutting-Edge Chat Protection',
	'Next-Level Security for Seamless Chat',
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
	{
		id: '0',
		title: 'Voice-to-Text',
		text: 'Convert spoken words into text in real time, making it easier for users to communicate hands-free and enhance their chat experience.',
		date: 'May 2024',
		status: 'done',
		imageUrl: roadmap1,
		colorful: true,
	},
	{
		id: '1',
		title: 'Gamification',
		text: 'Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the users more frequently.',
		date: 'May 2024',
		status: 'progress',
		imageUrl: roadmap2,
	},
	{
		id: '2',
		title: 'Chatbot customization',
		text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
		date: 'Coming Soon',
		status: 'progress',
		imageUrl: roadmap3,
	},
	{
		id: '3',
		title: 'Integration with APIs',
		text: 'Seamlessly connect with external data sources, such as weather or news APIs, to enrich chat conversations with relevant, real-time information and recommendations.',
		date: 'Coming Soon',
		status: 'progress',
		imageUrl: roadmap4,
	},
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
	{
		id: '0',
		title: 'Seamless Integration',
		text: collabText,
	},
	{
		id: '1',
		title: 'Smart Automation',
	},
	{
		id: '2',
		title: 'Top-notch Security',
	},
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
	{
		id: '0',
		title: 'Real-Time Interaction',
		text: 'Supports instant, real-time communication with Web3 protocols for fast and reliable chat experiences.',
		backgroundUrl: './src/assets/benefits/card-1.svg',
		iconUrl: benefitIcon1,
		imageUrl: benefitImage2,
	},
	{
		id: '1',
		title: 'User-Driven Privacy',
		text: 'Gives users full control over data and privacy, ensuring conversations are confidential and secure.',
		backgroundUrl: './src/assets/benefits/card-2.svg',
		iconUrl: benefitIcon2,
		imageUrl: benefitImage2,
		light: true,
	},
	{
		id: '2',
		title: 'Web3-Enabled Connectivity',
		text: 'Offers seamless connectivity and user control through Web3, enhancing privacy and autonomy in your chats.',
		backgroundUrl: './src/assets/benefits/card-3.svg',
		iconUrl: benefitIcon3,
		imageUrl: benefitImage2,
	},
	{
		id: '3',
		title: 'Effortless Integration',
		text: 'Easily integrates with other Web3 services, providing a unified and functional chat experience.',
		backgroundUrl: './src/assets/benefits/card-4.svg',
		iconUrl: benefitIcon4,
		imageUrl: benefitImage2,
		light: true,
	},
	{
		id: '4',
		title: 'Decentralized Conversations',
		text: 'Leverages Web3 technology to ensure secure, decentralized communication. Enjoy private and transparent interactions.',
		backgroundUrl: './src/assets/benefits/card-5.svg',
		iconUrl: benefitIcon1,
		imageUrl: benefitImage2,
	},
	{
		id: '5',
		title: 'Smart Contract Support',
		text: 'Employs smart contracts for secure and automated interactions, ensuring trust and transparency in communication.',
		backgroundUrl: './src/assets/benefits/card-6.svg',
		iconUrl: benefitIcon2,
		imageUrl: benefitImage2,
	},
];

export const socials = [
	{
		id: '0',
		title: 'Discord',
		iconUrl: discordBlack,
		url: '#',
	},
	{
		id: '1',
		title: 'Twitter',
		iconUrl: twitter,
		url: 'https://x.com/TheHemjay',
	},
	{
		id: '2',
		title: 'Instagram',
		iconUrl: instagram,
		url: 'https://www.instagram.com/thehemjay_/',
	},
	{
		id: '3',
		title: 'Telegram',
		iconUrl: telegram,
		url: 'https://t.me/+2347053250527',
	},
];
