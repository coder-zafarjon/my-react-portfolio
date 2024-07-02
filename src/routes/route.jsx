import { createBrowserRouter } from 'react-router-dom';
import HeroSection from './HeroSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HeroSection />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/projects',
		element: <ProjectsSection />,
	},
	{
		path: '/contact',
		element: <ContactSection />,
	},
]);

export default router;
