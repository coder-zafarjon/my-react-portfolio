import React from 'react';
import {Typewriter} from 'react-simple-typewriter';

function Typer() {
	return (
		<Typewriter
			loop
			cursor
			cursorStyle='|'
			delaySpeed={2550}
			deleteSpeed={100}
			delayBetweenLoop={1000}
			words={['Frontend developer', 'UX/UI designer']}
		/>
	);
}

export default Typer;
