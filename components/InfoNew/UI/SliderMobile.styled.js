import styled from "styled-components";

const StyledMobileSlider = styled.section`
	position: relative;
	overflow: hidden;
	min-height: 100vh;
	@media screen and (min-width: 700px) {
		display: none;
	}
`;

export const Content = styled.div`
	padding-top: 5rem;
	display: flex;
	flex-direction: column;
`;

export const TabsContainer = styled.div``;

export const TabsBlock = styled.div`
	display: flex;
	justify-content: space-around;
	border-radius: 8px;
	width: 1120px;
	max-width: 100%;
	.tab_active {
		color: var(--accent100);
		&:after {
			content: "";
			display: block;
			width: 75%;
			height: 6px;
			background: var(--accent100);
			border-radius: 4px 4px 0 0;
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-47%);
		}
	}
	@media screen and (max-width: 520px) {
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}
`;

export const TabsButton = styled.button`
	position: relative;
	border: 1px solid var(--accent);
	border-radius: 8px;
	width: 30%;
	align-items: center;
	gap: 1.2rem;
	padding: 2rem 3rem;
	font-size: 1.6rem;
	cursor: pointer;

	:hover {
		transition: 0.2s ease-in-out;
		color: var(--accent);
	}
	@media screen and (max-width: 520px) {
		width: 80%;
	}
`;

export const ContentContainer = styled.div`
	.active {
		display: block;
	}
`;

export const ContentBlock = styled.div`
	display: none;
	h3 {
		color: var(--primary100);
		font-size: 2.4rem;
		margin-bottom: 3.1rem;
	}
	ol {
		padding: 3rem;
		span {
			font-weight: 700;
		}
		ul {
			li {
				font-weight: 700;
			}
		}
	}
	li {
		font-size: 1.8rem;
		line-height: 150%;
		margin-bottom: 1rem;
	}
	@media screen and (max-width: 800px) {
		padding-top: 5rem;
	}
	.reverse {
		flex-direction: row-reverse;
	}
`;

export const ImageWrapper = styled.div`
	position: relative;
	width: 180px;
	height: 231px;
	border-radius: 66px;
	overflow: hidden;
`;

export const Images = styled.div`
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	gap: 2rem;
	@media screen and (max-width: 580px) {
		display: none;
	}
`;
export const InnerContentWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 3rem;
	ol {
		max-width: 70%;
	}
	@media screen and (max-width: 580px) {
		ol {
			max-width: 100%;
		}
	}
`;

export const Suptitle = styled.label`
	font-size: 2rem;
	font-weight: 500;
    display: block;
    text-align: center;
	margin-bottom: 0.65rem;
`;
export const Title = styled.h3`
	font-size: 3.2rem;
	font-weight: 500;
	margin-bottom: 1.2rem;
	text-align: center;
`;
export const DayTitle = styled.p`
	text-align: center;
	font-size: 2rem;
	font-weight: 600;
	margin-bottom: 0.5rem;
`;

export default StyledMobileSlider;
