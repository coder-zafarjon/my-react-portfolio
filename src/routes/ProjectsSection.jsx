import React from 'react';
import '../styles/ProjectsSection.css';
import Navbar from './Navbar';
import Projects from '../components/projects/Projects';
import Title from '../components/title/Title';
import Subtitle from '../components/title/Subtitle';

function ProjectsSection() {
	return (
		<div className='ProjectsSection'>
			<Navbar />
			<Title>Projects</Title>
			<Subtitle>Let's see my works!</Subtitle>
			<Projects />
		</div>
	);
}

export default ProjectsSection;
