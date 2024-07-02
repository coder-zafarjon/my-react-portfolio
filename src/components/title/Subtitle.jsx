import React from 'react';
import '../title/Title.css';
import { motion } from 'framer-motion';

function Subtitle({ children }) {
	return (
		<motion.div
			className='Subtitle'
			initial={{ opacity: 0, translateX: -200 }}
			whileInView={{ opacity: 1, translateX: 0 }}
			transition={{ type: 'keyframes', duration: 0.5, delay: 0.3 }}
		>
			<p>{children}</p>
		</motion.div>
	);
}

export default Subtitle;
