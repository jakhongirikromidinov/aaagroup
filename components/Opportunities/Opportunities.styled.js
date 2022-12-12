import styled from "styled-components";

const StyledOpportunities = styled.section`
	padding: 10rem 0;
	background: var(--bgColor);
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const MainTop = styled.div`
	display: flex;
	gap: 27rem;
	@media screen and (max-width: 1150px) {
		gap: 18rem;
	}
	@media screen and (max-width: 1050px) {
		gap: 13rem;
	}
	@media screen and (max-width: 1000px) {
		flex-direction: column;
		gap: 2rem;
		align-items: center;
		div:last-child {
			margin-left: 15rem;
		}
	}
	@media screen and (max-width: 500px) {
		div:last-child {
			margin-left: unset;
		}
	}
`;

export const MainHeader = styled.div`
	@media screen and (max-width: 1000px) {
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
	@media screen and (max-width: 1000px) {
		width: unset;
		margin-top: unset;
	}
`;

export const Title = styled.h2`
	font-size: 2.4rem;
	font-weight: 500;
	margin-bottom: 1rem;
	@media screen and (max-width: 1000px) {
		max-width: unset;
		text-align: center;
		font-size: 3rem;
		margin-bottom: 2rem;
	}
`;

export const Subtitle = styled.p`
	font-size: 1.6rem;
	span {
		display: block;
	}
	@media screen and (max-width: 1000px) {
		text-align: center;
	}
`;

export const Card = styled.div``;

export const MainBottom = styled.div`
	display: flex;
	justify-content: flex-end;
	@media screen and (max-width: 1000px) {
		justify-content: center;
	}
`;

export const CardsWrapper = styled.div`
	display: flex;
	gap: 2rem;
	@media screen and (max-width: 1000px) {
		flex-direction: column;
		gap: 2rem;
	}
`;

export default StyledOpportunities;
