import React from 'react';

function Project({
	githubLink,
	title,
	description,
	techstack,
	image,
	siteUrl,
}) {
	return (
		<div className="px-4  py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
			<div className="flex flex-col border-4 border-solid    dark:border-slate-800 max-w-screen-lg overflow-hidden bg-white  rounded-lg shadow-xl lg:flex-row sm:mx-auto">
				<div className="relative  lg:w-1/2">
					<img
						src={image}
						alt="Persons talking in a work setting."
						className=" shadow-inner bg-blend-darken object-cover w-full lg:absolute h-80 lg:h-full"
					/>
					<div className="absolute bg-gradient-to-b lg:bg-gradient-to-r  from-slate-300/10  to-white dark:to-slate-900  top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>

					<svg
						className="absolute top-0 dark:text-slate-800 right-0 hidden h-full text-white lg:inline-block"
						viewBox="0 0 20 104"
						fill="currentColor"
					>
						<polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104"></polygon>
					</svg>
				</div>
				<div className="flex flex-col justify-center p-8 bg-white dark:bg-slate-800 lg:p-16 lg:pl-10 lg:w-1/2">
					<div>
						{techstack.map((item) => (
							<p
								key={item}
								className="inline-block mx-1 px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary-yellow uppercase bg-primary-yellow/10 rounded-full"
							>
								{item}
							</p>
						))}
					</div>
					<h5 className="mb-3 text-3xl font-extrabold  dark:text-slate-300 leading-none sm:text-4xl">
						{title}
					</h5>
					<p className="py-5 mb-5 text-gray-800 dark:text-slate-300">
						<span className="font-bold">About Project</span> {description}
					</p>
					<div className="flex items-center">
						{siteUrl && (
							<a
								href={siteUrl}
								target="_blanck"
								className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-primary-yellow rounded-lg hover:bg-primary-yellow-light focus:shadow-outline focus:outline-none"
							>
								Website
							</a>
						)}
						<a
							href={githubLink}
							target="_blanck"
							aria-label=""
							className="inline-flex items-center dark:text-slate-300 text-lg underline transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
						>
							Github Code
							<svg
								className="inline-block w-2 ml-2"
								fill="currentColor"
								viewBox="0 0 12 12"
							>
								<path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Project;
