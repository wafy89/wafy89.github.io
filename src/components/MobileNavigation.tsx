import React from 'react';
import NavItem from './NavItem.tsx';
function MobileNavigation({ scrollTo, activeLink, extend, navigationList }) {
	return extend ? (
		<div className="fixed transition ease-in-out delay-150 scale-100 duration-150 top-0 right-0 w-full h-screen z-2 pt-20 flex-col  justify-center items-center bg-white dark:bg-slate-800">
			{navigationList.map((item) => (
				<NavItem
					key={item}
					to={item}
					scrollTo={scrollTo}
					activeLink={activeLink}
				/>
			))}
		</div>
	) : null;
}

export default MobileNavigation;
