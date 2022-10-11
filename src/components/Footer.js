import React from 'react';

function Footer() {
	return (
		<div className="footerContainer">
			<h3>Contact info</h3>
			<div className="contactInfo">
				<div className="phone">
					<p> +49 1590 650 1550 </p>
					<p>Linkilstraße 35 </p>
					<p> 04159 Leipzig</p>
				</div>
				<div className="websites">
					<p> wafi.amer.17@gmail.com</p>
					<p>
						<a href="https://wafiamer.com">wafiamer.com</a>
					</p>
					<p>
						<a href="https://github.com/wafy89?tab=repositories">
							Github account
						</a>
					</p>
				</div>
			</div>
			<h3>
				Copyright © 2020 <span className="wafi"> Wafi Amer </span>
			</h3>
		</div>
	);
}

export default Footer;
