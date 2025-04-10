import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import ServicesSection from '@/components/services-section'
import TopDestinations from '@/components/top-destinations'

export default function Home() {
	return (
		<main className='container w-[90%] mx-auto bg-background text-foreground'>
			<Navbar />
			<Hero />
			<ServicesSection />
			<TopDestinations />
		</main>
	)
}
