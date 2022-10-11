import myImg from '../assists/wafi3.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Home() {
	return (
		<div
				className="flex-col flex md:flex-row justify-center md:justify-around w-full pt-16 md:items-center md:min-h-screen "
				id="home"
			>
				<div className="py-8 text-slate-600 align-start dark:text-white md:inline-block">
					<h2 className='text-7xl'>I’m Wafi</h2>
					<h4 className='text-xl font-medium dark:text-gray-300'>Frontend Web Developer</h4>
					<AnchorLink href="#contact">
						<button className="bg-primary-yellow align-start hover:bg-primary-yellow-light text-white font-bold py-2 px-4 rounded mt-8 w-60 h-12">Hire Me</button>
					</AnchorLink>
				</div>

				<div className="w-full flex justify-center md:w-1/3 md:inline-block mt-8">
					<img
						className="block  border-solid border-8 border-primary-yellow"
						src={myImg}
						alt="wafi"
					/>
				</div>
			</div>
	)
}

export default Home
