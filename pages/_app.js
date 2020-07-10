import '@/styles/index.scss';

// This default export is required in a new `pages/_app.js` file.
function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

// App.getInitialProps = async (appContext) => {
// 	const appProps = await App.getInitialProps(appContext);
// 	return { ...appProps };
// };

export default App;
