import styled from "styled-components";

const StyledExperience = styled.section`
	background: var(--bgColor);
`;

export const Content = styled.div`
	padding-top: 5rem;
	padding-bottom: 7rem;
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 1000px) {
		display: none;
	}

	@media screen and (max-width: 1050px) {
		gap: 5rem;
	}
`;

export const Main = styled.div`
	width: 45%;
	@media screen and (max-width: 850px) {
		width: unset;
	}
`;

export const SupTitle = styled.label`
	margin-top: 14.5rem;
	position: relative;
	margin-bottom: 1.2rem;
	display: inline-block;
	font-family: var(--italicFont);
	border-radius: 24px;
	padding: 0rem 0.9rem;
	background: var(--accent);
	font-size: 2.4rem;
	font-weight: 400;
	::after {
		content: url("/images/experience_airplane_icon.png");
		position: absolute;
		top: -20px;
		right: -100px;
	}
	@media screen and (max-width: 1000px) {
		width: unset;
		margin-top: unset;
	}
`;

export const Title = styled.h2`
	margin-bottom: 1.2rem;
	font-size: 3.2rem;
	font-weight: 600;
	max-width: 42.6rem;
	@media screen and (max-width: 850px) {
		max-width: unset;
		font-size: clamp(2.8rem, 5vw, 3.2rem);
	}
`;

export const Subtitle = styled.p`
	font-size: 1.6rem;
	margin-bottom: 5rem;
	@media screen and (max-width: 850px) {
		max-width: unset;
		font-size: clamp(1.4rem, 5vw, 1.6rem);
	}
`;

export const FeaturesWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const FeaturesItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	label {
		width: 9.6rem;
		height: 4.8rem;
		display: flex;
		font-weight: 600;
		justify-content: center;
		align-items: center;
		border-bottom-right-radius: 200px;
		border-bottom-left-radius: 200px;
		background: var(--accent);
		font-size: ${({ lang }) =>
			lang === "uz" || lang === "ru" ? "1.6rem" : "2.4rem"};
		color: #ffff;
	}
	p {
		text-align: center;
		font-size: 1.6rem;
		font-weight: 600;
	}
	@media screen and (max-width: 850px) {
		width: 30%;
	}
	@media screen and (max-width: 420px) {
		label {
			width: 8rem;
			height: 4rem;
			font-size: ${({ lang }) =>
				lang === "uz" || lang === "ru" ? "1.4rem" : "2rem"};
		}
	}
`;

export const ExperienceImage = styled.div``;

export const ImageWrapper = styled.div`
	position: relative;
`;

export const LocationLabel = styled.label`
	position: absolute;
	top: 45%;
	right: -30px;

	display: flex;
	align-items: center;
	gap: 0.4rem;

	background: #ffff;
	padding: 1.1rem 1.7rem;
	box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
	border-radius: 8px;

	font-size: 1.6rem;
	color: var(--accent);
	font-weight: 600;
	@media screen and (max-width: 850px) {
		font-size: 1.4rem;
		padding: 0.4rem 1.1rem;
		right: -10px;
	}
	@media screen and (max-width: 400px) {
		right: -5px;
	}
`;
export const LocationIcon = () => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_132_2725)">
				<path
					d="M17.5 8.33331C17.5 14.1666 10 19.1666 10 19.1666C10 19.1666 2.5 14.1666 2.5 8.33331C2.5 6.34419 3.29018 4.43653 4.6967 3.03001C6.10322 1.62349 8.01088 0.833313 10 0.833313C11.9891 0.833313 13.8968 1.62349 15.3033 3.03001C16.7098 4.43653 17.5 6.34419 17.5 8.33331Z"
					stroke="#FF7E01"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M10 10.8333C11.3807 10.8333 12.5 9.71402 12.5 8.33331C12.5 6.9526 11.3807 5.83331 10 5.83331C8.61929 5.83331 7.5 6.9526 7.5 8.33331C7.5 9.71402 8.61929 10.8333 10 10.8333Z"
					stroke="#FF7E01"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_132_2725">
					<rect width="20" height="20" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export const MobileContent = styled.div`
	display: none;
	@media screen and (max-width: 1000px) {
		padding: 5rem;
		display: flex;
		gap: 3rem;
		flex-direction: column;
		align-items: center;
	}
`;

export const MobileHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h2 {
		text-align: center;
	}
`;

export default StyledExperience;
