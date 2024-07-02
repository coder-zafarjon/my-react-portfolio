import React from 'react';
import '../title/Title.css';
import { motion } from 'framer-motion';

function Title({ children }) {
	return (
		<motion.div
			className='Title max-width'
			initial={{ opacity: 0, translateX: -200 }}
			whileInView={{ opacity: 1, translateX: 0 }}
			transition={{ type: 'keyframes', duration: 0.5, delay: 0.1 }}
		>
			<p>{children}</p>
		</motion.div>
	);
}

export default Title;
