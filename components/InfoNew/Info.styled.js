import styled from "styled-components";

const StyledInfo = styled.section`
	background: var(--bgColor);
	position: relative;
	@media screen and (max-width: 1000px) {
		padding: 5rem 0;
	}
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	@media screen and (max-width: 1000px) {
		justify-content: center;
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

export const Title = styled.h2`
	width: 100%;
	font-size: 3.2rem;
	font-weight: 600;
	@media screen and (max-width: 1000px) {
		text-align: center;
		margin-bottom: 2rem;
	}
`;

export const Left = styled.div`
	width: 50%;
`;

export const Right = styled.div`
	width: 50%;
`;

export const InfoItem = styled.div`
	height: 530px;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 1.6rem;
	ol {
		margin-left: 6rem;
		font-size: 1.8rem;
		li {
			margin-bottom: 0.8rem;
		}
		span {
			font-weight: 700;
		}
	}
	ul {
		li {
			font-weight: 700;
		}
	}
	@media screen and (max-width: 1040px) {
		padding: 0rem;
	}
	@media screen and (max-width: 700px) {
		display: none;
	}
`;

export const ItemSuptitle = styled.label`
	display: block;
	font-size: 2rem;
	font-weight: 500;
	margin-bottom: 0.65rem;
`;

export const ItemTitle = styled.h3`
	font-size: 3.2rem;
	font-weight: 500;
	margin-bottom: 1.2rem;
	text-align: center;
`;

export default StyledInfo;
