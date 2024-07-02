import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { myProjects } from '../../../utils/constants';
import Card from '../projectCard/Card';
import '../projects/Projects.css';
function Projects() {
	return (
		<div className='Projects max-width'>
			<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
				<Masonry columnsCount={3} gutter='10px'>
					{myProjects.map((project, index) => (
						<Card project={project} key={index} />
					))}
				</Masonry>
			</ResponsiveMasonry>
		</div>
	);
}

export default Projects;
