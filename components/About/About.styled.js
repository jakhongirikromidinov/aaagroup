import styled from "styled-components";

const StyledAbout = styled.section`
	@media screen and (max-width: 1000px) {
		padding-top: 5rem;
	}
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	padding: 1rem;
	gap: 6rem;
	@media screen and (max-width: 1000px) {
		flex-direction: column;
		padding: 1rem;
		gap: 3.7rem;
	}
`;

export const AboutImage = styled.div``;

export const Main = styled.div`
	width: 60%;
	@media screen and (max-width: 1000px) {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const Suptitle = styled.label`
	position: relative;
	margin-bottom: 1.2rem;
	display: inline-block;
	font-family: var(--italicFont);
	border-radius: 24px;
	padding: 0rem 0.9rem;
	background: var(--accent);
	font-size: 2.4rem;
	font-weight: 400;
`;

export const Title = styled.h2`
	margin-bottom: 1rem;
	font-size: 3.2rem;
	font-weight: 600;
	position: relative;
	@media screen and (max-width: 1000px) {
		text-align: center;
	}
	@media screen and (max-width: 600px) {
		font-size: clamp(2.4rem, 5.4vw, 3.2rem);
	}
`;

export const Text = styled.p`
	font-size: 1.6rem;
	margin-bottom: 1.2rem;
	@media screen and (max-width: 1000px) {
		text-align: center;
	}
`;

export default StyledAbout;
