import { useState, useEffect } from 'react';
import Mobile from '../../../public/mobile.png';
import { Navbar } from '../Navbar/Navbar';
import Background from './Background.png';

function CommingSoon() {
	const initialUnixTimestamp = 1712505626; // Replace with your desired Unix timestamp for the target date  1714068000
	const [countdownValues, setCountdownValues] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const targetDate = new Date(initialUnixTimestamp * 1000);
		const now = new Date();
		const difference = targetDate - now;

		const calculateCountdown = () => {
			const now = new Date();
			const difference = targetDate - now;

			const days = Math.floor(difference / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((difference % (1000 * 60)) / 1000);

			setCountdownValues({ days, hours, minutes, seconds });
		};

		calculateCountdown();
		const countdownInterval = setInterval(calculateCountdown, 1000);

		return () => clearInterval(countdownInterval);
	}, [initialUnixTimestamp]);

	return (
		<>
			<div
				style={{
					backgroundImage: 'url(./Background.png)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<Navbar />
				<div className='hero min-h-screen'>
					<div className='hero-content flex-col lg:flex-row-reverse justify-center items-center '>
						<div className=''>
							<img
								src={Mobile}
								alt=''
								className='w-full max-w-md md:max-w-xl lg:max-w-2xl'
							/>
						</div>
						<div className='max-w-lg mr-[100px]'>
							<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#282828] py-2'>
								We Are Coming Soon!
							</h1>

							<p className='py-6 text-[#282828]'>
								Get ready to revolutionize your shopping journey like never
								before! We're thrilled to announce the upcoming launch of our
								innovative shopping app that will redefine how you shop online.
							</p>

							<div className='flex  md:flex-row items-center gap-5 text-[#282828]'>
								<div>
									<span className='countdown font-mono text-3xl md:text-4xl lg:text-5xl border border-[#FFD700] border-solid rounded-2xl py-3 px-3'>
										<span style={{ '--value': countdownValues.days }}></span>
									</span>
									<span className='block text-xs md:text-sm'>days</span>
								</div>
								<div>
									<span className='countdown font-mono text-3xl md:text-4xl lg:text-5xl border border-[#FFD700] border-solid rounded-2xl py-3 px-3'>
										<span style={{ '--value': countdownValues.hours }}></span>
									</span>
									<span className='block text-xs md:text-sm'>hours</span>
								</div>
								<div>
									<span className='countdown font-mono text-3xl md:text-4xl lg:text-5xl border border-[#FFD700] border-solid rounded-2xl py-3 px-3'>
										<span style={{ '--value': countdownValues.minutes }}></span>
									</span>
									<span className='block text-xs md:text-sm'>min</span>
								</div>
								<div>
									<span className='countdown font-mono text-3xl md:text-4xl lg:text-5xl border border-[#FFD700] border-solid rounded-2xl py-3 px-3'>
										<span style={{ '--value': countdownValues.seconds }}></span>
									</span>
									<span className='block text-xs md:text-sm'>sec</span>
								</div>
							</div>

							<div className='join my-5'>
								<input
									className='input input-bordered join-item bg-transparent border border-solid border-black rounded-none py-2 px-2 md:py-3 md:px-3 lg:py-4 lg:px-4'
									placeholder='Enter your Email Address'
									type='email'
								/>
								<button className='bg-gradient-to-r from-[#FFE86A] to-[#FFE86A] text-[#000000] font-bold py-2 px-4 md:py-3 md:px-5 lg:py-4 lg:px-6'>
									Send Email
								</button>
							</div>

							<div className='my-4'>
								<button className='bg-transparent text-black'>
									{'Aboutus >'}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default CommingSoon;
