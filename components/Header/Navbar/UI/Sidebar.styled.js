import styled from "styled-components";

const StyledSidebar = styled.nav`
	position: fixed;
	overflow: hidden;
	z-index: 2;
	margin-top: 8.8rem;
	width: 100%;
	height: 100vh;
	background: #231807;
	top: 0;
	transition: 0.5s ease-in-out;
	right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const SidebarList = styled.ul`
	width: 100%;
	height: 75vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;

	li {
		color: #ffff;
		margin-top: 1rem;
		a {
			font-size: 2.4rem;
		}
	}
`;

export const SidebarPhone = styled.a`
	display: flex;
	gap: 0.7rem;
	align-items: center;
`;
export const SidebarLang = styled.ul`
	display: flex;
	.bold {
		font-weight: 700;
	}
	li {
		padding: 0 1rem;
		position: relative;
		::after {
			content: "";
			position: absolute;
			display: block;
			right: 0;
			bottom: 50%;
			transform: translateY(50%);
			width: 1px;
			height: 1.5rem;
			background-color: black;
		}
		:nth-child(3) {
			::after {
				display: none;
			}
		}
	}
`;

export default StyledSidebar;
