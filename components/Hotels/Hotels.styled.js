import styled from "styled-components";

const StyledHotels = styled.section`
	background: var(--bgColor);
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5rem 0;
	@media screen and (max-width: 700px) {
		flex-direction: column;
	}
`;

export const Main = styled.div`
	width: 50%;
	@media screen and (max-width: 700px) {
		width: 100%;
	}
`;

export const Title = styled.h2`
	margin-bottom: 1rem;
	font-weight: 600;
	font-size: 3.2rem;
	@media screen and (max-width: 700px) {
		text-align: center;
	}
`;

export const Text = styled.div`
	margin-bottom: 2rem;
	p {
		margin-bottom: 1rem;
		font-size: 1.6rem;
	}
	@media screen and (max-width: 700px) {
		p {
			text-align: center;
		}
	}
`;

export const Button = styled.button`
	display: block;
	font-size: 1.8rem;
	padding: 0.55em 2.1em;
	background: var(--accent);
	color: #ffff;
	border-radius: 2.4rem;
	a {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	@media screen and (max-width: 700px) {
		margin: 0 auto;
	}
`;

export const Images = styled.div`
	width: 40%;
	display: flex;
	align-items: center;
	gap: 2.4rem;
	@media screen and (max-width: 700px) {
		display: none;
	}
`;

export const ButtonArrow = () => {
	return (
		<svg
			width="21"
			height="8"
			viewBox="0 0 21 8"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z"
				fill="white"
			/>
		</svg>
	);
};

export const ImagesBig = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const ImagesSmall = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export default StyledHotels;
