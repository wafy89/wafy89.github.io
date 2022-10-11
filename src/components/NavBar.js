import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../assists/logo4.png';
import { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import MobileNavigation from './MobileNavigation.tsx';
import NavItem from './NavItem.tsx';
function Navbar() {
	const [isDarkMode, setDarkMode] = useState(false);
	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setDarkMode(true);
		} else {
			setDarkMode(false);
		}
	}, []);

	useEffect(() => {
		console.log({ isDarkMode });
		if (isDarkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [isDarkMode]);

	const toggleDarkMode = (checked) => {
		setDarkMode(checked);
	};
	const [extend, setExtend] = useState(false);
	const [activeLink, setActiveLink] = useState('');
	//const [transform, setTransform] = useState(0);
	//const [scrolling, setScrolling] = useState(false);

	// const handleScroll = () => {
	// 	if (window.scrollY === 0 && scrolling === true) {
	// 		setScrolling(false);
	// 	} else if (window.scrollY !== 0 && scrolling !== true) {
	// 		setScrolling(true);
	// 	}
	// };
	const navigationList = ['home', 'about', 'skills', 'portfolio', 'contact'];
	const scrollTo = (to) => {
		setActiveLink(to);
		setExtend(false);
	};
	/*   updateSize(){
    if (window.innerWidth> 990 )this.setState({extend: true,})
  } */
	// useEffect(() => {
	// 	window.addEventListener('scroll', handleScroll);
	// 	/* window.addEventListener('resize', this.updateSize) */
	// }, []);

	return (
		<>
			<nav className="z-40 px-2  bg-white dark:bg-slate-800 h-14 fixed w-screen top-0 left-0 flex justify-between shadow-md ">
				<DarkModeSwitch
					checked={isDarkMode}
					onChange={toggleDarkMode}
					className=" z-50 fixed top-4 left-2/4"
					sunColor="#1E313B"
					moonColor="white"
				/>
				<div className="h-full">
					<a href="#home">
						<img
							className="block h-full"
							src={logo}
							alt="logo"
						/>
					</a>
				</div>

				<div className="flex justify-end gap-2 h-full">
					<div className="md:flex hidden justify-end gap-2 px-3 align-middle items-center h-full ">
						{navigationList.map((item) => (
							<NavItem
								key={item}
								to={item}
								scrollTo={scrollTo}
								activeLink={activeLink}
							/>
						))}
					</div>

					<div
						type="checkbox"
						className="md:hidden h-full mr-4"
					>
						<Hamburger
							toggled={extend}
							toggle={setExtend}
							color="#FAB632"
						/>
					</div>
				</div>
			</nav>{' '}
			<MobileNavigation
				extend={extend}
				scrollTo={scrollTo}
				activeLink={activeLink}
				navigationList={navigationList}
			/>
		</>
	);
}

export default Navbar;
