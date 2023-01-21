import styled from "styled-components";

const StyledLogin = styled.section`
	position: relative;
	background: var(--bgColor);
`;

export const Content = styled.div`
	display: flex;
    min-height: 100vh;
`;

export const Title = styled.h2`
	width: 100%;
`;

export const Left = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
    justify-content: center;
	/* gap: 18.2rem; */
`;

export const Right = styled.div`
	width: 50%;
	::after {
		content: "";
		width: 50%;
		height: 100vh;
		position: absolute;
		top: 0;
		right: 0;
		background: url("/images/login_bg.png") center center / cover no-repeat;
	}
`;

export default StyledLogin;
