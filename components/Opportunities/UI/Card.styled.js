import styled from "styled-components";

const StyledCard = styled.div`
	position: relative;
	width: 28.8rem;
	height: 16.6rem;
	border-radius: 1.2rem;
	background: url(${({ background }) => background}) center center / cover
		no-repeat;
	label {
		background: rgba(255, 255, 255, 0.8);
		font-size: 1.6rem;
		padding: 1rem;
		border-radius: 1.2rem;
		position: absolute;
		bottom: 10px;
		left: 10px;
	}
	@media screen and (max-width: 1000px) {
		:nth-child(even) {
			margin-left: 15rem;
		}
	}
	@media screen and (max-width: 500px) {
		:nth-child(even) {
			margin-left: unset;
		}
	}
`;

export default StyledCard;
