import { useEffect, useState } from 'react';
import './App.css';

export default function ComingSoon() {
    const [bgIndex, setBgIndex] = useState(2);
    const [bgLoaded, setBgLoaded] = useState(false);

    useEffect(() => {
        const preloadImages = (images) => {
            let loadedCount = 0;
            const totalImages = images.length;

            images.forEach((image) => {
                const img = new Image();
                img.src = image;
                img.onload = () => {
                    loadedCount++;
                    if (loadedCount === totalImages) {
                        setBgLoaded(true);
                    }
                };
                img.onerror = () => {
                    loadedCount++;
                    if (loadedCount === totalImages) {
                        setBgLoaded(true);
                    }
                };
            });
        };

        const imageUrls = [
            '/images/1.svg',
            '/images/2.svg',
            '/images/3.svg',
            '/images/4.svg',
            '/images/5.svg',
            '/images/6.svg',
            '/images/coming-soon.png',
        ];
        preloadImages(imageUrls);

        const interval = setInterval(() => {
            setBgIndex((prev) => {
                const nextIndex = prev === 6 ? 2 : prev + 1;
                console.log(`Switching to bgIndex: ${nextIndex}`); // Debug log
                return nextIndex;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className={`coming-soon-container ${bgLoaded ? 'fade-in' : ''}`}
            style={{
                backgroundImage: `url(/images/${bgIndex}.svg)`,
            }}
        >
            {!bgLoaded && <div className="loading">Loading...</div>}
            <div className='logo-wrapper'>
                <img
                    src='/images/main-logo.png'
                    alt='Main Logo'
                    className='main-logo'
                />
                <img
                    src='/images/coming-soon.png'
                    alt='Coming Soon'
                    className='coming-soon-logo'
                />
            </div>
            {bgLoaded && (
                <>
                    <p className='sports-buddy-text'>- Your Sports Buddy -</p>

                    <p className='partner-text'>
                        Partner with us. Email us at
                        <a href='mailto:hello@playnow.ae' className='email-link'>
                            {' '}
                            hello@playnow.ae
                        </a>
                    </p>

                    <div className='socials-container'>
                        <p className='socials-text'>
                            Follow our socials and connect with us:
                        </p>
                    </div>
                    <div className='socials-wrapper'>
                        <a
                            href='https://www.instagram.com/playnow.ae/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                src='/images/instagram.png'
                                alt='Instagram'
                                className='social-icon'
                            />
                        </a>
                        <a
                            href='https://www.facebook.com/profile.php?id=61567354175981'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                src='/images/facebook.png'
                                alt='Facebook'
                                className='social-icon'
                            />
                        </a>
                    </div>
                </>
            )}
        </div>
    );
}
