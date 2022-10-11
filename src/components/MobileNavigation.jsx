import React from 'react';
import NavItem from './NavItem';
function MobileNavigation({ scrollTo, activeLink, extend, navigationList }) {
	return extend ? (
		<div className="fixed top-0 right-0 w-full pl-5 h-screen z-2 pt-20 flex-col  justify-center items-center bg-white dark:bg-slate-700">
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
