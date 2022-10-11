import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function NavItem({ scrollTo, activeLink, to }) {
	const capitlize = (string) => {
		return string[0].toUpperCase() + string.slice(1);
	};
	return (
		<div
			onClick={() => scrollTo(to)}
			className={`transform flex justify-center items-center duration-200  h-10  hover:text-orange-400 ${
				activeLink === to && 'text-primary-yellow font-semibold'
			} slate-800 dark:text-white`}
		>
			<AnchorLink
				className=""
				href={'#' + to}
			>
				<p className="">{capitlize(to)}</p>
			</AnchorLink>
		</div>
	);
}

export default NavItem;
