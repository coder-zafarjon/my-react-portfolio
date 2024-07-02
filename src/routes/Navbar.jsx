import React, { useState } from 'react';
import '../styles/Navbar.css';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';
import { FaAngleRight } from 'react-icons/fa';
import { MdCode } from 'react-icons/md';
import { socialNetworks } from '../../utils/constants';
import { motion } from 'framer-motion';

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	function toggleNavbar() {
		setIsOpen(!isOpen);
	}

	return (
		<header className='Navbar max-width'>
			<p className='logo'>
				<MdCode size={30} />
			</p>

			<div className={`nav-links ${isOpen && 'open'}`}>
				<NavLink to='/'>
					Home
					<FaAngleRight style={{ color: 'rgb(231, 231, 231)' }} />
				</NavLink>
				<NavLink to='/blog'>
					Blog
					<FaAngleRight />
				</NavLink>
				<NavLink to='/projects'>
					Projects
					<FaAngleRight />
				</NavLink>
				<NavLink to='/contact'>
					Contact
					<FaAngleRight />
				</NavLink>
				<div className='social social-navbar'>
					{socialNetworks.map((social, index) => (
						<NavLink key={index} className='s-item'>
							{social.network}
						</NavLink>
					))}
				</div>
			</div>

			<button className='menu-button' onClick={toggleNavbar}>
				{isOpen == false ? <FaBarsStaggered /> : <IoCloseSharp />}
			</button>
		</header>
	);
}

export default Navbar;
