import React from 'react';
import '../projectCard/Card.css';
import { motion } from 'framer-motion';
import { FaEye } from 'react-icons/fa';

function Card({ project }) {
	// const stack = project.stack.join(' - ');
	return (
		<motion.div
			initial={{ opacity: 0, translateY: 180 }}
			whileInView={{ opacity: 1, translateY: 0 }}
			transition={{ type: 'spring', duration: 1 }}
			viewport={{ once: true }}
			className='Card'
		>
			<img src={project.pic} alt={project.name} />
			<a href={project.link} className='view'>
				<FaEye />
			</a>
		</motion.div>
	);
}

export default Card;
