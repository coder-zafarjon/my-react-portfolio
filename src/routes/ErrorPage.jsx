import React from 'react';
import '../styles/ErrorPage.css';
import ErrorPageImg from '../assets/images/errorpage.png';
import Button from '../components/button/Button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function ErrorPage() {
	const navigate = useNavigate();

	function handleHome() {
		navigate('/');
	}
	return (
		<div className='ErrorPage max-width'>
			<motion.img
				initial={{ scale: 0.7 }}
				animate={{ scale: 1 }}
				transition={{ type: 'spring', damping: 5 }}
				src={ErrorPageImg}
				alt='Error page img'
			/>
			<Button>
				<p onClick={handleHome}>Back to home</p>
			</Button>
		</div>
	);
}

export default ErrorPage;
