import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { DotsWrapper } from "./Common.styled";

export const Layout = ({ children, footer }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer id="footer" footer={footer} />
		</>
	);
};
export const MakeDots = ({ amount }) => {
	let pieces = Array(amount).fill(null);
	return (
		<DotsWrapper>
			{pieces.map((span, index) => (
				<span key={index}></span>
			))}
		</DotsWrapper>
	);
};
