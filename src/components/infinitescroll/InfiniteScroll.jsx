import React from 'react';
import '../infinitescroll/InfiniteScroll.css';
import { skillsElements } from '../../../utils/constants';

function InfiniteScroll() {
	return (
		<div className='InfiniteScroll'>
			<div className='scroll'>
				<div>
					{skillsElements.map((item, index) => (
						<span key={index}>
							<b>{item.baseIcon}</b> <br /> <b>{item.stack}</b>
						</span>
					))}
				</div>
				<div>
					{skillsElements.map((item, index) => (
						<span key={index}>
							<b>{item.baseIcon}</b> <br /> <b>{item.stack}</b>
						</span>
					))}
				</div>
			</div>
		</div>
	);
}

export default InfiniteScroll;
