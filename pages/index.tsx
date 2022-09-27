import Head from 'next/head'
import Title from '../components/global/title/Title'
import { FC, useContext } from 'react'
import Link from '../components/global/link/Link'

const Home: FC = () => {
	//to do add translations
	return (
		<div>
			<Head>
				<title>Coder2195 - Home</title>
				<meta property="og:title" content="Coder2195 - Home" />
				<meta property="og:description" content="Welcome to Coder2195's personal website!!! " />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Title>Coder2195's Website</Title>
			<Link href='/blog'>Blog</Link>
			<br/>
			<Link href='https://scam.com'>Scam</Link>
		</div>
	)
}

export default Home
