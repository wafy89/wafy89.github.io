import React from 'react';

function Footer() {
	return (
		<div className="overflow-hidden  absolute w-full right-0 left-0 h-[30rem] flex justify-evenly flex-col items-stretch  bg-slate-200 dark:bg-slate-800 md:bg-footer bg-center bg-no-repeat bg-80 ">
			<h3 className="w-full text-slate-600 dark:text-white text-center md:text-2xl">
				Contact info
			</h3>
			<div className="flex flex-col justify-evenly items-center md:flex-row">
				<div className="phone">
					<p className=" text-slate-600 dark:text-white text-center md:text-2xl">
						{' '}
						+49 1590 650 1550{' '}
					</p>
					<p className=" text-slate-600 dark:text-white text-center md:text-2xl">
						Linkilstraße 35{' '}
					</p>
					<p className=" text-slate-600 dark:text-white text-center md:text-2xl">
						{' '}
						04159 Leipzig
					</p>
				</div>
				<div className="websites">
					<p className=" text-slate-600 dark:text-white text-center md:text-2xl">
						{' '}
						wafi.amer.17@gmail.com
					</p>
					<p className=" text-slate-600 dark:text-white text-center md:text-2xl">
						<a href="https://wafiamer.com">wafiamer.com</a>
					</p>
					<p className=" text-slate-600 dark:text-white text-center md:text-2xl">
						<a
							className="text-primary-yellow"
							href="https://github.com/wafy89?tab=repositories"
						>
							Github account
						</a>
					</p>
				</div>
			</div>
			<h3 className="w-full text-slate-600 dark:text-white text-center md:text-2xl">
				Copyright © 2020{' '}
				<span className="text-primary-yellow"> Wafi Amer </span>
			</h3>
		</div>
	);
}

export default Footer;
