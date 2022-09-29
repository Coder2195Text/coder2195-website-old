import { FC } from 'react'
import Link from '../components/link/Link'
import { NextSeo } from 'next-seo'

const Home: FC = () => {
	const title = "Coder2195 - Home"
	const description = "Welcome to Coder2195's website!!!"
	//to do add translations
	return (
		<div>
			<NextSeo 
				title={title} 
				description={description}
				openGraph={{
					title,
					description
				}}
			/>
			<h1 id='title'>Coder2195's Website</h1>
			<Link href='/projects'>Projects</Link>
			<br/>
			<Link href='/blog'>Blog</Link>
			<br/>
			<Link href='/socials'>Socials</Link>
		</div>
	)
}

export default Home
