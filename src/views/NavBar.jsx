import logo from '../assists/logo4.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import MobileNavigation from '../components/MobileNavigation.jsx';
import NavItem from '../components/NavItem.jsx';
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
		if (isDarkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [isDarkMode]);

	const [extend, setExtend] = useState(false);
	const [activeLink, setActiveLink] = useState('');

	const navigationList = ['home', 'about', 'skills', 'portfolio', 'contact'];

	const scrollTo = (to) => {
		setActiveLink(to);
		setExtend(false);
	};

	const toggleDarkMode = (checked) => {
		setDarkMode(checked);
	};
	return (
		<>
			<nav className="z-50 px-2  bg-white dark:bg-slate-800 h-14 fixed w-screen top-0 left-0 flex justify-between shadow-md ">
				<DarkModeSwitch
					checked={isDarkMode}
					onChange={toggleDarkMode}
					className=" z-50 fixed top-4 left-2/4"
					sunColor="#1E313B"
					moonColor="white"
				/>
				<div className="h-full">
					<AnchorLink href="#home">
						<img
							className="block h-full"
							src={logo}
							alt="logo"
						/>
					</AnchorLink>
				</div>

				<div className="flex justify-end items-center gap-2 h-full">
					<div className="md:flex hidden justify-end gap-4 px-3 align-middle items-center  ">
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
							size={24}
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
