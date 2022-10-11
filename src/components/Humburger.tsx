import React from 'react';

function Humburger({ expend, setExpend }) {
	return (
		<div>
			<button
				className="relative group"
				onClick={() => setExpend(!expend)}
			>
				<div className="relative flex flex-col overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300   ring-opacity-30 duration-200 ">
					<div className="transform transition-all duration-150 overflow-hidden -translate-y-5 group-focus:translate-y-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 animate-bounce dark:text-white text-slate-800"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M5 15l7-7 7 7"
							/>
						</svg>
					</div>

					<div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden -translate-y-3">
						<div className="dark:bg-white bg-slate-800 mb-1.5 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>
						<div className="dark:bg-white  bg-slate-800 mb-1.5 h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
						<div className="dark:bg-white  bg-slate-800 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
					</div>
				</div>
			</button>
		</div>
	);
}

export default Humburger;
