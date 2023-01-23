import styled from "styled-components";

const StyledLogin = styled.section`
	position: relative;
	background: var(--bgColor);
	height: 100vh;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.h2`
	text-align: center;
	margin-top: 5rem;
	margin-bottom: 10rem;
`;

export default StyledLogin;
