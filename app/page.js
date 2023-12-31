import Image from 'next/image'
import Script from 'next/script'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faThreads } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import Banner from '@/components/Banner'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between px-6 lg:px-12 2xl:px-20'>
			<Script src="https://www.googletagmanager.com/gtag/js?id=G-3PLN4Z5Q5L"/>
			<Script id="google-analytics">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-3PLN4Z5Q5L');
				`}
			</Script>
			<div className='z-20 bg-gradient-to-t from-clay via-clay/90 via-30% to-blue/0 w-full h-full fixed animate-fade'/>
			<div className='z-10 w-full h-full fixed'>	
				<Banner />
			</div>
			<div className='z-30 w-full text-sm animate-slide mt-52'>
				<h1 className='z-30 font-aware text-5xl md:text-7xl lg:text-8xl text-white border-b-8 border-pink pt-24 pb-2 w-fit'>
					BLOOD
					<br/>
					RUNNING
				</h1>
				<p className='text-lg lg:text-xl max-w-prose font-anonymous text-white object-contain my-12'>
					🩸 Run through the cyber-dystopian wasteland, plunder what you can, and bleed to <strong className='text-pink'>SURVIVE</strong>.
					<br/>
					<br/>
					✅ Add <strong className='text-pink'>BLOOD RUNNING</strong> to your <u><a href='https://store.steampowered.com/app/2641490/Blood_Running' rel='noreferrer' target='_blank' className='cursor-pointer button hover:button-hover'>Steam wishlist</a></u> and help us reach 10K. 
					<br/>
					<br/>
					✉️ Join our <u><a href='https://dashboard.mailerlite.com/forms/412044/97049765490984751/share' rel='noreferrer' target='_blank' className='cursor-pointer button hover:button-hover'>mailing list</a></u> and be the first to hear news about
					<br/>
					<strong className='text-pink'>BLOOD RUNNING</strong>.
					<br/>
				</p>
				<a href='https://store.steampowered.com/app/2641490/Blood_Running' rel='noreferrer' target='_blank' className='transition-colors duration-200 text-lg lg:text-2xl rounded-none font-anonymous object-contain bg-pink py-4 px-14 w-full md:w-auto md:max-w-xs text-clay hover:bg-white focus:shadow-outline'><strong>WISHLIST NOW</strong></a>
			</div>
			<footer className='z-30 w-full text-sm my-12 animate-fade'>
				<ul className='font-anonymous text-white flex flex-row space-x-3 lg:space-x-4 content-center'>
					<li className='text-s lg:text-l h-6 mr-auto'>© 2023 DEAD UNICORN INC.</li>
					<li><a href='https://discord.gg/X5kdyhAXVu' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faDiscord} className='h-6 w-auto button hover:button-hover'/></a></li>
					<li><a href='https://twitter.com/DeadUnicornInc' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faXTwitter} className='h-6 w-auto button hover:button-hover'/></a></li>
					<li><a href='https://www.instagram.com/deadunicorninc/' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faInstagram} className='h-6 w-auto button hover:button-hover'/></a></li>
					<li><a href='https://www.threads.net/deadunicorninc/' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faThreads} className='h-6 w-auto button hover:button-hover'/></a></li>
					<li><a href='https://www.youtube.com/c/DeadUnicorn' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faYoutube} className='h-6 w-auto button hover:button-hover'/></a></li>
					<li><a href='https://www.tiktok.com/@deadunicorninc' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faTiktok} className='h-6 w-auto button hover:button-hover'/></a></li>
				</ul>
			</footer>
		</main>
	)
}
