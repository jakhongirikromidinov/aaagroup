import styled from "styled-components";

const StyledBanner = styled.section`
	overflow: hidden;
	background: url("/images/banner_bg.png") top 100px left 60px no-repeat,
		var(--bgColor);
`;

export const Content = styled.div`
	display: flex;
	gap: 2.8rem;
	align-items: center;
	padding-bottom: 10rem;
	@media screen and (max-width: 1000px) {
		flex-direction: column;
		align-items: center;
		padding-bottom: 0;
	}
`;
export const Main = styled.div`
	margin-top: 24.4rem;
	width: 50%;
	@media screen and (max-width: 1000px) {
		margin-top: 15rem;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	@media screen and (max-width: 500px) {
		margin-top: 10rem;
	}
`;

export const SupTitle = styled.label`
	position: relative;
	margin-bottom: 1.2rem;
	display: inline-block;
	font-family: var(--italicFont);
	border-radius: 2.4rem;
	padding: 0rem 0.9rem;
	background: var(--accent);
	font-size: 2.4rem;
	font-weight: 400;
	::after {
		content: "";
		width: 171px;
		height: 117px;
		position: absolute;
		background: url("/images/banner_airplane.png") center center / cover
			no-repeat;
		top: -80px;
	}
	@media screen and (max-width: 1000px) {
		display: block;
	}
	@media screen and (max-width: 500px) {
		::after {
			width: 119.7px;
			height: 81.9px;
			top: -56px;
		}
	}
	@media screen and (max-width: 500px) {
		::after {
			width: 95.76px;
			height: 65.52px;
			top: -37px;
		}
	}
`;

export const Title = styled.h1`
	margin-bottom: 2rem;
	font-size: 4.8rem;
	font-weight: 500;
	max-width: 52rem;
	span {
		display: block;
	}
	@media screen and (max-width: 1000px) {
		text-align: center;
		width: 100%;
		max-width: unset;
	}
`;

export const Subtitle = styled.p`
	max-width: 45.7rem;
	font-size: 1.6rem;
	margin-bottom: 3.8rem;
	@media screen and (max-width: 1000px) {
		text-align: center;
		max-width: unset;
	}
`;

export const Form = styled.div`
	max-width: 39.2rem;
	background-color: #ffff;
	display: flex;
	flex-direction: column;
	padding: 2rem;
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
	border-radius: 2rem;
	@media screen and (max-width: 1000px) {
		margin: 0 auto;
	}
`;

export const FormLabel = styled.label`
	font-size: 1.6rem;
	margin-bottom: 2rem;
`;

export const FormInput = styled.input`
	border: none;
	padding: 0.5rem;
	opacity: 0.3;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	::placeholder {
		font-size: 1.6rem;
		color: #0b2727;
	}
`;

export const FormSubmitInput = styled.input`
	width: 50%;
	margin-top: 1rem;
	font-size: 1.6rem;
	padding: 1rem 4rem;
	border: none;
	color: #ffff;
	background: linear-gradient(90deg, #ff7e01 0%, #ff2f01 100%);
	border-radius: 10px;
`;

export const Images = styled.div`
	width: 50%;
	z-index: 1;
	margin-top: 20.4rem;
	display: flex;
	align-content: unset;
	gap: 1.6rem;
	@media screen and (max-width: 1000px) {
		margin-top: unset;
		width: 100%;
		justify-content: center;
	}
`;
export const DotsPosition = styled.div`
	position: absolute;
	z-index: -1;
	top: ${({ position }) => (position === "top" ? "-24px" : "unset")};
	left: ${({ position }) => (position === "top" ? "-26px" : "unset")};
	bottom: ${({ position }) => (position === "bottom" ? "-35px" : "unset")};
	right: ${({ position }) => (position === "bottom" ? "-42px" : "unset")};
	@media screen and (max-width: 1250px) {
		bottom: ${({ position }) => (position === "bottom" ? "-5px" : "unset")};
	}
	@media screen and (max-width: 1150px) {
		bottom: ${({ position }) => (position === "bottom" ? "55px" : "unset")};
	}
	@media screen and (max-width: 1050px) {
		bottom: ${({ position }) => (position === "bottom" ? "110px" : "unset")};
	}
	@media screen and (max-width: 1000px) {
		bottom: ${({ position }) => (position === "bottom" ? "-35px" : "unset")};
	}
`;

export const ImageWrapper = styled.div`
	position: relative;
	&:nth-of-type(2) {
		margin-top: 2.6rem;
	}
	&:nth-of-type(3) {
		margin-top: 5.2rem;
	}
`;

export default StyledBanner;
