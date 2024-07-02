import React from 'react';
import Navbar from './Navbar';
import Title from '../components/title/Title';
import Subtitle from '../components/title/Subtitle';
import { socialNetworks } from '../../utils/constants';
import { NavLink } from 'react-router-dom';

function ContactSection() {
	return (
		<div className='ContactSection'>
			<Navbar />
			<Title>Contact</Title>
			<Subtitle>Contact me through my accounts</Subtitle>

			<div className='contact-social'>
				{socialNetworks.map((social, index) => (
					<NavLink key={index} to={social.nlink}>
						{social.network}
					</NavLink>
				))}
			</div>
		</div>
	);
}

export default ContactSection;
