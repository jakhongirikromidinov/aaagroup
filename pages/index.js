import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Banner from "../components/Banner/Banner";
import { Layout } from "../components/Common/Common";
import Login from "../components/LoginPage/Login/Login";

const Home = () => {
	return (
		<>
			<Login />
		</>
	);
};
export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["login"])),
		},
	};
}
export default Home;
