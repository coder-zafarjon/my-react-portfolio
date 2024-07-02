import {
	FaHtml5,
	FaCss3Alt,
	FaReact,
	FaBootstrap,
	FaFigma,
} from 'react-icons/fa';
import {
	SiJavascript,
	SiTailwindcss,
	SiJquery,
	SiRedux,
	SiReduxsaga,
	SiCanva,
	SiAxios,
} from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { FaTelegram, FaGithub, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { SiUpwork, SiSololearn } from 'react-icons/si';

export const skillsElements = [
	{
		baseIcon: <FaHtml5 />,
		stack: 'html',
	},
	{
		baseIcon: <FaCss3Alt />,
		stack: 'css',
	},
	{
		baseIcon: <SiJavascript />,
		stack: 'java script',
	},
	{
		baseIcon: <FaReact />,
		stack: 'react',
	},
	{
		baseIcon: <FaBootstrap />,
		stack: 'bootstrap',
	},
	{
		baseIcon: <SiTailwindcss />,
		stack: 'tailwind',
	},
	{
		baseIcon: <SiJquery />,
		stack: 'jquery',
	},
	{
		baseIcon: <SiRedux />,
		stack: 'redux',
	},
	{
		baseIcon: <SiReduxsaga />,
		stack: 'redux saga',
	},
	{
		baseIcon: <SiAxios />,
		stack: 'axios',
	},
	{
		baseIcon: <TbBrandFramerMotion />,
		stack: 'framer motion',
	},
	{
		baseIcon: <FaFigma />,
		stack: 'figma',
	},
	{
		baseIcon: <SiCanva />,
		stack: 'canva',
	},
];

export const myProjects = [
	{
		id: 1,
		name: 'Codium team website',
		link: 'https://www.figma.com/design/u6oeyNs4VkKDVijz4tFukj/CODIUM-Team-Portfolio-project?node-id=0-1&t=LhnjOcJSoXfVRtZD-1',
		stacks: ['Figma', 'Mockup', 'UI/UX'],
		pic: '/projects/project-1.png',
	},
	{
		id: 2,
		name: 'Music app design',
		link: 'https://www.figma.com/design/iU89Qf1EMVnJmQnHA2AjhF/Music-App-UI-by-Zafarjon?node-id=0-1&t=5riAF64jkBoDSRr0-1',
		stacks: ['Figma', 'Mockup', 'UI/UX'],
		pic: '/projects/project-2.png',
	},
	{
		id: 3,
		name: 'Tripadvisor clone',
		link: 'https://www.figma.com/design/e5BUtXZwLPuwyEezIbJ01o/Tripadviosor-redesign?node-id=0-1&t=cAhN1GOFCbEvVSre-1',
		stacks: ['Figma', 'Mockup', 'UI/UX'],
		pic: '/projects/project-3.png',
	},
	{
		id: 4,
		name: 'Meta talim website',
		link: 'https://www.figma.com/design/8GwZPQ9xKoz1qOCAGx23SA/Meta-talim---Website-dizayn?node-id=0-1&t=nc2yVp4pYX7ABGIC-1',
		stacks: ['Figma', 'Mockup', 'UI/UX'],
		pic: '/projects/project-4.png',
	},
	{
		id: 5,
		name: 'CRM design',
		link: 'https://www.figma.com/design/F1zfEQLgSk1wwOnJ4sa2tR/CRM-system-redesign?node-id=0-1&t=5MEX9OT9T456kCsZ-1',
		stacks: ['Figma', 'Mockup', 'UI/UX'],
		pic: '/projects/project-5.png',
	},
	{
		id: 6,
		name: 'Swedstandart website design',
		link: 'https://www.figma.com/design/tgqI1rJ2szHru9bFsBU2kK/Swedstandart-website-design?node-id=0-1&t=HY1bjNVHxojbQuCt-1',
		stacks: ['Figma', 'Mockup', 'UI/UX'],
		pic: '/projects/project-6.png',
	},
	{
		id: 7,
		name: 'Fortune portfolio website',
		link: 'https://www.figma.com/design/OISUvl7IKOKm9ku58bUZkn/Fortune-Portfolio-website?node-id=0-1&t=RsnPYl6SpUOBoqeE-1',
		stacks: ['Figma', 'Mockup', 'UI/UX'],
		pic: '/projects/project-7.png',
	},
	{
		id: 8,
		name: 'Yescoin clone',
		link: 'https://yescoinclone.netlify.app/',
		stacks: ['HTML', 'CSS', 'JS'],
		pic: '/projects/project-8.png',
	},
	{
		id: 9,
		name: 'Fortune portfolio website',
		link: 'https://fortunecompany.netlify.app/',
		stacks: ['HTML', 'CSS', 'JS'],
		pic: '/projects/project-9.png',
	},
	{
		id: 10,
		name: 'Swedstandart building company website',
		link: 'https://swedstandartwebsite.netlify.app/',
		stacks: ['HTML', 'CSS', 'JS'],
		pic: '/projects/project-6.png',
	},
	{
		id: 11,
		name: 'Bidcoin bot',
		link: 'https://bidcoinweb.netlify.app/',
		stacks: ['HTML', 'CSS', 'JS'],
		pic: '/projects/project-11.png',
	},
];

export const socialNetworks = [
	{
		network: <FaTelegram />,
		nlink: 'https://t.me/im_zafarjon',
	},
	{
		network: <RiInstagramFill />,
		nlink: 'https://www.instagram.com/coder_zafarjon/',
	},
	{
		network: <FaGithub />,
		nlink: 'https://github.com/coder-zafarjon',
	},
	{
		network: <FaYoutube />,
		nlink: 'https://www.youtube.com/channel/UClXJyTbpTKdXBlGd-Z2j4EA',
	},
	{
		network: <SiUpwork />,
		nlink: 'https://www.upwork.com/nx/search/talent/?nbs=1&q=zafarjon',
	},
];
