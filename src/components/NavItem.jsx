import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function NavItem({ scrollTo, activeLink, to }) {
	const capitlize = (string) => {
		return string[0].toUpperCase() + string.slice(1);
	};
	return (
		<div
			onClick={() => scrollTo(to)}
			className="text-lg "
		>
			<AnchorLink
				className={` transition duration-300 focus:outline-none focus:text-primary-yellow focus:underline hover:underline hover:text-primary-yellow underline-offset-8 ${
					activeLink === to
						? 'text-primary-yellow underline font-extrabold'
						: ' text-slate-900 dark:text-white'
				}`}
				href={'#' + to}
			>
				<p className="">{capitlize(to)}</p>
			</AnchorLink>
		</div>
	);
}

export default NavItem;
