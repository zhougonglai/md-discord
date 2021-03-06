import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
				<link
					href='https://cdn.bootcdn.net/ajax/libs/modern-normalize/0.6.0/modern-normalize.min.css'
					rel='stylesheet'></link>
			</Head>
			<header>test</header>
			<main className='container'>
				<input placeholder='****' type='password' />
			</main>
		</Layout>
	);
}
