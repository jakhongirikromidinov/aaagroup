import styled from "styled-components";

const StyledServices = styled.section`
	background: var(--bgColor);
	position: relative;
	z-index: 0;
	min-height: 40vh;
	@media screen and (max-width: 1000px) {
		min-height: unset;
		padding: 5rem 0;
	}
`;

export const Content = styled.div`
	display: flex;
	gap: 0.8rem;
	padding-top: 5rem;
	@media screen and (max-width: 1000px) {
		padding: 0 2.4rem;
		flex-direction: column;
		align-items: center;
		position: relative;
	}
`;

export const SectionHeader = styled.div``;

export const SupTitle = styled.label`
	position: relative;

	color: var(--labelGradient);
	font-family: var(--italicFont);
	font-size: 2.4rem;
	::before {
		content: "";

		position: absolute;
		top: -4px;
		left: -60px;

		background: url("/images/services_star_icon.png") center center / cover
			no-repeat;

		width: 4.2rem;
		height: 4.2rem;
	}
	@media screen and (max-width: 1000px) {
		font-size: 3rem;
		margin-bottom: 2rem;
		display: block;
		text-align: center;
		::before {
			left: 80px;
			width: 2.4rem;
			height: 2.4rem;
		}
	}
	@media screen and (max-width: 600px) {
		font-size: 1.6rem;
		margin-bottom: unset;
		text-align: left;
		::before {
			left: 40px;
		}
	}
`;

export const Title = styled.h2`
	font-size: 2.4rem;
	font-weight: 500;
	/* min-width: 26.8rem; */
	@media screen and (max-width: 1000px) {
		max-width: unset;
		font-size: 3rem;
		margin-bottom: 2rem;
	}
	@media screen and (max-width: 600px) {
	}
`;

export const ImageWrapper = styled.div`
	position: relative;
	margin-bottom: 2.4rem;
	width: 6rem;
	height: 6rem;
	left: 50%;
	transform: translateX(-50%);
`;

export const Cards = styled.div`
	display: flex;
	width: 70%;
	position: relative;
	gap: 2rem;
	::after {
		content: url("/images/services_arrow_down_icon.png");
		position: absolute;
		background: none;
		display: block;
		top: 135px;
		right: -56px;
		width: unset;
		height: unset;
	}
	@media screen and (max-width: 1000px) {
		flex-direction: column;
		align-items: center;
		width: 360px;
		::after {
			top: unset;
			bottom: -50px;
			right: -80px;
		}
	}
	@media screen and (max-width: 550px) {
		width: unset;
		::after {
			display: none;
		}
	}
`;

export const CardItem = styled.div`
	position: relative;
	background: var(--bgColor);
	padding: 2rem 2.5rem;
	border-radius: 12px;
	width: 300px;
	height: 25rem;
	border-radius: 12px;
	transition: 0.3s ease-in-out;
	h3 {
		margin-bottom: 1.2rem;
		font-size: 1.8rem;
	}
	p {
		font-size: 1.6rem;
	}

	::after,
	::before {
		content: "";
		position: absolute;
		top: 1px;
		border-radius: 12px;
		right: 0px;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			317.35deg,
			var(--accent100) 33.32%,
			rgba(255, 255, 255, 0) 55.87%
		);
		z-index: -1;
	}
	::before {
		top: 0px;
		right: -1px;
		background: linear-gradient(
			317.35deg,
			var(--accent100) 33.32%,
			rgba(255, 255, 255, 0) 55.87%
		);
	}
	:hover {
		margin-top: 30px;
		background: white;
		box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
		::after,
		::before {
			transition: 0.3s ease-in-out;
			display: none;
		}
	}
	@media screen and (max-width: 1000px) {
		:hover {
			margin-top: 0px;
			margin-left: 100px;
		}
	}
	@media screen and (max-width: 420px) {
		:hover {
			margin: 0;
		}
	}
`;

export default StyledServices;
