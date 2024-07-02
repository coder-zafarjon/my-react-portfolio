import React from 'react';
import '../styles/HeroSection.css';
import Navbar from './Navbar';
import Typer from '../components/textTyper/Typer';
import Button from '../components/button/Button';
import { IoDocumentText } from 'react-icons/io5';
import { AiFillProject } from 'react-icons/ai';
import InfiniteScroll from '../components/infinitescroll/InfiniteScroll';
import Title from '../components/title/Title';
import Subtitle from '../components/title/Subtitle';
import Projects from '../components/projects/Projects';
import { motion } from 'framer-motion';
import { socialNetworks } from '../../utils/constants';
import { NavLink } from 'react-router-dom';

function HeroSection() {
	return (
		<div className='HeroSection max-width'>
			<Navbar />
			<div className='wrapper'>
				<div className='home-content'>
					<motion.p
						initial={{ opacity: 0, translateX: 180 }}
						animate={{ opacity: 1, translateX: 0 }}
						transition={{ type: 'spring', duration: 2, delay: 0.3 }}
					>
						<span>Hi, there!&#128522; </span>
					</motion.p>
					<motion.p
						initial={{ opacity: 0, translateX: -180 }}
						animate={{ opacity: 1, translateX: 0 }}
						transition={{ type: 'spring', duration: 2, delay: 0.6 }}
					>
						<b>I'm Zafarjon Obidov</b> <br />
					</motion.p>
					<motion.p
						initial={{ opacity: 0, translateX: 180 }}
						animate={{ opacity: 1, translateX: 0 }}
						transition={{ type: 'spring', duration: 2, delay: 0.9 }}
					>
						<span>
							{/* <Typer /> */}
							Frontend developer
						</span>
					</motion.p>
					<div className='home-buttons'>
						<motion.div
							initial={{ opacity: 0, translateY: 180 }}
							animate={{ opacity: 1, translateY: 0 }}
							transition={{ type: 'spring', duration: 2, delay: 1 }}
						>
							<Button>
								<IoDocumentText />
								Resume
							</Button>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, translateY: 180 }}
							animate={{ opacity: 1, translateY: 0 }}
							transition={{ type: 'spring', duration: 2, delay: 1.2 }}
						>
							<Button>
								<AiFillProject />
								Projects
							</Button>
						</motion.div>
					</div>
				</div>
			</div>
			<InfiniteScroll />

			<div>
				<Title>Projects</Title>
				<Subtitle>Let's see my works!</Subtitle>
			</div>
			<Projects />
			<div>
				<Title>Contact</Title>
				<Subtitle>Contact me through my accounts</Subtitle>

				<div className='contact-social'>
					{socialNetworks.map((social, index) => (
						<NavLink key={index}>
							{social.network}
						</NavLink>
					))}
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
