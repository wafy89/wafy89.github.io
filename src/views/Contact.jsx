import { useState } from 'react';

function Contact() {
	const [status, setStatus] = useState();
	const submitForm = (ev) => {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				setStatus('SUCCESS');
			} else {
				setStatus('ERROR');
			}
		};
		xhr.send(data);
	};
	return (
		<div
			className="mx-auto max-w-7xl pt-16 min-h-screen "
			id="contact"
		>
			<div className="pageTitleContainer">
				<div className="w-full bg-header-bg bg-contain  text-slate-600  dark:text-white text-5xl h-32 flex justify-center items-center font-medium">
					Contact Me
				</div>
			</div>
			<form
				onSubmit={submitForm}
				action="https://formspree.io/mbjzzlwz"
				method="POST"
				className="max-w-[990px] w-4/5 flex flex-col justify-center items-center mx-auto"
			>
				<div className=" mt-8 w-full flex flex-col justify-center items-stretch">
					<label className="text-slate-600 dark:text-white">NAME</label>
					<input
						onChange={() => setStatus('')}
						className="bg-white dark:bg-slate-300 h-8 outline-primary-yellow border-solid border-2 border-slate-100 dark:border-slate-500"
						type="text"
						name="name"
						placeholder="Type your name"
					></input>
				</div>
				<div className=" mt-8 w-full flex flex-col justify-center items-stretch">
					<label className="text-slate-600 dark:text-white">PHONE</label>
					<input
						onChange={() => setStatus('')}
						className="bg-white dark:bg-slate-300 h-8 outline-primary-yellow border-solid border-2 border-slate-100 dark:border-slate-500"
						type="text"
						name="phone"
						placeholder="Type your phone number"
					></input>
				</div>
				<div className=" mt-8 w-full flex flex-col justify-center items-stretch">
					<label className="text-slate-600 dark:text-white">EMAIL</label>
					<input
						onChange={() => setStatus('')}
						className="bg-white dark:bg-slate-300 h-8 outline-primary-yellow border-solid border-2 border-slate-100 dark:border-slate-500"
						type="email"
						name="email"
						placeholder="Type your email address"
					></input>
				</div>
				<div className=" mt-8 w-full flex flex-col justify-center items-stretch">
					<label className="text-slate-600 dark:text-white">YOUR MESSAGE</label>
					<textarea
						onChange={() => setStatus('')}
						className=" h-24 bg-white dark:bg-slate-300 outline-primary-yellow border-solid border-2 border-slate-100 dark:border-slate-500"
						name="message"
						placeholder="Type your message"
					></textarea>
				</div>
				{status === 'SUCCESS' ? <p>Thanks!</p> : ''}
				{status === 'ERROR' && (
					<p className="text-red-600">
						please fill all the field with valid date.
					</p>
				)}
				<div className="mt-8">
					<button
						type="submit"
						className="relative inline-flex w-72 items-center px-12 py-3 overflow-hidden text-lg font-medium text-primary-yellow border-2 border-primary-yellow rounded-md hover:text-white group hover:bg-gray-50"
					>
						<span class="absolute left-0 block w-full h-0 transition-all bg-primary-yellow opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
						<span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
							<svg
								class="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M14 5l7 7m0 0l-7 7m7-7H3"
								></path>
							</svg>
						</span>
						<span class="relative mx-auto">SEND</span>
					</button>
				</div>
			</form>
		</div>
	);
}

export default Contact;
