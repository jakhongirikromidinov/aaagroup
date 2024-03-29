import GlobalStyle from "../styles/Global.styled";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	return (
		<>
			<Head>
				{router.locale === "ru" && (
					<title>Туристичская компания AAA-Group</title>
				)}
				{router.locale === "uz" && (
					<title>AAA-Group Sayyohlik kompaniyasi</title>
				)}
				{router.locale === "en" && <title>AAA-Group Travel Company</title>}
			</Head>
			<Component {...pageProps} />
			<GlobalStyle />
		</>
	);
}

export default appWithTranslation(MyApp);
