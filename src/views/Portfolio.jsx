import Project from '../components/Project';
import Movie from '../assists/Movie1.png';
import Cocktail from '../assists/cocktail.png';
import Wafi from '../assists/wafi.png';
import Api from '../assists/api.png';
import Philipp from '../assists/philipp.png';
import Football from '../assists/lets-football.png';
function Portfolio() {
	const Projects = [
		{
			githubLink: 'https://github.com/wafy89/lets-football-app',
			title: 'Lets football',
			description:
				'full-stack application to create and join football events with login',
			techstack: [
				'Remix JS',
				'Prisma',
				'Tailwind',
				'bycribt',
				'Heruku',
				'netlify',
			],
			image: Football,
			siteUrl: 'https://football-events-app.netlify.app/',
		},
		{
			githubLink: 'https://github.com/wafy89/MovieApp',
			title: 'Movie App',
			description:
				'Frontend Application using open api to display trend movies with actors',
			techstack: ['React', 'ReactRouter', 'Styled Components'],
			image: Movie,
			siteUrl: 'https://wafiamer.com/MovieApp/',
		},
		{
			githubLink: 'https://github.com/LuayMallak/cocktailmaster',
			title: 'Cocktail Master',
			description:
				'Frontend Application using open api to display Cocktails with ingridients',
			techstack: ['React', 'ReactRouter', 'Material UI Components'],
			image: Cocktail,
			siteUrl: 'https://wafiamer.com/cocktail-master-app/',
		},
		{
			githubLink: 'https://github.com/wafy89/Philipp',
			title: 'Philipp',
			description:
				'A website about my son includes some images and information',
			techstack: ['HTML5', 'CSS', 'Vanilla JS', 'Glider.js'],
			image: Philipp,
			siteUrl: 'https://competent-fermat-dfa6e3.netlify.app/',
		},
		{
			githubLink: 'https://github.com/wafy89/HTML-CSS-PORTFOLIO',
			title: 'HTML-CSS-PORTFOLIO',
			description: 'light personal portfolio implemented as course project',
			techstack: ['HTML5', 'CSS'],
			image: Wafi,
			siteUrl: 'https://wafiamer.com/HTML-CSS-PORTFOLIO/',
		},
		{
			githubLink: 'https://github.com/wafy89/Todo-API',
			title: 'Todo API',
			description: ' an Express Server for a Todo-APP',
			techstack: ['express', 'Mongoose', 'JWT Token'],
			image: Api,
			siteUrl: '',
		},
	];
	return (
		<div
			className="mx-auto max-w-7xl pt-16 min-h-screen "
			id="portfolio"
		>
			<div className="pageTitleContainer">
				<div className="w-full bg-header-bg bg-contain  text-slate-600  dark:text-white text-5xl h-32 flex justify-center items-center font-medium">
					Portfolio
				</div>
				<div>
					{Projects.map((project) => (
						<Project
							key={project.title}
							githubLink={project.githubLink}
							title={project.title}
							description={project.description}
							techstack={project.techstack}
							image={project.image}
							siteUrl={project.siteUrl}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
