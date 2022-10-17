import Power from '../components/Skill';

function Skills() {
	const skills = [
		{ skillName: 'CSS', level: 80 },
		{ skillName: 'Remix JS', level: 50 },
		{ skillName: 'HTML', level: 85 },
		{ skillName: 'JavaScript', level: 95 },
		{ skillName: 'Vue', level: 95 },
		{ skillName: 'React', level: 85 },
		{ skillName: 'Node-js', level: 50 },
		{ skillName: 'Express', level: 50 },
		{ skillName: 'Mongoose', level: 50 },
		{ skillName: 'Prisma', level: 50 },
	];
	return (
		<div
			className="mx-auto max-w-7xl pt-16 "
			id="skills"
		>
			<div className="pageTitleContainer">
				<div className="bg-header-bg bg-contain  text-slate-600  dark:text-white text-5xl h-32 flex justify-center items-center font-medium">
					SKILLS
				</div>
			</div>
			<div className="flex justify-around flex-wrap">
				{skills.map((item) => (
					<Power
						key={item.skillName}
						value={item.level}
						label={item.skillName}
					/>
				))}
			</div>
		</div>
	);
}

export default Skills;
