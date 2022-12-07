import styled from "styled-components";

const StyledOpportunities = styled.section`
	padding: 15.7rem 0;
	background: #fcf7fc;
`;

export const Content = styled.div`
	background: url("/images/opportunities_bg_image.png"),
		linear-gradient(90deg, #faa935 0%, rgba(250, 169, 53, 0) 100%);
	border-radius: 60px;
	position: relative;
	min-height: 44.44rem;
	padding: 6.8rem 9.1rem;
	:hover {
		.hat {
			top: 70px;
		}
	}
	@media screen and (max-width: 1000px) {
		background: linear-gradient(180deg, #faa935 0%, rgba(250, 169, 53, 0) 100%);
		padding: 3.8rem 4rem;
		:hover {
			.hat {
				top: 50px;
			}
		}
	}
	@media screen and (max-width: 600px) {
		padding: 2rem 4rem;
		padding-bottom: 1rem;
	}
`;

export const Main = styled.div``;

export const Title = styled.h2`
	font-size: 3.2rem;
	font-weight: 600;
	margin-bottom: 2rem;
	@media screen and (max-width: 600px) {
		font-size: clamp(2.4rem, 5.5vw, 3.2rem);
	}
`;

export const List = styled.ul`
	font-size: 1.6rem;
	li {
		margin-bottom: 1rem;
	}
	@media screen and (max-width: 600px) {
		li:last-child {
			font-size: 1.4rem;
		}
	}
`;

export const OpportunitiesImage = styled.div`
	position: absolute;
	/* top: -107px;
	 */
	top: -100px;
	right: 0;
	@media screen and (max-width: 1150px) {
		right: 0px;
	}
	@media screen and (max-width: 1000px) {
		position: relative;
		top: 8px;
		display: flex;
		justify-content: center;
	}
`;
export const OpportunitiesHatImage = styled.div`
	position: absolute;
	top: 131px;
	right: 247px;
	transition: 0.6s ease-in-out;
	@media screen and (max-width: 1000px) {
		top: 110px;
		right: 50%;
		transform: translateX(20%);
	}
	@media screen and (max-width: 600px) {
		top: 70px;
		transform: translateX(25%);
	}
	@media screen and (max-width: 500px) {
		top: 50px;
	}
	@media screen and (max-width: 500px) {
		top: 40px;
		transform: translateX(30%);
	}
`;

export default StyledOpportunities;
