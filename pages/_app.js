import GlobalStyle from "../styles/Global.styled";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	return (
		<>
			<Head>
				{router.locale === "ru" && <title>Панель управления</title>}
				{router.locale === "uz" && <title>Boshqarish paneli</title>}
				{router.locale === "en" && <title>Control panel</title>}
			</Head>
			<Component {...pageProps} />
			<GlobalStyle />
		</>
	);
}

export default appWithTranslation(MyApp);
