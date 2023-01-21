import styled from "styled-components";

const StyledChoice = styled.section`
	background: var(--bgColor);
	padding: 10rem 0;
	@media screen and (max-width: 1000px) {
		padding: 5rem 0;
	}
`;

export const SectionHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	@media screen and (max-width: 1000px) {
		align-items: center;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	@media screen and (max-width: 1085px) {
		flex-direction: column;
	}
`;

export const Left = styled.div`
	@media screen and (max-width: 1085px) {
		width: 100%;
	}
`;

export const Right = styled.div`
	width: 50%;
	@media screen and (max-width: 1085px) {
		width: 100%;
	}
`;

export const SupTitle = styled.label`
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

export const Title = styled.div`
	width: 100%;
	font-size: 3.2rem;
	font-weight: 600;
	@media screen and (max-width: 1000px) {
		text-align: center;
	}
`;

export default StyledChoice;
