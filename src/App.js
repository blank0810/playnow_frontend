import { useEffect, useState } from 'react';
import './App.css';

export default function ComingSoon() {
	const [bgIndex, setBgIndex] = useState(2);

	useEffect(() => {
		const interval = setInterval(() => {
			setBgIndex(prev => (prev === 6 ? 2 : prev + 1));
		}, 2000); // 3 seconds

		return () => clearInterval(interval);
	}, []);

	return (
		<div
			className="coming-soon-container"
			style={{
				backgroundImage: `url(/images/${bgIndex}.svg)`
			}}
		>
			<div className="logo-wrapper">
				<img src="/images/main-logo.png" alt="Main Logo" className="main-logo" />
				<img
					src="/images/coming-soon.png"
					alt="Coming Soon"
					className="coming-soon-logo"
				/>
			</div>

			<p className="sports-buddy-text">- Your Sports Buddy -</p>

			<p className="partner-text">
				Partner with us. Email us at
				<a href="mailto:hello@playnow.ae" className="email-link">
					{' '}
					hello@playnow.ae
				</a>
			</p>

			<div className="socials-container">
				<p className="socials-text">Follow our socials and connect with us:</p>
			</div>
			<div className="socials-wrapper">
				<a
					href="https://www.instagram.com/playnow.ae/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src="/images/instagram.png" alt="Instagram" className="social-icon" />
				</a>
				<a
					href="https://www.facebook.com/profile.php?id=61567354175981"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src="/images/facebook.png" alt="Facebook" className="social-icon" />
				</a>
			</div>
		</div>
	);
}
